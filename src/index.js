
$('.showMenu-food').click(
	function (event) {
    	$(this).next('.menu-food-list').slideToggle(function () {
    	  alert ('hello')
    	});
	}
);

$('.showMenu-drink').click(
	function (event) {
    	$(this).next('.menu-drink-list').slideToggle();
	}
);
