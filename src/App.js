import Navbar from './components/Navbar'
import TextBox from './components/TextBox'
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
<>
<Router>
<Navbar title='Text Changer' />
<Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextBox heading='Converter'/>
          </Route>
        </Switch>
</Router>

</>
  );
}

export default App;
// 