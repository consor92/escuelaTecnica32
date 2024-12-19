export function assignment(optionAssignment) {
    console.log(optionAssignment, 'Valor function')
    let result = []

    if (optionAssignment === 'automotores') {
        result.push('Computacion', 'Mecanica')
        return result
    }

    if (optionAssignment === 'computacion') {
        result.push('Automotores', 'Mecanica')
        return result
    }
    if (optionAssignment === 'mecanica') {
        result.push('Automotores', 'Computacion')
        return result
    }
}