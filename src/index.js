
$('.showMenu-food').click(
	function (event) {
    	$(this).next('.menu-food-list').slideToggle();
	}
);

$('.showMenu-drink').click(
	function (event) {
    	$(this).next('.menu-drink-list').slideToggle();
	}
);
// 
// $(document).ready(function(){
//   $('.your-class').slick({
//     setting-name: setting-value
//   });
// });
//
// $('.fade').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });
