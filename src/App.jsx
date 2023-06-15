import { Route, Routes } from 'react-router-dom';
import './App.css';
import News from './page/News/News';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<News/>}/>
      </Routes>
    </div>
  );
}

export default App;
