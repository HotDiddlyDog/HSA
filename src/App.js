import Home from "./pages/Home.js"
// import Start from "./pages/Start.js"
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Navigation/>
      <Routes>
        {/* <Route exact path='/' element={<Start />} /> */}
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
