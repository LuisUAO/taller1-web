import { useState } from "react";

const title = "Lista Ordenada";

export const Ordenado = () => {
    const [numero, setNumero] = useState(0);
    const [arreglo, setArreglo] = useState([]);

    const onInputChange = (event) => {
        let num = parseInt(event.target.value);
        setNumero(num);
    }

    const handleAdd = (event) => {
        setArreglo([...arreglo, numero].sort((a, b) => a - b));
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
            <button onClick={(event) => handleAdd(event)}>AGREGAR</button>

            <div>
                <ol>
                    {
                        arreglo.map((numero, index) => {
                            return <li key={index}>{numero}</li>
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

export default Ordenado;
