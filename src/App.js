import { useState } from 'react';
import './App.css';
import ReadFromFile from './ReadFromFile';
import { CSVLink } from "react-csv";

function App() {

  const [file, setFile] = useState();
  const [download, setDownload] = useState();

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
      <button onClick={() => ReadFromFile(file, setDownload)} >Convert!</button>
      {
        download && 
        <CSVLink data={download} >
          Download
        </CSVLink>
      }
    </div>
  );
}

export default App;
