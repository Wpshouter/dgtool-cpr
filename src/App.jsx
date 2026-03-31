import { Suspense, useState } from 'react'
import NavBar from './component/header/navbar'
import Banner from './component/body/banner/Banner'
import './App.css'
import Stats from './component/body/stats/Stats'
import Product from './component/body/productsec/products'

const fetchProduct = async()=> {
  const res = await fetch('/data/product.json');
  return res.json();
}

function App() {
  const [count, setCount] = useState(0)
  const productPromise = fetchProduct();
  const [cartItemNumber, setcartItemNumber] = useState(0);
  return (
    <>
      <NavBar cartItemNumber={cartItemNumber} />
      <Banner/>
      <Stats/>
      <Suspense fallback={<span className='loading loading-dots loading-xl'></span>}>
               <Product productPromise={productPromise} setcartItemNumber = {setcartItemNumber} cartItemNumber = {cartItemNumber} />
      </Suspense>
   
   
    </>
  )
}

export default App
