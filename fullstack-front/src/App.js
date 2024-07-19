import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Adduser from './Users/Adduser';
import Edituser from './Users/edituser';
import Viewuser from './Users/Viewuser';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/adduser" element={<Adduser/>}/>
          <Route exact path="/edituser/:id" element={<Edituser/>}/>
          <Route exact path="/viewuser/:id" element={<Viewuser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
