	function init() {
					Tabletop.init( { key: '1dGPzaHBV32CheFR3omLwRRHeWlaylFHfYWKD7mMg5HU',
						callback: showInfo,
						simpleSheet: true } );
			}
	function showInfo(data) {	

			var jsonIssues = new Array(); // new Array
			var jsonIssues1chieu = new Array(); // new Array				 -->
			for ( i = 0; i < data.length; i++ ) {
						for ( prop in data[i] ) {
						jsonIssues1chieu.push(data[i][prop]);}
						jsonIssues.push(jsonIssues1chieu);	
						jsonIssues1chieu = [];
					};
			$(document).ready(function() {
				var table	=	$('#example').DataTable( {
					data: jsonIssues,
					columns: [
						{ title: "Dấu thời gian" },
						{ title: "Tên facebook" },
						{ title: "Họ và tên" },
						{ title: "Sô điện thoại." },
						{ title: "Địa chỉ nhà" },
						{ title: "Dịch vụ giao hàng" },
						{ title: "Tiền giao hàng" },
						{ title: "Nhu cầu khách hàng" },
						{ title: "Ghi chú" },
					],
					"scrollX": true,
					
				} );
			});
	}
	init();
