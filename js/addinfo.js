$(function(){
	var form = $('#J-add-form'),
		smt = $('#J-add-submit'),
		url = form.attr('data-action');
		console.log(url)

		$(smt).on('click', function(){
			$.ajax({
				url: url,
				dataType: 'json',
				type: 'post',
				success: function(response) {
					console.log(response)
					if(response.code == 0) {
						alert('提交成功！')
					}					
				},
				error: function(response) {
					alert(response.status)
				}
			})
		})
})