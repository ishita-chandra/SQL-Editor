import save from './assets/save.svg';
import './App.css';
import Editor from './components/editor/Editor'
import Terminal from './components/terminal/Terminal'


function App() {
  return (
    <>
    <div className="button">
      <button className="BUTTON_Run">Run ▶</button>
      <button className="BUTTON_Save">Save<img className="save-svg" src={save}/> </button>
    </div>
    <div className="SQL">
      <Editor/>
      <Terminal/>
    </div>
    </>
  );
}

export default App;
