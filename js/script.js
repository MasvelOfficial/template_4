"use strict"

document.addEventListener('DOMContentLoaded', () => {
	preloader()
	anchor()
	imgJuggling()
	contactFormDesign()
	mobileNav()
})

function preloader() {
	const loader = document.querySelector('.loader')
	loader ? loader.classList.add('loaded') : ''
}

function anchor() {
	const anchorLinks = document.querySelectorAll('.anchor')
	if (anchorLinks) {
		anchorLinks.forEach(link => {
			link.addEventListener('click', e => {
				e.preventDefault()
				const href = e.target.getAttribute('href')
				const offsetTop = document.querySelector(href).offsetTop
				scroll({
					top: offsetTop,
					behavior: 'smooth'
				})
			})
		})
	}
}

function imgJuggling() {
	const juggWrap = document.querySelector('#imgJuggling')
	if (juggWrap) {
		juggWrap.style.position = 'relative'
		juggWrap.style.overflow = 'hidden'

		const juggling = () => {
			let wrapWidth = juggWrap.offsetWidth
			let defaultBoxSize = wrapWidth / 6

			const items = juggWrap.querySelectorAll('.item')
			items.forEach((item, index) => {
				item.style.position = 'absolute'
				item.style.transition = 'all 1s ease .25s'
				if (index === 0) {
					item.style.top = '0'
					item.style.left = '0'
					item.style.width = defaultBoxSize * 2 + 'px'
					item.style.height = defaultBoxSize * 2 + 'px'
					if (window.innerWidth < 1200) {
						item.style.width = defaultBoxSize * 3 + 'px'
						item.style.height = defaultBoxSize * 3 + 'px'
					}
					if (window.innerWidth < 992) {
						item.style.width = defaultBoxSize * 4 + 'px'
						item.style.height = defaultBoxSize * 4 + 'px'
					}
				}
				if (index === 1) {
					item.style.top = defaultBoxSize + 'px'
					item.style.left = defaultBoxSize * 5 + 'px'
					item.style.width = defaultBoxSize + 'px'
					item.style.height = defaultBoxSize + 'px'
					if (window.innerWidth < 1200) {
						item.style.top = '0'
						item.style.left = defaultBoxSize * 3 + 'px'
						item.style.width = defaultBoxSize * 1.5 + 'px'
						item.style.height = defaultBoxSize * 1.5 + 'px'
					}
					if (window.innerWidth < 992) {
						item.style.top = '0'
						item.style.left = defaultBoxSize * 4 + 'px'
						item.style.width = defaultBoxSize * 2 + 'px'
						item.style.height = defaultBoxSize * 2 + 'px'
					}
				}
				if (index === 2) {
					item.style.top = defaultBoxSize * 2 + 'px'
					item.style.left = defaultBoxSize * 2 + 'px'
					item.style.width = defaultBoxSize + 'px'
					item.style.height = defaultBoxSize + 'px'
					if (window.innerWidth < 1200) {
						item.style.top = defaultBoxSize * 1.5 + 'px'
						item.style.left = defaultBoxSize * 3 + 'px'
						item.style.width = defaultBoxSize * 1.5 + 'px'
						item.style.height = defaultBoxSize * 1.5 + 'px'
					}
					if (window.innerWidth < 992) {
						item.style.top = defaultBoxSize * 2 + 'px'
						item.style.left = defaultBoxSize * 4 + 'px'
						item.style.width = defaultBoxSize * 2 + 'px'
						item.style.height = defaultBoxSize * 2 + 'px'
					}
				}
				if (index === 3) {
					item.style.top = defaultBoxSize * 3 + 'px'
					item.style.left = defaultBoxSize + 'px'
					item.style.width = defaultBoxSize + 'px'
					item.style.height = defaultBoxSize + 'px'
					if (window.innerWidth < 1200) {
						item.style.top = '0'
						item.style.left = defaultBoxSize * 4.5 + 'px'
						item.style.width = defaultBoxSize * 1.5 + 'px'
						item.style.height = defaultBoxSize * 1.5 + 'px'
					}
					if (window.innerWidth < 992) {
						item.style.top = defaultBoxSize * 4 + 'px'
						item.style.left = '0'
						item.style.width = defaultBoxSize * 2 + 'px'
						item.style.height = defaultBoxSize * 2 + 'px'
					}
				}
				if (index === 4) {
					item.style.top = defaultBoxSize * 3 + 'px'
					item.style.left = defaultBoxSize * 4 + 'px'
					item.style.width = defaultBoxSize * 2 + 'px'
					item.style.height = defaultBoxSize * 2 + 'px'
					if (window.innerWidth < 1200) {
						item.style.top = defaultBoxSize * 3 + 'px'
						item.style.left = '0'
						item.style.width = defaultBoxSize * 3 + 'px'
						item.style.height = defaultBoxSize * 3 + 'px'
					}
					if (window.innerWidth < 992) {
						item.style.top = defaultBoxSize * 4 + 'px'
						item.style.left = defaultBoxSize * 2 + 'px'
						item.style.width = defaultBoxSize * 4 + 'px'
						item.style.height = defaultBoxSize * 4 + 'px'
					}
				}
				if (index === 5) {
					item.style.top = defaultBoxSize * 4 + 'px'
					item.style.left = '0'
					item.style.width = defaultBoxSize * 3 + 'px'
					item.style.height = defaultBoxSize * 2 + 'px'
					if (window.innerWidth < 1200) {
						item.style.top = defaultBoxSize * 3 + 'px'
						item.style.left = defaultBoxSize * 3 + 'px'
						item.style.width = defaultBoxSize * 3 + 'px'
						item.style.height = defaultBoxSize * 3 + 'px'
					}
					if (window.innerWidth < 992) {
						item.style.top = defaultBoxSize * 8 + 'px'
						item.style.left = '0'
						item.style.width = defaultBoxSize * 6 + 'px'
						item.style.height = defaultBoxSize * 4 + 'px'
					}
				}
				if (index === 6) {
					item.style.top = defaultBoxSize * 6 + 'px'
					item.style.left = defaultBoxSize * 3 + 'px'
					item.style.width = defaultBoxSize + 'px'
					item.style.height = defaultBoxSize + 'px'
					if (window.innerWidth < 1200) {
						item.style.top = defaultBoxSize * 1.5 + 'px'
						item.style.left = defaultBoxSize * 4.5 + 'px'
						item.style.width = defaultBoxSize * 1.5 + 'px'
						item.style.height = defaultBoxSize * 1.5 + 'px'
					}
					if (window.innerWidth < 992) {
						item.style.top = defaultBoxSize * 6 + 'px'
						item.style.left = '0'
						item.style.width = defaultBoxSize * 2 + 'px'
						item.style.height = defaultBoxSize * 2 + 'px'
					}
				}

				if (window.innerWidth < 768) {
					item.style.position = 'relative'
					item.style.top = 'inherit'
					item.style.left = 'inherit'
					item.style.width = '100%'
					item.style.height = defaultBoxSize * 4 + 'px'
				}
			})

			juggWrap.style.height = defaultBoxSize * 7 + 'px'
			juggWrap.style.transition = 'all 1s ease .25s'
			window.innerWidth < 1200 ? juggWrap.style.height = defaultBoxSize * 6 + 'px' : ''
			window.innerWidth < 992 ? juggWrap.style.height = defaultBoxSize * 12 + 'px' : ''
			window.innerWidth < 768 ? juggWrap.style.height = '' : ''
		}

		juggling()
		window.addEventListener('resize', () => juggling())
	}
}

function contactFormDesign() {
	const formSection = document.querySelector('#contact')
	if (formSection) {
		const inputWrappers = formSection.querySelectorAll('.new-validate__line')
		inputWrappers.forEach(wrap => {
			if (!wrap.classList.contains('new-validate__btn')) {
				const input = wrap.querySelector('input, textarea')
				const label = wrap.querySelector('label')
				input.setAttribute('placeholder', label.textContent)
				label.style.display = 'none'
			} else {
				wrap.children[0].classList.add('button')
			}
		})
	}
}

function mobileNav() {
	const header = document.querySelector('.header')
	const hamburger = header.querySelector('.hamburger')
	const nav = header.querySelector('.nav')
	const navLinks = nav.querySelectorAll('a.anchor')

	hamburger.addEventListener('click', () => {
		nav.style.transition = 'transform .3s ease 0s'
		nav.classList.add('visible')
	})
	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			nav.classList.remove('visible')
			setTimeout(() => nav.style.transition = '',300)
		})
	})
}