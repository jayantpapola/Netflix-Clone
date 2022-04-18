
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignUp from './SignUp-Page/SignUp';
import CreateAccount from './Account-Creation/CreateAccount';

function App() {
  return (

    <Router>
      
      <div className="App">
      <Routes>
        <Route path='/' element={<SignUp/>}/>
      </Routes>
      <Routes>
        <Route path='/Signing_Up' element={<CreateAccount/>}/>
      </Routes>
          
      </div>

    </Router>
  );
}

export default App;
