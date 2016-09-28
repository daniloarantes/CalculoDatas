$(document).ready(function() {

	camposMarcados = new Array();
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

function calculaDatas(){
	var dInicio = new Date(datainicio);
	var dFim = new Date(datafim);
	var scheduler = new Array();
	var inicio = new Date();
	var fim = new Date();
	var i = 0;
	var j = 0;
	inicio.setDate(dInicio.getDate());
	fim.setDate(dFim.getDate());

	scheduler.push(inicio.toDateString());

//	while (inicio.getDate() < fim.getDate()) {


// LAÇO NÃO ESTÁ CONTANDO CORRETAMENTE
var dia = new Date(inicio);

while ( dia.toLocaleDateString() != fim.toLocaleDateString()) {
	dia = new Date( scheduler[ scheduler.length-1 ].valueOf());

	if (dia.toLocaleDateString() == fim.toLocaleDateString()) {
		break;
	} else {
			inicio.setDate(inicio.getDate() + 1);
			scheduler.push(inicio.toDateString());
}

document.getElementById("result").innerHTML += scheduler[i] + "<br>";
	i++;

}
document.getElementById("result").innerHTML += scheduler[ scheduler.length -1 ] + "<br>";



//alert( scheduler[ scheduler.length-1 ].valueOf() );
//alert(dia.getDay());

//document.getElementById("result").innerHTML = scheduler.valueOf();




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
