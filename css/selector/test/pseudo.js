$(function () {
    $('.link').hover(function () {
        var color = $(this).css('color')
        $('.tip').remove()
        if (color === 'gray' || color === 'rgb(128, 128, 128)') {
            $('body').append('<h2 class="tip" style="color:green" >1)通过测试</h2>')
        }
        else {
            $('body').append('<h2 class="tip" style="color:red;" >1)未通过，请修改代码后刷新重试</h2>')
        }
    }, function () {
        var color = $(this).css('color')
        $('.tip').remove()
        if (color === 'gray' || color === 'rgb(128, 128, 128)') {
            $('body').append('<h2 class="tip" style="color:red;" >1)未通过(链接必须在划入时候才是灰色)，请修改代码后刷新重试</h2>')
        }
        else {
            $('body').append('<h2 class="tip" style="color:green" >1)通过测试</h2>')
        }
    })

    var $boxTitle = $('.box-title')
    $('.box').hover(function () {
        var color = $(this).css('color')
        $('.tip2').remove()
        if ($boxTitle.is('hidden')) {
            $('body').append('<h2 class="tip2" style="color:green" >2)通过测试</h2>')
        }
        else {
            $('body').append('<h2 class="tip2" style="color:red;" >2)未通过，请修改代码后刷新重试</h2>')
        }
    }, function () {
        var color = $(this).css('color')
        $('.tip2').remove()
        if ($boxTitle.is('hidden')) {
            $('body').append('<h2 class="tip2" style="color:red;" >2)未通过(box-title必须在划入时候才是隐藏的)，请修改代码后刷新重试</h2>')
        }
        else {
            $('body').append('<h2 class="tip2" style="color:green" >2)通过测试</h2>')
        }
    })
})
