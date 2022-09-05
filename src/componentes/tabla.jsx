import {useState} from "react";

const title = "Tabla de Numeros";

function rango(size) {
    size = parseInt(size);
    if (!size || size < 0) size = 0;
    return [...Array(size).keys()];
}

export const Tabla = () =>{
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
    
    return(
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
				{
                    rango(valor0).map((_, i) => {
                        return <tr>
                        {
                            rango(valor1).map((__, j) => {
                                return <td>{i},{j}</td>
                            })
                        }
                        </tr>
                    })
                }
			</table>
        </div>
    )
}

export default Tabla;

