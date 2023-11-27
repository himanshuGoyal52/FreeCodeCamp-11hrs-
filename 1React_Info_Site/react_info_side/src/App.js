import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Main  from './components/Main';
import { useState } from 'react';

// App is parent component and <Header/> and <Footer/> are child component


function App() {
  const [darkMode , setDarkMode] = useState(true);
  function toggleDarkMode(){
    setDarkMode(prev => !prev)
  }

  return (
    <div className='container'>
      <Header darkMode={darkMode} toggleDarkMode = {toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
