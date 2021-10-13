const switchBtn = document.querySelector('.js-switch')
const elementsWithAnimation = document.querySelectorAll('[data-anime]')

elementsWithAnimation.forEach( el => setTimeout( () => el.classList.add('animate', 1)))

switchBtn.addEventListener('click', () => document.body.classList.toggle('dark--mode'))
