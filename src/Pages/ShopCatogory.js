import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown from '../Components/Assests/dropdown_icon.png'
import Item from '../Components/Items/Item'

function ShopCatogory(props) {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt=''/>
      <div className='shopcategory-indexsort'>
        <p>
          <span> Showing 1-12</span> Out of 36 product
        </p>
        <div className='shopcategory-sort'>
          sort by <img src={dropdown} alt='drop'/>
        </div>
      </div>

      <div className='shopcategory-products'>
        {all_product.map((item,i)=>{
          if(props.category===item.category){
              return <Item key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}/>
          }
          else{
            return null;
          }

        })}
      </div>
      
    </div>
  )
}

export default ShopCatogory
