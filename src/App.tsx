/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import Logo from "./Logo";
import QuillEditor from "../content-script/src/editor/QuillEditor";
import { App as NoteApp } from "../content-script/src/App";
import Button from "./components/Button";
import "./App.css";

const openNote = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0].id) {
      chrome.tabs.sendMessage(tabs[0].id, { type: "EXECUTE_NOTE" });
    }
  });
  // window.close();
};
function App() {
  return (
    // <div>
    //   <NoteApp></NoteApp>
    // </div>
    <div className="container">
      <header className="container__header">
        {/* <span>Every Note</span> */}
      </header>
      <main className="contents"></main>
      <footer
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 1rem",
        }}
      >
        <Button variant="dark" onClick={openNote}>
          View Notes
        </Button>
        <Button variant="primary" onClick={openNote}>
          Open Note
        </Button>
      </footer>
    </div>
  );
}

export default App;
