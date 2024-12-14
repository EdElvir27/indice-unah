
document.getElementById('indiceForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const notasInput = document.getElementById('notas').value;
    const unidadesInput = document.getElementById('uv').value;

    const notas = notasInput.split(',').map(Number);
    const unidades = unidadesInput.split(',').map(Number);

    if (notas.length !== unidades.length || notas.length === 0) {
        alert('Las notas y unidades valorativas deben ser del mismo tamaño');
        return;
    }

    let sumaNotasUV = 0;
    let sumaUV = 0;

    for (let i = 0; i < notas.length; i++) {
        sumaNotasUV += notas[i] * unidades[i];
        sumaUV += unidades[i];
    }

    const indice = (sumaNotasUV / sumaUV).toFixed(2);
    document.getElementById('resultado').innerText = `El índice del período es: ${indice}`;
});
