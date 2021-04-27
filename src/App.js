import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([]);
  console.log(input);    
  console.log(messages);
  
  const sendMessage = (event) => {
    event.preventDefault();
    setMessage([...messages,input]);
    setInput('');
    
  }
  
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <button type='submit' onClick={sendMessage}>Send</button>
      </form>
      {
        
        messages.map((message) => {
          return(<p>{message}</p>);
        })
      }
    </div>
  );
}

export default App;
