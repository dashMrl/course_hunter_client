import React from 'react'
import ReactDOM from 'react-dom'
import { Routeer, Route } from "react-router-dom";
import styles from './App.css'
import InfoTile from "./components/InfoTile.jsx";
import LoginTile from './components/LoginTile.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <LoginTile />
            </div>
        )
    }
}
