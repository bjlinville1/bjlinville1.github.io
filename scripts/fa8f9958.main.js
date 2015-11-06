function printPage(){window.print()}
  $(document).ready(function(){
  $(".text").mouseover(function(){
  $(".line").css("background","#acacac"),
  $(".year").css("color","rgb(117, 115, 115)")}),

  $(".text").mouseleave(function(){
  $(".line").css("background","rgb(68, 68, 68)"),
  $(".year").css("color","white")}),

  $(".marriage").mouseover(function(){
  $(".line-active").addClass("marriage-active").text("3 Years 5 Months")}),
  $(".marriage").mouseleave(function(){
  $(".line-active").removeClass("marriage-active").text("")}),

  $(".raef").mouseover(function(){
  $(".line-active").addClass("raef-active").text("2 Years 3 Months")}),
  $(".raef").mouseleave(function(){
  $(".line-active").removeClass("raef-active").text("")}),

  $(".felix").mouseover(function(){
  $(".line-active").addClass("felix-active").text("9 Months")}),
  $(".felix").mouseleave(function(){
  $(".line-active").removeClass("felix-active").text("")}),

  $(".mu").mouseover(function(){
  $(".line-active").addClass("mu-active").text("4 Years")}),
  $(".mu").mouseleave(function(){
  $(".line-active").removeClass("mu-active").text("")}),

  $(".bb").mouseover(function(){
  $(".line-active").addClass("bb-active").text("3 Years")}),
  $(".bb").mouseleave(function(){
  $(".line-active").removeClass("bb-active").text("")}),

  $(".tiy").mouseover(function(){
  $(".line-active").addClass("tiy-active").text("3")}),
  $(".tiy").mouseleave(function(){
  $(".line-active").removeClass("tiy-active").text("")}),

  $(".home").click(function(a){a.preventDefault(),
  $(".top-view-container").scrollView()}),
  $(".projects").click(function(a){a.preventDefault(),
  $(".my-work").scrollView()}),
  $(".about").click(function(a){a.preventDefault(),
  $(".resume").scrollView()}),
  $(".click-contact").click(function(a){a.preventDefault(),
  $(".contact-me").scrollView()}),
  $(".print").click(function(){printPage()})}),$.fn.scrollView=function(){return this.each(function(){
  $("html, body").animate({scrollTop:
  $(this).offset().top},1e3)})};