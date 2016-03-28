$(function(){
	var app = {
		
		initialize: function(){
			this.setUpListeners();	
		},
		
		setUpListeners: function(){	
			this.instructionScroll();
			this.faqPopup();
            this.tabs();
            this.cartCountSelect();
            this.menuScroll();
		},
				
		instructionScroll: function(){
			/************ Scroll anchore *********/
			$('.anchor').on('click', function(){
				var id = $(this).attr('id');
				var anchorNum = $('.' + id).offset();		
				
				$('body, html').animate({scrollTop:anchorNum.top-30}, 1200);
			});
		},
				
		
		faqPopup: function(){
			/******************* Popup *******************/
			$('.call_popup').on('click', function(e){
				e.preventDefault();
				
				$('.faq-popup').removeClass('slideOutUp');	
				$('.faq-popup').addClass('animated slideInDown').fadeIn(100);
			});	
			
			$('.popup-close, .faq-popup-overlay').on('click', function(e){
				e.preventDefault();	
				
				$('.faq-popup').removeClass('slideInDown');			
				$('.faq-popup').addClass('slideOutUp');
			});
		},
		
        tabs: function(){
            /******************* Tabs *******************/
			$('.tab-content>div:not(":first-of-type")').hide();
			$('<div class="line"></div>').appendTo('.tab-menu li');
			$('.tab-menu li:first-of-type').find(':first').width('100%')
			  
			$('.tab-menu li').each(function(i) {
				$(this).attr('data-tab', 'tab'+i);
			});
			  
			$('.tab-content>div').each(function(i) {
				$(this).attr('data-tab', 'tab'+i);
			});
			  
			$('.tab-menu li').on('click', function() {
				
				var dataTab = $(this).data('tab');
				var getWrapper = $(this).closest('.tab-wrapper');
				var line = $(this).find('.line');
				
				getWrapper.find('.tab-menu li').removeClass('active');
				$(this).addClass('active');
				
				getWrapper.find('.line').width(0);
				line.animate({'width':'100%'}, '300');
				getWrapper.find('.tab-content>div').hide();
				getWrapper.find('.tab-content>div[data-tab='+dataTab+']').show();
			});	
		},
        
        cartCountSelect: function(){	
            /******************* Cart add count (+/-) *******************/
			$('.btn_count__minus').on('click', function() {
				var value = parseInt($(this).siblings('.cart-number_sel').val());
				
				if (value == 0) return;
				value--;
				$(this).siblings('.cart-number_sel').val(value);
			});
		
			$('.btn_count__plus').on('click', function() {
				var value = parseInt($(this).siblings('.cart-number_sel').val());
				
				value++;
				$(this).siblings('.cart-number_sel').val(value);
			});
		},	
        
        menuScroll: function(){
			
			/******************* Top menu *******************/
			$('.header-nav li a').click(function (e) { 
                e.preventDefault();
                
				var elementClick = $(this).attr("href");
                $('.header-nav li a').removeClass('active');
				$(this).addClass('active');
                
                if(elementClick === "#page-1"){
                    $('.header-nav li a').first().addClass('active');
                    $('body, html').animate( { scrollTop: 0}, 1000 );
                }else{
                    var destination = $(elementClick).offset().top;
                    $('body, html').animate( { scrollTop: destination - 60}, 1000 );
                } 
				
				return false;
			});
            
            /******************* Left menu pagination page *******************/
            $(document).scroll(function() {
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            
                if(scrollTop > 0){
                    $('.fixed-header').addClass('borderd');
                }else{
                    $('.fixed-header').removeClass('borderd');
                }    
                
                var topSc = $(this).scrollTop();
                
                $(".get-nav-item").each(function(i){
                    var this_top = $(this).offset().top;
                    var height = $(this).height();
                    var this_bottom = this_top + height;

                    // Scrolled within current section
                    if (topSc+100 >= this_top && topSc <= this_bottom) {
                        $(".header-nav li a").removeClass('active');
                        $(".header-nav li:eq("+i+") a").addClass('active');
                    }
                    else if(topSc === 0){  
                        $('.header-nav li a').removeClass('active');
                        $(".header-nav li:eq(0) a").addClass('active');                        
                    }
                    else {
                        $(".header-nav li:eq("+i+") a").removeClass('active');
                    }

                });
                
            });
            
		},
	}
	app.initialize();
});