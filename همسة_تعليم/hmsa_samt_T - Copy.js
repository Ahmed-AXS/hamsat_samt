/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*=========== MENU HIDDEN ==========*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

const linkAction = () => {
    if (navMenu) {
        navMenu.classList.remove('show-menu');
    }
};

navLinks.forEach(link => link.addEventListener('click', linkAction));

/*=============== SHADOW HEADER ===============*/
const headerElement = document.getElementById("header");

if (headerElement) {
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop >= 20) {
            headerElement.style.boxShadow = '0px 0px 20px #0000008a';
            headerElement.style.borderBottomRightRadius = '10px';
            headerElement.style.borderBottomLeftRadius = '10px';
        } else {
            headerElement.style.boxShadow = 'none';
            headerElement.style.borderBottomRightRadius = '0px';
            headerElement.style.borderBottomLeftRadius = '0px';
        }
    });
}

/*=============== EMAIL JS ===============*/
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-massage')

const sendEmail = (e) =>{
  e.preventDefault()

  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_f05p0di' , 'template_9n77v7h' , '#contact-form' , 'PzY2C7U4lL4ZjSE4_')
  .then(() =>{
     // Show sent message
    contactMessage.textContent = 'تم ارسال الرسالة بنجاح ✅'
    
    // Remove message after five seconds
    setTimeout(() =>{
      contactMessage.textContent = ''
    }, 5000)

    // Clear input fields
    contactForm.reset()

  }, () =>{
    // Show error message
    contactMessage.contactMessage = 'لم يتم إرسال الرسالة (خطأ في الخدمة) ❌'
  })
}

contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    if (scrollUp) {
        window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                              : scrollUp.classList.remove('show-scroll');
    }
};

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58; // تعويض عن أي مساحة علوية (مثل الـ header)
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (sectionsClass) { // التحقق من وجود العنصر قبل محاولة تعديله
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
// إذا كنت تستخدم مكتبة ScrollReveal، تأكد من تضمين المكتبة في المشروع
// هنا يمكنك تفعيل الرسوم المتحركة حسب احتياجك.
