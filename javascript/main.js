
//opdracht 1
const person = {
    firstName: 'Donald',
    age: 18,
    lastName: 'Duck',
    course: 'Mbo 4',    
    score: 95,
};

//opdracht 2
const facebook = {
    userName: 'Jan Peter',
    title: 'Mijn naam is Jan Peter',
    story: 'dit is mijn verhaal',
    date: '13 November 2023',
    views: 500,
};

//opdracht 3

const pizza = {
    title: 'pizza',
    description: 'pizza met kip en kaas',
    healthy: false,
};

const salad = {
    title: 'salade',
    description: 'salade met dressing',
    healthy: true,
};

const fries = {
    title: 'patat',
    description: 'patat met saus naar keuze',
    healthy: false,
};

const eatRecipes = [pizza, salad, fries];

for (let i = 0; i < eatRecipes.length; i++) {
    const recipe = eatRecipes[i];

    // Hier iets doen om op de webpagina te laten zien
    showProduct(recipe)
}

function showProduct(product) {
    // code om product te laten zien
}