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

// CONTACT FORM:

const intentSelect = document.getElementById('intent');
if (intentSelect) {
    intentSelect.addEventListener('change', function () {
        this.classList.add('chosen');
    });
}

const contactFormWidget = document.getElementById('contact-form');

if (contactFormWidget) {
    contactFormWidget.addEventListener('submit', async function (e) {
        e.preventDefault();

        const status = document.getElementById('send-status');
        const btn = document.querySelector('.send-btn');

        const name     = document.getElementById('name').value.trim();
        const email    = document.getElementById('email').value.trim();
        const intent   = document.getElementById('intent').value;
        const industry = document.getElementById('industry-focus').value.trim();
        const message  = document.getElementById('message').value.trim();

        if (!name || !email || !intent || !industry || !message) {
            status.textContent = 'Please fill in all fields.';
            status.className = 'send-status visible error';
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            status.textContent = 'Check your email address.';
            status.className = 'send-status visible error';
            return;
        }

        btn.disabled = true;
        btn.querySelector('span').textContent = 'Sending...';
        status.className = 'send-status';

        await new Promise(r => setTimeout(r, 1200));

        status.textContent = "Message successfully sent — we'll be in touch with you within two weeks.";
        status.className = 'send-status visible success';

        btn.querySelector('span').textContent = 'Send Message';
        btn.disabled = false;

        this.reset();

        document.getElementById('intent').classList.remove('chosen');
    });
}
