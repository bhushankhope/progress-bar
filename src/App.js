import { useEffect, useState } from 'react';
import './App.css';
import { ProgressBar } from './components/ProgressBar';

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1)
    }, 100)
  }, [])
  return (
    <div className="App">
      <h2 style={{
        margin: '1rem 0rem'
      }}>Progress Bar</h2>
      <ProgressBar value={value}
        onComplete={() => { setSuccess(true) }}></ProgressBar>
      <span>{success ? 'Completed' : 'Loading...'}</span>
    </div>
  );
}

export default App;
