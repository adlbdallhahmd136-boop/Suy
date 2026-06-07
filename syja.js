// syja.js - النظام الكامل
const studentData = {
    "st_k8mr4px2a.html": { ar: "أبو اليزيد", en: "abo el yazed", ru: "абу эль язид", ms: "abo el yazed" },
    "st_q7vn9tlm5.html": { ar: "أحمد عادل", en: "ahmed adel", ru: "ахмед адель", ms: "ahmed adel" },
    "st_x3pw8rka1.html": { ar: "أحمد فولة", en: "ahmed foula", ru: "ахмед фула", ms: "ahmed foula" },
    "st_b6mt2qzn4.html": { ar: "علي", en: "ali", ru: "али", ms: "ali" },
    "st_l9xc7vrp3.html": { ar: "أيمن", en: "ayman", ru: "айман", ms: "ayman" },
    "st_d4km8nty6.html": { ar: "حكمت", en: "hekmat", ru: "хекмат", ms: "hekmat" },
    "st_p2wq5zhx9.html": { ar: "حسين", en: "huseen", ru: "хусейн", ms: "huseen" },
    "st_r8ml1kvx7.html": { ar: "محمود محمد", en: "mahmoud mohamed", ru: "махмуд мухаммед", ms: "mahmoud mohamed" },
    "st_n5tb3qwp2.html": { ar: "محمد زكي", en: "mohamed zaki", ru: "мухаммед заки", ms: "mohamed zaki" },
    "st_y7vd4mkz8.html": { ar: "محمد رجب", en: "mohamed rajab", ru: "мухаммед раджаб", ms: "mohamed rajab" },
    "st_h3xp9nrt1.html": { ar: "رسول", en: "rasol", ru: "расуль", ms: "rasol" },
    "st_c8qw2mly5.html": { ar: "رمضان", en: "romadan", ru: "ромадан", ms: "romadan" },
    "st_t4nk7vxp3.html": { ar: "سيف الله", en: "seif allah", ru: "сейф аллах", ms: "seif allah" },
    "st_m9rb5qzw6.html": { ar: "سرور بيك", en: "surur beack", ru: "сурур бек", ms: "surur beack" },
    "st_v2xl8nty4.html": { ar: "شرف الدين", en: "sharaf el dien", ru: "шараф эль дин", ms: "sharaf el dien" },
    "st_f7mp3qrx9.html": { ar: "وجيه الله", en: "wageh allah", ru: "вагих аллах", ms: "wageh allah" },
    "st_k5vn1tlm8.html": { ar: "ولي الله", en: "wally allah", ru: "вали аллах", ms: "wally allah" },
    "st_x9pw4rka2.html": { ar: "أبو بكر نور", en: "abu bakr nour", ru: "абу бакр нур", ms: "abu bakr nour" },
    "st_b3mt7qzn5.html": { ar: "الشيخ عبدالله", en: "sheikh abdullah", ru: "шейх абдулла", ms: "sheikh abdullah" },
    "st_l6xc2vrp8.html": { ar: "شيخ آدم", en: "sheikh adam", ru: "шейх адам", ms: "sheikh adam" },
    "st_d9km5nty1.html": { ar: "شيخ سعيد", en: "sheikh saeed", ru: "шейх саид", ms: "sheikh saeed" },
    "st_p4wq8zhx3.html": { ar: "عبدالله داوود", en: "abdullah dawood", ru: "абдулла дауд", ms: "abdullah dawood" },
    "st_r1ml6kvx7.html": { ar: "محمد رسول", en: "mohamed rasol", ru: "мухаммед расуль", ms: "mohamed rasol" },
    "st_n8tb2qwp4.html": { ar: "محمد سيد أحمد", en: "mohamed sayed ahmed", ru: "мухаммед саид ахмед", ms: "mohamed sayed ahmed" },
    "st_y5vd9mkz6.html": { ar: "محمد عثمان", en: "mohamed osman", ru: "мухаммед осман", ms: "mohamed osman" },
    "st_h2xp7nrt8.html": { ar: "محمد زاهد", en: "mohamed zahed", ru: "мухаммед захид", ms: "mohamed zahed" },
    "st_c4qw1mly9.html": { ar: "محمد عبدالسلام", en: "mohamed abdelsalam", ru: "мухаммед абдельсалам", ms: "mohamed abdelsalam" }
};

const studentCredentials = {
    "st_k8mr4px2a.html": { user: "sypa1356", pass: "vx9#mk2q" },
    "st_q7vn9tlm5.html": { user: "sypa2481", pass: "bl7$tn4w" },
    "st_x3pw8rka1.html": { user: "sypa9072", pass: "zp3&rw8x" },
    "st_b6mt2qzn4.html": { user: "sypa5148", pass: "fm6@qz2t" },
    "st_l9xc7vrp3.html": { user: "sypa3765", pass: "hc9*vr3x" },
    "st_d4km8nty6.html": { user: "sypa6824", pass: "jk4%nt6m" },
    "st_p2wq5zhx9.html": { user: "sypa1947", pass: "wq5#zh9x" },
    "st_r8ml1kvx7.html": { user: "sypa8235", pass: "ml1$kv7x" },
    "st_n5tb3qwp2.html": { user: "sypa4519", pass: "tb3&qw2p" },
    "st_y7vd4mkz8.html": { user: "sypa7603", pass: "vd4@mk8z" },
    "st_h3xp9nrt1.html": { user: "sypa2876", pass: "xp9*nr1t" },
    "st_c8qw2mly5.html": { user: "sypa9341", pass: "qw2%ml5y" },
    "st_t4nk7vxp3.html": { user: "sypa5182", pass: "nk7#vx3p" },
    "st_m9rb5qzw6.html": { user: "sypa6417", pass: "rb5$qz6w" },
    "st_v2xl8nty4.html": { user: "sypa3058", pass: "xl8&nt4y" },
    "st_f7mp3qrx9.html": { user: "sypa8794", pass: "mp3@qr9x" },
    "st_k5vn1tlm8.html": { user: "sypa1623", pass: "vn1*tl8m" },
    "st_x9pw4rka2.html": { user: "sypa7485", pass: "pw4%rk2a" },
    "st_b3mt7qzn5.html": { user: "sypa2931", pass: "mt7#qz5n" },
    "st_l6xc2vrp8.html": { user: "sypa8560", pass: "xc2$vr8p" },
    "st_d9km5nty1.html": { user: "sypa4702", pass: "km5&nt1y" },
    "st_p4wq8zhx3.html": { user: "sypa7196", pass: "wq8@zh3x" },
    "st_r1ml6kvx7.html": { user: "sypa3815", pass: "ml6*kv7x" },
    "st_n8tb2qwp4.html": { user: "sypa6248", pass: "tb2%qw4p" },
    "st_y5vd9mkz6.html": { user: "sypa1459", pass: "vd9#mk6z" },
    "st_h2xp7nrt8.html": { user: "sypa9026", pass: "xp7$nr8t" },
    "st_c4qw1mly9.html": { user: "sypa5371", pass: "qw1&ml9y" }
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

function getStudentName(lang) {
    const fileName = window.location.pathname.split('/').pop().toLowerCase();
    const student = studentData[fileName];
    if (student && student[lang]) return student[lang];
    return studentData[fileName] ? studentData[fileName]['ar'] : "طالب";
}

function getStudentCredentials() {
    const fileName = window.location.pathname.split('/').pop().toLowerCase();
    return studentCredentials[fileName] || { user: '-', pass: '••••••••' };
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
    const pp = document.getElementById('profilePass'); if(pp) pp.innerText = creds.pass || '••••••••';
    const ph = document.querySelector('#profileEmbedded h4'); if(ph) ph.innerText = data.cardTitle;
    
    const cardName = document.getElementById('txt-card-name-val');
    const cardUser = document.getElementById('txt-card-user-val');
    const cardPass = document.getElementById('txt-card-pass-val');
    
    if (cardName) cardName.innerText = name || '-';
    if (cardUser) cardUser.innerText = creds.user || '-';
    if (cardPass) cardPass.innerText = creds.pass || '••••••••';
    
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
    filtered.forEach(item => { html += `<div class="search-result-item" onclick="closeSearch();window.location.href='${item.url}'"><div class="result-icon"><svg viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></div><div class="result-info"><span class="result-title">${item.title[lang]}</span></div></div>`; });
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

window.addEventListener('DOMContentLoaded', () => {
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
