
	var dataOptDistrsist = "";

function init3() {
		Tabletop.init( { key: '1NobeJ-yv0xJNTjlqkZDokcebv6_OqxKobpJ6Q1psqek',
			callback: getDatasheet,
			simpleSheet: true } );
}


function showInfo3(datasheet){
		var jsonIssues = new Array(); // new Array
		var jsonIssues1chieu = new Array(); // new Array
		var htmlop = "";
		var htmlopdis  = "";
		function gethtml(province,value,text){
			return "<option data-province='"+province+"' value='"+value+"'>"+text+"</option>";		
		}
		function getdistrict(value,text){
			return "<option value='"+value+"'>"+text+"</option>";	
		}

		for ( var j = 0; j < datasheet.length ; j++ ) {
					// lay gia tri cua tung doi tuong hang ngang
					for ( prop in datasheet[j] ) {
					jsonIssues1chieu.push(datasheet[j][prop]);			
					}
					htmlopdis = htmlopdis + getdistrict(datasheet[j]["STT"],datasheet[j]["Tỉnh / TP"]) + "</br>"
					// xu ly bang sheet tinh thanh the option
					for( var i = 3; i<jsonIssues1chieu.length; i++){
						let kvprovince="";
						switch(i) {
						  case 3:
							kvprovince = "kv1";
							break;
						  case 4:
							kvprovince = "kv2";
							break;
						  default:
							kvprovince = "kv3";
						}
						let kv = jsonIssues1chieu[i];
						let vitrisub =0;
						do{		
							vitrisub = kv.search(/\n/);
							
							if(vitrisub>0){
								htmlop= htmlop + gethtml(jsonIssues1chieu[1],kvprovince,kv.substring(0,vitrisub)) +"</br>";
							}				
							// kiem tra dictrict cuoi cung
							if(kv.length >0 && vitrisub < 0 ){
								htmlop= htmlop + gethtml(jsonIssues1chieu[1],kvprovince,kv.substring(0,kv.length));
							}
							kv = kv.substring(vitrisub+1,kv.length);
						}while(vitrisub > 0)
							
					}
					jsonIssues.push(jsonIssues1chieu);				
					jsonIssues1chieu = [];
		}
					
					document.getElementById("province_from").innerHTML = htmlopdis;
					document.getElementById("district_from").innerHTML = htmlop;
					dataOptDistrsist = $('#district_from').find('option');
};

function run(getOptdistrict){
			var selectedProvince = $('#province_from').find('option:selected').val();
			var arrOpt = [];
			var showOptdistrict = "";
			// push opt vao mang
				getOptdistrict.each(function(){
					if($(this).data('province') == selectedProvince){
						arrOpt.push($(this).get(0).outerHTML);						
					}
				})
			arrOpt.forEach(function(item,value){
				showOptdistrict += item;
			})

			document.getElementById("district_from").innerHTML = showOptdistrict;
				

}
function tinhcuoc(){
	var valProvince = $("#province_from").find('option:selected').val();
	var valDistrict = $("#district_from").find('option:selected').val();
	var valWeight = $("#weight").val();
	var mientinh = valProvince.substring(0,1);
	
	//<------ tinh cuoc --->	
	if(valProvince!=""&&valDistrict!=""&&/^\d+$/.test(valWeight)){
				var tiencuoc = 0;
				function ktsokg(kg,tienthem){
					if(kg==0){return 0;}
					else if(kg<=0.5){ return tienthem;}
					else{return tienthem*2}
				}
				function tinhcuoctrongtinh(tienc,tiencongthem){
					if(valWeight<=3000){return tienc}									
					else{
						let kgnhap = valWeight/1000;
						let kgconlai = kgnhap -0.5;
						var kgtienthem = kgconlai - Math.floor(kgconlai);
						return tienc + tiencongthem*(Math.floor(kgconlai)/0.5) + ktsokg(kgtienthem,tiencongthem);
					}	
				}
				function tinhcuocngoaitinh(tienc1,tienc2,tiencongthem){
					if(valWeight<=200){return tienc1}
					else if(valWeight<=500){return tienc2}
					else{
						let kgnhap = valWeight/1000;
						let kgconlai = kgnhap -0.5;
						let kgtienthem = kgconlai - Math.floor(kgconlai);
						return tienc2 + tiencongthem*(Math.floor(kgconlai)/0.5) + ktsokg(kgtienthem,tiencongthem);
					}	
				}
				if(mientinh =='N'){
						if(valProvince=="NTNH"){
								if(valDistrict=="kv3"){
									tiencuoc =  tinhcuoctrongtinh(16500,2500);	
								}else{	
									tiencuoc = tinhcuoctrongtinh(30000,2500);																									
								}
						}else{
							if(valDistrict =="kv3"){
								tiencuoc = tinhcuocngoaitinh(35000,35000,2500);							
							}else{
								tiencuoc = tinhcuocngoaitinh(25000,30000,2500);																								
							}
						}
				}else{	
						if(valDistrict =="kv3"){
							tiencuoc = tinhcuocngoaitinh(37000,40000,5000);														
						}else{
							tiencuoc = tinhcuocngoaitinh(27000,32000,5000);						
						}
				}
		
		return tiencuoc = tiencuoc.toLocaleString()+"VNĐ";
		
	}else{
		return "Vui lòng điền đúng trọng lượng" 
	}
}
function getDatasheet(datasheet) {

	showInfo3(datasheet);
	run(dataOptDistrsist);	
}
init3();
$(document).ready(function($) {
		$(".select2").select2();
		$('#province_from').change(
			function(){
				
				run(dataOptDistrsist);
			}
		);
		$('#action').click(function(){
			var cuoc = tinhcuoc();
			document.getElementById("resole").innerHTML = cuoc;
		})
})	
