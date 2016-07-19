/**
 * Created by 和秒 on 2016/7/5.
 */
$(document).ready(function () {
    $("#one").
        css("background","#bbffaa");
    $(".mini").
        css("background","#0aa0aa");
    $("div").
        css("background","#11A553");
    $("*").
        css("background","#B5D4C3");
    $("span,#two").
        css("background","#36ADCF");
    $("body div").
        css("background","#732595");
    $("body>div").
        css("background","#C9471F");
    $(".one").next("div").
        css("background","#cccccc");
    $(".mini").nextAll("div").
        css("background","#556677");
    $(".mini").siblings("div").
        css("background","#556677");
    $(':focus').
        css("background","#2EA3B1");
    $("div:first").
        css("background","#666666");
    $("div:last").
        css("background","#666666");
   // $("div:even").
   //     css("background","#999999");
   // $("div:odd").
    $("div:lt(3)").//div:gt(3),div:eq(3)
        css("background","#999999");
    $("div:contains(di)").
        css("background","#7D2E2E");
    $("div:empty").
        css("background","#7D2E2E");
    $("div:has('.mini')").
        css("background","#2C665F");
    $("div:parent").
        css("background","#367BA8");
    $("div:visible").
        css("background","#ff6500");
    $("div:hidden").show(3000);
    $("div.one :only-child").
        css("background","#64D4E1");



})