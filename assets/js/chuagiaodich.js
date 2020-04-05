	function init1() {
		Tabletop.init( { key: '1K4KydbZ8wGs1CVbaMRlhHSpha7CCNB5yi_Nt2rbPKPY',
			callback: showInfo1,
			simpleSheet: true } );
	}
	function showInfo1(data) {
	var jsonIssues = new Array(); // new Array
	var jsonIssues1chieu = new Array(); // new Array				 -->
	for ( i = 0; i < data.length; i++ ) {
			for ( prop in data[i] ) {
			jsonIssues1chieu.push(data[i][prop]);	
			}
			jsonIssues.push(jsonIssues1chieu);	
			jsonIssues1chieu = [];
	}
	var jsonIssues = new Array(); // new Array
	var jsonIssues1chieu = new Array(); // new Array				 -->
	for ( i = 0; i < data.length; i++ ) {
			for ( prop in data[i] ) {
			jsonIssues1chieu.push(data[i][prop]);	
			}
			jsonIssues.push(jsonIssues1chieu);	
			jsonIssues1chieu = [];
	}
	$(document).ready(function() {
    $('#example1').DataTable( {
        data: jsonIssues,
        columns: [
            { title: "Dấu thời gian" },
            { title: "Tên facebook" },
            { title: "Họ và tên" },
            { title: "Sô điện thoại." },
            { title: "Địa chỉ nhà" },
            { title: "Nhu cầu khách hàng" },
            { title: "Ghi chú" },
        ],
		"scrollX": true,
    } );
	} );
	}
	init1();