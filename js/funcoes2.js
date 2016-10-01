var datainicio, datafim;
var diasSemana = new Array();

$(document).ready(function() {
	$.datepicker.regional['pt-BR'] = {
		closeText: 'Fechar',
		prevText: 'Anterior',
		nextText: 'Próximo',
		currentText: 'Hoje',
		monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
		'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
		'Jul','Ago','Set','Out','Nov','Dez'],
		dayNames: ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'],
		dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
		dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['pt-BR']);
	$("#inicio").datepicker();
	$("#fim").datepicker();

	pegaData();

	$("#bt").click(function(){
		verificaCheckBox();
		calculaDatas();
		alert("Inicio: " + datainicio.toLocaleDateString() + " Fim: " + datafim.toLocaleDateString());
	});
});

function pegaData(){
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
	var options = { weekday: "long", year: "numeric", month: "short", day: "numeric"};
	var dInicio = new Date(datainicio);
	var dFim = new Date(datafim);
	var scheduler = new Array();
	var inicio = new Date();
	var fim = new Date();
	var dia = new Date();
	var n;
	var ndiasemana = new Array(7);
    ndiasemana[0] = "0";
    ndiasemana[1] = "1";
    ndiasemana[2] = "2";
    ndiasemana[3] = "3";
    ndiasemana[4] = "4";
    ndiasemana[5] = "5";
    ndiasemana[6] = "6";

	inicio = dInicio;
	fim = dFim;
	dia = inicio;

	while ( dia.toLocaleDateString() != fim.toLocaleDateString()) {
		for (var j = 0; j <= diasSemana.length -1; j++) {
			n = ndiasemana[dia.getDay()];
					if ( diasSemana[j] === n ) {
							scheduler.push(inicio.toLocaleDateString("pt", options));
					}
		}
		inicio = addDays(inicio,1);
		dia = inicio;
	}
	scheduler.push(inicio.toLocaleDateString("pt", options));
		for (var i = 0; i < scheduler.length; i++) {
			document.getElementById("result").innerHTML += scheduler[i] + "<br>";
		}
};

function verificaCheckBox(){


	$("input[type=checkbox][name='semana[]']:checked").each(function(){
		diasSemana.push($(this).val());
	});
};
