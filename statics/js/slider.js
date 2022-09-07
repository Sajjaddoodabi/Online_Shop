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