$(document).ready(function(){
	$('#modalPoint').modal();
	$('input, select').styler();
	$('.button-del').click(function(){
		$(this).parent('.button-obj').parent('.block-content').fadeOut('slow', function() {
			$(this).parent('.button-obj').parent('.block-content').remove();
		});
		$(this).parent('.button-obj').parent('.block-listdoc').fadeOut('slow', function() {
			$(this).parent('.button-obj').parent('.block-listdoc').remove();
		});
	});
});
