import { Link } from "react-router-dom"

export default function BotaoLogin () {
    return (
        <div>
             <Link to="/login"><button className="cabecalhoBotao">Login</button></Link>
        </div>
    )
}