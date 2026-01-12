import React from "react"
import './Cadastro_Home.css'
import Trash from '../../assets/trash.svg'    

function Cadastro_Home() {

    return (
        <div className="cadastro-home">
            <form className="cadastro-form">
                <h1>Cadastro de Usuários</h1>
                <input name="nome" type="text" placeholder="Nome Completo" required />
                <input name="idade" type="number" placeholder="Idade" required />
                <input name="email" type="email" placeholder="Email" required />
                <button type="button">Cadastrar</button>
            </form>
            <div>
                <div>
                    <p>Nome:</p>
                    <p>Idade:</p>
                    <p>Email:</p>
                </div>
                <button>
                    <img src={Trash} alt="Trash" />
                </button>
            </div>
        </div>
    )
}

export default Cadastro_Home
