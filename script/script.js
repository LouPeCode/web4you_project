document.addEventListener("DOMContentLoaded", () => {

//*** Mobile-menu ***//
    let hamburger = document.querySelector(".hamburger");
    let navLinks = document.querySelector(".menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("change");
        navLinks.classList.toggle("active");

    });


//*** Scroll progress ***//
    let menuItem = document.querySelectorAll(".menu-item");

    menuItem.forEach((a) => {
        a.addEventListener("click", (e) => {
            e.preventDefault();

            let hodnotaData = e.currentTarget.getAttribute("data-item");
            let targetEl = document.querySelector("." + hodnotaData);
            let offsetTop = targetEl.offsetTop;
            
            window.scrollTo({
                top: offsetTop-30,
                behavior: "smooth",
            });
        });
    });

    
//*** Modal-box order***//
    let modalBoxOrder = document.querySelector(".modal-box-order");
    let openModalOrder = document.querySelector(".open-modal-order");
    let closeModalOrder = document.querySelector(".close-modal-order");

    openModalOrder.addEventListener("click", () => {
        modalBoxOrder.style.display = "block";
    });

    closeModalOrder.addEventListener("click", () => {
        modalBoxOrder.style.display = "none";
    });

//*** Modal-box price-list 2 buttons ***//
    let modalBoxPrice = document.querySelector(".modal-box-price");
    let openModalPrice = document.querySelectorAll(".open-modal-price");
    let closeModalPrice = document.querySelector(".close-modal-price");

    openModalPrice.forEach((e) =>{
        e.addEventListener("click", () => {
            modalBoxPrice.style.display = "block";
        });

        closeModalPrice.addEventListener("click", () => {
            modalBoxPrice.style.display = "none";
        });
    })

    
//*** Gallery ***/
    let images = Array.from(document.querySelectorAll(".image a img"));
    let captions = Array.from(document.querySelectorAll(".caption"));
    let modal = document.querySelector(".modal");
    let modalImage = document.querySelector(".modal-image");
    let modalCaption = document.querySelector(".modal-caption");
    let modalCount = document.querySelector(".modal-count");
    let close = document.querySelector(".close");
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
    let currentIndex = 0;

    function updateModalContent(index) {
        modalImage.src = images[index].parentNode.href; 
        modalCaption.textContent = captions[index].textContent;
        modalCount.textContent = (index + 1) + " / " + images.length;
    }

    images.forEach((image, index) => {
        image.addEventListener("click", (e) => {
            e.preventDefault();
            currentIndex = index;
            updateModalContent(currentIndex);
            modal.style.display = "block";
        });
    });

    close.addEventListener("click", () => {
        modal.style.display = "none";
    });

    prev.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateModalContent(currentIndex);
    });

    next.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateModalContent(currentIndex);
    });

});

