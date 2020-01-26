// NAVIGATION SCROLL SHADOW - START
window.addEventListener('scroll', function(e) {
  if (window.scrollY > 53) {
    document.querySelector('.navigation').style.boxShadow = '0px 0px 5px #aaa'
  } else {
    document.querySelector('.navigation').style.boxShadow = 'none'
  }
})
// NAVIGATION SCROLL SHADOW - END

// PROFILE IMAGE ANIMATION - START
let profileImageOverlay = document.querySelector('.overlay')
window.addEventListener('load', event => {
  profileImageOverlay.style.backgroundColor = 'transparent'
  profileImageOverlay.style.transition = 'background-color 5s ease'
})
// PROFILE IMAGE ANIMATION - END

// NAVIGATION DROPDOWN - START
function toggleNavigationDropdown() {
  let navLinksDropDown = document.querySelector('.navLinksHamburger')
  navLinksDropDown.classList.toggle('open')
}

let hamIcon = document.querySelector('.hamburgerIconContainer')
hamIcon.addEventListener('click', toggleNavigationDropdown)

let screen1 = document.querySelector('#firstScreen')
screen1.addEventListener('click', function() {
  document.querySelector('.navLinksHamburger').style.display = 'none'
})
let screen2 = document.querySelector('#firstScreen')
screen2.addEventListener('click', function() {
  document.querySelector('.navLinksHamburger').style.display = 'none'
})
let screen3 = document.querySelector('#firstScreen')
screen3.addEventListener('click', function() {
  document.querySelector('.navLinksHamburger').style.display = 'none'
})
// NAVIGATION DROPDOWN - END

// PROJECTS SECTION SHOW/HIDE - START
let homeworkTab = document.querySelector('#tabLink1')
let individualProjectTab = document.querySelector('#tabLink2')
let groupProjectTab = document.querySelector('#tabLink3')
let homeworkSection = document.querySelector('#homeworkSection')
let individualProjectsSection = document.querySelector(
  '#individualProjectsSection'
)
let groupProjectsSection = document.querySelector('#groupProjectsSection')
let tabUnderline1 = document.querySelector('#tabUnderline1')
let tabUnderline2 = document.querySelector('#tabUnderline2')
let tabUnderline3 = document.querySelector('#tabUnderline3')

homeworkTab.addEventListener('click', () => {
  tabUnderline1.style.visibility = 'visible'
  tabUnderline2.style.visibility = 'hidden'
  tabUnderline3.style.visibility = 'hidden'
  homeworkSection.style.display = 'flex'
  individualProjectsSection.style.display = 'none'
  groupProjectsSection.style.display = 'none'
})
individualProjectTab.addEventListener('click', () => {
  tabUnderline1.style.visibility = 'hidden'
  tabUnderline2.style.visibility = 'visible'
  tabUnderline3.style.visibility = 'hidden'
  homeworkSection.style.display = 'none'
  individualProjectsSection.style.display = 'flex'
  groupProjectsSection.style.display = 'none'
})
groupProjectTab.addEventListener('click', () => {
  tabUnderline1.style.visibility = 'hidden'
  tabUnderline2.style.visibility = 'hidden'
  tabUnderline3.style.visibility = 'visible'
  homeworkSection.style.display = 'none'
  individualProjectsSection.style.display = 'none'
  groupProjectsSection.style.display = 'flex'
})
// PROJECTS SECTION SHOW/HIDE - END

// SECOND SCREEN IMAGE ROTATION - START
// const informationBackgroundImages = [
//   'assets/informationBackground1.jpg',
//   'assets/informationBackground2.jpg',
//   'assets/informationBackground3.jpg'
// ]

// let informationBackground = document.querySelector('#secondScreen')

// const cycleImages = (images, container, step) => {
//   images.forEach((image, i) =>
//     setTimeout(() => {
//       container.style.backgroundImage = `url(${image})`
//     }, step * (i + 1))
//   )
//   setTimeout(
//     () => cycleImages(informationBackgroundImages, informationBackground, step),
//     step * images.length
//   )
// }

// window.onload = () => {
// cycleImages(informationBackgroundImages, informationBackground, 3000)
// }

// function selectProjectTab(selectedTab) {
//   selectedTab.style.backgroundColor = '#000'
// }
// SECOND SCREEN IMAGE ROTATION - END
