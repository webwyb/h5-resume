var swiper1 = new Swiper('.swiper-container-father', {
			on:{
				init: function(){
        		swiperAnimateCache(this); //隐藏动画元素 
        		swiperAnimate(this); //初始化完成开始动画
        	}, 
        	slideChangeTransitionEnd: function(){ 
		        	swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
		        	console.log('change slide')
		        } 
		    },

		    // slider 切换的效果
		    effect: 'coverflow',
		    slidesPerView: 3,
		    centeredSlides: true,
			// slider 切换的速度
			speed: 1000,
			// 开启循环
			loop: true,
			direction: 'vertical',
			slidesPerView: 1,
			spaceBetween: 30,
			mousewheel: true,
			pagination: {
				el: '.swiper-pagination-father',
				clickable: true,
			},
		});
		var swiper2 = new Swiper('.swiper-container-son',{
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			
			coverflowEffect: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows : true,
			},
			pagination: {
				el: '.swiper-pagination-son',
			},
		})