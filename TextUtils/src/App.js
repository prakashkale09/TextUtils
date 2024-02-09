
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
   const [dmode,setMode] = useState('light');
   const [alert,setAlert]  = useState(null);

   const showAlert=(message,type)=>
   {
     setAlert({
      msg:message,
      typ:type
     })
     setTimeout(()=>
      {
       setAlert(null);
      },3000)
   }
  const Toggle = () =>
  {
    if(dmode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been activated","success");
      document.title = "TextUtils-Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been activated","success");
      document.title = "TextUtils-Light Mode"
      
    }
  }

  return (
    <>

      <Navbar title="TextUtils" about="About" mode = {dmode} Toggle={Toggle}/>
      <Alert alert={alert}/>
      <div className="container my-3"> 
      </div>
      <Router>
      
      
      <Switch>
        <Route exact path = "/about">
        <Link to="/about"></Link>
          <About/>
        </Route>
        <Route exact path = "/">
          <Link to="/"></Link>
        <TextForm heading = "Enter the text" showAlert={showAlert}/>
        </Route>
      </Switch>
     
      </Router>
   
      </>
  );
}

export default App;
 
