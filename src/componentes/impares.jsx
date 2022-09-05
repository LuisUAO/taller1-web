import { useState } from "react";

const title = "Impares";

function calcularImpares(numero) {
    let arreglo = [];

    for (let i = 0; i < numero; i++) {
        if (i % 2 == 1) {
            arreglo.push(i);
        }
    }

    return arreglo;
}

export const Impares = () => {
    const [numero, setNumero] = useState(0);
    const onInputChange = (event) => {
        let num = parseInt(event.target.value);
        setNumero(num);
    }

    return (
        <div class="content">
            <h1>{title}</h1>
            <h3>Numero</h3>
            <input
                type="number"
                value={numero}
                onChange={(event) => onInputChange(event)}
            />

            <div>
                <ol>
                    {
                        calcularImpares(numero).map((numero, index) => {
                            return <li key={index}>{numero}</li>
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

export default Impares;
