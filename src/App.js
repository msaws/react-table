import React, {useState} from 'react';
import './App.css';

function App() {

const [number, setNumber] = useState('');
const [table, setTable] = useState([]);

const handleInputChange = (e) => {
console.log(e);
  setNumber(e.target.value);
}

const handleGenerateTable = (e) => {
  if (!number){
    alert(`Please enter a valid number.`);
    return;
  }

  const GenerateTable = [];
  for (let i=1; i<=20; i++){
    GenerateTable.push({multiplier: i, result: i * number});
  }
  setTable(GenerateTable);
}

  return (
    <div className="App">
        <h1>Multiplication Table Generator</h1>
        <input type='number' placeholder='Enter a number' value={number} onChange={handleInputChange} />

        <button onClick={handleGenerateTable}>Generate Table</button>

        {/* Display the table */}
        {table.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Multiplier</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {table.map((row,  index) => (
                <tr key={index}>
                  <td>{row.multiplier}</td>
                  <td>{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </div>  
  );
}

export default App;
