$(function () {
    var display = $('.number').css('display')
    if (/inline/.test(display)) {
        $('body').append('<h2 style="color:green" >1)通过测试</h2>')
    }
    else {
        $('body').append('<h2 style="color:red;" >1)未通过，请修改代码后刷新重试</h2>')
    }
})

$(function () {
    var display = $('.box').css('display')
    if (display === 'none') {
        $('body').append('<h2 style="color:green" >2)通过测试</h2>')
    }
    else {
        $('body').append('<h2 style="color:red;" >2)未通过，请修改代码后刷新重试</h2>')
    }
})
