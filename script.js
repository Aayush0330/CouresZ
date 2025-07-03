const navbar = document.querySelector('#navbar')
const toggle = document.querySelector('#toggle')

toggle.addEventListener('click' , () => {
    navbar.classList.toggle('show')

    if (navbar.classList.contains('show')) {
        toggle.innerHTML = '✖'
    } else {
        toggle.innerHTML = '☰'
        
    }
})