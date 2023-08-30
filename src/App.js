import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  // Go to your chat channel, and at the bottom of the page copy + paste
  // the chatId from the HTML code here. This is what connects the Chat
  // widget to your channel. The key below connects to one of my test
  // test chat widgets so that this code works without modification after
  // running `npm start`, but if you run this please substitute you chatId
  // in place of this one.
  const CHAT_ID = '59b0c43fc83cf6fd50093e47ca49439f';

  const bodyElement = document.body;

  const appendInitializationScript = () => {
    // Set up and add the second script to <body>
    const initializationScriptElement = document.createElement('script');
    initializationScriptElement.innerHTML = 
      `window.FrontChat('init', {chatId: '${CHAT_ID}'});`;
    bodyElement.appendChild(initializationScriptElement);
  }
  
  useEffect(() => {
    // Set up and add the first script to <body>
    const chatBundleScriptElement = document.createElement('script');
    chatBundleScriptElement.src = 'https://chat-assets.frontapp.com/v1/chat.bundle.js';
    chatBundleScriptElement.onload = appendInitializationScript;
    bodyElement.appendChild(chatBundleScriptElement);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
