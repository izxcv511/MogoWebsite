"use strict";var headerToggle=document.querySelector(".header__toggle"),headerMenu=document.querySelector(".header-menu"),headerShadow=document.querySelector(".header-menu"),expandClass="is-expand";headerToggle.addEventListener("click",function(){headerMenu.classList.add(expandClass)}),document.querySelector("body").addEventListener("click",function(e){console.log(e.target),e.target.matches(".header__shadow")&&headerMenu.classList.remove(expandClass)});