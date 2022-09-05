import { useState } from "react";

const title = "Salarios";

export const Salarios = () => {
    const [numero, setNumero] = useState(0);
    const [arreglo, setArreglo] = useState([]);

    const onInputChange = (event) => {
        let num = parseInt(event.target.value);
        setNumero(num);
    }

    const handleAdd = (event) => {
        setArreglo([...arreglo, numero]);
    }

    const handleDelete = (event) => {
        let a = [...arreglo];

        a.pop();
        setArreglo(a);
    }

    return (
        <div class="content">
            <h1>{title}</h1>
            <h3>Precio Salario</h3>
            <input
                type="number"
                value={numero}
                onChange={(event) => onInputChange(event)}
            />
            <button onClick={(event) => handleAdd(event)}>AGREGAR</button>
            <button onClick={(event) => handleDelete(event)}>ELIMINAR ULTIMO</button>

            <div>
                <h1>Cantidad de Salarios: {arreglo.length}</h1>
                <ul>
                    {
                        (arreglo.length < 10) ? 
                            <h1>No hay Salarios Suficientes</h1> 
                            : 
                            arreglo.map((numero, index) => {
                                return <li key={index}>Salario: {numero}, Aumento: {numero * 1.08 >> 0}</li>
                            })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Salarios;
