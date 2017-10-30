$(function () {
    var color = $('.demo').css('color')
    if (color === 'gray' || color === 'rgb(128, 128, 128)') {
        $('body').append('<h2 style="color:green" >1)通过测试</h2>')
    }
    else {
        $('body').append('<h2 style="color:red;" >1)未通过，请修改代码后刷新重试</h2>')
    }
})

$(function () {
    var color = $('.some').css('color')
    if (color === 'gray' || color === 'rgb(128, 128, 128)') {
        $('body').append('<h2 style="color:green" >2)通过测试</h2>')
    }
    else {
        $('body').append('<h2 style="color:red;" >2)未通过，请修改代码后刷新重试</h2>')
    }
})
