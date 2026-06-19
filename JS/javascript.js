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
document.addEventListener('DOMContentLoaded', () => {

    
    const bakeryModal = document.getElementById("bakeryModal");
    const closeBakeryX = bakeryModal ? bakeryModal.querySelector(".close-btn") : null;
    const closeBakeryFooterBtn = document.getElementById("closeModalBtn");

    function openBakeryModal() {
        if (bakeryModal) {
            bakeryModal.style.display = "block";
            setTimeout(() => {
                bakeryModal.classList.add("show");
            }, 10);
        }
    }

    function closeBakeryModal() {
        if (bakeryModal) {
            bakeryModal.classList.remove("show");
            setTimeout(() => {
                bakeryModal.style.display = "none";
            }, 400);
        }
    }

    setTimeout(openBakeryModal, 2000);

    if (closeBakeryX) closeBakeryX.addEventListener("click", closeBakeryModal);
    if (closeBakeryFooterBtn) closeBakeryFooterBtn.addEventListener("click", closeBakeryModal);
})

document.addEventListener('DOMContentLoaded', () => {

    const searchForm = document.getElementById('nav-search-form');
    const searchInput = document.getElementById('search-input');

    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            
            // Get the text, remove extra spaces, and make it lowercase
            const query = searchInput.value.trim().toLowerCase();
            
            if (query) {
                
                // Check if the search word includes certain keywords, then redirect to that page
                
                if (query.includes('cake') || query.includes('cakes')) {
                    
                    window.location.href = 'Products.html#cakes';
                    
                } else if (query.includes('eclair') || query.includes('pastry') || query.includes('croissant')) {
                    
                    window.location.href = 'products.html#pastries';
                    
                } else if (query.includes('bread') || query.includes('sourdough')) {
                    
                    window.location.href = 'products.html#breads';
                    
                } else if (query.includes('contact') || query.includes('location')) {
                    
                    window.location.href = 'contact.html';
                    
                } else if (query.includes('faq') || query.includes('question')) {
                    
                    window.location.href = 'FAQ.html';
                    
                } else {
                    
                    window.location.href = 'products.html';
                }
                
                // Clear the search bar after hitting enter
                searchInput.value = '';
            } else {
                searchInput.focus(); // Bring cursor back if empty
            }
        });
    }})
