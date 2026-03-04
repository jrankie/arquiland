// ===================================
// ARQUILAND - Main JavaScript
// ===================================

const serverIP = 'arquiland.com';

// ===================================
// Dynamic Footer Component (Fix #20)
// ===================================
function injectFooter() {
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <h3
                    style="font-family: 'Minecraftia', cursive; font-size: 1.5rem; background: var(--primary-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    ¡ÚNETE AL SERVER OFICIAL!
                </h3>
                <div class="social-links">
                    <a href="https://discord.gg/JsczsnRvwN" target="_blank" class="social-link" title="Discord"
                        aria-label="Discord">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                                d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                        </svg>
                    </a>
                    <a href="https://chat.whatsapp.com/JjE26zH4ro2H20kMym5hJl" target="_blank" class="social-link"
                        title="WhatsApp" aria-label="WhatsApp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                    </a>
                </div>
                <p class="copyright">© 2026 LCM Games. Todos los derechos reservados.</p>
            </div>
        </div>
    `;
}

// ===================================
// Toast Notification System (Fix #6)
// ===================================
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    if (message) toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===================================
// Copy IP to Clipboard (Fix #3, #12)
// ===================================
async function copyIP() {
    try {
        await navigator.clipboard.writeText(serverIP);
        showToast('¡IP copiada al portapapeles!');
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = serverIP;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('¡IP copiada al portapapeles!');
    }
}

// Hero copy button
const copyBtn = document.getElementById('copyIpBtn');
if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        copyIP();
    });
}


// ===================================
// Scroll Animation (IntersectionObserver)
// ===================================
const sections = document.querySelectorAll('section');

const observerOptions = {
    threshold: 0,
    rootMargin: '50px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    if (!section.classList.contains('hero')) {
        observer.observe(section);
    }
});

// ===================================
// Smooth scrolling for anchor links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return; // Skip nav-cta copy IP button
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// Netlify Form AJAX Submission (Fix #6 - toast instead of alert)
// ===================================
const paymentForm = document.querySelector('form[name="comprobante"]');

if (paymentForm) {
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = paymentForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Enviando...</span>';
        submitBtn.disabled = true;

        const formData = new FormData(paymentForm);
        // Ensure Netlify form-name is explicitly included 
        if (!formData.has('form-name')) {
            formData.append('form-name', paymentForm.getAttribute('name'));
        }

        fetch('/', {
            method: 'POST',
            body: formData
        })
            .then((response) => {
                if (response.ok) {
                    paymentForm.reset();
                    const redirectOverlay = document.getElementById('redirect-overlay');
                    if (redirectOverlay) {
                        redirectOverlay.classList.add('active');
                        setTimeout(() => {
                            window.location.href = 'index.html';
                        }, 3000);
                    }
                } else {
                    throw new Error('Network response error');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                // Use toast instead of native alert() (Fix #6)
                showToast('❌ Error al enviar. Intenta de nuevo.');
            })
            .finally(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
    });
}

// ===================================
// Initialize
// ===================================
injectFooter();
