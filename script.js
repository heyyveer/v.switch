const switchBtn =document.querySelector('button')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')

switchBtn.addEventListener('click',()=>{
    body.classList.toggle('dark')
    if(body.classList.contains('dark')){
        body.style.backgroundColor = 'black'
        p.style.color = 'white'
        h1.style.color = 'white'
        switchBtn.textContent = 'Light Mode'
    }else{
        body.style.backgroundColor = 'white'
        p.style.color = 'black'
        h1.style.color = 'black'
        switchBtn.textContent = 'Dark Mode'
    }
})