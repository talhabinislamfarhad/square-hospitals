import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Registation from './components/Registation/Registation';
import Appointment from './components/Appointment/Appointment';
import NotFound from './components/NotFound/NotFound';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/registation">
              <Registation></Registation>
            </Route>
            <Route exact path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
