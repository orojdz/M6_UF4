/* Crea una funció que donat un nombre per paràmetre et retorni, mitjançant una promesa si és
divisible entre dos o no.*/

async function divisible(n) {
    return new Promise((resolve, reject) => {
        if (n % 2 === 0)
            resolve(`${n} es divisible entre 2`)
        else
            reject(`${n} no es divisible entre 2`)
    });
}

divisible(9)
  .then(res => console.log(res))
  .catch(err => console.log(err));