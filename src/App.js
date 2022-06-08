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


import { Helmet } from 'react-helmet';

const store = createStore(reducer)


function App() {

  return (
    <Provider store={store}>
       <Helmet>
        <title>Nhà hàng Hamburger</title>
        <meta name="description" content="Nhà hàng của chúng tôi chuyên cung cấp các loại bánh mì hamburger thượng hạng 
        mang đến cho bạn những chiếc hamburger nguyên vị từ tay những đầu bếp nổi tiếng và chúng tôi nói không với burger kém chất lượng" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <BrowserRouter>
      <ScrolltoTop />
          <AuthProvider>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path=":invoiceId/banh-mi-hamburger" element={<DetailItem />} />
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
