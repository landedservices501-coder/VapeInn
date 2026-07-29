/*=========================================
    VapeX Shop JavaScript
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
        Product Search
    =====================================*/

    const searchInput = document.querySelector("#searchProduct");
    const products = document.querySelectorAll(".product-card");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const keyword = this.value.toLowerCase();

            products.forEach(product => {

                const title = product.querySelector("h3").textContent.toLowerCase();

                if (title.includes(keyword)) {

                    product.style.display = "";

                } else {

                    product.style.display = "none";

                }

            });

            updateProductCount();

        });

    }

    /*=====================================
        Category Filter
    =====================================*/

    const categoryFilter = document.querySelector("#categoryFilter");

    if (categoryFilter) {

        categoryFilter.addEventListener("change", function () {

            const value = this.value;

            products.forEach(product => {

                if (value === "all" || product.dataset.category === value) {

                    product.style.display = "";

                } else {

                    product.style.display = "none";

                }

            });

            updateProductCount();

        });

    }

    /*=====================================
        Brand Filter
    =====================================*/

    const brandFilter = document.querySelector("#brandFilter");

    if (brandFilter) {

        brandFilter.addEventListener("change", function () {

            const value = this.value;

            products.forEach(product => {

                if (value === "all" || product.dataset.brand === value) {

                    product.style.display = "";

                } else {

                    product.style.display = "none";

                }

            });

            updateProductCount();

        });

    }

    /*=====================================
        Price Filter
    =====================================*/

    const priceFilter = document.querySelector("#priceFilter");

    if (priceFilter) {

        priceFilter.addEventListener("change", function () {

            const maxPrice = Number(this.value);

            products.forEach(product => {

                const price = Number(product.dataset.price);

                if (price <= maxPrice) {

                    product.style.display = "";

                } else {

                    product.style.display = "none";

                }

            });

            updateProductCount();

        });

    }

    /*=====================================
        Sort Products
    =====================================*/

    const sortSelect = document.querySelector("#sortProducts");
    const productGrid = document.querySelector(".products-grid");

    if (sortSelect && productGrid) {

        sortSelect.addEventListener("change", function () {

            const items = Array.from(productGrid.querySelectorAll(".product-card"));

            switch (this.value) {

                case "low":

                    items.sort((a, b) =>
                        Number(a.dataset.price) - Number(b.dataset.price));

                    break;

                case "high":

                    items.sort((a, b) =>
                        Number(b.dataset.price) - Number(a.dataset.price));

                    break;

                case "name":

                    items.sort((a, b) =>
                        a.querySelector("h3").textContent.localeCompare(
                            b.querySelector("h3").textContent
                        ));

                    break;

            }

            items.forEach(item => productGrid.appendChild(item));

        });

    }

    /*=====================================
        Add To Cart
    =====================================*/

    document.querySelectorAll(".add-cart").forEach(button => {

        button.addEventListener("click", () => {

            alert("Product added to cart.");

        });

    });

    /*=====================================
        Add To Wishlist
    =====================================*/

    document.querySelectorAll(".add-wishlist").forEach(button => {

        button.addEventListener("click", () => {

            button.classList.toggle("active");

        });

    });

    /*=====================================
        Product Counter
    =====================================*/

    function updateProductCount() {

        const visible = document.querySelectorAll(

            ".product-card:not([style*='display: none'])"

        ).length;

        const counter = document.querySelector("#productCount");

        if (counter) {

            counter.textContent = visible + " Products";

        }

    }

    updateProductCount();

});