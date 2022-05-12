import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { getInvoice } from "../../data/item";
import { Link, Outlet } from "react-router-dom";



import PRODUCTS from "../../data/item";
//logo-menu
import logo from "../../images/logo-01.png";
//icon
import MenuIcon from '@mui/icons-material/Menu';


import {Helmet} from "react-helmet";
//conponents
import Header from "../Header/Menu";
import Product from "../Product/Product"
import InforItem from './InforItem';

const DetailItem = () => {
    
    const [isOn, setOn] = useState(false)

    // lấy id được truyền vào
    let params = useParams();
    // lấy các thuộc tính
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
   
    return (
        <>
         <div className=' max-w-full '>
            <Helmet htmlAttributes>
                <meta charSet="utf-8" />
                <title>{invoice.name}</title>
                <meta name="description" content={invoice.decs} />
            </Helmet>
            <div className='bg-hero-pattern h-[400px] bg-cover'>
            <div className='sm:hidden'>
                <Header />
            </div>
            <div className='md:hidden flex items-center p-4 justify-between'>
                <Link to="/"><img src={logo} alt='logo' loading='lazy' className='w-28 h-20' /></Link>
                <div className='text-white'><MenuIcon  fontSize='large'/></div>  
            </div>
                
                <p className='text-4xl font-bold text-white
                text-center relative top-44 '>{invoice.name}</p>
            </div>
            <InforItem />

            <div className='mt-20 max-w-4xl ml-auto mr-auto'>
                <div className='flex justify-center items-center space-x-6'>
                        <Link to="des" onClick={() => setOn(false)}
                            className={ isOn ? "bg-transparent p-4 font-bold" : "bg-yellow-400 p-4 font-bold"} >
                                    Description
                        </Link>  
                       
                 
                        <Link to="review" onClick={() => setOn(true)}
                        className={ !isOn ? "bg-transparent p-4 font-bold" : "bg-yellow-400 p-4 font-bold"}>
                                Review
                        </Link>
                   
                </div>
                {/* Infor for screen above */}
                <Outlet />
              

               
            </div>

                
            <div className='bg-[#f6f9fa] max-w-full flex items-center flex-col mt-10 pb-20'>
                    <h1 className='pt-10 max-w-4xl text-center text-gray-400'>
                    Aliquam a augue suscipit, luctus  neque purus ipsum neque undo <br/>
                    dolor primis libero tempus, blandit a cursus varius magna
                    </h1>
                    <div className='max-w-6xl lg:flex items-center mt-14 lg:space-x-3'>
                        {PRODUCTS.slice(0,4).map((item) =>(
                        <Product  key={item.id} name={item.name} img={item.img} decs={item.decs} 
                            idItem={item.id}
                            pirce={item.pirce}/>
                        ))}
                    </div>
            </div>

                
           
        </div>
        </>
       
        
    );
}

export default DetailItem