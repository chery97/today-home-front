import './App.css';
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={<main />} />
            <Route path='/login' element={<Footer />} />
        </Routes>
    </div>
  );
}

export default App;
