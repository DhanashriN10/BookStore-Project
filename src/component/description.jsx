import { Box, Button, Paper } from '@mui/material'
import React from 'react'
import { makeStyles } from "@mui/styles"
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarRateIcon from '@mui/icons-material/StarRate';
import { addToCart, addToInfo, getCard, getWishList, wishList } from './Service/dataservice';

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReducer } from 'react';

const useStyle = makeStyles({
    main:
    {
        height: '120vh',
        width: '80vw',
        // border: '5px solid black',
        background: '#FFFF',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        bottom: '120px'
    },
    part1:
    {
        height: '100%',
        width: '38%',
        // border: '1px solid blue',
        display: 'flex',
        flexDirection: 'row'
    },
    images:
    {
        height: '60%',
        width: '32%',
        // border: '1px solid black',
        "& #txt":
        {
            color: 'gray',
            marginLeft: '90px'
        },
        "& #a2":
        {
            position: 'relative',
            top: '42px',
            left: '44px'
        }

    },
    pic1:
    {
        height: '52px',
        width: '44px',
        // border:'1px solid red',
        background: '#FFE7E9',
        position: 'relative',
        left: '90px',
        top: '42px',
        "& #a1":
        {
            marginTop: '5px',
        }
    },
    img:
    {
        height: '100%',
        width: '65%',
        // border: '1px solid red'
    },
    image1:
    {
        height: '36%',
        width: '100%',
        position: 'relative',
        top: '60px',
        // border:'1px solid red', 
    },
    book1:
    {
        height: '275px',
        width: '260px',
        position: 'relative',
        top: '21px'
    },

    boxes:
    {
        height: '12%',
        width: '100%',
        position: 'relative',
        top: '70px',
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    add:
    {
        height: '100%',
        width: '46%',
        // border: '1px solid blue',
        backgroundColor: '#A03037',
        "& #caption1":
        {
            position: 'relative',
            top: '5px',
            color: 'white'
        }

    },
    wish:
    {
        height: '100%',
        width: '47%',
        // border: '1px solid green',
        backgroundColor: '#383838',
        color: 'white',
        "& #fav":
        {
            position: 'relative',
            top: '5px',
            color: 'white',
            right: '8px'
        }
    },
    part2:
    {
        height: '100%',
        width: '60%',
        // border: '1px solid green'
    },
    about:
    {
        height: '22%',
        width: '100%',
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column'
    },
    blank:
    {
        height: '26%',
        width: '100%',
        // border:'1px solid red'
    },
    title:
    {
        height: '17%',
        width: '70%',
        // border:'1px solid yellow',

        "& #tit":
        {
            position: 'relative',
            // right: '210px',
            left: '30px',
            fontSize: '28px',
            fontWeight: "bolder",
            display: 'flex'
        }
    },
    author:
    {
        height: '17%',
        width: '70%',
        // border:'1px solid pink',
        "& #auth":
        {
            position: 'relative',
            // right: '270px',
            left: '30px',
            top: '5px',
            color: 'gray',
            display: 'flex'
        }

    },
    rate:
    {
        height: '15%',
        width: '70%',
        // border:'1px solid brown',
        left: '6px',
        display: 'flex',
        position: 'relative',
        "& #pnt":
        {
            position: 'relative',
            // bottom: '20px',
            // right: '240px'
            left: '30px',
            top: '4px'

        }
    },
    price:
    {
        height: '15%',
        width: '70%',
        // border:'1px solid gray',
        display: 'flex',
        position: 'relative',
        left: '30px',

        "& #rs":
        {
            fontSize: '20px',
            position: 'relative',
            // right: '254px',
            top: '10px'
        },
        "& #cross":
        {
            position: 'relative',
            // right: '250px',
            left: '10px',
            top: '12px'
        }
    },

    detail:
    {
        height: '16%',
        width: '100%',
        // border: '1px solid blue',
        "& #txt1":
        {
            position: 'relative',
            top: '20px',
            right: '270px',
            color: 'gray'
        },

    },
    para:
    {
        height: '50%',
        width: '93%',
        // border:'1px solid black',
        position: 'relative',
        left: '45px',
        top: '25px',
        color: 'gray',
        fontSize: '15px',
        textAlign: 'left'
    },
    feed:
    {
        height: '4%',
        width: '100%',
        // border: '1px solid red',
        "& #cust":
        {
            fontSize: '21px',
            position: 'relative',
            right: '220px'
        }
    },
    star:
    {
        height: '25%',
        width: '94%',
        // border: '1px solid green',
        backgroundColor: '#F5F5F5',
        position: 'relative',
        left: '40px'
    },
    gray1:
    {
        height: '15%',
        width: '100%',
        // border: '1px solid black',
        display: 'flex',
        "& #over":
        {
            position: 'relative',
            left: '30px',
            top: '8px',
            fontSize: '14px'
        }
    },
    gray2:
    {
        height: '17%',
        width: '25%',
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        left: '30px',
        "& #star":
        {
            fontSize: '20px'
        }

    },
    gray3:
    {
        height: '36%',
        width: '92%',
        // border: '1px solid black',
        backgroundColor: "#FFFFFF",
        position: "relative",
        left: "29px",
        "& #review": {
            width: "380px",
            height: "28px",
            display: "flex",
            border: "none",
        }
    },
    gray4:
    {
        height: '24%',
        width: '96%',
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        "& #btn":
        {
            height: '32px',
            width: '75px',
            position: 'relative',
            top: '10px',
            borderRadius: '0px'
        }

    },
    green_box:
    {

        height: '23px',
        width: '52px',
        // border:'1px solid green',
        position: 'relative',
        left: '26px',
        top: '5px',
        backgroundColor: '#388E3C',
        color: 'white',
        "& #point":
        {
            position: 'relative',
            bottom: '5px'
        }
    },
    review:
    {
        height: '16%',
        width: '100%',
        // border: '1px solid blue'
    },
    name1: {
        width: "55%",
        height: "25%",
        // border: "1px solid black",
        position: 'relative',
        left: '20px',
        display: "flex",
        alignItems: "flex-end",
        "& #dn": {
            width: "6%",
            height: "68%",
            fontSize: "12px",
            backgroundColor: "#F5F5F5",
            borderRadius: "50%",
            border: "1px solid #E4E4E4",
            color: "#707070",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        "& #name": {
            fontSize: "13px",
            color: "#0A0102",
            position: "relative",
            left: "8px",
            bottom: "4px",
            fontWeight: 500
        },
    },
    starRating1: {
        width: "20%",
        height: "12%",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "#707070",
        position: "relative",
        top: '5px',
        left: "48px",
        "& #star1": {
            fontSize: "20px",
            color: "#FFCE00"
        },
        "& #star1-1": {
            fontSize: "20px",
        }
    },
    reviewFeedback1: {
        width: "92%",
        height: "40%",
        // border: "1px solid black",
        fontSize: "14px",
        color: "#707070",
        textAlign: "start",
        position: "relative",
        top: "15px",
        left: "48px"
    },

    count:
    {
        // height:'62%',
        // width:'97%',
        // // border:'1px solid green',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        left: '10px',

        height: '40px',
        width: '130px',
        // border: '1px solid gray',

    },
    count1:
    {
        height: '100%',
        width: '30%',
        // border:'1px solid black',
        position: 'relative',
        top: '10px',
        "& #symbol1":
        {
            color: 'gray'
        }
    },
    count2:
    {
        height: '100%',
        width: '30%',
        // border:'1px solid black',
        position: 'relative',
        top: '10px',
        "& #num":
        {
            position: 'relative',
            top: '2px',
            color: 'gray',
        }

    },
    square:
    {
        height: '15px',
        width: '30px',
        border: '2px solid gray',
        position: 'relative',
        //  left:'14px',
        //  top:'4px',
        color: 'gray',
        bottom: '18px'
    },
    count3:
    {
        // height: '100px',
        // width: '50px',
        // border:'1px solid black',
        // position: 'relative',
        // top: '10px',

        // "& #symbol1":
        // {
        //     color: 'gray',
        //     width:'60px',
        //     height:'60px',
        //     border:'1px solid gray',
        //     fontSize:'25px',
        //     borderRadius:'50%',


        // }

        height: '100%',
        width: '30%',
        // border:'1px solid black',
        position: 'relative',
        top: '10px',
        "& #symbol1":
        {
            color: 'gray'
        }
    },

    ["@media only screen and (min-width:320px) and (max-width:480px)"]: {

        main:
    {
        height: '340vh',
        width: '94vw',
        // border: '2px solid black',
        background: '#FFFF',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        bottom: '10px'
    },
    part1:
    {
        // height: '19%',
        height:'25%',
        width: '100%',
        // border: '1px solid blue',
        display: 'flex',
        flexDirection: 'row'
    },
    images:
    {
        height: '0%',
        width: '0%',
        // border: '1px solid black',
        "& #txt":
        {
            color: 'gray',
            marginLeft: '50px'
        },
        "& #a2":
        {
            height:'0px',
            position: 'relative',
            top: '42px',
            left: '14px'
        }

    },
    pic1:
    {
        // height: '52px',
        // width: '44px',
        // // border:'1px solid red',
        // background: '#FFE7E9',
        // position: 'relative',
        // left: '30px',
        // top: '42px',
        // "& #a1":
        // {
        //     marginTop: '5px',
        // }
    },
    img:
    {
        height: '100%',
        width: '80%',
        // border: '1px solid red',
        position: 'relative',
        left:'30px'
    },
    image1:
    {
        height: '63%',
        width: '85%',
        position: 'relative',
        
        top: '60px',
        // border:'1px solid red', 
    },
    book1:
    {
        height: '210px',
        width: '160px',
        position: 'relative',
        top: '21px'
    },

    boxes:
    {
        height: '15%',
        width: '100%',
        position: 'relative',
        top: '60px',
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    add:
    {
        height: '100%',
        width: '46%',
        // border: '1px solid blue',
        backgroundColor: '#A03037',
        "& #caption1":
        {
            position: 'relative',
            top: '5px',
            color: 'white'
        }

    },
    wish:
    {
        height: '100%',
        width: '59%',
        // border: '1px solid green',
        backgroundColor: '#383838',
        color: 'white',
        "& #fav":
        {
            position: 'relative',
            top: '5px',
            color: 'white',
            right: '8px'
        }
    },
    part2:
    {
        height: '80%',
        width: '100%',
        // border: '1px solid green'
    },
    about:
    {
        height: '10%',
        width: '100%',
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column'
    },
    blank:
    {
        height: '0%',
        width: '100%',
        // border:'1px solid red'
    },
    title:
    {
        height: '20%',
        width: '100%',
        // border:'1px solid yellow',

        "& #tit":
        {
            position: 'relative',
            // right: '210px',
            left: '30px',
            bottom:'5px',
            fontSize: '25px',
            fontWeight: "bolder",
            display: 'flex'
        }
    },
    author:
    {
        height: '17%',
        width: '100%',
        // border:'1px solid pink',
        "& #auth":
        {
            position: 'relative',
            // right: '270px',
            left: '30px',
            top: '0px',
            color: 'gray',
            fontSize: '17px',
            display: 'flex'
        }

    },
    rate:
    {
        height: '25%',
        width: '90%',
        // border:'1px solid brown',
        left: '6px',
        display: 'flex',
        position: 'relative',
        "& #pnt":
        {
            position: 'relative',
            // bottom: '20px',
            // right: '240px'
            left: '30px',
            top: '4px'

        }
    },
    price:
    {
        height: '25%',
        width: '90%',
        // border:'1px solid gray',
        display: 'flex',
        position: 'relative',
        left: '30px',

        "& #rs":
        {
            fontSize: '20px',
            position: 'relative',
            // right: '254px',
            top: '10px'
        },
        "& #cross":
        {
            position: 'relative',
            // right: '250px',
            left: '10px',
            top: '12px'
        }
    },

    detail:
    {
        height: '17%',
        width: '100%',
        // border: '1px solid blue',
        "& #txt1":
        {
            position: 'relative',
            top: '5px',
            right: '20px',
            color: 'gray',
            fontSize:'18px'
        },
        // "& #para":
        // {
        //     position: 'relative',
        //     left: '45px',
        //     top: '10px',
        //     color: 'gray',
        //     fontSize: '15px',
        //     textAlign: 'left'
        // }

    },
    para:
    {
        height: '75%',
        width: '100%',
        // border:'1px solid black',
        position: 'relative',
        left: '2px',
        top: '18px',
        color: 'gray',
        fontSize: '16px',
        textAlign: 'left'
    },
    feed:
    {
        height: '3%',
        width: '100%',
        // border: '1px solid red',
        "& #cust":
        {
            fontSize: '21px',
            position: 'relative',
            right: '10px'
        }
    },
    star:
    {
        height: '24%',
        width: '99%',
        // border: '1px solid green',
        backgroundColor: '#F5F5F5',
        position: 'relative',
        left: '0px'
    },
    gray1:
    {
        height: '15%',
        width: '100%',
        // border: '1px solid black',
        display: 'flex',
        "& #over":
        {
            position: 'relative',
            left: '30px',
            top: '8px',
            fontSize: '16px'
        }
    },
    gray2:
    {
        height: '17%',
        width: '35%',
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        left: '30px',
        "& #star":
        {
            fontSize: '20px'
        }

    },
    gray3:
    {
        height: '45%',
        width: '88%',
        // border: '1px solid black',
        backgroundColor: "#FFFFFF",
        position: "relative",
        left: "20px",
        "& #review": {
            width: "150px",
            height: "28px",
            border:'1px solid black',
            display: "flex",
            border: "none",
        }
    },
    gray4:
    {
        height: '24%',
        width: '96%',
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        "& #btn":
        {
            height: '32px',
            width: '75px',
            position: 'relative',
            top: '14px',
            borderRadius: '0px'
        }

    },
    green_box:
    {

        height: '23px',
        width: '52px',
        // border:'1px solid red',
        position: 'relative',
        left: '26px',
        top: '5px',
        backgroundColor: '#388E3C',
        color: 'white',
        "& #point":
        {
            position: 'relative',
            bottom: '5px'
        }
    },
    review:
    {
        height: '23%',
        width: '100%',
        // border: '1px solid blue'
    },
    name1: {
        width: "75%",
        height: "25%",
        // border: "1px solid black",
        position: 'relative',
        left: '20px',
        display: "flex",
        alignItems: "flex-end",
        "& #dn": {
            width: "15%",
            height: "58%",
            fontSize: "12px",
            backgroundColor: "#F5F5F5",
            borderRadius: "50%",
            border: "1px solid #E4E4E4",
            color: "#707070",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        "& #name": {
            fontSize: "15px",
            color: "#0A0102",
            position: "relative",
            left: "8px",
            bottom: "14px",
            fontWeight: 500
        },
    },
    starRating1: {
        width: "40%",
        height: "12%",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "#707070",
        position: "relative",
        top: '5px',
        left: "48px",
        "& #star1": {
            fontSize: "20px",
            color: "#FFCE00"
        },
        "& #star1-1": {
            fontSize: "20px",
        }
    },
    reviewFeedback1: {
        width: "82%",
        height: "51%",
        // border: "1px solid black",
        fontSize: "15px",
        color: "#707070",
        textAlign: "start",
        position: "relative",
        top: "15px",
        left: "38px"
    },

    count:
    {
        // height:'62%',
        // width:'97%',
        // // border:'1px solid green',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        left: '10px',

        height: '40px',
        width: '130px',
        // border: '1px solid gray',

    },
    count1:
    {
        height: '100%',
        width: '30%',
        // border:'1px solid black',
        position: 'relative',
        top: '10px',
        "& #symbol1":
        {
            color: 'gray'
        }
    },
    count2:
    {
        height: '100%',
        width: '30%',
        // border:'1px solid black',
        position: 'relative',
        top: '10px',
        "& #num":
        {
            position: 'relative',
            top: '2px',
            color: 'gray',
        }

    },
    square:
    {
        height: '15px',
        width: '30px',
        border: '2px solid gray',
        position: 'relative',
        //  left:'14px',
        //  top:'4px',
        color: 'gray',
        bottom: '18px'
    },
    count3:
    {
        // height: '100px',
        // width: '50px',
        // border:'1px solid black',
        // position: 'relative',
        // top: '10px',

        // "& #symbol1":
        // {
        //     color: 'gray',
        //     width:'60px',
        //     height:'60px',
        //     border:'1px solid gray',
        //     fontSize:'25px',
        //     borderRadius:'50%',


        // }

        height: '100%',
        width: '30%',
        // border:'1px solid black',
        position: 'relative',
        top: '10px',
        "& #symbol1":
        {
            color: 'gray'
        }
    }
    },

    ["@media only screen and (min-width:481px) and (max-width:768px)"]: {

        main:
    {
        height: '175vh',
        width: '94vw',
        // border: '2px solid black',
        background: '#FFFF',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        bottom: '120px'
    },
    part1:
    {
        // height: '19%',
        height:'28%',
        width: '100%',
        // border: '1px solid blue',
        display: 'flex',
        flexDirection: 'row'
    },
    images:
    {
        height: '50%',
        width: '20%',
        // border: '1px solid black',
        position: 'relative',
        left: '28px',
        "& #txt":
        {
            color: 'gray',
            marginLeft: '50px'
        },
        "& #a2":
        {
            height:'40px',
            position: 'relative',
            top: '35px',
            left: '22px'
        }

    },
    pic1:
    {
        height: '52px',
        width: '44px',
        // border:'1px solid red',
        background: '#FFE7E9',
        position: 'relative',
        left: '42px',
        top: '34px',
        "& #a1":
        {
            marginTop: '5px',
        }
    },
    img:
    {
        height: '100%',
        width: '80%',
        // border: '1px solid red',
        position: 'relative',
        left:'0px'
    },
    image1:
    {
        height: '65%',
        width: '65%',
        position: 'relative',
        left:'30px',
        top: '50px',
        // border:'1px solid red', 
    },
    book1:
    {
        height: '210px',
        width: '190px',
        position: 'relative',
        top: '15px'
    },

    boxes:
    {
        height: '15%',
        width: '100%',
        position: 'relative',
        top: '50px',
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    add:
    {
        height: '100%',
        width: '46%',
        // border: '1px solid blue',
        backgroundColor: '#A03037',
        "& #caption1":
        {
            position: 'relative',
            top: '5px',
            color: 'white'
        }

    },
    wish:
    {
        height: '100%',
        width: '59%',
        // border: '1px solid green',
        backgroundColor: '#383838',
        color: 'white',
        "& #fav":
        {
            position: 'relative',
            top: '5px',
            color: 'white',
            right: '8px'
        }
    },
    part2:
    {
        height: '70%',
        width: '100%',
        // border: '1px solid green'
    },
    about:
    {
        height: '14%',
        width: '100%',
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column'
    },
    blank:
    {
        height: '0%',
        width: '100%',
        // border:'1px solid red'
    },
    title:
    {
        height: '23%',
        width: '100%',
        // border:'1px solid yellow',

        "& #tit":
        {
            position: 'relative',
            // right: '210px',
            left: '60px',
            bottom:'5px',
            fontSize: '25px',
            fontWeight: "bolder",
            display: 'flex'
        }
    },
    author:
    {
        height: '20%',
        width: '100%',
        // border:'1px solid pink',
        "& #auth":
        {
            position: 'relative',
            // right: '270px',
            left: '60px',
            top: '0px',
            color: 'gray',
            fontSize: '17px',
            display: 'flex'
        }

    },
    rate:
    {
        height: '25%',
        width: '90%',
        // border:'1px solid brown',
        left: '40px',
        display: 'flex',
        position: 'relative',
        "& #pnt":
        {
            position: 'relative',
            // bottom: '20px',
            // right: '240px'
            left: '30px',
            top: '4px'

        }
    },
    price:
    {
        height: '25%',
        width: '90%',
        // border:'1px solid gray',
        display: 'flex',
        position: 'relative',
        left: '60px',

        "& #rs":
        {
            fontSize: '20px',
            position: 'relative',
            // right: '254px',
            top: '5px'
        },
        "& #cross":
        {
            position: 'relative',
            // right: '250px',
            left: '10px',
            top: '7px'
        }
    },

    detail:
    {
        height: '19%',
        width: '100%',
        // border: '1px solid blue',
        "& #txt1":
        {
            position: 'relative',
            top: '5px',
            right: '20px',
            color: 'gray',
            fontSize:'18px'
        },

    },
    para:
    {
        height: '75%',
        width: '95%',
        // border:'1px solid black',
        position: 'relative',
        left: '10px',
        top: '18px',
        color: 'gray',
        fontSize: '16px',
        textAlign: 'left'
    },
    feed:
    {
        height: '5%',
        width: '100%',
        // border: '1px solid red',
        "& #cust":
        {
            fontSize: '21px',
            position: 'relative',
            right: '10px',
            top:'8px'
        }
    },
    star:
    {
        height: '22%',
        width: '99%',
        // border: '1px solid green',
        backgroundColor: '#F5F5F5',
        position: 'relative',
        left: '0px'
    },
    gray1:
    {
        height: '15%',
        width: '100%',
        // border: '1px solid black',
        display: 'flex',
        "& #over":
        {
            position: 'relative',
            left: '30px',
            top: '8px',
            fontSize: '16px'
        }
    },
    gray2:
    {
        height: '17%',
        width: '35%',
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        left: '30px',
        "& #star":
        {
            fontSize: '20px'
        }

    },
    gray3:
    {
        height: '45%',
        width: '88%',
        // border: '1px solid black',
        backgroundColor: "#FFFFFF",
        position: "relative",
        left: "20px",
        "& #review": {
            width: "150px",
            height: "28px",
            border:'1px solid black',
            display: "flex",
            border: "none",
        }
    },
    gray4:
    {
        height: '24%',
        width: '96%',
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        "& #btn":
        {
            height: '32px',
            width: '75px',
            position: 'relative',
            top: '10px',
            borderRadius: '0px'
        }

    },
    green_box:
    {

        height: '23px',
        width: '52px',
        // border:'1px solid red',
        position: 'relative',
        left: '26px',
        top: '5px',
        backgroundColor: '#388E3C',
        color: 'white',
        "& #point":
        {
            position: 'relative',
            bottom: '5px'
        }
    },
    review:
    {
        height: '21%',
        width: '100%',
        // border: '1px solid blue'
    },
    name1: {
        width: "75%",
        height: "25%",
        // border: "1px solid black",
        position: 'relative',
        left: '20px',
        display: "flex",
        alignItems: "flex-end",
        "& #dn": {
            width: "15%",
            height: "58%",
            fontSize: "12px",
            backgroundColor: "#F5F5F5",
            borderRadius: "50%",
            border: "1px solid #E4E4E4",
            color: "#707070",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        "& #name": {
            fontSize: "15px",
            color: "#0A0102",
            position: "relative",
            left: "8px",
            bottom: "14px",
            fontWeight: 500
        },
    },
    starRating1: {
        width: "40%",
        height: "12%",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "#707070",
        position: "relative",
        top: '5px',
        left: "48px",
        "& #star1": {
            fontSize: "20px",
            color: "#FFCE00"
        },
        "& #star1-1": {
            fontSize: "20px",
        }
    },
    reviewFeedback1: {
        width: "82%",
        height: "51%",
        // border: "1px solid black",
        fontSize: "15px",
        color: "#707070",
        textAlign: "start",
        position: "relative",
        top: "15px",
        left: "38px"
    },

    count:
    {
        // height:'62%',
        // width:'97%',
        // // border:'1px solid green',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        left: '10px',

        height: '40px',
        width: '130px',
        // border: '1px solid gray',

    },
    count1:
    {
        height: '100%',
        width: '30%',
        // border:'1px solid black',
        position: 'relative',
        top: '10px',
        "& #symbol1":
        {
            color: 'gray'
        }
    },
    count2:
    {
        height: '100%',
        width: '30%',
        // border:'1px solid black',
        position: 'relative',
        top: '10px',
        "& #num":
        {
            position: 'relative',
            top: '2px',
            color: 'gray',
        }

    },
    square:
    {
        height: '15px',
        width: '30px',
        border: '2px solid gray',
        position: 'relative',
        //  left:'14px',
        //  top:'4px',
        color: 'gray',
        bottom: '18px'
    },
    count3:
    {
        height: '100%',
        width: '30%',
        // border:'1px solid black',
        position: 'relative',
        top: '10px',
        "& #symbol1":
        {
            color: 'gray'
        }
    }
    },

    ["@media only screen and (min-width:769px) and (max-width:1024px)"]: {
        main:
        {
            height: '110vh',
            width: '75vw',
            // border: '5px solid black',
            background: '#FFFF',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            bottom: '120px'
        },
        part1:
        {
            height: '100%',
            width: '40%',
            // border: '1px solid blue',
            display: 'flex',
            flexDirection: 'row'
        },
        images:
        {
            height: '60%',
            width: '20%',
            // border: '1px solid black',
            "& #txt":
            {
                color: 'gray',
                marginLeft: '90px'
            },
            "& #a2":
            {
                position: 'relative',
                top: '42px',
                left: '0px'
            }
    
        },
        pic1:
        {
            height: '52px',
            width: '44px',
            // border:'1px solid red',
            background: '#FFE7E9',
            position: 'relative',
            left: '0px',
            top: '42px',
            "& #a1":
            {
                marginTop: '5px',
            }
        },
        img:
        {
            height: '70%',
            width: '77%',
            // border: '1px solid red'
        },
        image1:
        {
            height: '22%',
            width: '100%',
            position: 'relative',
            top: '60px',
            // border:'1px solid red', 
        },
        book1:
        {
            height: '130px',
            width: '100px',
            position: 'relative',
            top: '21px'
        },
    
        boxes:
        {
            height: '15%',
            width: '100%',
            position: 'relative',
            top: '80px',
            // border: '1px solid red',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        add:
        {
            height: '230%',
            width: '42%',
            // border: '1px solid blue',
            backgroundColor: '#A03037',
            "& #caption1":
            {
                position: 'relative',
                top: '5px',
                color: 'white'
            }
    
        },
        wish:
        {
            height: '220%',
            width: '52%',
            // border: '1px solid green',
            backgroundColor: '#383838',
            color: 'white',
            "& #fav":
            {
                position: 'relative',
                top: '5px',
                color: 'white',
                right: '8px'
            }
        },
        part2:
        {
            height: '100%',
            width: '60%',
            // border: '1px solid green'
        },
        about:
        {
            height: '18%',
            width: '100%',
            // border: '1px solid black',
            display: 'flex',
            flexDirection: 'column'
        },
        blank:
        {
            height: '30%',
            width: '100%',
            // border:'1px solid red'
        },
        title:
        {
            height: '17%',
            width: '99%',
            // border:'1px solid yellow',
    
            "& #tit":
            {
                position: 'relative',
                // right: '210px',
                left: '30px',
                fontSize: '28px',
                fontWeight: "bolder",
                display: 'flex'
            }
        },
        author:
        {
            height: '15%',
            width: '70%',
            // border:'1px solid pink',
            "& #auth":
            {
                position: 'relative',
                // right: '270px',
                left: '30px',
                top: '5px',
                color: 'gray',
                display: 'flex',
                fontSize:'18px'
            }
    
        },
        rate:
        {
            height: '12%',
            width: '70%',
            // border:'1px solid brown',
            left: '6px',
            display: 'flex',
            position: 'relative',
            "& #pnt":
            {
                position: 'relative',
                // bottom: '20px',
                // right: '240px'
                left: '30px',
                top: '4px'
    
            }
        },
        price:
        {
            height: '15%',
            width: '70%',
            // border:'1px solid gray',
            display: 'flex',
            position: 'relative',
            left: '30px',
    
            "& #rs":
            {
                fontSize: '20px',
                position: 'relative',
                // right: '254px',
                top: '10px'
            },
            "& #cross":
            {
                position: 'relative',
                // right: '250px',
                left: '10px',
                top: '12px'
            }
        },
    
        detail:
        {
            height: '18%',
            width: '95%',
            // border: '1px solid blue',
            "& #txt1":
            {
                position: 'relative',
                top: '10px',
                right: '20px',
                color: 'gray',
                fontSize:'20px'
            },
    
        },
        para:
        {
            height: '76%',
            width: '94%',
            // border:'1px solid black',
            position: 'relative',
            left: '15px',
            top: '15px',
            color: 'gray',
            fontSize: '16px',
            textAlign: 'left'
        },
        feed:
        {
            height: '4%',
            width: '100%',
            // border: '1px solid red',
            "& #cust":
            {
                fontSize: '25px',
                position: 'relative',
                right: '20px'
            }
        },
        star:
        {
            height: '25%',
            width: '99%',
            // border: '1px solid green',
            backgroundColor: '#F5F5F5',
            position: 'relative',
            left: '0px'
        },
        gray1:
        {
            height: '15%',
            width: '100%',
            // border: '1px solid black',
            display: 'flex',
            "& #over":
            {
                position: 'relative',
                left: '30px',
                top: '8px',
                fontSize: '18px'
            }
        },
        gray2:
        {
            height: '17%',
            width: '25%',
            // border: '1px solid red',
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
            left: '30px',
            "& #star":
            {
                fontSize: '20px'
            }
    
        },
        gray3:
        {
            height: '36%',
            width: '85%',
            // border: '1px solid black',
            backgroundColor: "#FFFFFF",
            position: "relative",
            left: "29px",
            "& #review": {
                width: "240px",
                height: "30px",
                display: "flex",
                border: "none",
            }
        },
        gray4:
        {
            height: '24%',
            width: '96%',
            // border: '1px solid black',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            "& #btn":
            {
                height: '32px',
                width: '75px',
                position: 'relative',
                top: '20px',
                borderRadius: '0px'
            }
    
        },
        green_box:
        {
    
            height: '23px',
            width: '52px',
            // border:'1px solid green',
            position: 'relative',
            left: '26px',
            top: '5px',
            backgroundColor: '#388E3C',
            color: 'white',
            "& #point":
            {
                position: 'relative',
                bottom: '5px'
            }
        },
        review:
        {
            height: '16%',
            width: '100%',
            // border: '1px solid blue'
        },
        name1: {
            width: "55%",
            height: "25%",
            // border: "1px solid black",
            position: 'relative',
            left: '20px',
            display: "flex",
            alignItems: "flex-end",
            "& #dn": {
                width: "6%",
                height: "68%",
                fontSize: "12px",
                backgroundColor: "#F5F5F5",
                borderRadius: "50%",
                border: "1px solid #E4E4E4",
                color: "#707070",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            },
            "& #name": {
                fontSize: "13px",
                color: "#0A0102",
                position: "relative",
                left: "8px",
                bottom: "4px",
                fontWeight: 500
            },
        },
        starRating1: {
            width: "20%",
            height: "12%",
            // border: "1px solid black",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            color: "#707070",
            position: "relative",
            top: '5px',
            left: "48px",
            "& #star1": {
                fontSize: "20px",
                color: "#FFCE00"
            },
            "& #star1-1": {
                fontSize: "20px",
            }
        },
        reviewFeedback1: {
            width: "82%",
            height: "50%",
            // border: "1px solid black",
            fontSize: "14px",
            color: "#707070",
            textAlign: "start",
            position: "relative",
            top: "15px",
            left: "48px"
        },
    
        count:
        {
            // height:'62%',
            // width:'97%',
            // // border:'1px solid green',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            left: '10px',
    
            height: '40px',
            width: '130px',
            // border: '1px solid gray',
    
        },
        count1:
        {
            height: '100%',
            width: '30%',
            // border:'1px solid black',
            position: 'relative',
            top: '10px',
            "& #symbol1":
            {
                color: 'gray'
            }
        },
        count2:
        {
            height: '100%',
            width: '30%',
            // border:'1px solid black',
            position: 'relative',
            top: '10px',
            "& #num":
            {
                position: 'relative',
                top: '2px',
                color: 'gray',
            }
    
        },
        square:
        {
            height: '15px',
            width: '30px',
            border: '2px solid gray',
            position: 'relative',
            //  left:'14px',
            //  top:'4px',
            color: 'gray',
            bottom: '18px'
        },
        count3:
        {
            height: '100%',
            width: '30%',
            // border:'1px solid black',
            position: 'relative',
            top: '10px',
            "& #symbol1":
            {
                color: 'gray'
            }
        },
    
    }
})

function Description(props) {
    const classes = useStyle();

    const [increase, setIncrease] = useState(false)

    const [wishlist, setWishList] = useState(false)

    const [count, setCount] = useState(1)

    const [cartId, setCartId] = useState([])

    const [cartBookId, setCartBookId] = useState([])

    const [wishId, setWishId] = useState([])

    const [WishBookId, setWishBookId] = useState([])

    const navigate = useNavigate()

    const [refreshPage, setRefreshPage] = useReducer(x => x + 1, 0)


    const addToBag = () => {
        setIncrease(true)

        console.log(props.id)
        addToCart(props.id).then((response) => {
            console.log(response)
            setRefreshPage()
        }).catch((error) => { console.log(error) })
        console.log("Added in cart")
    }

    const Wish = () => {
        setWishList(true)
        console.log(props.id)
        wishList(props.id).then((response) => {
            console.log(response)
            setRefreshPage()
        }).catch((error) => { console.log(error) })
        console.log("Added in WishList")
    }

    const wishfun = () => {
        setWishList(false)
    }

    const Decrement = () => {
        if (count > 0) {
            setCount(count - 1)

            let obj = {
                cartItem_id: props.id,
                quantityToBuy: count - 1
            }
            console.log('*****obj*****', obj)
            // console.log(props.id)
            addToInfo(obj).then((response) => {
                // console.log(response.data.data)
                console.log(response, "Decremented count")
            }).catch((error => console.log(error)))

        }
        else {
            setCount(1)
            setIncrease(false)
        }
    }

    const Increment = () => {
        setCount(count + 1)

        let obj = {
            cartItem_id: props.id,
            quantityToBuy: count + 1
        }

        console.log('*****obj*****', obj)
        console.log(props.id)
        addToInfo(obj).then((response) => {
            // console.log(response.data.data)
            console.log(response, "Incremented count")
        }).catch((error => console.log(error)))
    }

    const RemoveFromWishList = () => {
        setWishList(false)
    }

    useEffect(() => {
        getCard().then((response) => {
            console.log(response)
            let idList = response.data.result.filter((cart) => {
                if (props.id === cart.product_id._id) {
                    setCount(cart.quantityToBuy)
                    setCartId(cart._id)
                    console.log(cart._id, cart.quantityToBuy, "id****quantity****")
                    return cart
                }
            })
            setCartBookId(idList)
        }).catch((error => console.log(error)))

        getWishList().then((response) => {
            console.log(response)
            let idList = response.data.result.filter((cart) => {
                if (props.id === cart.product_id._id) {

                    setWishId(cart._id)
                    console.log(cart._id, cart.quantityToBuy, "id****quantity****")
                    return cart
                }
            })
            setWishBookId(idList)
        }).catch((error => console.log(error)))

    }, [refreshPage])


    return (
        <Box className={classes.main}>
            <Box className={classes.part1}>
                <Box className={classes.images}>
                    <span id='txt'>Home/</span>
                    <span>Book(01)</span>
                    <Box className={classes.pic1}>
                        <img id='a1' src='../../Assets/book1.png' height='40px' width='30px'></img>
                    </Box>
                    <img id='a2' src='../../Assets/book2.png' height='44px' width='42px'></img>
                </Box>
                <Box className={classes.img}>
                    <Paper elevation={4} className={classes.image1}>
                        <img className={classes.book1} src='../../Assets/book1.png'></img>
                        <Box className={classes.boxes}>
                            {
                                (cartId.length === 0) ? <Box className={classes.add}>
                                    <span id='caption1' onClick={addToBag}>ADD TO BAG</span>
                                </Box> :

                                    <Box className={classes.count}>
                                        <Box className={classes.count1}>
                                            <RemoveCircleOutlineIcon id='symbol1' onClick={Decrement} />
                                        </Box>
                                        <Box className={classes.count2}>
                                            <span id='num1'>{count}</span>
                                            <Box className={classes.square}>

                                            </Box>
                                        </Box>
                                        <Box className={classes.count3}>
                                            <AddCircleOutlineIcon id='symbol1' onClick={Increment} />
                                            {/* <span id='symbol1'>+</span> */}
                                        </Box>

                                    </Box>
                            }

                            {
                                (wishId.length === 0) ? <Box className={classes.wish} onClick={Wish}>
                                    <FavoriteIcon id='fav' />

                                    WISHLIST
                                </Box> :

                                    <Box className={classes.wish} onClick={wishfun}>
                                        <CheckIcon id='fav' />
                                        Added
                                    </Box>
                            }
                        </Box>
                    </Paper>
                </Box>
            </Box>
            <Box className={classes.part2}>
                <Box className={classes.about}>
                    <Box className={classes.blank}>

                    </Box>
                    <Box className={classes.title}>
                        <span id='tit'>
                            {/* Don't Make Me Think */}
                            {props.bookName}
                        </span>
                    </Box>
                    <Box className={classes.author}>
                        <span id='auth'>
                            {/* by Steve Krug */}
                            {props.author}
                        </span>

                    </Box>
                    <Box className={classes.rate}>
                        <Box className={classes.green_box}>
                            <span id='point'>
                                4.5
                            </span>
                            <StarIcon />
                        </Box>
                        <span id='pnt'>(20)</span>

                    </Box>
                    <Box className={classes.price}>
                        <span id='rs'><b>
                            {/* Rs. 1500   */}Rs.{props.discountPrice}
                        </b></span>
                        <span id='cross'><s>
                            {/* Rs. 2000 */} Rs. {props.price}
                        </s></span>

                    </Box>
                </Box>
                <Box className={classes.detail}>
                    <span id='txt1'><CircleRoundedIcon style={{ height: '8px' }} />Book Detail</span>
                    {/* <p id='para'></p> */}
                    <Box className={classes.para}>
                        React is a JavaScript library developed by Facebook which, among other things, was used to build
                        Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites
                        and applications alike.The main concept of React. js is virtual DOM.Reactjs is a frontend library.

                    </Box>

                </Box>
                <Box className={classes.feed}>
                    <span id='cust'>Customer Feedback</span>
                </Box>
                <Box className={classes.star}>

                    <Box className={classes.gray1}>
                        <span id='over'>Overall rating</span>
                    </Box>
                    <Box className={classes.gray2}>
                        <StarOutlineOutlinedIcon id='star' />
                        <StarOutlineOutlinedIcon id='star' />
                        <StarOutlineOutlinedIcon id='star' />
                        <StarOutlineOutlinedIcon id='star' />
                        <StarOutlineOutlinedIcon id='star' />
                    </Box>
                    <Box className={classes.gray3}>
                        <input id='review' placeholder='Write your review'></input>
                    </Box>
                    <Box className={classes.gray4}>
                        <Button id='btn' variant='contained'>Submit</Button>
                    </Box>
                </Box>
                <Box className={classes.review}>
                    <Box className={classes.name1}>
                        <span id="dn">AN</span>
                        <span id='name'>Aniket Chile</span>
                    </Box>
                    <Box className={classes.starRating1}>
                        <StarRateIcon id='star1' />
                        <StarRateIcon id='star1' />
                        <StarRateIcon id='star1' />
                        <StarOutlineOutlinedIcon id='star1-1' />
                        <StarOutlineOutlinedIcon id='star1-1' />
                    </Box>
                    <Box className={classes.reviewFeedback1}>
                        <span>Good product. Even though the translation could have been better, Chanakya's neeti
                            are thought provoking. Chanakya has written on many different topics and his writings are succinct.
                        </span>
                    </Box>
                </Box>
                <Box className={classes.review}>
                    <Box className={classes.name1}>
                        <span id="dn">SB</span>
                        <span id='name'>Shweta Bodkar</span>
                    </Box>
                    <Box className={classes.starRating1}>
                        <StarRateIcon id='star1' />
                        <StarRateIcon id='star1' />
                        <StarRateIcon id='star1' />
                        <StarRateIcon id='star1' />
                        {/* <StarOutlineOutlinedIcon id='star1-1' /> */}
                        <StarOutlineOutlinedIcon id='star1-1' />
                    </Box>
                    <Box className={classes.reviewFeedback1}>
                        <span>Good product. Even though the translation could have been better, Chanakya's neeti
                            are thought provoking. Chanakya has written on many different topics and his writings are succinct.
                        </span>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default Description
