import {useState} from "react";

const title = "Saludo";

export const Saludo = () =>{

    const [nombre, setNombre] = useState("")
    const [hora, setHora] = useState("")
    const [saludo, setSaludo] = useState("")

    const onInputChange = (event) => {
        setHora(event.target.value)
    }

    const handleAdd = (event) => {
        event.preventDefault();
        setHora('')

        let h = hora % 24;
        if(h >= 0 && h < 12 ){
            const saludoSegunHora= "¡Buenos días! "
            setSaludo(`Saludo: ${nombre} ${saludoSegunHora}`)
        } else if(h >= 12 && h < 18){
            const saludoSegunHora= "¡Buenas tardes! "
            setSaludo(`Saludo: ${nombre} ${saludoSegunHora}`)
        } else if(h >= 18 && h < 24){
            const saludoSegunHora= "¡Buenas noches! "
            setSaludo(`Saludo: ${nombre} ${saludoSegunHora}` )
        }
    }

    const onInputChange1 = (event) => {
        setNombre(event.target.value)
    }

    return(
        <div class="content">
            <h1>{title}</h1>
            <h3>Nombre</h3>
			<input
				type="letra"
				value={nombre}
				onChange={(event) => onInputChange1(event)}
			/>
			<h3>Hora</h3>
			<input
				type="number"
				value={hora}
				onChange={(event) => onInputChange(event)}
			/>
			<button onClick = {(event) => handleAdd(event)}>AGREGAR</button>
			<div>
				<p>{saludo}</p>
			</div>

            <h1></h1>
			
			
        </div>
    )
}

export default Saludo;
