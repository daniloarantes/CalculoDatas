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
	var inicio = dInicio.getDate();


	var i = 0;
	var f = new Date();
	f.setDate(inicio + 1);



	while (i < 5) {
		f.setDate(f.getDate() + 1);
		scheduler.push(f.toDateString());
		i++;
	};



console.log(scheduler.valueOf());



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
	$('#inicio').datepicker( "option", "dateFormat", "dd-mm-yy" ).val();
	$('#fim').datepicker( "option", "dateFormat", "dd-mm-yy" ).val();
};





});
