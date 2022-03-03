import { useState } from "react";
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': "f0a5963b-94a7-4d64-8c94-cd4979a1c1d1", 'User-Name': username, 'User-Secret': password}

        try {
            // user name && password => chatengine -> devolve msgs
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            // se funciona -> logou

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError('*Birb noises*, Wrong username or password.')
            // se n funciona -> tenta com outro username ou senha
        }




    }

return (
    <div className="wrapper">
        <div className="form">
            <h1 className="title"> Birb Chat</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                <div align="center">
                    <button type ="submit" className="button">
                        <span>Enter the Birb Chat</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
            </form>
        </div>
    </div>
)
}

export default LoginForm