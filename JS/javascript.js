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
                    
                } else if (query.includes('muffin') || query.includes('muffins') || query.includes('berry')) {
                    
                    window.location.href = 'Products.html#muffins';
                    
                } else if (query.includes('bread') || query.includes('sourdough')) {
                    
                    window.location.href = 'Products.html#bread';
                    
                } else if (query.includes('contact') || query.includes('location')) {
                    
                    window.location.href = 'Contact.html';
                    
                } else if (query.includes('faq') || query.includes('question')) {
                    
                    window.location.href = 'FAQ.html';
                    
                } else {
                    
                    window.location.href = 'Products.html';
                }
                
                // Clear the search bar after hitting enter
                searchInput.value = '';
            } else {
                searchInput.focus(); // Bring cursor back if empty
            }
        });
    }})

document.addEventListener('DOMContentLoaded', () => {

    
    const enquiryForm = document.getElementById('enquiryForm');
    
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page from reloading

            // client side validation
            const name = document.getElementById('enqName').value;
            const phone = document.getElementById('enqPhone').value;
            const service = document.getElementById('enqService').value;
            const responseBox = document.getElementById('enquiryResponse');
            let isValid = true;

            // Clear previous errors
            document.querySelectorAll('.error-message').forEach(err => err.style.display = 'none');

            // Custom JS Validation Check
            if (phone.length !== 10 || isNaN(phone)) {
                document.getElementById('enqPhoneError').style.display = 'block';
                isValid = false;
            }

            // AJAX Submission Simulation
            if (isValid) {
                // Change button text to show loading
                const submitBtn = enquiryForm.querySelector('.btn-submit');
                submitBtn.innerText = "Processing...";

                // use setTimeout to simulate the delay of an AJAX network request to a server
                setTimeout(() => {
                    // This simulates the server returning availability and cost
                    let mockCost = "R0.00";
                    if (service === "catering") mockCost = "Starting at R1500";
                    if (service === "wedding_cake") mockCost = "Starting at R2800";
                    if (service === "wholesale") mockCost = "Custom Quote Required";

                    // Display the AJAX response
                    responseBox.innerHTML = `
                        <h3>Quote Generated</h3>
                        <p>Thank you, ${name}. Our <strong>${service.replace('_', ' ')}</strong> services are currently available.</p>
                        <p style="color: #d4af37; font-size: 1.2em;">Estimated Cost: ${mockCost}</p>
                    `;
                    responseBox.style.display = 'block';
                    
                    // Reset form and button
                    enquiryForm.reset();
                    submitBtn.innerText = "Check Availability via AJAX";

                }, 1500); // 1.5 second simulated delay
            }
        });
    }})

document.addEventListener('DOMContentLoaded', () => {
    
    const mapContainer = document.getElementById('bakery-map');

    if (mapContainer) {
        // Coordinates format: [Latitude, Longitude]
        const bakeryCoords = [-33.9120, 19.1171]; 

        // Initialize the map
        const map = L.map('bakery-map', {
            zoomControl: false 
        }).setView(bakeryCoords, 15);

        // Add minimalist zoom control to the bottom right
        L.control.zoom({ position: 'bottomright' }).addTo(map);

        // Load the Premium Light Minimalist Map Tiles
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 20
        }).addTo(map);

        // Create the custom gold pin icon
        const goldIcon = L.divIcon({
            className: 'custom-gold-pin',
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });

        // Drop the pin and attach text popup
        L.marker(bakeryCoords, { icon: goldIcon })
            .addTo(map)
            .bindPopup(`
                <div style="text-align: center; padding: 5px;">
                    <strong style="color: #d4af37; font-size: 1.1em;">Crème de la Crème</strong><br>
                    <span style="font-size: 0.9em; color: #ccc;">Artisanal French Bakery</span>
                </div>
            `)
            .openPopup();

        
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }
});
