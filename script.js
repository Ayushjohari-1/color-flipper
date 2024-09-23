const button = document.querySelectorAll('.box')
const Body = document.querySelector('body')
const click = document.querySelector('.click')

click.addEventListener('click', ()=>{
    alert('Please Click on the circle Thank You 👇');
})


button.forEach(function(box){
    box.addEventListener('click', function(color){
        if(color.target.id === 'box-1'){
            Body.style.backgroundColor = 'rgb(61, 59, 205)';
        }
        if(color.target.id === 'box-2'){
            Body.style.backgroundColor = 'rgb(174, 210, 30)';
        }
        if(color.target.id === 'box-3'){
            Body.style.backgroundColor = 'rgb(30, 210, 207)';
        }
        if(color.target.id === 'box-4'){
            Body.style.backgroundColor = 'rgb(210, 30, 198)';
        }
        if(color.target.id === 'box-5'){
            Body.style.backgroundColor = 'rgb(215, 32, 32)';
        }
    })
})

// Emoji In VS Code => Windows + dot(.) //