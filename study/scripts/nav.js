/**
 * Created by 和秒 on 2016/7/5.
 */
$(function () {
    $(".level1>a").click(function () {
        $(this).addClass("current")
            .next().show()
            .parent().siblings().children("a").removeClass("current")
            .next().hide();
        return false;
    })
})

