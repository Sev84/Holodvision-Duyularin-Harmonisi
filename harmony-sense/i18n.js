"use strict";

(() => {
  const STORAGE_KEY = "duyu-sense-language";
  const supported = ["en", "tr", "el"];
  const localeInfo = {
    en: { html: "en", speech: "en-US", date: "en-GB", label: "English" },
    tr: { html: "tr", speech: "tr-TR", date: "tr-TR", label: "Türkçe" },
    el: { html: "el", speech: "el-GR", date: "el-GR", label: "Ελληνικά" },
  };

  const copy = {
    "Ana içeriğe geç": ["Skip to main content", "Μετάβαση στο κύριο περιεχόμενο"],
    "HARMONY SENSE ana sayfa": ["HARMONY SENSE home", "Αρχική σελίδα HARMONY SENSE"],
    "GÖR · DUY · HİSSET": ["SEE · HEAR · FEEL", "ΔΕΣ · ΑΚΟΥ · ΝΙΩΣΕ"],
    "Ana menü": ["Main menu", "Κύριο μενού"],
    "Besteci": ["Composer", "Συνθέτης"],
    "Paylaşım": ["Share", "Κοινοποίηση"],
    "Arşiv": ["Archive", "Αρχείο"],
    "Galeri": ["Gallery", "Συλλογή"],
    "Gizlilik": ["Privacy", "Απόρρητο"],
    "Erişilebilirlik araçları": ["Accessibility tools", "Εργαλεία προσβασιμότητας"],
    "Büyük yazıyı aç veya kapat": ["Toggle large text", "Εναλλαγή μεγάλου κειμένου"],
    "Yüksek kontrastı aç veya kapat": ["Toggle high contrast", "Εναλλαγή υψηλής αντίθεσης"],
    "🔊 Rehber": ["🔊 Guide", "🔊 Οδηγός"],
    "♫ Fon": ["♫ Music", "♫ Μουσική"],
    "Erişilebilir sosyal içerik stüdyosu": ["Accessible social content studio", "Στούντιο προσβάσιμου κοινωνικού περιεχομένου"],
    "Görseli gör.": ["See the image.", "Δες την εικόνα."],
    "Sese ve hisse dönüştür.": ["Turn it into sound and touch.", "Μετέτρεψέ την σε ήχο και αφή."],
    "Bir görsel seçin. HARMONY SENSE renkleri nota, ritim, betimleme ve titreşime dönüştürsün; erişilebilir içeriğinizi istediğiniz platform için hazırlasın.": ["Choose an image. HARMONY SENSE turns its colours into notes, rhythm, description and vibration, then prepares accessible content for the platform you choose.", "Επιλέξτε μια εικόνα. Το HARMONY SENSE μετατρέπει τα χρώματά της σε νότες, ρυθμό, περιγραφή και δόνηση και προετοιμάζει προσβάσιμο περιεχόμενο για την πλατφόρμα που επιλέγετε."],
    "Besteciyi aç": ["Open composer", "Άνοιγμα συνθέτη"],
    "🔊 Projeyi dinle": ["🔊 Listen to the project", "🔊 Άκουσε το έργο"],
    "Desteklenen paylaşım hedefleri": ["Supported sharing platforms", "Υποστηριζόμενες πλατφόρμες κοινοποίησης"],
    "Bağlantı kontrol ediliyor": ["Checking connection", "Έλεγχος σύνδεσης"],
    "Temel besteci internetsiz de çalışır": ["The core composer also works offline", "Ο βασικός συνθέτης λειτουργεί και εκτός σύνδεσης"],
    "Renklerin notalara dönüştüğü soyut PİKSENFONİ görseli": ["Abstract PİKSENFONİ visual in which colours become notes", "Αφηρημένη εικόνα PİKSENFONİ όπου τα χρώματα γίνονται νότες"],
    "Dört adımlı erişilebilir akış": ["Four-step accessible flow", "Προσβάσιμη ροή τεσσάρων βημάτων"],
    "Her işlemde sesli ve dokunsal yönlendirme": ["Audio and haptic guidance at every step", "Ηχητική και απτική καθοδήγηση σε κάθε βήμα"],
    "1. Görsel seç": ["1. Choose an image", "1. Επίλεξε εικόνα"],
    "Kamerayla çek veya galeriden yükle.": ["Take a photo or upload from the gallery.", "Τράβηξε φωτογραφία ή ανέβασε από τη συλλογή."],
    "2. Dönüştür": ["2. Transform", "2. Μετατροπή"],
    "Kare piksel, ana–ara renk, neon veya gri görünüm seç.": ["Choose pixel, colour palette, neon or greyscale view.", "Επίλεξε προβολή pixel, παλέτας χρωμάτων, neon ή κλίμακας του γκρι."],
    "3. Bestele": ["3. Compose", "3. Σύνθεση"],
    "Renkleri notaya; siyah ve griyi vuruşa, beyazı ese dönüştür.": ["Turn colours into notes, black and grey into beats, and white into rests.", "Μετέτρεψε τα χρώματα σε νότες, το μαύρο και το γκρι σε χτύπους και το λευκό σε παύσεις."],
    "4. Arşivle": ["4. Save", "4. Αποθήκευση"],
    "Çalışmanı kaydet, indir veya erişilebilir sosyal medya metniyle paylaş.": ["Save or download your work, or share it with accessible social media copy.", "Αποθήκευσε ή κατέβασε το έργο σου ή κοινοποίησέ το με προσβάσιμο κείμενο για κοινωνικά δίκτυα."],
    "PİKSENFONİ erişilebilir içerik stüdyosu": ["PİKSENFONİ accessible content studio", "Στούντιο προσβάσιμου περιεχομένου PİKSENFONİ"],
    "Görselden Müzik Bestecisi": ["Image-to-Music Composer", "Συνθέτης μουσικής από εικόνα"],
    "İşlem cihazda yapılır. Fotoğraf, siz paylaşmayı seçmediğiniz sürece dışarı gönderilmez.": ["Processing stays on your device. The image leaves the device only when you choose to share it.", "Η επεξεργασία γίνεται στη συσκευή σας. Η εικόνα αποστέλλεται μόνο όταν επιλέξετε να την κοινοποιήσετε."],
    "🔒 Cihazda işleme": ["🔒 On-device processing", "🔒 Επεξεργασία στη συσκευή"],
    "Bu görseli kullanma hakkına sahibim; kişisel veri ve paylaşım sorumluluğunu anladım.": ["I have the right to use this image and understand my responsibility for personal data and sharing.", "Έχω το δικαίωμα χρήσης αυτής της εικόνας και κατανοώ την ευθύνη μου για τα προσωπικά δεδομένα και την κοινοποίηση."],
    "Aydınlatmayı dinle": ["Listen to privacy notice", "Άκουσε την ενημέρωση απορρήτου"],
    "Görseli al": ["Add an image", "Προσθήκη εικόνας"],
    "Portre, manzara, nesne, çizim veya sanat eseri olabilir.": ["Use a portrait, landscape, object, drawing or artwork.", "Χρησιμοποίησε πορτρέτο, τοπίο, αντικείμενο, σχέδιο ή έργο τέχνης."],
    "📷 Kamerayla çek": ["📷 Take photo", "📷 Λήψη φωτογραφίας"],
    "🖼️ Galeriden yükle": ["🖼️ Upload from gallery", "🖼️ Ανέβασμα από συλλογή"],
    "✨ Örnekle dene": ["✨ Try a sample", "✨ Δοκιμή δείγματος"],
    "Görünümü dönüştür": ["Transform the image", "Μετατροπή εικόνας"],
    "Görsel bekleniyor": ["Waiting for image", "Αναμονή εικόνας"],
    "Seçilen görselin besteci önizlemesi": ["Composer preview of the selected image", "Προεπισκόπηση συνθέτη της επιλεγμένης εικόνας"],
    "Henüz görsel seçilmedi": ["No image selected yet", "Δεν έχει επιλεγεί εικόνα"],
    "Kamera, galeri veya örnek görsel düğmesini kullanın.": ["Use the camera, gallery or sample image button.", "Χρησιμοποιήστε το κουμπί κάμερας, συλλογής ή δείγματος."],
    "Görsel dönüşüm türü": ["Image transformation type", "Τύπος μετατροπής εικόνας"],
    "Orijinal piksel": ["Original pixel", "Αρχικό pixel"],
    "Ana–ara renk": ["Colour palette", "Παλέτα χρωμάτων"],
    "Neon": ["Neon", "Neon"],
    "Siyah–beyaz": ["Greyscale", "Κλίμακα του γκρι"],
    "Piksel boyutu": ["Pixel size", "Μέγεθος pixel"],
    "⬇️ Görseli indir": ["⬇️ Download image", "⬇️ Λήψη εικόνας"],
    "🔊 Ön tanıyı dinle": ["🔊 Listen to analysis", "🔊 Άκουσε την ανάλυση"],
    "Besteyi oluştur": ["Create composition", "Δημιουργία σύνθεσης"],
    "Hazır değil": ["Not ready", "Δεν είναι έτοιμο"],
    "Cihaz içi açıklanabilir ön analiz": ["Explainable on-device analysis", "Επεξηγήσιμη ανάλυση στη συσκευή"],
    "Görsel seçildiğinde biçim, renk ve parlaklık analizi burada açıklanır.": ["Shape, colour and brightness analysis appears here after you choose an image.", "Η ανάλυση σχήματος, χρώματος και φωτεινότητας εμφανίζεται εδώ αφού επιλέξετε εικόνα."],
    "Baskın renk paleti": ["Dominant colour palette", "Κυρίαρχη παλέτα χρωμάτων"],
    "Bu sonuç yüz kimliği tanımaz; yalnızca görsel özelliklerden ön sınıflandırma yapar.": ["This analysis does not identify faces. It only classifies visual features.", "Η ανάλυση δεν αναγνωρίζει πρόσωπα. Ταξινομεί μόνο οπτικά χαρακτηριστικά."],
    "Enstrüman": ["Instrument", "Όργανο"],
    "Sentezleyici": ["Synthesizer", "Συνθεσάιζερ"],
    "Piyano": ["Piano", "Πιάνο"],
    "Keman": ["Violin", "Βιολί"],
    "Akustik gitar": ["Acoustic guitar", "Ακουστική κιθάρα"],
    "🎼 Otomatik bestele": ["🎼 Compose automatically", "🎼 Αυτόματη σύνθεση"],
    "▶ Besteyi çal": ["▶ Play composition", "▶ Αναπαραγωγή σύνθεσης"],
    "■ Durdur": ["■ Stop", "■ Διακοπή"],
    "⬇ WAV indir": ["⬇ Download WAV", "⬇ Λήψη WAV"],
    "Manuel dokun–çal modu": ["Manual touch-to-play mode", "Χειροκίνητη λειτουργία αφής"],
    "Kare üzerinde dokunun veya yön düğmeleriyle ilerleyin. Her hücre ses ve titreşimle bildirilir.": ["Touch a square or use the direction buttons. Each cell responds with sound and vibration.", "Αγγίξτε ένα τετράγωνο ή χρησιμοποιήστε τα πλήκτρα κατεύθυνσης. Κάθε κελί αποκρίνεται με ήχο και δόνηση."],
    "Manuel tarama yönleri": ["Manual scan directions", "Κατευθύνσεις χειροκίνητης σάρωσης"],
    "Yukarı git": ["Move up", "Μετακίνηση επάνω"],
    "Sola git": ["Move left", "Μετακίνηση αριστερά"],
    "Aşağı git": ["Move down", "Μετακίνηση κάτω"],
    "Sağa git": ["Move right", "Μετακίνηση δεξιά"],
    "Nota defteri": ["Score", "Παρτιτούρα"],
    "Henüz beste oluşturulmadı.": ["No composition yet.", "Δεν έχει δημιουργηθεί σύνθεση."],
    "Çalışmanın adı": ["Composition title", "Τίτλος σύνθεσης"],
    "Örneğin: Gün Batımı Senfonisi": ["Example: Sunset Symphony", "Παράδειγμα: Συμφωνία Ηλιοβασιλέματος"],
    "🗂️ Özel arşive kaydet": ["🗂️ Save to private archive", "🗂️ Αποθήκευση σε ιδιωτικό αρχείο"],
    "↗ sosyal medya gönderisini hazırla": ["↗ Prepare social media post", "↗ Προετοιμασία ανάρτησης"],
    "Her platform için erişilebilir içerik": ["Accessible content for every platform", "Προσβάσιμο περιεχόμενο για κάθε πλατφόρμα"],
    "Gönderi Stüdyosu": ["Post Studio", "Στούντιο αναρτήσεων"],
    "Bestenizi seçtiğiniz platformun diline uygun metin, erişilebilir betimleme ve şeffaflık etiketiyle hazırlayın.": ["Prepare your composition with platform-ready copy, an accessible description and a transparency label.", "Προετοιμάστε τη σύνθεσή σας με κείμενο κατάλληλο για την πλατφόρμα, προσβάσιμη περιγραφή και ετικέτα διαφάνειας."],
    "Önce beste oluşturun": ["Create a composition first", "Δημιουργήστε πρώτα μια σύνθεση"],
    "Paylaşım hedefi": ["Sharing platform", "Πλατφόρμα κοινοποίησης"],
    "Sosyal platform seçin": ["Choose a social platform", "Επιλέξτε κοινωνική πλατφόρμα"],
    "Instagram için görsel odaklı, kısa ve etiketli gönderi biçimi.": ["A concise, image-led post format for Instagram.", "Σύντομη μορφή ανάρτησης με έμφαση στην εικόνα για το Instagram."],
    "Gönderi başlığı": ["Post title", "Τίτλος ανάρτησης"],
    "Gönderi metni": ["Post copy", "Κείμενο ανάρτησης"],
    "Erişilebilir görsel betimlemesi": ["Accessible image description", "Προσβάσιμη περιγραφή εικόνας"],
    "Bu alan ekran okuyucu kullanıcıları için görselin temel biçim, renk ve parlaklık özelliklerini açıklar.": ["This field explains the image's main shape, colour and brightness features for screen reader users.", "Αυτό το πεδίο εξηγεί τα κύρια χαρακτηριστικά σχήματος, χρώματος και φωτεινότητας για χρήστες αναγνώστη οθόνης."],
    "Etiketler": ["Hashtags", "Ετικέτες"],
    "“Görselden açıklanabilir algoritmayla üretildi” etiketi gönderide görünsün.": ["Show the label “Created from an image with an explainable algorithm”.", "Εμφάνιση της ετικέτας «Δημιουργήθηκε από εικόνα με επεξηγήσιμο αλγόριθμο»."],
    "Bu içeriği paylaşma hakkına sahibim; erişilebilir betimlemeyi kontrol ettim.": ["I have the right to share this content and have checked the accessible description.", "Έχω το δικαίωμα κοινοποίησης αυτού του περιεχομένου και έλεγξα την προσβάσιμη περιγραφή."],
    "↻ Önizlemeyi yenile": ["↻ Refresh preview", "↻ Ανανέωση προεπισκόπησης"],
    "⧉ Metni kopyala": ["⧉ Copy text", "⧉ Αντιγραφή κειμένου"],
    "↗ Instagram için hazırla": ["↗ Prepare for Instagram", "↗ Προετοιμασία για Instagram"],
    "Uygulama izniniz olmadan otomatik yayın yapmaz. Son paylaşım, cihazın güvenli paylaşım ekranında sizin onayınızla tamamlanır.": ["The app never publishes automatically. You confirm the final post in your device's secure sharing screen.", "Η εφαρμογή δεν δημοσιεύει αυτόματα. Επιβεβαιώνετε την τελική ανάρτηση στην ασφαλή οθόνη κοινοποίησης της συσκευής σας."],
    "Instagram · erişilebilir içerik": ["Instagram · accessible content", "Instagram · προσβάσιμο περιεχόμενο"],
    "♿ Betimlemeli": ["♿ Described", "♿ Με περιγραφή"],
    "Gönderi önizlemesi için henüz görsel oluşturulmadı": ["No image has been created for the post preview", "Δεν έχει δημιουργηθεί εικόνα για την προεπισκόπηση"],
    "Gönderi önizlemesi": ["Post preview", "Προεπισκόπηση ανάρτησης"],
    "Bestenizi oluşturduğunuzda sosyal medya gönderisi burada hazırlanacaktır.": ["Your social media post will appear here after you create a composition.", "Η ανάρτηση θα εμφανιστεί εδώ αφού δημιουργήσετε μια σύνθεση."],
    "Görsel betimlemesi:": ["Image description:", "Περιγραφή εικόνας:"],
    "Henüz hazır değil.": ["Not ready yet.", "Δεν είναι ακόμη έτοιμο."],
    "Açıklanabilir üretim etiketi bekleniyor.": ["Waiting for the explainable-generation label.", "Αναμονή της ετικέτας επεξηγήσιμης δημιουργίας."],
    "Cihaz içi özel arşiv": ["Private on-device archive", "Ιδιωτικό αρχείο στη συσκευή"],
    "Bestelerim": ["My compositions", "Οι συνθέσεις μου"],
    "Arşiv varsayılan olarak yalnızca bu cihazda tutulur. Silme ve paylaşma sizin kontrolünüzdedir.": ["The archive stays on this device by default. You control deletion and sharing.", "Το αρχείο παραμένει σε αυτή τη συσκευή από προεπιλογή. Εσείς ελέγχετε τη διαγραφή και την κοινοποίηση."],
    "🔊 Arşivi dinle": ["🔊 Listen to archive", "🔊 Ακρόαση αρχείου"],
    "Henüz kayıt yok. İlk bestenizi oluşturup arşive kaydedin.": ["No saved work yet. Create your first composition and save it here.", "Δεν υπάρχουν αποθηκευμένα έργα. Δημιουργήστε την πρώτη σύνθεση και αποθηκεύστε την εδώ."],
    "Duyuların Harmonisi sanat atölyesi": ["Harmony of the Senses art studio", "Εργαστήριο τέχνης Αρμονία των Αισθήσεων"],
    "Erişilebilir eser galerisi": ["Accessible artwork gallery", "Συλλογή προσβάσιμων έργων"],
    "Galeri filtresi": ["Gallery filter", "Φίλτρο συλλογής"],
    "Tümü": ["All", "Όλα"],
    "Orijinal": ["Original", "Πρωτότυπο"],
    "Piksel yorum": ["Pixel interpretation", "Ερμηνεία pixel"],
    "IoT renk eldiveni ve erişilebilir dokunuş": ["IoT colour glove and accessible touch", "Γάντι χρώματος IoT και προσβάσιμη αφή"],
    "Renge dokun, notayı duy": ["Touch a colour, hear its note", "Άγγιξε ένα χρώμα, άκουσε τη νότα"],
    "TCS34725 renk sensörlü eldivenden alınacak renk değeri aynı nota–titreşim motoruna bağlanabilir. Paket içindeki güvenli demoda renk düğmelerini kullanın.": ["Colour values from a TCS34725 sensor glove can drive the same note and vibration engine. Use the colour buttons in this safe demo.", "Οι τιμές χρώματος από γάντι με αισθητήρα TCS34725 μπορούν να τροφοδοτούν τον ίδιο μηχανισμό νότας και δόνησης. Χρησιμοποιήστε τα κουμπιά χρώματος σε αυτή την ασφαλή επίδειξη."],
    "Renk notaları": ["Colour notes", "Νότες χρωμάτων"],
    "Algılanan renk": ["Detected colour", "Ανιχνευμένο χρώμα"],
    "Bir renk seçin": ["Choose a colour", "Επιλέξτε χρώμα"],
    "Nota bekleniyor": ["Waiting for note", "Αναμονή νότας"],
    "Toplumsal sürdürülebilirlik için duyusal erişim": ["Sensory access for social sustainability", "Αισθητηριακή πρόσβαση για κοινωνική βιωσιμότητα"],
    "Erişilebilir içerikten eşit dijital katılıma": ["From accessible content to equal digital participation", "Από το προσβάσιμο περιεχόμενο στην ισότιμη ψηφιακή συμμετοχή"],
    "HARMONY SENSE, önceki HOLO-D-VISION/PİKSENFONİ çalışmalarından doğan renk–ses yaklaşımını; kamera, erişilebilir sosyal içerik üretimi, özel arşiv ve çoklu platform paylaşımıyla bağımsız bir dijital kapsayıcılık ürününe dönüştürür.": ["HARMONY SENSE develops the colour-to-sound approach from HOLO-D-VISION and PİKSENFONİ into an independent digital inclusion product with camera input, accessible content creation, a private archive and multi-platform sharing.", "Το HARMONY SENSE εξελίσσει την προσέγγιση χρώματος προς ήχο των HOLO-D-VISION και PİKSENFONİ σε ανεξάρτητο προϊόν ψηφιακής ένταξης με κάμερα, δημιουργία προσβάσιμου περιεχομένου, ιδιωτικό αρχείο και κοινοποίηση σε πολλές πλατφόρμες."],
    "Kapsayıcı UX": ["Inclusive UX", "Συμπεριληπτική εμπειρία"],
    "TalkBack uyumlu etiketler, büyük hedefler, sesli rehber, kontrast ve titreşim.": ["TalkBack-ready labels, large touch targets, audio guidance, contrast and vibration.", "Ετικέτες συμβατές με TalkBack, μεγάλοι στόχοι αφής, ηχητική καθοδήγηση, αντίθεση και δόνηση."],
    "Açıklanabilir dönüşüm": ["Explainable transformation", "Επεξηγήσιμη μετατροπή"],
    "Her notanın renk, parlaklık ve doygunluk karşılığı kullanıcıya gösterilir.": ["Users can see the colour, brightness and saturation behind every note.", "Οι χρήστες βλέπουν το χρώμα, τη φωτεινότητα και τον κορεσμό πίσω από κάθε νότα."],
    "Mahremiyet": ["Privacy", "Απόρρητο"],
    "Yerel işleme, açık onay, özel arşiv, silme hakkı ve anahtarsız güvenli prototip.": ["Local processing, clear consent, a private archive, deletion control and a prototype with no embedded API keys.", "Τοπική επεξεργασία, σαφής συγκατάθεση, ιδιωτικό αρχείο, έλεγχος διαγραφής και πρωτότυπο χωρίς ενσωματωμένα κλειδιά API."],
    "Sosyal iyi oluş": ["Social wellbeing", "Κοινωνική ευημερία"],
    "Sanat üzerinden ifade, paylaşım ve topluluk katılımını destekler; klinik terapi iddiasında bulunmaz.": ["The app supports expression and community participation through art. It makes no clinical therapy claim.", "Η εφαρμογή υποστηρίζει την έκφραση και τη συμμετοχή στην κοινότητα μέσω της τέχνης. Δεν διατυπώνει ισχυρισμό κλινικής θεραπείας."],
    "Kullanılabilirlik doğrulaması:": ["Usability validation:", "Επικύρωση χρηστικότητας:"],
    "Yarışma pilotu için görev tamamlama, erişilebilirlik ve memnuniyet verilerini etik biçimde toplayın.": ["Collect task completion, accessibility and satisfaction data ethically during the competition pilot.", "Συλλέξτε δεοντολογικά δεδομένα ολοκλήρωσης εργασιών, προσβασιμότητας και ικανοποίησης κατά την πιλοτική δοκιμή."],
    "Pilot kullanıcı testi aracını açın →": ["Open the pilot usability tool →", "Άνοιγμα εργαλείου πιλοτικής δοκιμής →"],
    "Eser ayrıntısını kapat": ["Close artwork details", "Κλείσιμο λεπτομερειών έργου"],
    "Baskın renkler": ["Dominant colours", "Κυρίαρχα χρώματα"],
    "🔊 Betimlemeyi dinle": ["🔊 Listen to description", "🔊 Ακρόαση περιγραφής"],
    "✨ Renk melodisini çal": ["✨ Play colour melody", "✨ Αναπαραγωγή μελωδίας χρωμάτων"],
    "🎼 Bestecide aç": ["🎼 Open in composer", "🎼 Άνοιγμα στον συνθέτη"],
    "↗ Paylaş": ["↗ Share", "↗ Κοινοποίηση"],
    "HOLO-D-VISION × PİKSENFONİ · Erişilebilir sosyal içerik ve dijital katılım · 2026": ["HOLO-D-VISION × PİKSENFONİ · Accessible social content and digital participation · 2026", "HOLO-D-VISION × PİKSENFONİ · Προσβάσιμο κοινωνικό περιεχόμενο και ψηφιακή συμμετοχή · 2026"],
    "Gizlilik Politikası": ["Privacy Policy", "Πολιτική Απορρήτου"],

    "Çevrimiçi": ["Online", "Σε σύνδεση"],
    "Çevrimdışı": ["Offline", "Εκτός σύνδεσης"],
    "Analiz tamamlandı": ["Analysis complete", "Η ανάλυση ολοκληρώθηκε"],
    "Bestelenmeye hazır": ["Ready to compose", "Έτοιμο για σύνθεση"],
    "Yeniden bestelenmeli": ["Recomposition needed", "Απαιτείται νέα σύνθεση"],
    "Beste tamamlandı": ["Composition complete", "Η σύνθεση ολοκληρώθηκε"],
    "Durduruldu": ["Stopped", "Διακόπηκε"],
    "Gönderi taslağı hazır": ["Post draft ready", "Το προσχέδιο είναι έτοιμο"],
    "Arşiv bu cihazda kullanılamıyor.": ["The archive is unavailable on this device.", "Το αρχείο δεν είναι διαθέσιμο σε αυτή τη συσκευή."],
    "Nesne veya sanat kompozisyonu": ["Object or art composition", "Αντικείμενο ή καλλιτεχνική σύνθεση"],
    "Kişi veya portre olasılığı yüksek": ["Likely person or portrait", "Πιθανό πρόσωπο ή πορτρέτο"],
    "Manzara veya doğa sahnesi olasılığı yüksek": ["Likely landscape or nature scene", "Πιθανό τοπίο ή φυσική σκηνή"],
    "Yatay sahne veya manzara biçimi": ["Horizontal scene or landscape format", "Οριζόντια σκηνή ή μορφή τοπίου"],
    "Dikey portre biçimi": ["Vertical portrait format", "Κατακόρυφη μορφή πορτρέτου"],
    "Ayrıntılı nesne, yapı veya çizim": ["Detailed object, structure or drawing", "Λεπτομερές αντικείμενο, κατασκευή ή σχέδιο"],
    "yatay": ["horizontal", "οριζόντια"],
    "dikey": ["vertical", "κατακόρυφη"],
    "kareye yakın": ["nearly square", "σχεδόν τετράγωνη"],
    "Siyah": ["Black", "Μαύρο"],
    "Beyaz": ["White", "Λευκό"],
    "Koyu gri": ["Dark grey", "Σκούρο γκρι"],
    "Gri": ["Grey", "Γκρι"],
    "Açık gri": ["Light grey", "Ανοιχτό γκρι"],
    "Kırmızı": ["Red", "Κόκκινο"],
    "Turuncu": ["Orange", "Πορτοκαλί"],
    "Sarı": ["Yellow", "Κίτρινο"],
    "Yeşil": ["Green", "Πράσινο"],
    "Turkuaz": ["Turquoise", "Τιρκουάζ"],
    "Mavi": ["Blue", "Μπλε"],
    "Mor": ["Purple", "Μοβ"],
    "Pembe": ["Pink", "Ροζ"],
    "Koyu vuruş": ["Dark beat", "Σκούρος χτύπος"],
    "Orta gri vuruş": ["Mid-grey beat", "Μεσαίος γκρι χτύπος"],
    "Açık gri vuruş": ["Light-grey beat", "Ανοιχτός γκρι χτύπος"],
    "Es": ["Rest", "Παύση"],
    "Önce bir görsel seçin.": ["Choose an image first.", "Επιλέξτε πρώτα μια εικόνα."],
    "Önce bir görsel seçip besteyi oluşturun.": ["Choose an image and create a composition first.", "Επιλέξτε εικόνα και δημιουργήστε πρώτα μια σύνθεση."],
    "Önce görsel kullanım ve gizlilik onay kutusunu işaretleyin.": ["Confirm image rights and privacy before continuing.", "Επιβεβαιώστε τα δικαιώματα εικόνας και το απόρρητο πριν συνεχίσετε."],
    "Görsel yükleniyor ve cihazda analiz ediliyor.": ["The image is loading and being analysed on your device.", "Η εικόνα φορτώνεται και αναλύεται στη συσκευή σας."],
    "Görsel yüklenemedi.": ["The image could not be loaded.", "Δεν ήταν δυνατή η φόρτωση της εικόνας."],
    "Görsel açılamadı": ["The image could not be opened", "Δεν ήταν δυνατό το άνοιγμα της εικόνας"],
    "Dosya okunamadı": ["The file could not be read", "Δεν ήταν δυνατή η ανάγνωση του αρχείου"],
    "Yalnızca JPG, PNG veya WebP görsel yükleyebilirsiniz.": ["You can upload JPG, PNG or WebP images only.", "Μπορείτε να ανεβάσετε μόνο εικόνες JPG, PNG ή WebP."],
    "Görsel 15 megabayttan küçük olmalı.": ["The image must be smaller than 15 MB.", "Η εικόνα πρέπει να είναι μικρότερη από 15 MB."],
    "Bu cihaz Web Audio özelliğini desteklemiyor.": ["This device does not support Web Audio.", "Αυτή η συσκευή δεν υποστηρίζει Web Audio."],
    "Beste durduruldu.": ["Composition stopped.", "Η σύνθεση διακόπηκε."],
    "Beste tamamlandı. Dördüncü adım: arşive kaydedebilir, WAV olarak indirebilir veya paylaşabilirsiniz.": ["Composition complete. You can now save it, download a WAV file or share it.", "Η σύνθεση ολοκληρώθηκε. Μπορείτε τώρα να την αποθηκεύσετε, να κατεβάσετε αρχείο WAV ή να την κοινοποιήσετε."],
    "Beste çalıyor. Renk notaları, gri vuruşlar ve beyaz esler sırayla taranıyor.": ["Playing the composition. Colour notes, grey beats and white rests are scanned in sequence.", "Αναπαραγωγή σύνθεσης. Οι νότες χρωμάτων, οι γκρι χτύποι και οι λευκές παύσεις σαρώνονται διαδοχικά."],
    "Arşiv kaydı silindi.": ["Archive entry deleted.", "Η εγγραφή διαγράφηκε."],
    "Erişilebilir paylaşım metni panoya kopyalandı.": ["Accessible sharing text copied to the clipboard.", "Το προσβάσιμο κείμενο αντιγράφηκε στο πρόχειρο."],
    "Metin kopyalanamadı; cihazın pano iznini kontrol edin.": ["The text could not be copied. Check clipboard permission.", "Δεν ήταν δυνατή η αντιγραφή. Ελέγξτε την άδεια προχείρου."],
    "Paylaşmadan önce kullanım hakkı ve betimleme onayını işaretleyin.": ["Confirm sharing rights and the image description before sharing.", "Επιβεβαιώστε τα δικαιώματα κοινοποίησης και την περιγραφή εικόνας πριν από την κοινοποίηση."],
    "Paylaşım bu cihazda desteklenmiyor.": ["Sharing is not supported on this device.", "Η κοινοποίηση δεν υποστηρίζεται σε αυτή τη συσκευή."],
    "Büyük yazı açıldı.": ["Large text enabled.", "Το μεγάλο κείμενο ενεργοποιήθηκε."],
    "Büyük yazı kapatıldı.": ["Large text disabled.", "Το μεγάλο κείμενο απενεργοποιήθηκε."],
    "Yüksek kontrast açıldı.": ["High contrast enabled.", "Η υψηλή αντίθεση ενεργοποιήθηκε."],
    "Yüksek kontrast kapatıldı.": ["High contrast disabled.", "Η υψηλή αντίθεση απενεργοποιήθηκε."],
    "Sesli rehber açıldı.": ["Audio guide enabled.", "Ο ηχητικός οδηγός ενεργοποιήθηκε."],
    "Sesli rehber kapatıldı.": ["Audio guide disabled.", "Ο ηχητικός οδηγός απενεργοποιήθηκε."],
    "Fon müziği açıldı.": ["Background music enabled.", "Η μουσική υπόκρουση ενεργοποιήθηκε."],
    "Fon müziği başlatılamadı.": ["Background music could not start.", "Δεν ήταν δυνατή η έναρξη της μουσικής υπόκρουσης."],
    "Fon müziği kapatıldı.": ["Background music disabled.", "Η μουσική υπόκρουση απενεργοποιήθηκε."],
    "Kamera açılıyor. Fotoğrafı çektikten sonra uygulamaya dönün.": ["Opening the camera. Return to the app after taking the photo.", "Άνοιγμα κάμερας. Επιστρέψτε στην εφαρμογή αφού τραβήξετε τη φωτογραφία."],
    "Galeri açılıyor. Bestelemek istediğiniz görseli seçin.": ["Opening the gallery. Choose the image you want to compose.", "Άνοιγμα συλλογής. Επιλέξτε την εικόνα που θέλετε να συνθέσετε."],
    "Örnek görsel açılamadı.": ["The sample image could not be opened.", "Δεν ήταν δυνατό το άνοιγμα του δείγματος."],
    "Kamera fotoğrafı işlenemedi.": ["The camera photo could not be processed.", "Δεν ήταν δυνατή η επεξεργασία της φωτογραφίας."],
    "Kamera işlemi iptal edildi.": ["Camera action cancelled.", "Η ενέργεια κάμερας ακυρώθηκε."],
    "Dosya kaydedildi.": ["File saved.", "Το αρχείο αποθηκεύτηκε."],
    "Arşiv işlemi tamamlanamadı.": ["The archive action could not be completed.", "Δεν ήταν δυνατή η ολοκλήρωση της ενέργειας αρχείου."],
    "HARMONY SENSE'e hoş geldiniz. Besteci bölümünde kamera, galeri veya örnek düğmesiyle başlayabilirsiniz.": ["Welcome to HARMONY SENSE. Start in the Composer with the camera, gallery or sample button.", "Καλώς ήρθατε στο HARMONY SENSE. Ξεκινήστε στον Συνθέτη με το κουμπί κάμερας, συλλογής ή δείγματος."],
    "HARMONY SENSE, herhangi bir görseli ses, ritim, es ve titreşime dönüştüren erişilebilir içerik bestecisidir. Besteciyi aç düğmesiyle başlayın.": ["HARMONY SENSE is an accessible content composer that turns any image into sound, rhythm, rests and vibration. Select Open Composer to begin.", "Το HARMONY SENSE είναι ένας προσβάσιμος συνθέτης περιεχομένου που μετατρέπει κάθε εικόνα σε ήχο, ρυθμό, παύσεις και δόνηση. Επιλέξτε Άνοιγμα συνθέτη για να ξεκινήσετε."],
  };

  const normalizeCopyKey = (value) => String(value).replace(/\s+/g, " ").trim();
  const normalizedCopy = new Map(
    Object.entries(copy).map(([source, translations]) => [normalizeCopyKey(source), translations]),
  );

  const nodeSources = new WeakMap();
  const attributeSources = new WeakMap();
  let current = supported.includes(localStorage.getItem(STORAGE_KEY)) ? localStorage.getItem(STORAGE_KEY) : "en";
  let observer;

  function translateExact(value, language = current) {
    if (language === "tr") return value;
    const item = copy[value] || normalizedCopy.get(normalizeCopyKey(value));
    if (item) return language === "el" ? item[1] : item[0];
    const events = value.match(/^(\d+) olay hazır$/);
    if (events) return language === "el" ? `${events[1]} συμβάντα έτοιμα` : `${events[1]} events ready`;
    const pixels = value.match(/^Piksel boyutu (\d+) piksel oldu\. Görsel yeniden dönüştürüldü\.$/);
    if (pixels) return language === "el" ? `Το μέγεθος pixel είναι ${pixels[1]}. Η εικόνα μετατράπηκε ξανά.` : `Pixel size set to ${pixels[1]}. The image was transformed again.`;
    return value;
  }

  function translateTextNode(node) {
    if (!nodeSources.has(node)) nodeSources.set(node, node.nodeValue);
    const source = nodeSources.get(node);
    const trimmed = source.trim();
    if (!trimmed) return;
    const translated = translateExact(trimmed);
    if (translated === trimmed && current === "tr") {
      node.nodeValue = source;
      return;
    }
    node.nodeValue = source.replace(trimmed, translated);
  }

  function translateAttributes(element) {
    const attrs = ["aria-label", "alt", "placeholder", "title"];
    if (element instanceof HTMLInputElement && element.type === "text") attrs.push("value");
    let sources = attributeSources.get(element);
    if (!sources) {
      sources = {};
      attributeSources.set(element, sources);
    }
    for (const name of attrs) {
      if (!element.hasAttribute(name)) continue;
      if (!(name in sources)) sources[name] = element.getAttribute(name);
      const translated = translateExact(sources[name]);
      if (name === "value") element.value = translated;
      else element.setAttribute(name, translated);
    }
  }

  function translateSubtree(root) {
    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }
    if (!(root instanceof Element)) return;
    translateAttributes(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
      else translateAttributes(node);
      node = walker.nextNode();
    }
  }

  function setMetadata() {
    const meta = document.querySelector('meta[name="description"]');
    const titles = {
      en: "HARMONY SENSE · See, Hear, Feel, Share",
      tr: "HARMONY SENSE · Gör, Duy, Hisset, Paylaş",
      el: "HARMONY SENSE · Δες, Άκου, Νιώσε, Μοιράσου",
    };
    const descriptions = {
      en: "HARMONY SENSE turns images into colour, notes, rhythm, accessible descriptions and haptic feedback.",
      tr: "HARMONY SENSE görselleri renge, notaya, ritme, erişilebilir betimlemeye ve dokunsal geri bildirime dönüştürür.",
      el: "Το HARMONY SENSE μετατρέπει εικόνες σε χρώμα, νότες, ρυθμό, προσβάσιμες περιγραφές και απτική ανάδραση.",
    };
    document.documentElement.lang = localeInfo[current].html;
    document.title = titles[current];
    if (meta) meta.setAttribute("content", descriptions[current]);
  }

  function updateButtons() {
    document.querySelectorAll("[data-language]").forEach((button) => {
      const active = button.dataset.language === current;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function applyAll() {
    if (observer) observer.disconnect();
    translateSubtree(document.body);
    setMetadata();
    updateButtons();
    if (observer) observer.observe(document.body, { childList: true, characterData: true, subtree: true });
  }

  function setLanguage(language, persist = true) {
    if (!supported.includes(language)) return;
    current = language;
    if (persist) localStorage.setItem(STORAGE_KEY, language);
    applyAll();
    window.dispatchEvent(new CustomEvent("duyu:languagechange", { detail: { language } }));
  }

  window.DuyuI18n = {
    get language() { return current; },
    t: translateExact,
    speechLanguage: () => localeInfo[current].speech,
    dateLocale: () => localeInfo[current].date,
    setLanguage,
  };

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });
  applyAll();
  observer = new MutationObserver((mutations) => {
    observer.disconnect();
    for (const mutation of mutations) {
      if (mutation.type === "characterData") translateTextNode(mutation.target);
      mutation.addedNodes.forEach(translateSubtree);
    }
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
  });
  observer.observe(document.body, { childList: true, characterData: true, subtree: true });
})();
