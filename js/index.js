//스무스 스크롤
$('#navbar a, .btn').on('click',function(event){
    if(this.hash !== ''){
        event.preventDefault();
        const hash = this.hash;

        $('html,body').animate(
            {
                scrollTop : $(hash).offset().top - 100
            },
            800 // 속도
        
        );
    }
});

// 메뉴 백그라운드 
window.addEventListener('scroll',function(){
    if(window.scrollY > 150){
        this.document.querySelector('#navbar').style.opacity = 0.8;
    }else{
        this.document.querySelector('#navbar').style.opacity = 1;
    }


});