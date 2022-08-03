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
