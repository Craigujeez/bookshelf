import React from 'react';
import ReactDOM from 'react-dom';
import {Logo} from './components/logo';
import './index.exercise.css';

const App = () => {
    return ( 
    <div className="container">
        <Logo/>
        <h1>Bookshelf</h1>
        <div><button onClick={()=> alert('Login')} className="btn lgn">Login</button> <button onClick={()=> alert('Register')} className="btn Rgstr">Register</button></div>
    </div> 
    );
}
 
ReactDOM.render(<App/>, document.getElementById('root'))