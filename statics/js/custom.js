function addProductComment(productId) {
    var comment = $('#text_area').val();

    $.get('/product/add-product-comment/', {
        'product_comment': comment,
        'product_id': productId,
    }).then(res => {
        $('#comment_area').html(res);
        $('#text_area').val('');

        document.getElementById('comment_area').scrollIntoView({behavior: 'smooth'})

        Swal.fire(
            'Submitted!',
            'Your comment successfully submitted!',
            'success'
        )


    })
}

function addProductToCart(productId) {
    var count = $('#product-count').val();
    $.get('/order/add-to-order?product_id=' + productId + '&count=' + count).then(res => {
        // todo add sweet alert
        console.log('done');
    });
}

function changeProductCount(detailId, state) {
    $.get('/user/change-order-detail?detail_id=' + detailId + '&state=' + state).then(res => {
        if (res.status === 'success') {
            $('#order-detail-content').html(res.body);
        }
    });
}


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