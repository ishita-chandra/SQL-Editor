import React from 'react'
import './Editor.css'
import {q1,q2,q3,q4} from '../../constants'
import save from '../../assets/save.svg';



function Editor({setQuery,text,setText,handleClick}) {

  const obj = ['create', 'where', 'select', 'from', 'limit']
  
  const handleMyChange = (e) => {
    const query = e.target.value;
    if (!query)
    {setText("")
     return;}

    const queryArr = query.split(" ");

    const lastItem = queryArr[queryArr.length - 1];
    const updatedQueryArr = queryArr.map((ele) => {
      if (obj.includes(ele.toLowerCase())) return ele.toUpperCase();
      return ele;
    });

    updatedQueryArr[updatedQueryArr.length - 1] = lastItem;
    //e.target.value = updatedQueryArr.join(" ");
    setText(updatedQueryArr.join(" "))
  }

  // function handleChange(e) {
  //   var query=e.target.value;
  //   if(!query) return;

  //   var que=query.split(" ");
  //   var last=que[que.length-1]

  //   que.forEach(function (q){
  //     if(q!==last && obj.includes(q.toLowerCase())){
  //       q=q.toUpperCase()
  //     }
      
  //   })
    
  //   e.target.value=ans
  // }


  function handleClick1() {
    setQuery(q1)
   }
  function handleClick2() {
    setQuery(q2)
   }
  function handleClick3() {
    setQuery(q3)
   }
  function handleClick4() {
    setQuery(q4)
  }

  return (
    <>
      <div className="editor">
        <p className="heading">Editor</p>
        <textarea value={text} className="text" placeholder="Type one of the bottom queries..." rows={13} onChange={handleMyChange} ></textarea>
        <div className="button">
      <button className="BUTTON_Run" onClick={handleClick}>Run ▶</button>
      <button className="BUTTON_Save" onClick={()=>window.print()}>Save<img className="save-svg" src={save}/> </button>
    </div>
        <button className="BUTTON_AVN" onClick={handleClick1}> {q1} </button>
        <button className="BUTTON_AVN" onClick={handleClick2}> {q2}</button>
        <button className="BUTTON_AVN" onClick={handleClick3}> {q3} </button>
        <button className="BUTTON_AVN" onClick={handleClick4}> {q4}</button>
      </div>
    </>
  )
}

export default Editor
