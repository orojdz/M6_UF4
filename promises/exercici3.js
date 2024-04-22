/*Crea una funció que es digui esVocal que retorni una promesa que calculi si una lletra està dins
d’un array donat.*/

let arr = ['a', 'e', 'i', 'o', 'u']

async function esVocal(lletra) {
    return new Promise((resolve, reject) => {
        if (arr.includes(lletra))
            resolve(`'${lletra}' es una vocal`)
        else 
            reject(`'${lletra}' no es una vocal`)
    });
}

esVocal('o')
    .then(res => console.log(res))
    .catch(err => console.log(err))