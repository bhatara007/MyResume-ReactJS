import React, {Component} from "react";
import Navbar from './components/Navbar';
import Banner from './components/Banner'
import Skills from './components/Project'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <Skills />
        </div>


    );
}


export default App;
