import './App.css';
import Home from './pages/home'
import '/node_modules/primeflex/primeflex.css'
import 'primeflex/primeflex.css';
import 'primeflex/primeflex.scss';
import NewProductPage from './pages/NewProductPage';
import { Route, Routes } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import Footer from './components/Footer';
import Cosmetic from './pages/cosmetic'

import DashboardPage from './pages/DashboardPage';


function App() {
  return (



    <div className="App">


    <MainNavigation/>
   
  
    
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="product/:name" element={<Cosmetic />}/>
        <Route exact path="/new-product" element={<NewProductPage />} />
        <Route exact path="/dashboard" element ={<DashboardPage/>} />
      </Routes> 
      

      <Footer/>

    </div>
  );
}

export default App;
