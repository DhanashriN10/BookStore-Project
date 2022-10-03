import { Box, Paper } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from "@mui/styles";
// import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarIcon from '@mui/icons-material/Star';

const useStyle = makeStyles({
    block1:
    {
        height: '40vh',
        width: '18vw',
        // position: 'relative',
        // bottom:'100px'
        // border: '1px solid black'
    },
    block2:
    {
        height: '94%',
        width: '84%',
        // border: '1px solid red',
        // position: 'relative',
        // left: '40px',
        // top: '40px',
        display: 'flex',
        flexDirection: 'column'

    },
    block3:
    {
        height: '180px',
        width: '232px',
        // border: '1px solid green',
        backgroundColor: '#F5F5F5'
    },
    img:
    {
        position: 'relative',
        top: '17px'
    },
    block4:
    {
        height: '100px',
        width: '200px',
        // border: '1px solid blue',
        display:'flex',
        flexDirection:'column',
        textAlign:'start',
        position:'relative',
        left:'20px'
    },
    txt1:
    {
        height: '27px',
        width: '212px',
        // border:'1px solid black'
    },
    txt2:
    {
        height: '18px',
        width: '212px',
        // border:'1px solid blue',
        "& #author":
        {
            marginRight: '65px',
            position: 'relative',
            bottom: '5px'
        }
    },

    txt3:
    {
        height: '27px',
        width: '212px',
        // border:'1px solid green',
        "& #cnt":
        {
            position: 'relative',
            bottom: '17px',
            // right: '15px'
            left:'55px'
        },
    },
    txt4:
    {
        height: '25px',
        width: '212px',
        // border:'1px solid pink',
        "& #price":
        {
            marginRight: '45px'
        }
    },
    star:
    {
        height: '20px',
        width: '50px',
        // border:'1px solid green',
        position: 'relative',
        // left: '24px',
        top: '5px',
        backgroundColor: '#388E3C',
        color: 'white',
        "& #rate":
        {
            position: 'relative',
            bottom: '7px',
        }
    },

    ["@media only screen and (min-width:320px) and (max-width:480px)"]: {

        block1:
        {
            height: '54vh',
            width: '55vw',
            // position: 'relative',
            // bottom:'100px'
            // border: '1px solid black',
            position: 'relative',
            left:'50px',
        },
        block2:
        {
            height: '91%',
            width: '117%',
            // border: '1px solid red',
            // position: 'relative',
            // left: '40px',
            // top: '40px',
            display: 'flex',
            flexDirection: 'column'
    
        },
        block3:
        {
            height: '140px',
            width: '205px',
            // border: '1px solid green',
            backgroundColor: '#F5F5F5'
        },
        img:
        {
            height:'110px',
             width:'90px',
            position: 'relative',
            top: '10px'
        },
        block4:
        {
            height: '100px',
            width: '205px',
            // border: '1px solid blue',
            display:'flex',
            flexDirection:'column',
            textAlign:'start',
            position:'relative',
            left:'0px'
        },
        txt1:
        {
            height: '27px',
            width: '200px',
            // border:'1px solid black',
            "& #bk":
            {
                fontSize:'15px',
                marginLeft:'4px'
            }
        },
        txt2:
        {
            height: '18px',
            width: '210px',
            // border:'1px solid blue',
            "& #author":
            {
                marginRight: '65px',
                position: 'relative',
                bottom: '5px',
                fontSize:'15px',
                marginLeft:'5px'
            }
        },
    
        txt3:
        {
            height: '27px',
            width: '212px',
            // border:'1px solid green',
            "& #cnt":
            {
                position: 'relative',
                bottom: '17px',
                // right: '15px'
                left:'55px'
            },
        },
        txt4:
        {
            height: '25px',
            width: '212px',
            // border:'1px solid pink',
            "& #price":
            {
                marginRight: '45px',
                marginLeft:'5px'
            }
        },
        star:
        {
            height: '20px',
            width: '50px',
            // border:'1px solid green',
            position: 'relative',
            // left: '24px',
            top: '5px',
            marginLeft:'5px',
            backgroundColor: '#388E3C',
            color: 'white',
            "& #rate":
            {
                position: 'relative',
                bottom: '7px',
            }
        },
    
    },
    ["@media only screen and (min-width:481px) and (max-width:768px)"]: {

        block1:
        {
            height: '38vh',
            width: '44vw',
            position: 'relative',
            left:'15px',
            // border: '1px solid black'
        },
        block2:
        {
            height: '92%',
            width: '94%',
            // border: '1px solid red',
            // position: 'relative',
            // left: '40px',
            // top: '40px',
            display: 'flex',
            flexDirection: 'column'
    
        },
        block3:
        {
            height: '140px',
            width: '196px',
            // border: '1px solid green',
            backgroundColor: '#F5F5F5'
        },
        img:
        {
            height:'110px',
             width:'80px',
            position: 'relative',
            top: '10px'
        },
        block4:
        {
            height: '124px',
            width: '196px',
            // border: '1px solid blue',
            display:'flex',
            flexDirection:'column',
            textAlign:'start',
            position:'relative',
            left:'0px'
        },
        txt1:
        {
            height: '32px',
            width: '196px',
            // border:'1px solid black',
            "& #bk":
            {
                fontSize:'16px',
                marginLeft:'2px'
            }
        },
        txt2:
        {
            height: '22px',
            width: '196px',
            // border:'1px solid blue',
            "& #author":
            {
                marginRight: '65px',
                position: 'relative',
                bottom: '5px',
                fontSize:'15px',
                marginLeft:'5px'
            }
        },
    
        txt3:
        {
            height: '30px',
            width: '196px',
            // border:'1px solid green',
            "& #cnt":
            {
                position: 'relative',
                bottom: '17px',
                // right: '15px'
                left:'55px'
            },
        },
        txt4:
        {
            height: '30px',
            width: '196px',
            // border:'1px solid pink',
            "& #price":
            {
                marginRight: '45px',
                marginLeft:'5px'
            }
        },
        star:
        {
            height: '20px',
            width: '50px',
            // border:'1px solid green',
            position: 'relative',
            // left: '24px',
            top: '5px',
            marginLeft:'5px',
            backgroundColor: '#388E3C',
            color: 'white',
            "& #rate":
            {
                position: 'relative',
                bottom: '7px',
            }
        },
    
    },

    ["@media only screen and (min-width:769px) and (max-width:1024px)"]: {

        block1:
        {
            height: '30vh',
            width: '24vw',
            position: 'relative',
            // left:'15px',
            // border: '1px solid black'
        },
        block2:
        {
            height: '92%',
            width: '94%',
            // border: '1px solid red',
            // position: 'relative',
            // left: '40px',
            // top: '40px',
            display: 'flex',
            flexDirection: 'column'
    
        },
        block3:
        {
            height: '140px',
            width: '174px',
            // border: '1px solid green',
            backgroundColor: '#F5F5F5'
        },
        img:
        {
            height:'115px',
             width:'90px',
            position: 'relative',
            top: '10px'
        },
        block4:
        {
            height: '137px',
            width: '170px',
            // border: '1px solid blue',
            display:'flex',
            flexDirection:'column',
            textAlign:'start',
            position:'relative',
            left:'0px'
        },
        txt1:
        {
            height: '35px',
            width: '170px',
            // border:'1px solid black',
            "& #bk":
            {
                fontSize:'14px',
                marginLeft:'2px'
            }
        },
        txt2:
        {
            height: '30px',
            width: '170px',
            // border:'1px solid blue',
            "& #author":
            {
                marginRight: '65px',
                position: 'relative',
                bottom: '5px',
                fontSize:'17px',
                marginLeft:'5px'
            }
        },
    
        txt3:
        {
            height: '35px',
            width: '170px',
            // border:'1px solid green',
            "& #cnt":
            {
                position: 'relative',
                bottom: '17px',
                // right: '15px'
                left:'55px'
            },
        },
        txt4:
        {
            height: '30px',
            width: '196px',
            // border:'1px solid pink',
            "& #price":
            {
                marginRight: '45px',
                marginLeft:'5px'
            }
        },
        star:
        {
            height: '20px',
            width: '50px',
            // border:'1px solid green',
            position: 'relative',
            // left: '24px',
            top: '5px',
            marginLeft:'5px',
            backgroundColor: '#388E3C',
            color: 'white',
            "& #rate":
            {
                position: 'relative',
                bottom: '7px',
            }
        },
    
    }



})

function Book(props) {
    const classes = useStyle();

    const [booksList, setBooksList] = useState({ bookName: '', author: '', price: '', discountPrice: '' })
    return (
        <Box className={classes.block1}>
            <Paper className={classes.block2}>
                <Box className={classes.block3}>
                    <img className={classes.img} src='../../Assets/book1.png' height='140px' width='120px'></img>

                </Box>
                <Box className={classes.block4}>
                    <Box className={classes.txt1}>
                        <span id='bk'><b>{props.book.bookName}</b></span>
                    </Box>
                    <Box className={classes.txt2}>
                        <span id='author'>{props.book.author}</span>
                    </Box>
                    <Box className={classes.txt3}>
                        <Box className={classes.star}>
                            <span id='rate'>4.5</span>
                            {/* <StarBorderOutlinedIcon /> */}
                            <StarIcon />
                        </Box>
                        <span id='cnt'>
                            (20)
                        </span>

                    </Box>
                    <Box className={classes.txt4}>
                        <span id='price'><b>Rs. {props.book.discountPrice} </b>
                            <s>Rs. {props.book.price}</s></span>

                    </Box>


                </Box>


            </Paper>

        </Box>
    )
}

export default Book
