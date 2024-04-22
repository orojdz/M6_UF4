/*Assigna-li una promesa a una variable que comprovi si un valor és major o igual a 0 i menor o
igual a 10.*/

const esMajorOIgual = (n) => {
    return new Promise((resolve, reject) => {
        if (n >= 0 && n <= 10)
            resolve(`${n} Esta dins del rang entre 1 i 10`)
        else 
            reject(`${n} No esta dins del rang, per que és menor a 0 o major a 10`)
    });
}

esMajorOIgual(5)
    .then(res => console.log(res))
    .catch(err => console.log(err));