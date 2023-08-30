
//FUNCTION:

function calcularPromedio() {
    const cantidadDePartidos = parseInt (
        prompt("Ingrese el total de partidos jugados hasta la fecha:")
    );
    console.log("Cantidad de partidos jugados de tu equipo: " + cantidadDePartidos);

    let promedio = 0;
    let totalPuntos = 0;

    alert("Te recordamos los puntos obtenidos de tu equipo en función del resultado. \nPartido ganado son 3 puntos. \nPartido empatado es 1 punto. \nPartido perdido son 0 puntos.");

    for (let index = 0; index < cantidadDePartidos; index++) {
        const puntosObtenidos = parseFloat(
            prompt("Ingrese la cantidad de puntos obtenidos en la fecha N°: " + (index + 1))
        );
        
        if (puntosObtenidos === 3 || puntosObtenidos === 1 || puntosObtenidos === 0) {
            totalPuntos += puntosObtenidos;
            console.log("Cantidad de puntos obtenidos de tu equipo en el torneo: " + totalPuntos);
            promedio = totalPuntos / cantidadDePartidos;
        } else {
            alert("La cantidad de puntos es inválida. Intente nuevamente.");
            index--;
        }
    }
    alert("El promedio de puntos de tu equipo es: " + promedio.toFixed(3));

    if (promedio >= 1) {
        alert("Es probable que tu equipo se quede en primera división.")
    } else {
        alert("Tu equipo bajará de categoría con este promedio.")
    }

    console.log('Promedio del equipo: ' + promedio.toFixed(3));
}

calcularPromedio();

