import {BrowserRouter , Routes , Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
  <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/movie/:movie_id' element={<DetailPage/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App
