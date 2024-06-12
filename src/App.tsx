/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import Logo from "./Logo";
import QuillEditor from "../content-script/src/editor/QuillEditor";
import { App as NoteApp } from "../content-script/src/App";
import "./App.css";
const openNote = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0].id) {
      chrome.tabs.sendMessage(tabs[0].id, { message: "EXECUTE_NOTE" });
    }
  });
  window.close();
};
function App() {
  return (
    <div>
      <div>ghehe</div>
      <NoteApp></NoteApp>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <Logo className="App-logo" id="App-logo" title="React logo" />
    //     <p>Hello, World!</p>
    //     <p>I'm a Chrome Extension Popup!</p>
    //     <button onClick={openNote}>노트열기</button>
    //   </header>
    // </div>
  );
}

export default App;
