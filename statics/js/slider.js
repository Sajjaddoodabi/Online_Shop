let mainSliderWidth = document.getElementsByClassName('window')[0].clientWidth
let _figure = document.querySelectorAll('#bus>figure')
document.getElementById('bus').style.width = mainSliderWidth * (_figure.length) + 'px'
let numberOfSlide = 0
for (let i = 0; i < _figure.length; i++) {
    _figure[i].style.width = mainSliderWidth + 'px'
}

let _mainSliderThumbnail = document.querySelectorAll('.thumbnail>.thumb')

document.getElementById('right').addEventListener('click', () => {
    numberOfSlide++
    document.getElementById('bus').style.transform = 'translateX(-' + (numberOfSlide * mainSliderWidth) + 'px)'
    checkNumberOfSlide()
})

document.getElementById('left').addEventListener('click', () => {
    numberOfSlide--
    document.getElementById('bus').style.transform = 'translateX(-' + (numberOfSlide * mainSliderWidth) + 'px)'
    checkNumberOfSlide()
})

function checkNumberOfSlide() {
    if (numberOfSlide == 0) {
        document.getElementById('left').style.display = 'none'
    } else {
        document.getElementById('left').style.display = 'block'
    }
    if (numberOfSlide == _figure.length - 1) {
        document.getElementById('right').style.display = 'none'
    } else {
        document.getElementById('right').style.display = 'block'
    }
    for (let i = 0; i < _figure.length; i++) {
        _mainSliderThumbnail[i].style.backgroundColor = 'grey'
    }
    _mainSliderThumbnail[numberOfSlide].style.backgroundColor = 'rgb(129, 189, 117)'
}

_mainSliderThumbnail.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (index > numberOfSlide) {
            numberOfSlide = index
            document.getElementById('bus').style.transform = 'translateX(-' + (numberOfSlide * mainSliderWidth) + 'px)'
            checkNumberOfSlide()
        } else {
            numberOfSlide = index
            document.getElementById('bus').style.transform = 'translateX(-' + (numberOfSlide * mainSliderWidth) + 'px)'
            checkNumberOfSlide()
        }
    })

})


// ///////////////////////////////////////////////////////////////


let _win = document.querySelectorAll('.window2')
_win.forEach((item, index) => {
    item.setAttribute('horizontalMove', '0')
})

let moveRight = document.querySelectorAll('.right2')
moveRight.forEach((item, index) => {
    // let horizontalMove = parseInt(item.parentElement.getAttribute('horizontalMove'))
    let _figureContainer = document.getElementsByClassName('bus2')[index]
    let _imageContainer = _figureContainer.children[1]
    _figureContainer.style.width = (_imageContainer * 220 + 320) + 'px'
    if (_figureContainer.clientWidth >= document.getElementsByTagName('body')[0].clientWidth) {
        item.addEventListener('click', (event) => {
            document.getElementsByClassName('left2')[index].style.display = 'block'
            if (parseInt(item.parentElement.getAttribute('horizontalMove')) <= (_figureContainer.clientWidth - document.getElementsByTagName('body')[0].clientWidth)) {
                item.parentElement.setAttribute('horizontalMove', (parseInt(item.parentElement.getAttribute('horizontalMove')) + 200).toString())
                _figureContainer.style.left = -parseInt(item.parentElement.getAttribute('horizontalMove')) + 'px'
            }
            if (parseInt(item.parentElement.getAttribute('horizontalMove')) >= (_figureContainer.clientWidth - document.getElementsByTagName('body')[0].clientWidth)) {
                document.getElementsByClassName('right2')[index].style.display = 'none'
            }
        })
    } else {
        item.style.display = 'none'
    }
})


let moveLeft = document.querySelectorAll('.left2')
moveLeft.forEach((item, index) => {
    let _figureContainer = document.getElementsByClassName('bus2')[index]
    let _imageContainer = _figureContainer.children[1]
    _figureContainer.style.width = (_imageContainer * 220 + 320) + 'px'
    item.addEventListener('click', (event) => {
        item.parentElement.setAttribute('horizontalMove', (parseInt(item.parentElement.getAttribute('horizontalMove')) - 200).toString())
        _figureContainer.style.left = -parseInt(item.parentElement.getAttribute('horizontalMove')) + 'px'
        if (parseInt(item.parentElement.getAttribute('horizontalMove')) <= 0) {
            document.getElementsByClassName('left2')[index].style.display = 'none'
        }
    })
})

function showMobileMenu(){
    // alert(1)
    if(document.getElementsByClassName('mobileMenu')[0].getAttribute('data-status') == 'off'){
        document.getElementsByClassName('mobileMenuDetails')[0].style.left = '0'
        document.getElementsByClassName('mobileMenu')[0].setAttribute('data-status' , 'on')
    }
    else {
        document.getElementsByClassName('mobileMenuDetails')[0].style.left = '-100%'
        document.getElementsByClassName('mobileMenu')[0].setAttribute('data-status' , 'off')
    }
}

let _mobileMenuCategory = document.querySelectorAll('.mobileMenuCategory')
let _detail = document.querySelectorAll('.detail')
for(let i = 0 ; i < _detail.length ; i ++){
    _detail[i].setAttribute('data-status' , 'off')
}
// for (let i = 0 ; i < _mobileMenuCategory.length ; i ++){
//     _mobileMenuCategory[i].style.transition = i+'s'
// }

_mobileMenuCategory.forEach((item , index)=>{
    item.addEventListener('click' , ()=>{
        if (_detail[index].getAttribute('data-status') == 'off') {
            for (let i = 0; i < _detail.length; i++) {
                _detail[i].style.display = 'none'
                _detail[i].setAttribute('data-status', 'off')
                _mobileMenuCategory[i].children[0].style.transform = 'rotate(0deg)'
            }
            _detail[index].style.display = 'block'
            _detail[index].setAttribute('data-status', 'on')
            item.children[0].style.transform = 'rotate(90deg)'
        } else {
            for (let i = 0; i < _detail.length; i++) {
                _detail[i].style.display = 'none'
                _detail[i].setAttribute('data-status', 'off')
                _mobileMenuCategory[i].children[0].style.transform = 'rotate(0deg)'
            }
            _detail[index].setAttribute('data-status', 'off')
            _mobileMenuCategory[i].children[0].style.transform = 'rotate(0deg)'
        }
    })
})

function showMobileMenu(){
    // alert(1)
    if(document.getElementsByClassName('mobileMenu')[0].getAttribute('data-status') == 'off'){
        document.getElementsByClassName('mobileMenuDetails')[0].style.left = '0'
        document.getElementsByClassName('mobileMenu')[0].setAttribute('data-status' , 'on')
    }
    else {
        document.getElementsByClassName('mobileMenuDetails')[0].style.left = '-100%'
        document.getElementsByClassName('mobileMenu')[0].setAttribute('data-status' , 'off')
    }
}

let _mobileMenuCategory = document.querySelectorAll('.mobileMenuCategory')
let _detail = document.querySelectorAll('.detail')
for(let i = 0 ; i < _detail.length ; i ++){
    _detail[i].setAttribute('data-status' , 'off')
}
// for (let i = 0 ; i < _mobileMenuCategory.length ; i ++){
//     _mobileMenuCategory[i].style.transition = i+'s'
// }

_mobileMenuCategory.forEach((item , index)=>{
    item.addEventListener('click' , ()=>{
        if (_detail[index].getAttribute('data-status') == 'off') {
            for (let i = 0; i < _detail.length; i++) {
                _detail[i].style.display = 'none'
                _detail[i].setAttribute('data-status', 'off')
                _mobileMenuCategory[i].children[0].style.transform = 'rotate(0deg)'
            }
            _detail[index].style.display = 'block'
            _detail[index].setAttribute('data-status', 'on')
            item.children[0].style.transform = 'rotate(90deg)'
        } else {
            for (let i = 0; i < _detail.length; i++) {
                _detail[i].style.display = 'none'
                _detail[i].setAttribute('data-status', 'off')
                _mobileMenuCategory[i].children[0].style.transform = 'rotate(0deg)'
            }
            _detail[index].setAttribute('data-status', 'off')
            _mobileMenuCategory[i].children[0].style.transform = 'rotate(0deg)'
        }
    })
})