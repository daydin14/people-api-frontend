import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Index from './pages/Index';
import Show from './pages/Show';
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Index/>
      <Show/>
    </div>
  );
}

export default App;
