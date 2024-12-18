import React, {useState } from 'react';
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import Footer from './Footer';

const uniqueList = [...new Set(Menu.map((elem) => {
  
  return elem.category;
})
), "All",
];
      
   
  // console.log(uniqueList);
  

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList); // Initialize empty array
  
    
  
    const filterItem = (category) => {
      if (category === "All") {
        setMenuData(Menu);
        return;
      }
      const updatedList = Menu.filter((currentElem) => {
        return currentElem.category === category;
      });
      setMenuData(updatedList);
  };
  
 
 
  


  return (
    <>
      <Navbar filterItem={ filterItem}   menuList={menuList} />
      <MenuCard menuData={menuData} />
      <Footer/>
    </>
  );
}
export default Resturant 
