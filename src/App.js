import React from "react";
import { useState } from "react";
import data from './data';
import List from "./list";
import './index.css'


function App() {
  const [people, setpeople] = useState(data)
  return (
    <main> 
      <section className="container">
          <h2>Birthday Reminder</h2>
          <List people={people}/>
          <button className="btn" onClick={() => setpeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
