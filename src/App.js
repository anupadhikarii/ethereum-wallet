import './App.css';
import Box from "./box"
import React ,{useState}from 'react';
function App() {
  const [loading, setloading] = useState(false)
  return (
    <div className="App">


      <Box loading_ = {loading} setloading_ ={setloading}/>
    </div>
  );
}

export default App;
