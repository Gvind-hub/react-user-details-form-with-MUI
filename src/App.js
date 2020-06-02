import React from 'react';
import './App.css';
import UserForm from "./Components/UserForm";
import AppBarHeader from "./Components/AppBar";


function App() {
    return (
        <div className="App">
            <AppBarHeader/>
            <UserForm/>
        </div>
    );
}

export default App;
