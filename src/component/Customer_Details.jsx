import { Box, Button, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from "@mui/styles"
import { Cust_Details } from './Service/dataservice';


const addressRegex = /^[#.0-9a-zA-Z\s,-]+$/;
const cityRegex = /^[a-zA-Z',.\s-]{1,25}$/;
const stateRegex = /[A-Z][a-z]+(?: +[A-Z][a-z]+)*/

const useStyle = makeStyles({


    main:
    {
        height: '55vh',
        width: '56vw',
        // border: '1px solid Black',
        position: 'relative',
        // left: '10px'
    },
    box1:
    {
        height: '10%',
        width: '100%',
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'row'
    },
    title:
    {
        height: '100%',
        width: '50%',
        // border: '1px solid green',
        position: 'relative',
        left: '20px',
        "& #tit":
        {
            fontWeight: 'bolder',
            fontSize: '25px',
            display: 'flex',
        }
    },
    red_box:
    {
        height: '100%',
        width: '50%',
        // border: '1px solid red'
    },
    red:
    {
        height: '70%',
        width: '45%',
        border: '2px solid #A03037',
        position: 'relative',
        left: '170px',
        top: '5px',
        "& #address":
        {
            color: '#A03037',
            fontSize: '16px',
            position: 'relative',
            // top: '3px',
            bottom: '15px'
        }
    },
    box2:
    {
        height: '14%',
        width: '70%',
        // border: '1px solid yellow',
        // display:'flex',
        // flexDirection:'row',
        // justifyContent:'space-between',
        // position:'relative',
        // top:'20px',



        // height: "20%",
        //     width: "95%",
        //     border: "1px solid Red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: "20px",
        marginLeft: "0px",
        paddingLeft: "0px",
        "& #outlined-basic2":
        {
            width: "240px",
            height: "35px"
        }
    },
    // name:
    // {
    //     height:'100%',
    //     width:'50%',
    //     border:'1px solid black',
    //     "& #outlined-basic2":
    //     {
    //         width:'250px'
    //     }
    // },
    // mobile:
    // {
    //     height:'100%',
    //     width:'50%',
    //     border:'1px solid blue',
    //     "& #outlined-basic2":
    //     {
    //         width:'250px'
    //     }
    // },
    box3:
    {
        height: '30%',
        width: '70%',
        // border:'1px solid green',
        position: 'relative',
        top: '20px',

        "& #outlined-basic1":
        {
            width: "530px",
            height: "50px",

        }
    },
    box4:
    {
        height: '15%',
        width: '70%',
        // border: '1px solid brown',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        "& #outlined-basic2":
        {
            width: "240px",
            height: "35px",
        }
    },
    box5:
    {
        height: '12%',
        width: '70%',
        // border: '1px solid blue',
        color: 'gray',
        fontSize: '15px',
        "& #r1":
        {
            position: 'relative',
            right: '190px',
            top: '8px'
        },
        "& #r2":
        {
            position: 'relative',
            right: '100px',
            top: '8px'
        },
        "& #r3":
        {
            position: 'relative',
            right: '22px',
            top: '8px'
        }



        // "& #radio":
        // {
        //     backgroundColor: 'red',
        //     border: '2px solid red'
        // }
    },
    type:
    {
        height: '50%',
        width: '100%',
        // border:'1px solid black',
        display: 'flex',
        marginLeft: '22px'

    },
    box6:
    {
        height: '13%',
        width: '100%',
        // border: '1px solid pink',
        "& #btn":
        {
            height: '40px',
            width: '140px',
            position: 'relative',
            left: '290px',
            borderRadius: '0px'
        }
    },
    ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
        
    main:
    {
        height: '95vh',
        width: '96vw',
        // border: '1px solid Black',
        position: 'relative',
        left: '8px'
    },
    box1:
    {
        height: '20%',
        width: '100%',
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column'
    },
    title:
    {
        height: '50%',
        width: '90%',
        // border: '1px solid green',
        position: 'relative',
        left: '20px',
        "& #tit":
        {
            fontWeight: 'bolder',
            fontSize: '25px',
            display: 'flex',
        }
    },
    red_box:
    {
        height: '50%',
        width: '50%',
        // border: '1px solid red'
    },
    red:
    {
        height: '70%',
        width: '85%',
        border: '2px solid #A03037',
        position: 'relative',
        left: '20px',
        top: '5px',
        "& #address":
        {
            color: '#A03037',
            fontSize: '14px',
            position: 'relative',
            // top: '3px',
            bottom: '15px'
        }
    },
    box2:
    {
        height: '22%',
        width: '90%',
        // border:'1px solid red',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        paddingTop: "0px",
        marginLeft: "0px",
        paddingLeft: "20px",
        "& #outlined-basic2":
        {
            width: "40px",
            height: "20px"
        }
    },
    
    box3:
    {
        height: '24%',
        width: '95%',
        // border:'1px solid green',
        position: 'relative',
        top: '5px',
        left:'10px',
        // paddingLeft: "20px",

        "& #outlined-basic1":
        {
            width: "250px",
            height: "60px",

        }
    },
    box4:
    {
        height: '12%',
        width: '99%',
        // border: '1px solid brown',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        "& #outlined-basic2":
        {
            width: "100px",
            height: "35px",
        }
    },
    box5:
    {
        height: '12%',
        width: '99%',
        // border: '1px solid blue',
        color: 'gray',
        fontSize: '15px',
        "& #r1":
        {
            position: 'relative',
            right: '40px',
            top: '8px'
        },
        "& #r2":
        {
            position: 'relative',
            right: '20px',
            top: '8px'
        },
        "& #r3":
        {
            position: 'relative',
            right: '0px',
            top: '8px'
        }
    },
    type:
    {
        height: '50%',
        width: '100%',
        // border:'1px solid black',
        display: 'flex',
        marginLeft: '22px'

    },
    box6:
    {
        height: '10%',
        width: '99%',
        // border: '1px solid pink',
        "& #btn":
        {
            height: '28px',
            width: '110px',
            position: 'relative',
            left: '80px',
            bottom:'0px',
            borderRadius: '0px'
        }
    }
},

["@media only screen and (min-width:480px) and (max-width:768px)"]: {
        
    main:
    {
        height: '70vh',
        width: '96vw',
        // border: '1px solid Black',
        position: 'relative',
        left: '8px'
    },
    box1:
    {
        height: '20%',
        width: '100%',
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'column'
    },
    title:
    {
        height: '50%',
        width: '90%',
        // border: '1px solid green',
        position: 'relative',
        left: '20px',
        top:'5px',
        "& #tit":
        {
            fontWeight: 'bolder',
            fontSize: '25px',
            display: 'flex',
        }
    },
    red_box:
    {
        height: '50%',
        width: '50%',
        // border: '1px solid red'
    },
    red:
    {
        height: '70%',
        width: '85%',
        border: '2px solid #A03037',
        position: 'relative',
        left: '20px',
        top: '5px',
        "& #address":
        {
            color: '#A03037',
            fontSize: '15px',
            position: 'relative',
            // top: '3px',
            bottom: '15px'
        }
    },
    box2:
    {
        height: '12%',
        width: '90%',
        // border:'1px solid red',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: "14px",
        marginLeft: "0px",
        paddingLeft: "20px",
        "& #outlined-basic2":
        {
            width: "160px",
            height: "30px"
        }
    },
    
    box3:
    {
        height: '24%',
        width: '95%',
        // border:'1px solid green',
        position: 'relative',
        top: '5px',
        left:'10px',

        "& #outlined-basic1":
        {
            width: "360px",
            height: "60px",

        }
    },
    box4:
    {
        height: '14%',
        width: '99%',
        // border: '1px solid brown',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        "& #outlined-basic2":
        {
            width: "150px",
            height: "35px",
        }
    },
    box5:
    {
        height: '12%',
        width: '99%',
        // border: '1px solid blue',
        color: 'gray',
        fontSize: '15px',
        "& #r1":
        {
            position: 'relative',
            right: '100px',
            top: '8px'
        },
        "& #r2":
        {
            position: 'relative',
            right: '50px',
            top: '8px'
        },
        "& #r3":
        {
            position: 'relative',
            right: '0px',
            top: '8px'
        }
    },
    type:
    {
        height: '50%',
        width: '100%',
        // border:'1px solid black',
        display: 'flex',
        marginLeft: '30px'

    },
    box6:
    {
        height: '15%',
        width: '99%',
        // border: '1px solid pink',
        "& #btn":
        {
            height: '45px',
            width: '150px',
            position: 'relative',
            left: '130px',
            top:'10px',
            borderRadius: '0px'
        }
    }
},
["@media only screen and (min-width:769px) and (max-width:1024px)"]: {
        
    main:
    {
        height: '50vh',
        width: '75vw',
        // border: '1px solid Black',
        position: 'relative',
        left: '8px'
    },
    box1:
    {
        height: '12%',
        width: '100%',
        // border: '1px solid red',
        display: 'flex',
        flexDirection: 'row'
    },
    title:
    {
        height: '70%',
        width: '50%',
        // border: '1px solid green',
        position: 'relative',
        left: '20px',
        top:'10px',
        "& #tit":
        {
            fontWeight: 'bolder',
            fontSize: '27px',
            display: 'flex',
        }
    },
    red_box:
    {
        height: '90%',
        width: '50%',
        // border: '1px solid red'
    },
    red:
    {
        height: '70%',
        width: '70%',
        border: '2px solid #A03037',
        position: 'relative',
        left: '50px',
        top: '10px',
        "& #address":
        {
            color: '#A03037',
            fontSize: '17px',
            position: 'relative',
            // top: '3px',
            bottom: '15px'
        }
    },
    box2:
    {
        height: '10%',
        width: '95%',
        border:'1px solid red',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingTop: "20px",
        marginLeft: "0px",
        paddingLeft: "20px",
        "& #outlined-basic2":
        {
            width: "220px",
            height: "30px"
        }
    },
    
    box3:
    {
        height: '25%',
        width: '95%',
        border:'1px solid green',
        position: 'relative',
        top: '15px',
        left:'20px',

        "& #outlined-basic1":
        {
            width: "480px",
            height: "80px",

        }
    },
    box4:
    {
        height: '14%',
        width: '99%',
        border: '1px solid brown',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        position:'relative',
        top:'20px',
        left:'10px',
        "& #outlined-basic2":
        {
            width: "210px",
            height: "35px",
        }
    },
    box5:
    {
        height: '12%',
        width: '99%',
        // border: '1px solid blue',
        position:'relative',
        top:'20px',
        color: 'gray',
        fontSize: '15px',
        "& #r1":
        {
            position: 'relative',
            right: '150px',
            top: '8px'
        },
        "& #r2":
        {
            position: 'relative',
            right: '80px',
            top: '8px'
        },
        "& #r3":
        {
            position: 'relative',
            right: '0px',
            top: '8px'
        }
    },
    type:
    {
        height: '50%',
        width: '100%',
        // border:'1px solid black',
        display: 'flex',
        marginLeft: '50px'

    },
    box6:
    {
        height: '15%',
        width: '99%',
        // border: '1px solid pink',
        position: 'relative',
        top:'10px',
        "& #btn":
        {
            height: '45px',
            width: '150px',
            position: 'relative',
            left: '180px',
            top:'30px',
            borderRadius: '0px'
        }
    }
}


})

function Customer_Details(props) {

    const classes = useStyle();
    

    const [userValue, setUserValue] = React.useState({ fullAddress: "", city: "", state: "", addressType: "" })

    const [regobj, setRegObj] = React.useState({
        addressBorder: false, addressHelper: "", cityBorder: false, cityHelper: "",
        stateBorder: false, stateHelper: ""
    })

    const [continuebtn, setContinueBtn] = useState(false)

    const takeaddtype = (event) => {
        setUserValue(prevState => ({
            ...prevState,
            addressType: event.target.value
        }))
        console.log(event.target.value)
    }

    const takeaddress = (event) => {
        setUserValue(prevState => ({
            ...prevState,
            fullAddress: event.target.value
        }))
        console.log(event.target.value)
    }

    const takecity = (event) => {
        setUserValue(prevState => ({
            ...prevState,
            city: event.target.value
        }))
        console.log(event.target.value)
    }

    const takestate = (event) => {
        setUserValue(prevState => ({
            ...prevState,
            state: event.target.value
        }))
        console.log(event.target.value)
    }

    const Order_summary = () => {

        let addressTest = addressRegex.test(userValue.fullAddress)
        let cityTest = cityRegex.test(userValue.city)
        let stateTest = stateRegex.test(userValue.state)

        if (addressTest === false) {
            setRegObj(prevState => ({
                ...prevState,
                addressBorder: true,
                addressHelper: "Enter the Address"
            }))
        }
        else if (addressTest === true) {
            setRegObj(prevState => ({
                ...prevState,
                addressBorder: false,
                addressHelper: ""
            }))
        }

        if (cityTest === false) {
            setRegObj(prevState => ({
                ...prevState,
                cityBorder: true,
                cityHelper: "Enter the City"
            }))
        }
        else if (cityTest === true) {
            setRegObj(prevState => ({
                ...prevState,
                cityBorder: false,
                cityHelper: ""
            }))
        }

        if (stateTest === false) {
            setRegObj(prevState => ({
                ...prevState,
                stateBorder: true,
                stateHelper: "Enter the Address"
            }))
        }
        else if (stateTest === true) {
            setRegObj(prevState => ({
                ...prevState,
                stateBorder: false,
                stateHelper: ""
            }))
        }


        if (addressTest === true && cityTest === true && stateTest === true) {
            Cust_Details(userValue).then((response) => {
                console.log(response.data.result);

            }).catch((error) => { console.log(error) })

            console.log("Register Successful", userValue)
        }


        props.openOrderSummary()
        setContinueBtn(true)


    }
    return (
        <Box>
            <Paper className={classes.main}>
                <Box className={classes.box1}>
                    <Box className={classes.title}>
                        <span id='tit'>Customer Details</span>
                    </Box>
                    <Box className={classes.red_box}>
                        {
                            continuebtn ? null :
                                <Box className={classes.red}>
                                    <span id='address' >Add New Address</span>
                                </Box>
                        }
                    </Box>
                </Box>
                <Box className={classes.box2}>
                    {/* <Box className={classes.name}> */}
                    <TextField id="outlined-basic2" label="Full name" size="small" variant="outlined" required/>

                    {/* </Box> */}
                    {/* <Box className={classes.mobile}> */}
                    <TextField id="outlined-basic2" label="Mobile Number" size="small" variant="outlined" required/>

                    {/* </Box> */}

                </Box>
                <Box className={classes.box3}>
                    <TextField id="outlined-basic1" label="Address" variant="outlined" onChange={takeaddress}
                        error={regobj.addressBorder} helperText={regobj.addressHelper} />


                </Box>
                <Box className={classes.box4}>
                    <TextField id="outlined-basic2" label="City/Town" size="small" variant="outlined" onChange={takecity}
                        error={regobj.cityBorder} helperText={regobj.cityHelper} />
                    <TextField id="outlined-basic2" label="State" size="small" variant="outlined" onChange={takestate}
                        error={regobj.stateBorder} helperText={regobj.stateHelper} />

                </Box>
                <Box className={classes.box5} >
                    <Box className={classes.type} >
                        <span >Type</span>
                    </Box>
                    {/* <input id='radio' type="radio" name="fav_language" value="Work" label='Work'/> */}
                    <Box onChange={takeaddtype}>
                        <span id='r1'>
                            <input type="radio" id="html" name="fav_language" value="Home" />
                            <label for="html">Home</label></span>
                        <span id='r2'><input type="radio" id="html" name="fav_language" value="Work" />
                            <label for="html">Work</label></span>
                        <span id='r3'><input type="radio" id="html" name="fav_language" value="Other" />
                            <label for="html">Other</label></span>
                    </Box>
                </Box>
                <Box className={classes.box6}>
                    {
                        continuebtn ? null : <Button id='btn' variant='contained' onClick={Order_summary}>Continue</Button>
                    }
                    {/* <Button id='btn' variant='contained' onClick={Order_summary}>Continue</Button> */}
                </Box>

            </Paper>
        </Box>
    )
}

export default Customer_Details
