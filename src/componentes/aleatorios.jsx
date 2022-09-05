import { useState } from "react";

const title = "Aleatorios";

function calcularAleatorios(cantidad, maximo) {
    let arreglo = [];

    for (let i = 0; i < 10; i++) {
        arreglo.push(Math.random() * maximo >> 0);
    }

    return arreglo;
}

export const Aleatorios = () => {
    const [arreglo] = useState(calcularAleatorios(10, 100));
    const [numero, setNumero] = useState(0);
    const onInputChange = (event) => {
        let num = parseInt(event.target.value);
        num = (num < 0) ? 0 : ((num >= arreglo.length) ? arreglo.length - 1 : num);
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
                <h5>Numeros Aleatorios</h5>
                <ol start={0}>
                    {
                        arreglo.map((n, index) => {
                            return <li key={index}>{n}</li>
                        })
                    }
                </ol>
                <h5>Numeros Divididos por {arreglo[numero]} del a posicion {numero}</h5>
                <ol start={0}>
                    {
                        arreglo.map((n, index) => {
                            return <li key={index}>{n / arreglo[numero]}</li>
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

export default Aleatorios;
