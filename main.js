const acceuil = document.querySelector ('.acceuil');
const citation = document.querySelector('.citation');
const apropos = document.querySelector('.apropos');
const citation_gene = document.querySelector('.Citation-generator');
const auteur1 = document.querySelector('.auteur1');



acceuil.addEventListener('click', () => {
    window.location.href ="citation generateur web.html";
});

citation.addEventListener('click', () => {
	window.location.href= 'citations.html';
});


async function citation_generator() {
    const url = 'https://inspirational-quote-generator.p.rapidapi.com/quoteGenerator';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b7c9b4aea6msh0b953b86d93121ep13ae74jsnea60029e00c5',
            'x-rapidapi-host': 'inspirational-quote-generator.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Assume the API returns JSON
        const quote = result.quote; // Adjust according to the actual API response structure

        // Create a new paragraph element
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        p.textContent = quote;
        h1.textContent= "Citation générer";
        h1.addClasslist = 'h1'; // Set the text content to the fetched quote

        // Find the div and append the new paragraph
        const citationGeneDiv = document.querySelector('.Citation-generator');
        citationGeneDiv.innerHTML = ''; // Optional: Clear any existing content
        citationGeneDiv.appendChild(h1);
        citationGeneDiv.appendChild(p);
    } catch (error) {
        console.error('Error fetching the quote:', error);
    }
};

async function citations_multiple (){
	const url = 'https://inspirational-quote-generator.p.rapidapi.com/quoteGenerator';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b7c9b4aea6msh0b953b86d93121ep13ae74jsnea60029e00c5',
            'x-rapidapi-host': 'inspirational-quote-generator.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Assume the API returns JSON
        const quote = result.quote; // Adjust according to the actual API response structure

        const auteur = document.querySelector('.auteur');
        const p = document.createElement('p')
        p.textContent = quote; 
        auteur.innerHTML = ''; 
        auteur.appendChild(p);


        // Create a new paragraph element
    } catch (error) {
        console.error('Error fetching the quote:', error);
    }
}

async function citations_multiple (){
	const url = 'https://inspirational-quote-generator.p.rapidapi.com/quoteGenerator';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b7c9b4aea6msh0b953b86d93121ep13ae74jsnea60029e00c5',
            'x-rapidapi-host': 'inspirational-quote-generator.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Assume the API returns JSON
        const quote = result.quote; // Adjust according to the actual API response structure

        const auteur1 = document.querySelector('#auteur1');
        const p = document.createElement('p')
        p.textContent = quote; 
        auteur.innerHTML = ''; 
        auteur1.appendChild(p);


        // Create a new paragraph element
    } catch (error) {
        console.error('Error fetching the quote:', error);
    }
}

citation_generator();
citations_multiple();
