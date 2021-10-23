const list = document.querySelector('.furniture__nav'),
      items = document.querySelectorAll('.filter__item');

function filter() {
  list.addEventListener('click', (event) => {
    const dataId = event.target.dataset.id;
      console.log(dataId);

      switch (dataId){
          case 'all':
              getItems('filter__item');
              break
          case 'chair':
              getItems(dataId)
              break
          case 'table':
              getItems(dataId)
              break
          case 'bed':
              getItems(dataId)
              break
          case 'sofa':
              getItems(dataId)
              break
      }
  })
}

filter();

function getItems (className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}

// header

let headerSubnav = document.querySelector('.header__subnav');
let burger = document.querySelector('.burger');
let burgerActive = document.querySelector('.burger__active');
let headerNav = document.querySelector('.header-close');


burger.addEventListener('click', () => {
    headerSubnav.classList.add('header__subnav-active');
    burger.classList.add('burger__close');
});
burgerActive.addEventListener('click', () => {
    headerSubnav.classList.remove('header__subnav-active');
    burger.classList.remove('burger__close');
});

// smooth scroll

const smoothLinks = document.querySelectorAll('a[href^="#"]');

for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        headerSubnav.classList.remove('header__subnav-active');
        burger.classList.remove('burger__close');
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

const header = document.querySelector('.header');

(function() {

    window.onscroll = () => {
        if(window.pageYOffset > 590) {
            header.classList.add('header__fixed');
        } else {
            header.classList.remove('header__fixed');
        }
    };
}());