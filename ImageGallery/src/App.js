import './App.css';
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Gallery from './components/Gallery';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'><Aboutus /></Route>
        <Route exact path='/gallery'><Gallery /></Route>
        <Route exact path='/contact'><Contactus /></Route>
      </Switch>
    </Router>
  );
}

export default App;
