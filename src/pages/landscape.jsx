import React from 'react'
import { makeStyles } from "@mui/styles";
import { Box, Paper } from "@mui/material";
import Button from '@mui/material/Button';
import Login from '../component/Login';
import Signup from '../component/Signup';
import { useState } from 'react';

const useStyle = makeStyles({
  land:
  {
    height: "99.60vh",
    width: "99.70vw",
    //  border: "1px solid red",
    backgroundColor: "gray",
    // background: "#F5F5F5",
  },
  inner:
  {
    height: "80%",
    width: "70%",
    // border: "1px solid green",
    // backgroundColor:"gray",
    position: "relative",
    left: "220px",
    top: "80px"
  },
  part1:
  {
    height: "320px",
    width: "600px",
    // border: "1px solid red",
    background: "#F5F5F5",
    position: "absolute",
    left: "220px",
    top: "130px",

    borderRadius: "20px",
    "& #img": {
      position: "relative",
      right: "120px",
      top: "40px",
      borderRadius: "100px"

    }
  },
  imgbox:
  {
    height: "260px",
    width: "600px",
    // border:"1px solid black"
  },
  msg:
  {
    fontSize: "19px",
    fontWeight: "bolder",
    position: "relative",
    right: "110px"
  },
  part2:
  {
    height: "380px",
    width: "340px",
    // border: "1px solid green",
    background: "white",
    position: "absolute",
    left: "560px",
    top: "100px",
    zIndex: "2",
    borderRadius: "5px"
  },
  menu:
  {
    height: "70px",
    width: "340px",
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    // justifyContent:"space-around"
  },
  login:
  {
    height: "70px",
    width: "340px",
    // border: "1px solid blue",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    "& #btn":
    {
      fontSize: "20px",
      fontWeight: "bolder",
      top: "10px"
    },

  },

  ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
    land:
    {
      height: "99.60vh",
      width: "99vw",
      //  border: "1px solid red",
      backgroundColor: "gray",
      // background: "#F5F5F5",
    },
    inner:
    {
      height: "80%",
      width: "80%",
      // border: "1px solid green",
      // backgroundColor:"gray",
      position: "relative",
      left: "1px",
      top: "30px"
    },
    part1:
    {
      height: "0px",
      width: "0px",
      // border: "1px solid red",
      background: "#F5F5F5",
      position: "absolute",
      left: "15px",
      top: "100px",
  
      borderRadius: "20px",
      "& #img": {
        height:"0px",
         width:"0px",
        position: "relative",
        right: "250px",
        top: "20px",
        borderRadius: "100px"
  
      }
    },
    imgbox:
    {
      height: "260px",
      width: "600px",
      // border:"1px solid black"
    },
    msg:
    {
      fontSize: "0px",
      fontWeight: "bolder",
      position: "relative",
      bottom:'165px',
      right: "12px"
    },
    part2:
    {
      height: "320px",
      width: "240px",
      // border: "1px solid green",
      background: "white",
      position: "absolute",
      left: "40px",
      top: "50px",
      zIndex: "2",
      borderRadius: "5px"
    },
    menu:
    {
      height: "48px",
      width: "240px",
      // border: "1px solid black",
      display: "flex",
      flexDirection: "column",
      // justifyContent:"space-around"
    },
    login:
    {
      height: "45px",
      width: "240px",
      // border: "1px solid blue",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      "& #btn":
      {
        fontSize: "20px",
        fontWeight: "bold",
        top: "0px"
      },
  
    },
  
    
  },

  ["@media only screen and (min-width:481px) and (max-width:768px)"]: {

    land:
  {
    // height: "99.60vh",
    // width: "99.70vw",
    height: "99vh",
    width: "99vw",
    //  border: "1px solid red",
    backgroundColor: "gray",
    // background: "#F5F5F5",
  },
  inner:
  {
    height: "80%",
    width: "85%",
    // border: "1px solid green",
    // backgroundColor:"gray",
    position: "relative",
    // left: "40px",
    left:'30px',
    top: "80px"
  },
  part1:
  {
    // height: "260px",
    // width: "230px",
    height: "250px",
    width: "220px",
    // border: "1px solid red",
    background: "#F5F5F5",
    position: "absolute",
    left: "0px",
    top: "130px",

    borderRadius: "20px",
    "& #img": {
      height:"150px",
         width:"150px",
      position: "relative",
      // right: "210px",
      right: "210px",
      top: "40px",
      borderRadius: "100px"

    }
  },
  imgbox:
  {
    height: "260px",
    width: "600px",
    // border:"1px solid black"
  },
  msg:
  {
    fontSize: "13px",
    fontWeight: "bolder",
    position: "relative",
    right: "25px",
    bottom:'50px',
    // right: "12px"
  },
  part2:
  {
    // height: "320px",
    width: "240px",
    height: "300px",
    // width: "190px",
    // border: "1px solid green",
    background: "white",
    position: "absolute",
    left: "175px",
    // left: "165px",
    // top: "100px",
    top: "110px",
    zIndex: "2",
    borderRadius: "5px"
  },
  menu:
  {
    // height: "60px",
    width: "240px",
    height: "60px",
    // width: "190px",
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    // justifyContent:"space-around"
  },
  login:
  {
    // height: "70px",
    width: "240px",
    height: "50px",
    // width: "190px",
    // border: "1px solid blue",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    "& #btn":
    {
      fontSize: "18px",
      fontWeight: "bolder",
      top: "1px"
    },

    
  }
},
["@media only screen and (min-width:769px) and (max-width:1024px)"]: {

  land:
  {
    // height: "106vh",
    // width: "106vw",
    height: "76vh",
    width: "82vw",
    //  border: "1px solid red",
    backgroundColor: "gray",
    // background: "#F5F5F5",
  },
  inner:
  {
    height: "84%",
    width: "84%",
    // border: "1px solid green",
    // backgroundColor:"gray",
    position: "relative",
    left: "50px",
    top: "30px"
  },
  part1:
  {
    // display: "none"
    // visibility:'hidden'
    height: "320px",
    width: "400px",
    // border: "1px solid red",
    background: "#F5F5F5",
    position: "absolute",
    left: "0px",
    top: "210px",

    borderRadius: "20px",
    "& #img": {
      position: "relative",
      right: "180px",
      top: "40px",
      borderRadius: "100px"

    }
  },
  imgbox:
  {
    height: "260px",
    width: "600px",
    // border:"1px solid black"
  },
  msg:
  {
    fontSize: "18px",
    fontWeight: "bolder",
    position: "relative",
    right: "85px"
  },
  part2:
  {
    height: "400px",
    width: "280px",
    // border: "1px solid green",
    background: "white",
    position: "absolute",
    left: "230px",
    top: "170px",
    zIndex: "2",
    borderRadius: "5px"
  },
  menu:
  {
    height: "80px",
    width: "275px",
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    // justifyContent:"space-around"
  },
  login:
  {
    height: "74px",
    width: "275px",
    // border: "1px solid blue",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    "& #btn":
    {
      fontSize: "23px",
      fontWeight: "bolder",
      top: "10px"
    },

}
}

  // signup:
  // {
  //   height: "70px",
  //   width: "170px",
  //   // border: "1px solid red",
  //   "& #btn":
  //   {
  //     fontSize: "20px",
  //     fontWeight: "bolder",
  //     top: "10px"
  //   }

  // }


})
function Landscape() {
  const classes = useStyle();

  const [id, setid] = useState(true)

  const loginpage = () => {
    setid(true)

  }
  const signup_page = () => {
    setid(false)
  }

  return (
    <Box className={classes.land}>
      <Box className={classes.inner}>
        <Paper elevation={3} className={classes.part1}>
          <Box className={classes.imgbox}>
            <img src='../../Assets/component.png' height="200px" width="200px" id='img'></img>
          </Box>
          <span className={classes.msg}>ONLINE BOOK SHOPPING</span>
        </Paper>
        <Paper elevation={3} className={classes.part2}>
          <Box className={classes.menu}>
            <Box className={classes.login}>
              <Button color="inherit" variant="text" id="btn" onClick={loginpage}>LOGIN </Button>
              <Button color="inherit" variant="text" id="btn" onClick={signup_page}>SIGNUP</Button>
            </Box>
            <Box className={classes.actions}>
              {
                id ? <Login loginpage={loginpage} /> : <Signup signup_page={signup_page} />
              }


            </Box>


          </Box>

        </Paper>

      </Box>

    </Box>
  )
}

export default Landscape
