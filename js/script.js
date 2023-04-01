const acordeon = document.querySelectorAll('.acordeon')

acordeon.forEach(item => {
  const question = item.querySelector('.question')
  const answer = item.querySelector('.answer')

  const answerHeight = answer.scrollHeight
  answer.style.maxHeight = 0

  question.addEventListener('click', () => {
    // answer.classList.toggle('open')
    if (item.classList.contains('open')) {
      answer.style.maxHeight = 0
      item.classList.remove('open')
    } else {
      answer.style.maxHeight = answerHeight + 'px'
      item.classList.add('open')
    }
  })
})

const caroucelPrints = document.querySelector(
  '.caroucel-prints .caroucel-content'
)
new Glider(caroucelPrints, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  scrollLock: true,
  dots: '.caroucel-prints .dots',
  arrows: {
    prev: '.caroucel-prints .botao-back',
    next: '.caroucel-prints .botao-next'
  }
})
