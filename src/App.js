import React from "react";
import "./App.css";

function App(props) {
  console.log(props);
  return (
    <main className='App'>
      <header className='App-Header'>
        <h1>Treyolles!</h1>
      </header>
      <div className='App-list'></div>
    </main>
  );
}

export default App;
