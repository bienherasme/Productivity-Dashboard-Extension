import React from "react";
import ToDoWidget from "./components/ToDoWidget";
import WeatherWidget from "./components/WeatherWidget";
import NotesWidget from "./components/NotesWidget";
import "./App.css";

const App = () => {
  return (
    <div className="dashboard">
      <h1 data-testid="extensionTitle">Productivity Dashboard</h1>
      <div className="widgets-container" data-testid="extensionContent">
        <ToDoWidget />
        <WeatherWidget />
        <NotesWidget />
      </div>
    </div>
  );
};

export default App;
