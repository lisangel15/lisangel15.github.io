import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import AboutMe from './contents/AboutMe';
import ContactMe from './contents/ContactMe';

function App() {
return (

<Router>
<div className="App">
<Navbar />
{/* Route for Home.js contents */}
<Route exact path="/">
<Home />
</Route>
{/* Route for About.js contents */}
<Route path="/about me">
<AboutMe />
</Route>
 <Route path="/contact">
<ContactMe />
</Route> 

</div>
</Router>
)
}



export default App;
