const caroucelPrints = document.querySelector(
  '.caroucel-prints .caroucel-content'
)
new Glider(caroucelPrints, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  scrollLock: true,
  arrows: {
    prev: '.caroucel-prints .btn-back',
    next: '.caroucel-prints .btn-next'
  }
})
