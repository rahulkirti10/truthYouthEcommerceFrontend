import React from "react";
import "./Header.css";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import HeaderMenu from "./HeaderMenu";
// import MenuSharpIcon from '@mui/icons-material/MenuSharp';
// import Drawer from '@mui/material/Drawer';

function AppHeader() {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 4,
      top: 6,
    },
  }));

  const clickLink = (option) => {
    if (option === "SignUp") {
      navigate(`/signup`);
    } else {
      navigate(`/login`);
    }
  };

  // const [state, setState] = useState({
  //   right: false,
  // });

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }
  //   setState({ ...state, [anchor]: open });
  // };

  // const list= (anchor) => (
  //   <div className='BurgerMenuA' >
  //   <div className='Cross'>
  //   <ClearSharpIcon sx={{cursor:'pointer'}} onClick={toggleDrawer(anchor, false)}/>
  //   </div>
  //   <div className='SideNav'>
  //         <label className='link' onClick={() => handleClick("Handbags")} >Handbags</label>
  //         <label className='link'>Watches</label>
  //         <label className='link'>Skincare</label>
  //         <label className='link'>Jewellery</label>
  //         <label className='link'>Apparels</label>
  //   </div>
  //   </div>);

  return (
    <div className="Head">
      <div className="BigHead1">
        <div className="HeadLogo"></div>
        <HeaderMenu />
      </div>

      <div className="BigHead2">
        <div className="HeadSearch">
          <img
            className="SearchIcon"
            src="../Images/search-icon.svg"
            alt="searchicon"
          />
          <input
            type="text"
            className="Search"
            placeholder="Search for Products or Brands......"
          />
        </div>
        <div className="HeadIcons">
          <div className="HoverIcon">
            <label className="link">
              <PersonOutlinedIcon />
            </label>

            <div className="SubMenu">
              <div className="SubMenuHeading">
                <label className="One">Welcome</label>
                <label>To acccess accounts & manage orders</label>
                <label className="Login_Button" onClick={clickLink}>
                  Login/Signup
                </label>
              </div>
              <div className="SubMenuBox">
                <label>Orders</label>
                <label>Wishlist</label>
                <label>Contact Us</label>
              </div>
            </div>
          </div>

          <Link className="link2">
            <FavoriteBorderOutlinedIcon />
          </Link>

          <Link className="link2">
            {/* <StyledBadge variant="dot" color="primary"> */}
            <ShoppingBagOutlinedIcon />
            {/* </StyledBadge> */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;

//   {/* {['right'].map((anchor) => (
//     <React.Fragment key={anchor}>
//  <MenuSharpIcon fontSize='small' sx={{ width:20, height:20, m:0.5, cursor:'pointer'}} onClick={toggleDrawer(anchor, true)}/>
//  <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//   {list}
//       </Drawer>
//     </React.Fragment>
//   ))}  */}

// {/* <div className='Menu2'>
// {['right'].map((anchor) => (
//     <React.Fragment key={anchor}>
//  <MenuSharpIcon fontSize='small' sx={{ width:20, height:20, m:0.5, cursor:'pointer'}} onClick={toggleDrawer(anchor, true)}/>
//  <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//   {list(anchor)}
//       </Drawer>
//     </React.Fragment>
//   ))}
// </div>     */}
