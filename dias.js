/*
 2016 Luis Miguel Bravo
*/
var fecha_llegada_a_chile = new Date("10/19/2016");
var fecha_envio_correo_visa = new Date("10/25/2016");
var fecha_mudanza_nuevo_departamento = new Date("5/1/2017");
var fecha_maraton_de_programacion = new Date("11/26/2016");
var fecha_de_inicio_2brains = new Date("11/2/2016");
var fecha_de_navidad = new Date("12/24/2016");
var fecha_de_new_year = new Date("12/31/2016");


var hoy = new Date(Dia_de_hoy());
document.write("dias en chile :" + Diferencia_En_Dias(fecha_llegada_a_chile, hoy) + "<br />");
document.write("dias desde que solicite la visa de trabajo :" + Diferencia_En_Dias(fecha_envio_correo_visa, hoy) + "<br />");
document.write("dias desde que inicie en 2BRAINS :" + Diferencia_En_Dias(hoy, fecha_de_inicio_2brains) + "<br />");
document.write("dias para el maraton de programación :" + Diferencia_En_Dias(hoy, fecha_maraton_de_programacion) + "<br />");
document.write("dias para mudarme :" + Diferencia_En_Dias(hoy, fecha_mudanza_nuevo_departamento) + "<br />");

document.write("dias para navidad :" + Diferencia_En_Dias(hoy, fecha_de_navidad) + "<br />");
document.write("dias para año nuevo :" + Diferencia_En_Dias(hoy, fecha_de_new_year) + "<br />");



function Diferencia_En_Dias(diaInicial, diaFinal)
{
	var timeDiff = Math.abs(diaFinal.getTime() - diaInicial.getTime());
	return Math.ceil(timeDiff / (1000 * 3600 * 24)); 
}
function Dia_de_hoy()
{
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10) {
	    dd='0'+dd
	} 
	if(mm<10) {
	    mm='0'+mm
	} 
	return mm+'/'+dd+'/'+yyyy;
}
