$(document).ready(function() {

	camposMarcados = new Array();
	var data;
	pegaData();

	$("#bt").click(function(){
		verificaCheckBox();
		calculaDatas();
	});


function pegaData(){
	$("#datepicker").datepicker();
	$("#datepicker").change( function() {
	data = $(this).datepicker("getDate");
	});
};

function calculaDatas(){
	var myDate = new Date(data);
	var dayOfMonth = myDate.getDate();
	myDate.setDate(dayOfMonth + 10);
	alert(myDate);
};

function verificaCheckBox(){

	$("input[type=checkbox][name='semana[]']:checked").each(function(){
		var vLen, i;
		var text = "";
		camposMarcados.push($(this).val());
		vLen = camposMarcados.length;

		for (i = 0; i < vLen; i++){
			text += "<p>" + camposMarcados[i] + "</p>";
		}

		document.getElementById("result").innerHTML = text;
	});
};


function formataData() {
	$('#datepicker').datepicker( "option", "dateFormat", "dd-mm-yy" ).val();
};



});
