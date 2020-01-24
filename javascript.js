// Navigation Scroll Shadow
window.addEventListener('scroll', function(e) {
  if (window.scrollY > 53) {
    document.querySelector('.navigation').style.boxShadow = '0px 0px 5px #aaa'
  } else {
    document.querySelector('.navigation').style.boxShadow = 'none'
  }
})

// Profile Image animation
let profileImage = document.querySelector('.profileImage')
console.log('pi: ', profileImage.style.display)
document.onload = function() {
  profileImage.style.display = 'none'
}

const informationBackgroundImages = [
  'assets/informationBackground1.jpg',
  'assets/informationBackground2.jpg',
  'assets/informationBackground3.jpg'
]

let informationBackground = document.querySelector('#secondScreen')

const cycleImages = (images, container, step) => {
  images.forEach((image, i) =>
    setTimeout(() => {
      container.style.backgroundImage = `url(${image})`
    }, step * (i + 1))
  )
  setTimeout(
    () => cycleImages(informationBackgroundImages, informationBackground, step),
    step * images.length
  )
}

window.onload = () => {
  // cycleImages(informationBackgroundImages, informationBackground, 3000)
}

// function selectProjectTab(selectedTab) {
//   selectedTab.style.backgroundColor = '#000'
// }

let projectTabs = document.querySelectorAll('.tabLink')
projectTabs.forEach((tab, i) => {
  // console.log('asdf: ', tab)
  // tab.addEventListener('click', (tab.style.backgroundColor = '#000'))
})

// projectTab.addEventListener('click', function(event) {
//   projectTab.style.backgroundColor = '#000'
// })

// Navigation DropDown
function toggleNavigationDropdown() {
  let navLinksDropDown = document.querySelector('.navLinksHamburger')
  if (navLinksDropDown.style.display === 'none') {
    navLinksDropDown.style.display = 'flex'
  } else {
    navLinksDropDown.style.display = 'none'
  }
}

let hamIcon = document.querySelector('.hamburgerIconContainer')
hamIcon.addEventListener('click', toggleNavigationDropdown)

document.addEventListener('click', function() {
  document.querySelector('.navLinksHamburger').style.display = 'none'
})

// Projects Section show/hide
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
