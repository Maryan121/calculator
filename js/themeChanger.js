let body = document.querySelector('body')
const container = document.querySelector('.container')
const nums = document.querySelectorAll('.nums')
const lightIcon = document.querySelector('.light')
const darkIcon = document.querySelector('.dark')



//changing the theme into light theme when the lightIcon is clicked
lightIcon.addEventListener('click',()=>{
    body.style.backgroundColor = '#A599BE'
    container.style.backgroundColor = '#D9D3E3'
    for(i=0; i<nums.length ; i++){
        nums[i].style.color = '#533D77'
    }
    lightIcon.style.display = 'none'
    darkIcon.style.display = 'flex'
    document.getElementById('display').style.color = '#533D77'
    document.querySelector('.icon').style.boxShadow = '0px 0px 5px #a28bc9'
})


//changing the theme into dark theme when the darkIcon is clicked
darkIcon.addEventListener('click',()=>{
    body.style.backgroundColor = '#6E519E'
    container.style.backgroundColor = '#221536';
    for(i=0; i<nums.length ; i++){
        nums[i].style.color = '#DCD7E6'
    }
    lightIcon.style.display = 'flex'
    darkIcon.style.display = 'none'
    document.querySelector('#display').style.color = '#DCD7E6'
    document.querySelector('.icon').style.boxshadow = '0px 0px 8px #DCD7E6'
})
