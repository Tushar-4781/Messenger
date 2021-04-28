import { useEffect, useState } from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core'
import './App.css';
import Message from './Message'
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import { IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
function App() {
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([]);  // declare a variable in REACT
  const [username, setUsername] = useState('');
  console.log(input);    
  console.log(messages);
  
  
  useEffect(() => {
    db.collection('messages').orderBy('timestamp').onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });

  }, []);


  // run code on condition
  useEffect(() => {
    setUsername(prompt("Please Enter you name: "));    
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }) 
    setInput('');
  }
  


  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"/>
      <h1>Deeksha Forum</h1>
      <h2>Welcome {username}</h2>
      <div id="containerX">
        <FlipMove>
          {
            messages.map(({id,message}) => {
              return <Message key={id} username={username} message={message}/>
            })
          }
        </FlipMove>
      </div>
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input className="app_input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)}/>
          
          <IconButton className="app_iconButton" disabled={!input}variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon></SendIcon>
          </IconButton>
        </FormControl>
      </form>
    </div>
  );
}

export default App;
