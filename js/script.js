const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];


//Creiamo una select con i tipi di icone e usiamola per filtrare le icone ===>>> 
//===>>> con un funzione che filtra l'array (di oggetti) originale e che ritorna un NUOVO array
// a seconda della scelta (del type).

// Return a value that coerces to true to keep the element, or to false otherwise.

/**
 * a seconda della scelta (del type).
 * 
 * @param {*} choice ['all', 'user', 'vegetable', 'user'];
 * @param {*} orginList 
 */
function filterIcons (choice, orginList) {

    return orginList.filter((icon) => {

        if(choice === 'all'){
            return true
        }

        if(choice === icon.type){
            return true;
        }

        return false;
    })
}




const filteredIcons = filterIcons('all', icons);


// Partendo dalla seguente struttura dati ,
// mostriamo in pagina tutte le icone disponibili come da layout.
//Attreverso un forEach.


// Coloriamo le icone per tipo con l'aggiunta del ${type},(linea 117),
// andando a definirla poi nel css.

const HtmlContainer = document.querySelector('.icons-box');


icons.forEach((icon) => {

    const{name, prefix, family, type} = icon;

    HtmlContainer.innerHTML += `
        <div class="icon-content col">
            <div class="icon-content-inside">
                <div class="icon ${type}">
                    <i class="${family} ${prefix}${name}"></i>
                </div>
                <div class="name-icon">
                    ${name}
                </div>
            </div>
        </div>

    `
});

//--------------------------------------//






