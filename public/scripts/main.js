"use strict";var headerToggle=document.querySelector(".header__toggle"),headerMenu=document.querySelector(".header-menu"),expandClass="is-expand";headerToggle.addEventListener("click",function(){headerMenu.classList.add(expandClass)}),window.addEventListener("click",function(e){console.log(e.target),e.target.matches(".shadow")&&headerMenu.classList.remove(expandClass)});