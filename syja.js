// syja.js - النظام الكامل - ملف واحد لكل الطلاب
const studentData = {
    "st_k8mr4px2a": { ar: "أبو اليزيد", en: "Abo El Yazed", ru: "Абу Эль Язид", ms: "Abo El Yazed" },
    "st_q7vn9tlm5": { ar: "أحمد عادل", en: "Ahmed Adel", ru: "Ахмед Адель", ms: "Ahmed Adel" },
    "st_x3pw8rka1": { ar: "أحمد فولة", en: "Ahmed Foula", ru: "Ахмед Фула", ms: "Ahmed Foula" },
    "st_b6mt2qzn4": { ar: "علي", en: "Ali", ru: "Али", ms: "Ali" },
    "st_l9xc7vrp3": { ar: "أيمن", en: "Ayman", ru: "Айман", ms: "Ayman" },
    "st_d4km8nty6": { ar: "حكمت", en: "Hekmat", ru: "Хекмат", ms: "Hekmat" },
    "st_p2wq5zhx9": { ar: "حسين", en: "Huseen", ru: "Хусейн", ms: "Huseen" },
    "st_r8ml1kvx7": { ar: "محمود محمد", en: "Mahmoud Mohamed", ru: "Махмуд Мухаммед", ms: "Mahmoud Mohamed" },
    "st_n5tb3qwp2": { ar: "محمد زكي", en: "Mohamed Zaki", ru: "Мухаммед Заки", ms: "Mohamed Zaki" },
    "st_y7vd4mkz8": { ar: "محمد رجب", en: "Mohamed Rajab", ru: "Мухаммед Раджаб", ms: "Mohamed Rajab" },
    "st_h3xp9nrt1": { ar: "رسول", en: "Rasol", ru: "Расуль", ms: "Rasol" },
    "st_c8qw2mly5": { ar: "رمضان", en: "Romadan", ru: "Ромадан", ms: "Romadan" },
    "st_t4nk7vxp3": { ar: "سيف الله", en: "Seif Allah", ru: "Сейф Аллах", ms: "Seif Allah" },
    "st_m9rb5qzw6": { ar: "سرور بيك", en: "Surur Beack", ru: "Сурур Бек", ms: "Surur Beack" },
    "st_v2xl8nty4": { ar: "شرف الدين", en: "Sharaf El Dien", ru: "Шараф эль Дин", ms: "Sharaf El Dien" },
    "st_f7mp3qrx9": { ar: "وجيه الله", en: "Wageh Allah", ru: "Вагих Аллах", ms: "Wageh Allah" },
    "st_k5vn1tlm8": { ar: "ولي الله", en: "Wally Allah", ru: "Вали Аллах", ms: "Wally Allah" },
    "st_x9pw4rka2": { ar: "أبو بكر نور", en: "Abu Bakr Nour", ru: "Абу Бакр Нур", ms: "Abu Bakr Nour" },
    "st_b3mt7qzn5": { ar: "الشيخ عبدالله", en: "Sheikh Abdullah", ru: "Шейх Абдулла", ms: "Sheikh Abdullah" },
    "st_l6xc2vrp8": { ar: "شيخ آدم", en: "Sheikh Adam", ru: "Шейх Адам", ms: "Sheikh Adam" },
    "st_d9km5nty1": { ar: "شيخ سعيد", en: "Sheikh Saeed", ru: "Шейх Саид", ms: "Sheikh Saeed" },
    "st_p4wq8zhx3": { ar: "عبدالله داوود", en: "Abdullah Dawood", ru: "Абдулла Дауд", ms: "Abdullah Dawood" },
    "st_r1ml6kvx7": { ar: "محمد رسول", en: "Mohamed Rasol", ru: "Мухаммед Расуль", ms: "Mohamed Rasol" },
    "st_n8tb2qwp4": { ar: "محمد سيد أحمد", en: "Mohamed Sayed Ahmed", ru: "Мухаммед Саид Ахмед", ms: "Mohamed Sayed Ahmed" },
    "st_y5vd9mkz6": { ar: "محمد عثمان", en: "Mohamed Osman", ru: "Мухаммед Осман", ms: "Mohamed Osman" },
    "st_h2xp7nrt8": { ar: "محمد زاهد", en: "Mohamed Zahed", ru: "Мухаммед Захид", ms: "Mohamed Zahed" },
    "st_c4qw1mly9": { ar: "محمد عبدالسلام", en: "Mohamed Abdelsalam", ru: "Мухаммед Абдельсалам", ms: "Mohamed Abdelsalam" }
};

const studentCredentials = {
    "st_k8mr4px2a": { user: "sypa1356", pass: "vX9#mK2q" },
    "st_q7vn9tlm5": { user: "sypa2481", pass: "bL7$tN4w" },
    "st_x3pw8rka1": { user: "sypa9072", pass: "zP3&rW8x" },
    "st_b6mt2qzn4": { user: "sypa5148", pass: "fM6@qZ2t" },
    "st_l9xc7vrp3": { user: "sypa3765", pass: "hC9*vR3x" },
    "st_d4km8nty6": { user: "sypa6824", pass: "jK4%nT6m" },
    "st_p2wq5zhx9": { user: "sypa1947", pass: "wQ5#zH9x" },
    "st_r8ml1kvx7": { user: "sypa8235", pass: "mL1$kV7x" },
    "st_n5tb3qwp2": { user: "sypa4519", pass: "tB3&qW2p" },
    "st_y7vd4mkz8": { user: "sypa7603", pass: "vD4@mK8z" },
    "st_h3xp9nrt1": { user: "sypa2876", pass: "xP9*nR1t" },
    "st_c8qw2mly5": { user: "sypa9341", pass: "qW2%mL5y" },
    "st_t4nk7vxp3": { user: "sypa5182", pass: "nK7#vX3p" },
    "st_m9rb5qzw6": { user: "sypa6417", pass: "rB5$qZ6w" },
    "st_v2xl8nty4": { user: "sypa3058", pass: "xL8&nT4y" },
    "st_f7mp3qrx9": { user: "sypa8794", pass: "mP3@qR9x" },
    "st_k5vn1tlm8": { user: "sypa1623", pass: "vN1*tL8m" },
    "st_x9pw4rka2": { user: "sypa7485", pass: "pW4%rK2a" },
    "st_b3mt7qzn5": { user: "sypa2931", pass: "mT7#qZ5n" },
    "st_l6xc2vrp8": { user: "sypa8560", pass: "xC2$vR8p" },
    "st_d9km5nty1": { user: "sypa4702", pass: "kM5&nT1y" },
    "st_p4wq8zhx3": { user: "sypa7196", pass: "wQ8@zH3x" },
    "st_r1ml6kvx7": { user: "sypa3815", pass: "mL6*kV7x" },
    "st_n8tb2qwp4": { user: "sypa6248", pass: "tB2%qW4p" },
    "st_y5vd9mkz6": { user: "sypa1459", pass: "vD9#mK6z" },
    "st_h2xp7nrt8": { user: "sypa9026", pass: "xP7$nR8t" },
    "st_c4qw1mly9": { user: "sypa5371", pass: "qW1&mL9y" }
};

const translations = {
    ar: { dir: "rtl", brandTitle: "مركز سيبويه", welcome: "مرحبا ", menuNotes: "ملاحظات", menuLectures: "محاضرات مسجلة", menuStreams: "البثوث", menuFees: "مصاريف", menuBooks: "كتب", menuExams: "امتحانات", menuResults: "نتايج الامتحانات", sidebarTitle: "القائمة", navLogout: "تسجيل الخروج", navNotif: "الإشعارات", cardTitle: "بيانات الطالب", cardNameLabel: "الاسم:", cardUserLabel: "اليوزر:", cardPassLabel: "الباسورد:", langText: "اللغات", sidebarAge: "السن:", sidebarCountry: "الدولة:", supportText: "الدعم", agePlaceholder: "ادخل سنك", saveBtnText: "حفظ", emptyStateText: "غير متوفر الان", notificationsTitle: "الإشعارات", noNotificationsText: "لا توجد إشعارات حالياً", newsEmptyText: "غير متوفر اخبار حاليا" },
    en: { dir: "ltr", brandTitle: "Sibawayh", welcome: "Welcome, ", menuNotes: "Notes & Remarks", menuLectures: "Recorded Lectures", menuStreams: "Live Streams", menuFees: "Tuition Fees", menuBooks: "Textbooks", menuExams: "Exams & Quizzes", menuResults: "Exam Results", sidebarTitle: "Main Menu", navLogout: "Log Out", navNotif: "Notifications", cardTitle: "Student Profile", cardNameLabel: "Name:", cardUserLabel: "Username:", cardPassLabel: "Password:", langText: "Languages", sidebarAge: "Age:", sidebarCountry: "Country:", supportText: "Support", agePlaceholder: "Enter age", saveBtnText: "Save", emptyStateText: "Not Available Now", notificationsTitle: "Notifications", noNotificationsText: "No new notifications", newsEmptyText: "No news available" },
    ru: { dir: "ltr", brandTitle: "Сибавейх", welcome: "Добро пожаловать, ", menuNotes: "Заметки", menuLectures: "Записи лекций", menuStreams: "Прямые трансляции", menuFees: "Оплата обучения", menuBooks: "Учебники", menuExams: "Экзамены", menuResults: "Результаты экзаменов", sidebarTitle: "Главное меню", navLogout: "Выйти из системы", navNotif: "Уведомления", cardTitle: "Профиль студента", cardNameLabel: "Имя:", cardUserLabel: "Логин:", cardPassLabel: "Пароль:", langText: "Языки", sidebarAge: "Возраст:", sidebarCountry: "Страна:", supportText: "Поддержка", agePlaceholder: "возраст", saveBtnText: "хранить", emptyStateText: "Недоступно сейчас", notificationsTitle: "Уведомления", noNotificationsText: "Нет новых уведомлений", newsEmptyText: "Нет новостей" },
    ms: { dir: "ltr", brandTitle: "Sibawayh", welcome: "Selamat Datang, ", menuNotes: "Nota & Catatan", menuLectures: "Kuliah Dirakam", menuStreams: "Siaran Langsung", menuFees: "Yuran Pengajian", menuBooks: "Buku Teks", menuExams: "Peperiksaan", menuResults: "Keputusan Peperiksaan", sidebarTitle: "Menu Utama", navLogout: "Log Keluar", navNotif: "Notifikasi", cardTitle: "Profil Pelajar", cardNameLabel: "Nama:", cardUserLabel: "Nama Pengguna:", cardPassLabel: "Kata Laluan:", langText: "Bahasa", sidebarAge: "Umur:", sidebarCountry: "Negara:", supportText: "Sokongan", agePlaceholder: "Umur anda", saveBtnText: "Simpan", emptyStateText: "Tidak Tersedia Sekarang", notificationsTitle: "Notifikasi", noNotificationsText: "Tiada notifikasi baharu", newsEmptyText: "Tiada berita tersedia" }
};

const sectionDescriptions = {
    ar: { notes: 'ملاحظات وإرشادات هامة', lectures: 'شاهد المحاضرات', streams: 'بثوث مباشرة', fees: 'الرسوم الدراسية', books: 'المكتبة التعليمية', exams: 'الاختبارات والتقييمات', results: 'نتائج الامتحانات' },
    en: { notes: 'Important notes & remarks', lectures: 'Watch recorded lectures', streams: 'Live streaming', fees: 'Tuition fees', books: 'Educational library', exams: 'Exams & quizzes', results: 'Exam results' },
    ru: { notes: 'Важные заметки', lectures: 'Смотрите лекции', streams: 'Прямой эфир', fees: 'Оплата обучения', books: 'Библиотека', exams: 'Экзамены', results: 'Результаты' },
    ms: { notes: 'Nota penting', lectures: 'Tonton kuliah', streams: 'Siaran langsung', fees: 'Yuran pengajian', books: 'Perpustakaan', exams: 'Peperiksaan', results: 'Keputusan' }
};

// ===== قراءة ID الطالب من الرابط =====
function getStudentIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || '';
}

function getStudentName(lang) {
    const studentId = getStudentIdFromUrl();
    const student = studentData[studentId];
    if (student && student[lang]) return student[lang];
    return studentData[studentId] ? studentData[studentId]['ar'] : "طالب";
}

function getStudentCredentials() {
    const studentId = getStudentIdFromUrl();
    return studentCredentials[studentId] || { user: '-', pass: '********' };
}

let currentLang = localStorage.getItem('lang') || 'ar';
let typewriterTimeout;
const sidebarMenu = document.getElementById('sidebarMenu');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function openMenu() { if(sidebarMenu && sidebarOverlay) { sidebarMenu.classList.add('open'); sidebarOverlay.classList.add('show'); } }
function closeMenu() { if(sidebarMenu && sidebarOverlay) { sidebarMenu.classList.remove('open'); sidebarOverlay.classList.remove('show'); } }

function startTypewriter(text, name) {
    const typewriterElement = document.getElementById('typewriter');
    if(!typewriterElement) return;
    const fullText = text + name;
    typewriterElement.innerHTML = "";
    let index = 0;
    if (typewriterTimeout) clearTimeout(typewriterTimeout);
    function typeEffect() { if (index < fullText.length) { typewriterElement.innerHTML += fullText.charAt(index); index++; typewriterTimeout = setTimeout(typeEffect, 80); } }
    typeEffect();
}

function updateSectionDescriptions() {
    const desc = sectionDescriptions[currentLang];
    const descElements = document.querySelectorAll('.menu-item-desc, .card-box-desc');
    if (descElements.length >= 7) {
        if (descElements[0]) descElements[0].innerText = desc.notes;
        if (descElements[1]) descElements[1].innerText = desc.lectures;
        if (descElements[2]) descElements[2].innerText = desc.streams;
        if (descElements[3]) descElements[3].innerText = desc.fees;
        if (descElements[4]) descElements[4].innerText = desc.books;
        if (descElements[5]) descElements[5].innerText = desc.exams;
        if (descElements[6]) descElements[6].innerText = desc.results;
    }
}

function updateProfileInfo() {
    const name = getStudentName(currentLang);
    const creds = getStudentCredentials();
    const data = translations[currentLang];
    
    const pn = document.getElementById('profileName'); if(pn) pn.innerText = name || '-';
    const pu = document.getElementById('profileUser'); if(pu) pu.innerText = creds.user || '-';
    const pp = document.getElementById('profilePass'); if(pp) pp.innerText = creds.pass || '********';
    const ph = document.querySelector('#profileEmbedded h4'); if(ph) ph.innerText = data.cardTitle;
    
    const cardName = document.getElementById('txt-card-name-val');
    const cardUser = document.getElementById('txt-card-user-val');
    const cardPass = document.getElementById('txt-card-pass-val');
    
    if (cardName) cardName.innerText = name || '-';
    if (cardUser) cardUser.innerText = creds.user || '-';
    if (cardPass) cardPass.innerText = creds.pass || '********';
    
    const labels = document.querySelectorAll('#profileEmbedded .student-info-item span:first-child');
    if (labels.length >= 3) {
        if (labels[0]) labels[0].innerText = data.cardNameLabel.replace(':', '') + ':';
        if (labels[1]) labels[1].innerText = data.cardUserLabel.replace(':', '') + ':';
        if (labels[2]) labels[2].innerText = data.cardPassLabel.replace(':', '') + ':';
    }
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const data = translations[lang], studentName = getStudentName(lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', 'rtl');
    const setText = (id, text) => { const el = document.getElementById(id); if(el) el.innerText = text; };
    setText('txt-brand-title', data.brandTitle); setText('currentLangText', data.langText);
    setText('emptyStateMessage', data.emptyStateText);
    setText('notificationsPageTitle', data.notificationsTitle);
    setText('notificationsPageTitleEmbedded', data.notificationsTitle);
    setText('lessonsEmptyMsg', data.emptyStateText); setText('libraryEmptyMsg', data.emptyStateText);
    setText('newsEmptyMsg', data.newsEmptyText);
    if(document.getElementById('txt-nav-logout')) {
        setText('txt-nav-logout', data.navLogout); setText('txt-nav-notif', data.navNotif);
        setText('txt-card-title', data.cardTitle); setText('txt-card-name-label', data.cardNameLabel);
        setText('txt-card-name-val', studentName); setText('txt-card-user-label', data.cardUserLabel);
        setText('txt-card-pass-label', data.cardPassLabel);
        setText('txt-menu-notes', data.menuNotes); setText('txt-menu-lectures', data.menuLectures);
        setText('txt-menu-streams', data.menuStreams); setText('txt-menu-fees', data.menuFees);
        setText('txt-menu-books', data.menuBooks); setText('txt-menu-exams', data.menuExams);
        setText('txt-menu-results', data.menuResults);
        setText('lbl-sidebar-country', data.sidebarCountry);
        setText('txt-nav-support', data.supportText);
        updateSidebarName(studentName);
    }
    updateSectionDescriptions();
    updateBottomNavTexts();
    updateProfileInfo();
    if(document.getElementById('langDropdown')) document.getElementById('langDropdown').classList.remove('active');
    if(document.getElementById('typewriter')) startTypewriter(data.welcome, studentName);
}

function updateSidebarName(n) { const s = document.querySelector('.sidebar-name'); if(s) s.innerText = n; }

const searchData = [
    { id: 'notes', title: { ar: 'ملاحظات', en: 'Notes', ru: 'Заметки', ms: 'Nota' }, url: 'notes.html' },
    { id: 'lectures', title: { ar: 'محاضرات مسجلة', en: 'Recorded Lectures', ru: 'Записи лекций', ms: 'Kuliah Dirakam' }, url: 'lectures.html' },
    { id: 'streams', title: { ar: 'البثوث', en: 'Live Streams', ru: 'Прямые трансляции', ms: 'Siaran Langsung' }, url: 'streams.html' },
    { id: 'fees', title: { ar: 'مصاريف', en: 'Tuition Fees', ru: 'Оплата обучения', ms: 'Yuran Pengajian' }, url: 'fees.html' },
    { id: 'books', title: { ar: 'كتب', en: 'Textbooks', ru: 'Учебники', ms: 'Buku Teks' }, url: 'books.html' },
    { id: 'exams', title: { ar: 'امتحانات', en: 'Exams', ru: 'Экзамены', ms: 'Peperiksaan' }, url: 'exams.html' },
    { id: 'results', title: { ar: 'نتايج الامتحانات', en: 'Exam Results', ru: 'Результаты', ms: 'Keputusan' }, url: 'results.html' },
    { id: 'main', title: { ar: 'الرئيسية', en: 'Home', ru: 'Главная', ms: 'Utama' }, url: 'main.html' }
];

function openSearch() { document.getElementById('searchOverlay').classList.add('active'); document.getElementById('searchInput').focus(); }
function closeSearch() { document.getElementById('searchOverlay').classList.remove('active'); document.getElementById('searchInput').value = ''; document.getElementById('searchResults').innerHTML = ''; document.getElementById('searchResults').classList.remove('has-results'); document.getElementById('searchNoResults').classList.remove('show'); }

function performSearch() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    const noResults = document.getElementById('searchNoResults');
    if (!query) { resultsContainer.innerHTML = ''; resultsContainer.classList.remove('has-results'); noResults.classList.remove('show'); return; }
    const lang = currentLang || 'ar';
    const filtered = searchData.filter(item => (item.title[lang]?.toLowerCase()||'').includes(query));
    if (!filtered.length) { resultsContainer.innerHTML = ''; resultsContainer.classList.remove('has-results'); noResults.classList.add('show'); return; }
    noResults.classList.remove('show');
    let html = '';
    const studentId = getStudentIdFromUrl();
    const idParam = studentId ? '?id=' + studentId : '';
    filtered.forEach(item => { html += `<div class="search-result-item" onclick="closeSearch();window.location.href='${item.url}${idParam}'"><div class="result-icon"><svg viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></div><div class="result-info"><span class="result-title">${item.title[lang]}</span></div></div>`; });
    resultsContainer.innerHTML = html; resultsContainer.classList.add('has-results');
}

function switchTab(tabName) {
    document.getElementById('mainContent').style.display = 'none';
    document.querySelectorAll('.content-page, .notifications-embedded, .profile-embedded').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.bottom-nav-item').forEach(i => i.classList.remove('active'));
    const activeItem = document.querySelector(`.bottom-nav-item[data-tab="${tabName}"]`);
    if (activeItem) activeItem.classList.add('active');
    if (tabName === 'home') { document.getElementById('mainContent').style.display = 'flex'; }
    else if (tabName === 'news') { document.getElementById('newsPage').classList.add('active'); }
    else if (tabName === 'library') { document.getElementById('libraryPage').classList.add('active'); }
    else if (tabName === 'notifications') { document.getElementById('notificationsEmbedded').classList.add('active'); }
    else if (tabName === 'profile') { document.getElementById('profileEmbedded').classList.add('active'); updateProfileInfo(); }
}

function updateBottomNavTexts() {
    const labels = {
        home: currentLang === 'ar' ? 'الرئيسية' : currentLang === 'ru' ? 'Главная' : currentLang === 'ms' ? 'Utama' : 'Home',
        news: currentLang === 'ar' ? 'الأخبار' : currentLang === 'ru' ? 'Новости' : currentLang === 'ms' ? 'Berita' : 'News',
        library: currentLang === 'ar' ? 'المكتبة' : currentLang === 'ru' ? 'Библиотека' : currentLang === 'ms' ? 'Perpustakaan' : 'Library',
        notifications: translations[currentLang].navNotif,
        profile: currentLang === 'ar' ? 'الملف الشخصي' : currentLang === 'ru' ? 'Профиль' : currentLang === 'ms' ? 'Profil' : 'Profile'
    };
    ['home', 'news', 'library', 'notifications', 'profile'].forEach(tab => {
        const el = document.querySelector(`.bottom-nav-item[data-tab="${tab}"] span`);
        if (el) el.innerText = labels[tab];
    });
}

// ===== توجيه تلقائي مع id =====
(function patchAllLinks() {
    const studentId = getStudentIdFromUrl();
    if (!studentId) return;
    
    // تعديل كل الروابط في الصفحة عشان تحتفظ بالـ id
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.endsWith('.html') && !href.includes('?id=') && href !== 'syff.html') {
            link.setAttribute('href', href + '?id=' + studentId);
        }
    });
})();

window.addEventListener('DOMContentLoaded', () => {
    const studentId = getStudentIdFromUrl();
    if (!studentId) {
        window.location.href = 'syff.html';
        return;
    }
    
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'light');
    currentLang = localStorage.getItem('lang') || 'ar';
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', 'rtl');
    changeLanguage(currentLang);
    updateProfileInfo();
    document.getElementById('searchBtn')?.addEventListener('click', (e) => { e.stopPropagation(); openSearch(); });
    document.getElementById('searchCloseBtn')?.addEventListener('click', closeSearch);
    document.getElementById('searchOverlay')?.addEventListener('click', function(e) { if(e.target===this) closeSearch(); });
    document.getElementById('searchInput')?.addEventListener('input', performSearch);
    document.querySelectorAll('.bottom-nav-item').forEach(item => { item.addEventListener('click', function() { switchTab(this.getAttribute('data-tab')); }); });
    updateBottomNavTexts();
    document.getElementById('notifBtn')?.addEventListener('click', () => { closeMenu(); switchTab('notifications'); });
});

document.getElementById('themeToggleBtn')?.addEventListener('click', () => { const t = document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark'; document.documentElement.setAttribute('data-theme', t); localStorage.setItem('theme', t); });
const langBtn = document.getElementById('langBtn'), langDropdown = document.getElementById('langDropdown');
langBtn?.addEventListener('click', (e) => { e.stopPropagation(); langDropdown.classList.toggle('active'); });
document.addEventListener('click', (e) => { if(langDropdown&&!langDropdown.contains(e.target)&&!langBtn.contains(e.target)) langDropdown.classList.remove('active'); });
document.getElementById('burgerBtn')?.addEventListener('click', (e) => { e.stopPropagation(); openMenu(); });
document.getElementById('closeSidebar')?.addEventListener('click', closeMenu);
sidebarOverlay?.addEventListener('click', closeMenu);
document.getElementById('logoutBtn')?.addEventListener('click', () => { window.location.href = 'syff.html'; });
