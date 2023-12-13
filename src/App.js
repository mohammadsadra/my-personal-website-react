import './App.css';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';


function App() {
  
  return (
    <div className="App">
      <Router>
      <Layout>
         <Routes>
         <Route exact path="/" element={<Home />}/>
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Layout>
    </Router>
    </div>
    
  );
}

export default App;
