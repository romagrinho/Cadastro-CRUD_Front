import { useEffect, useState, useRef } from "react"
import './Cadastro_Home.css'
import Trash from '../../assets/trash.svg'
import api from "../../services/api"

function Cadastro_Home() {

    const [users, setUsers] = useState([])

    const inputName = useRef()
    const inputAge = useRef()
    const inputEmail = useRef()

    async function getUsers() {
        const usersFromAPI = await api.get("/users");
        setUsers(usersFromAPI.data);
    }

    async function createUsers() {
        await api.post("/users", {
            name: inputName.current.value,
            age: inputAge.current.value ? Number(inputAge.current.value) : undefined,
            email: inputEmail.current.value
        });
        getUsers()
    }

    async function deleteUsers(id) {
        await api.delete(`/users/${id}`);
        getUsers();
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div className={`container ${users.length === 0 ? 'centralizado' : ''}`}>
            <div className="cadastro-home">
                <form className="cadastro-form">
                    <h1>Cadastro de Usuários</h1>
                    <input name="nome" type="text" placeholder="Nome Completo" required ref={inputName} />
                    <input name="idade" type="number" placeholder="Idade" required ref={inputAge} />
                    <input name="email" type="email" placeholder="Email" required ref={inputEmail} />
                    <button type="button" onClick={createUsers}>Cadastrar</button>
                </form>
            </div>
        {users.length > 0 && (
                <div className="container_cards">
                    {users.map(user => (
                        <div key={user.id} className="card_user">
                            <div>
                                <p>Nome: <span>{user.name}</span></p>
                                <p>Idade: <span>{user.age}</span></p>
                                <p>Email: <span>{user.email}</span></p>
                            </div>
                            <button className="btn_trash" onClick={() => deleteUsers(user.id)}>
                                <img className="trash-icon" src={Trash} alt="Trash" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
            
        </div>

    )
}

export default Cadastro_Home
