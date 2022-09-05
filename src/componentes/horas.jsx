import {useState} from "react";

const title = "Nombre y Hora";

export const Horas = () =>{
    const [hora, setHora] = useState(0);

    const onInputChange = (event) => {
        let hora = parseInt(event.target.value);
        setHora(hora);
    }
    
    return(
        <div class="content">
            <h1>{title}</h1>
			<h3>Hora</h3>
			<input
				type="number"
				value={hora}
				onChange={(event) => onInputChange(event)}
			/>

			<div>
				<p>Horas: {hora / 3600 >> 0}</p>
				<p>Minutos: {hora / 60 % 60 >> 0}</p>
				<p>Segundos: {hora % 60 >> 0}</p>
			</div>
        </div>
    )
}

export default Horas;
