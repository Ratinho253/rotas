'use strict'

const routes = {
    '/' : '/pages/index.html',
    '/vermelho' : '/pages/vermelho.html',
    '/azul' : '/pages/azul.html',
    '/verde' : '/pages/green.html',
    '/tomato' : '/pages/tomato.html',
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname
    
    const response = await fetch(routes[path])
    const html = await response.text()

    document.getElementById('root').innerHTML = html
}

window.route = route