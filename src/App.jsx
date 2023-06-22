import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Reklama from './components/Reklama/Reklama';

import News from './page/News/News';
import Store from './page/Store/Store';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/news' element={<News/>}/>
        <Route path='/dokon' element={<Store/>}/>
      </Routes>
      <Reklama/>
      <Footer/>
    </div>
  );
}

export default App;
