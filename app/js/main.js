$(function () {

      $('.questions-accardion__btn').on('click', function(){
        $(this).next().slideToggle(500); 
        $(this).toggleClass('open'); 
      });

    });
      


window.addEventListener('DOMContentLoaded', () => {


    const menu = document.querySelector(".menu");
    const mobile = document.querySelector(".nav-icon");

    mobile.addEventListener("click", function () {
        this.classList.toggle("nav-icon--active");
        menu.classList.toggle("nav--active");
        document.body.classList.toggle('overflow')
    });

    const btn = document.querySelector('.btnUp');
    const headerWrapper = document.querySelector('.header-wrapper');
    const footerBtn = document.querySelector('.footer-bottom__img');
 
        btn.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth' 

            });
        });

        function up() {
        window.addEventListener('scroll', () => {

            if(window.scrollY > 690){
            btn.classList.add('btnUp-visible');
            headerWrapper.classList.add('box-shadow');
            }else{
            btn.classList.remove('btnUp-visible');
            headerWrapper.classList.remove('box-shadow');
            }
           
            })
        }
        up();

        footerBtn.addEventListener('click', () => {
            window.scrollTo({
            top: 0, 
            behavior: 'smooth' 

            });
        
        })


    const modalBtn = document.querySelectorAll('.btn-click');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('.modal__close');
    const test = calcScroll();


        modalBtn.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                modal.classList.add('show');
                modal.classList.remove('hide');
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${test}px`;
            })
        });

        modalCloseBtn.addEventListener('click', ()=>{
                modal.classList.add('hide');
                modal.classList.remove('show');
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e)=>{
            if(e.target == modal){
                modal.classList.add('hide');
                modal.classList.remove('show');
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });

        document.addEventListener('keydown', (e)=>{
            if(e.code == 'Escape' && modal.classList.contains('show')){
                modal.classList.add('hide');
                modal.classList.remove('show');
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        })

   
    function calcScroll(){
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        
        document.body.append(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        
        div.remove();
        
        return scrollWidth;
        }

        var element = document.getElementById('mask');
        var element1 = document.getElementById('mask1');
        var element2 = document.getElementById('mask2');
        var element3 = document.getElementById('mask3');
        var element4 = document.getElementById('mask4');
      
        var maskOptions = {
            mask: '+{7}(000)000-00-00'
        };

        if(element){
            var mask = IMask(element, maskOptions);
        }
        if(element1){
            var mask1 = IMask(element1, maskOptions);
        }
        if(element2){
            var mask2 = IMask(element2, maskOptions);
        }
        if(element3){
            var mask3 = IMask(element3, maskOptions);
        }
        if(element4){
            var mask4 = IMask(element4, maskOptions);
        }
      
        
})