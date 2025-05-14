
//  تبديل اللغة

function toggleLanguage() {
    const isArabic = document.documentElement.lang === 'ar';
    document.documentElement.lang = isArabic ? 'en' : 'ar';

    document.querySelectorAll('[data-ar], [data-en]').forEach(el => {
        el.textContent = isArabic ? el.dataset.en : el.dataset.ar;
    });

    const langBtn = document.querySelector('#language-toggle button');
    if (langBtn) {
        langBtn.textContent = isArabic ? 'عربي / English' : 'English / عربي';
    }
}


//  فلترة الأصناف بالبحث

function filterItems() {
    const input = document.getElementById('searchInput');
    const query = input.value.toLowerCase().trim();
    const items = document.querySelectorAll('.menu-item');

    items.forEach(item => {
        const keywords = item.dataset.keywords.toLowerCase();
        item.style.display = keywords.includes(query) ? 'block' : 'none';
    });
}


//  بيانات القائمة لكل قسم



const menuData = {


    iftarat: [
        { name: "إفطار ELITE (إفطار صباحي لشخصين يتكون من 11 صنف)", price: "50 شيكل" },
        { name: "منقوشة زعتر", price: "12 شيكل" },
        { name: "منقوشة جبنة", price: "15 شيكل" },
        { name: "منقوشة جبنة و زعتر", price: "17 شيكل" },
        { name: "شكشوكة", price: "15 شيكل" },
        { name: "جبنة صفراء مع نقانق", price: "15 شيكل" },
        { name: "بيض مع جبنة بيضاء", price: "17 شيكل" },
        { name: "بيض مع بطاطا", price: "15 شيكل" },
        { name: "صحن فول", price: "10 شيكل" },
        { name: "صحن مسبحة", price: "10 شيكل" }
    ],
    shisha: [
        { name: "love66", price: "فرش:30شيكل|عادي:20شيكل" },
        { name: "ليمون ونعنع", price: "فرش:30شيكل|عادي:20شيكل" },
        { name: "بطيخ", price: "فرش: 30شيكل|عادي:18شيكل" },
        { name: "كيف", price: "فرش:30شيكل|عادي:18 شيكل" },
        { name: "تفاحتين", price: "فرش:30شيكل|عادي:18شيكل" },
        { name: "تفاحتين نخلة", price: "فرش:30شيكل|عادي:20شيكل" },
        { name: "بلوبيري", price: "فرش:30شيكل|عادي:20شيكل" },
        { name: "سهم وقرفة", price: "فرش:30 شيكل|عادي:18شيكل" },
        { name: "خلطة شامية", price: "فرش:30شيكل|عادي:20شيكل" },

        { name: "سبيشل ELITE", price: "فرش:35شيكل|عادي:25شيكل" }

    ],
    salads: [
        { name: "سلطة كينوا (خس, بقدونس, بندورة, بذور كينوا )", price: "25 شيكل", desc: "خس، بقدونس، بندورة، بذور كينوا" },
        { name: "سلطة سيزر مع دجاج (خس,صوص سيرز, خبز كوروتون, جبنة بارميزان, دجاج)", price: "20 شيكل", desc: "خس، صوص سيزر، خبز كروتون، جبنة بارميزان، دجاج" },
        { name: "سلطة سيرز (خس,صوص سيرز,خبز كروتون ,جبنة بارميزان  )", price: "17 شيكل", desc: "خس، صوص سيزر، خبز كروتون، جبنة بارميزان" },
        { name: "سلطة فتوش (خس, بندورة, خيار, فليفلة ,خبز لبناني ,بصل)", price: "17 شيكل", desc: "خس، بندورة، خيار، فليفلة، خبز لبناني، بصل" },
        { name: "سلطة يونانية(خس, بندورة, خيار, فليفلة, زيتون اسود, جبنة بيضاء)", price: "17 شيكل", desc: "خس، بندورة، خيار، فليفلة، زيتون أسود، جبنة بيضاء" },
        { name: "تبولة شامية(بقدونس, بندورة, برغل, خيار)", price: "17 شيكل", desc: "بقدونس، بندورة، برغل، خيار" },
        { name: "سلطة عربية(خيار, بندورة, بقدونس, نعنع, بصل)", price: "15 شيكل", desc: "خيار، بندورة، بقدونس، نعنع، بصل" },
        { name: "سلطة عربية بالطحينية(خيار, بندورة,بقدونس,نعنع,طحينية)", price: "15 شيكل", desc: "خيار، بندورة، بقدونس، نعنع، بطيخ" },
        { name: "سلطة جرجير(جرجير, بندورة, بصل )", price: "15 شيكل", desc: "جرجير، بندورة، بصل" }
    ],
    soups: [
        { name: "شوربة خضار", price: "15 شيكل" },
        { name: "شوربة فطر بالكريمه", price: "20 شيكل" },
        { name: "شوربة جمبري بالخضار", price: "25 شيكل" },
        { name: "شوربة جمبري بالكريمه", price: "25 شيكل" }
    ],
    hotAppetizers: [
        //  عنوان: مقبلات ساخنة
        { name: " مقبلات ساخنة", price: " " },

        { name: "تشيكن تشيز فرايز", price: "25 شيكل" },
        { name: "أصابع دجاج كريسبي", price: "25 شيكل" },
        { name: "أصابع موزاريلا مقلية", price: "25 شيكل" },
        { name: "خبز بالثوم والجبنة", price: "15 شيكل" },
        { name: "كبة مقلية", price: "15 شيكل" },      
        { name: "بطاطا حارة بالكزبرة", price: "20 شيكل" }, 
        { name: "بطاطا ودجز", price: "20 شيكل" }, 
        { name: "بطاطا مقلية", price: "17 شيكل" },               
        { name: "تشيبلي تشيز فرايز", price: "20 شيكل" },
        { name: "فتة حمص", price: "25 شيكل" },
        { name: "صحن أرز", price: "10 شيكل" },
        { name: "جناح دجاج (12 قطعة)", price: "25 شيكل" },
        { name: "يلنجي", price: "20 شيكل" },

        //  عنوان: مقبلات باردة
        { name: " مقبلات باردة", price: " " },

        { name: "لبنة بالجوز والثوم", price: "15 شيكل" },
        { name: "حمص", price: "10 شيكل" },
        { name: "طحينية", price: "10 شيكل" },
        { name: "مخللات", price: "10 شيكل" }
    ],
    sandwiches: [
        { name: "سندويش كريسبي تشكن (دجاج , خس, مخلل,صوص ثوم)  ", price: "22 شيكل", desc: "دجاج، خس، مخلل، صوص ثوم" },
        { name: "سندويش اليت (دجاج,مشروم,وايت صوص, جبة)", price: "22 شيكل", desc: "دجاج، مشروم، وبيات صوص، جبنة" },
        { name: "فلادلفيا تشيز ستيك (ستيك عجل مشوي,مشروم,بصل,فلفل حلو,جبنة)", price: "30 شيكل", desc: "ستيك عجل مشوي، مشروم، بصل، فلفل حلو، جبنة" },
        { name: "فرنسيسكو (صدر دجاج, خس,ذرة,مخلل,صويا صوص, مايونيز,جبنة)", price: "22 شيكل", desc: "صدر دجاج، خس، مخلل، صويا صوص، مايونيز، جبنة" },
        { name: "بانيني تشكن بيستو (صدر دجاج, صوص بيستو, جبنة موزاريلا,فلفل حلو)", price: "22 شيكل", desc: "صدر دجاج، صوص بيستو، جبنة موزاريلا، فلفل حلو" },
        { name: "برجر عجل(خس,مخلل,بندورة,جبنة,لحمة عجل) ", price: "30 شيكل", desc: "خس، طماطم، بندورة، جبنة، لحمة عجل" },
        { name: "سندويش فاهيتا دجاج حار (دجاج,بصل,فلفل حلو)   ", price: "22 شيكل", desc: "دجاج، بصل، فلفل حلو" },
        { name: " برجر دجاج (صدر دجاج ,مخلل,خس,بندورة ,جبنة) ", price: "25 شيكل", desc: "صدر دجاج، مخلل، خس، بندورة، جبنة" },
        { name: " كاساديا دجاج (جبنة,صدر دجاج, بصل ,فلفل حلو,ذرة,خبز تورتيلا) ", price: "22 شيكل", desc: "جبنة، صدر دجاج، بصل، فلفل حلو، خردل، خبز تورتيلا" },
        { name: "كاساديا عجل (ستيك عجل, جبنة, ذرة,بصل,فليفلة حلوة ,خبز تورتيلا) ", price: "30 شيكل", desc: "ستيك عجل، بصل، فلفلة خضراء، جبنة، خبز تورتيلا" },
        { name: " توست شاورما (صدر دجاج,جبنة,مايونيو,مخلل) ", price: "25 شيكل", desc: "صدر دجاج، جبنة، مايونيز، مخلل" }
    ],
    italian: [
        { name: "وجبات إيطالية" , price:" " },
        { name: "فيتوشيني مشروم (مشروم,صلصة كريمة ,بارميزان) ", price: "30 شيكل", desc: "مشروم، صلصة كريمية، بارميزان" },
        { name: "فيتوتشيني صوص روزا (صوص طماطم,صلصة كريمة, بارميزان)  ", price: "30 شيكل", desc: "صوص طماطم، صلصة كريمية، بارميزان" },
        { name: "فيتوتشيني بيستو (صلصة الريحان مع البرميزان وصلصة الكريمة مع المشروم) ", price: "30 شيكل", desc: "صلصة الريحان مع البارميزان وصلصة الكريمة مع المشروم" },
        { name: "فيتوتشيني دجاج (قطع من صدر دجاج , مشروم ,صلصة الكريمة,بارميزان) ", price: "35 شيكل", desc: "قطع من صدر الدجاج، مشروم، صلصة الكريمة، بارميزان" },
        { name: "فيتوتشيني جمبري (قطع من الجمبري,مشروم,صلصة الكريمة,بارميزان) ", price: "40 شيكل", desc: "قطع من الجمبري، مشروم، صلصة كريمية، بارميزان" },
        { name: "سترجنوف دجاج(يقدم مع ارز) ", price: "40 شيكل", desc: "يقدم مع أرز" },

        { name: "بيتزا" , price:" "},
        { name: "بيتزا مارجريتا", price: "30 شيكل" },
        { name: "بيتزا خضار", price: "35 شيكل" },
        { name: "بيتزا بابروني (سلامي)", price: "30 شيكل" },
        { name: "بيتزا دجاج باربيكيو", price: "35 شيكل" }
    ],
    seafood: [
        { name: "أصابع فيليه سمك", price: "50 شيكل" },
        { name: "ستيك سالمون", price: "90 شيكل" },
        { name: "سمك دينيس مقلي", price: "80 شيكل" },
        { name: "جمبري مطفي بالليمون", price: "60 شيكل" },
        { name: "جمبري بانبه (12 قطعة)", price: "60 شيكل" },
        { name: "فاهيتا جمبري", price: "50 شيكل" }
    ],
    juices: [
        { name: "عصائر طبيعية"  , price : " "},
        { name: "ليمون", price: "14 شيكل" },
        { name: "ليمون ونعنع", price: "15 شيكل" },
        { name: "برتقال", price: "14 شيكل" },
        { name: "مانجا", price: "14 شيكل" },
        { name: "بشملو", price: "14 شيكل" },
        { name: "فراولة", price: "14 شيكل" },
        { name: "أناناس", price: "14 شيكل" },
        { name: "جمايكا (برتقال , رمان)", price: "15 شيكل" },
        { name: "رمان (بالموسم)", price: "15 شيكل" },

        { name: "كوكتيل", price :" " },
        { name: "فخفخينا", price: "18 شيكل" },
        { name: "كوكتيل أفوكادو", price: "17 شيكل" },
        { name: "موز حليب", price: "15 شيكل" },
        { name: "كوكتيل عادي", price: "15 شيكل" },
        { name: "كوكتيل ELITE", price: "20 شيكل" },

        { name: "ميلك شيك" , price:" "},
        { name: "أوريو", price: "15 شيكل" },
        { name: "فراولة", price: "15 شيكل" },
        { name: "كراميل", price: "17 شيكل" },
        { name: "سيريلاك", price: "17 شيكل" },
        { name: "لوتس", price: "15 شيكل" },
        { name: "فانيلا", price: "15 شيكل" },
        { name: "بستاشيو", price: "17 شيكل" },
        { name: "شوكولاتة", price: "17 شيكل" },
        { name: "سنكرز", price: "17 شيكل" }
    ],
    desserts: [
        //  بوظة
                {  name: "بوظة ", price: " " },

        {  name: "بوظة ELITE", price: "15 شيكل" },
        {  name: "بوظة مشكل", price: "12 شيكل" },
        {  name: "بوظة أوروبي", price: "10 شيكل" },

        //  حلويات
        {  name: " حلويات", price: " " },
        {  name: "تشيز كيك", price: "20 شيكل" },
        {  name: "سوفليه", price: "20 شيكل" },
        {  name: "موس كيك", price: "25 شيكل" },
        {  name: "كيك السانشباستيان", price: "25 شيكل" },
        {  name: "كيك هرم", price: "10 شيكل" },
        { name: "كريب + فواكه", price: "20 شيكل" },
        {  name: "وافل + بوظة + فواكه", price: "25 شيكل" },
        { name: "فشافيش", price: "20 شيكل" },
        {  name: "إضافة بوظة", price: "5 شيكل" },

        //  مثلجات
        { name: " مثلجات ", price: " " },

        { name: "أيس كوفي", price: "15 شيكل" },
        {  name: "أيس شوكولاتة", price: "15 شيكل" },
        {  name: "ايس بسفلورا", price: "15 شيكل" },
        {  name: "أيس تي خوخ", price: "15 شيكل" },
        {  name: "أيس تي ليمون", price: "15 شيكل" },
        { name: "أيس بستاشيو", price: "15 شيكل" },
        {  name: "أيس موكا", price: "15 شيكل" },

        //  مشكل
        { name: " مشكل ", price: " " },

        { name: "صحن مكسرات", price: "20 شيكل" },
        {  name: "صحن فواكه", price: "20 شيكل" },
        {  name: "ناتشوز", price: "20 شيكل" },

        //  موهيتو
                { name: "موهيتو ", price: " " },

        { type: "موهيتو", name: "بلوبيري", price: "15 شيكل" },
        { type: "موهيتو", name: "بطّيخ ونعنع", price: "15 شيكل" },
        { type: "موهيتو", name: "كيوي", price: "15 شيكل" },
        { type: "موهيتو", name: "ليمون", price: "15 شيكل" },
        { type: "موهيتو", name: "توت", price: "15 شيكل" },
        { type: "موهيتو", name: "أناناس", price: "15 شيكل" }
    ],
    mainCourse: [
        { name: "ستيك دجاج مشوي(صدر دجاج مشوي مع خضار مشوية)", price: "40 شيكل", desc: "صدر دجاج مشوي مع خضار سوتيه" },
        { name: "ستيك دجاج وايت صوص(صدر دجاج مع وايت صوص , خضار سوتيه)", price: "40 شيكل", desc: "صدر دجاج مع وايت صوص، خضار سوتيه" },
        { name: "ستيك دجاج وايت صوص مع بيستو(صدر دجاج مع وايت صوص وريحان, خضار سوتيه)", price: "40 شيكل", desc: "صدر دجاج مع صوص وايت مشروم، خضار سوتيه" },
        { name: "ستيك دجاج بالثوم والليمون(صدر دجاج مع الثوم والليمون , خضار سوتيه)", price: "40 شيكل", desc: "صدر دجاج مع الثوم والليمون، خضار سوتيه" },
        { name: "وجبة فاهيتا (تقدم مع طبق ارز)", price: "40 شيكل", desc: "تقدم مع طبق أرز" },
        { name: "انتركوت ", price: "75 شيكل" },
        { name: "  ستيك فيليه عجل", price: "80 شيكل" },
        { name: "كباب  حلبي (مشوي)", price: "40 شيكل" },
        { name: "ريش مشوية", price: "60 شيكل" },
        { name: "مشاوي مشكل", price: "75 شيكل" },


        { name: "جميع الوجبات تقدم مع خضار سوتيه، وبطاطا بورية. بإمكانك طلب أرز بالمكسرات مع أي وجبة + 5 شيكل", price: " " }
    ],
    drinks: [
        { name: "مشروبات ساخنة", price: "" },
        { name: "قهوة عربية صغيرة", price: "5 شيكل" },
        { name: "قهوة عربية كبيرة", price: "7 شيكل" },
        { name: "إسبريسو / دبل", price: "8 / 12 شيكل" },
        { name: "أمريكانو", price: "10 شيكل" },
        { name: "موكا", price: "12 شيكل" },
        { name: "شاي", price: "5 شيكل" },
        { name: "زهورات", price: "5 شيكل" },
        { name: "سحلب", price: "10 شيكل" },
        { name: "شوكو", price: "7 شيكل" },
        { name: "كابتشينو", price: "10 شيكل" },
        { name: "نسكافيه", price: "8 / 10 شيكل" },
        { name: "أفوخ", price: "12 شيكل" },
        { name: "لاتيه", price: "12 شيكل" },
        { name: "فرنش بندق", price: "12 شيكل" },
        { name: "فرنش فانيلا", price: "12 شيكل" },
        { name: "هوت نوتيلا", price: "13 شيكل" },
        { name: "هوت شوكليت", price: "13 شيكل" },
        { name: "هوت لوتس", price: "13 شيكل" },
        { name: "أفوغاتو", price: "13 شيكل" },

        { name: "مشروبات باردة", price: "" },
        { name: "مشروبات غازية", price: "5 شيكل" },
        { name: "صودا", price: "5 شيكل" },
        { name: "عنب", price: "5 شيكل" },
        { name: "حريب فروت", price: "5 شيكل" },
        { name: "برتقال", price: "5 شيكل" },
        { name: "بفاريا ساده", price: "7 شيكل" },
        { name: "بقاريـا تفاح", price: "7 شيكل" },
        { name: "بلو", price: "6 شيكل" },
        { name: "ريد بول", price: "8 شيكل" },
        { name: "اكس ال", price: "8 شيكل" },
        { name: "مياه معدنية صغيرة", price: "3 شيكل" },
        { name: "مياه معدنية كبيرة", price: "5 شيكل" }
    ]


};


//  عرض قائمة الأصناف بدل الصورة

function showItems(sectionKey) {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");

    const items = menuData[sectionKey];

    if (!items || items.length === 0) {
        popupContent.innerHTML = `
      <span id="close-btn" onclick="closePopup()">&times;</span>
      <p>لا توجد أصناف لهذا القسم حالياً.</p>
    `;
    } else {
        // بناء قائمة الأصناف
        let listHTML = `
      <span id="close-btn" onclick="closePopup()">&times;</span>
      <h3>الأصناف</h3>
      <ul class="item-list">
    `;

       items.forEach(item => {
    const isTitle = !item.price.trim(); // تحقق إذا السعر فارغ
    listHTML += `
    <li${isTitle ? ' style="font-weight:bold;"' : ''}>
      <span class="item-name">${item.name}</span>
      <span class="item-price">${item.price}</span>
    </li>
  `;
});


        listHTML += `</ul>`;
        popupContent.innerHTML = listHTML;
    }

    popup.classList.add("active");
}

//  إغلاق Popup

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("active");
}

//  تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", filterItems);
    }

    const popup = document.getElementById("popup");
    popup.addEventListener("click", (e) => {
        if (e.target.id === "popup") {
            closePopup();
        }
    });
});
