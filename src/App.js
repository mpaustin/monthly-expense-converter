import { useState } from 'react';
import './App.css';
import ReadFromFile from './ReadFromFile';
import { CSVLink } from "react-csv";

function App() {
  const [file, setFile] = useState();
  const [download, setDownload] = useState();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setDownload(null); // Reset download when new file is selected
  };

  const handleConvert = async () => {
    if (!file) {
      alert('Please select a CSV file first');
      return;
    }
    
    setIsProcessing(true);
    try {
      await ReadFromFile(file, setDownload);
    } catch (error) {
      console.error('Error processing file:', error);
      alert('Error processing file. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'text/csv') {
      setFile(droppedFile);
      setDownload(null);
    } else {
      alert('Please drop a valid CSV file');
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>💰 Monthly Expense Converter</h1>
          <p>Convert Monarch Money transactions to FIRE categories</p>
        </header>

        <main className="main-content">
          <div className="file-upload-section">
            <h2>Upload Your CSV File</h2>
            
            <div 
              className="file-drop-zone"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="file-drop-content">
                <div className="upload-icon">📁</div>
                <p className="drop-text">
                  {file ? `Selected: ${file.name}` : 'Drag & drop your CSV file here'}
                </p>
                <p className="or-text">or</p>
                <label className="file-input-label">
                  <span className="browse-button">Browse Files</span>
                  <input
                    type='file'
                    accept='.csv'
                    id='csvFile'
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
            </div>

            {file && (
              <div className="file-info">
                <p>✅ File selected: <strong>{file.name}</strong></p>
                <p>Size: {(file.size / 1024).toFixed(1)} KB</p>
              </div>
            )}
          </div>

          <div className="action-section">
            <button 
              className={`convert-button ${!file ? 'disabled' : ''}`}
              onClick={handleConvert}
              disabled={!file || isProcessing}
            >
              {isProcessing ? (
                <>
                  <span className="spinner"></span>
                  Processing...
                </>
              ) : (
                '🔄 Convert to FIRE Categories'
              )}
            </button>
          </div>

          {download && (
            <div className="download-section">
              <div className="success-message">
                <span className="success-icon">✅</span>
                <h3>Conversion Complete!</h3>
                <p>Your CSV has been processed and mapped to FIRE categories.</p>
              </div>
              
              <div className="download-actions">
                <CSVLink 
                  data={download} 
                  filename="fire-categories-export.csv"
                  className="download-button"
                >
                  📥 Download FIRE Categories CSV
                </CSVLink>
                
                <button 
                  className="reset-button"
                  onClick={() => {
                    setFile(null);
                    setDownload(null);
                  }}
                >
                  🔄 Start Over
                </button>
              </div>
            </div>
          )}
        </main>

        <footer className="app-footer">
          <p>Built for FIRE enthusiasts • Monarch Money integration</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
