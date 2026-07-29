/*=========================================
    VapeX Product JavaScript
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
        Product Image Gallery
    =====================================*/

    const mainImage = document.querySelector("#mainProductImage");
    const thumbnails = document.querySelectorAll(".thumbnail");

    if (mainImage && thumbnails.length) {

        thumbnails.forEach(image => {

            image.addEventListener("click", () => {

                mainImage.src = image.src;

                thumbnails.forEach(img =>
                    img.classList.remove("active"));

                image.classList.add("active");

            });

        });

    }

    /*=====================================
        Image Zoom
    =====================================*/

    if (mainImage) {

        mainImage.addEventListener("mousemove", () => {

            mainImage.style.transform = "scale(1.2)";

        });

        mainImage.addEventListener("mouseleave", () => {

            mainImage.style.transform = "scale(1)";

        });

    }

    /*=====================================
        Quantity Selector
    =====================================*/

    const qtyInput = document.querySelector("#quantity");
    const plus = document.querySelector(".qty-plus");
    const minus = document.querySelector(".qty-minus");

    if (qtyInput && plus && minus) {

        plus.addEventListener("click", () => {

            qtyInput.value = Number(qtyInput.value) + 1;

        });

        minus.addEventListener("click", () => {

            if (Number(qtyInput.value) > 1) {

                qtyInput.value = Number(qtyInput.value) - 1;

            }

        });

    }

    /*=====================================
        Add To Cart
    =====================================*/

    const addCart = document.querySelector("#addToCart");

    if (addCart) {

        addCart.addEventListener("click", () => {

            alert("Product added to cart.");

        });

    }

    /*=====================================
        Wishlist
    =====================================*/

    const wishlist = document.querySelector("#wishlistBtn");

    if (wishlist) {

        wishlist.addEventListener("click", () => {

            wishlist.classList.toggle("active");

        });

    }

    /*=====================================
        Review Form
    =====================================*/

    const reviewForm = document.querySelector("#reviewForm");

    if (reviewForm) {

        reviewForm.addEventListener("submit", function(e){

            e.preventDefault();

            alert("Thank you for your review!");

            this.reset();

        });

    }

    /*=====================================
        Share Product
    =====================================*/

    const shareBtn = document.querySelector("#shareProduct");

    if (shareBtn) {

        shareBtn.addEventListener("click", async () => {

            if (navigator.share) {

                await navigator.share({

                    title: document.title,

                    text: "Check out this VapeX product!",

                    url: window.location.href

                });

            } else {

                navigator.clipboard.writeText(window.location.href);

                alert("Product link copied to clipboard.");

            }

        });

    }

    /*=====================================
        Recently Viewed Products
    =====================================*/

    const productTitle = document.querySelector(".product-title");

    if (productTitle) {

        let viewed = JSON.parse(

            localStorage.getItem("recentProducts")

        ) || [];

        const current = productTitle.textContent;

        viewed = viewed.filter(item => item !== current);

        viewed.unshift(current);

        viewed = viewed.slice(0, 5);

        localStorage.setItem(

            "recentProducts",

            JSON.stringify(viewed)

        );

        console.log("Recently Viewed:", viewed);

    }

});