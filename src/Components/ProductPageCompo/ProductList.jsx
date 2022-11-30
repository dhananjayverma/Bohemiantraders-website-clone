import { Grid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ProductItem from './ProductItem'
import {useDispatch ,useSelector} from "react-redux"
import { getProducts } from '../../Redux/ProductPageRedux/prodActions'

const ProductList = () => {
  const dispatch= useDispatch()
  const {loading,error,products}=useSelector((state)=>state.productsState)
  console.log("after useSelector--->",products)
 
  useEffect(()=>{
    dispatch(getProducts())
  },[])

  return (
    <div m='auto'>
       <Grid templateColumns={{base:'repeat(2,1fr)',md:'repeat(3,1fr)',lg:'repeat(4,1fr)'}} gap='7px'   >
         {
           products.map((ele)=>{
            return(<ProductItem key={ele.id} brand={ele.brand} name={ele.name} price={ele.price} img={ele.img} />)
           }) 

         }
       
       </Grid>

    
    </div>
  )
}

export default ProductList