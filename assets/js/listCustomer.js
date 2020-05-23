	function ListCus(key,table){
		this.key = key;
		this.table = table;
		this.loading = function () {
			var self = this;
			Tabletop.init(
				{
					key: self.key,
					callback:function(data) {
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
						var title = [];
						for(var prop in data[0]){
							title.push({'title':prop});
						}  
						$(document).ready(function() {
						$(self.table).DataTable( {
							data: jsonIssues,
							columns: title,
							order: [ 0, 'desc' ],
							scrollX: true,
						} );
						} );
					},
					simpleSheet:true,
				}
			);
		}								
	}
			
	function  showKHTN(){
		var customerTN = new ListCus('1svNKwy1Ys3RypvkMgJHSjXuDTlOP1rgpiazji5inJiE','#infoCusTiemNang');
		customerTN.loading();
	}
	function showGDTC(){
		var customerGD = new ListCus('1dGPzaHBV32CheFR3omLwRRHeWlaylFHfYWKD7mMg5HU','#example');
		customerGD.loading();
	}
	function showCTHGD(){
		var customerCGD = new ListCus('1K4KydbZ8wGs1CVbaMRlhHSpha7CCNB5yi_Nt2rbPKPY','#example1');
		customerCGD.loading();
	}