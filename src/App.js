import React from "react";
import "./App.css";
import List from "./List"

function App(props) {
  console.log(props);
  return (
    <main className='App'>
      <header className='App-Header'>
        <h1>Treyolles!</h1>
      </header>
      <div className='App-list'> 
        {props.store.lists.map(list => <List {...list}/> )}
      </div>
    </main>
  );
}

export default App;
