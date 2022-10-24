function time(){
    var data=new Date();
    var hor=data.getHours();// Hora
    var min=data.getMinutes();// Minutos 
    // Incrementação do zero caso a hora seja menor que 10 
    if(hor < 10){
        hor="0"+hor;
    }
    // Incrementação do zero caso os minuots sejam menores que 10 
    if(min < 10){
        min="0"+min;
    }

    var horas=hor;
    var minutos = min;
    document.getElementById("Datehour").innerHTML=horas;
    document.getElementById("Dateminutes").innerHTML=minutos;

}
// Intervalo que atualiza as horas do relogio , chamando a função time a cada 1 segundo 
var timer=setInterval(time,1000);