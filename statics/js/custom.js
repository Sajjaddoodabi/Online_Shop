function addArticleComment(articleId) {
    var comment = $('#comment_text').val();

    $.get('/articles/add-article-comment/', {
        'article_comment': comment,
        'article_id': articleId,
    }).then(res => {
        $('#article_comment_area').html(res);
        $('#comment_text').val('');

        document.getElementById('article_comment_area').scrollIntoView({behavior: 'smooth'})

        Swal.fire(
            'Submitted!',
            'Your comment successfully submitted!',
            'success'
        )
    })
}


function addProductComment(productId) {
    var comment = $('#text_area').val();

    $.get('/products/add-product-comment', {
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

function filterProducts() {
    $('#filter_form').submit();
}

function fillPage(page) {
    $('#page').val(page);
    $('#filter_form').submit();
}

function addProductToCart(productId) {
    var count = document.getElementsByClassName('counter')[0].children[1].innerHTML;
    $.get('/order/add-to-order?product_id=' + productId + '&count=' + count).then(res => {
        Swal.fire({
            title: 'announce',
            text: res.text,
            icon: res.icon,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: res.confirmButtonText
        }).then((result) => {
            if (result.isConfirmed && res.status === 'not_auth') {
                window.location.href = '/account/login'
            }
        })

    });
}

function changeProductCount(detailId, state) {
    $.get('/user/change-order-detail?detail_id=' + detailId + '&state=' + state).then(res => {
        if (res.status === 'success') {
            $('#order-detail-content').html(res.body);
        }
    });
}

function removeProductFromCart(detailId) {
    $.get('/user/remove-order-detail?detail_id=' + detailId).then(res => {
        Swal.fire({
            title: 'Deleted',
            text: "Product successfully deleted from your cart",
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
        })
        if (res.status === 'success') {
            $('#order-detail-content').html(res.body);
        }
    });
}

function removeAddress(addressId) {
    $.get('/user/remove-address?address_id=' + addressId).then(res => {
        Swal.fire({
            title: 'Deleted',
            text: "Address successfully deleted",
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
        })
        if (res.status === 'success') {
            $('#addresses').html(res.body);
        }
    })
}

function editAddress(addressId) {
    $.get('/user/edit-address?address_id=' + addressId)
}

function removeComment(commentId) {
    $.get('/user/remove-comment?comment_id=' + commentId).then(res => {
        Swal.fire({
            title: 'Deleted',
            text: "Address successfully deleted",
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
        })
        if (res.status === 'success') {
            $('#opinions').html(res.body);
        }
    })
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
