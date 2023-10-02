import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {ReactComponent as PhoneLogo} from './svg/phone_1-svg.svg'


function App() {

  const [chat_logs, setChatLogs] = useState([])

  useEffect(() => {
    handleLog()
    let chat_button = document.getElementById('popup');
    chat_button.addEventListener('click', openForm);
  })
  const openForm = () => {
    if (document.getElementById("block").style.display=="none"){
        document.getElementById("block").style.display = "block";
    }
    else{
        document.getElementById("block").style.display = "none";
    }
    console.log(document.getElementById("block"), "triggered openForm")
  }
  
  const createChatLog = (message) => {
    let request = axios.get(`http://127.0.0.1:8000/create-chat-log?message=${message}`, {message: message})
    return request
  }

  const getChatLog = () => {
    let request = axios.get(`http://127.0.0.1:8000/get-chat-log`, {withCredentials: false})
    return request
  }

  const handleLog = () => {
    getChatLog()
    .then((res) => {
      console.log('REEEEES', res.data)
      if (res.data.res === 'success'){
        let my_data = res.data.chat_logs
        let output = document.getElementById('output')
        for (let i=0; i<my_data.length; i++){
          output.value += my_data[i].date_of_creation + '       ' +  my_data[i].message + '\n'
        }
      }
    })
    .catch((err) => console.log(err))
  }
  const toggleChatView = () => {
    let chatBlock = document.getElementById('block')
    if (chatBlock.style.display === 'block'){
      chatBlock.style.display = 'none'
    }
    else{
      chatBlock.style.display = 'block'
    }
  }
  const sendMessage = () => {
    let input = document.getElementById("input")
    let output = document.getElementById("output")
    var contents = input.value
    createChatLog(contents)
    .then((res) => {
      console.log(res.data.res)
    })
    .catch((err) => {
      console.log(err)
    })
    output.value += contents + '\n'
    input.value = ''
  }
  const catchEnterKey = (event) => {
    console.log(event)
    return event.keyCode === 13 ? sendMessage() : 0
  }
  const my_styles = {
    width: "22px",
    height: "22px",
  }
  return (
    <div className="App">
      <button id="popup">
            <img style={my_styles} src="img/phone_1.png" alt="phone" />
        </button>

        <div id="block" style={{
              width:"20%", 
              right: "55px",
              bottom: "55px",
              position: 'absolute',
              backgroundColor: '#f2f1ed',
              padding: '2%',
              height: '60vh',
              display: 'none',
              }} >
            <div class="d-flex flex-column justify-content-around" action="">
                <h2>Чат</h2>
                <label for="msg"><b>Сообщение</b></label>
                <textarea readOnly rows="15" placeholder="Введите сообщение.." name="msg" required id="output"></textarea>
                <input type="text" onKeyDown={catchEnterKey} placeholder="Введите сообщение.." name="msg" required id="input" ></input>
                <button onClick={() => sendMessage()} type="button" class="btn bg-primary align-items-center d-flex" style={{width: "auto", color: "aliceblue"}}>Отправить</button>
            </div>
        </div>

            <button
            onClick={() => {toggleChatView()}}
            class='widget'
            style={{
              width:"60px", 
              height:"60px", 
              borderRadius:"100%", 
              position:"fixed",
              border: 'unset',
              right: "15px",
              bottom: "15px", 
              backgroundColor:"#31BD58",
              }}
              >
            <PhoneLogo height={35} width={35} />
            </button>
    </div>
    
  );
}

export default App;
