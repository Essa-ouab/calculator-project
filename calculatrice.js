// Author : SIHAM ESSAOUAB 
function initialiser_calc(id) {
    document.getElementById(id + '_resultat').value = '';
}

function add_calc(id, valeur) {
    const champ = document.getElementById(id + '_resultat');
    champ.value += valeur;
}

function f_calc(id, action) {
    const champ = document.getElementById(id + '_resultat');

    switch(action) {
        case 'ce':
            champ.value = '';
            break;

        case 'nbs':
            champ.value = champ.value.slice(0, -1);
            break;

        case '%':
            if (champ.value !== '') {
                champ.value = parseFloat(champ.value) / 100;
            }
            break;

        case '+-':
            if (champ.value !== '') {
                if (champ.value.charAt(0) === '-') {
                    champ.value = champ.value.slice(1);
                } else {
                    champ.value = '-' + champ.value;
                }
            }
            break;

        case '=':
            try {
                champ.value = eval(champ.value);
            } catch (e) {
                champ.value = 'Erreur';
            }
            break;

        default:
            champ.value += action;
            break;
    }
}

function key_detect_calc(id, event) {
    const key = event.key;
    const champ = document.getElementById(id + '_resultat');

    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
        champ.value += key;
    } else if (key === 'Enter') {
        f_calc(id, '=');
    } else if (key === 'Backspace') {
        f_calc(id, 'nbs');
    } else if (key === 'Escape') {
        f_calc(id, 'ce');
    }
}
window.onload = function () {
    initialiser_calc('calc');
};
