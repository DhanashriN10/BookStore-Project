import React from 'react'
import { makeStyles } from "@mui/styles"
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import PrimarySearchAppBar from './header';
import { useNavigate } from 'react-router-dom';
import { Order } from './Service/dataservice';


const useStyle = makeStyles({
    main:
    {
        height: '82vh',
        // height: '90vh',
        width: '99vw',
        // border: '1px solid black',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    block:
    {
        // height:'95%',
        height: '85vh',
        // width:'70%',
        width: '65vw',
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box1:
    {
        height: '40%',
        width: '100%',
        // border: '1px solid red',
        "& #img":
        {
            height: '260px',
            width: '400px',
            // border: '1px solid gray'
        }
    },
    box2:
    {
        // height: '20%',
        height: '14%',
        width: '50%',
        // border: '1px solid green',

        "& #para":
        {
            fontSize: '20px',
            color: '#333232'

        }
    },
    box3:
    {
        height: '30%',
        width: '70%',
        // border: '1px solid blue',
        display: 'flex',
        flexDirection: 'column',


    },
    head:
    {
        height: '30%',
        width: '100%',
        border: '1px solid #DCDCDC',
        display: 'flex',
        flexDirection: 'row',
        background: '#FAFAFA'
    },
    col1: {
        height: '100%',
        width: '30%',
        // border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "& #tit":
        {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#333232'
        }
    },
    col2: {
        height: '100%',
        width: '29%',
        // border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "& #tit":
        {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#333232'
        }
    },
    col3: {
        height: '100%',
        width: '41%',
        // border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "& #tit":
        {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#333232'
        }
    },
    content:
    {
        height: '70%',
        width: '100%',
        border: '1px solid #DCDCDC',
        display: 'flex',
        flexDirection: 'row'
    },
    col11: {
        height: '100%',
        width: '30%',
        border: '1px solid #DCDCDC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "& #add":
        {
            fontSize: '14px',
            color: '#333232'
        }
    },
    col12: {
        height: '100%',
        width: '29%',
        border: '1px solid #DCDCDC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "& #add":
        {
            fontSize: '14px',
            color: '#333232'
        }

    },
    col13: {
        height: '100%',
        width: '41%',
        border: '1px solid #DCDCDC',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'flex-start',
        justifyContent: 'center',
        "& #add":
        {
            fontSize: '12px',
            color: '#333232'
        }
    },
    box4:
    {
        height: '10%',
        width: '50%',
        // border: '1px solid yellow',


        "& #btn":
        {
            width: "200px",
            height: "40px",
            background: "#3371B5",
            position: 'relative',
            top: '20px'

        }
    },

    blank:
    {
        height: '30px'
    },
    footer:
    {
        height: '40px',
        border: '1px solid brown',
        background: '#2E1D1E',
        "& #footext":
        {
            color: 'white',
            position: 'relative',
            right: '440px',
            top: '5px',
            fontSize: '10px'
        }
    },
    ["@media only screen and (min-width:320px) and (max-width:480px)"]: {

        main:
        {
            height: '100vh',
            // height: '90vh',
            width: '97vw',
            // border: '1px solid black',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        block:
        {
            // height:'95%',
            height: '95vh',
            // width:'70%',
            width: '90vw',
            // border: '1px solid black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        box1:
        {
            height: '40%',
            width: '100%',
            // border: '1px solid red',
            position:'relative',
            bottom:'30px',
            "& #img":
            {
                height: '180px',
                width: '240px',
                // border: '1px solid gray',
                position:'relative',
                left:'20px',
            }
        },
        box2:
        {
            // height: '20%',
            height: '24%',
            width: '90%',
            // border: '1px solid green',
    
            "& #para":
            {
                fontSize: '22px',
                color: '#333232'
    
            }
        },
        box3:
        {
            // height: '30%',
            // width: '70%',
            // // border: '1px solid blue',
            // display: 'flex',
            // flexDirection: 'column',

            display:'none'
    
        },
       
        box4:
        {
            height: '10%',
            width: '90%',
            // border: '1px solid red',
            position: 'relative',
            top:'70px',
    
            "& #btn":
            {
                width: "190px",
                height: "45px",
                background: "#3371B5",
                position: 'relative',
                top: '0px'
    
            }
        },
    
        blank:
        {
            height: '15px'
        },
        footer:
        {
            height: '40px',
            // border: '1px solid brown',
            background: '#2E1D1E',
            "& #footext":
            {
                color: 'white',
                position: 'relative',
                right: '10px',
                top: '5px',
                fontSize: '10px'
            }
        },
    },

    ["@media only screen and (min-width:481px) and (max-width:768px)"]: {

        main:
    {
        height: '82vh',
        // height: '90vh',
        width: '99vw',
        // border: '1px solid black',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    block:
    {
        // height:'95%',
        height: '82vh',
        // width:'70%',
        width: '95vw',
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box1:
    {
        height: '30%',
        width: '100%',
        // border: '1px solid red',
        "& #img":
        {
            height: '190px',
            width: '300px',
            // border: '1px solid gray'
        }
    },
    box2:
    {
        // height: '20%',
        height: '17%',
        width: '60%',
        // border: '1px solid green',

        "& #para":
        {
            fontSize: '18px',
            color: '#333232'

        }
    },
    box3:
    {
        height: '30%',
        width: '85%',
        // border: '1px solid blue',
        display: 'flex',
        flexDirection: 'column',


    },
    head:
    {
        height: '30%',
        width: '100%',
        border: '1px solid #DCDCDC',
        display: 'flex',
        flexDirection: 'row',
        background: '#FAFAFA',
    },
    col1: {
        height: '100%',
        width: '30%',
        // border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "& #tit":
        {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333232'
        }
    },
    col2: {
        height: '100%',
        width: '29%',
        // border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "& #tit":
        {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333232'
        }
    },
    col3: {
        height: '100%',
        width: '41%',
        // border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "& #tit":
        {
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333232'
        }
    },
    content:
    {
        height: '70%',
        width: '100%',
        border: '1px solid #DCDCDC',
        display: 'flex',
        flexDirection: 'row'
    },
    col11: {
        height: '100%',
        width: '30%',
        border: '1px solid #DCDCDC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "& #add":
        {
            fontSize: '11px',
            color: '#333232'
        }
    },
    col12: {
        height: '100%',
        width: '29%',
        border: '1px solid #DCDCDC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "& #add":
        {
            fontSize: '11px',
            color: '#333232'
        }

    },
    col13: {
        height: '100%',
        width: '41%',
        border: '1px solid #DCDCDC',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'flex-start',
        justifyContent: 'center',
        "& #add":
        {
            fontSize: '12px',
            color: '#333232'
        }
    },
    box4:
    {
        height: '10%',
        width: '50%',
        // border: '1px solid yellow',
        position: 'relative',
            top: '10px',

        "& #btn":
        {
            width: "200px",
            height: "40px",
            background: "#3371B5",
            position: 'relative',
            top: '20px'

        }
    },

    blank:
    {
        height: '10px'
    },
    footer:
    {
        height: '40px',
        border: '1px solid brown',
        background: '#2E1D1E',
        "& #footext":
        {
            color: 'white',
            position: 'relative',
            right: '40px',
            top: '5px',
            fontSize: '10px'
        }
    }
},

["@media only screen and (min-width:769px) and (max-width:1024px)"]: {

    main:
{
    height: '82vh',
    // height: '90vh',
    width: '77vw',
    // border: '1px solid black',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
},
block:
{
    // height:'95%',
    height: '80vh',
    // width:'70%',
    width: '75vw',
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
},
box1:
{
    height: '32%',
    width: '90%',
    // border: '1px solid red',
    "& #img":
    {
        height: '250px',
        width: '380px',
        // border: '1px solid gray'
    }
},
box2:
{
    // height: '20%',
    height: '17%',
    width: '70%',
    // border: '1px solid green',

    "& #para":
    {
        fontSize: '25px',
        color: '#333232'

    }
},
box3:
{
    height: '30%',
    width: '90%',
    // border: '1px solid blue',
    display: 'flex',
    flexDirection: 'column',


},
head:
{
    height: '30%',
    width: '100%',
    border: '1px solid #DCDCDC',
    display: 'flex',
    flexDirection: 'row',
    background: '#FAFAFA',
},
col1: {
    height: '100%',
    width: '30%',
    // border: '1px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    "& #tit":
    {
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#333232'
    }
},
col2: {
    height: '100%',
    width: '29%',
    // border: '1px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    "& #tit":
    {
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#333232'
    }
},
col3: {
    height: '100%',
    width: '41%',
    // border: '1px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    "& #tit":
    {
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#333232'
    }
},
content:
{
    height: '70%',
    width: '100%',
    border: '1px solid #DCDCDC',
    display: 'flex',
    flexDirection: 'row'
},
col11: {
    height: '100%',
    width: '30%',
    border: '1px solid #DCDCDC',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    "& #add":
    {
        fontSize: '15px',
        color: '#333232'
    }
},
col12: {
    height: '100%',
    width: '29%',
    border: '1px solid #DCDCDC',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    "& #add":
    {
        fontSize: '15px',
        color: '#333232'
    }

},
col13: {
    height: '100%',
    width: '41%',
    border: '1px solid #DCDCDC',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'center',
    "& #add":
    {
        fontSize: '15px',
        color: '#333232'
    }
},
box4:
{
    height: '10%',
    width: '50%',
    // border: '1px solid yellow',
    position: 'relative',
        top: '20px',

    "& #btn":
    {
        width: "220px",
        height: "60px",
        background: "#3371B5",
        position: 'relative',
        top: '20px',
        fontSize:'15px'

    }
},

blank:
{
    height: '10px'
},
footer:
{
    height: '40px',
    border: '1px solid brown',
    background: '#2E1D1E',
    "& #footext":
    {
        color: 'white',
        position: 'relative',
        right: '40px',
        top: '5px',
        fontSize: '10px'
    }
}
}



})

function Order_placed() {
    const classes = useStyle();

    const navigate = useNavigate()

    const dashboard = () => {
        navigate('/dashboard')
    }

    return (
        <Box>
            <PrimarySearchAppBar />

            <Box className={classes.main}>
                <Box className={classes.block}>
                    <Box className={classes.box1}>
                        <img id='img' src='../../Assets/orderplaced.jpeg'></img>
                    </Box>
                    <Box className={classes.box2}>
                        <span id='para'>hurry!!! your order is confirmed<br />
                            the order id is #123456 save the order id for<br />
                            further communication..</span>
                    </Box>
                    <Box className={classes.box3}>
                        <Box className={classes.head}>
                            <Box className={classes.col1}>
                                <span id='tit'>Email us</span>
                            </Box>
                            <Box className={classes.col2}>
                                <span id='tit'>Contact us</span>
                            </Box>
                            <Box className={classes.col3}>
                                <span id='tit'>Address</span>
                            </Box>
                        </Box>
                        <Box className={classes.content}>
                            <Box className={classes.col11}>
                                <span id='add'>admin@bookstore.com</span>

                            </Box>
                            <Box className={classes.col12}>
                                <span id='add'>+91 8163475881</span>
                            </Box>
                            <Box className={classes.col13}>
                                <span id='add'>42, 14th Main, 15th Cross, Sector 4,opp to BDA <br />complex,near Kumarakom restaurant,HSR Layout,<br />
                                    Bangalore 560034</span>
                            </Box>


                        </Box>

                    </Box>
                    <Box className={classes.box4}>
                        <Button id="btn" variant="contained" onClick={dashboard}>CONTINUE SHOPPING </Button>

                    </Box>
                </Box>

            </Box>
            <Box className={classes.blank}>

            </Box>
            <Box className={classes.footer}>
                <span id='footext'>Copyright @2020, Bookstore Private Limited. All Rights Reserved</span>
            </Box>
        </Box>
    )
}

export default Order_placed
