"use strict";

const artworks = [
  {
    id: "inci-original",
    title: "İnci Küpeli Kız",
    artist: "Johannes Vermeer",
    category: "original",
    categoryLabel: "Orijinal eser",
    image: "assets/images/inci-kupeli-kiz.jpg",
    audio: "assets/audio/inci-kupeli-kiz.mp3",
    description: "Koyu bir fonun önünde omzunun üzerinden izleyiciye bakan genç bir figür görülür. Mavi başörtüsü, sarı kumaş şeridi ve ışığı yakalayan inci küpe yüzü çevreleyen başlıca ayrıntılardır.",
    colors: [
      { name: "Gece laciverti", hex: "#12131d", note: 220 },
      { name: "Vermeer mavisi", hex: "#52699d", note: 293.66 },
      { name: "Altın sarısı", hex: "#c9a44b", note: 369.99 },
      { name: "İnci beyazı", hex: "#e8e1ce", note: 440 },
    ],
  },
  {
    id: "inci-pixel",
    title: "İnci Küpeli Kız · Piksel Yorum",
    artist: "PİKSENFONİ Atölyesi",
    category: "pixel",
    categoryLabel: "Piksel yorum",
    image: "assets/images/inci-kupeli-kiz-piksel.jpg",
    audio: "assets/audio/inci-kupeli-kiz.mp3",
    description: "İnci Küpeli Kız büyük renk kareleriyle yeniden kurulmuştur. Koyu lacivert zemin üzerinde sıcak ten tonları, parlak maviler ve altın sarıları görsel bir ritim oluşturur.",
    colors: [
      { name: "Derin lacivert", hex: "#08072f", note: 196 },
      { name: "Elektrik mavisi", hex: "#222df0", note: 261.63 },
      { name: "Ten şeftalisi", hex: "#f6b267", note: 329.63 },
      { name: "Altın", hex: "#e8ad25", note: 392 },
    ],
  },
  {
    id: "mona-original",
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    category: "original",
    categoryLabel: "Orijinal eser",
    image: "assets/images/mona-lisa.jpg",
    audio: "assets/audio/mona-lisa.mp3",
    description: "Ön planda ellerini birbiri üzerine koymuş sakin bakışlı bir kadın oturur. Arkasında kıvrılarak uzaklaşan yollar, sular ve sisli dağlardan oluşan düşsel bir manzara bulunur.",
    colors: [
      { name: "Zeytin yeşili", hex: "#73794d", note: 220 },
      { name: "Toprak kahvesi", hex: "#5a3b2d", note: 277.18 },
      { name: "Kehribar", hex: "#c49843", note: 329.63 },
      { name: "Gece moru", hex: "#2b2035", note: 415.3 },
    ],
  },
  {
    id: "mona-pixel",
    title: "Mona Lisa · Piksel Yorum",
    artist: "PİKSENFONİ Atölyesi",
    category: "pixel",
    categoryLabel: "Piksel yorum",
    image: "assets/images/mona-lisa-piksel.jpg",
    audio: "assets/audio/mona-lisa.mp3",
    description: "Mona Lisa'nın yüzü ve elleri altın sarısı karelerle; saçları ve giysisi bordo, mor ve gece mavisi bloklarla anlatılır. Üst bölümdeki yeşiller manzarayı çağrıştırır.",
    colors: [
      { name: "Canlı yeşil", hex: "#62c900", note: 246.94 },
      { name: "Güneş sarısı", hex: "#ffc228", note: 311.13 },
      { name: "Bordo", hex: "#781120", note: 369.99 },
      { name: "Gece moru", hex: "#190442", note: 466.16 },
    ],
  },
  {
    id: "olga-pixel",
    title: "Olga Portresi · Piksel Yorum",
    artist: "Pablo Picasso esinli PİKSENFONİ yorumu",
    category: "pixel",
    categoryLabel: "Piksel yorum",
    image: "assets/images/picasso-olga-piksel.jpg",
    audio: "assets/audio/picasso-olga.mp3",
    description: "Koyu kahverengi ve lacivert bir zemin üzerinde turkuaz, canlı yeşil ve sarı bloklar merkezdeki figürü kurar. Turuncu ve altın tonları baş bölümünde yükselir.",
    colors: [
      { name: "Turkuaz", hex: "#51bdc8", note: 233.08 },
      { name: "Canlı yeşil", hex: "#4bd417", note: 293.66 },
      { name: "Limon sarısı", hex: "#e2ea12", note: 349.23 },
      { name: "Kobalt mavisi", hex: "#25448d", note: 440 },
    ],
  },
];

const sensorColors = [
  { name: "Kırmızı", hex: "#ef4444", noteName: "Do", note: 261.63, vibration: [70, 35, 90] },
  { name: "Turuncu", hex: "#f97316", noteName: "Re", note: 293.66, vibration: [85, 35, 70] },
  { name: "Sarı", hex: "#facc15", noteName: "Mi", note: 329.63, vibration: [100, 45, 55] },
  { name: "Yeşil", hex: "#22c55e", noteName: "Fa", note: 349.23, vibration: [55, 30, 55, 30, 55] },
  { name: "Mavi", hex: "#3b82f6", noteName: "Sol", note: 392, vibration: [145] },
  { name: "Mor", hex: "#8b5cf6", noteName: "La", note: 440, vibration: [45, 25, 45, 25, 100] },
];

const musicalColors = [
  { name: "Kırmızı", rgb: [235, 45, 55], note: "Do", semitone: 0 },
  { name: "Turuncu", rgb: [245, 125, 30], note: "Re", semitone: 2 },
  { name: "Sarı", rgb: [245, 215, 35], note: "Mi", semitone: 4 },
  { name: "Yeşil", rgb: [40, 180, 80], note: "Fa", semitone: 5 },
  { name: "Turkuaz", rgb: [25, 185, 190], note: "Sol", semitone: 7 },
  { name: "Mavi", rgb: [50, 95, 225], note: "La", semitone: 9 },
  { name: "Mor", rgb: [135, 65, 190], note: "Si", semitone: 11 },
  { name: "Pembe", rgb: [235, 90, 165], note: "İnce Do", semitone: 12 },
];

const paletteTargets = [
  [235, 45, 55], [245, 125, 30], [245, 215, 35], [40, 180, 80],
  [25, 185, 190], [50, 95, 225], [135, 65, 190], [235, 90, 165],
  [25, 25, 35], [118, 118, 125], [244, 244, 238],
];

const socialPlatforms = {
  instagram: {
    label: "Instagram",
    hint: "Görsel odaklı, kısa açıklamalı ve erişilebilir betimlemeli gönderi biçimi.",
    hashtags: "#HARMONYSENSE #PİKSENFONİ #ErişilebilirSanat #KapsayıcıTasarım",
  },
  tiktok: {
    label: "TikTok",
    hint: "Kısa video veya görsel anlatımı için canlı, doğrudan ve ses deneyimini öne çıkaran metin.",
    hashtags: "#HARMONYSENSE #DuyusalSanat #Erişilebilirİçerik #SesliGörsel",
  },
  youtube: {
    label: "YouTube",
    hint: "Video ya da Shorts açıklaması için başlık, erişilebilir betimleme ve üretim bilgisi.",
    hashtags: "#HARMONYSENSE #PİKSENFONİ #Erişilebilirlik #DijitalSanat",
  },
  facebook: {
    label: "Facebook",
    hint: "Topluluk paylaşımı için anlaşılır, açıklayıcı ve katılıma davet eden gönderi.",
    hashtags: "#HARMONYSENSE #ErişilebilirSanat #DijitalKapsayıcılık #SosyalKatılım",
  },
  x: {
    label: "X",
    hint: "Ana mesajı ve erişilebilirlik bilgisini öne çıkaran kısa paylaşım biçimi.",
    hashtags: "#HARMONYSENSE #Erişilebilirlik",
  },
  linkedin: {
    label: "LinkedIn",
    hint: "Toplumsal etkiyi, kapsayıcı tasarımı ve açıklanabilir dönüşümü öne çıkaran profesyonel metin.",
    hashtags: "#HARMONYSENSE #InclusiveDesign #DigitalAccessibility #SocialInnovation",
  },
  whatsapp: {
    label: "WhatsApp",
    hint: "Kişi ve gruplarda kolay okunabilen kısa, doğrudan ve betimlemeli mesaj.",
    hashtags: "#HARMONYSENSE",
  },
  web: {
    label: "Web",
    hint: "Web sayfası ve bloglar için erişilebilir betimlemeyi öne alan yayın metni.",
    hashtags: "#HARMONYSENSE #PİKSENFONİ #WebErişilebilirliği #KapsayıcıTasarım",
  },
};

const elements = {
  gallery: document.querySelector("#gallery-grid"),
  dialog: document.querySelector("#art-dialog"),
  dialogImage: document.querySelector("#dialog-image"),
  dialogTitle: document.querySelector("#dialog-title"),
  dialogArtist: document.querySelector("#dialog-artist"),
  dialogCategory: document.querySelector("#dialog-category"),
  dialogDescription: document.querySelector("#dialog-description"),
  dialogPalette: document.querySelector("#dialog-palette"),
  dialogAudio: document.querySelector("#dialog-audio"),
  sensorButtons: document.querySelector("#sensor-buttons"),
  sensorOutput: document.querySelector("#sensor-output"),
  toast: document.querySelector("#toast"),
  guideStatus: document.querySelector("#guide-status"),
  backgroundMusic: document.querySelector("#background-music"),
  networkLabel: document.querySelector("#network-label"),
  rightsConsent: document.querySelector("#rights-consent"),
  fileInput: document.querySelector("#composer-file"),
  cameraInput: document.querySelector("#camera-file"),
  workspace: document.querySelector("#composer-workspace"),
  canvas: document.querySelector("#composer-canvas"),
  canvasWrap: document.querySelector("#canvas-wrap"),
  emptyCanvas: document.querySelector("#empty-canvas"),
  scanCursor: document.querySelector("#scan-cursor"),
  imageStatus: document.querySelector("#image-status"),
  musicStatus: document.querySelector("#music-status"),
  pixelSize: document.querySelector("#pixel-size"),
  pixelSizeValue: document.querySelector("#pixel-size-value"),
  tempo: document.querySelector("#tempo"),
  tempoValue: document.querySelector("#tempo-value"),
  instrument: document.querySelector("#instrument"),
  sceneDescription: document.querySelector("#scene-description"),
  analysisChips: document.querySelector("#analysis-chips"),
  dominantPalette: document.querySelector("#dominant-palette"),
  musicSheet: document.querySelector("#music-sheet"),
  compositionTitle: document.querySelector("#composition-title"),
  archiveGrid: document.querySelector("#archive-grid"),
  archiveEmpty: document.querySelector("#archive-empty"),
  shareReadiness: document.querySelector("#share-readiness"),
  shareTitle: document.querySelector("#share-title"),
  shareCaption: document.querySelector("#share-caption"),
  shareAlt: document.querySelector("#share-alt"),
  shareHashtags: document.querySelector("#share-hashtags"),
  shareDisclosure: document.querySelector("#share-disclosure"),
  shareRights: document.querySelector("#share-rights"),
  sharePreviewImage: document.querySelector("#share-preview-image"),
  sharePreviewText: document.querySelector("#share-preview-text"),
  sharePreviewAlt: document.querySelector("#share-preview-alt"),
  sharePreviewDisclosure: document.querySelector("#share-preview-disclosure"),
  previewPlatform: document.querySelector("#preview-platform"),
  platformHint: document.querySelector("#platform-hint"),
  publishShare: document.querySelector("#publish-share"),
};

const ctx = elements.canvas.getContext("2d", { willReadFrequently: true });
const state = {
  sourceImage: null,
  sourceName: "",
  sourceDataUrl: "",
  cells: [],
  activeView: "natural",
  analysis: null,
  sequence: [],
  guideEnabled: true,
  activeArtwork: artworks[0],
  cursorIndex: 0,
  playToken: 0,
  timers: [],
  nodes: [],
  audioContext: null,
  toastTimer: null,
  archiveDb: null,
  activePlatform: "instagram",
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function interfaceLanguage() {
  return window.DuyuI18n?.language || "en";
}

function localized(value) {
  return window.DuyuI18n?.t(String(value)) || String(value);
}

function localizedAnalysisDescription(analysis = state.analysis) {
  if (!analysis) return localized("Görsel analizi bulunmuyor.");
  const type = localized(analysis.type);
  const orientation = localized(analysis.orientation);
  const palette = analysis.palette.slice(0, 3).map((item) => localized(item.name)).join(", ");
  if (interfaceLanguage() === "tr") {
    return `${type}. Güven yüzde ${analysis.confidence}. Görsel ${orientation}; baskın renkler ${palette}. Ortalama parlaklık 255 üzerinden ${analysis.averageBrightness}.`;
  }
  if (interfaceLanguage() === "el") {
    return `${type}. Βεβαιότητα ${analysis.confidence}%. Η εικόνα είναι ${orientation}. Κυρίαρχα χρώματα: ${palette}. Μέση φωτεινότητα ${analysis.averageBrightness} από 255.`;
  }
  return `${type}. Confidence ${analysis.confidence}%. The image is ${orientation}. Dominant colours: ${palette}. Average brightness ${analysis.averageBrightness} out of 255.`;
}

function announce(message, speakMessage = false, vibration = [45]) {
  const localizedMessage = window.DuyuI18n?.t(message) || message;
  window.clearTimeout(state.toastTimer);
  elements.toast.textContent = localizedMessage;
  elements.toast.classList.add("visible");
  elements.guideStatus.textContent = localizedMessage;
  state.toastTimer = window.setTimeout(() => elements.toast.classList.remove("visible"), 3200);
  if (speakMessage && state.guideEnabled) speak(localizedMessage);
  if (vibration) vibrate(vibration);
}

function nativeBridge() {
  return window.AndroidBridge && typeof window.AndroidBridge === "object" ? window.AndroidBridge : null;
}

function speak(text) {
  if (!text) return;
  const localizedText = window.DuyuI18n?.t(String(text)) || String(text);
  const bridge = nativeBridge();
  if (bridge && typeof bridge.speak === "function") {
    bridge.speak(localizedText);
    return;
  }
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(localizedText);
  utterance.lang = window.DuyuI18n?.speechLanguage() || "en-US";
  utterance.rate = 0.93;
  window.speechSynthesis.speak(utterance);
}

function vibrate(pattern) {
  const safePattern = Array.isArray(pattern) ? pattern : [45];
  const bridge = nativeBridge();
  if (bridge && typeof bridge.vibrate === "function") {
    bridge.vibrate(safePattern.join(","));
    return;
  }
  if (navigator.vibrate) navigator.vibrate(safePattern);
}

function updateNetworkStatus() {
  const online = navigator.onLine;
  elements.networkLabel.textContent = online ? "Çevrimiçi" : "Çevrimdışı";
  elements.networkLabel.parentElement.querySelector("span").style.color = online ? "#14a36d" : "#ef7d34";
}

function requireConsent() {
  if (elements.rightsConsent.checked) return true;
  announce("Önce görsel kullanım ve gizlilik onay kutusunu işaretleyin.", true, [90, 40, 90]);
  elements.rightsConsent.focus();
  return false;
}

function loadImageElement(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Görsel açılamadı"));
    image.src = source;
  });
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Dosya okunamadı"));
    reader.readAsDataURL(file);
  });
}

async function handleImageFile(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    announce("Yalnızca JPG, PNG veya WebP görsel yükleyebilirsiniz.", true, [110, 50, 110]);
    return;
  }
  if (file.size > 15 * 1024 * 1024) {
    announce("Görsel 15 megabayttan küçük olmalı.", true, [110, 50, 110]);
    return;
  }
  try {
    elements.workspace.setAttribute("aria-busy", "true");
    announce("Görsel yükleniyor ve cihazda analiz ediliyor.", true, [45, 35, 45]);
    const dataUrl = await readFileAsDataUrl(file);
    await loadComposerImage(dataUrl, file.name.replace(/\.[^.]+$/, ""));
  } catch (error) {
    announce(error.message || "Görsel yüklenemedi.", true, [120, 50, 120]);
  } finally {
    elements.workspace.setAttribute("aria-busy", "false");
  }
}

async function loadComposerImage(source, name = "Yeni Görsel") {
  stopPlayback(false);
  const image = await loadImageElement(source);
  const maxWidth = 720;
  const maxHeight = 540;
  const scale = Math.min(1, maxWidth / image.naturalWidth, maxHeight / image.naturalHeight);
  elements.canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
  elements.canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
  state.sourceImage = image;
  state.sourceName = name || "Yeni Görsel";
  state.sourceDataUrl = source;
  state.sequence = [];
  state.cursorIndex = 0;
  elements.compositionTitle.value = `${state.sourceName} Senfonisi`;
  resetShareStudio();
  elements.emptyCanvas.hidden = true;
  buildImageModel();
  setComposerButtons(true, false);
  elements.imageStatus.textContent = "Analiz tamamlandı";
  elements.musicStatus.textContent = "Bestelenmeye hazır";
  elements.workspace.scrollIntoView({ behavior: "smooth", block: "start" });
  const readyMessage = interfaceLanguage() === "tr"
    ? `Görsel hazır. ${localizedAnalysisDescription()} İkinci adım: görünümü seçin, ardından otomatik bestele düğmesine dokunun.`
    : interfaceLanguage() === "el"
      ? `Η εικόνα είναι έτοιμη. ${localizedAnalysisDescription()} Επιλέξτε προβολή και μετά πατήστε Αυτόματη σύνθεση.`
      : `Image ready. ${localizedAnalysisDescription()} Choose a view, then select Compose automatically.`;
  announce(readyMessage, true, [45, 30, 80]);
}

function setComposerButtons(hasImage, hasMusic) {
  ["download-image", "describe-image", "compose-button"].forEach((id) => {
    document.getElementById(id).disabled = !hasImage;
  });
  ["play-button", "stop-button", "download-audio", "save-archive", "share-composition"].forEach((id) => {
    document.getElementById(id).disabled = !hasMusic;
  });
}

function setShareControls(enabled) {
  [elements.shareTitle, elements.shareCaption, elements.shareAlt, elements.shareHashtags, elements.shareDisclosure, elements.shareRights].forEach((element) => {
    element.disabled = !enabled;
  });
  ["refresh-share", "copy-share"].forEach((id) => { document.getElementById(id).disabled = !enabled; });
  document.getElementById("publish-share").disabled = !enabled || !elements.shareRights.checked;
}

function resetShareStudio() {
  setShareControls(false);
  elements.shareReadiness.textContent = "Önce beste oluşturun";
  elements.shareTitle.value = "";
  elements.shareCaption.value = "";
  elements.shareAlt.value = "";
  elements.shareRights.checked = false;
  elements.sharePreviewImage.removeAttribute("src");
  elements.sharePreviewImage.alt = "Gönderi önizlemesi için henüz görsel oluşturulmadı";
  elements.sharePreviewText.textContent = "Bestenizi oluşturduğunuzda sosyal medya gönderisi burada hazırlanacaktır.";
  elements.sharePreviewAlt.innerHTML = "<strong>Görsel betimlemesi:</strong> Henüz hazır değil.";
  elements.sharePreviewDisclosure.textContent = "Açıklanabilir üretim etiketi bekleniyor.";
  updatePlatformUi();
}

function getAverageCell(data, width, x0, y0, cellWidth, cellHeight) {
  let r = 0;
  let g = 0;
  let b = 0;
  let count = 0;
  const sampleStep = cellWidth > 20 ? 2 : 1;
  for (let y = y0; y < y0 + cellHeight; y += sampleStep) {
    for (let x = x0; x < x0 + cellWidth; x += sampleStep) {
      const offset = (y * width + x) * 4;
      r += data[offset];
      g += data[offset + 1];
      b += data[offset + 2];
      count += 1;
    }
  }
  return [Math.round(r / count), Math.round(g / count), Math.round(b / count)];
}

function buildImageModel() {
  if (!state.sourceImage) return;
  ctx.clearRect(0, 0, elements.canvas.width, elements.canvas.height);
  ctx.drawImage(state.sourceImage, 0, 0, elements.canvas.width, elements.canvas.height);
  const imageData = ctx.getImageData(0, 0, elements.canvas.width, elements.canvas.height);
  const size = Number(elements.pixelSize.value);
  const cells = [];
  for (let y = 0; y < elements.canvas.height; y += size) {
    for (let x = 0; x < elements.canvas.width; x += size) {
      const width = Math.min(size, elements.canvas.width - x);
      const height = Math.min(size, elements.canvas.height - y);
      const [r, g, b] = getAverageCell(imageData.data, elements.canvas.width, x, y, width, height);
      const hsl = rgbToHsl(r, g, b);
      cells.push({ x, y, width, height, r, g, b, hue: hsl.h, saturation: hsl.s, brightness: luminance(r, g, b) });
    }
  }
  state.cells = cells;
  state.analysis = analyzeImage(imageData, state.sourceImage.naturalWidth, state.sourceImage.naturalHeight);
  renderImageView();
  renderAnalysis();
}

function luminance(r, g, b) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function rgbToHsl(r, g, b) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;
  let hue = 0;
  if (delta) {
    if (max === red) hue = ((green - blue) / delta) % 6;
    else if (max === green) hue = (blue - red) / delta + 2;
    else hue = (red - green) / delta + 4;
    hue *= 60;
    if (hue < 0) hue += 360;
  }
  const light = (max + min) / 2;
  const saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * light - 1));
  return { h: hue, s: saturation, l: light };
}

function hslToRgb(h, s, l) {
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const x = chroma * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - chroma / 2;
  let rgb = [0, 0, 0];
  if (h < 60) rgb = [chroma, x, 0];
  else if (h < 120) rgb = [x, chroma, 0];
  else if (h < 180) rgb = [0, chroma, x];
  else if (h < 240) rgb = [0, x, chroma];
  else if (h < 300) rgb = [x, 0, chroma];
  else rgb = [chroma, 0, x];
  return rgb.map((value) => Math.round((value + m) * 255));
}

function colorDistance(a, b) {
  return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

function nearestPaletteColor(cell) {
  const source = [cell.r, cell.g, cell.b];
  return paletteTargets.reduce((best, target) => colorDistance(source, target) < colorDistance(source, best) ? target : best, paletteTargets[0]);
}

function displayColor(cell) {
  if (state.activeView === "gray") {
    const value = Math.round(cell.brightness);
    return [value, value, value];
  }
  if (state.activeView === "palette") return nearestPaletteColor(cell);
  if (state.activeView === "neon") {
    if (cell.saturation < 0.08) {
      const value = cell.brightness > 215 ? 248 : cell.brightness < 45 ? 8 : 45;
      return [value, value, value];
    }
    return hslToRgb(cell.hue, 1, clamp(0.48 + cell.brightness / 1200, 0.48, 0.7));
  }
  return [cell.r, cell.g, cell.b];
}

function renderImageView() {
  ctx.clearRect(0, 0, elements.canvas.width, elements.canvas.height);
  for (const cell of state.cells) {
    const [r, g, b] = displayColor(cell);
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fillRect(cell.x, cell.y, cell.width + 0.5, cell.height + 0.5);
  }
  elements.canvas.setAttribute("aria-label", `${state.sourceName}. ${state.analysis?.description || "Pikselleştirilmiş görsel"}`);
}

function colorName(r, g, b) {
  const brightness = luminance(r, g, b);
  const hsl = rgbToHsl(r, g, b);
  if (brightness < 35) return "Siyah";
  if (brightness > 238 && hsl.s < 0.12) return "Beyaz";
  if (hsl.s < 0.12) return brightness < 110 ? "Koyu gri" : brightness < 190 ? "Gri" : "Açık gri";
  const hueNames = [
    [15, "Kırmızı"], [42, "Turuncu"], [68, "Sarı"], [155, "Yeşil"],
    [195, "Turkuaz"], [250, "Mavi"], [290, "Mor"], [345, "Pembe"], [360, "Kırmızı"],
  ];
  return hueNames.find(([limit]) => hsl.h < limit)?.[1] || "Kırmızı";
}

function analyzeImage(imageData, originalWidth, originalHeight) {
  const data = imageData.data;
  let brightnessSum = 0;
  let saturationSum = 0;
  let skin = 0;
  let nature = 0;
  let edges = 0;
  let samples = 0;
  const buckets = new Map();
  const step = 6;
  for (let y = 0; y < imageData.height; y += step) {
    for (let x = 0; x < imageData.width; x += step) {
      const offset = (y * imageData.width + x) * 4;
      const r = data[offset];
      const g = data[offset + 1];
      const b = data[offset + 2];
      const light = luminance(r, g, b);
      const hsl = rgbToHsl(r, g, b);
      brightnessSum += light;
      saturationSum += hsl.s;
      samples += 1;
      if (r > 95 && g > 40 && b > 20 && Math.max(r, g, b) - Math.min(r, g, b) > 15 && Math.abs(r - g) > 15 && r > g && r > b) skin += 1;
      if (hsl.s > 0.22 && ((hsl.h >= 70 && hsl.h <= 180) || (hsl.h >= 180 && hsl.h <= 245))) nature += 1;
      if (x + step < imageData.width) {
        const nextOffset = (y * imageData.width + x + step) * 4;
        if (Math.abs(light - luminance(data[nextOffset], data[nextOffset + 1], data[nextOffset + 2])) > 38) edges += 1;
      }
      const name = colorName(r, g, b);
      const entry = buckets.get(name) || { name, count: 0, r: 0, g: 0, b: 0 };
      entry.count += 1;
      entry.r += r;
      entry.g += g;
      entry.b += b;
      buckets.set(name, entry);
    }
  }
  const ratio = originalWidth / originalHeight;
  const skinRate = skin / samples;
  const natureRate = nature / samples;
  const edgeRate = edges / samples;
  let type = "Nesne veya sanat kompozisyonu";
  let confidence = 58;
  if (skinRate > 0.075 && ratio < 1.05) {
    type = "Kişi veya portre olasılığı yüksek";
    confidence = clamp(Math.round(58 + skinRate * 170), 58, 88);
  } else if (ratio > 1.12 && natureRate > 0.22) {
    type = "Manzara veya doğa sahnesi olasılığı yüksek";
    confidence = clamp(Math.round(54 + natureRate * 90), 57, 86);
  } else if (ratio > 1.15) {
    type = "Yatay sahne veya manzara biçimi";
    confidence = 62;
  } else if (ratio < 0.86) {
    type = "Dikey portre biçimi";
    confidence = 61;
  } else if (edgeRate > 0.16) {
    type = "Ayrıntılı nesne, yapı veya çizim";
    confidence = 60;
  }
  const orientation = ratio > 1.1 ? "yatay" : ratio < 0.9 ? "dikey" : "kareye yakın";
  const averageBrightness = Math.round(brightnessSum / samples);
  const averageSaturation = Math.round((saturationSum / samples) * 100);
  const palette = [...buckets.values()]
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)
    .map((entry) => ({
      name: entry.name,
      hex: rgbToHex(Math.round(entry.r / entry.count), Math.round(entry.g / entry.count), Math.round(entry.b / entry.count)),
      percent: Math.round(entry.count / samples * 100),
    }));
  const paletteText = palette.slice(0, 3).map((item) => item.name).join(", ");
  return {
    type,
    confidence,
    orientation,
    originalWidth,
    originalHeight,
    averageBrightness,
    averageSaturation,
    palette,
    description: `${type}. Güven yüzde ${confidence}. Görsel ${orientation}; baskın renkler ${paletteText}. Ortalama parlaklık 255 üzerinden ${averageBrightness}.`,
  };
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b].map((value) => clamp(value, 0, 255).toString(16).padStart(2, "0")).join("")}`;
}

function renderAnalysis() {
  const analysis = state.analysis;
  if (!analysis) return;
  elements.sceneDescription.textContent = localizedAnalysisDescription(analysis);
  elements.analysisChips.innerHTML = [
    `${localized(analysis.type)} · ${analysis.confidence}%`,
    `${localized(analysis.orientation)} · ${analysis.originalWidth}×${analysis.originalHeight}`,
    interfaceLanguage() === "tr" ? `Parlaklık ${analysis.averageBrightness}/255` : interfaceLanguage() === "el" ? `Φωτεινότητα ${analysis.averageBrightness}/255` : `Brightness ${analysis.averageBrightness}/255`,
    interfaceLanguage() === "tr" ? `Doygunluk %${analysis.averageSaturation}` : interfaceLanguage() === "el" ? `Κορεσμός ${analysis.averageSaturation}%` : `Saturation ${analysis.averageSaturation}%`,
    interfaceLanguage() === "tr" ? `${state.cells.length} piksel hücresi` : interfaceLanguage() === "el" ? `${state.cells.length} κελιά pixel` : `${state.cells.length} pixel cells`,
  ].map((text) => `<span>${escapeHtml(text)}</span>`).join("");
  elements.dominantPalette.innerHTML = analysis.palette.map((color) =>
    `<button type="button" style="background:${color.hex}" aria-label="${escapeHtml(localized(color.name))}, ${color.percent}%" title="${escapeHtml(localized(color.name))} · ${color.percent}%"></button>`,
  ).join("");
}

function musicalColorForCell(cell) {
  return musicalColors.reduce((best, candidate) => {
    const distance = colorDistance([cell.r, cell.g, cell.b], candidate.rgb);
    return distance < best.distance ? { candidate, distance } : best;
  }, { candidate: musicalColors[0], distance: Infinity }).candidate;
}

function noteFrequency(semitone, octave) {
  const midi = 12 * (octave + 1) + semitone;
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function cellToEvent(cell) {
  const isNeutral = cell.saturation < 0.16;
  if (cell.brightness >= 238 && cell.saturation < 0.18) {
    return { type: "rest", label: "Es", beats: 0.5, cell };
  }
  if (isNeutral || cell.brightness < 42) {
    if (cell.brightness < 65) return { type: "kick", label: "Koyu vuruş", beats: 1, cell };
    if (cell.brightness < 155) return { type: "snare", label: "Orta gri vuruş", beats: 0.5, cell };
    if (cell.brightness < 225) return { type: "hat", label: "Açık gri vuruş", beats: 0.25, cell };
    return { type: "rest", label: "Es", beats: 0.5, cell };
  }
  const mapped = musicalColorForCell(cell);
  const octave = cell.brightness < 85 ? 3 : cell.brightness < 175 ? 4 : 5;
  const beats = cell.brightness < 80 ? 0.5 : cell.brightness > 195 ? 1 : 0.75;
  return {
    type: "note",
    label: `${mapped.name} · ${mapped.note}${octave}`,
    noteName: `${mapped.note}${octave}`,
    frequency: noteFrequency(mapped.semitone % 12, octave + (mapped.semitone === 12 ? 1 : 0)),
    volume: 0.1 + cell.saturation * 0.17,
    beats,
    cell,
  };
}

function createSequence() {
  if (!state.cells.length) return [];
  const rows = new Map();
  state.cells.forEach((cell) => {
    const row = rows.get(cell.y) || [];
    row.push(cell);
    rows.set(cell.y, row);
  });
  const ordered = [];
  [...rows.values()].forEach((row, index) => {
    ordered.push(...(index % 2 ? [...row].reverse() : row));
  });
  const stride = Math.max(1, Math.ceil(ordered.length / 96));
  return ordered.filter((_, index) => index % stride === 0).slice(0, 96).map(cellToEvent);
}

function composeMusic() {
  if (!state.cells.length) return;
  stopPlayback(false);
  state.sequence = createSequence();
  const counts = state.sequence.reduce((result, event) => {
    result[event.type] = (result[event.type] || 0) + 1;
    return result;
  }, {});
  elements.musicSheet.textContent = state.sequence.map((event, index) => {
    const symbol = event.type === "note" ? "♪" : event.type === "rest" ? "𝄽" : "●";
    return `${index + 1}.${symbol}${event.label}`;
  }).join("  ");
  elements.musicStatus.textContent = `${state.sequence.length} olay hazır`;
  setComposerButtons(true, true);
  prepareShareDraft();
  const summary = `Beste hazır. ${counts.note || 0} nota, ${(counts.kick || 0) + (counts.snare || 0) + (counts.hat || 0)} vuruş ve ${counts.rest || 0} es oluşturuldu. Beyaz alanlar sessizlik olarak işlendi.`;
  announce(summary, true, [60, 30, 60, 30, 110]);
}

function ensureAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!state.audioContext || state.audioContext.state === "closed") state.audioContext = new AudioContextClass();
  if (state.audioContext.state === "suspended") state.audioContext.resume();
  return state.audioContext;
}

function scheduleNote(audioContext, event, start, duration, instrument) {
  const gain = audioContext.createGain();
  const oscillator = audioContext.createOscillator();
  const shapes = { synth: "sine", piano: "triangle", violin: "sawtooth", guitar: "triangle" };
  oscillator.type = shapes[instrument] || "sine";
  oscillator.frequency.setValueAtTime(event.frequency, start);
  const attack = instrument === "violin" ? 0.09 : 0.012;
  const release = instrument === "piano" || instrument === "guitar" ? Math.min(duration, 0.5) : duration;
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.02, event.volume), start + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + Math.max(attack + 0.02, release));
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(start);
  oscillator.stop(start + Math.max(duration, release) + 0.03);
  state.nodes.push(oscillator);
}

function schedulePercussion(audioContext, event, start, duration) {
  if (event.type === "kick") {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.frequency.setValueAtTime(105, start);
    oscillator.frequency.exponentialRampToValueAtTime(45, start + Math.min(0.22, duration));
    gain.gain.setValueAtTime(0.28, start);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + Math.min(0.3, duration));
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + Math.min(0.32, duration + 0.03));
    state.nodes.push(oscillator);
    return;
  }
  const length = Math.max(1, Math.floor(audioContext.sampleRate * Math.min(duration, 0.16)));
  const buffer = audioContext.createBuffer(1, length, audioContext.sampleRate);
  const channel = buffer.getChannelData(0);
  let seed = Math.round(event.cell.brightness * 997) + event.cell.x * 31 + event.cell.y;
  for (let index = 0; index < length; index += 1) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    channel[index] = ((seed / 4294967295) * 2 - 1) * (event.type === "hat" ? 0.17 : 0.24);
  }
  const source = audioContext.createBufferSource();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();
  filter.type = event.type === "hat" ? "highpass" : "bandpass";
  filter.frequency.value = event.type === "hat" ? 6500 : 1500;
  gain.gain.setValueAtTime(0.2, start);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + Math.min(duration, 0.18));
  source.buffer = buffer;
  source.connect(filter).connect(gain).connect(audioContext.destination);
  source.start(start);
  state.nodes.push(source);
}

function showCursor(cell) {
  if (!cell) {
    elements.scanCursor.hidden = true;
    return;
  }
  const scaleX = elements.canvas.clientWidth / elements.canvas.width;
  const scaleY = elements.canvas.clientHeight / elements.canvas.height;
  elements.scanCursor.hidden = false;
  elements.scanCursor.style.left = `${cell.x * scaleX}px`;
  elements.scanCursor.style.top = `${cell.y * scaleY}px`;
  elements.scanCursor.style.width = `${Math.max(8, cell.width * scaleX)}px`;
  elements.scanCursor.style.height = `${Math.max(8, cell.height * scaleY)}px`;
}

function playSequence(sequence = state.sequence, announceStart = true) {
  if (!sequence.length) return;
  stopPlayback(false);
  const audioContext = ensureAudioContext();
  if (!audioContext) {
    announce("Bu cihaz Web Audio özelliğini desteklemiyor.", true, [120, 50, 120]);
    return;
  }
  const token = ++state.playToken;
  const secondsPerBeat = 60 / Number(elements.tempo.value);
  const instrument = elements.instrument.value;
  let offset = 0.08;
  sequence.forEach((event, index) => {
    const duration = Math.max(0.08, event.beats * secondsPerBeat);
    const start = audioContext.currentTime + offset;
    if (event.type === "note") scheduleNote(audioContext, event, start, duration * 0.92, instrument);
    else if (event.type !== "rest") schedulePercussion(audioContext, event, start, duration);
    const timer = window.setTimeout(() => {
      if (token !== state.playToken) return;
      state.cursorIndex = index;
      showCursor(event.cell);
      elements.musicStatus.textContent = `${index + 1}/${sequence.length} · ${event.label}`;
      if (event.type !== "rest" && index % 3 === 0) vibrate(event.type === "note" ? [30] : [65]);
    }, offset * 1000);
    state.timers.push(timer);
    offset += duration;
  });
  state.timers.push(window.setTimeout(() => {
    if (token !== state.playToken) return;
    showCursor(null);
    elements.musicStatus.textContent = "Beste tamamlandı";
    announce("Beste tamamlandı. Dördüncü adım: arşive kaydedebilir, WAV olarak indirebilir veya paylaşabilirsiniz.", true, [60, 35, 110]);
  }, (offset + 0.15) * 1000));
  if (announceStart) announce("Beste çalıyor. Renk notaları, gri vuruşlar ve beyaz esler sırayla taranıyor.", true, [40, 25, 70]);
}

function stopPlayback(withAnnouncement = true) {
  state.playToken += 1;
  state.timers.forEach((timer) => window.clearTimeout(timer));
  state.timers = [];
  state.nodes.forEach((node) => {
    try { node.stop(); } catch { /* already stopped */ }
  });
  state.nodes = [];
  showCursor(null);
  if (withAnnouncement) {
    elements.musicStatus.textContent = "Durduruldu";
    announce("Beste durduruldu.", state.guideEnabled, [70]);
  }
}

function playManualCell(index, shouldSpeak = true) {
  if (!state.cells.length) return;
  stopPlayback(false);
  state.cursorIndex = (index + state.cells.length) % state.cells.length;
  const cell = state.cells[state.cursorIndex];
  const event = cellToEvent(cell);
  showCursor(cell);
  const audioContext = ensureAudioContext();
  if (audioContext) {
    const duration = Math.max(0.12, event.beats * 60 / Number(elements.tempo.value));
    const start = audioContext.currentTime + 0.02;
    if (event.type === "note") scheduleNote(audioContext, event, start, duration, elements.instrument.value);
    else if (event.type !== "rest") schedulePercussion(audioContext, event, start, duration);
    state.timers.push(window.setTimeout(() => showCursor(null), Math.min(1300, duration * 1000 + 220)));
  }
  vibrate(event.type === "rest" ? [25] : event.type === "note" ? [45] : [80]);
  if (shouldSpeak) speak(`${colorName(cell.r, cell.g, cell.b)}. ${event.label}.`);
}

function moveManual(direction) {
  if (!state.cells.length) {
    announce("Önce bir görsel seçin.", true);
    return;
  }
  const columns = Math.max(1, Math.ceil(elements.canvas.width / Number(elements.pixelSize.value)));
  const delta = direction === "left" ? -1 : direction === "right" ? 1 : direction === "up" ? -columns : columns;
  playManualCell(state.cursorIndex + delta);
}

function synthSample(event, time, instrument, seedRef) {
  if (event.type === "rest") return 0;
  if (event.type === "kick") return Math.sin(2 * Math.PI * (72 - time * 26) * time) * Math.exp(-9 * time) * 0.7;
  if (event.type === "snare" || event.type === "hat") {
    seedRef.value = (seedRef.value * 1664525 + 1013904223) >>> 0;
    const noise = seedRef.value / 4294967295 * 2 - 1;
    return noise * Math.exp(-(event.type === "hat" ? 35 : 18) * time) * (event.type === "hat" ? 0.28 : 0.45);
  }
  const phase = 2 * Math.PI * event.frequency * time;
  const decay = instrument === "violin" ? Math.min(1, time * 12) : Math.exp(-(instrument === "piano" ? 3.2 : instrument === "guitar" ? 4.5 : 1.5) * time);
  let sample = Math.sin(phase);
  if (instrument === "piano") sample += 0.35 * Math.sin(phase * 2) + 0.15 * Math.sin(phase * 3);
  else if (instrument === "violin") sample += 0.45 * Math.sin(phase * 2) + 0.22 * Math.sin(phase * 3);
  else if (instrument === "guitar") sample += 0.28 * Math.sin(phase * 2) + 0.14 * Math.sin(phase * 4);
  else sample += 0.22 * Math.sin(phase * 2);
  return sample * decay * event.volume;
}

function createWavBlob(sequence, tempo, instrument) {
  const sampleRate = 22050;
  const secondsPerBeat = 60 / tempo;
  const durations = sequence.map((event) => Math.max(0.08, event.beats * secondsPerBeat));
  const totalSeconds = durations.reduce((sum, value) => sum + value, 0) + 0.1;
  const samples = new Float32Array(Math.ceil(totalSeconds * sampleRate));
  let cursor = 0;
  const seedRef = { value: 20260809 };
  sequence.forEach((event, eventIndex) => {
    const length = Math.floor(durations[eventIndex] * sampleRate);
    for (let index = 0; index < length; index += 1) {
      const time = index / sampleRate;
      samples[cursor + index] += synthSample(event, time, instrument, seedRef);
    }
    cursor += length;
  });
  let peak = 0;
  samples.forEach((value) => { peak = Math.max(peak, Math.abs(value)); });
  const normalize = peak > 0.95 ? 0.95 / peak : 1;
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);
  writeAscii(view, 0, "RIFF");
  view.setUint32(4, 36 + samples.length * 2, true);
  writeAscii(view, 8, "WAVE");
  writeAscii(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeAscii(view, 36, "data");
  view.setUint32(40, samples.length * 2, true);
  samples.forEach((sample, index) => view.setInt16(44 + index * 2, clamp(sample * normalize, -1, 1) * 32767, true));
  return new Blob([buffer], { type: "audio/wav" });
}

function writeAscii(view, offset, text) {
  [...text].forEach((character, index) => view.setUint8(offset + index, character.charCodeAt(0)));
}

function safeFilename(value, extension) {
  const base = String(value || "piksenfoni-beste")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "piksenfoni-beste";
  return `${base}.${extension}`;
}

function downloadBlob(blob, filename) {
  const bridge = nativeBridge();
  if (bridge && typeof bridge.saveBase64 === "function") {
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = String(reader.result).split(",")[1] || "";
      bridge.saveBase64(filename, blob.type || "application/octet-stream", base64);
    };
    reader.readAsDataURL(blob);
    announce(`${filename} İndirilenler klasörüne kaydediliyor.`, true, [55, 30, 90]);
    return;
  }
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 2000);
  announce(`${filename} indirildi.`, true, [55, 30, 90]);
}

function downloadCanvasImage() {
  elements.canvas.toBlob((blob) => {
    if (blob) downloadBlob(blob, safeFilename(`${state.sourceName}-${state.activeView}`, "png"));
  }, "image/png");
}

function downloadCurrentAudio() {
  if (!state.sequence.length) return;
  const blob = createWavBlob(state.sequence, Number(elements.tempo.value), elements.instrument.value);
  downloadBlob(blob, safeFilename(elements.compositionTitle.value || state.sourceName, "wav"));
}

function canvasThumbnail() {
  const thumb = document.createElement("canvas");
  const maxWidth = 480;
  const scale = Math.min(1, maxWidth / elements.canvas.width);
  thumb.width = Math.max(1, Math.round(elements.canvas.width * scale));
  thumb.height = Math.max(1, Math.round(elements.canvas.height * scale));
  thumb.getContext("2d").drawImage(elements.canvas, 0, 0, thumb.width, thumb.height);
  return thumb.toDataURL("image/jpeg", 0.8);
}

function openArchiveDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("Bu cihaz arşiv özelliğini desteklemiyor"));
      return;
    }
    const request = indexedDB.open("duyu-sense-studio", 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("compositions")) db.createObjectStore("compositions", { keyPath: "id" });
    };
    request.onsuccess = () => {
      state.archiveDb = request.result;
      resolve(request.result);
    };
    request.onerror = () => reject(request.error || new Error("Arşiv açılamadı"));
  });
}

async function archiveTransaction(mode, operation) {
  const db = state.archiveDb || await openArchiveDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("compositions", mode);
    const store = transaction.objectStore("compositions");
    const request = operation(store);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Arşiv işlemi başarısız"));
  });
}

function serializeSequence(sequence) {
  return sequence.map((event) => ({
    type: event.type,
    label: event.label,
    noteName: event.noteName || null,
    frequency: event.frequency || null,
    volume: event.volume || null,
    beats: event.beats,
    cell: event.cell ? { x: event.cell.x, y: event.cell.y, width: event.cell.width, height: event.cell.height, r: event.cell.r, g: event.cell.g, b: event.cell.b, brightness: event.cell.brightness, saturation: event.cell.saturation, hue: event.cell.hue } : null,
  }));
}

async function saveCurrentArchive() {
  if (!state.sequence.length || !state.analysis) return;
  const title = elements.compositionTitle.value.trim() || `${state.sourceName} Senfonisi`;
  const record = {
    id: `duyu-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    title,
    createdAt: new Date().toISOString(),
    thumbnail: canvasThumbnail(),
    view: state.activeView,
    analysis: state.analysis,
    sequence: serializeSequence(state.sequence),
    tempo: Number(elements.tempo.value),
    instrument: elements.instrument.value,
  };
  try {
    await archiveTransaction("readwrite", (store) => store.put(record));
    await renderArchive();
    announce(`${title} özel cihaz arşivine kaydedildi.`, true, [70, 35, 70, 35, 120]);
    document.querySelector("#archive").scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    announce(error.message || "Arşive kaydedilemedi.", true, [120, 50, 120]);
  }
}

async function getArchiveRecords() {
  const records = await archiveTransaction("readonly", (store) => store.getAll());
  return records.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

async function renderArchive() {
  try {
    const records = await getArchiveRecords();
    elements.archiveEmpty.hidden = records.length > 0;
    elements.archiveGrid.innerHTML = records.map((record) => `
      <article class="archive-card" data-archive-id="${escapeHtml(record.id)}">
        <img src="${record.thumbnail}" alt="${escapeHtml(record.analysis?.description || record.title)}" />
        <div class="archive-card-body">
          <h3>${escapeHtml(record.title)}</h3>
          <p>${new Date(record.createdAt).toLocaleString(window.DuyuI18n?.dateLocale() || "en-GB")} · ${record.sequence.length} olay · ${record.tempo} BPM</p>
          <div class="archive-card-actions">
            <button type="button" data-archive-action="play">▶ Dinle</button>
            <button type="button" data-archive-action="download">⬇ WAV</button>
            <button type="button" data-archive-action="share">↗ Paylaş</button>
            <button type="button" data-archive-action="delete">Sil</button>
          </div>
        </div>
      </article>`).join("");
  } catch {
    elements.archiveEmpty.hidden = false;
    elements.archiveEmpty.textContent = "Arşiv bu cihazda kullanılamıyor.";
  }
}

async function getArchiveRecord(id) {
  return archiveTransaction("readonly", (store) => store.get(id));
}

async function handleArchiveAction(card, action) {
  const id = card.dataset.archiveId;
  const record = await getArchiveRecord(id);
  if (!record) return;
  if (action === "play") {
    elements.tempo.value = String(record.tempo);
    elements.tempoValue.textContent = String(record.tempo);
    elements.instrument.value = record.instrument;
    playSequence(record.sequence);
  } else if (action === "download") {
    downloadBlob(createWavBlob(record.sequence, record.tempo, record.instrument), safeFilename(record.title, "wav"));
  } else if (action === "share") {
    shareText(record.title, createShareText(record.title, record.analysis, record.sequence));
  } else if (action === "delete") {
    const approved = window.confirm(`${record.title} arşivden silinsin mi?`);
    if (!approved) return;
    await archiveTransaction("readwrite", (store) => store.delete(id));
    await renderArchive();
    announce("Arşiv kaydı silindi.", true, [90]);
  }
}

function createShareText(title, analysis = state.analysis, sequence = state.sequence) {
  const eventCounts = sequence.reduce((result, event) => {
    result[event.type] = (result[event.type] || 0) + 1;
    return result;
  }, {});
  const notes = eventCounts.note || 0;
  const beats = (eventCounts.kick || 0) + (eventCounts.snare || 0) + (eventCounts.hat || 0);
  const rests = eventCounts.rest || 0;
  const description = analysis ? localizedAnalysisDescription(analysis) : localized("Görselden oluşturulan PİKSENFONİ bestesi.");
  if (interfaceLanguage() === "tr") return `${title}\n\nErişilebilir betimleme: ${description}\n\nBeste: ${notes} renk notası, ${beats} vuruş, ${rests} es.\n\n#HARMONYSENSE #PİKSENFONİ #ErişilebilirSanat #KapsayıcıTasarım`;
  if (interfaceLanguage() === "el") return `${title}\n\nΠροσβάσιμη περιγραφή: ${description}\n\nΣύνθεση: ${notes} νότες χρωμάτων, ${beats} χτύποι, ${rests} παύσεις.\n\n#HARMONYSENSE #PİKSENFONİ #Προσβασιμότητα #ΣυμπεριληπτικόςΣχεδιασμός`;
  return `${title}\n\nAccessible description: ${description}\n\nComposition: ${notes} colour notes, ${beats} beats, ${rests} rests.\n\n#HARMONYSENSE #PİKSENFONİ #AccessibleArt #InclusiveDesign`;
}

function compositionCounts(sequence = state.sequence) {
  return sequence.reduce((result, event) => {
    result[event.type] = (result[event.type] || 0) + 1;
    return result;
  }, {});
}

function normalizedHashtags(value) {
  return String(value || "")
    .split(/\s+/)
    .map((tag) => tag.trim())
    .filter(Boolean)
    .map((tag) => tag.startsWith("#") ? tag : `#${tag.replace(/^#+/, "")}`)
    .slice(0, 8)
    .join(" ");
}

function platformHashtags(platformKey) {
  if (interfaceLanguage() === "tr") return socialPlatforms[platformKey].hashtags;
  if (interfaceLanguage() === "el") return `#HARMONYSENSE #PİKSENFONİ #Προσβασιμότητα #ΣυμπεριληπτικόςΣχεδιασμός`;
  return `#HARMONYSENSE #PİKSENFONİ #Accessibility #InclusiveDesign`;
}

function platformHint(platformKey) {
  const en = {
    instagram: "A concise, image-led post with an accessible description.",
    tiktok: "Direct copy that highlights the short visual, sound and vibration experience.",
    youtube: "A title and accessible description for video or Shorts.",
    facebook: "Clear community copy that invites participation.",
    x: "A short post focused on the main message and accessibility.",
    linkedin: "Professional copy focused on social impact and inclusive design.",
    whatsapp: "A concise described message for people and groups.",
    web: "Publication copy with a prominent accessible description.",
  };
  const el = {
    instagram: "Σύντομη ανάρτηση με έμφαση στην εικόνα και προσβάσιμη περιγραφή.",
    tiktok: "Άμεσο κείμενο που αναδεικνύει την εμπειρία εικόνας, ήχου και δόνησης.",
    youtube: "Τίτλος και προσβάσιμη περιγραφή για βίντεο ή Shorts.",
    facebook: "Σαφές κείμενο κοινότητας που προσκαλεί σε συμμετοχή.",
    x: "Σύντομη ανάρτηση με έμφαση στο κύριο μήνυμα και την προσβασιμότητα.",
    linkedin: "Επαγγελματικό κείμενο με έμφαση στον κοινωνικό αντίκτυπο και τον συμπεριληπτικό σχεδιασμό.",
    whatsapp: "Σύντομο περιγραφικό μήνυμα για άτομα και ομάδες.",
    web: "Κείμενο δημοσίευσης με εμφανή προσβάσιμη περιγραφή.",
  };
  if (interfaceLanguage() === "tr") return socialPlatforms[platformKey].hint;
  return (interfaceLanguage() === "el" ? el : en)[platformKey];
}

function platformCaption(platformKey, counts = compositionCounts()) {
  const notes = counts.note || 0;
  const beats = (counts.kick || 0) + (counts.snare || 0) + (counts.hat || 0);
  const rests = counts.rest || 0;
  const source = state.sourceName || (interfaceLanguage() === "tr" ? "Seçilen görsel" : interfaceLanguage() === "el" ? "Επιλεγμένη εικόνα" : "Selected image");
  const english = {
    instagram: `I transformed ${source} into an accessible PİKSENFONİ with ${notes} colour notes, ${beats} beats and ${rests} rests. The image can now be heard and felt.`,
    tiktok: `${source} became sound and vibration with HARMONY SENSE: ${notes} notes, ${beats} beats, ${rests} rests.`,
    youtube: `HARMONY SENSE transformed the colours in ${source} into notes, rhythm and haptic feedback. This work contains ${notes} colour notes, ${beats} beats and ${rests} rests.`,
    facebook: `I created an accessible sensory artwork from ${source}. HARMONY SENSE mapped its colours to ${notes} notes, ${beats} beats and ${rests} rests.`,
    x: `${source} became an accessible PİKSENFONİ with HARMONY SENSE: ${notes} notes, ${beats} beats, ${rests} rests.`,
    linkedin: `With HARMONY SENSE, we transformed ${source} into accessible digital content. The explainable colour-to-sound mapping produced ${notes} notes, ${beats} beats and ${rests} rests.`,
    whatsapp: `I transformed ${source} into sound with HARMONY SENSE: ${notes} notes, ${beats} beats and ${rests} rests. The accessible description follows.`,
    web: `HARMONY SENSE transformed ${source} into an accessible digital artwork with ${notes} notes, ${beats} beats and ${rests} rests.`,
  };
  const turkish = {
    instagram: `${source} görselini ${notes} renk notası, ${beats} vuruş ve ${rests} es içeren erişilebilir bir PİKSENFONİ'ye dönüştürdüm. Görsel artık duyuluyor ve hissediliyor.`,
    tiktok: `${source}, HARMONY SENSE ile sese ve titreşime dönüştü: ${notes} nota, ${beats} vuruş, ${rests} es.`,
    youtube: `${source} görselinin renklerini HARMONY SENSE ile nota, ritim ve dokunsal geri bildirime dönüştürdüm. Bu çalışmada ${notes} renk notası, ${beats} vuruş ve ${rests} es bulunuyor.`,
    facebook: `${source} görselinden erişilebilir bir duyusal sanat çalışması oluşturdum. HARMONY SENSE renkleri ${notes} notaya, ${beats} vuruşa ve ${rests} ese dönüştürdü.`,
    x: `${source}, HARMONY SENSE ile erişilebilir bir PİKSENFONİ'ye dönüştü: ${notes} nota, ${beats} vuruş, ${rests} es.`,
    linkedin: `HARMONY SENSE ile ${source} görselini erişilebilir dijital içeriğe dönüştürdük. Açıklanabilir renk-ses eşlemesi ${notes} nota, ${beats} vuruş ve ${rests} es üretti.`,
    whatsapp: `${source} görselini HARMONY SENSE ile sese dönüştürdüm: ${notes} nota, ${beats} vuruş, ${rests} es. Erişilebilir betimleme aşağıda.`,
    web: `${source} görseli, HARMONY SENSE'in açıklanabilir renk-ses dönüşümüyle ${notes} nota, ${beats} vuruş ve ${rests} esten oluşan erişilebilir bir dijital esere dönüştürüldü.`,
  };
  const greek = {
    instagram: `Μετέτρεψα την εικόνα ${source} σε προσβάσιμο PİKSENFONİ με ${notes} νότες χρωμάτων, ${beats} χτύπους και ${rests} παύσεις. Η εικόνα τώρα ακούγεται και γίνεται αισθητή.`,
    tiktok: `Η εικόνα ${source} έγινε ήχος και δόνηση με το HARMONY SENSE: ${notes} νότες, ${beats} χτύποι, ${rests} παύσεις.`,
    youtube: `Το HARMONY SENSE μετέτρεψε τα χρώματα της εικόνας ${source} σε νότες, ρυθμό και απτική ανάδραση. Το έργο περιέχει ${notes} νότες, ${beats} χτύπους και ${rests} παύσεις.`,
    facebook: `Δημιούργησα ένα προσβάσιμο αισθητηριακό έργο από την εικόνα ${source}. Το HARMONY SENSE αντιστοίχισε τα χρώματα σε ${notes} νότες, ${beats} χτύπους και ${rests} παύσεις.`,
    x: `Η εικόνα ${source} έγινε προσβάσιμο PİKSENFONİ με το HARMONY SENSE: ${notes} νότες, ${beats} χτύποι, ${rests} παύσεις.`,
    linkedin: `Με το HARMONY SENSE μετατρέψαμε την εικόνα ${source} σε προσβάσιμο ψηφιακό περιεχόμενο. Η επεξηγήσιμη αντιστοίχιση παρήγαγε ${notes} νότες, ${beats} χτύπους και ${rests} παύσεις.`,
    whatsapp: `Μετέτρεψα την εικόνα ${source} σε ήχο με το HARMONY SENSE: ${notes} νότες, ${beats} χτύπους και ${rests} παύσεις. Ακολουθεί η προσβάσιμη περιγραφή.`,
    web: `Το HARMONY SENSE μετέτρεψε την εικόνα ${source} σε προσβάσιμο ψηφιακό έργο με ${notes} νότες, ${beats} χτύπους και ${rests} παύσεις.`,
  };
  const templates = interfaceLanguage() === "tr" ? turkish : interfaceLanguage() === "el" ? greek : english;
  return templates[platformKey] || templates.instagram;
}

function updatePlatformUi() {
  const platform = socialPlatforms[state.activePlatform] || socialPlatforms.instagram;
  document.querySelectorAll("[data-platform]").forEach((button) => {
    const active = button.dataset.platform === state.activePlatform;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  elements.platformHint.textContent = platformHint(state.activePlatform);
  const accessibleLabel = interfaceLanguage() === "tr" ? "erişilebilir içerik" : interfaceLanguage() === "el" ? "προσβάσιμο περιεχόμενο" : "accessible content";
  const prepareLabel = interfaceLanguage() === "tr" ? `${platform.label} için hazırla` : interfaceLanguage() === "el" ? `Προετοιμασία για ${platform.label}` : `Prepare for ${platform.label}`;
  elements.previewPlatform.textContent = `${platform.label} · ${accessibleLabel}`;
  elements.publishShare.textContent = `↗ ${prepareLabel}`;
}

function selectPlatform(platformKey) {
  if (!socialPlatforms[platformKey]) return;
  state.activePlatform = platformKey;
  updatePlatformUi();
  if (state.sequence.length) {
    elements.shareCaption.value = platformCaption(platformKey);
    elements.shareHashtags.value = platformHashtags(platformKey);
    updateSharePreview();
  }
  const selectedMessage = interfaceLanguage() === "tr" ? `${socialPlatforms[platformKey].label} paylaşım biçimi seçildi.` : interfaceLanguage() === "el" ? `Επιλέχθηκε μορφή κοινοποίησης ${socialPlatforms[platformKey].label}.` : `${socialPlatforms[platformKey].label} sharing format selected.`;
  announce(selectedMessage, true, [45]);
}

function prepareShareDraft({ scroll = false } = {}) {
  if (!state.sequence.length || !state.analysis) {
    announce("Önce bir görsel seçip besteyi oluşturun.", true, [90, 40, 90]);
    return;
  }
  const title = elements.compositionTitle.value.trim() || (interfaceLanguage() === "tr" ? `${state.sourceName} Senfonisi` : interfaceLanguage() === "el" ? `Συμφωνία ${state.sourceName}` : `${state.sourceName} Symphony`);
  const counts = compositionCounts();
  elements.shareTitle.value = title;
  elements.shareCaption.value = platformCaption(state.activePlatform, counts);
  elements.shareAlt.value = localizedAnalysisDescription(state.analysis);
  elements.shareHashtags.value = platformHashtags(state.activePlatform);
  elements.shareDisclosure.checked = true;
  elements.shareRights.checked = false;
  elements.sharePreviewImage.src = canvasThumbnail();
  setShareControls(true);
  updateSharePreview();
  elements.shareReadiness.textContent = "Gönderi taslağı hazır";
  if (scroll) document.querySelector("#share-studio").scrollIntoView({ behavior: "smooth", block: "start" });
}

function shareDraftText() {
  const title = elements.shareTitle.value.trim() || (interfaceLanguage() === "tr" ? "HARMONY SENSE Bestesi" : interfaceLanguage() === "el" ? "Σύνθεση HARMONY SENSE" : "HARMONY SENSE Composition");
  const caption = elements.shareCaption.value.trim();
  const alt = elements.shareAlt.value.trim();
  const hashtags = normalizedHashtags(elements.shareHashtags.value);
  const disclosure = elements.shareDisclosure.checked
    ? interfaceLanguage() === "tr" ? "Görselden açıklanabilir renk-ses algoritmasıyla üretildi." : interfaceLanguage() === "el" ? "Δημιουργήθηκε από εικόνα με επεξηγήσιμο αλγόριθμο χρώματος προς ήχο." : "Created from an image with an explainable colour-to-sound algorithm."
    : "";
  const altLabel = interfaceLanguage() === "tr" ? "Erişilebilir görsel betimlemesi" : interfaceLanguage() === "el" ? "Προσβάσιμη περιγραφή εικόνας" : "Accessible image description";
  return [title, caption, alt ? `${altLabel}: ${alt}` : "", disclosure, hashtags].filter(Boolean).join("\n\n");
}

function updateSharePreview() {
  if (!state.sequence.length) return;
  const title = elements.shareTitle.value.trim() || (interfaceLanguage() === "tr" ? "HARMONY SENSE Bestesi" : interfaceLanguage() === "el" ? "Σύνθεση HARMONY SENSE" : "HARMONY SENSE Composition");
  const caption = elements.shareCaption.value.trim() || (interfaceLanguage() === "tr" ? "Gönderi metni bekleniyor." : interfaceLanguage() === "el" ? "Αναμονή κειμένου ανάρτησης." : "Waiting for post copy.");
  const hashtags = normalizedHashtags(elements.shareHashtags.value);
  const alt = elements.shareAlt.value.trim() || (interfaceLanguage() === "tr" ? "Betimleme eklenmedi." : interfaceLanguage() === "el" ? "Δεν προστέθηκε περιγραφή." : "No description added.");
  elements.sharePreviewImage.alt = alt;
  elements.sharePreviewText.textContent = `${title}\n\n${caption}\n\n${hashtags}`;
  const altLabel = interfaceLanguage() === "tr" ? "Görsel betimlemesi" : interfaceLanguage() === "el" ? "Περιγραφή εικόνας" : "Image description";
  elements.sharePreviewAlt.innerHTML = `<strong>${altLabel}:</strong> ${escapeHtml(alt)}`;
  elements.sharePreviewDisclosure.textContent = elements.shareDisclosure.checked
    ? interfaceLanguage() === "tr" ? "Şeffaflık etiketi: Görselden açıklanabilir renk-ses algoritmasıyla üretildi." : interfaceLanguage() === "el" ? "Ετικέτα διαφάνειας: Δημιουργήθηκε με επεξηγήσιμο αλγόριθμο χρώματος προς ήχο." : "Transparency label: Created with an explainable colour-to-sound algorithm."
    : interfaceLanguage() === "tr" ? "Şeffaflık etiketi kapalı." : interfaceLanguage() === "el" ? "Η ετικέτα διαφάνειας είναι απενεργοποιημένη." : "Transparency label disabled.";
  document.getElementById("publish-share").disabled = !elements.shareRights.checked;
}

async function copyShareDraft() {
  const text = shareDraftText();
  try {
    await navigator.clipboard.writeText(text);
    announce(`${socialPlatforms[state.activePlatform].label} gönderi metni panoya kopyalandı.`, true, [60, 30, 90]);
  } catch {
    announce("Metin kopyalanamadı; cihazın pano iznini kontrol edin.", true, [100, 40, 100]);
  }
}

function publishShareDraft() {
  if (!elements.shareRights.checked) {
    announce("Paylaşmadan önce kullanım hakkı ve betimleme onayını işaretleyin.", true, [90, 40, 90]);
    elements.shareRights.focus();
    return;
  }
  const platform = socialPlatforms[state.activePlatform];
  const title = elements.shareTitle.value.trim() || (interfaceLanguage() === "tr" ? "HARMONY SENSE Bestesi" : interfaceLanguage() === "el" ? "Σύνθεση HARMONY SENSE" : "HARMONY SENSE Composition");
  shareText(`${title} · ${platform.label}`, shareDraftText());
}

async function shareText(title, text) {
  const bridge = nativeBridge();
  if (bridge && typeof bridge.share === "function") {
    bridge.share(title, text);
    return;
  }
  if (navigator.share) {
    try {
      await navigator.share({ title, text });
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
    }
  }
  try {
    await navigator.clipboard.writeText(text);
    announce("Erişilebilir paylaşım metni panoya kopyalandı.", true, [60, 30, 90]);
  } catch {
    announce("Paylaşım bu cihazda desteklenmiyor.", true, [100, 40, 100]);
  }
}

function renderGallery(filter = "all") {
  const filtered = filter === "all" ? artworks : artworks.filter((item) => item.category === filter);
  elements.gallery.innerHTML = filtered.map((item) => `
    <article class="art-card">
      <button type="button" data-artwork="${item.id}" aria-label="${escapeHtml(item.title)} ayrıntısını aç">
        <img src="${item.image}" alt="${escapeHtml(item.description)}" loading="lazy" />
        <div class="art-card-body"><small>${escapeHtml(item.categoryLabel)}</small><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.artist)}</p></div>
      </button>
    </article>`).join("");
}

function openArtwork(id) {
  const artwork = artworks.find((item) => item.id === id);
  if (!artwork) return;
  state.activeArtwork = artwork;
  elements.dialogImage.src = artwork.image;
  elements.dialogImage.alt = artwork.description;
  elements.dialogTitle.textContent = artwork.title;
  elements.dialogArtist.textContent = artwork.artist;
  elements.dialogCategory.textContent = artwork.categoryLabel;
  elements.dialogDescription.textContent = artwork.description;
  elements.dialogAudio.src = artwork.audio;
  elements.dialogPalette.innerHTML = artwork.colors.map((color) => `<span><i style="background:${color.hex}"></i>${escapeHtml(color.name)}</span>`).join("");
  elements.dialog.showModal();
  vibrate([45]);
}

function renderSensorButtons() {
  elements.sensorButtons.innerHTML = sensorColors.map((color) =>
    `<button type="button" class="sensor-button" data-color="${color.name}"><i style="background:${color.hex}"></i>${color.name}</button>`,
  ).join("");
}

function playSimpleTone(frequency, duration = 0.55) {
  const audioContext = ensureAudioContext();
  if (!audioContext) return;
  const event = { frequency, volume: 0.2 };
  scheduleNote(audioContext, event, audioContext.currentTime + 0.02, duration, "synth");
}

function handleSensorColor(name) {
  const color = sensorColors.find((item) => item.name === name);
  if (!color) return;
  const dot = elements.sensorOutput.querySelector(".sensor-dot");
  elements.sensorOutput.querySelector("strong").textContent = color.name;
  elements.sensorOutput.querySelector("em").textContent = `${color.noteName} · ${Math.round(color.note)} Hz`;
  dot.style.background = color.hex;
  dot.style.boxShadow = `0 0 55px ${color.hex}`;
  playSimpleTone(color.note, 0.62);
  vibrate(color.vibration);
  speak(`${color.name}. ${color.noteName} notası.`);
}

function bindEvents() {
  window.addEventListener("online", updateNetworkStatus);
  window.addEventListener("offline", updateNetworkStatus);

  document.querySelector("#welcome-speak").addEventListener("click", () => speak("HARMONY SENSE, herhangi bir görseli ses, ritim, es ve titreşime dönüştüren erişilebilir içerik bestecisidir. Besteciyi aç düğmesiyle başlayın."));
  document.querySelector("#privacy-speak").addEventListener("click", () => speak("Görsel cihazda işlenir. Arşiv varsayılan olarak özeldir. Görseli paylaşmak ve buluta göndermek ayrı kullanıcı seçimi gerektirir. Yüz kimliği tanınmaz."));
  document.querySelector("#archive-guide").addEventListener("click", () => speak("Bestelerim arşivi yalnızca bu cihazda tutulan özel kayıtlarınızı gösterir. Her kaydı dinleyebilir, WAV indirebilir, paylaşabilir veya silebilirsiniz."));

  document.querySelector("#large-text").addEventListener("click", (event) => {
    const active = document.body.classList.toggle("large-text");
    event.currentTarget.setAttribute("aria-pressed", String(active));
    announce(active ? "Büyük yazı açıldı." : "Büyük yazı kapatıldı.", true);
  });
  document.querySelector("#contrast").addEventListener("click", (event) => {
    const active = document.body.classList.toggle("high-contrast");
    event.currentTarget.setAttribute("aria-pressed", String(active));
    announce(active ? "Yüksek kontrast açıldı." : "Yüksek kontrast kapatıldı.", true);
  });
  document.querySelector("#guide-toggle").addEventListener("click", (event) => {
    state.guideEnabled = !state.guideEnabled;
    event.currentTarget.setAttribute("aria-pressed", String(state.guideEnabled));
    if (!state.guideEnabled) {
      const bridge = nativeBridge();
      if (bridge?.stopSpeaking) bridge.stopSpeaking();
      else if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    }
    announce(state.guideEnabled ? "Sesli rehber açıldı." : "Sesli rehber kapatıldı.", state.guideEnabled);
  });
  document.querySelector("#music-toggle").addEventListener("click", async (event) => {
    if (elements.backgroundMusic.paused) {
      try {
        elements.backgroundMusic.volume = 0.18;
        await elements.backgroundMusic.play();
        event.currentTarget.setAttribute("aria-pressed", "true");
        announce("Fon müziği açıldı.", true);
      } catch { announce("Fon müziği başlatılamadı.", true); }
    } else {
      elements.backgroundMusic.pause();
      event.currentTarget.setAttribute("aria-pressed", "false");
      announce("Fon müziği kapatıldı.", true);
    }
  });

  document.querySelector("#camera-button").addEventListener("click", () => {
    if (!requireConsent()) return;
    announce("Kamera açılıyor. Fotoğrafı çektikten sonra uygulamaya dönün.", true, [45, 30, 80]);
    const bridge = nativeBridge();
    if (bridge && typeof bridge.openCamera === "function") bridge.openCamera();
    else elements.cameraInput.click();
  });
  document.querySelector("#gallery-button").addEventListener("click", () => {
    if (!requireConsent()) return;
    announce("Galeri açılıyor. Bestelemek istediğiniz görseli seçin.", true, [45]);
    elements.fileInput.click();
  });
  document.querySelector("#sample-button").addEventListener("click", async () => {
    elements.rightsConsent.checked = true;
    try { await loadComposerImage("assets/images/mona-lisa.jpg", "Mona Lisa Örneği"); }
    catch { announce("Örnek görsel açılamadı.", true); }
  });
  elements.fileInput.addEventListener("change", (event) => handleImageFile(event.target.files?.[0]));
  elements.cameraInput.addEventListener("change", (event) => handleImageFile(event.target.files?.[0]));

  elements.pixelSize.addEventListener("input", () => {
    elements.pixelSizeValue.textContent = elements.pixelSize.value;
  });
  elements.pixelSize.addEventListener("change", () => {
    if (!state.sourceImage) return;
    buildImageModel();
    state.sequence = [];
    setComposerButtons(true, false);
    elements.musicStatus.textContent = "Yeniden bestelenmeli";
    announce(`Piksel boyutu ${elements.pixelSize.value} piksel oldu. Görsel yeniden dönüştürüldü.`, true, [45]);
  });
  elements.tempo.addEventListener("input", () => { elements.tempoValue.textContent = elements.tempo.value; });

  document.querySelectorAll(".view-tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".view-tab").forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      state.activeView = button.dataset.view;
      if (state.sourceImage) renderImageView();
      const names = { natural: "orijinal piksel", palette: "ana ve ara renk", neon: "neon", gray: "siyah beyaz" };
      announce(`${names[state.activeView]} görünümü seçildi.`, true, [45]);
    });
  });

  document.querySelector("#compose-button").addEventListener("click", composeMusic);
  document.querySelector("#play-button").addEventListener("click", () => playSequence());
  document.querySelector("#stop-button").addEventListener("click", () => stopPlayback(true));
  document.querySelector("#download-image").addEventListener("click", downloadCanvasImage);
  document.querySelector("#download-audio").addEventListener("click", downloadCurrentAudio);
  document.querySelector("#describe-image").addEventListener("click", () => speak(state.analysis?.description || "Görsel analizi bulunmuyor."));
  document.querySelector("#save-archive").addEventListener("click", saveCurrentArchive);
  document.querySelector("#share-composition").addEventListener("click", () => prepareShareDraft({ scroll: true }));

  [elements.shareTitle, elements.shareCaption, elements.shareAlt, elements.shareHashtags].forEach((element) => {
    element.addEventListener("input", updateSharePreview);
  });
  elements.shareDisclosure.addEventListener("change", updateSharePreview);
  elements.shareRights.addEventListener("change", updateSharePreview);
  document.querySelectorAll("[data-platform]").forEach((button) => {
    button.addEventListener("click", () => selectPlatform(button.dataset.platform));
  });
  document.querySelector("#refresh-share").addEventListener("click", updateSharePreview);
  document.querySelector("#copy-share").addEventListener("click", copyShareDraft);
  document.querySelector("#publish-share").addEventListener("click", publishShareDraft);

  document.querySelectorAll("[data-move]").forEach((button) => button.addEventListener("click", () => moveManual(button.dataset.move)));
  elements.canvas.addEventListener("pointerdown", (event) => {
    if (!state.cells.length) return;
    const rect = elements.canvas.getBoundingClientRect();
    const x = (event.clientX - rect.left) * elements.canvas.width / rect.width;
    const y = (event.clientY - rect.top) * elements.canvas.height / rect.height;
    const cell = state.cells.find((item) => x >= item.x && x < item.x + item.width && y >= item.y && y < item.y + item.height);
    if (cell) playManualCell(state.cells.indexOf(cell));
  });

  elements.archiveGrid.addEventListener("click", async (event) => {
    const actionButton = event.target.closest("[data-archive-action]");
    const card = event.target.closest("[data-archive-id]");
    if (!actionButton || !card) return;
    try { await handleArchiveAction(card, actionButton.dataset.archiveAction); }
    catch { announce("Arşiv işlemi tamamlanamadı.", true, [100, 40, 100]); }
  });

  document.addEventListener("click", (event) => {
    const artworkButton = event.target.closest("[data-artwork]");
    if (artworkButton) openArtwork(artworkButton.dataset.artwork);
    const sensorButton = event.target.closest("[data-color]");
    if (sensorButton) handleSensorColor(sensorButton.dataset.color);
  });
  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderGallery(button.dataset.filter);
    });
  });
  document.querySelector("#dialog-close").addEventListener("click", () => elements.dialog.close());
  document.querySelector("#dialog-speak").addEventListener("click", () => speak(`${state.activeArtwork.title}. ${state.activeArtwork.description}`));
  document.querySelector("#dialog-melody").addEventListener("click", async () => {
    announce(`${state.activeArtwork.title} renk melodisi çalıyor.`, true, [60, 30, 90]);
    for (const color of state.activeArtwork.colors) {
      playSimpleTone(color.note, 0.38);
      await new Promise((resolve) => window.setTimeout(resolve, 430));
    }
  });
  document.querySelector("#dialog-compose").addEventListener("click", async () => {
    elements.dialog.close();
    elements.rightsConsent.checked = true;
    await loadComposerImage(state.activeArtwork.image, state.activeArtwork.title);
  });
  document.querySelector("#dialog-share").addEventListener("click", () => shareText(state.activeArtwork.title, `${state.activeArtwork.title} — ${state.activeArtwork.description}\n\n#HARMONYSENSE #PİKSENFONİ`));
}

window.DuyuSenseNative = {
  async onCameraImage(dataUrl) {
    try { await loadComposerImage(dataUrl, `Kamera ${new Date().toLocaleTimeString(window.DuyuI18n?.dateLocale() || "en-GB", { hour: "2-digit", minute: "2-digit" })}`); }
    catch { announce("Kamera fotoğrafı işlenemedi.", true, [120, 50, 120]); }
  },
  onCameraError(message) {
    announce(message || "Kamera işlemi iptal edildi.", true, [90]);
  },
  onFileSaved(message) {
    announce(message || "Dosya kaydedildi.", true, [60, 30, 100]);
  },
};

async function initialize() {
  renderGallery();
  renderSensorButtons();
  updateNetworkStatus();
  setComposerButtons(false, false);
  resetShareStudio();
  bindEvents();
  try { await openArchiveDb(); await renderArchive(); } catch { /* archive status is shown on demand */ }
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("service-worker.js").catch(() => undefined);
  }
  window.setTimeout(() => {
    if (state.guideEnabled) speak("HARMONY SENSE'e hoş geldiniz. Besteci bölümünde kamera, galeri veya örnek düğmesiyle başlayabilirsiniz.");
  }, 600);
}

window.addEventListener("duyu:languagechange", async () => {
  updateNetworkStatus();
  const activeFilter = document.querySelector(".filter.active")?.dataset.filter || "all";
  renderGallery(activeFilter);
  renderSensorButtons();
  updatePlatformUi();
  if (elements.dialog.open && state.activeArtwork) openArtwork(state.activeArtwork.id);
  try { await renderArchive(); } catch { /* archive may be unavailable in private browsing */ }
});

if (window.__DUYU_SENSE_TEST__) {
  window.DuyuSenseTest = {
    analyzeImage,
    cellToEvent,
    colorName,
    createSequence,
    createWavBlob,
    hslToRgb,
    luminance,
    rgbToHsl,
    state,
  };
} else {
  initialize();
}
