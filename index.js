const teams = [
    {
        id: 1,
        name: "Boca",
        gamesPlayed: 5,
        points: 12
    },
    {
        id: 2,
        name: "Velez",
        gamesPlayed: 5,
        points: 15
    },
    {
        id: 3,
        name: "River",
        gamesPlayed: 5,
        points: 10
    }
];

function mostrarEquipos(teams) {
    let listaDeEquipos = "";

    for (const team of teams) {
        listaDeEquipos += `
        Equipo: ${team.name}
        Partidos Jugados: ${team.gamesPlayed}
        Puntos: ${team.points}\n`
    }

    return listaDeEquipos;
}

alert(mostrarEquipos(teams));

// Agregar y eliminar equipos hasta que el usuario decida finalizar
while (true) {
    const accion = prompt("¿Desea agregar un nuevo equipo o eliminar uno existente? (agregar/eliminar/finalizar)").toLowerCase();

    if (accion === "finalizar") {
        break; // Terminar de agregar equipos
    } else if (accion === "agregar") {
        const nuevoEquipo = {
            name: prompt("Nuevo equipo:"),
            gamesPlayed: parseInt(prompt("Cantidad de partidos jugados:")),
            points: parseInt(prompt("Cantindad de puntos obtenidos:"))
        };

        teams.push(nuevoEquipo);

        // Ordenar los equipos por cantidad de puntos obtenidos
        teams.sort((a, b) => b.points - a.points);

        // Mostrar la lista actualizada de equipos
        alert(mostrarEquipos(teams));
    } else if (accion === "eliminar") {
        const nombreEquipoAEliminar = prompt("Nombre del equipo que queres eliminar:");

        const index = teams.findIndex(team => team.name === nombreEquipoAEliminar);

        if (index !== -1) {
            teams.splice(index, 1);
            alert(`El equipo "${nombreEquipoAEliminar}" ha sido eliminado.`);
        } else {
            alert(`No se encontró un equipo con el nombre "${nombreEquipoAEliminar}".`);
        }
    } else {
        alert("Por favor, completar con 'agregar', 'eliminar' o 'finalizar'.");
    }
}

// Mostrar la lista final de equipos
alert("Lista final de equipos:\n" + mostrarEquipos(teams));


//Mostrar en consola las posiciones una vez finalizada las funciones
console.log("Lista final de equipos:\n" + mostrarEquipos(teams));