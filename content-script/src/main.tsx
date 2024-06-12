import React from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { App } from "./App";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (isExistDOM()) return;
  renderDOM();
  sendResponse({ response: "Content script received the message" });
});

const isExistDOM = () => {
  const root = document.getElementById("note-root");
  if (root) return true;
  return false;
};
const renderDOM = () => {
  const body = document.querySelector("body");
  const app = document.createElement("div");

  app.id = "note-root";
  if (body) {
    body.prepend(app);
  }

  const container = document.getElementById("note-root");
  const root = createRoot(container!);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
