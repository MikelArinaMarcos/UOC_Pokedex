const body = document.querySelector('#body');

let themeColor =window.localStorage.getItem('tema');
if(themeColor){
    selectTheme(themeColor);
    updateRadio(themeColor);
}


function selectTheme(theme){
    switch(theme){
        case 'dark':
            console.log('aplicar dark');
            body.classList.remove('light');
            body.classList.add('dark');
            window.localStorage.setItem('tema','dark');
            break;
        case 'light':
            console.log('aplicar light');
            body.classList.remove('dark');
            body.classList.add('light');
            window.localStorage.setItem('tema','light');
            break;
        default:
            break;
    }
}


function updateRadio(value){
    switch (value) {
        case 'dark':
            document.getElementById('radioDark').checked = true;
            document.getElementById('radioLight').checked = false;
            break;
        case 'light':
            document.getElementById('radioLight').checked = true;
            document.getElementById('radioDark').checked = false;
            break;
        default:
            document.getElementById('radioLight').checked = true;
            document.getElementById('radioDark').checked = false;
            break;
    }
}

const radios = document.querySelectorAll('input[name="theme"]');
radios.forEach( x => {
    x.addEventListener('change', function(){
        selectTheme(this.value);
    })
});







//          CONSTANTES     \\

//Carta 1
const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');





const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const v1 = getRandomInt(150);

fetch(`https://pokeapi.co/api/v2/pokemon/${v1}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound());

const renderPokemonData = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `Nº ${data.id}`;
    setCardColor(types);
    renderPokemonTypes(types);
    renderPokemonStats(stats);
}


const setCardColor = types => {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
    pokeImg.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg.style.backgroundSize = ' 5px 5px';
}

const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}

const renderNotFound = () => {
    pokeName.textContent = 'No encontrado';
    pokeImg.setAttribute('src', 'poke-shadow.png');
    pokeImg.style.background =  '#fff';
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.textContent = '';
}







const pokeCard2 = document.querySelector('[data-poke-card2]');
const pokeName2 = document.querySelector('[data-poke-name2]');
const pokeImg2 = document.querySelector('[data-poke-img2]');
const pokeImgContainer2 = document.querySelector('[data-poke-img-container2]');
const pokeId2 = document.querySelector('[data-poke-id2]');
const pokeTypes2 = document.querySelector('[data-poke-types2]');
const pokeStats2 = document.querySelector('[data-poke-stats2]');

const typeColors2 = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};

function getRandomInt2(max) {
    return Math.floor(Math.random() * max);
  }

const v2 = getRandomInt2(150);
console.log(v2);

fetch(`https://pokeapi.co/api/v2/pokemon/${v2}`)
        .then(data => data.json())
        .then(response => renderPokemonData2(response))
        .catch(err => renderNotFound2());

const renderPokemonData2 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName2.textContent = data.name;
    pokeImg2.setAttribute('src', sprite);
    pokeId2.textContent = `Nº ${data.id}`;
    setCardColor(types);
    renderPokemonTypes2(types);
    renderPokemonStats2(stats);
}


const setCardColor2 = types => {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
    pokeImg2.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg2.style.backgroundSize = ' 5px 5px';
}

const renderPokemonTypes2 = types => {
    pokeTypes2.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes2.appendChild(typeTextElement);
    });
}

const renderPokemonStats2 = stats => {
    pokeStats2.innerHTML = '';
    stats.forEach(stat => {
        const statElement2 = document.createElement("div");
        const statElementName2 = document.createElement("div");
        const statElementAmount2 = document.createElement("div");
        statElementName2.textContent = stat.stat.name;
        statElementAmount2.textContent = stat.base_stat;
        statElement2.appendChild(statElementName2);
        statElement2.appendChild(statElementAmount2);
        pokeStats2.appendChild(statElement2);
    });
}

const renderNotFound2 = () => {
    pokeName2.textContent = 'No encontrado';
    pokeImg2.setAttribute('src', 'poke-shadow.png');
    pokeImg2.style.background =  '#fff';
    pokeTypes2.innerHTML = '';
    pokeStats2.innerHTML = '';
    pokeId2.textContent = '';
}