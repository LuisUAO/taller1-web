import {useState} from "react";

const title = "Llamadas";

function calcularCobro(minutos) {
    if (minutos < 3)
        return 100;
    else
        return 100 + (minutos - 2) * 50;
}

export const Llamadas = () =>{
    const [minutos, setMinutos] = useState(0);

    const onInputChange = (event) => {
        let minutos = parseInt(event.target.value);
        setMinutos(minutos);
    }
    
    return(
        <div class="content">
            <h1>{title}</h1>
			<h3>Llamadas</h3>
			<input
				type="number"
				value={minutos}
				onChange={(event) => onInputChange(event)}
			/>

			<div>
				<p>El cobro es {calcularCobro(minutos)}</p>
			</div>
        </div>
    )
}

export default Llamadas;
