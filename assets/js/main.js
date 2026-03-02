// Copy IP to Clipboard
const serverIP = 'IP SERVER'; // Cambia esto por tu IP real
const copyBtn = document.getElementById('copyIpBtn');
const toast = document.getElementById('toast');

if (copyBtn && toast) {
    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(serverIP);
            showToast();
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
            showToast();
        }
    });
}

function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Scroll Animation
const sections = document.querySelectorAll('section');

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px'
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

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Netlify Form AJAX Submission
const paymentForm = document.querySelector('form[name="comprobante"]');
const formToast = document.getElementById('form-toast');

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
                    if (formToast) {
                        formToast.classList.add('show');
                        setTimeout(() => {
                            formToast.classList.remove('show');
                        }, 4000);
                    }
                } else {
                    throw new Error('Network response error');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
            })
            .finally(() => {
                // Restore button text and state
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
    });
}
