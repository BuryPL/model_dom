'use strict';

//var secondLink = document.getElementsByTagName('a')[1]; //Tworzymy zmienną z drugim linkiem
//
//console.log(secondLink);
//
//function alarm(e) {
//    e.preventDefault(); //zapobiegamy domyślnej akcji
//    console.log('klinkięto kolejny link');
//
//    console.log(e.type);
//}
//
//secondLink.onclick = alarm; //wywołujemy funkcję alarm() po kliknięciu na drugi link
//
//
//var thirdLink  = document.getElementsByTagName('a')[2]; //Tworzymy zmienną z trzecim linkiem
//
//thirdLink.addEventListener('click', alarm); //wywołujemy funkcję alarm() po kliknięciu na trzeci link za pomocą listenera
//
//thirdLink.removeEventListener('click', alarm);
//
//
///*efekt powiększenia napisu po najechaniu*/
//var mainHeader = document.getElementById('main-header');
//
//function resize(e) {
//    if (e.type == 'mouseover') { //sprawdza, czy typ eventu na tym elemencie jest mousover
//        mainHeader.style.fontSize = "70px"; //jeżeli tak, to powiększa
//    }else{
//        mainHeader.style.fontSize = "inherit" //jeżeli nie, to nie powiększa
//    }
//}
//
//mainHeader.onmouseover = resize; //wywołuje funkcję resize na evencie mouseover
//mainHeader.onmouseout = resize; //wywołuje funkcję resize na evencie mouseout

/*zatrzymanie propagacji*/
function klikHeader() {
    console.log("kliknąłeś header");
}

document.getElementsByTagName('header')[0].onclick = klikHeader;

function klikH1(e) {
    e.stopPropagation();
    console.log('Kliknąłeś h1');
}

document.getElementsByTagName('h1')[0].onclick = klikH1
