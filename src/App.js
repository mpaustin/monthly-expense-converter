import { useState } from 'react';
import './App.css';
import ReadFromFile from './ReadFromFile';

function App() {

  const [file, setFile] = useState();

  return (
    <div className="App">
      Select a .csv file to convert
      <div>
        <input
          type='file'
          accept='.csv'
          id='csvFile'
          onChange={(e) => {
              e.preventDefault();
              setFile(e.target.files[0]);
          }}
        />
      </div>
      <button onClick={() => ReadFromFile(file)} >Convert!</button>
    </div>
  );
}

export default App;
