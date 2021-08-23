import './App.css';
import {useState} from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

function App() {
  const [text1, setText] = useState('Start typing')
 

  const [copied, setCopied] = useState(false);

  return (
    <div className="App">
        <CopyToClipboard text={text1} onCopy={() => setCopied(true)}>
            <p>{text1}</p>
      </CopyToClipboard>
      {copied ? <p style={{ color: "green" }}>Copied</p> : null}
  
<input placeholder="Start typing bruhv" onChange={(e) => setText(e.target.value)}></input>
    </div>
  );
}

//hi => change text to hi thanks to the e.target.value method
export default App;