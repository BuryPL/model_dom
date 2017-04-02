'use strict';

var mainHeader = document.getElementById('main-header'); //przypisanie nagłówka strony do zmiennej

mainHeader.innerHTML = "Treść nagłówka"; //dodajemy treść do nagłówka

var link = document.getElementsByClassName('link')[0]; //przypisujemy pierwszy link do strony
console.log(link);

link.href = "https://akademia108.pl"; //nadpisujemy atrybut href w linki

link.className = "nowa-klasa"; //Nadpisujemy nazwę klasy w linku

mainHeader.style.color = "#1a2";