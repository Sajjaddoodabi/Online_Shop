let turn = 0
let x3 = document.getElementsByClassName('window3')[0].clientWidth
let _fig3 = document.querySelectorAll('#bus3>figure')
document.getElementById('bus3').style.width = x3 * (_fig3.length) + 'px'

for (let i = 0; i < _fig3.length; i++) {
    _fig3[i].style.width = x3 + 'px'
}

let y3 = document.querySelectorAll('.thumbnail>.thumb')
y3.forEach((item, index) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < y3.length; i++) {
            y3[i].style.transform = 'scaleX(1)'
            // y[i].style.backgroundColor = 'grey'
        }
        index--
        turn = index
        _right3()
        item.style.transform = 'scaleX(2)'
        // item.style.backgroundColor = 'black'
    })
})

function _right3() {
    turn++
    document.getElementById('bus3').style.transform = 'translateX(-' + (turn * x3) + 'px)'
    if (turn == (_fig3.length - 1)) {
        document.getElementById('right3').style.display = 'none'
    } else {
        document.getElementById('right3').style.display = 'block'
    }
    if (turn == 0) {
        document.getElementById('left3').style.display = 'none'
    } else if (turn > 0) {
        document.getElementById('left3').style.display = 'block'
    }
}

function _left3() {
    turn--
    document.getElementById('bus3').style.transform = 'translateX(-' + (turn * x3) + 'px)'
    // check3()
    if (turn == 0) {
        document.getElementById('left3').style.display = 'none'
    } else if (turn > 0) {
        document.getElementById('left3').style.display = 'block'
    }
    if (turn == (_fig3.length - 1)) {
        document.getElementById('right3').style.display = 'none'
    } else {
        document.getElementById('right3').style.display = 'block'
    }
}

let num = 1
document.getElementsByClassName('addToCart')[0].addEventListener('click' , ()=>{
    document.getElementsByClassName('addToCart')[0].parentElement.style.display = 'none'
    document.getElementsByClassName('count')[0].style.display = 'flex'
})

document.getElementsByClassName('counter')[0].children[0].addEventListener('click' , ()=>{
    if(num == 1){
        // num--
        document.getElementsByClassName('addToCart')[0].parentElement.style.display = 'flex'
        document.getElementsByClassName('count')[0].style.display = 'none'
        document.getElementsByClassName('counter')[0].children[0].innerHTML = '<i class="bi bi-trash"></i>'
    }
    else if(num == 2){
        num--
        document.getElementsByClassName('counter')[0].children[0].innerHTML = '<i class="bi bi-trash"></i>'
        document.getElementsByClassName('counter')[0].children[1].innerHTML = num
    }
    else{
        num--
        document.getElementsByClassName('counter')[0].children[1].innerHTML = num
    }
})

document.getElementsByClassName('counter')[0].children[2].addEventListener('click' , ()=>{
    num++
    document.getElementsByClassName('counter')[0].children[1].innerHTML = num
    document.getElementsByClassName('counter')[0].children[0].innerHTML = '-'
})