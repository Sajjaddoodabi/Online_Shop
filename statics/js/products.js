let verticalMove = 0
function _moveTop(self) {
    document.getElementsByClassName('moveToBottom')[0].children[0].style.color = 'black'
    if (verticalMove == ((document.querySelectorAll('.pictureContainer>figure').length * 100) - 600)) {
        verticalMove += 300
        document.getElementsByClassName('pictureContainer')[0].style.transform = 'translateY(-' + verticalMove + 'px)'
        self.style.color = 'gray'
    }
    else if (verticalMove < ((document.querySelectorAll('.pictureContainer>figure').length * 100) - 600)) {
        verticalMove += 300
        document.getElementsByClassName('pictureContainer')[0].style.transform = 'translateY(-' + verticalMove + 'px)'
        self.style.color = 'black'
    }
}

function _moveBottom(self) {
    document.getElementsByClassName('moveToTop')[0].children[0].style.color = 'black'
    if(verticalMove == 300){
        verticalMove -= 300
        document.getElementsByClassName('pictureContainer')[0].style.transform = 'translateY(-' + verticalMove + 'px)'
        self.style.color = 'gray'
    }
    else if (verticalMove > 300) {
        verticalMove -= 300
        document.getElementsByClassName('pictureContainer')[0].style.transform = 'translateY(-' + verticalMove + 'px)'
        self.style.color = 'black'
    }
}

// document.getElementsByClassName('moveToTop')[0].addEventListener('click' , ()=>{
//     verticalMove += 300
//     // alert(verticalMove)
//     document.getElementsByClassName('pictureContainer')[0].style.transform = 'translateY(-' + verticalMove + 'px)'
// })


// //////////////////////////////////////////////////////////////////////////////////////////////////////////


let num = 1
// document.getElementsByClassName('addToCart')[0].addEventListener('click', () => {
//     document.getElementsByClassName('addToCart')[0].parentElement.style.display = 'none'
//     document.getElementsByClassName('count')[0].style.display = 'block'
// })

document.getElementsByClassName('counter')[0].children[0].addEventListener('click', () => {
    if (num == 1) {
        // num--
        /*document.getElementsByClassName('addToCart')[0].parentElement.style.display = 'flex'
        document.getElementsByClassName('count')[0].style.display = 'none'
        document.getElementsByClassName('counter')[0].children[0].innerHTML = '<i class="bi bi-trash"></i>'*/
    } else if (num == 2) {
        num--
        /*document.getElementsByClassName('counter')[0].children[0].innerHTML = '<i class="bi bi-trash"></i>'*/
        document.getElementsByClassName('counter')[0].children[1].innerHTML = num
    } else if (num) {
        num--
        document.getElementsByClassName('counter')[0].children[1].innerHTML = num
    }
})

document.getElementsByClassName('counter')[0].children[2].addEventListener('click', () => {
    if (num < 10) {
        num++
        document.getElementsByClassName('counter')[0].children[1].innerHTML = num
        document.getElementsByClassName('counter')[0].children[0].innerHTML = '-'
    }

})

let _show = document.querySelectorAll('.details>.show')
let _txt = document.querySelectorAll('.txt')
_show.forEach((item, index) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < _show.length; i++) {
            _txt[i].style.display = 'none'
            _show[i].style.backgroundColor = 'rgb(129, 189, 117)'
        }
        item.style.backgroundColor = 'grey'
        _txt[index].style.display = 'block'
    })
})


let x2 = document.getElementsByClassName('window2')[0].clientWidth
let _fig2 = document.querySelectorAll('#bus2>figure')
let _bus2 = document.getElementById('bus2')
let temp = 0
_bus2.style.width = (_fig2.length * 220) + 'px'

function _moveR() {
    temp += 200
    _bus2.style.left = -temp + 'px'
    checkMove()
}

function _moveL() {
    temp -= 200
    _bus2.style.left = -temp + 'px'
    checkMove()
}

function checkMove() {
    if (temp >= 200) {
        document.getElementById('left2').style.display = 'block'
    } else {
        document.getElementById('left2').style.display = 'none'
    }
    if (temp >= (_bus2.clientWidth - 40 - x2)) {
        // alert(1)
        document.getElementById('right2').style.display = 'none'
    } else {
        document.getElementById('right2').style.display = 'block'
    }
}

let _h = new Date().getHours()
let _m = new Date().getMinutes()
let _y = new Date().getFullYear()
let _month = new Date().getMonth()
let _d = new Date().getDate()
document.getElementsByClassName('time')[0].innerHTML = "<i class=\"bi bi-watch\"></i> " + _h + ":" + _m
document.getElementsByClassName('day')[0].innerHTML = "<i class=\"bi bi-calendar2\"></i> " + _y + "/" + _d + "/" + _month

// /////////////////////////////////////////////////////////////////////


// let _row1 = document.querySelectorAll('.row1')
// for(let i = 0 ; i < _row1.length ; i ++){
//     _row1[i].parentElement.setAttribute('data-status' , 'off')
// }
// let _row2 = document.querySelectorAll('.row2')
// _row1.forEach((item, index) => {
//     item.addEventListener('click', () => {
//         alert(1)
//         if (_row1[index].parentElement.getAttribute('data-status') == 'off') {
//             for (let i = 0; i < _row2.length; i++) {
//                 _row2[i].style.display = 'none'
//                 _row1[i].parentElement.setAttribute('data-status', 'off')
//                 _row1[i].children[1].style.transform = 'rotate(0deg)'
//             }
//             _row2[index].style.display = 'block'
//             _row1[index].parentElement.setAttribute('data-status', 'on')
//             _row1[index].children[1].style.transform = 'rotate(90deg)'
//         } else {
//             for (let i = 0; i < _row2.length; i++) {
//                 _row2[i].style.display = 'none'
//                 _row1[i].parentElement.setAttribute('data-status', 'off')
//                 _row1[i].children[1].style.transform = 'rotate(0deg)'
//             }
//             _row1[index].parentElement.setAttribute('data-status', 'off')
//             _row1[index].children[1].style.transform = 'rotate(0deg)'
//         }
//     })
// })

let _color = document.querySelectorAll('.chooseColor>.color')
_color.forEach((item, index) => {
    alert(1)
    item.addEventListener('click', () => {
        for (let i = 0; i < _color.length; i++) {
            _color[i].style.outline = '0.6px solid #2d2d2d'
            _color[i].children[0].style.display = 'none'
        }
        item.style.outline = '2px solid rgb(129, 189, 117)'
        item.children[0].style.display = 'block'
    })
})

let _showList = document.querySelectorAll('.showList')
let _productList = document.querySelectorAll('.productList')
_showList.forEach((item, index) => {

    item.addEventListener('click', () => {
        for (let i = 0; i < _showList.length; i++) {
            _showList[i].style.backgroundColor = 'white'
            _productList[i].style.display = 'none'
            // _color[i].children[0].style.display = 'none'
        }
        item.style.backgroundColor = 'rgb(129, 189, 117)'
        _productList[index].style.display = 'flex'
        // item.children[0].style.display = 'block'
    })
})