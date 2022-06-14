import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  const URL = "http://localhost:4000/";
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/projects">
        <Projects URL={URL} />
      </Route>

      <Route exact path="/about">
        <About URL={URL} />
      </Route>
      <Footer/>
    </div>
  );
}

export default App;
