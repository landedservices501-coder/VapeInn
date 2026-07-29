/*====================================================
    VapeX Global JavaScript
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        Sticky Header
    =========================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 80){

            header.classList.add("sticky");

        }else{

            header.classList.remove("sticky");

        }

    });


    /*=========================================
        Mobile Navigation
    =========================================*/

    const menuBtn = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav");

    if(menuBtn && navMenu){

        menuBtn.addEventListener("click", () =>{

            navMenu.classList.toggle("show-menu");

            menuBtn.classList.toggle("active");

        });

    }


    /*=========================================
        Active Navigation Link
    =========================================*/

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link =>{

        const href = link.getAttribute("href");

        if(href === currentPage){

            link.classList.add("active");

        }

    });


    /*=========================================
        Newsletter Form Validation
    =========================================*/

    const newsletter = document.querySelector(".newsletter form");

    if(newsletter){

        newsletter.addEventListener("submit", function(e){

            e.preventDefault();

            const email = this.querySelector("input[type='email']");

            if(email.value.trim() === ""){

                alert("Please enter your email address.");

                email.focus();

                return;

            }

            alert("Thank you for subscribing!");

            this.reset();

        });

    }


    /*=========================================
        Smooth Scroll
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor =>{

        anchor.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });


    /*=========================================
        Scroll To Top Button
    =========================================*/

    const scrollBtn = document.createElement("button");

    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

    scrollBtn.className = "scroll-top";

    document.body.appendChild(scrollBtn);

    window.addEventListener("scroll", () =>{

        if(window.scrollY > 500){

            scrollBtn.classList.add("show");

        }else{

            scrollBtn.classList.remove("show");

        }

    });

    scrollBtn.addEventListener("click", () =>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });


    /*=========================================
        Reveal On Scroll
    =========================================*/

    const revealElements = document.querySelectorAll(

        ".stat-card, .summary-card, .dashboard-card, .product-card, .service-card, .benefit-card, .testimonial-card"

    );

    const reveal = () =>{

        revealElements.forEach(el=>{

            const top = el.getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            if(top < windowHeight - 100){

                el.classList.add("reveal");

            }

        });

    };

    reveal();

    window.addEventListener("scroll", reveal);


    /*=========================================
        Loading Screen (Optional)
    =========================================*/

    const loader = document.querySelector(".loader");

    if(loader){

        window.addEventListener("load", ()=>{

            loader.classList.add("hide");

        });

    }

});