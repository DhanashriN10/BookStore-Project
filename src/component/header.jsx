import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";

import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from "@mui/styles";
import { width } from '@mui/system';
import { getbook } from './Service/dataservice';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import booksList from '../pages/dashboard'

const useStyle = makeStyles({

    imgtxt:
    {
        position:'relative',
        left:'140px'
    },
    search:
    {
        position:'relative',
        left:'150px',
        // width: '490px',
        // height: '33px',
    },
    box1:
    {
        height:'8vh',
        width:'54vw',
        // border:'1px solid black'
    },
    box2:
    {
        height:'100%',
        width:'30%',
        // border:'1px solid yellow',
        position:'relative',
        left:'280px',
        display:'flex',
        flexDirection:'row'
        
    },
    box3:
    {
        height:'100%',
        width:'50%',
        // border:'1px solid red',
        "& #profile":
        {
           position:'relative',
           bottom:'18px'
        }
        
    },
    box4:
    {
        height:'100%',
        width:'50%',
        // border:'1px solid green',
        "& #profile":
        {
           position:'relative',
           bottom:'18px'
        }
       
    },
    ["@media only screen and (min-width:320px) and (max-width:480px)"]: {

      imgtxt:
    {
        position:'relative',
        left:'1px'
    },
    search:
    {
        position:'relative',
        left:'1px',
        // width: '40px',
        // height: '33px',
        // display:'none'
    },
    blank:
    {
      display:'none'
    },
    box1:
    {
        height:'8vh',
        width:'54vw',
        // border:'1px solid black'
    },
    box2:
    {
        height:'100%',
        width:'100%',
        // border:'1px solid yellow',
        position:'relative',
        left:'5px',
        bottom:'10px',
        display:'flex',
        flexDirection:'row'
        
    },
    box3:
    {
        height:'100%',
        width:'50%',
        // border:'1px solid red',
        "& #profile":
        {
           position:'relative',
           bottom:'18px'
        }
        
    },
    box4:
    {
        height:'100%',
        width:'50%',
        // border:'1px solid green',
        "& #profile":
        {
           position:'relative',
           bottom:'18px'
        }
       
    },

    inputBase:
    {
      width:'50px'
    }

    },
    ["@media only screen and (min-width:481px) and (max-width:768px)"]: {

      imgtxt:
    {
        position:'relative',
        left:'1px'
    },
    search:
    {
        position:'relative',
        left:'25px',
        // width: '40px',
        // height: '33px',
        // display:'none'
    },
    blank:
    {
      display:'none'
    },
    box1:
    {
        height:'8vh',
        width:'54vw',
        // border:'1px solid black'
    },
    box2:
    {
        height:'100%',
        width:'100%',
        // border:'1px solid yellow',
        position:'relative',
        left:'5px',
        bottom:'4px',
        display:'flex',
        flexDirection:'row'
        
    },
    box3:
    {
        height:'100%',
        width:'50%',
        // border:'1px solid red',
        "& #profile":
        {
           position:'relative',
           bottom:'18px'
        }
        
    },
    box4:
    {
        height:'100%',
        width:'50%',
        // border:'1px solid green',
        "& #profile":
        {
           position:'relative',
           bottom:'18px'
        }
       
    },

    },
    ["@media only screen and (min-width:769px) and (max-width:1024px)"]: {

      imgtxt:
    {
        position:'relative',
        left:'1px'
    },
    search:
    {
        position:'relative',
        left:'2px',
        // border:'1px solid black'
        // width: '40px',
        // height: '33px',
        // display:'none'
    },
    blank:
    {
      display:'none'
    },
    box1:
    {
        height:'8vh',
        width:'41vw',
        // border:'1px solid black'
    },
    box2:
    {
        height:'100%',
        width:'70%',
        // border:'1px solid yellow',
        position:'relative',
        left:'150px',
        bottom:'0px',
        display:'flex',
        flexDirection:'row'
        
    },
    box3:
    {
        height:'100%',
        width:'50%',
        // border:'1px solid red',
        "& #profile":
        {
           position:'relative',
           bottom:'18px'
        }
        
    },
    box4:
    {
        height:'100%',
        width:'50%',
        // border:'1px solid green',
        "& #profile":
        {
           position:'relative',
           bottom:'18px'
        }
       
    },
    inputBase:
    {
      width:'320px'
    }

    }


})

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
backgroundColor: '#FCFCFC',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:'gray'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // ,'color':'gray'
    color:'gray',
    marginRight:'250px',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '20ch',
    },
    
  },
}));

// const booksList = (props) => {

// }

export default function PrimarySearchAppBar({searchHandler,searchTerm}) {

  const navigate = useNavigate()

    const classes = useStyle();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  

//   const [booksList, setBooksList] = React.useState([]);

//   console.log(booksList,"bookslist")
//   const onChange= (event) => {
//     setValue(event.target.value);
//     // console.log(setValue,"*****")
//   }

//   const onSearch = (searchTerm) => {
//     setValue(searchTerm);
//     console.log('search',searchTerm);
//   }

//   React.useEffect(() => {
//     getbook().then((response) => {
//         console.log(response)
//         setBooksList(response.data.result)
//         // setPostsPerPage(response.data.result)
//     }).catch((error => console.log(error)))
// }, [])

  const cartOpen = () => {
    navigate('/Cart')
  }

  const gotowish = () => {
    navigate('/WishList')

}


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          {/* <Badge badgeContent={4} color="error"> */}
            <ShoppingCartOutlinedIcon />
            {/* <ShoppingCartOutlinedIcon /> */}
          {/* </Badge> */}
        </IconButton>
        <p onClick={cartOpen}>Cart</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          {/* <Badge badgeContent={17} color="error"> */}
            <FavoriteIcon />
            {/* <FavoriteIcon/> */}
          {/* </Badge> */}
        </IconButton>
        <p onClick={gotowish}>WishList</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {/* <AccountCircle /> */}
          <PermIdentityOutlinedIcon  />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

   return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#A03037' }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <IconButton className={classes.imgtxt}>
            <img src='../../Assets/education.png'></img>
          
          <Typography
            variant="h6"
            color={"white"}
            marginLeft="14px"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Bookstore
          </Typography>
          </IconButton>
          <Search className={classes.search}>
            <SearchIconWrapper className={classes.Icon}>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase className={classes.inputBase}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search'}}
              sx={{ display: { xs: 'block', sm: 'block', md: 'block', lg: 'block' } }}
              
              value={searchTerm}
              onChange={searchHandler}  
              type="text"
            />
              
             {/* {
                booksList.filter(item => {
                  const searchTerm = value.toLowerCase();
                  const booknm = item.bookName.toLowerCase();

                  return booknm.startsWith(searchTerm)
                })
                .map((item)=>(
                  <div onClick={() => onSearch(item.bookName)}
                  key={item.bookName}>
                    {item.bookName}</div>
                ))
              }            */}
            {/* </StyledInputBase> */}
          </Search>
          {/* <Button onClick={()=>onSearch(value)}>search</Button> */}
          <Box sx={{ flexGrow: 1 }} className={classes.blank}/>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}
        
            {/* <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <Box className={classes.box1}>
                <Box className={classes.box2}>
                    <Box className={classes.box3}>
                         <PermIdentityOutlinedIcon sx={{marginTop:'10px'}}/>
                         <p id='profile'>Profile</p>

                    </Box>
                    <Box className={classes.box4}>
                    <ShoppingCartOutlinedIcon sx={{marginTop:'10px'}} onClick={cartOpen}/>
                    <p id='profile'>Cart</p>
                        
                    </Box>
                    <Box className={classes.box4}>
                    <FavoriteIcon sx={{marginTop:'10px'}} onClick={gotowish}/>
                    <p id='profile'>WishList</p>
                        
                    </Box>

                </Box>

            </Box>
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* <AccountCircle /> */}
              {/* <PermIdentityOutlinedIcon />
              
            </IconButton> */} 
            
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
