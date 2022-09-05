import React, { useState, useEffect } from "react";

const title = "Suma Total Matrix";

function generarFilas(size, max) {
    let row = [];

    for (let i = 0; i < size; i++) {
        let number = Math.random() * max;
        number = Math.round(number);

        row.push(number);
    }

    return row;
}

function generarMatriz(width, height, max) {
    let matrix = []

    for (let i = 0; i < height; i++) {
        let row = generarFilas(width, max);
        matrix.push(row);
    }

    return matrix;
}

function generarTotal(matrix, width, height) {
    let total = [];

    for (let i = 0; i < width; i++) {
        let calc = 0;

        for (let j = 0; j < height; j++) {
            calc += matrix[j][i];
        }

        total.push(calc);
    }

    return total;
}

export const Total = () => {
    const [valor0, setValor0] = useState(0);
    const [valor1, setValor1] = useState(0);

    const onInputChange0 = (event) => {
        let numero = parseInt(event.target.value);
        setValor0(numero);
    }

    const onInputChange1 = (event) => {
        let numero = parseInt(event.target.value);
        setValor1(numero);
    }

    // Matriz Generation
    const [matriz, setMatriz] = useState([[]]);
    const [total, setTotal] = useState([[]]);

    useEffect(() => {
        let matriz = generarMatriz(valor0, valor1, 100);
        let total = generarTotal(matriz, valor0, valor1, 100);

        setMatriz(matriz);
        setTotal(total);
    }, [valor0, valor1]);

    return (
        <div class="content">
            <h1>{title}</h1>
            <h3>Ancho</h3>
            <input
                type="number"
                value={valor0}
                onChange={(event) => onInputChange0(event)}
            />
            <h3>Alto</h3>
            <input
                type="number"
                value={valor1}
                onChange={(event) => onInputChange1(event)}
            />

            <table className="table">
                <tbody>
                    {
                        matriz.map((row, i) =>
                            <tr key={i}>
                                {
                                    row.map((number, j) =>
                                        <td key={j}>{number}</td>
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        {
                            total.map((item, idx) =>
                                <th key={idx}>{item}</th>)
                        }
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Total;
