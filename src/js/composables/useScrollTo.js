export const useScrollTo = (selector) => {
  document.querySelector(selector).scrollIntoView({ behaviour: 'smooth' })
}
