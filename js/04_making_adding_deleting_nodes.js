'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[3]; //przypisz do zmiennej istniejący węzeł

console.log(document.getElementById('parFirst').children);
console.log(istniejacyWezel);

var newElement = document.createElement('p'); //stwórz nowy element <p>

var newElementContent = document.createTextNode('To jest nowy paragraf'); //stwarzamy tekst do elementu p

newElement.appendChild(newElementContent);
console.log(newElement);

istniejacyWezel.appendChild(newElement);

//document.getElementById('parFirst').replaceChild(newElement, istniejacyWezel);

istniejacyWezel.removeChild(newElement);