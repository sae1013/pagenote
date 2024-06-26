import React from "react";
import styled from "@emotion/styled";
import Folder from "./components/Folder";
import NoteList from "./components/NoteList";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const RootLayout = styled.div``;

const queryClient = new QueryClient();
function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header />
        <RootLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
          </Routes>
        </RootLayout>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
