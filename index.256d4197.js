(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),n=document.getElementsByClassName("mobile-menu-nav__link"),o=document.body;e.addEventListener("click",s);for(let e=0;e<n.length;e++)n[e].addEventListener("click",s);function s(){const n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),o.classList.toggle("no-scroll")}})();
//# sourceMappingURL=index.256d4197.js.map