import { Link, NavLink } from 'react-router-dom';
const Header = () => {
     return (
          <div className="w-full flex justify-center">
               <ul className="h-[50px] flex flex-row justify-around items-center w-[50%] text-black bg-gray-300 shadow-1xl font-semibold rounded-sm ">
                    <NavLink to="/"> <li>Task List</li> </NavLink>
                    <NavLink to="/add"> <li>Add</li> </NavLink>
                    <NavLink to="/update"> <li>Update</li> </NavLink>
               </ul>
          </div>
     );
};

export default Header;
