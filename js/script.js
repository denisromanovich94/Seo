document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
    });








    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
                // Close mobile menu if open
                if (nav.classList.contains("menu-open")) {
                    menuToggle.click();
                }
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-in");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        ".service-card, .case-card, .blog-card, .about-stats, .stat-item"
    );
    animatedElements.forEach((element, index) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1}s`;
        observer.observe(element);
    });

    // Form submission handling
    const ctaButton = document.querySelector(".cta-button");
    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            // Here you would typically show a modal or form
            alert(
                "Форма обратной связи будет добавлена в следующем обновлении"
            );
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper-container", {
        
        freeMode: true,
        slidesPerView: 1.5,
        spaceBetween: 20,
        breakpoints: {
            // Адаптивные настройки
            460: {
                slidesPerView: 2,
            },
            840: {
                slidesPerView: 3,
            },
            1040: {
                slidesPerView: 4,
            },
            1240: {
                slidesPerView: 5,
            },
            1440: {
                slidesPerView: 6,
            },
        },
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const swiper1 = new Swiper(".reviews-slider__wrapper", {
        slidesPerView: 1.2,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2.5,
            },
            1024: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
            }
        },
        speed: 800,
        grabCursor: true,
    });
});













document.getElementById('openPopup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('popupOverlay').style.display = 'flex';
});

document.getElementById('popupOverlay').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

document.getElementById('submitButton').addEventListener('click', function() {
    const phoneNumber = document.getElementById('phoneInput').value;
    if (phoneNumber) {
        alert('Номер отправлен: ' + phoneNumber);
        document.getElementById('popupOverlay').style.display = 'none';
    } else {
        alert('Пожалуйста, введите номер телефона.');
    }
});

// Маска для ввода телефона
document.getElementById('phoneInput').addEventListener('input', function(event) {
    let x = event.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    event.target.value = '+7 (' + (x[2] ? x[2] : '') + (x[3] ? ')-' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
});















document.addEventListener('DOMContentLoaded', function () {
    // Элементы для бургер-меню
    const menuToggle = document.querySelector(".menu-toggle");
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    const nav = document.querySelector(".nav");
    const header1 = document.querySelector("header");
    const navLinks = document.querySelector(".nav-links");
    const navSocials = document.querySelector(".nav-socials");

    // Флаг для отслеживания, был ли добавлен класс 'scrolled' при открытии меню
    let isScrolledAdded = false;

    // Управление бургер-меню
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("menu-open");
        menuIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");

        if (nav.classList.contains("menu-open")) {
            if (!header1.classList.contains("scrolled")) {
                header1.classList.add("scrolled");
                isScrolledAdded = true;
            }
            navLinks.style.display = "flex";
            navSocials.style.display = "flex";
            document.body.style.overflow = "hidden"; // Блокируем прокрутку
        } else {
            if (isScrolledAdded) {
                header1.classList.remove("scrolled");
                isScrolledAdded = false;
            }
            navLinks.style.display = "";
            navSocials.style.display = "";
            document.body.style.overflow = ""; // Разблокируем прокрутку
        }
    });

    // Элементы для подменю
    const servicesItem = document.querySelector('a[href="#services"]');
    const casesItem = document.querySelector('a[href="#cases"]');
    const servicesSubmenu = document.getElementById('services-submenu');
    const casesSubmenu = document.getElementById('cases-submenu');
    const header = document.querySelector('.header');

    // Функция для закрытия всех подменю
    function closeAllSubmenus() {
        servicesSubmenu.style.display = 'none';
        casesSubmenu.style.display = 'none';
        document.querySelectorAll('.subsubmenu').forEach(subsubmenu => {
            subsubmenu.style.display = 'none';
        });
        header.classList.remove('scrolled'); // Убираем класс scrolled при закрытии всех меню
    }

    // Функция для проверки, открыто ли второе меню
    function isSecondMenuOpen() {
        return servicesSubmenu.style.display === 'flex' || casesSubmenu.style.display === 'flex';
    }

    // Управление вторым уровнем меню
    servicesItem.addEventListener('click', (e) => {
        e.preventDefault();
        if (servicesSubmenu.style.display === 'flex') {
            closeAllSubmenus();
        } else {
            closeAllSubmenus();
            servicesSubmenu.style.display = 'flex';
            header.classList.add('scrolled');
        }
    });

    casesItem.addEventListener('click', (e) => {
        e.preventDefault();
        if (casesSubmenu.style.display === 'flex') {
            closeAllSubmenus();
        } else {
            closeAllSubmenus();
            casesSubmenu.style.display = 'flex';
            header.classList.add('scrolled');
        }
    });

    // Управление третьим уровнем меню
    const submenuItems = document.querySelectorAll('.submenu-item');
    submenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const subsubmenuId = item.getAttribute('href').substring(1) + '-submenu';
            const subsubmenu = document.getElementById(subsubmenuId);

            document.querySelectorAll('.subsubmenu').forEach(subsubmenu => {
                subsubmenu.style.display = 'none';
            });

            if (subsubmenu) {
                subsubmenu.style.display = 'flex';
            } else {
                console.error('Submenu not found for ID:', subsubmenuId);
            }
        });
    });

    // Закрытие меню при клике вне
    document.addEventListener('click', (event) => {
        if (
            !event.target.closest('.nav-item') && 
            !event.target.closest('.submenu') && 
            !event.target.closest('.subsubmenu') &&
            !event.target.closest('.menu-toggle') && 
            !event.target.closest('.nav')  // Добавляем проверку на закрытие только если клик не был внутри меню
        ) {
            closeAllSubmenus();
            nav.classList.remove("menu-open"); // Закрытие бургер-меню
            menuIcon.classList.remove("hidden"); // Показ иконки бургера
            closeIcon.classList.add("hidden");  // Скрытие крестика
            document.body.style.overflow = ""; // Разблокируем прокрутку
        }
    });

    // Наблюдаем за изменениями в DOM для управления классом scrolled
    const observer = new MutationObserver(() => {
        if (isSecondMenuOpen()) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Наблюдаем за изменениями в подменю
    observer.observe(servicesSubmenu, { attributes: true, attributeFilter: ['style'] });
    observer.observe(casesSubmenu, { attributes: true, attributeFilter: ['style'] });
});






















document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContainers = document.querySelectorAll('.tab-container');
    const tabPanes = document.querySelectorAll('.tab-pane');
    let currentIndex = 0; // Текущий активный таб
  
    // Функция для переключения табов
    function switchTab(index) {
      // Убираем активный класс у всех кнопок, контейнеров и панелей
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContainers.forEach(container => container.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));
  
      // Добавляем активный класс к выбранной кнопке, контейнеру и панели
      tabButtons[index].classList.add('active');
      tabContainers[index].classList.add('active');
      tabPanes[index].classList.add('active');
  
      // Обновляем текущий индекс
      currentIndex = index;
    }
  
    // Обработчик клика для кнопок
    tabButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        switchTab(index);
      });
    });
  
    // Автоматическое переключение каждые 5 секунд
    setInterval(() => {
      currentIndex = (currentIndex + 1) % tabButtons.length; // Переход к следующему табу
      switchTab(currentIndex);
    }, 5000); // 5000 мс = 5 секунд
  });