import logo from './logo.jpg'

const component = () => {
  console.log(logo)
  const element = document.createElement('div')
  const webpackLogo = new Image()
  webpackLogo.src = logo
  webpackLogo.width = 200
  element.appendChild(webpackLogo)
  return element
}

document.getElementById('root')?.appendChild(component())
