import React, {useState} from 'react';
import  ReactDOM  from 'react';
import MenuItem from './MenuItem';
import { menuItem } from '../utils/menuList';


const Body =()=>{
    let [menu , setMenu] = useState(menuItem);
    let [filteredMenu, setFilteredMenu] = useState(menu);
    const handleReset = () => {
        setFilteredMenu(menu);
      };
    
      const handleBreakfast = () => {
       setFilteredMenu(menu.filter((item)=>item.category === "breakfast"))
      };
    
      const handleLunch = () => {
        setFilteredMenu(menu.filter((item)=>item.category === "lunch"))
      };
    
      const handleShakes = () => {
        setFilteredMenu(menu.filter((item)=>item.category === "shakes"))
      };

      const showBreakfastButton = filteredMenu.some((item) => item.category === "breakfast");
      const showLunchButton = filteredMenu.some((item) => item.category === "lunch");
      const showShakesButton = filteredMenu.some((item) => item.category === "shakes");
    return(
        <div >
            <div id= "main" >
            <h1>Our Menu</h1>
            <div className='navbar'>
                <button  onClick={handleReset}>All</button>
                {showBreakfastButton && <button id="filter-btn-1" data-test-id="menu-item-breakfast" onClick={handleBreakfast}>Breakfast</button>}
          {showLunchButton && <button id="filter-btn-2" data-test-id="menu-item-lunch" onClick={handleLunch}>Lunch</button>}
          {showShakesButton && <button id="filter-btn-3" data-test-id="menu-item-shakes" onClick={handleShakes}>Shakes</button>}
            </div>
            </div>
            <div className="menu-list">
                {filteredMenu.map((item) => <MenuItem item = {item} key={item.id}/>)}
            </div>
        </div>
    )
}
export default Body;