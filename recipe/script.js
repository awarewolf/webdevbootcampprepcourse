$(document).ready(function() {
    
	// Toggles shading for the ingredients using the "Buy it!/Got it." button
    $(".bought_button").click(function(){
		
	    var self = $(this).parent();
	    $(this).html($(this).html() == "Buy it!" ? "Got it." : "Buy it!");
	    self.toggleClass( "bought" );

    });

    // Toggles the directions that are done
    $("ol li p").click(function(){

		$( this ).toggleClass( "done" )

    });

     // Toggles hiding / showing pictures
    $(".pic_button").click(function(){
		
	    $(this).html($(this).html() == "Hide pictures" ? "Show pictures" : "Hide pictures");
	    $("ol li img").toggleClass( "hide" );

    });

});