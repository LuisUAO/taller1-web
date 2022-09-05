import {useState} from "react";

const title = "Mismos Numeros";

function contarRepetidos(value0, value1, value2) {
    let count = 0;

    // Calculate Value0
    count += value0 === value1;
    count += value0 === value2;
    count += value1 === value2;
    // Ajust When Two
    count += count === 1;

    return count;
}

export const Mismos = () =>{
    const [valor0, setValor0] = useState(0);
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);

    const onInputChange0 = (event) => {
        let numero = parseInt(event.target.value);
        setValor0(numero);
    }

    const onInputChange1 = (event) => {
        let numero = parseInt(event.target.value);
        setValor1(numero);
    }

    const onInputChange2 = (event) => {
        let numero = parseInt(event.target.value);
        setValor2(numero);
    }
    
    return(
        <div class="content">
            <h1>{title}</h1>
			<h3>Llamadas</h3>
			<input
				type="number"
				value={valor0}
				onChange={(event) => onInputChange0(event)}
			/>
			<input
				type="number"
				value={valor1}
				onChange={(event) => onInputChange1(event)}
			/>
			<input
				type="number"
				value={valor2}
				onChange={(event) => onInputChange2(event)}
			/>

			<div>
				<p>
					La cantidad de repetidos es: {
						contarRepetidos(valor0, valor1, valor2)
					}
				</p>
			</div>
        </div>
    )
}

export default Mismos;

