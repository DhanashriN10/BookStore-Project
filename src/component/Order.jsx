import React, { useEffect, useState } from 'react'
import { makeStyles } from "@mui/styles"
import { Box, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getCard, getOrder } from './Service/dataservice';

const useStyle = makeStyles({
    main:
    {
        // height: '30vh',
        height:'auto',
        width: '56vw',
        // border: '1px solid #DCDCDC',
        position: 'relative',
        // left: '10px',
        // top:'20px'
    },
    box1:
    {
        height: '20%',
        width: '70%',
        // border: '1px solid red',
        display: 'flex',
        position: 'relative',
        left: '45px',
        "& #tit":
        {
            fontWeight: 'bolder',
            fontSize: '25px',
            display: 'flex',
        }
    },
    box2:
    {
        // height: '80%',
        height:'150px',
        width: '100%',
        // border: '1px solid green',
        display: 'flex',
        flexDirection: 'row'
    },
    part1:
    {
        height: '100%',
        width: '25%',
        // border: '1px solid red',

    },
    book1:
    {
        height: '112px',
        width: '95px',
        position: 'relative',
        top: '21px'
    },
    part2:
    {
        height: '100%',
        width: '75%',
        // border: '1px solid yellow',
    },
    block1:
    {
        height: '30%',
        width: '80%',
        // border: '1px solid black',
        display: 'flex',

        "& #title":
        {
            fontSize: '22px',

        }
    },
    block2:
    {
        height: '24%',
        width: '40%',
        // border: '1px solid blue',
        display: 'flex',
        fontSize: '12px',
        position:'relative',
        top:'15px',
        // bottom:'20px',
        "& #author":
        {
            color: 'gray',
            // marginTop: '5px'
        }
    },
    block3:
    {
        height: '15%',
        width: '40%',
        // border: '1px solid red',
        display: 'flex',
        fontSize: '12px',
        position:'relative',
        // bottom:'15px',
        "& #rs":
        {
            position: 'relative',
            bottom: '30px',
            fontSize: '20px'
        },
        "& #diss":
        {
            marginLeft: '10px',
            marginTop: '3px',
            color: 'gray'
        }

    },
    block4:
    {
        height: '30%',
        width: '100%',
        // border: '1px solid green',
        "& #btn":
        {
            height: '40px',
            width: '140px',
            position: 'relative',
            left: '240px',
            bottom:'20px',
            borderRadius: '0px'
        }
    },
    ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
        main:
        {
            // height: '30vh',
            height:'auto',
            width: '90vw',
            // border: '1px solid #DCDCDC',
            // border:'1px solid black',
            position: 'relative',
            left: '15px',
            // top:'20px'
        },
        box1:
        {
            height: '20%',
            width: '80%',
            // border: '1px solid red',
            display: 'flex',
            position: 'relative',
            left: '45px',
            "& #tit":
            {
                fontWeight: 'bolder',
                fontSize: '25px',
                display: 'flex',
            }
        },
        box2:
        {
            // height: '80%',
            height:'190px',
            width: '100%',
            // border: '1px solid green',
            display: 'flex',
            flexDirection: 'column'
        },
        part1:
        {
            height: '50%',
            width: '50%',
            // border: '1px solid red',
            position:'relative',
            left:"60px",
            bottom:'10px'
    
        },
        book1:
        {
            height: '92px',
            width: '95px',
            position: 'relative',
            // top: '21px',
            // marginBottom:'90px',
           
        },
        part2:
        {
            height: '50%',
            width: '95%',
            // border: '1px solid blue',
        },
        block1:
        {
            height: '30%',
            width: '90%',
            // border: '1px solid black',
            display: 'flex',
            position:'relative',
            top:'10px',
    
            "& #title":
            {
                fontSize: '22px',
                position:'relative',
            bottom:'25px',
            left:'50px'
            }
        },
        block2:
        {
            height: '24%',
            width: '90%',
            // border: '1px solid blue',
            display: 'flex',
            fontSize: '12px',
            position:'relative',
            left:'50px',
            // top:'15px',
            // bottom:'20px',
            "& #author":
            {
                color: 'gray',
                // marginTop: '5px'
            }
        },
        block3:
        {
            height: '20%',
            width: '90%',
            // border: '1px solid red',
            display: 'flex',
            fontSize: '12px',
            position:'relative',
            top:'15px',
            left:'50px',
            // bottom:'15px',
            "& #rs":
            {
                position: 'relative',
                // bottom: '30px',
                fontSize: '20px'
            },
            "& #diss":
            {
                marginLeft: '10px',
                marginTop: '3px',
                color: 'gray'
            }
    
        },
        block4:
        {
            height: '30%',
            // width: '100%',
            // border: '1px solid green',
            "& #btn":
            {
                height: '40px',
                width: '120px',
                position: 'relative',
                left: '70px',
                bottom:'10px',
                borderRadius: '0px'
            }
        },

    },

    ["@media only screen and (min-width:481px) and (max-width:768px)"]: {
        main:
        {
            // height: '30vh',
            height:'auto',
            width: '90vw',
            // border: '1px solid #DCDCDC',
            // border:'1px solid black',
            position: 'relative',
            left: '15px',
            // top:'20px'
        },
        box1:
        {
            height: '25%',
            width: '80%',
            // border: '1px solid red',
            display: 'flex',
            position: 'relative',
            left: '45px',
            "& #tit":
            {
                fontWeight: 'bolder',
                fontSize: '25px',
                display: 'flex',
            }
        },
        box2:
        {
            // height: '80%',
            height:'190px',
            width: '100%',
            // border: '1px solid green',
            display: 'flex',
            flexDirection: 'row'
        },
        part1:
        {
            height: '90%',
            width: '50%',
            // border: '1px solid red',
            position:'relative',
            left:"20px",
            bottom:'0px'
    
        },
        book1:
        {
            height: '130px',
            width: '105px',
            position: 'relative',
            // top: '21px',
            // marginBottom:'90px',
           
        },
        part2:
        {
            height: '90%',
            width: '95%',
            // border: '1px solid blue',
        },
        block1:
        {
            height: '30%',
            width: '95%',
            // border: '1px solid black',
            display: 'flex',
            position:'relative',
            top:'20px',
    
            "& #title":
            {
                fontSize: '25px',
                position:'relative',
            bottom:'20px',
            left:'50px'
            }
        },
        block2:
        {
            height: '24%',
            width: '90%',
            // border: '1px solid blue',
            display: 'flex',
            fontSize: '16px',
            position:'relative',
            left:'50px',
            // top:'15px',
            // bottom:'20px',
            "& #author":
            {
                color: 'gray',
                // marginTop: '5px'
            }
        },
        block3:
        {
            height: '30%',
            width: '90%',
            // border: '1px solid red',
            display: 'flex',
            fontSize: '12px',
            position:'relative',
            top:'10px',
            left:'50px',
            // bottom:'15px',
            "& #rs":
            {
                position: 'relative',
                // bottom: '30px',
                fontSize: '20px'
            },
            "& #diss":
            {
                marginLeft: '10px',
                marginTop: '3px',
                color: 'gray'
            }
    
        },
        block4:
        {
            height: '30%',
            // width: '100%',
            // border: '1px solid green',
            "& #btn":
            {
                height: '40px',
                width: '120px',
                position: 'relative',
                left: '140px',
                bottom:'20px',
                borderRadius: '0px'
            }
        },

    },

    ["@media only screen and (min-width:769px) and (max-width:1024px)"]: {
        main:
        {
            // height: '30vh',
            height:'auto',
            width: '75vw',
            // border: '1px solid #DCDCDC',
            // border:'1px solid black',
            position: 'relative',
            left: '15px',
            // top:'20px'
        },
        box1:
        {
            height: '25%',
            width: '80%',
            // border: '1px solid red',
            display: 'flex',
            position: 'relative',
            left: '45px',
            "& #tit":
            {
                fontWeight: 'bolder',
                fontSize: '28px',
                display: 'flex',
            }
        },
        box2:
        {
            // height: '80%',
            height:'190px',
            width: '100%',
            // border: '1px solid green',
            display: 'flex',
            flexDirection: 'row'
        },
        part1:
        {
            height: '90%',
            width: '50%',
            // border: '1px solid red',
            position:'relative',
            left:"20px",
            bottom:'0px'
    
        },
        book1:
        {
            height: '140px',
            width: '115px',
            position: 'relative',
            // top: '21px',
            // marginBottom:'90px',
           
        },
        part2:
        {
            height: '90%',
            width: '95%',
            // border: '1px solid blue',
        },
        block1:
        {
            height: '30%',
            width: '95%',
            // border: '1px solid black',
            display: 'flex',
            position:'relative',
            top:'20px',
    
            "& #title":
            {
                fontSize: '25px',
                position:'relative',
            bottom:'20px',
            left:'50px'
            }
        },
        block2:
        {
            height: '24%',
            width: '90%',
            // border: '1px solid blue',
            display: 'flex',
            fontSize: '16px',
            position:'relative',
            left:'50px',
            // top:'15px',
            // bottom:'20px',
            "& #author":
            {
                color: 'gray',
                // marginTop: '5px'
            }
        },
        block3:
        {
            height: '30%',
            width: '90%',
            // border: '1px solid red',
            display: 'flex',
            fontSize: '12px',
            position:'relative',
            top:'10px',
            left:'50px',
            // bottom:'15px',
            "& #rs":
            {
                position: 'relative',
                // bottom: '30px',
                fontSize: '20px'
            },
            "& #diss":
            {
                marginLeft: '10px',
                marginTop: '3px',
                color: 'gray'
            }
    
        },
        block4:
        {
            height: '30%',
            // width: '100%',
            // border: '1px solid green',
            "& #btn":
            {
                height: '40px',
                width: '120px',
                position: 'relative',
                left: '170px',
                bottom:'20px',
                borderRadius: '0px'
            }
        },

    }


})

function Order() {
    const classes = useStyle();

    const navigate = useNavigate()

    const [order, setOrder] = useState([])

    // const [information, setInformation] = useState([])

    useEffect(() => {
        getCard().then((response) => {
            console.log(response);
            setOrder(response.data.result)
        }).catch((error) => console.log(error))
    }, [])

    
        const checkout = () => {
            console.log(order,'List of ordered books')
            let orderList = [];
            for(let i=0; i<order.length;i++)
            {
                let obj={
                    product_id:order[i].product_id._id,
                    product_name:order[i].product_id.bookName,
                    product_quantity:order[i].quantityToBuy,
                    product_price:order[i].product_id.discountPrice,
                }
                orderList.push(obj)
            }
            navigate('/Order_placed')
            let orderObj = {orders: orderList}
            getOrder(orderObj).then((response) => {
                console.log(response,'Order Placed');
                // navigate('/Order_placed')
        }).catch((error) => { 
            console.log(error) 

        })
        
    }

    return (
        <Box className={classes.main}>
            <Box className={classes.box1}>
                <span id='tit'>Order Summery</span>

            </Box>
            {
                order.map((item) => (

                    <Box className={classes.box2}>
                        <Box className={classes.part1}>
                            <img className={classes.book1} src='../../Assets/book1.png'></img>
                        </Box>
                        <Box className={classes.part2}>
                            <Box className={classes.block1}>
                                <span id='title'>
                                    <h5>{item.product_id.bookName}</h5>
                                </span>
                            </Box>
                            <Box className={classes.block2}>
                                <span id='author'>
                                {item.product_id.author}
                                </span>
                            </Box>
                            <Box className={classes.block3}>
                                <span id='rs'><h4>Rs. {item.product_id.price}</h4></span>
                                <span id='diss'><s>Rs. {item.product_id.discountPrice}</s></span>

                            </Box>

                        </Box>

                    </Box>
                ))
            }
            <Box className={classes.block4}>
                <Button id='btn' variant='contained' onClick={checkout}>CHECKOUT</Button>
            </Box>


        </Box>
    )
}

export default Order
