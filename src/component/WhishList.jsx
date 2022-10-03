import { Box } from '@mui/material';
import React, { useEffect, useReducer } from 'react'
import { makeStyles } from "@mui/styles"
import PrimarySearchAppBar from './header';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { getWishList, removeWish } from './Service/dataservice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useStyle = makeStyles({

    main:
    {
        // height: '35vh',
        height:'auto',
        // width: '80vw',
        width:'68vw',
        border: '1px solid #E4E4E4',
        position:'relative',
        left:'180px',
        top:'10px'
    },
    head:
    {
        // height:'15%',
        height:'40px',
        width:'100%',
        // border:'1px solid yellow',
        "& #home":
        {
            color: 'gray',
            position: 'relative',
            right: '480px',
            top:'10px'
        },
        "& #cart":
        {
            position: 'relative',
            right: '480px',
            top:'10px'
        }
    },
    block1:
    {
        // height:'20%',
        height:'55px',
        width:'100%',
        border:'1px solid #E4E4E4',
        position:'relative',
            bottom:'10px',
        background:'#F5F5F5',
        "& #tit":
        {
        position:'relative',
        right:'370px',
        top:'10px',
        fontWeight:'bold',
        fontSize:'25px'
        }
        
    },
    block2:
    {
        height:'80%',
        width:'100%',
        border:'1px solid #E4E4E4',
        display:'flex',
        position:'relative',
        bottom:'10px'

    },
    box1:
    {
        height:'100%',
        width:'20%',
        // border:'1px solid red'
    },
    book1:
    {
        height: '120px',
        width: '97px',
        position: 'relative',
        top: '35px',
        left:'8px'
    },
    box2:
    {
        height:'100%',
        width:'73%',
        // border:'1px solid green'
    },
    part1:
    {
        height:'38%',
        width:'30%',
        // border:'1px solid black',
        "& #title":
        {
            fontSize:'32px',
            position:'relative',
            bottom:'10px',
            display:'flex',
        justifyContent:'flex-start',
            
        }
    },
    part2:
    {
        height:'15%',
        width:'17%',
        // border:'1px solid red',
        "& #author":
        {
            color:'#9D9D9D',
            display:'flex',
        justifyContent:'flex-start',
        position:'relative',
            bottom:'50px',
        }
    },
    part3:
    {
        height:'30%',
        width:'25%',
        // border:'1px solid blue',
        position:'relative',
            bottom:'35px',
        "& #price":
        {
            fontSize:'25px',
            fontWeight:'bold',
            display:'flex',
        justifyContent:'flex-start',
        },
        "& #disc":
        {
            color:'#9D9D9D',
            position:'relative',
            bottom:'28px',
            left:'25px'
            
        }
    },
    box3:
    {
        height:'100%',
        width:'10%',
        // border:'1px solid red',
        "& #icon":
        {
            color:'#9D9D9D',
            position:'relative',
            top:'40px'
        }
    },

    ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
        
    main:
    {
        // height: '35vh',
        height:'auto',
        // width: '80vw',
        width:'92vw',
        border: '1px solid #E4E4E4',
        position:'relative',
        left:'10px',
        top:'10px'
    },
    head:
    {
        // height:'15%',
        height:'40px',
        width:'100%',
        // border:'1px solid yellow',
        "& #home":
        {
            color: 'gray',
            position: 'relative',
            right: '70px',
            top:'10px'
        },
        "& #cart":
        {
            position: 'relative',
            right: '70px',
            top:'10px'
        }
    },
    block1:
    {
        // height:'20%',
        height:'55px',
        width:'100%',
        border:'1px solid #E4E4E4',
        position:'relative',
        bottom:'10px',
        background:'#F5F5F5',
        "& #tit":
        {
        position:'relative',
        right:'20px',
        top:'10px',
        fontWeight:'bold',
        fontSize:'25px'
        }
        
    },
    block2:
    {
        // height:'80%',
        height:'250px',
        width:'100%',
        border:'1px solid #E4E4E4',
        display:'flex',
        flexDirection:'column',
        position:'relative',
        bottom:'10px'

    },
    box1:
    {
        height:'100%',
        width:'50%',
        // border:'1px solid red',
        position: 'relative',
        left:'50px'
    },
    book1:
    {
        height: '120px',
        width: '97px',
        position: 'relative',
        top: '5px',
        left:'8px'
    },
    box2:
    {
        height:'50%',
        width:'80%',
        // border:'1px solid green',
        position: 'relative',
        left:'30px'
    },
    part1:
    {
        height:'38%',
        width:'90%',
        // border:'1px solid black',
        "& #title":
        {
            fontSize:'32px',
            position:'relative',
            bottom:'35px',
            display:'flex',
        justifyContent:'flex-start',
            
        }
    },
    part2:
    {
        height:'15%',
        width:'90%',
        // border:'1px solid red',
        "& #author":
        {
            color:'#9D9D9D',
            display:'flex',
        justifyContent:'flex-start',
        position:'relative',
            bottom:'0px',
        }
    },
    part3:
    {
        height:'30%',
        width:'90%',
        // border:'1px solid blue',
        position:'relative',
            top:'10px',
        "& #price":
        {
            fontSize:'22px',
            fontWeight:'bold',
            display:'flex',
        justifyContent:'flex-start',
        },
        "& #disc":
        {
            color:'#9D9D9D',
            position:'relative',
            bottom:'25px',
            left:'10px'
            
        }
    },
    box3:
    {
        height:'100%',
        width:'10%',
        // border:'1px solid red',
        position:'relative',
        // top:'0px'
        bottom:'240px',
        left:'250px',
        "& #icon":
        {
            color:'#9D9D9D',
            position:'relative',
            top:'0px'
            // bottom:'90px'
        }
    },
    },
    ["@media only screen and (min-width:481px) and (max-width:768px)"]: {
        
        main:
        {
            // height: '35vh',
            height:'auto',
            // width: '80vw',
            width:'92vw',
            border: '1px solid #E4E4E4',
            position:'relative',
            left:'10px',
            top:'10px'
        },
        head:
        {
            // height:'15%',
            height:'40px',
            width:'100%',
            // border:'1px solid yellow',
            "& #home":
            {
                color: 'gray',
                position: 'relative',
                right: '70px',
                top:'10px'
            },
            "& #cart":
            {
                position: 'relative',
                right: '70px',
                top:'10px'
            }
        },
        block1:
        {
            // height:'20%',
            height:'55px',
            width:'100%',
            border:'1px solid #E4E4E4',
            position:'relative',
            bottom:'10px',
            background:'#F5F5F5',
            "& #tit":
            {
            position:'relative',
            right:'20px',
            top:'10px',
            fontWeight:'bold',
            fontSize:'25px'
            }
            
        },
        block2:
        {
            // height:'80%',
            height:'180px',
            width:'100%',
            border:'1px solid #E4E4E4',
            display:'flex',
            flexDirection:'row',
            position:'relative',
            bottom:'10px'
    
        },
        box1:
        {
            height:'90%',
            width:'40%',
            // border:'1px solid red',
            position: 'relative',
            left:'0px'
        },
        book1:
        {
            height: '130px',
            width: '110px',
            position: 'relative',
            top: '20px',
            left:'0px'
        },
        box2:
        {
            height:'90%',
            width:'80%',
            // border:'1px solid green',
            position: 'relative',
            left:'10px'
        },
        part1:
        {
            height:'38%',
            width:'100%',
            // border:'1px solid black',
            "& #title":
            {
                fontSize:'32px',
                position:'relative',
                bottom:'25px',
                display:'flex',
            justifyContent:'flex-start',
                
            }
        },
        part2:
        {
            height:'15%',
            width:'90%',
            // border:'1px solid red',
            "& #author":
            {
                color:'#9D9D9D',
                display:'flex',
            justifyContent:'flex-start',
            position:'relative',
                bottom:'0px',
            }
        },
        part3:
        {
            height:'30%',
            width:'90%',
            // border:'1px solid blue',
            position:'relative',
                top:'0px',
            "& #price":
            {
                fontSize:'22px',
                fontWeight:'bold',
                display:'flex',
            justifyContent:'flex-start',
            },
            "& #disc":
            {
                color:'#9D9D9D',
                position:'relative',
                bottom:'25px',
                left:'0px'
                
            }
        },
        box3:
        {
            height:'100%',
            width:'10%',
            // border:'1px solid red',
            position:'relative',
            top:'30px',
            // bottom:'0px',
            // left:'0px',
            right:'20px',
            "& #icon":
            {
                color:'#9D9D9D',
                position:'relative',
                top:'0px'
                // bottom:'90px'
            }
        },
        },

        ["@media only screen and (min-width:769px) and (max-width:1024px)"]: {
        
            main:
            {
                // height: '35vh',
                height:'auto',
                // width: '80vw',
                width:'75vw',
                border: '1px solid #E4E4E4',
                position:'relative',
                left:'10px',
                top:'10px'
            },
            head:
            {
                // height:'15%',
                height:'40px',
                width:'100%',
                // border:'1px solid yellow',
                "& #home":
                {
                    color: 'gray',
                    position: 'relative',
                    right: '280px',
                    top:'10px'
                },
                "& #cart":
                {
                    position: 'relative',
                    right: '280px',
                    top:'10px'
                }
            },
            block1:
            {
                // height:'20%',
                height:'55px',
                width:'100%',
                border:'1px solid #E4E4E4',
                position:'relative',
                bottom:'10px',
                background:'#F5F5F5',
                "& #tit":
                {
                position:'relative',
                right:'150px',
                top:'10px',
                fontWeight:'bold',
                fontSize:'25px'
                }
                
            },
            block2:
            {
                // height:'80%',
                height:'180px',
                width:'100%',
                border:'1px solid #E4E4E4',
                display:'flex',
                flexDirection:'row',
                position:'relative',
                bottom:'10px'
        
            },
            box1:
            {
                height:'90%',
                width:'40%',
                // border:'1px solid red',
                position: 'relative',
                left:'0px'
            },
            book1:
            {
                height: '130px',
                width: '110px',
                position: 'relative',
                top: '20px',
                left:'0px'
            },
            box2:
            {
                height:'90%',
                width:'80%',
                // border:'1px solid green',
                position: 'relative',
                left:'10px'
            },
            part1:
            {
                height:'38%',
                width:'100%',
                // border:'1px solid black',
                "& #title":
                {
                    fontSize:'32px',
                    position:'relative',
                    bottom:'25px',
                    display:'flex',
                justifyContent:'flex-start',
                    
                }
            },
            part2:
            {
                height:'15%',
                width:'90%',
                // border:'1px solid red',
                "& #author":
                {
                    color:'#9D9D9D',
                    display:'flex',
                justifyContent:'flex-start',
                position:'relative',
                    bottom:'0px',
                }
            },
            part3:
            {
                height:'30%',
                width:'90%',
                // border:'1px solid blue',
                position:'relative',
                    top:'0px',
                "& #price":
                {
                    fontSize:'22px',
                    fontWeight:'bold',
                    display:'flex',
                justifyContent:'flex-start',
                },
                "& #disc":
                {
                    color:'#9D9D9D',
                    position:'relative',
                    bottom:'25px',
                    // left:'0px'
                    marginRight:'150px'
                    
                }
            },
            box3:
            {
                height:'100%',
                width:'10%',
                // border:'1px solid red',
                position:'relative',
                top:'30px',
                // bottom:'0px',
                // left:'0px',
                right:'20px',
                "& #icon":
                {
                    color:'#9D9D9D',
                    position:'relative',
                    top:'0px'
                    // bottom:'90px'
                }
            },
            }
        
    

})

function WhishList() {
    const classes = useStyle();

    const[wish,setWish] = useState([])
    const navigate = useNavigate()

    const [refreshPage, setRefreshPage] = useReducer(x => x+1,0)

    useEffect(() => {
        getWishList().then((response) => {
            console.log(response);
            setWish(response.data.result)
        }).catch((error) => console.log(error))
    }, [refreshPage])


    const removeWishList = (removeId) => {

        let obj = {
            'product_id': removeId
        }
        console.log(obj, "**** Removed ****")
        removeWish(obj).then((response) => {
            console.log(response.data.result, "Book Removed")
            setRefreshPage()
        }).catch((error => console.log(error)))
    }

    const gotohome = () => {
        navigate('/dashboard')
    }
  return (
    <Box>
         <PrimarySearchAppBar/>
         <Box className={classes.head}>
         <span id='home' onClick={gotohome}>Home/</span>
                        <span id='cart'>My cart</span>
            </Box>
         <Box className={classes.main}>
         
            <Box className={classes.block1}>
                <span id='tit'>My Wishlist (02)</span>
            </Box>
            {
                wish.map((lst) => (
            <Box className={classes.block2}>
                <Box className={classes.box1}>
                <img className={classes.book1} src='../../Assets/book1.png'></img>
                </Box>
                <Box className={classes.box2}>
                    <Box className={classes.part1}>
                        <span id='title'><h6>{lst.product_id.bookName}</h6></span>
                    </Box>
                    <Box className={classes.part2}>
                        <span id='author'>{lst.product_id.author}</span>
                    </Box>
                    <Box className={classes.part3}>
                        <span id='price'>Rs.{lst.product_id.price} </span>
                        <span id='disc'><s>Rs. {lst.product_id.discountPrice}</s></span>
                    </Box>

                </Box>
                <Box className={classes.box3}>
                    <DeleteForeverIcon id='icon' onClick={()=> removeWishList(lst.product_id._id)}/>
                </Box>

            </Box>))
            }

         </Box>
      
    </Box>
  )
}

export default WhishList
