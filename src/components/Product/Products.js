import React, {useState, useEffect} from 'react';
import Product from './Product';
import { getInvoices } from "../../data/item"


let invoices = getInvoices();
const Products = () => {
  
  const [search, setSearch] = useState('');
  const [fill, setFill] = useState([])
  const [selec, setSelec] = useState('')

  useEffect(() =>{
    setFill(invoices)
  }, [fill])

  const fillterItem = (text) =>{
    if(text === 'Fillter'){
      setFill(invoices)
      setSelec(text)
      console.log("has clicked")
    }
    else if(text === 'Low'){
      const newData = invoices.sort((a, b) => {
        return a.pirce - b.pirce;
      });
      setFill(newData)
      setSelec(text)
    }
    else if(text === 'High'){
      const newData = invoices.sort((a, b) => {
        return b.pirce - a.pirce;
      });
      setFill(newData)
      setSelec(text)
    }
    else{
      setFill(invoices)
      setSelec(text)
    }
    
  }
  
  

  return (
    <div className='max-w-full mt-24'>
       <div className='max-w-6xl ml-auto mr-auto'>
           {/* about */}
           <div className='flex items-center justify-center flex-col w-[50%] text-center ml-auto mr-auto'>
               <h1 className='text-red-600 font-bold text-5xl'>EXPLORE OUR MENU</h1>
               <p className='mt-4 text-[#888] text-xl font-sans font-light'>
               Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna
               </p>
           </div>
           {/* Search */}
           <div className='mt-10 flex items-center justify-end'>
             <select name="Fillter" className='mr-10' value={selec}
              onChange={(e) => fillterItem(e.target.value)}>
                <option value="Fillter">Fillter</option>
                <option value="High">Cao đến thấp</option>
                <option value="Low">Thấp đến cao</option>
              </select>
              <input type='text' placeholder='Input searching......' 
                value={search}
                // lấy giá trị đang nhập
                onChange={(e) => setSearch(e.target.value)}
                className='p-4 border border-gray-500' />

             
            </div>
            {/* Product */}
          <div className='lg:grid grid-cols-4 grid-rows-2 gap-4 gap-y-6 mt-14 h-auto p-4' >
            {fill.filter((item) => {
              if(search === ""){
                return item
              }
              // cùng đổi kích cỡ chữ tìm kiếm giống nhau để dễ nhận diện
              else if(item.name.toUpperCase().includes(search.toUpperCase())){
                return item
              }
            }

            ).map((item) =>(
              <Product  key={item.id} name={item.name} img={item.img} decs={item.decs} 
              idItem={item.id}
              pirce={item.pirce}/>
            ))}
          </div>
           
       </div>
    </div>
  )
};

export default Products;