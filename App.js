import './App.css';
import Navbar from './components/pages/Navbar';
import Alpha from './components/pages/alpha';
import Beta from './components/pages/beta';
import Lean from './components/pages/Lean';
import Alert from './components/pages/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="grey";
      showAlert('Dark Mode is Active','success');
      document.title = 'TEXT-D ( Dark Mode )';
    }else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert('Light Mode is Active','success');
      document.title = 'TEXT-D ( Light Mode )';

    }
  }
  return (
    <div className='body'>
      <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="while">
        <Routes>
          <Route path="/lean" element={<Alpha />} />
          <Route path="/sign" element={<Beta />} />
          <Route path="/" element={<Lean mode={mode} showAlert={showAlert}/>} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;