import React from 'react';
import './NewCollection.css';
import new_collections from '../Assests/new_collections';
import Item from '../Items/Item';

function NewCollection() {
  return (
    <div className='new-collection'>
      <h1>NEW COLLECTION</h1>
      <hr/>

      <div className='collection'>
        {new_collections.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollection;
