const translations = {
    ar: {
        title: 'لوحة تحكم الفضاء | Matrix84',
        subtitle: 'واجهة تفاعلية لمهمة Artemis II',
        countdownHeading: 'العد التنازلي لإطلاق Artemis II',
        day: 'يوم', hour: 'ساعة', minute: 'دقيقة', second: 'ثانية',
        launchStatusSync: 'جاري مزامنة وقت الإطلاق...',
        launchFallback: 'لم نتمكن من جلب الوقت الحقيقي، نستخدم توقيتًا احتياطيًا.',
        launchDone: 'تم الإطلاق',
        card1Title: 'عن Artemis II',
        card1Desc: 'مهمة مأهولة تدور حول القمر وتعتبر خطوة حاسمة قبل الهبوط على سطح القمر.',
        card2Title: 'حقيقة فيزيائية',
        card2Desc: 'الثقوب السوداء تتشكل عندما ينهار نجم ضخم داخل نفسه، وتملك نقطة مركزية عالية الكثافة.',
        card3Title: 'أول قمر صناعي',
        card3Desc: 'أطلقت أول قمر صناعي (سبوتنيك 1) عام 1957، ليبدأ عصر الاستكشاف الفضائي.',
        secretsHeading: 'أسرار الكون (The Cosmic Matrix) 🌌',
        cosmicItems: '<strong>المادة المظلمة (Dark Matter)</strong>: معلومة للبشر؛ نحن لا نرى إلا 5% فقط من الكون (المادة العادية)، أما الباقي فهو مادة وطاقة مظلمة لا نعرف عنها شيئاً حتى الآن، <strong>تمدد الكون</strong>: المجرات لا تتحرك "داخل" الفضاء، بل الفضاء نفسه هو الذي يتمدد بينها كالعجينة، مما يجعل المجرات البعيدة تهرب منا بسرعة هائلة، <strong>عمر الكون</strong>: الكون عمره 13.8 مليار سنة، وأبعد ضوء وصل إلينا هو من "خلفية الميكروويف الكونية".',
        nasaSection: '2. قسم: ناسا (NASA) - العلم والاستكشاف 🚀',
        nasaItems: '<strong>تلسكوب جيمس ويب</strong>: هو "آلة زمن" حقيقية، لأنه يرى الضوء الذي سافر مليارات السنين ليصل إلينا، فيرسم لنا شكل الكون بعد "الانفجار العظيم" بفترة قصيرة، <strong>مهمة أرتميس (Artemis)</strong>: تهدف ناسا لإرسال أول امرأة وأول شخص ملون للقمر بحلول 2026، ليس للزيارة فقط، بل لبناء محطة فضائية (Gateway) تكون بوابة للمريخ، <strong>البحث عن الحياة</strong>: ناسا تركز الآن على أقمار المشتري (مثل يوربا) لأن تحت جليدها محيطات سائلة قد تحتوي على كائنات حية.',
        spacexSection: '3. قسم: سبيس إكس (SpaceX) - ثورة إيلون ماسك 🛰️',
        spacexItems: '<strong>إعادة تدوير الصواريخ</strong>: سبيس إكس هي أول شركة في التاريخ تجعل الصاروخ (Falcon 9) يعود ويهبط عمودياً على منصة في البحر، مما خفض تكلفة الرحلات من مئات الملايين إلى مبالغ ضئيلة، <strong>ستارشيب (Starship)</strong>: أكبر صاروخ صنعه البشر، هدفه جعل الإنسان "جنس متعدد الكواكب" عبر استعمار المريخ، <strong>ستارلينك</strong>: نشر آلاف الأقمار الصناعية الصغيرة لتوفير إنترنت فائق السرعة لأي بقعة على الأرض، حتى في وسط المحيطات.',
        spaceJunkSection: '4. قسم: خردة الفضاء (Space Junk) - الخطر القادم 🗑️',
        spaceJunkItems: '<strong>الرصاصات الطائرة</strong>: هناك أكثر من 130 مليون قطعة حطام (من براغي صغيرة إلى بقايا صواريخ) تدور حول الأرض بسرعة 28,000 كم/ساعة. في هذه السرعة، قطعة بحجم "حبة الحمص" تضرب بقوة قنبلة يدوية!، <strong>متلازمة كيسلر (Kessler Syndrome)</strong>: هي نظرية مرعبة تقول إن تصادماً واحداً في الفضاء قد يخلق آلاف الشظايا التي تصدم أقماراً أخرى، مما يغلق مدار الأرض تماماً ويحرمنا من الـ GPS والاتصالات للأبد، <strong>التنظيف الفضائي</strong>: هناك شركات بدأت تصمم "أقماراً مغناطيسية" أو "شباكاً عملاقة" لاصطياد هذه الخرده وإنزالها لتحترق في الغلاف الجوي.',
        commentsHeading: 'التعاليق 💬',
        commentName: 'اسمك',
        commentPlaceholder: 'أضف تعليقك هنا...',
        submitBtn: 'إرسال التعليق',
        noComments: 'لا توجد تعاليق حالياً. كن أول من يعلق!',
        editBtn: 'تعديل',
        deleteBtn: 'حذف',
        cancelBtn: 'إلغاء',
        confirmDelete: 'هل أنت متأكد من حذف هذا التعليق؟',
        langBtn: 'EN'
    },
    en: {
        title: 'Space Dashboard | Matrix84',
        subtitle: 'Interactive mission dashboard for Artemis II',
        countdownHeading: 'Countdown to Artemis II Launch',
        day: 'Day', hour: 'Hour', minute: 'Minute', second: 'Second',
        launchStatusSync: 'Syncing launch time...',
        launchFallback: 'Could not load live time. Using fallback clock.',
        launchDone: 'Launched',
        card1Title: 'About Artemis II',
        card1Desc: 'A crewed lunar mission and a key step toward future landings.',
        card2Title: 'Physics Fact',
        card2Desc: 'Black holes form when massive stars collapse and warp spacetime.',
        card3Title: 'First Satellite',
        card3Desc: 'Sputnik 1 launched in 1957, starting the space age.',
        secretsHeading: 'Secrets of the Universe (The Cosmic Matrix) 🌌',
        cosmicItems: '<strong>Dark Matter</strong>: A fact for humans; we only see 5% of the universe (ordinary matter), the rest is dark matter and energy we know nothing about yet, <strong>Universe Expansion</strong>: Galaxies do not move "inside" space, but space itself expands between them like dough, making distant galaxies flee from us at tremendous speed, <strong>Universe Age</strong>: The universe is 13.8 billion years old, and the farthest light that has reached us is from the "cosmic microwave background".',
        nasaSection: '2. Section: NASA - Science and Exploration 🚀',
        nasaItems: '<strong>James Webb Telescope</strong>: It is a real "time machine" because it sees light that has traveled billions of years to reach us, drawing for us the shape of the universe shortly after the "Big Bang", <strong>Artemis Mission</strong>: NASA aims to send the first woman and first person of color to the Moon by 2026, not just for a visit, but to build a space station (Gateway) that will be a gateway to Mars, <strong>Search for Life</strong>: NASA is now focusing on Jupiter\'s moons (like Europa) because under their ice are liquid oceans that may contain living organisms.',
        spacexSection: '3. Section: SpaceX - Elon Musk\'s Revolution 🛰️',
        spacexItems: '<strong>Rocket Recycling</strong>: SpaceX is the first company in history to make the rocket (Falcon 9) return and land vertically on a platform in the sea, which reduced travel costs from hundreds of millions to tiny amounts, <strong>Starship</strong>: The largest rocket ever built by humans, its goal is to make humanity a "multi-planetary species" through colonizing Mars, <strong>Starlink</strong>: Deploying thousands of small satellites to provide ultra-fast internet to any spot on Earth, even in the middle of oceans.',
        spaceJunkSection: '4. Section: Space Junk - The Coming Danger 🗑️',
        spaceJunkItems: '<strong>Flying Bullets</strong>: There are more than 130 million pieces of debris (from small screws to rocket remains) orbiting Earth at 28,000 km/h. At this speed, a piece the size of a "chickpea" hits with the force of a grenade!, <strong>Kessler Syndrome</strong>: It is a terrifying theory that says one collision in space could create thousands of fragments that hit other satellites, completely closing Earth\'s orbit and depriving us of GPS and communications forever, <strong>Space Cleaning</strong>: There are companies that have started designing "magnetic satellites" or "giant nets" to catch this junk and bring it down to burn in the atmosphere.',
        commentsHeading: 'Comments 💬',
        commentName: 'Your Name',
        commentPlaceholder: 'Add your comment here...',
        submitBtn: 'Submit Comment',
        noComments: 'No comments yet. Be the first to comment!',
        editBtn: 'Edit',
        deleteBtn: 'Delete',
        cancelBtn: 'Cancel',
        confirmDelete: 'Are you sure you want to delete this comment?',
        langBtn: 'AR'
    }
};

const textNodes = {
    appTitle: document.getElementById('app-title'),
    appSubtitle: document.getElementById('app-subtitle'),
    countdownHeading: document.getElementById('countdown-heading'),
    dayLabel: document.getElementById('day-label'),
    hourLabel: document.getElementById('hour-label'),
    minuteLabel: document.getElementById('minute-label'),
    secondLabel: document.getElementById('second-label'),
    launchStatus: document.getElementById('launch-status'),
    card1Title: document.getElementById('card1-title'),
    card1Desc: document.getElementById('card1-desc'),
    card2Title: document.getElementById('card2-title'),
    card2Desc: document.getElementById('card2-desc'),
    card3Title: document.getElementById('card3-title'),
    card3Desc: document.getElementById('card3-desc'),
    secretsHeading: document.getElementById('secrets-heading'),
    cosmicItems: document.getElementById('cosmic-items'),
    nasaSection: document.getElementById('nasa-section'),
    nasaItems: document.getElementById('nasa-items'),
    spacexSection: document.getElementById('spacex-section'),
    spacexItems: document.getElementById('spacex-items'),
    spaceJunkSection: document.getElementById('space-junk-section'),
    spaceJunkItems: document.getElementById('space-junk-items'),
    commentsHeading: document.getElementById('comments-heading'),
    commentName: document.getElementById('comment-name'),
    commentText: document.getElementById('comment-text'),
    submitComment: document.getElementById('submit-comment'),
    langBtn: document.getElementById('lang-toggle')
};

const storedLangKey = 'spaceDashboardLang';
const storedLaunchDateKey = 'spaceDashboardLaunchDate';
let currentLang = localStorage.getItem(storedLangKey) || 'ar';
const intervalRef = { id: null };

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(storedLangKey, lang);

    document.title = translations[lang].title;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    textNodes.appTitle.textContent = translations[lang].title;
    textNodes.appSubtitle.textContent = translations[lang].subtitle;
    textNodes.countdownHeading.textContent = translations[lang].countdownHeading;
    textNodes.dayLabel.textContent = translations[lang].day;
    textNodes.hourLabel.textContent = translations[lang].hour;
    textNodes.minuteLabel.textContent = translations[lang].minute;
    textNodes.secondLabel.textContent = translations[lang].second;
    textNodes.launchStatus.textContent = translations[lang].launchStatusSync;
    textNodes.card1Title.textContent = translations[lang].card1Title;
    textNodes.card1Desc.textContent = translations[lang].card1Desc;
    textNodes.card2Title.textContent = translations[lang].card2Title;
    textNodes.card2Desc.textContent = translations[lang].card2Desc;
    textNodes.card3Title.textContent = translations[lang].card3Title;
    textNodes.card3Desc.textContent = translations[lang].card3Desc;
    textNodes.secretsHeading.textContent = translations[lang].secretsHeading;
    textNodes.cosmicItems.innerHTML = translations[lang].cosmicItems;
    textNodes.nasaSection.textContent = translations[lang].nasaSection;
    textNodes.nasaItems.innerHTML = translations[lang].nasaItems;
    textNodes.spacexSection.textContent = translations[lang].spacexSection;
    textNodes.spacexItems.innerHTML = translations[lang].spacexItems;
    textNodes.spaceJunkSection.textContent = translations[lang].spaceJunkSection;
    textNodes.spaceJunkItems.innerHTML = translations[lang].spaceJunkItems;
    textNodes.commentsHeading.textContent = translations[lang].commentsHeading;
    textNodes.commentName.placeholder = translations[lang].commentName;
    textNodes.commentText.placeholder = translations[lang].commentPlaceholder;
    textNodes.submitComment.textContent = translations[lang].submitBtn;
    textNodes.langBtn.textContent = translations[lang].langBtn;

    renderComments();
}

function updateCountdown(targetDate) {
    const now = Date.now();
    const distance = targetDate - now;
    if (distance <= 0) {
        document.getElementById('countdown').innerHTML = '<div class="launched">' + (currentLang === 'ar' ? 'انطلقت المهمة بنجاح!' : 'Mission Launched!') + '</div>';
        textNodes.launchStatus.textContent = translations[currentLang].launchDone;
        return false;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    return true;
}

function startTimer(targetDate) {
    if (intervalRef.id) clearInterval(intervalRef.id);
    if (!updateCountdown(targetDate)) return;
    intervalRef.id = setInterval(() => updateCountdown(targetDate), 1000);
}

function startFallbackTimer(fallbackDate) {
    textNodes.launchStatus.textContent = translations[currentLang].launchFallback;
    startTimer(fallbackDate);
}

async function syncLaunchTime() {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const response = await fetch('https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?search=Artemis%20II&limit=5', {
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (!response.ok) throw new Error('API failed');
        const data = await response.json();

        const launch = data.results.find(item =>
            item.name.toLowerCase().includes('artemis') ||
            item.name.toLowerCase().includes('moon') ||
            item.name.toLowerCase().includes('lunar')
        ) || data.results[0];

        if (!launch || !launch.net) throw new Error('No valid launch date');

        const launchDate = new Date(launch.net).getTime();
        const now = Date.now();

        if (launchDate <= now) throw new Error('Launch date is in the past');

        localStorage.setItem(storedLaunchDateKey, launch.net);
        textNodes.launchStatus.textContent = (currentLang === 'ar' ? 'الإطلاق المتوقع: ' : 'Expected launch: ') +
            new Date(launch.net).toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US');
        startTimer(launchDate);

    } catch (error) {
        console.warn('API sync failed, using fallback', error);
        const fallback = localStorage.getItem(storedLaunchDateKey) ?
            new Date(localStorage.getItem(storedLaunchDateKey)).getTime() :
            new Date('2026-09-01T00:00:00Z').getTime();

        const now = Date.now();
        const futureFallback = fallback > now ? fallback : new Date('2026-09-01T00:00:00Z').getTime();

        textNodes.launchStatus.textContent = currentLang === 'ar' ?
            'جاري مزامنة وقت الإطلاق...' :
            'Syncing launch time...';
        startFallbackTimer(futureFallback);
    }
}

// Comments functionality
const commentsKey = 'spaceMatrixComments';
let editingCommentId = null;

function getComments() {
    const stored = localStorage.getItem(commentsKey);
    return stored ? JSON.parse(stored) : [];
}

function saveComments(comments) {
    localStorage.setItem(commentsKey, JSON.stringify(comments));
}

function generateId() {
    return Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

function renderComments() {
    const comments = getComments();
    const commentsList = document.getElementById('comments-list');
    const t = translations[currentLang];

    if (comments.length === 0) {
        commentsList.innerHTML = '<div class="no-comments">' + t.noComments + '</div>';
        return;
    }

    commentsList.innerHTML = comments.reverse().map((comment, index) => {
        const time = new Date(comment.timestamp).toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US');
        return `<div class="comment-item" data-id="${comment.id}">
            <div class="comment-header">
                <div class="comment-author">${comment.name}</div>
                <div class="comment-actions">
                    <button class="action-btn edit-btn" data-id="${comment.id}" title="${t.editBtn}">✏️</button>
                    <button class="action-btn delete-btn" data-id="${comment.id}" title="${t.deleteBtn}">🗑️</button>
                </div>
            </div>
            <p class="comment-text">${comment.text}</p>
            <div class="comment-time">${time}</div>
        </div>`;
    }).join('');

    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', () => editComment(btn.dataset.id));
    });
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', () => deleteComment(btn.dataset.id));
    });
}

function editComment(id) {
    const comments = getComments();
    const comment = comments.find(c => c.id === id);
    if (!comment) return;

    editingCommentId = id;
    document.getElementById('comment-name').value = comment.name;
    document.getElementById('comment-text').value = comment.text;
    document.getElementById('submit-comment').textContent = translations[currentLang].editBtn + ' ✏️';
    document.getElementById('cancel-edit').style.display = 'block';
    document.getElementById('comment-form').scrollIntoView({ behavior: 'smooth' });
}

function deleteComment(id) {
    if (!confirm(translations[currentLang].confirmDelete)) return;
    let comments = getComments();
    comments = comments.filter(c => c.id !== id);
    saveComments(comments);
    renderComments();
}

function cancelEdit() {
    editingCommentId = null;
    document.getElementById('comment-form').reset();
    document.getElementById('submit-comment').textContent = translations[currentLang].submitBtn;
}

// Event listeners
document.getElementById('comment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('comment-name').value.trim();
    const text = document.getElementById('comment-text').value.trim();

    if (!name || !text) return;

    let comments = getComments();

    if (editingCommentId) {
        const index = comments.findIndex(c => c.id === editingCommentId);
        if (index !== -1) {
            comments[index].name = name;
            comments[index].text = text;
        }
        editingCommentId = null;
        document.getElementById('submit-comment').textContent = translations[currentLang].submitBtn;
    } else {
        comments.push({
            id: generateId(),
            name: name,
            text: text,
            timestamp: Date.now()
        });
    }

    saveComments(comments);
    editingCommentId = null;
    document.getElementById('comment-form').reset();
    document.getElementById('submit-comment').textContent = translations[currentLang].submitBtn;
    document.getElementById('cancel-edit').style.display = 'none';
    renderComments();
});

document.getElementById('cancel-edit').addEventListener('click', cancelEdit);

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage(currentLang);
});

// Initialize
applyLanguage(currentLang);
syncLaunchTime();
renderComments();