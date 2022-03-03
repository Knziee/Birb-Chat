import { ChatEngine } from 'react-chat-engine';

import './App.css';

import ChatFeed from './components/ChatFeed';

import LoginForm from './components/LoginForm'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="f0a5963b-94a7-4d64-8c94-cd4979a1c1d1"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps}/>}
        />
    )
}

export default App;