import React,{useRef} from 'react'
import './Editor.css'
function Editor() {
  const textRef=useRef(null)
  const obj=['create','where','select','from','limit']
  
 
  
  function handleClick1(){}
  function handleClick2(){}
  function handleClick3(){}
  function handleClick4(){}
  return (
      <>
    <div className="editor">
        <p>Editor</p>
    <textarea ref={textRef} className="text" placeholder="Type one of the bottom queries..." rows={20} cols={90} ></textarea>
    <button className="BUTTON_AVN" onClick={handleClick1}> SELECT * FROM regions; </button>
    <button className="BUTTON_AVN" onClick={handleClick2}> SELECT * FROM regions WHERE regionID = 1;</button>
    <button className="BUTTON_AVN" onClick={handleClick3}> SELECT regionID FROM regions LIMIT 2; </button>
    <button className="BUTTON_AVN" onClick={handleClick4}> SELECT regionDescription FROM regions;</button>
    </div>
    </>
  )
}

export default Editor
