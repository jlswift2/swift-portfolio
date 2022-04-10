import { Route, Switch } from "react-router-dom";
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Blogs from './Blogs'
import Contact from './Contact'
import Navbar from './NavBar'
import Footer from './Footer'



function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="ml-72">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/blogs">
              <Blogs />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
  );
}

export default App;
