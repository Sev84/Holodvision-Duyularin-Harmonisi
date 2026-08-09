"use strict";

const tasks = [
  "Kullanım hakkı ve gizlilik onayını verip galeriden bir görsel yükleyin.",
  "Görseli ana-ara renk görünümüne dönüştürün ve ön betimlemeyi dinleyin.",
  "Otomatik bir beste oluşturun ve besteyi başlatıp durdurun.",
  "Besteyi cihaz arşivine kaydedin.",
  "Gönderi Stüdyosu'nda erişilebilir betimlemeyi kontrol edin.",
  "NSosyal gönderi metnini kopyalayın veya güvenli paylaşım ekranını açın.",
];

const susStatements = [
  "Bu uygulamayı sık kullanmak isteyebileceğimi düşünüyorum.",
  "Uygulamayı gereksiz yere karmaşık buldum.",
  "Uygulamanın kullanımını kolay buldum.",
  "Bu uygulamayı kullanabilmek için teknik bir kişinin desteğine ihtiyaç duyacağımı düşünüyorum.",
  "Uygulamadaki işlevlerin iyi biçimde bütünleştirildiğini düşünüyorum.",
  "Uygulamada fazla tutarsızlık olduğunu düşünüyorum.",
  "Çoğu kişinin bu uygulamayı çok hızlı öğrenebileceğini düşünüyorum.",
  "Uygulamayı kullanmayı çok zahmetli buldum.",
  "Uygulamayı kullanırken kendime güvendim.",
  "Uygulamayı kullanmadan önce çok şey öğrenmem gerektiğini düşünüyorum.",
];

const form = document.querySelector("#usability-form");
const status = document.querySelector("#test-status");

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function renderTasks() {
  document.querySelector("#task-list").innerHTML = tasks.map((task, index) => `
    <fieldset class="task-card">
      <legend>Görev ${index + 1}: ${escapeHtml(task)}</legend>
      <div class="task-fields">
        <label>Sonuç
          <select name="task${index + 1}Result" required>
            <option value="">Seçiniz</option>
            <option value="success">Bağımsız tamamladı</option>
            <option value="assisted">Yardımla tamamladı</option>
            <option value="failed">Tamamlayamadı</option>
          </select>
        </label>
        <label>Süre (saniye)
          <input name="task${index + 1}Seconds" type="number" min="0" max="1800" required />
        </label>
        <label>Gözlem notu
          <input name="task${index + 1}Note" type="text" maxlength="240" placeholder="Hata, duraksama veya kullanılan yardım" />
        </label>
      </div>
    </fieldset>`).join("");
}

function renderSus() {
  document.querySelector("#sus-list").innerHTML = susStatements.map((statement, index) => `
    <fieldset class="sus-item">
      <legend>${index + 1}. ${escapeHtml(statement)}</legend>
      <div class="scale-options">
        ${[1, 2, 3, 4, 5].map((score) => `<label><input type="radio" name="sus${index + 1}" value="${score}" required /><span>${score}</span></label>`).join("")}
      </div>
    </fieldset>`).join("");
}

function records() {
  try { return JSON.parse(localStorage.getItem("nsosyal-duyu-usability") || "[]"); }
  catch { return []; }
}

function calculateSus(data) {
  let total = 0;
  susStatements.forEach((_, index) => {
    const value = Number(data[`sus${index + 1}`]);
    total += index % 2 === 0 ? value - 1 : 5 - value;
  });
  return total * 2.5;
}

function formRecord() {
  const data = Object.fromEntries(new FormData(form).entries());
  const taskResults = tasks.map((task, index) => ({
    task,
    result: data[`task${index + 1}Result`],
    seconds: Number(data[`task${index + 1}Seconds`]),
    note: data[`task${index + 1}Note`] || "",
  }));
  return {
    schema: "nsosyal-duyu-usability-v1",
    recordedAt: new Date().toISOString(),
    participantCode: data.participantCode,
    profile: data.profile,
    device: data.device,
    assistiveTech: data.assistiveTech || "",
    consent: data.consent === "on",
    tasks: taskResults,
    susAnswers: susStatements.map((statement, index) => ({ statement, score: Number(data[`sus${index + 1}`]) })),
    susScore: calculateSus(data),
    feedback: { bestPart: data.bestPart || "", hardPart: data.hardPart || "", suggestion: data.suggestion || "" },
  };
}

function download(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function csvValue(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const record = formRecord();
  const current = records();
  current.push(record);
  localStorage.setItem("nsosyal-duyu-usability", JSON.stringify(current));
  status.textContent = `${record.participantCode} kaydı saklandı. SUS puanı ${record.susScore.toFixed(1)}. Toplam yerel kayıt: ${current.length}.`;
});

document.querySelector("#export-json").addEventListener("click", () => {
  const current = records();
  if (!current.length) { status.textContent = "Dışa aktarılacak kayıt bulunmuyor."; return; }
  download(JSON.stringify({ exportedAt: new Date().toISOString(), records: current }, null, 2), "NSosyal-DUYU-Kullanilabilirlik-Testleri.json", "application/json");
  status.textContent = `${current.length} doğrulanmış test kaydı JSON olarak dışa aktarıldı.`;
});

document.querySelector("#export-csv").addEventListener("click", () => {
  const current = records();
  if (!current.length) { status.textContent = "Dışa aktarılacak kayıt bulunmuyor."; return; }
  const headers = ["participantCode", "profile", "device", "assistiveTech", "success", "assisted", "failed", "averageSeconds", "susScore", "recordedAt"];
  const rows = current.map((record) => {
    const counts = { success: 0, assisted: 0, failed: 0 };
    record.tasks.forEach((task) => { counts[task.result] = (counts[task.result] || 0) + 1; });
    const averageSeconds = record.tasks.reduce((sum, task) => sum + Number(task.seconds || 0), 0) / record.tasks.length;
    return [record.participantCode, record.profile, record.device, record.assistiveTech, counts.success, counts.assisted, counts.failed, averageSeconds.toFixed(1), record.susScore.toFixed(1), record.recordedAt];
  });
  const csv = [headers, ...rows].map((row) => row.map(csvValue).join(",")).join("\n");
  download(`\uFEFF${csv}`, "NSosyal-DUYU-Kullanilabilirlik-Ozeti.csv", "text/csv;charset=utf-8");
  status.textContent = `${current.length} test kaydı CSV özeti olarak dışa aktarıldı.`;
});

document.querySelector("#clear-tests").addEventListener("click", () => {
  if (!confirm("Bu cihazdaki tüm anonim pilot test kayıtları silinsin mi?")) return;
  localStorage.removeItem("nsosyal-duyu-usability");
  status.textContent = "Tüm yerel test kayıtları silindi.";
});

renderTasks();
renderSus();
status.textContent = `Hazır. Bu cihazda ${records().length} anonim test kaydı bulunuyor.`;
