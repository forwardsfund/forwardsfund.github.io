if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash');

    document.body.classList.add('no-scroll');

    setTimeout(() => {
        splash.style.display = 'none';
        document.body.classList.remove('no-scroll');

        document.getElementById('home').scrollIntoView({ behavior: 'auto' });
    }, 4300);
});

const hamburger = document.querySelector('#navbar-hamburger');
const mobileMenu = document.querySelector('#main-nav ul');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});

document.querySelectorAll('#main-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
        }
    });
});

const heroImage = document.getElementById('hero-image');

function setTheme(bgImage) {
    heroImage.style.backgroundImage = `url('${bgImage}')`;
}

// MANIFESTO SCROLL REVEAL (staggered)

const manifestoCards = document.querySelectorAll('.manifesto-card');

if (manifestoCards.length) {
    manifestoCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });

    const manifestoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.15
    });

    manifestoCards.forEach(card => {
        manifestoObserver.observe(card);
    });
}

// TEAM SCROLL REVEAL (staggered)
 
const teamMembers = document.querySelectorAll('.team-member');
 
if (teamMembers.length) {
    const teamObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.2 });
 
    teamMembers.forEach(el => teamObserver.observe(el));
}

// CONTACT FORM

const intentSelect = document.getElementById('intent');

if (intentSelect) {
    intentSelect.addEventListener('change', function () {
        this.classList.add('chosen');
    });
}
