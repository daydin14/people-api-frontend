import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import index from './pages/index';
import show from './pages/show';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <index/>
      <show/>
    </div>
  );
}

export default App;
