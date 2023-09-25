import './App.css';
import { useEffect, useState } from 'react';


function App() {

  useEffect(() => {
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
  const changeBackground = () => {
    if (document.body.className === "wee"){
        setTimeout(() => {
            document.body.className = "woo"
        }, 3000)
    }
    else{
        setTimeout(() => {
            document.body.className = "wee"
        }, 250)
    }
  }
  const sendMessage = () => {
    let input = document.getElementById("input")
    let output = document.getElementById("output")
    
    var contents = input.value
    output.value += "\n"+"Я: "+ contents
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

        <div id="block">
            <div class="d-flex flex-column justify-content-around" action="">
                <h2>Чат</h2>
            
                <label for="msg"><b>Сообщение</b></label>
                <textarea rows="15" placeholder="Введите сообщение.." name="msg" required id="output"></textarea>
                <input type="text" onKeyDown={catchEnterKey} placeholder="Введите сообщение.." name="msg" required id="input" ></input>
                <button onClick={() => sendMessage()} type="button" class="btn bg-primary align-items-center d-flex" style={{width: "auto", color: "aliceblue"}}>Отправить</button>
            </div>
        </div>
    </div>
  );
}

export default App;
