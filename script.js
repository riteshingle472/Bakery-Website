document.querySelector('#hamburger').addEventListener('click',()=>{
    document.querySelectorAll('.nav-link').forEach((data)=>{
        data.style.display = 'block';
    })
    document.querySelector('.fa-solid.fa-xmark.hide').style.display = 'block'
    document.querySelector('.nav-list').style.right = '0px'
})

document.querySelectorAll('.nav-link').forEach((data)=>{
    data.addEventListener('click',()=>{
        document.querySelector('.nav-list').style.right = '-500px'
    })
})

document.querySelector('.fa-solid.fa-xmark.hide').addEventListener('click',()=>{
    document.querySelector('.nav-list').style.right = '-500px'
    document.querySelector('.fa-solid.fa-xmark.hide').style.display = 'none'
})