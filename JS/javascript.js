document.addEventListener('DOMContentLoaded', () => {
    
    
    const imageModal = document.getElementById('image-modal');
    const modalImg = document.getElementById('expanded-image');
    const captionText = document.getElementById('modal-caption');
    const closeImageBtn = document.querySelector('.close-modal');

    const galleryImages = document.querySelectorAll('.container_three img, .product_row img');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            if (imageModal) {
                imageModal.style.display = 'block';
                modalImg.src = img.src;
                captionText.innerHTML = img.alt ? img.alt : "Crème de la Crème Delicacy";
                
                setTimeout(() => {
                    imageModal.classList.add("show");
                }, 10);
            }
        });
    });

    function closeImageModal() {
        if (imageModal) {
            imageModal.classList.remove("show");
            setTimeout(() => {
                imageModal.style.display = 'none';
            }, 400); 
        }
    }

    if (closeImageBtn) {
        closeImageBtn.addEventListener('click', closeImageModal);
    }})