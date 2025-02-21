document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    const menuToggle = document.querySelector(".menu-toggle");
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    const nav = document.querySelector(".nav");
    const header1 = document.querySelector("header");
    const navLinks = document.querySelector(".nav-links");
    const navSocials = document.querySelector(".nav-socials");

    // Флаг для отслеживания, был ли добавлен класс 'scrolled' при открытии меню
    let isScrolledAdded = false;

    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("menu-open");
        menuIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");

        // Если меню открыто
        if (nav.classList.contains("menu-open")) {
            // Добавляем класс 'scrolled' на header, если его нет
            if (!header1.classList.contains("scrolled")) {
                header1.classList.add("scrolled");
                isScrolledAdded = true; // Устанавливаем флаг, что класс был добавлен
            }

            // Делаем .nav-links и .nav-socials флекс-контейнерами
            navLinks.style.display = "flex";
            navSocials.style.display = "flex";

            // Блокируем прокрутку body
            document.body.style.overflow = "hidden";
        } else {
            // Если меню закрыто
            // Убираем класс 'scrolled', только если он был добавлен при открытии меню
            if (isScrolledAdded) {
                header1.classList.remove("scrolled");
                isScrolledAdded = false; // Сбрасываем флаг
            }

            // Возвращаем .nav-links и .nav-socials в исходное состояние
            navLinks.style.display = "";
            navSocials.style.display = "";

            // Возвращаем прокрутку body
            document.body.style.overflow = "";
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