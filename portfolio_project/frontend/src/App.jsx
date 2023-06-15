import './App.css';
import {Outlet} from 'react-router-dom';
import Header from './components/header/Header';
import MyNavBar from './components/header/Navbar';

export default function App() {


  return (
    <div className='app_container'>
      <div className='center'>
        <Header/>
      </div>
        
      <MyNavBar/>
      <hr />
      <div className='outlet'>
        <Outlet/>
      </div>
      <hr />
      <footer>Copyright© 2023 --  Will Minshall</footer>
    </div>
  )
}