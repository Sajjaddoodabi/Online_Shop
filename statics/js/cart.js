let _enc = document.querySelectorAll('.increase')
let _dec = document.querySelectorAll('.decrease')
let _quant = document.querySelectorAll('.quantity')
let _cartProduct = document.querySelectorAll('.cartProduct')
let _delProduct = document.querySelectorAll('.cartDelete')
let _returnProduct = document.querySelectorAll('.returnProduct')
let _cartPrice = document.querySelectorAll('.cartPrice')
let _cartTotal = document.querySelectorAll('.cartTotal')
let _returnP = document.querySelectorAll('.returnP')
let _deleteP = document.querySelectorAll('.deleteP')

for (let i = 0; i < _quant.length; i++) {
    _quant[i].setAttribute('data-quantity', '1')
}
_enc.forEach((item, index) => {
    // let quantity = 1
    item.addEventListener('click', () => {
        _quant[index].setAttribute('data-quantity', (parseInt(_quant[index].getAttribute('data-quantity')) + 1).toString())
        _quant[index].children[1].innerHTML = _quant[index].getAttribute('data-quantity')
        _dec[index].innerHTML = '-'
        _cartTotal[index].innerHTML = (parseInt(_cartPrice[index].innerHTML) * parseInt(_quant[index].getAttribute('data-quantity')))
        // _dec[index].style.fontsize = 20 + 'px'
    })
})

_dec.forEach((item, index) => {
    item.addEventListener('click', () => {
        _quant[index].setAttribute('data-quantity', (parseInt(_quant[index].getAttribute('data-quantity')) - 1).toString())
        _quant[index].children[1].innerHTML = _quant[index].getAttribute('data-quantity')
        _cartTotal[index].innerHTML = (parseInt(_cartPrice[index].innerHTML) * parseInt(_quant[index].getAttribute('data-quantity')))
        if (_quant[index].getAttribute('data-quantity') == 1) {
            _dec[index].innerHTML = '<i class="bi bi-trash"></i>'
        }
        if (_quant[index].getAttribute('data-quantity') == 0) {
            _quant[index].setAttribute('data-quantity', '1')
            _cartProduct[index].style.display = 'none'
            _returnProduct[index].style.display = 'block'
        }
    })
})


_delProduct.forEach((item, index) => {
    item.addEventListener('click', () => {
        _cartProduct[index].style.display = 'none'
        _returnProduct[index].style.display = 'block'
    })
})

_returnP.forEach((item, index) => {
    item.addEventListener('click', () => {
        _cartProduct[index].style.display = 'flex'
        _returnProduct[index].style.display = 'none'
    })
})

_deleteP.forEach((item, index) => {
    item.addEventListener('click', () => {
        _returnProduct[index].style.display = 'none'
    })
})

document.getElementsByClassName('showDiscountCode')[0].addEventListener('click', () => {
    if (document.getElementsByClassName('showDiscountCode')[0].getAttribute('data-status') == 'off') {
        document.getElementsByClassName('showDiscountCode')[0].children[0].style.transform = 'rotate(90deg)'
        document.getElementsByClassName('showDiscountCode')[0].setAttribute('data-status', 'on')
        document.getElementsByClassName('discountCode')[0].style.display = 'block'
    } else {
        document.getElementsByClassName('showDiscountCode')[0].children[0].style.transform = 'rotate(0deg)'
        document.getElementsByClassName('showDiscountCode')[0].setAttribute('data-status', 'off')
        document.getElementsByClassName('discountCode')[0].style.display = 'none'
    }
})