$(function () {
     $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
        $(this).toggleClass('open'); 
      });
})