import React from 'react';

const Navbar = ({  filterItem , menuList}) =>
{
  // console.log(menuList);
 
  return (
      <>
          <nav className='navbar'>
             
        {
          menuList.map((curData) => {
            return (
              <>
                <button className='btn-items' onClick={() =>filterItem (curData)}> { curData}</button>
              </>
            )
          })
        }
          
        
          
          
        
          </nav>
      
    </>
  )
}

export default Navbar
