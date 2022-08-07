import logo from './logo.svg';
import './App.scss';
import ListTodo from './todos/ListTodo';
import HomeComponent from './example/HomeComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyComponent from './example/MyComponent';
import ListUser from './users/ListUser';
import DetailUser from './users/DetailUser';
import Nav from './nav/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FormComponent from './example/FormComponent';
/**
 * 2 components: class components/ function component (function, arrow)
 * 
 *  
 *   
 */

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Nav/>
      
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route path="/home">
            <HomeComponent />
          </Route>
          <Route path="/todo">
            <ListTodo />
          </Route>
          <Route path="/about">
            <FormComponent />
          </Route>
          <Route path="/user" exact>
            <ListUser />
          </Route>
          <Route path="/user/:id">
            <DetailUser />
          </Route>
        </Switch>
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* <ListTodo></ListTodo> */}
      

      </header>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />

        
    </div>

    </Router>
  );
}

export default App;
