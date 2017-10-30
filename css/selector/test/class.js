$(function () {
    var color = $('.demo').css('color')
    if (color === 'gray' || color === 'rgb(128, 128, 128)') {
        $('body').append('<h2 style="color:green" >通过测试</h2>')
    }
    else {
        $('body').append('<h2 style="color:red;" >未通过，请修改代码后刷新重试</h2>')
    }
})
