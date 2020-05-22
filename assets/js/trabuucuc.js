function showBuucuc(){
    Tabletop.init(
        {
            key: "1xN9FchlCrtGiiNPa9ePdRdS_LMxJpfXMTjjWLZIl7CA",
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
						$("#trabuucuc").DataTable( {
							data: jsonIssues,
							columns: title,
							"scrollX": true,
						} );
						} );
                
            },
            simpleSheet:true,
        }
    ); 
}  

