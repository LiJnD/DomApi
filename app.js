//console.log(document);
//console.log(document.head);
//console.log(document.body);

// Buscar elementos
/*
console.log(document.getElementById('id_parrafo')) //id
console.log(document.querySelector("#id_parrafo")) //id
console.log(document.querySelector(".parrafo")) //clase
console.log(document.querySelector("p")) //etiqueta
console.log(document.querySelectorAll("p")) //etiqueta
*/
// Modificar elementos

/*
const parrafo = document.getElementById('parrafo_uno');
const parrafo2 = document.getElementById('parrafo_dos');
parrafo.textContent="Párrafo modificado por JS";
parrafo.textContent="<b>Párrafo modificado por JS</b>";
parrafo_dos.innerHTML = "<b>Párrafo modificado por JS</b>";

console.log(parrafo.className)
parrafo.classList.add("clase-adicional")


// CREATE ELEMENT

let lista = document.getElementById('lista_dinamica');
let li = document.createElement("li");
li.textContent="Mi primer li dinámico";
lista.appendChild(li);

// CREAR VARIOS ELEMENTOS

 lista = document.getElementById('lista_dinamica');
 let arrayItem = ["item 1", "item 2", "item 3"];

 arrayItem.forEach((item) =>{
     const li = document.createElement('li');
     li.textContent = item;
     lista.appendChild(li);
 })

 // Esto genera un Reflow


// VARIOS ELEMENTOS NO RECOMENTADO

lista = document.getElementById('lista_dinamica');
arrayItem = ["item 1", "item 2", "item 3"];

 arrayItem.forEach((item) =>{
     lista.innerHTML+=`
        <li>${item}</li>
     `
 })
*/

 // FRAGMENT
 /*lista = document.getElementById('lista_dinamica');
 arrayItem = ["item 1", "item 2", "item 3"];

 fragment = document.createDocumentFragment();
 arrayItem.forEach((item) =>{
    const li = document.createElement('li');
    li.textContent = item;
    fragment.appendChild(li);
})
 
lista.appendChild(fragment)
*/




/*<li class="list">
<b>Nombre: </b> <span class="text-danger">Roberto</span>
</li>*/

/*
fragment = document.createDocumentFragment();
lista = document.getElementById('lista_dinamica');
li = document.createElement("li");
li.classList.add("list");
const b = document.createElement("b");
b.textContent= "Nombre :";
const span = document.createElement("span");
span.classList.add("text-danger");
span.textContent="Roberto";
li.appendChild(b);
li.appendChild(span);
fragment.appendChild(li);
lista.appendChild(li);

*/

/*
lista = document.getElementById('lista_dinamica');
arrayItem = ["Roberto", "Carlos", "Pedro"];

 fragment = document.createDocumentFragment();
 arrayItem.forEach((item) =>{
    li = document.createElement("li");
    li.classList.add("list");
    const b = document.createElement("b");
    b.textContent= "Nombre :";
    const span = document.createElement("span");
    span.classList.add("text-danger");
    span.textContent=item;
    li.appendChild(b);
    li.appendChild(span);
    fragment.appendChild(li);
})
 
lista.appendChild(fragment)

*/


// OTRA FORMA

/*lista = document.getElementById('lista_dinamica');
let contenido = '<li class="list"><b>Nombre: </b> <span class="text-danger">Roberto</span></li>'
lista.innerHTML= contenido;
*/

//TEMPLATE

lista = document.getElementById('lista_dinamica');
arrayItem = ["Roberto", "Carlos", "Pedro", "Manuel", "Sergio"];
fragment = document.createDocumentFragment();
template = document.getElementById('template').content;


arrayItem.forEach((item) =>{
    template.querySelector("span").textContent = item;
    clone = template.cloneNode(true);
    fragment.appendChild(clone);
})

lista.appendChild(fragment);

