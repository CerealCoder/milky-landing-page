!function(){function e(){u.classList.add("visible"),t()}function t(){s=document.querySelector(".visible");var e=s.getAttribute("data-title");d.innerHTML=e}function i(){r.disabled=!1,s=document.querySelector(".visible"),v=s;var e=v.nextElementSibling;v.classList.remove("visible"),e.classList.add("visible","fade-in-left"),e==a&&(c.disabled=!0),t()}function l(){c.disabled=!1,s=document.querySelector(".visible"),v=s;var e=v.previousElementSibling;v.classList.remove("visible"),e.classList.add("visible","fade-in-left"),e==u&&(r.disabled=!0),t()}function n(){e(),c.addEventListener("click",i,!1),r.addEventListener("click",l,!1)}var s,d=(document.body,document.querySelector(".loading-wrapper span"),document.querySelector(".setup__title")),c=document.querySelector(".setup__next"),r=document.querySelector(".setup__previous"),o=document.querySelector(".setup__code"),u=o.firstElementChild,a=o.lastElementChild,v=s;n()}();