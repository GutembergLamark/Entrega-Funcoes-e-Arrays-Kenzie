function positions(firstPlace, secondPlace, lastPlace) {
    let lista = [firstPlace, secondPlace, lastPlace]

    if (lista[1] == "Daniel") {
        lista.splice(0, 1, secondPlace)
        lista.splice(1, 1, firstPlace)
        return `RANKING\n\n1º - Colocado ${lista[0]}\n2º - Colocado ${lista[1]}\n3º - Colocado ${lista[2]}`
    }
    else if (lista[2] == "Daniel") {
        lista.splice(1, 1, lastPlace)
        lista.splice(2, 1, secondPlace)
        return `RANKING\n\n1º - Colocado ${lista[0]}\n2º - Colocado ${lista[1]}\n3º - Colocado ${lista[2]}`
    }

    return `RANKING\n\n1º - Colocado ${lista[0]}\n2º - Colocado ${lista[1]}\n3º - Colocado ${lista[2]}`
}


console.log(positions("Rafael", "Daniel", "Manoel"))

