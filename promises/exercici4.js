/*Crea una funció JS que rebi 2 paràmetres i que retorni una promesa que calculi la divisió del
primer entre el 2on paràmetre.*/

async function divisio(n1, n2) {
    return new Promise((resolve, reject) => {
        if (n2 !== 0)
            resolve(`El resultat és: ${n1 / n2}`)
        else
            reject('No es pot dividir per 0!')
    });
}

divisio(5, 2)
  .then(res => console.log(res))
  .catch(err => console.log(err))