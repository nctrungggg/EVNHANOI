// back tot top

let backToTopBtn = document.querySelector(".back-to-top");

window.onscroll = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// top nav menu
let menuItems = document.getElementsByClassName('menu-item')

Array.from(menuItems).forEach((item, index) => {
  item.onclick = (e) => {
        let currMenu = document.querySelector('.menu-item.active')
        currMenu.classList.remove('active')
        item.classList.add('active')
    }
})

// food category

let foodMenuList = document.querySelector(".food-item-wrap");

let foodCategory = document.querySelector(".food-category");

let categories = foodCategory.querySelectorAll("button");

Array.from(categories).forEach((item) => {
  item.onclick = (e) => {
    let currCat = foodCategory.querySelector("button.active");
    currCat.classList.remove("active");
    e.target.classList.add("active");
    foodMenuList.classList =
      "food-item-wrap " + e.target.getAttribute("data-food-type");
      console.log(e.target.getAttribute("data-food-type"));
  };
});

// on scroll animation

let scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

let elToShow = document.querySelectorAll(".play-on-scroll");

isElInViewPort = (el) => {
  let rect = el.getBoundingClientRect();

  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
};

loop = () => {
  elToShow.forEach((item, index) => {
    if (isElInViewPort(item)) {
      item.classList.add("start");
    } else {
      item.classList.remove("start");
    }
  });

  scroll(loop);
};

loop();

// mobile nav

let bottomNavItems = document.querySelectorAll(".mb-nav-item");

let bottomMove = document.querySelector(".mb-move-item");

bottomNavItems.forEach((item, index) => {
  item.onclick = (e) => {
    let crrItem = document.querySelector(".mb-nav-item.active");
    crrItem.classList.remove("active");
    item.classList.add("active");
    bottomMove.style.left = index * 25 + "%";
  };
});


//login modal
'use strict';

const modal = document.querySelector('.modal');
const regisModal = document.querySelector('.regisModal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelector('.show-modal');
const regis = document.querySelector('.regis')

//login
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
btnsOpenModal.addEventListener('click', openModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  regisModal.classList.add('den');

  
};
overlay.addEventListener('click', closeModal)

//regis
const openRegisModal = function () {
  regisModal.classList.remove('den');
  modal.classList.add('hidden');
  overlayRegis.classList.add('den');
};
regis.addEventListener('click', openRegisModal);



