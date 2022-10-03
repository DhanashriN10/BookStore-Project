import React, { useState, useEffect, useReducer } from 'react'
import { makeStyles } from "@mui/styles";
import { Box, Paper, Button } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import Crop75Icon from '@mui/icons-material/Crop75';
import PlaceIcon from '@mui/icons-material/Place';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PrimarySearchAppBar from './header';
import Customer_Details from './Customer_Details';
import Order from './Order';
import { addToInfo, getCard, removeCart } from './Service/dataservice';
import { useNavigate } from 'react-router-dom';


const useStyle = makeStyles({

    // screen:
    // {
    //     width:'100vw',
    //     height:'auto'
    // },
    main:
    {
        // height: '69vh',
        height: 'auto',
        width: '56vw',
        //60h
        // border: '1px solid Black',
        position: 'relative',
        left: '180px',
        top: '20px'

    },

    box1:
    {
        height: '8%',
        width: '100%',
        // border: '1px solid black',
        "& #home":
        {
            color: 'gray',
            position: 'relative',
            right: '360px'
        },
        "& #cart":
        {
            position: 'relative',
            right: '360px'
        }
    },
    main1:
    {
        height: '330px',
        // height:'100%',
        width: '100%',
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    box22:
    {
        // height: '280px',
        height: 'auto',
        // height:'70%',
        width: '99.95%',
        // border: '1px solid blue',
        display: 'flex',
        flexDirection: 'row'

    },
    box3:
    {
        // height: '60px',
        width: '99.70%',
        // border: '1px solid pink',
        position: 'relative',
        // top: '120px',
        top: '50px',
        fontSize: '34px',
        "& #add":
        {
            // height: '50px',
            fontSize: '18px',
            position: 'relative',
            right: '320px',
            // top: '12px',
            bottom: '10px',
            color: 'gray',
            fontWeight: 'bold'
        }

    },
    box4:
    {
        // height: '50px',
        width: '99.70%',
        // border: '1px solid green',
        position: 'relative',
        top: '70px',
        // top: '140px',
        fontSize: '34px',

        "& #order":
        {
            fontSize: '18px',
            position: 'relative',
            right: '320px',
            // top: '12px',
            bottom: '10px',
            color: 'gray',
            fontWeight: 'bold'
        }

    },
    part1:
    {
        height: '100%',
        width: '60%',
        // border:'1px solid black'
    },
    title:
    {
        height: '45px',
        width: '100%',
        // border: '1px solid black',

        "& #txt1":
        {
            fontSize: '20px',
            fontWeight: 'bold',
            position: 'relative',
            right: '180px',
            top: '20px'
        }
    },
    block:
    {
        // height: '85%',
        height: 'auto',
        width: '100%',
        // border:'1px solid red',
        display: 'flex',
        flexDirection: 'row'
    },
    block1:
    {
        height: '100%',
        width: '25%',
        // border:'1px solid red',
        "& #img":
        {
            height: '90px',
            width: '70px',
            position: 'relative',
            top: '30px'
        }
    },
    block2:
    {
        // height: '100%',
        height: '150px',
        width: '75%',
        // border:'1px solid red',


    },
    txt1:
    {
        height: '15%',
        width: '80%',
        // border:'1px solid black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
        left: '10px',
        // top:'10px'
    },
    txt2:
    {
        height: '10%',
        width: '100%',
        // border:'1px solid blue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
        left: '10px',
        top: '20px',

        "& #para2":
        {
            fontSize: '13px',
            color: 'gray',
            position: 'relative',

        }
    },
    txt3:
    {
        height: '10%',
        width: '100%',
        // border:'1px solid yellow',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
        left: '10px',
        top: '25px'
    },
    txt4:
    {
        height: '62%',
        width: '97%',
        // border:'1px solid green',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        left: '10px',
        top: '17px',

    },
    logo1:
    {
        height: '60%',
        width: '10%',
        // border:'1px solid black',
        position: 'relative',
        top: '30px',
        "& #symbol":
        {
            color: 'gray'
        }
    },
    logo2:
    {
        height: '60%',
        width: '17%',
        // border:'1px solid black',
        position: 'relative',
        top: '30px',
        "& #num":
        {
            position: 'relative',
            top: '2px',
            color: 'gray'
        }

    },
    squ:
    {
        height: '15px',
        width: '30px',
        border: '2px solid gray',
        position: 'relative',
        left: '14px',
        //  top:'4px'
        bottom: '18px'
    },
    logo3:
    {
        height: '60%',
        width: '10%',
        // border:'1px solid black',
        position: 'relative',
        top: '30px',
        "& #symbol":
        {
            color: 'gray'
        }
    },
    logo4:
    {
        height: '100%',
        width: '73%',
        // border:'1px solid black',
        "& #remove":
        {
            position: 'relative',
            top: '30px',
            right: '80px',
            fontWeight: '8px'
        }
    },
    part2:
    {
        height: '100%',
        width: '40%',
        // border:'1px solid red',
        "& #btn":
        {
            position: 'relative',
            left: '70px',
            // top: '2900px',
            top: '70%',
            borderRadius: '0px'
        }
    },
    rect:
    {
        height: '15%',
        width: '100%',
        // border:'1px solid black'
    },
    small_box:
    {
        height: '25%',
        width: '70%',
        border: '1px solid gray',
        position: 'relative',
        left: '70px',
        top: '18px',
        display: 'flex',
        flexDirection: 'row'
    },
    loc1:
    {
        height: '100%',
        width: '12%',
        // border:'1px solid gray',
        "& #location":
        {
            color: '#A03037'
        }
    },
    loc2:
    {
        height: '100%',
        width: '80%',
        // border:'1px solid gray',  
        "& #use":
        {
            fontSize: '15px',
            position: 'relative',
            right: '30px'
        }
    },
    loc3:
    {
        height: '100%',
        width: '8%',
        // border:'1px solid gray',  
        "& #drop":
        {
            color: 'gray',
            position: 'relative',
            right: '10px'
        }
    },

    ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
        main:
        {
            height: '69vh',
            // height: 'auto',
            width: '96vw',
            //60h
            // border: '1px solid Black',
            position: 'relative',
            left: '0px',
            top: '20px'
    
        },
    
        box1:
        {
            height: '8%',
            width: '100%',
            // border: '1px solid black',
            "& #home":
            {
                color: 'gray',
                position: 'relative',
                right: '60px'
            },
            "& #cart":
            {
                position: 'relative',
                right: '60px'
            }
        },
        main1:
        {
            height: '330px',
            // height:'100%',
            width: '100%',
            // border: '1px solid red',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        box22:
        {
            // height: '280px',
            height: 'auto',
            // height:'70%',
            width: '99%',
            // border: '1px solid blue',
            display: 'flex',
            flexDirection: 'column',
            marginLeft:'10px'
    
        },
        box3:
        {
            // height: '60px',
            width: '99.70%',
            // border: '1px solid pink',
            position: 'relative',
            // top: '120px',
            top: '50px',
            fontSize: '34px',
            "& #add":
            {
                // height: '50px',
                fontSize: '18px',
                position: 'relative',
                right: '10px',
                // top: '12px',
                bottom: '10px',
                color: 'gray',
                fontWeight: 'bold'
            }
    
        },
        box4:
        {
            // height: '50px',
            width: '99.70%',
            // border: '1px solid green',
            position: 'relative',
            top: '70px',
            // top: '140px',
            fontSize: '34px',
    
            "& #order":
            {
                fontSize: '18px',
                position: 'relative',
                right: '10px',
                // top: '12px',
                bottom: '10px',
                color: 'gray',
                fontWeight: 'bold'
            }
    
        },
        part1:
        {
            height: '100%',
            width: '100%',
            // border:'1px solid black'
        },
        title:
        {
            height: '45px',
            width: '100%',
            // border: '1px solid black',
    
            "& #txt1":
            {
                fontSize: '20px',
                fontWeight: 'bold',
                position: 'relative',
                right: '60px',
                top: '10px'
            }
        },
        block:
        {
            // height: '85%',
            height: 'auto',
            width: '100%',
            // border:'0.2px solid gray',
            display: 'flex',
            flexDirection: 'column'
        },
        block1:
        {
            height: '100%',
            width: '45%',
            // border:'1px solid red',
            position: 'relative',
            left:'70px',
            bottom:'15px',
            "& #img":
            {
                height: '90px',
                width: '70px',
                position: 'relative',
                // left:'30px',
                bottom: '90px'
            }
        },
        block2:
        {
            // height: '100%',
            height: '150px',
            width: '90%',
            // border:'1px solid red',
    
    
        },
        txt1:
        {
            height: '15%',
            width: '90%',
            // border:'1px solid black',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            position: 'relative',
            left: '30px',
            // top:'10px',
            // "& #para1":
            // {
            //     position:'relative',
            //     bottom:'20px'

            // }
        },
        txt2:
        {
            height: '10%',
            width: '100%',
            // border:'1px solid blue',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            position: 'relative',
            left: '30px',
            // bottom:'20px',
    
            "& #para2":
            {
                fontSize: '13px',
                color: 'gray',
                position: 'relative',
                // bottom:'15px'
    
            }
        },
        txt3:
        {
            height: '10%',
            width: '100%',
            // border:'1px solid yellow',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            position: 'relative',
            left: '30px',
            // top: '25px',
            // "& #pr":
            // {
            //     position:'relative',
            //     bottom:'20px'
            // }
        },
        txt4:
        {
            height: '62%',
            width: '97%',
            // border:'1px solid green',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            left: '30px',
            // top: '17px',
    
        },
        logo1:
        {
            height: '60%',
            width: '10%',
            // border:'1px solid black',
            position: 'relative',
            top: '30px',
            "& #symbol":
            {
                color: 'gray'
            }
        },
        logo2:
        {
            height: '60%',
            width: '17%',
            // border:'1px solid black',
            position: 'relative',
            top: '30px',
            "& #num":
            {
                position: 'relative',
                top: '2px',
                left:'10px',
                color: 'gray'
            }
    
        },
        squ:
        {
            height: '15px',
            width: '30px',
            border: '2px solid gray',
            position: 'relative',
            left: '14px',
            //  top:'4px'
            bottom: '18px'
        },
        logo3:
        {
            height: '60%',
            width: '10%',
            // border:'1px solid black',
            position: 'relative',
            top: '30px',
            left:'20px',
            "& #symbol":
            {
                color: 'gray'
            }
        },
        logo4:
        {
            height: '100%',
            width: '73%',
            // border:'1px solid black',
            "& #remove":
            {
                position: 'relative',
                top: '30px',
                // right: '0px',
                left:'30px',
                fontWeight: '8px'
            }
        },
        part2:
        {
            height: '100%',
            width: '100%',
            // border:'1px solid red',
            "& #btn":
            {
                position: 'relative',
                left: '70px',
                top: '0px',
                // marginBottom: '10%',
                borderRadius: '0px'
            }
            
        },
        rect:
        {
            // height: '15%',
            // width: '100%',
            // border:'1px solid black'
            display:'none'
        },
        small_box:
        {
            height: '25%',
            width: '70%',
            border: '1px solid gray',
            position: 'relative',
            left: '70px',
            top: '18px',
            display: 'flex',
            flexDirection: 'row'
        },
        loc1:
        {
            height: '100%',
            width: '12%',
            // border:'1px solid gray',
            "& #location":
            {
                color: '#A03037'
            }
        },
        loc2:
        {
            height: '100%',
            width: '80%',
            // border:'1px solid gray',  
            "& #use":
            {
                fontSize: '15px',
                position: 'relative',
                right: '30px'
            }
        },
        loc3:
        {
            height: '100%',
            width: '8%',
            // border:'1px solid gray',  
            "& #drop":
            {
                color: 'gray',
                position: 'relative',
                right: '10px'
            }
    }
},
["@media only screen and (min-width:481px) and (max-width:768px)"]: {
    main:
    {
        height: '69vh',
        // height: 'auto',
        width: '96vw',
        //60h
        // border: '1px solid Black',
        position: 'relative',
        left: '8px',
        top: '20px'

    },

    box1:
    {
        height: '6%',
        width: '100%',
        // border: '1px solid black',
        "& #home":
        {
            color: 'gray',
            position: 'relative',
            right: '140px'
        },
        "& #cart":
        {
            position: 'relative',
            right: '140px'
        }
    },
    main1:
    {
        height: '330px',
        // height:'100%',
        width: '100%',
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    box22:
    {
        // height: '280px',
        height: 'auto',
        // height:'70%',
        width: '99%',
        // border: '1px solid blue',
        display: 'flex',
        flexDirection: 'column',
        marginLeft:'0px'

    },
    box3:
    {
        // height: '60px',
        width: '99.70%',
        // border: '1px solid pink',
        position: 'relative',
        // top: '120px',
        top: '50px',
        fontSize: '34px',
        "& #add":
        {
            // height: '50px',
            fontSize: '18px',
            position: 'relative',
            right: '10px',
            // top: '12px',
            bottom: '10px',
            color: 'gray',
            fontWeight: 'bold'
        }

    },
    box4:
    {
        // height: '50px',
        width: '99.70%',
        // border: '1px solid green',
        position: 'relative',
        top: '70px',
        // top: '140px',
        fontSize: '34px',

        "& #order":
        {
            fontSize: '18px',
            position: 'relative',
            right: '10px',
            // top: '12px',
            bottom: '10px',
            color: 'gray',
            fontWeight: 'bold'
        }

    },
    part1:
    {
        height: '100%',
        width: '100%',
        // border:'1px solid black'
    },
    title:
    {
        height: '45px',
        width: '100%',
        // border: '1px solid black',

        "& #txt1":
        {
            fontSize: '22px',
            fontWeight: 'bold',
            position: 'relative',
            right: '130px',
            top: '8px'
        }
    },
    block:
    {
        // height: '85%',
        height: 'auto',
        width: '100%',
        // border:'0.2px solid gray',
        display: 'flex',
        flexDirection: 'row'
    },
    block1:
    {
        height: '100%',
        width: '35%',
        // border:'1px solid red',
        position: 'relative',
        left:'10px',
        // bottom:'1px',
        "& #img":
        {
            height: '110px',
            width: '90px',
            position: 'relative',
            // left:'30px',
            // bottom: '150px',
            paddingBottom:'20px',
        }
    },
    block2:
    {
        // height: '100%',
        height: '150px',
        width: '90%',
        // border:'1px solid red',
        position: 'relative',
        top: '10px',

    },
    txt1:
    {
        height: '15%',
        width: '90%',
        // border:'1px solid black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
        left: '30px',
        // top:'10px',
        // "& #para1":
        // {
        //     position:'relative',
        //     bottom:'20px'

        // }
    },
    txt2:
    {
        height: '10%',
        width: '100%',
        // border:'1px solid blue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
        left: '30px',
        // bottom:'20px',

        "& #para2":
        {
            fontSize: '13px',
            color: 'gray',
            position: 'relative',
            // bottom:'15px'

        }
    },
    txt3:
    {
        height: '10%',
        width: '100%',
        // border:'1px solid yellow',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
        left: '30px',
        // top: '25px',
        // "& #pr":
        // {
        //     position:'relative',
        //     bottom:'20px'
        // }
    },
    txt4:
    {
        height: '62%',
        width: '97%',
        // border:'1px solid green',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        left: '30px',
        // top: '17px',

    },
    logo1:
    {
        height: '60%',
        width: '10%',
        // border:'1px solid black',
        position: 'relative',
        top: '30px',
        "& #symbol":
        {
            color: 'gray'
        }
    },
    logo2:
    {
        height: '60%',
        width: '17%',
        // border:'1px solid black',
        position: 'relative',
        top: '30px',
        "& #num":
        {
            position: 'relative',
            top: '2px',
            left:'10px',
            color: 'gray'
        }

    },
    squ:
    {
        height: '15px',
        width: '30px',
        border: '2px solid gray',
        position: 'relative',
        left: '14px',
        //  top:'4px'
        bottom: '18px'
    },
    logo3:
    {
        height: '60%',
        width: '10%',
        // border:'1px solid black',
        position: 'relative',
        top: '30px',
        left:'20px',
        "& #symbol":
        {
            color: 'gray'
        }
    },
    logo4:
    {
        height: '100%',
        width: '73%',
        // border:'1px solid black',
        "& #remove":
        {
            position: 'relative',
            top: '30px',
            // right: '0px',
            left:'30px',
            fontWeight: '8px'
        }
    },
    part2:
    {
        height: '100%',
        width: '100%',
        // border:'1px solid red',
        "& #btn":
        {
            position: 'relative',
            left: '150px',
            // top: '2900px',
            top: '0%',
            borderRadius: '0px'
        }
        
    },
    rect:
    {
        // height: '15%',
        // width: '100%',
        // border:'1px solid black'
        display:'none'
    },
    small_box:
    {
        height: '25%',
        width: '70%',
        border: '1px solid gray',
        position: 'relative',
        left: '70px',
        top: '18px',
        display: 'flex',
        flexDirection: 'row'
    },
   
},
["@media only screen and (min-width:769px) and (max-width:1024px)"]: {
    main:
    {
        height: '69vh',
        // height: 'auto',
        width: '77vw',
        //60h
        // border: '1px solid Black',
        position: 'relative',
        left: '8px',
        top: '20px'

    },

    box1:
    {
        height: '6%',
        width: '100%',
        // border: '1px solid black',
        "& #home":
        {
            color: 'gray',
            position: 'relative',
            right: '140px'
        },
        "& #cart":
        {
            position: 'relative',
            right: '140px'
        }
    },
    main1:
    {
        height: '330px',
        // height:'100%',
        width: '100%',
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    box22:
    {
        // height: '280px',
        height: 'auto',
        // height:'70%',
        width: '99%',
        // border: '1px solid blue',
        display: 'flex',
        flexDirection: 'column',
        marginLeft:'0px'

    },
    box3:
    {
        // height: '60px',
        width: '99.70%',
        // border: '1px solid pink',
        position: 'relative',
        // top: '120px',
        top: '50px',
        fontSize: '34px',
        "& #add":
        {
            // height: '50px',
            fontSize: '20px',
            position: 'relative',
            right: '10px',
            // top: '12px',
            bottom: '10px',
            color: 'gray',
            fontWeight: 'bold'
        }

    },
    box4:
    {
        // height: '50px',
        width: '99.70%',
        // border: '1px solid green',
        position: 'relative',
        top: '70px',
        // top: '140px',
        fontSize: '34px',

        "& #order":
        {
            fontSize: '18px',
            position: 'relative',
            right: '20px',
            // top: '12px',
            bottom: '10px',
            color: 'gray',
            fontWeight: 'bold'
        }

    },
    part1:
    {
        height: '100%',
        width: '100%',
        // border:'1px solid black'
    },
    title:
    {
        height: '45px',
        width: '100%',
        // border: '1px solid black',

        "& #txt1":
        {
            fontSize: '24px',
            fontWeight: 'bold',
            position: 'relative',
            right: '180px',
            top: '8px'
        }
    },
    block:
    {
        // height: '85%',
        height: 'auto',
        width: '100%',
        // border:'0.2px solid gray',
        display: 'flex',
        flexDirection: 'row'
    },
    block1:
    {
        height: '100%',
        width: '35%',
        // border:'1px solid red',
        position: 'relative',
        left:'10px',
        // bottom:'1px',
        "& #img":
        {
            height: '130px',
            width: '110px',
            position: 'relative',
            // left:'30px',
            // bottom: '150px',
            paddingBottom:'30px',
        }
    },
    block2:
    {
        // height: '100%',
        height: '150px',
        width: '90%',
        // border:'1px solid red',
        position: 'relative',
        top: '10px',

    },
    txt1:
    {
        height: '15%',
        width: '90%',
        // border:'1px solid black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
        left: '30px',
        top:'30px',
        "& #para1":
        {
            position:'relative',
            bottom:'30px',
            fontSize:'20px'

        }
    },
    txt2:
    {
        height: '20%',
        width: '100%',
        // border:'1px solid blue',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
        left: '30px',
        top:'30px',
        // bottom:'20px',

        "& #para2":
        {
            fontSize: '16px',
            color: 'gray',
            position: 'relative',
            // bottom:'15px'

        }
    },
    txt3:
    {
        height: '10%',
        width: '100%',
        // border:'1px solid yellow',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative',
        left: '30px',
        top: '25px',
        "& #pr":
        {
            // position:'relative',
            // bottom:'20px'
            fontSize:'18px'
        }
    },
    txt4:
    {
        height: '40%',
        width: '97%',
        // border:'1px solid green',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        left: '30px',
        // top: '17px',

    },
    logo1:
    {
        height: '60%',
        width: '10%',
        // border:'1px solid black',
        position: 'relative',
        top: '30px',
        left:'10px',
        "& #symbol":
        {
            color: 'gray'
        }
    },
    logo2:
    {
        height: '60%',
        width: '17%',
        // border:'1px solid black',
        position: 'relative',
        top: '30px',
        "& #num":
        {
            position: 'relative',
            top: '2px',
            left:'0px',
            color: 'gray'
        }

    },
    squ:
    {
        height: '15px',
        width: '30px',
        border: '2px solid gray',
        position: 'relative',
        left: '14px',
        //  top:'4px'
        bottom: '18px'
    },
    logo3:
    {
        height: '60%',
        width: '10%',
        // border:'1px solid black',
        position: 'relative',
        top: '30px',
        // left:'0px',
        right:'15px',
        "& #symbol":
        {
            color: 'gray'
        }
    },
    logo4:
    {
        height: '100%',
        width: '53%',
        // border:'1px solid black',
        "& #remove":
        {
            position: 'relative',
            top: '30px',
            // right: '0px',
            left:'30px',
            fontWeight: '8px'
        }
    },
    part2:
    {
        height: '100%',
        width: '100%',
        // border:'1px solid red',
        "& #btn":
        {
            position: 'relative',
            left: '200px',
            // top: '2900px',
            top: '0%',
            borderRadius: '0px'
        }
        
    },
    rect:
    {
        // height: '15%',
        // width: '100%',
        // border:'1px solid black'
        display:'none'
    },
    small_box:
    {
        height: '25%',
        width: '70%',
        border: '1px solid gray',
        position: 'relative',
        left: '70px',
        top: '18px',
        display: 'flex',
        flexDirection: 'row'
    },
   
}



})



function Cart() {


    const [count, setCount] = useState(1)

    const [addressbook, setAddressbook] = useState(false)

    const [order, setOrder] = useState(false)

    const [cartorder, setCartOrder] = useState([])

    const navigate = useNavigate()

    const classes = useStyle();

    const [refreshPage, setRefreshPage] = useReducer(x => x + 1, 0)

    useEffect(() => {
        getCard().then((response) => {
            console.log(response);
            setCartOrder(response.data.result)
        }).catch((error) => console.log(error))
    }, [refreshPage])


    const removeCartOrder = (bookId) => {

        let obj = {
            'cartItem_id': bookId
        }
        console.log(obj, "**** Removed ****")
        removeCart(obj).then((response) => {
            console.log(response.data.result, "Book Removed")
            setRefreshPage()
        }).catch((error => console.log(error)))
    }

    const Decrement = (id, qty) => {
        if (count > 0) {
            setCount(count => count - 1)

            let obj = {
                cartItem_id: id,
                quantityToBuy: qty - 1
            }

            console.log('*****obj*****', obj)

            // console.log(props.id)
            addToInfo(obj).then((response) => {

                console.log(response, "Decremented count")
                setRefreshPage()
            }).catch((error => console.log(error)))
        }
        else {
            setCount(1)
        }
    }

    const Increment = (id, qty) => {
        setCount(count => count + 1)

        let obj = {
            cartItem_id: id,
            quantityToBuy: qty + 1
        }

        console.log('*****obj*****', obj)


        addToInfo(obj).then((response) => {
            // console.log(response.data.data)
            console.log(response, "Incremented count")
            setRefreshPage()
        }).catch((error => console.log(error)))
    }

    const Customer_Details1 = () => {
        setAddressbook(true)
        // setPlaceOrder(true)
    }

    const openOrderSummary = () => {
        setOrder(true)
    }

    const gotohome = () => {
        navigate('/dashboard')
    }

    return (
        <Box>
            <PrimarySearchAppBar />
            <Box className={classes.screen}>
                <Box className={classes.main}>
                    <Box className={classes.box1}>
                        <span id='home' onClick={gotohome}>Home/</span>
                        <span id='cart'>My cart</span>
                    </Box>
                    <Box className={classes.main1}>
                        <Paper className={classes.box22}>
                            <Box className={classes.part1}>
                                <Box className={classes.title}>
                                    <span id='txt1'>My Cart (1)</span>
                                </Box>
                                {
                                    cartorder.map((cart) => (
                                        <Box className={classes.block}>
                                            <Box className={classes.block1}>
                                                <img id='img' src='../../Assets/book1.png'></img>

                                            </Box>


                                            <Box className={classes.block2}>
                                                <Box className={classes.txt1}>
                                                    <span id='para1'><h3>{cart.product_id.bookName}</h3></span>
                                                </Box>
                                                <Box className={classes.txt2}>
                                                    <span id='para2'>{cart.product_id.author}</span>

                                                </Box>
                                                <Box className={classes.txt3}>
                                                    <span id='pr'><b>Rs. {cart.product_id.price}  </b>
                                                        <s> Rs. {cart.product_id.discountPrice}</s></span>
                                                </Box>
                                                <Box className={classes.txt4}>
                                                    <Box className={classes.logo1}>
                                                        <RemoveCircleOutlineIcon id='symbol' onClick={() => Decrement(cart._id, cart.quantityToBuy)} />
                                                    </Box>
                                                    <Box className={classes.logo2}>
                                                        <span id='num'>{cart.quantityToBuy}</span>
                                                        <Box className={classes.squ}>

                                                        </Box>
                                                    </Box>
                                                    <Box className={classes.logo3}>
                                                        <AddCircleOutlineIcon id='symbol' onClick={() => Increment(cart._id, cart.quantityToBuy)} />
                                                    </Box>
                                                    <Box className={classes.logo4} >
                                                        {/* <span id='remove' onClick={() =>removeCartOrder(cart.product_id)}>Remove</span> */}
                                                        <span id='remove' onClick={() => removeCartOrder(cart._id)}>Remove</span>

                                                    </Box>
                                                </Box>
                                            </Box>


                                        </Box>
                                    ))}
                            </Box>
                            <Box className={classes.part2}>
                                <Box className={classes.rect}>
                                    <Box className={classes.small_box}>
                                        <Box className={classes.loc1}>
                                            <PlaceIcon id='location' />
                                        </Box>
                                        <Box className={classes.loc2}>
                                            <span id='use'>Use current location</span>
                                        </Box>
                                        <Box className={classes.loc3}>
                                            <ArrowDropDownIcon id='drop' />
                                        </Box>
                                    </Box>
                                </Box>
                                {/* <Button id='btn' variant='contained' onClick={Customer_Details1}>PLACE ORDER</Button> */}
                                {
                                    addressbook ? null : <Button id='btn' variant='contained' onClick={Customer_Details1}>PLACE ORDER</Button>
                                }
                            </Box>

                        </Paper>
                        <Paper className={classes.box3}>
                            {
                                addressbook ? <Customer_Details openOrderSummary={openOrderSummary} /> : <span style={{ height: '60px' }} id='add'>Address Details</span>
                            }
                            {/* <span id='add'>Address Details</span> */}
                        </Paper>


                        <Paper className={classes.box4}>
                            {
                                order ? <Order /> : <span style={{ height: '60px' }} id='order'>Order Summary</span>

                            }
                            {/* <span style={{height: '60px'}} id='order'>Order Summary</span> */}

                        </Paper>
                    </Box>

                </Box>

            </Box>


        </Box>
    )
}

export default Cart
