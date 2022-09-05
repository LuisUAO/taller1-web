import { useState } from "react";

const title = "Notas Multiple";

export const Notas = () => {
    const [arreglo, setArreglo] = useState([]);
    const [nota, setNota] = useState({
        nombre: 'me la pelan wuajaja',
        nota0: 0,
        nota1: 0,
        nota2: 0
    });

    const onNameChange = (event) => {
        let nombre = event.target.value;
        let data = { ...nota };

        data.nombre = nombre;
        setNota(data);
    }

    const onInputChange0 = (event) => {
        let numero = parseInt(event.target.value);
        let data = { ...nota };

        data.nota0 = numero;
        setNota(data);
    }

    const onInputChange1 = (event) => {
        let numero = parseInt(event.target.value);
        let data = { ...nota };

        data.nota1 = numero;
        setNota(data);
    }

    const onInputChange2 = (event) => {
        let numero = parseInt(event.target.value);
        let data = { ...nota };

        data.nota2 = numero;
        setNota(data);
    }

    const handleAdd = (event) => {
        setArreglo([...arreglo, nota]);
    }

    return (
        <div class="content">
            <h1>{title}</h1>
            <h3>Nombre</h3>
            <input
                type="text"
                value={nota.nombre}
                onChange={(event) => onNameChange(event)}
            />
            <h3>Notas</h3>
            <input
                type="number"
                value={nota.nota0}
                onChange={(event) => onInputChange0(event)}
            />
            <input
                type="number"
                value={nota.nota1}
                onChange={(event) => onInputChange1(event)}
            />
            <input
                type="number"
                value={nota.nota2}
                onChange={(event) => onInputChange2(event)}
            />
            <h3>Opciones</h3>
            <button onClick={(event) => handleAdd(event)}>AGREGAR</button>

            <div>
                {
                    arreglo.map((n, idx) =>
                        <p>
                            El estudiante
                            <strong> {n.nombre} </strong>
                            tiene un promedio de
                            <strong> {(n.nota0 + n.nota1 + n.nota2) / 3} </strong>
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default Notas;

