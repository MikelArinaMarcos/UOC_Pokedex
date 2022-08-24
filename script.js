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
const pokeName = document.querySelector('[nombrePokemon]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');
const pokeStats_2 = document.querySelector('[data-poke-stats-2]');

// Carta 2
const pokeCard2 = document.querySelector('[data-poke-card2]');
const pokeName2 = document.querySelector('[data-poke-name2]');
const pokeImg2 = document.querySelector('[data-poke-img2]');
const pokeImgContainer2 = document.querySelector('[data-poke-img-container2]');
const pokeId2 = document.querySelector('[data-poke-id2]');
const pokeTypes2 = document.querySelector('[data-poke-types2]');
const pokeStats2 = document.querySelector('[data-poke-stats2]');
const pokeStats2_2 = document.querySelector('[data-poke-stats-2_2]');

// Carta 3
const pokeCard3 = document.querySelector('[data-poke-card3]');
const pokeName3 = document.querySelector('[data-poke-name3]');
const pokeImg3 = document.querySelector('[data-poke-img3]');
const pokeImgContainer3 = document.querySelector('[data-poke-img-container3]');
const pokeId3 = document.querySelector('[data-poke-id3]');
const pokeTypes3 = document.querySelector('[data-poke-types3]');
const pokeStats3 = document.querySelector('[data-poke-stats3]');
const pokeStats3_2 = document.querySelector('[data-poke-stats-2_3]');

// Carta 4
const pokeCard4 = document.querySelector('[data-poke-card4]');
const pokeName4 = document.querySelector('[data-poke-name4]');
const pokeImg4 = document.querySelector('[data-poke-img4]');
const pokeImgContainer4 = document.querySelector('[data-poke-img-container4]');
const pokeId4 = document.querySelector('[data-poke-id4]');
const pokeTypes4 = document.querySelector('[data-poke-types4]');
const pokeStats4 = document.querySelector('[data-poke-stats4]');
const pokeStats4_2 = document.querySelector('[data-poke-stats-2_4]');

// Carta 5
const pokeCard5 = document.querySelector('[data-poke-card5]');
const pokeName5 = document.querySelector('[data-poke-name5]');
const pokeImg5 = document.querySelector('[data-poke-img5]');
const pokeImgContainer5 = document.querySelector('[data-poke-img-container5]');
const pokeId5 = document.querySelector('[data-poke-id5]');
const pokeTypes5 = document.querySelector('[data-poke-types5]');
const pokeStats5 = document.querySelector('[data-poke-stats5]');
const pokeStats5_2 = document.querySelector('[data-poke-stats-2_5]');

// Carta 6
const pokeCard6 = document.querySelector('[data-poke-card6]');
const pokeName6 = document.querySelector('[data-poke-name6]');
const pokeImg6 = document.querySelector('[data-poke-img6]');
const pokeImgContainer6 = document.querySelector('[data-poke-img-container6]');
const pokeId6 = document.querySelector('[data-poke-id6]');
const pokeTypes6 = document.querySelector('[data-poke-types6]');
const pokeStats6 = document.querySelector('[data-poke-stats6]');
const pokeStats6_2 = document.querySelector('[data-poke-stats-2_6]');

// Carta 7
const pokeCard7 = document.querySelector('[data-poke-card7]');
const pokeName7 = document.querySelector('[data-poke-name7]');
const pokeImg7 = document.querySelector('[data-poke-img7]');
const pokeImgContainer7 = document.querySelector('[data-poke-img-container7]');
const pokeId7 = document.querySelector('[data-poke-id7]');
const pokeTypes7 = document.querySelector('[data-poke-types7]');
const pokeStats7 = document.querySelector('[data-poke-stats7]');
const pokeStats7_2 = document.querySelector('[data-poke-stats-2_7]');

// Carta 8
const pokeCard8 = document.querySelector('[data-poke-card8]');
const pokeName8 = document.querySelector('[data-poke-name8]');
const pokeImg8 = document.querySelector('[data-poke-img8]');
const pokeImgContainer8 = document.querySelector('[data-poke-img-container8]');
const pokeId8 = document.querySelector('[data-poke-id8]');
const pokeTypes8 = document.querySelector('[data-poke-types8]');
const pokeStats8 = document.querySelector('[data-poke-stats8]');
const pokeStats8_2 = document.querySelector('[data-poke-stats-2_8]');

// Carta 9
const pokeCard9 = document.querySelector('[data-poke-card9]');
const pokeName9 = document.querySelector('[data-poke-name9]');
const pokeImg9 = document.querySelector('[data-poke-img9]');
const pokeImgContainer9 = document.querySelector('[data-poke-img-container9]');
const pokeId9 = document.querySelector('[data-poke-id9]');
const pokeTypes9 = document.querySelector('[data-poke-types9]');
const pokeStats9 = document.querySelector('[data-poke-stats9]');
const pokeStats9_2 = document.querySelector('[data-poke-stats-2_9]');

// Carta 10
const pokeCard10 = document.querySelector('[data-poke-card10]');
const pokeName10 = document.querySelector('[data-poke-name10]');
const pokeImg10 = document.querySelector('[data-poke-img10]');
const pokeImgContainer10 = document.querySelector('[data-poke-img-container10]');
const pokeId10 = document.querySelector('[data-poke-id10]');
const pokeTypes10 = document.querySelector('[data-poke-types10]');
const pokeStats10 = document.querySelector('[data-poke-stats10]');
const pokeStats10_2 = document.querySelector('[data-poke-stats-2_10]');

/*    COLORES   */
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
const typeColors3 = {
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
const typeColors4 = {
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
const typeColors5 = {
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
const typeColors6 = {
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
const typeColors7 = {
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
const typeColors8 = {
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
const typeColors9 = {
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
const typeColors10 = {
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


/* GENERADOR NÚMEROS ALEATORIOS  */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function getRandomInt2(max) {
    return Math.floor(Math.random() * max);
  }
function getRandomInt3(max) {
    return Math.floor(Math.random() * max);
}
function getRandomInt4(max) {
    return Math.floor(Math.random() * max);
}
function getRandomInt5(max) {
    return Math.floor(Math.random() * max);
}
function getRandomInt6(max) {
    return Math.floor(Math.random() * max);
}
function getRandomInt7(max) {
    return Math.floor(Math.random() * max);
}
function getRandomInt8(max) {
    return Math.floor(Math.random() * max);
}
function getRandomInt9(max) {
    return Math.floor(Math.random() * max);
}
function getRandomInt10(max) {
    return Math.floor(Math.random() * max);
}
const v1 = getRandomInt(1154);
const v2 = getRandomInt2(1154);
const v3 = getRandomInt3(1154);
const v4 = getRandomInt4(1154);
const v5 = getRandomInt5(1154);
const v6 = getRandomInt6(1154);
const v7 = getRandomInt7(1154);
const v8 = getRandomInt8(1154);
const v9 = getRandomInt9(1154);
const v10 = getRandomInt10(1154);


/*  BÚSQUEDA EN API REST  */
fetch(`https://pokeapi.co/api/v2/pokemon/${v1}`)
    .then(data => data.json())
    .then(response => cargaCarta_1(response))
    .catch(err => renderNotFound());
fetch(`https://pokeapi.co/api/v2/pokemon/${v2}`)
    .then(data => data.json())
    .then(response => cargaCarta_2(response))
    .catch(err => renderNotFound2());
fetch(`https://pokeapi.co/api/v2/pokemon/${v3}`)
    .then(data => data.json())
    .then(response => cargaCarta_3(response))
    .catch(err => renderNotFound3());
fetch(`https://pokeapi.co/api/v2/pokemon/${v4}`)
    .then(data => data.json())
    .then(response => cargaCarta_4(response))
    .catch(err => renderNotFound4());
fetch(`https://pokeapi.co/api/v2/pokemon/${v5}`)
    .then(data => data.json())
    .then(response => cargaCarta_5(response))
    .catch(err => renderNotFound5());
fetch(`https://pokeapi.co/api/v2/pokemon/${v6}`)
    .then(data => data.json())
    .then(response => cargaCarta_6(response))
    .catch(err => renderNotFound6());
fetch(`https://pokeapi.co/api/v2/pokemon/${v7}`)
    .then(data => data.json())
    .then(response => cargaCarta_7(response))
    .catch(err => renderNotFound7());
fetch(`https://pokeapi.co/api/v2/pokemon/${v8}`)
    .then(data => data.json())
    .then(response => cargaCarta_8(response))
    .catch(err => renderNotFound8());
fetch(`https://pokeapi.co/api/v2/pokemon/${v9}`)
    .then(data => data.json())
    .then(response => cargaCarta_9(response))
    .catch(err => renderNotFound9());
fetch(`https://pokeapi.co/api/v2/pokemon/${v10}`)
    .then(data => data.json())
    .then(response => cargaCarta_10(response))
    .catch(err => renderNotFound10());


fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
    .then(data => data.json())
    .then(response => obtenMaximo(response))


/*****************************************************/ 
/*           CARGAR CARTA EN index.html              */
/*****************************************************/

// Carta 1
const cargaCarta_1 = data => { 
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeStats.textContent = `Attack: ${data.stats[1].base_stat}`;
    pokeStats_2.textContent = `Defense: ${data.stats[2].base_stat}`;
    setCardColor(types);
}
const cargaCarta_2 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName2.textContent = data.name;
    pokeImg2.setAttribute('src', sprite);
    pokeStats2.textContent = `Attack: ${data.stats[1].base_stat}`;
    pokeStats2_2.textContent = `Defense: ${data.stats[2].base_stat}`;
    setCardColor2(types);
}
const cargaCarta_3 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName3.textContent = data.name;
    pokeImg3.setAttribute('src', sprite);
    pokeStats3.textContent = `Attack: ${data.stats[1].base_stat}`;
    pokeStats3_2.textContent = `Defense: ${data.stats[2].base_stat}`;
    setCardColor3(types);
}
const cargaCarta_4 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName4.textContent = data.name;
    pokeImg4.setAttribute('src', sprite);
    pokeStats4.textContent = `Attack: ${data.stats[1].base_stat}`;
    pokeStats4_2.textContent = `Defense: ${data.stats[2].base_stat}`;
    setCardColor4(types);
}
const cargaCarta_5 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName5.textContent = data.name;
    pokeImg5.setAttribute('src', sprite);
    pokeStats5.textContent = `Attack: ${data.stats[1].base_stat}`;
    pokeStats5_2.textContent = `Defense: ${data.stats[2].base_stat}`;
    setCardColor5(types);
}
const cargaCarta_6 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName6.textContent = data.name;
    pokeImg6.setAttribute('src', sprite);
    pokeStats6.textContent = `Attack: ${data.stats[1].base_stat}`;
    pokeStats6_2.textContent = `Defense: ${data.stats[2].base_stat}`;
    setCardColor6(types);
}
const cargaCarta_7 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName7.textContent = data.name;
    pokeImg7.setAttribute('src', sprite);
    pokeStats7.textContent = `Attack: ${data.stats[1].base_stat}`;
    pokeStats7_2.textContent = `Defense: ${data.stats[2].base_stat}`;
    setCardColor7(types);
}
const cargaCarta_8 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName8.textContent = data.name;
    pokeImg8.setAttribute('src', sprite);
    pokeStats8.textContent = `Attack: ${data.stats[1].base_stat}`;
    pokeStats8_2.textContent = `Defense: ${data.stats[2].base_stat}`;
    setCardColor8(types);
}
const cargaCarta_9 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName9.textContent = data.name;
    pokeImg9.setAttribute('src', sprite);
    pokeStats9.textContent = `Attack: ${data.stats[1].base_stat}`;
    pokeStats9_2.textContent = `Defense: ${data.stats[2].base_stat}`;
    setCardColor9(types);
}
const cargaCarta_10 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName10.textContent = data.name;
    pokeImg10.setAttribute('src', sprite);
    pokeStats10.textContent = `Attack: ${data.stats[1].base_stat}`;
    pokeStats10_2.textContent = `Defense: ${data.stats[2].base_stat}`;
    setCardColor10(types);
}


/*  RENDER POKEMON DATA  */
const renderPokemonData = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    //pokeId.textContent = `Nº ${data.id}`;
    pokeStats.textContent = `Attack: ${data.stats[1].base_stat}`;
    pokeStats_2.textContent = `Defense: ${data.stats[2].base_stat}`;
    setCardColor(types);
    //renderPokemonTypes(types);
    //renderPokemonStats(stats);
}
const renderPokemonData2 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName2.textContent = data.name;
    pokeImg2.setAttribute('src', sprite);
    pokeId2.textContent = `Nº ${data.id}`;
    setCardColor2(types);
    renderPokemonTypes2(types);
    renderPokemonStats2(stats);
}
const renderPokemonData3 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName3.textContent = data.name;
    pokeImg3.setAttribute('src', sprite);
    pokeId3.textContent = `Nº ${data.id}`;
    setCardColor3(types);
    renderPokemonTypes3(types);
    renderPokemonStats3(stats);
}
const renderPokemonData4 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName4.textContent = data.name;
    pokeImg4.setAttribute('src', sprite);
    pokeId4.textContent = `Nº ${data.id}`;
    setCardColor4(types);
    renderPokemonTypes4(types);
    renderPokemonStats4(stats);
}
const renderPokemonData5 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName5.textContent = data.name;
    pokeImg5.setAttribute('src', sprite);
    pokeId5.textContent = `Nº ${data.id}`;
    setCardColor5(types);
    renderPokemonTypes5(types);
    renderPokemonStats5(stats);
}
const renderPokemonData6 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName6.textContent = data.name;
    pokeImg6.setAttribute('src', sprite);
    pokeId6.textContent = `Nº ${data.id}`;
    setCardColor6(types);
    renderPokemonTypes6(types);
    renderPokemonStats6(stats);
}
const renderPokemonData7 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName7.textContent = data.name;
    pokeImg7.setAttribute('src', sprite);
    pokeId7.textContent = `Nº ${data.id}`;
    setCardColor7(types);
    renderPokemonTypes7(types);
    renderPokemonStats7(stats);
}
const renderPokemonData8 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName8.textContent = data.name;
    pokeImg8.setAttribute('src', sprite);
    pokeId8.textContent = `Nº ${data.id}`;
    setCardColor8(types);
    renderPokemonTypes8(types);
    renderPokemonStats8(stats);
}
const renderPokemonData9 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName9.textContent = data.name;
    pokeImg9.setAttribute('src', sprite);
    pokeId9.textContent = `Nº ${data.id}`;
    setCardColor9(types);
    renderPokemonTypes9(types);
    renderPokemonStats9(stats);
}
const renderPokemonData10 = data => {
    const sprite =  data.sprites.front_default;
    const { stats, types } = data;

    pokeName10.textContent = data.name;
    pokeImg10.setAttribute('src', sprite);
    pokeId10.textContent = `Nº ${data.id}`;
    setCardColor10(types);
    renderPokemonTypes10(types);
    renderPokemonStats10(stats);
}


/*  SET CARD COLOR  */
const setCardColor = types => {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
    pokeImg.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg.style.backgroundSize = ' 5px 5px';
}
const setCardColor2 = types => {
    const colorOne = typeColors2[types[0].type.name];
    const colorTwo = types[1] ? typeColors2[types[1].type.name] : typeColors2.default;
    pokeImg2.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg2.style.backgroundSize = ' 5px 5px';
}
const setCardColor3 = types => {
    const colorOne = typeColors3[types[0].type.name];
    const colorTwo = types[1] ? typeColors3[types[1].type.name] : typeColors3.default;
    pokeImg3.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg3.style.backgroundSize = ' 5px 5px';
}
const setCardColor4 = types => {
    const colorOne = typeColors4[types[0].type.name];
    const colorTwo = types[1] ? typeColors4[types[1].type.name] : typeColors4.default;
    pokeImg4.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg4.style.backgroundSize = ' 5px 5px';
}
const setCardColor5 = types => {
    const colorOne = typeColors5[types[0].type.name];
    const colorTwo = types[1] ? typeColors5[types[1].type.name] : typeColors5.default;
    pokeImg5.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg5.style.backgroundSize = ' 5px 5px';
}
const setCardColor6 = types => {
    const colorOne = typeColors6[types[0].type.name];
    const colorTwo = types[1] ? typeColors6[types[1].type.name] : typeColors6.default;
    pokeImg6.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg6.style.backgroundSize = ' 5px 5px';
}
const setCardColor7 = types => {
    const colorOne = typeColors7[types[0].type.name];
    const colorTwo = types[1] ? typeColors7[types[1].type.name] : typeColors7.default;
    pokeImg7.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg7.style.backgroundSize = ' 5px 5px';
}
const setCardColor8 = types => {
    const colorOne = typeColors8[types[0].type.name];
    const colorTwo = types[1] ? typeColors8[types[1].type.name] : typeColors8.default;
    pokeImg8.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg8.style.backgroundSize = ' 5px 5px';
}
const setCardColor9 = types => {
    const colorOne = typeColors9[types[0].type.name];
    const colorTwo = types[1] ? typeColors9[types[1].type.name] : typeColors9.default;
    pokeImg9.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg9.style.backgroundSize = ' 5px 5px';
}
const setCardColor10 = types => {
    const colorOne = typeColors10[types[0].type.name];
    const colorTwo = types[1] ? typeColors10[types[1].type.name] : typeColors10.default;
    pokeImg10.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg10.style.backgroundSize = ' 5px 5px';
}


/*   RENDER POKEMON TYPES   */
const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}
const renderPokemonTypes2 = types => {
    pokeTypes2.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors2[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes2.appendChild(typeTextElement);
    });
}
const renderPokemonTypes3 = types => {
    pokeTypes3.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors3[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes3.appendChild(typeTextElement);
    });
}
const renderPokemonTypes4 = types => {
    pokeTypes4.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors4[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes4.appendChild(typeTextElement);
    });
}
const renderPokemonTypes5 = types => {
    pokeTypes5.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors5[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes5.appendChild(typeTextElement);
    });
}
const renderPokemonTypes6 = types => {
    pokeTypes6.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors6[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes6.appendChild(typeTextElement);
    });
}
const renderPokemonTypes7 = types => {
    pokeTypes7.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors7[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes7.appendChild(typeTextElement);
    });
}
const renderPokemonTypes8 = types => {
    pokeTypes8.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors8[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes8.appendChild(typeTextElement);
    });
}
const renderPokemonTypes9 = types => {
    pokeTypes9.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors9[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes9.appendChild(typeTextElement);
    });
}
const renderPokemonTypes10 = types => {
    pokeTypes10.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors10[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes10.appendChild(typeTextElement);
    });
}


function ataque(){

}


/*   RENDER POKEMON STATS   */   
const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';

    stats.forEach (stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
            console.log(statElementName);
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
const renderPokemonStats3 = stats => {
    pokeStats3.innerHTML = '';
    stats.forEach(stat => {
        const statElement3 = document.createElement("div");
        const statElementName3 = document.createElement("div");
        const statElementAmount3 = document.createElement("div");
        statElementName3.textContent = stat.stat.name;
        statElementAmount3.textContent = stat.base_stat;
        statElement3.appendChild(statElementName3);
        statElement3.appendChild(statElementAmount3);
        pokeStats3.appendChild(statElement3);
    });
}
const renderPokemonStats4 = stats => {
    pokeStats4.innerHTML = '';
    stats.forEach(stat => {
        const statElement4 = document.createElement("div");
        const statElementName4 = document.createElement("div");
        const statElementAmount4 = document.createElement("div");
        statElementName4.textContent = stat.stat.name;
        statElementAmount4.textContent = stat.base_stat;
        statElement4.appendChild(statElementName4);
        statElement4.appendChild(statElementAmount4);
        pokeStats4.appendChild(statElement4);
    });
}
const renderPokemonStats5 = stats => {
    pokeStats5.innerHTML = '';
    stats.forEach(stat => {
        const statElement5 = document.createElement("div");
        const statElementName5 = document.createElement("div");
        const statElementAmount5 = document.createElement("div");
        statElementName5.textContent = stat.stat.name;
        statElementAmount5.textContent = stat.base_stat;
        statElement5.appendChild(statElementName5);
        statElement5.appendChild(statElementAmount5);
        pokeStats5.appendChild(statElement5);
    });
}
const renderPokemonStats6 = stats => {
    pokeStats6.innerHTML = '';
    stats.forEach(stat => {
        const statElement6 = document.createElement("div");
        const statElementName6 = document.createElement("div");
        const statElementAmount6 = document.createElement("div");
        statElementName6.textContent = stat.stat.name;
        statElementAmount6.textContent = stat.base_stat;
        statElement6.appendChild(statElementName6);
        statElement6.appendChild(statElementAmount6);
        pokeStats6.appendChild(statElement6);
    });
}
const renderPokemonStats7 = stats => {
    pokeStats7.innerHTML = '';
    stats.forEach(stat => {
        const statElement7 = document.createElement("div");
        const statElementName7 = document.createElement("div");
        const statElementAmount7 = document.createElement("div");
        statElementName7.textContent = stat.stat.name;
        statElementAmount7.textContent = stat.base_stat;
        statElement7.appendChild(statElementName7);
        statElement7.appendChild(statElementAmount7);
        pokeStats7.appendChild(statElement7);
    });
}
const renderPokemonStats8 = stats => {
    pokeStats8.innerHTML = '';
    stats.forEach(stat => {
        const statElement8 = document.createElement("div");
        const statElementName8 = document.createElement("div");
        const statElementAmount8 = document.createElement("div");
        statElementName8.textContent = stat.stat.name;
        statElementAmount8.textContent = stat.base_stat;
        statElement8.appendChild(statElementName8);
        statElement8.appendChild(statElementAmount8);
        pokeStats8.appendChild(statElement8);
    });
}
const renderPokemonStats9 = stats => {
    pokeStats9.innerHTML = '';
    stats.forEach(stat => {
        const statElement9 = document.createElement("div");
        const statElementName9 = document.createElement("div");
        const statElementAmount9 = document.createElement("div");
        statElementName9.textContent = stat.stat.name;
        statElementAmount9.textContent = stat.base_stat;
        statElement9.appendChild(statElementName9);
        statElement9.appendChild(statElementAmount9);
        pokeStats9.appendChild(statElement9);
    });
}
const renderPokemonStats10 = stats => {
    pokeStats10.innerHTML = '';
    stats.forEach(stat => {
        const statElement10 = document.createElement("div");
        const statElementName10 = document.createElement("div");
        const statElementAmount10 = document.createElement("div");
        statElementName10.textContent = stat.stat.name;
        statElementAmount10.textContent = stat.base_stat;
        statElement10.appendChild(statElementName10);
        statElement10.appendChild(statElementAmount10);
        pokeStats10.appendChild(statElement10);
    });
}


/*   RENDER NOT FOUND   */
const renderNotFound = () => {
    pokeName.textContent = 'No encontrado';
    pokeImg.setAttribute('src', 'poke-shadow.png');
    pokeImg.style.background =  '#fff';
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.textContent = '';
}
const renderNotFound2 = () => {
    pokeName2.textContent = 'No encontrado';
    pokeImg2.setAttribute('src', 'poke-shadow.png');
    pokeImg2.style.background =  '#fff';
    pokeTypes2.innerHTML = '';
    pokeStats2.innerHTML = '';
    pokeId2.textContent = '';
}
const renderNotFound3 = () => {
    pokeName3.textContent = 'No encontrado';
    pokeImg3.setAttribute('src', 'poke-shadow.png');
    pokeImg3.style.background =  '#fff';
    pokeTypes3.innerHTML = '';
    pokeStats3.innerHTML = '';
    pokeId3.textContent = '';
}
const renderNotFound4 = () => {
    pokeName4.textContent = 'No encontrado';
    pokeImg4.setAttribute('src', 'poke-shadow.png');
    pokeImg4.style.background =  '#fff';
    pokeTypes4.innerHTML = '';
    pokeStats4.innerHTML = '';
    pokeId4.textContent = '';
}
const renderNotFound5 = () => {
    pokeName5.textContent = 'No encontrado';
    pokeImg5.setAttribute('src', 'poke-shadow.png');
    pokeImg5.style.background =  '#fff';
    pokeTypes5.innerHTML = '';
    pokeStats5.innerHTML = '';
    pokeId5.textContent = '';
}
const renderNotFound6 = () => {
    pokeName6.textContent = 'No encontrado';
    pokeImg6.setAttribute('src', 'poke-shadow.png');
    pokeImg6.style.background =  '#fff';
    pokeTypes6.innerHTML = '';
    pokeStats6.innerHTML = '';
    pokeId6.textContent = '';
}
const renderNotFound7 = () => {
    pokeName7.textContent = 'No encontrado';
    pokeImg7.setAttribute('src', 'poke-shadow.png');
    pokeImg7.style.background =  '#fff';
    pokeTypes7.innerHTML = '';
    pokeStats7.innerHTML = '';
    pokeId7.textContent = '';
}
const renderNotFound8 = () => {
    pokeName8.textContent = 'No encontrado';
    pokeImg8.setAttribute('src', 'poke-shadow.png');
    pokeImg8.style.background =  '#fff';
    pokeTypes8.innerHTML = '';
    pokeStats8.innerHTML = '';
    pokeId8.textContent = '';
}
const renderNotFound9 = () => {
    pokeName9.textContent = 'No encontrado';
    pokeImg9.setAttribute('src', 'poke-shadow.png');
    pokeImg9.style.background =  '#fff';
    pokeTypes9.innerHTML = '';
    pokeStats9.innerHTML = '';
    pokeId9.textContent = '';
}
const renderNotFound10 = () => {
    pokeName10.textContent = 'No encontrado';
    pokeImg10.setAttribute('src', 'poke-shadow.png');
    pokeImg10.style.background =  '#fff';
    pokeTypes10.innerHTML = '';
    pokeStats10.innerHTML = '';
    pokeId10.textContent = '';
}



<<<<<<< HEAD
//    SCRIPT PARA FIGHT.HTML    \\

// Funciones para voltear las cartas
function volteoCarta1(){
    let rotacion= (360/100) * 2.5; // calculo el tiempo de rotacion
    setTimeout(()=>{
        document.getElementById('card1').classList.add('rotate');
    }, 100);
    setTimeout(()=>{
        document.getElementById('card1').classList.remove('rotate');
    }, rotacion);

}
function volteoCarta2(){
    let rotacion= (360/100) * 2.5; // calculo el tiempo de rotacion
    setTimeout(()=>{
        document.getElementById('card2').classList.add('rotate');
    }, 100);
    setTimeout(()=>{
        document.getElementById('card2').classList.remove('rotate');
    }, rotacion);
}
function volteoCarta3(){
    let rotacion= (360/100) * 2.5; // calculo el tiempo de rotacion
    setTimeout(()=>{
        document.getElementById('card3').classList.add('rotate');
    }, 100);
    setTimeout(()=>{
        document.getElementById('card3').classList.remove('rotate');
    }, rotacion);
}
function volteoCarta4(){
    let rotacion= (360/100) * 2.5; // calculo el tiempo de rotacion
    setTimeout(()=>{
        document.getElementById('card4').classList.add('rotate');
    }, 100);
    setTimeout(()=>{
        document.getElementById('card4').classList.remove('rotate');
    }, rotacion);
}
function volteoCarta5(){
    let rotacion= (360/100) * 2.5; // calculo el tiempo de rotacion
    setTimeout(()=>{
        document.getElementById('card5').classList.add('rotate');
    }, 100);
    setTimeout(()=>{
        document.getElementById('card5').classList.remove('rotate');
    }, rotacion);
}
function volteoCarta6(){
    let rotacion= (360/100) * 2.5; // calculo el tiempo de rotacion
    setTimeout(()=>{
        document.getElementById('card6').classList.add('rotate');
    }, 100);
    setTimeout(()=>{
        document.getElementById('card6').classList.remove('rotate');
    }, rotacion);
}
function volteoCarta7(){
    let rotacion= (360/100) * 2.5; // calculo el tiempo de rotacion
    setTimeout(()=>{
        document.getElementById('card7').classList.add('rotate');
    }, 100);
    setTimeout(()=>{
        document.getElementById('card7').classList.remove('rotate');
    }, rotacion);
}
function volteoCarta8(){
    let rotacion= (360/100) * 2.5; // calculo el tiempo de rotacion
    setTimeout(()=>{
        document.getElementById('card8').classList.add('rotate');
    }, 100);
    setTimeout(()=>{
        document.getElementById('card8').classList.remove('rotate');
    }, rotacion);
}
function volteoCarta9(){
    let rotacion= (360/100) * 2.5; // calculo el tiempo de rotacion
    setTimeout(()=>{
        document.getElementById('card9').classList.add('rotate');
    }, 100);
    setTimeout(()=>{
        document.getElementById('card9').classList.remove('rotate');
    }, rotacion);
}
function volteoCarta10(){
    let rotacion= (360/100) * 2.5; // calculo el tiempo de rotacion
    setTimeout(()=>{
        document.getElementById('card10').classList.add('rotate');
    }, 100);
    setTimeout(()=>{
        document.getElementById('card10').classList.remove('rotate');
    }, rotacion);
=======

// PRUEBA 

const cont = document.querySelector('#contenido');
const back = document.querySelector('#back');
const links = document.querySelectorAll('.link');

back.style.display = "none";

let params = new URLSearchParams(document.location.search);
let letra = params.get("letra");
if(letra){
    cont.innerHTML = `<strong>${letra}</strong>`;
    back.style.display = "block";
>>>>>>> infoCompleta
}