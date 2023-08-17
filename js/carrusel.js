var swiper = new Swiper(".carrusel", {
    slidesPerView: 6,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      520:{
        slidesPerView: 2,
      },
      768:{
        slidesPerView: 2,
      },
      820:{
        slidesPerView: 3,
      },
      1000:{
        slidesPerView: 5,
      },
      1920:{
        slidesPerView: 6,
      },
    }
  });