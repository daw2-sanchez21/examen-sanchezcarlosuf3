// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { header } from './componentes/header'
import { footer } from './componentes/footer'
import { home } from './vistas/home'
import { exform } from './componentes/exform'
import { cervezas } from './bd/bd'

document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = home.template
document.querySelector('main').innerHTML = exform.template
exform.script();
document.querySelector('footer').innerHTML = footer.template

