function addProductComment(productId) {
    var comment = $('#text_area').val();

    $.get('/product/add-product-comment/', {
        'product_comment': comment,
        'product_id': productId,
    }).then(res => {
        $('#comment_area').html(res);
        $('#text_area').val('');
        Swal.fire(
            'Submitted!',
            'Your comment successfully submitted!',
            'success'
        )

        document.getElementById('comment_area').scrollIntoView({behavior: 'smooth'})
    })
}

function addProductToCart(productId) {
    $.get('/order/add-to-order?product_id=' + productId).then(res => {
        console.log('done');
    });
}