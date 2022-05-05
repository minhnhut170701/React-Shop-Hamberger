import './App.css';
import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";




//componets
import Home from './components/Home';
import DetailItem from './components/Detail/DetailItem';
import ScrolltoTop from './components/ScrolltoTop';
import Footer from './components/Footer';
import Desciption from './components/Detail/Desciption';
import Review from './components/Detail/Review';
import Cart from './components/CartPage/Cart';

//redux
import reducer from "./store/reducer"
import { createStore } from "redux";
import { Provider } from "react-redux";
import Blogs from './components/Blog/Blogs';
import Pay from './components/CheckOut/Pay';
import Login from './components/Login/Login';


import SignUp from './components/Login/SignUp';
import { AuthProvider } from './contexts/AuthContext';
import BlogItem from './components/Blog/BlogItem';




const store = createStore(reducer)


function App() {

  
  
  return (
    <Provider store={store}>
      <BrowserRouter>
      <ScrolltoTop />
          <AuthProvider>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path=":invoiceId/banh-mi-hamburger" element={<DetailItem />} >
                      <Route path="des" element={<Desciption />} />
                      <Route path="review" element={<Review />} />  
                </Route>
                <Route path='/cart' element={<Cart />} />
                <Route path='/blog' element={<Blogs />} />
                <Route path='/blog/banh-mi-hamburger' element={<BlogItem />} />
                <Route path='/checkout' element={<Pay />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route
                      path="/*"
                        element={
                          <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                          </main>
                        }
                  />     
            </Routes>
          </AuthProvider>
      
      <Footer />  
      </BrowserRouter>
    
    </Provider>
  );
}

export default App;
