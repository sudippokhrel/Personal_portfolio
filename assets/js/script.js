var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      0: {
          slidesPerView: 1,
      },
      720: {
          slidesPerView: 1,
      },
      1190: {
          slidesPerView: 2,
      },
  },
  });
