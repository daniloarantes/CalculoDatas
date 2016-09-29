$(document).ready(function() {

	camposMarcados = new Array();
	var ndiasemana = new Array(7);
    ndiasemana[0] = "0";
    ndiasemana[1] = "1";
    ndiasemana[2] = "2";
    ndiasemana[3] = "3";
    ndiasemana[4] = "4";
    ndiasemana[5] = "5";
    ndiasemana[6] = "6";

	var datainicio, datafim;
	pegaData();

	$("#bt").click(function(){

		verificaCheckBox();
		calculaDatas();

		alert("Inicio: " + datainicio.toLocaleDateString() + " Fim: " + datafim.toLocaleDateString());
	});


function pegaData(){
	$("#inicio").datepicker();
	$("#fim").datepicker();

	$("#inicio").change( function() {
	datainicio = $(this).datepicker("getDate");
	});

	$("#fim").change( function() {
	datafim = $(this).datepicker("getDate");
	});
};

function addDays(inicio, days) {
	var result = new Date(inicio);
	result.setDate(result.getDate() + days);
	return result;
}

function calculaDatas(){
	var dInicio = new Date(datainicio);
	var dFim = new Date(datafim);
	var scheduler = new Array();
	var inicio = new Date();
	var fim = new Date();

	inicio = dInicio;
	fim = dFim;

	var dia = new Date();
	dia = inicio;

while ( dia.toLocaleDateString() != fim.toLocaleDateString()) {
		for (var j = 0; j <= camposMarcados.length -1; j++) {
				var n = ndiasemana[dia.getDay()];

				if ( camposMarcados[j] === n ) {
					scheduler.push(inicio.toDateString());
				}
		}
		inicio = addDays(inicio,1);
		dia = inicio;
}

scheduler.push(inicio.toDateString());

for (var i = 0; i < scheduler.length; i++) {
	document.getElementById("result").innerHTML += scheduler[i] + "<br>";
}



};


function verificaCheckBox(){
	$("input[type=checkbox][name='semana[]']:checked").each(function(){
		var vLen, i;
		//var weekdays = new Array();
		camposMarcados.push($(this).val());
		//vLen = camposMarcados.length;

	//	for (i = 0; i < vLen; i++){
		//	weekdays += "<p>" + camposMarcados[i] + "</p>";
		//}

		//document.getElementById("result").innerHTML = weekdays;
	});
};


function formataData() {
	$('#inicio').datepicker( "option", "dateFormat", "dd-mm-yy" ).val();
	$('#fim').datepicker( "option", "dateFormat", "dd-mm-yy" ).val();
};





});
