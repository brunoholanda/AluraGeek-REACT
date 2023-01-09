
export default function CampoTexto (props)  {

    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
        
    }

    return (
        <div>
            <label>
                {props.label}
            </label>
            <input 
                required={props.obrigatorio} 
                placeholder={placeholderModificada}
                onChange={aoDigitado}
                value={props.valor}
            />
            
        </div>
    )
} 