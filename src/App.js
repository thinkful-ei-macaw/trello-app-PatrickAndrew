import React, { Component } from "react";
import "./App.css";
import List from "./List"

class App extends Component {

  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  }

  render() {
    const { store } = this.props;
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'> 
          {store.lists.map(list => 
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(i => store.allCards[i])}
            /> )}
        </div>
      </main>
    );
  }
}

export default App;
