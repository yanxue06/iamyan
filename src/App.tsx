import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() { //a component in react
    const text = ["Hello, my name is Yan"]; 
    const [visibleLetterCount, setVisibleLetterCount] = useState(0); {/*creating a state, can use setState to change state*/} 
    const [visibleTextIndex, setVisibleTextIndex] = useState(0); 
    
    useEffect(() => {  //defining and runnig a function at the same time
      const currentText = text[visibleTextIndex]; //get current setence
      if (visibleLetterCount < currentText.length) { 
          const timer = setTimeout(() => {
            setVisibleLetterCount(visibleLetterCount + 1); 
          }, 100);
          return () => clearTimeout(timer); 
      }
    }, [visibleLetterCount, visibleTextIndex]); 
  
  return (
    <div className="App"> {/*JSX, HTML syntax in JS*/} 
      {/* Display only up to the visibleLetterCount characters of the current sentence */}
      <p>{text[visibleTextIndex].substring(0, visibleLetterCount)}</p>
    </div>
  );
}

export default App //allows us to use component in others parts of app
