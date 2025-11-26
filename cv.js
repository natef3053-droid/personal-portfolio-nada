
document.addEventListener('DOMContentLoaded', () => {
    
    // وظائف زر "Show More/Show Less" 
    const viewAllBtns = document.querySelectorAll('.view-all-btn');

    viewAllBtns.forEach(button => {
        const targetGridId = button.getAttribute('data-target-grid');
        const targetGrid = document.getElementById(targetGridId);
        
        if (!targetGrid) return; 

        const hiddenCertificates = targetGrid.querySelectorAll('.hidden-cert');

        hiddenCertificates.forEach(cert => {
            cert.style.display = 'none';
        });
        button.textContent = 'Show More';
        button.setAttribute('data-visible', 'false');

        button.addEventListener('click', () => {
            const isVisible = button.getAttribute('data-visible') === 'true';

            if (!isVisible) {
                hiddenCertificates.forEach(cert => {
                    cert.style.display = 'block';
                });
                button.textContent = 'Show Less';
                button.setAttribute('data-visible', 'true');
            } else {
                hiddenCertificates.forEach(cert => {
                    cert.style.display = 'none';
                });
                button.textContent = 'Show More';
                button.setAttribute('data-visible', 'false');

                const section = button.closest('.certificates-section');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // وظائف تكبير الصور (Modal)
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    
    // لإغلاق الـ Modal عند الضغط على زر X
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.onclick = function() { 
        modal.style.display = "none";
    }

    // إغلاق الـ Modal بالضغط على زر Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });

    // تعيين وظيفة فتح الـ Modal (تستخدم في HTML)
    window.openModal = function(imageElement) {
        modal.style.display = "block";
        modalImg.src = imageElement.src;
        captionText.innerHTML = imageElement.alt;
    }

    // تعيين وظيفة إغلاق الـ Modal بالضغط خارج الصورة
    window.closeModal = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});