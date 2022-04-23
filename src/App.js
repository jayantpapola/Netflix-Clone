
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignUp from './SignUp-Page/SignUp';
import CreateAccount from './Account-Creation/CreateAccount';
import Netflix from './Netflix/Netflix';

function App() {
  return (

    <Router>
      
      <div className="App">
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/Signing_Up' element={<CreateAccount/>}/>
        <Route path='/Netflix.in' element={<Netflix/>}/>
      </Routes>
          
      </div>

    </Router>
  );
}

export default App;
