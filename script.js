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

// Carta 1
const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');

// Carta 2
const pokeCard2 = document.querySelector('[data-poke-card2]');
const pokeName2 = document.querySelector('[data-poke-name2]');
const pokeImg2 = document.querySelector('[data-poke-img2]');
const pokeImgContainer2 = document.querySelector('[data-poke-img-container2]');
const pokeId2 = document.querySelector('[data-poke-id2]');
const pokeTypes2 = document.querySelector('[data-poke-types2]');
const pokeStats2 = document.querySelector('[data-poke-stats2]');

// Carta 3
const pokeCard3 = document.querySelector('[data-poke-card3]');
const pokeName3 = document.querySelector('[data-poke-name3]');
const pokeImg3 = document.querySelector('[data-poke-img3]');
const pokeImgContainer3 = document.querySelector('[data-poke-img-container3]');
const pokeId3 = document.querySelector('[data-poke-id3]');
const pokeTypes3 = document.querySelector('[data-poke-types3]');
const pokeStats3 = document.querySelector('[data-poke-stats3]');

// Carta 4
const pokeCard4 = document.querySelector('[data-poke-card4]');
const pokeName4 = document.querySelector('[data-poke-name4]');
const pokeImg4 = document.querySelector('[data-poke-img4]');
const pokeImgContainer4 = document.querySelector('[data-poke-img-container4]');
const pokeId4 = document.querySelector('[data-poke-id4]');
const pokeTypes4 = document.querySelector('[data-poke-types4]');
const pokeStats4 = document.querySelector('[data-poke-stats4]');

// Carta 5
const pokeCard5 = document.querySelector('[data-poke-card5]');
const pokeName5 = document.querySelector('[data-poke-name5]');
const pokeImg5 = document.querySelector('[data-poke-img5]');
const pokeImgContainer5 = document.querySelector('[data-poke-img-container5]');
const pokeId5 = document.querySelector('[data-poke-id5]');
const pokeTypes5 = document.querySelector('[data-poke-types5]');
const pokeStats5 = document.querySelector('[data-poke-stats5]');

// Carta 6
const pokeCard6 = document.querySelector('[data-poke-card6]');
const pokeName6 = document.querySelector('[data-poke-name6]');
const pokeImg6 = document.querySelector('[data-poke-img6]');
const pokeImgContainer6 = document.querySelector('[data-poke-img-container6]');
const pokeId6 = document.querySelector('[data-poke-id6]');
const pokeTypes6 = document.querySelector('[data-poke-types6]');
const pokeStats6 = document.querySelector('[data-poke-stats6]');

// Carta 7
const pokeCard7 = document.querySelector('[data-poke-card7]');
const pokeName7 = document.querySelector('[data-poke-name7]');
const pokeImg7 = document.querySelector('[data-poke-img7]');
const pokeImgContainer7 = document.querySelector('[data-poke-img-container7]');
const pokeId7 = document.querySelector('[data-poke-id7]');
const pokeTypes7 = document.querySelector('[data-poke-types7]');
const pokeStats7 = document.querySelector('[data-poke-stats7]');

// Carta 8
const pokeCard8 = document.querySelector('[data-poke-card8]');
const pokeName8 = document.querySelector('[data-poke-name8]');
const pokeImg8 = document.querySelector('[data-poke-img8]');
const pokeImgContainer8 = document.querySelector('[data-poke-img-container8]');
const pokeId8 = document.querySelector('[data-poke-id8]');
const pokeTypes8 = document.querySelector('[data-poke-types8]');
const pokeStats8 = document.querySelector('[data-poke-stats8]');

// Carta 9
const pokeCard9 = document.querySelector('[data-poke-card9]');
const pokeName9 = document.querySelector('[data-poke-name9]');
const pokeImg9 = document.querySelector('[data-poke-img9]');
const pokeImgContainer9 = document.querySelector('[data-poke-img-container9]');
const pokeId9 = document.querySelector('[data-poke-id9]');
const pokeTypes9 = document.querySelector('[data-poke-types9]');
const pokeStats9 = document.querySelector('[data-poke-stats9]');

// Carta 10
const pokeCard10 = document.querySelector('[data-poke-card10]');
const pokeName10 = document.querySelector('[data-poke-name10]');
const pokeImg10 = document.querySelector('[data-poke-img10]');
const pokeImgContainer10 = document.querySelector('[data-poke-img-container10]');
const pokeId10 = document.querySelector('[data-poke-id10]');
const pokeTypes10 = document.querySelector('[data-poke-types10]');
const pokeStats10 = document.querySelector('[data-poke-stats10]');

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