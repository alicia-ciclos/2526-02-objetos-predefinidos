"use strict"

// const CARACTERES = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

// const indiceAleatorio = 
//     Math.floor(Math.random() * CARACTERES.length)
// const caracterAleatorio = CARACTERES[indiceAleatorio]

const MAYUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const MINUSCULAS = "abcdefghijklmnopqrstuvwxyz"
const DIGITOS = "0123456789"
const ESPECIALES = "-_"

// Genera una contraseña aleatoria de longitud
// caracteres que puede contener:
// - mayusculas
// - minusculas
// - digitos
// - los caracteres especiales "-" y "_"
function generarContrasena(longitud) {
    const CARACTERES = MAYUSCULAS + MINUSCULAS + DIGITOS + ESPECIALES

    let contraseña = ""
    for(let i = 0; i < longitud; i++) {
        let indice = Math.floor(Math.random() * 64)
        contraseña += CARACTERES[indice]
    }
    return contraseña
}


// Version 2
// Si may/dig es true, la contraseña debe tener
// necesariamente (al menos) una mayúscula/dígito
// (en una posición aleatoria)
function generarContrasena2(longitud, may, dig) {
    let contraseña = [...generarContrasena(longitud)]
    let posicionMay = Math.floor(Math.random() * longitud)
    let posicionDig = Math.floor(Math.random() * longitud)

    if(may) {
        let indice = Math.floor(Math.random() * MAYUSCULAS.length)
        contraseña[posicionMay] = MAYUSCULAS[indice]
    }

    if(dig) {
        while( posicionDig == posicionMay ) {
            posicionDig = Math.floor(Math.random() * longitud)
        }

        let indice = Math.floor(Math.random() * DIGITOS.length)
        contraseña[posicionDig] = DIGITOS[indice]
    }

    return contraseña.join("")
}
