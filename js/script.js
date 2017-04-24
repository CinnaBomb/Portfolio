 $(document).ready(function() {

 	$("h4").on("click", function(){
 		$(this).find("span").toggleClass("fa-caret-up").toggleClass("fa-caret-down");
 		$(this).next("div").toggleClass("hidden");
 	});

 	// $("h2").on("click", function(){
 	// 	$(this).find("span").toggleClass("fa-caret-down").toggleClass("fa-caret-up");
 	// 	$(this).next("div").toggleClass("hidden");
 	// });

 });
