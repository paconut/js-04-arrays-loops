//ejercicio 1

function sumResistance(resistencias) {
    let resistenciaTotal = 0;
    for (let resistencia of resistencias) {
        if (resistencia >= 0) {
            resistenciaTotal += resistencia;
        } else {
            resistenciaTotal -= resistencia;
        }
    }
    console.log(resistenciaTotal);
    return resistenciaTotal;
}

sumResistance([-1, 5, 6, 3]);
sumResistance([14, 3.5, 6]);
sumResistance([8, 15, 100]);

//ejercicio 2
function numDiv(num) {
    let mitad = num / 2;
    console.log([mitad, mitad]);
    return [mitad, mitad];
}

numDiv(4);
numDiv(10);

//Ejercicio 3

function secretName(names) {
    let namesSorted = names.sort();
    let nombreSecreto = "";
    for (let name of namesSorted) {
        nombreSecreto += name[0];
    }
    console.log(nombreSecreto);
    return nombreSecreto;
}

secretName(["Esperanza", "Franco", "Nia"]);
secretName(["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"]);
secretName(["Harry", "Ron", "Hermione"]);

//Ejercicio 4
function onlineStatus(tags) {
    let i = 0;
    while (i < tags.length) {
        i++;
    }
    let memberOnline = tags.length - 2;
    console.log(tags[0] + " " + tags[1] + " and " + memberOnline + " more online.");
    return tags[0] + " " + tags[1] + " and " + memberOnline + " more online.";
}

onlineStatus(["mockIng99", "J0eyPunch", "glassedFer"]);

//Ejercicio 5

function arrayMultiplos(number, length) {
    let array = [];
    for (let i = 1; i <= length; i++) {
        array.push(number * i);
    }
    console.log(array);
    return array;
}

arrayMultiplos(2, 10);
arrayMultiplos(17, 6);

//Ejercicio 6

function positiveDom(array) {
    let positivo = 0;
    let negativo = 0;
    for (let i of array) {
        if (i >= 0) {
            positivo += 1;
        } else {
            negativo += 1;
        }
    }
    if (positivo > negativo) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

positiveDom([-1, -3, -5, 4, 6767]);

//Ejercicio 7

function antipodalAverage(array) {
    let newArray = [];
    let mitadArray = array.length / 2;
    for (let i = 1; i <= mitadArray; i++) {
        let suma = array[i - 1] + array[array.length - i];
        let newElement = suma / 2;
        newArray.push(newElement);
    }
    console.log(newArray);
    return newArray;
}

antipodalAverage([1, 2, 3, 5, 22, 6]);