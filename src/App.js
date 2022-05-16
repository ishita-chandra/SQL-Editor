import sql from './assets/SQL.svg';
import './App.css';
import Editor from './components/editor/Editor'
import Terminal from './components/terminal/Terminal'
import { useState } from 'react'
import React from 'react'
import { map } from './constants'




function App() {
  const [text, setText] = useState("")
  const [query, setQuery] = useState("SELECT * FROM regions;")
  function handleClick1() {
    let updatedText = text.trim()
    if (updatedText in map) {
      setQuery(updatedText);
    }
    else {
      alert(" Please type the below mentioned queries only")
    }
  }

  return (
    <>
      <div className="SQL-svg-container">
        <img className="SQL-svg" src={sql} />
      </div>
      <div className="SQL">
        <Editor setQuery={setQuery} text={text} setText={setText} handleClick={handleClick1} />
        <Terminal query={query} />
      </div>
      <p className="footer"> © Ishita Chandra</p>
    </>
  );
}

export default App;
