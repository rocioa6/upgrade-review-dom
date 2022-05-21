/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

1.2 Elimina el elemento que tenga la clase .fn-remove-me.

1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.

 */
let countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const createUl = document.createElement("ul");
document.body.appendChild(createUl);

function createLi(param, ul) {
  param.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.innerText = element;
    ul.appendChild(newLi);
  });
}
createLi(countries, createUl);
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const removeMe = document.querySelector(".fn-remove-me");
document.body.removeChild(removeMe);
const printHere = document.querySelector("[data-function = printHere]");
const createUl2 = document.createElement("ul");
printHere.appendChild(createUl2);
createLi(cars, createUl2);

countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

countries.forEach(function (country, index) {
  let divLi$$ = document.createElement("ul");
  divLi$$.classList = "divUl";
  let div$$ = document.createElement("div");
  div$$.classList = "div";
  let divH4$$ = document.createElement("h4");
  divH4$$.innerText = country.title;
  let divImg$$ = document.createElement("img");
  divImg$$.setAttribute("src", country.imgUrl);
  let eraseMe$$ = document.createElement("button");
  eraseMe$$.innerText = "Bórrame";
  eraseMe$$.addEventListener("click", handleClick2);
  function handleClick2() {
    let deleteElement = divLi$$.parentNode;
    deleteElement.removeChild(divLi$$);
  }
  document.body.appendChild(divLi$$);
  divLi$$.appendChild(div$$);
  div$$.appendChild(divH4$$);
  div$$.appendChild(divImg$$);
  div$$.appendChild(eraseMe$$);
});

let eraseButton$$ = document.createElement("button");
eraseButton$$.innerText = "Borra el último";
document.body.appendChild(eraseButton$$);
eraseButton$$.addEventListener("click", handleClick);

function handleClick() {
  let lista = document.querySelectorAll(".divUl");
  let lastElement = lista[lista.length - 1];
  lastElement.parentNode.removeChild(lastElement);
}
