"use strict"

// Devuelve: una cadena de texto con el tiempo
// transcurrido entre f1 y f2 en formato legible
// f1 y f2 son tipo Date
// Ejemplo: "Han transcurrido 2 años 6 meses 1 día"
function tiempoTranscurrido(f1, f2) {
    const tiempoMilisegundos = f2 - f1
    let dias = tiempoMilisegundos / 1000 / 3600 / 24

    const anyos = Math.floor(dias / 365)
    dias -= anyos * 365
    const meses = Math.floor(dias / 30)
    dias -= meses * 30

    return `Trascurrido ${anyos} años, ${meses} meses, ${dias} días`
}

const f1 = new Date(2023, 7, 26)
const f2 = new Date(2025, 9, 8)
const tiempo = tiempoTranscurrido(f1, f2)
