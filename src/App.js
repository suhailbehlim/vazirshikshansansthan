import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Facilities from './pages/Facilities';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Facilities/>
    <Footer/>

    </div>
  );
}

export default App;
