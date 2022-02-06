/*Milestone 1 
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa. 

Milestone 2 
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user).
Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.*/

const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
// Assegno il contenitore principalea ad una variabile
const contenitoreBoxIcons = document.getElementById('boxes-container');
creatoreIcone(contenitoreBoxIcons, icone);

// Assegno il select ad una variabile
const selettoreFiltro = document.getElementById('filter-select');

// Assegno al select l'evento change
selettoreFiltro.addEventListener('change', function () {

	//NOTA: Posso utilizzare this perchè non è un arrow function
	let selezionato = this.value;
	// Se viene selezionato all visualizzo su schermo tuttti gli elementi
	if (selezionato == "all") {
		creatoreIcone(contenitoreBoxIcons, icone);
	} 
	// Visualizzo su schermo sole le icone corrispondenti utilizzando il metodo filter
	else {
		const iconeFiltrate = icone.filter(icona => {
			
			if (icona.type == selezionato) {
				return true;
			}
			return false;
		});
		
		creatoreIcone(contenitoreBoxIcons, iconeFiltrate);		
	}

});





//FUNZIONI UTILI

// Creo funzione che creerà in manera dinamica gli oggetti nell'arrey di oggetti 'icone'
function creatoreIcone(contenitoreBoxIcons, icone) {

	// Creo variabile che conterrà il nodo box-icons
	let contenuto = '';

	// Uso forEach per ciclare tutti gli oggetti e procedere.
	icone.forEach(oggetto => {
		// creo nodo dentro contenuto
		contenuto += `<div class="box-icons">
						<i class="${oggetto.family} ${oggetto.prefix}${oggetto.name}"; style="color:${oggetto.color}"></i>
						<p class="text">${oggetto.name}</p>
						</div>`
	});
	// Visualizzo su pagina i box delle icone('box-icons') all'interno di contenitoreBoxIcons('boxes-container')
	contenitoreBoxIcons.innerHTML = contenuto;
	
}