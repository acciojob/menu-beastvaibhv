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
    return(
        <div>
            <div>
            <h1>Our Menu</h1>
            <div className='navbar'>
                <button onClick={handleReset}>All</button>
                <button onClick= {handleBreakfast}>Breakfast</button>
                <button onClick={handleLunch}>Lunch</button>
                <button onClick={handleShakes}>Shakes</button>
            </div>
            </div>
            <div className="menu-list">
                {filteredMenu.map((item) => <MenuItem item = {item} key={item.id}/>)}
            </div>
        </div>
    )
}
export default Body;