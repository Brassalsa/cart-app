import LINKS from '../LINKS';
import './Header.css';
import { NavLink, useNavigate} from "react-router-dom";
import Badge from '@mui/material-next/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export default function Header({cartCount}){
    const navigate = useNavigate();
    function openMenu(e){
      const nav = document.querySelector('.navigation');
      const navToggle =  document.querySelector('.mobile-nav-toggle');
      const visibility = nav.getAttribute('data-visible');
      if (visibility == 'false') {
        nav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true);
      } else {
        nav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false);
      }
    }


    return (
    <header>
        
        <h2 className='title' onClick={()=>navigate(LINKS.home)}>compromise.io</h2>
          
          <button onClick={openMenu} aria-controls='navigation'
          aria-expanded='false' className='mobile-nav-toggle'
          >
          <svg className='hamburger' viewBox='0 0 100 100' width='10'>
          <rect className='line top' 
          width='80' height='10'
          x='10' y='25' rx='5'
          ></rect>
          <rect className='line middle' 
          width='80' height='10'
          x='10' y='45' rx='5'
          ></rect> 
          <rect className='line bottom' 
          width='80' height='10'
          x='10' y='65' rx='5'
          ></rect>   
          </svg>

          </button>
          
          <nav data-visible="false" className="navigation" id='navigation'>
            <NavLink to={LINKS.home}
            onClick={openMenu}
             className={({ isActive, isPending }) =>
             isActive
               ? "active"
               : isPending
               ? "pending"
               : ""
           }>Home</NavLink>
            <NavLink to={LINKS.products} 
            onClick={openMenu}
            className={({ isActive, isPending }) =>
            isActive
              ? "active"
              : isPending
              ? "pending"
              : ""
          }>Products</NavLink>
          <NavLink to={LINKS.about}
          onClick={openMenu}
            className={({ isActive, isPending }) =>
            isActive
              ? "active"
              : isPending
              ? "pending"
              : ""
          }>About</NavLink>
            <NavLink to={LINKS.cart}
            onClick={openMenu}
            className={({ isActive, isPending }) =>
            isActive
              ? "active cart"
              : isPending
              ? "pending cart"
              : "cart"
          }><Badge badgeContent={cartCount}><ShoppingCartIcon/></Badge></NavLink>
        
          </nav>
          <div className="empty" onClick={openMenu}></div>
    </header>
    )
}