import React from 'react'
import { makeStyles } from "@mui/styles";
import { Box } from '@mui/material';
import { Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { register } from './Service/userservice';


const fnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const mobRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;


const useStyle = makeStyles({
    main1:
    {
        height: "100%",
        width: "100%",
        // border: "1px solid red",
    },
    signup:
    {
        height: "310px",
        width: "340px",
        // border: "1px solid green",
        position: "absolute",
        // left: "560px",
        // top: "150px",
        borderRadius: "5px"
    },
    block1:
    {
        height: "70px",
        width: "340px",
        // border:"1px solid black"
    },
    block2:
    {
        height: "65px",
        width: "340px",
        // border:"1px solid blue"
    },
    block3:
    {
        height: "64px",
        width: "340px",
        // border:"1px solid yellow"
    },
    block4:
    {
        height: "65px",
        width: "340px",
        // border:"1px solid pink"
    },
    block5:
    {
        height: "62px",
        width: "340px",
        // border:"1px solid black"
    },
    block6:
    {
        height: "50px",
        width: "340px",
        // border:"1px solid green",
        "& #btn":
        {
            width: "220px",
            height: "40px",
            background: "#A03037"

        }
    },

    ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
        main1:
        {
            height: "100%",
            width: "100%",
            // border: "1px solid red",
        },
        signup:
        {
            height: "275px",
            width: "238px",
            // border: "1px solid green",
            position: "absolute",
            // left: "560px",
            // top: "150px",
            borderRadius: "5px"
        },
        block1:
        {
            height: "70px",
            width: "340px",
            // border:"1px solid black"
        },
        block2:
        {
            height: "55px",
            width: "238px",
            // border:"1px solid blue",
            "& #outlined-basic2": {
                width: "170px",
                height:'20px'
            }
        },
        block3:
        {
            height: "55px",
            width: "238px",
            // border:"1px solid yellow",
            "& #outlined-basic": {
                width: "170px",
                height:'20px'
            }
        },
        block4:
        {
            height: "55px",
            width: "238px",
            // border:"1px solid pink",
            "& #outlined-basic": {
                width: "170px",
                height:'20px'
            }
        },
        block5:
        {
            height: "55px",
            width: "238px",
            // border:"1px solid black",
            "& #outlined-basic": {
                width: "170px",
                height:'20px',
               
            }
        },
        block6:
        {
            height: "50px",
            width: "238px",
            // border:"1px solid green",
            "& #btn":
            {
                width: "200px",
                height: "40px",
                background: "#A03037",
                position:'relative',
                bottom:'2px',

    
            }
    }
},
["@media only screen and (min-width:481px) and (max-width:768px)"]: {

    main1:
    {
        height: "100%",
        width: "100%",
        // border: "1px solid red",
    },
    signup:
    {
        // height: "260px",
        // width: "236px",
        height: "250px",
        width: "190px",
        // border: "1px solid green",
        position: "absolute",
        // left: "560px",
        // top: "150px",
        borderRadius: "5px"
    },
    block1:
    {
        height: "70px",
        width: "340px",
        // border:"1px solid black"
    },
    block2:
    {
        // height: "55px",
        width: "234px",
        height: "55px",
        // width: "190px",
        // border:"1px solid blue",
        "& #outlined-basic2": {
            width: "170px",
            height:'18px'
        }
    },
    block3:
    {
        // height: "55px",
        width: "234px",
        height: "50px",
        // width: "190px",
        // border:"1px solid yellow",
        "& #outlined-basic": {
            width: "170px",
            height:'18px'
        }
    },
    block4:
    {
        // height: "50px",
        width: "234px",
        height: "50px",
        // width: "190px",
        // border:"1px solid pink",
        "& #outlined-basic": {
            width: "170px",
            height:'18px'
        }
    },
    block5:
    {
        // height: "50px",
        width: "234px",
        height: "45px",
        // width: "190px",
        // border:"1px solid black",
        "& #outlined-basic": {
            width: "170px",
            height:'18px',
           
        }
    },
    block6:
    {
        // height: "50px",
        width: "234px",
        height: "40px",
        // width: "190px",
        // border:"1px solid green",
        "& #btn":
        {
            // width: "220px",
            // height: "42px",
            width: "200px",
            height: "40px",
            background: "#A03037",
            position:'relative',
            bottom:'2px',

        }
}
},
["@media only screen and (min-width:769px) and (max-width:1024px)"]: {

    main1:
    {
        height: "100%",
        width: "100%",
        // border: "1px solid red",
    },
    signup:
    {
        height: "325px",
        width: "275px",
        // border: "1px solid green",
        position: "absolute",
        // left: "560px",
        // top: "150px",
        borderRadius: "5px"
    },
    block1:
    {
        height: "70px",
        width: "340px",
        // border:"1px solid black"
    },
    block2:
    {
        height: "64px",
        width: "275px",
        // border:"1px solid blue",
        // "& #outlined-basic2": {
        //     width: "140px",
        //     height:'18px'
        // }
    },
    block3:
    {
        height: "64px",
        width: "275px",
        // border:"1px solid yellow",
        // "& #outlined-basic": {
        //     width: "140px",
        //     height:'18px'
        // }
    },
    block4:
    {
        height: "64px",
        width: "275px",
        // border:"1px solid pink",
        // "& #outlined-basic": {
        //     width: "140px",
        //     height:'18px'
        // }
    },
    block5:
    {
        height: "60px",
        width: "275px",
        // border:"1px solid black",
        // "& #outlined-basic": {
        //     width: "140px",
        //     height:'18px',
           
        // }
    },
    block6:
    {
        height: "60px",
        width: "275px",
        // border:"1px solid green",
        "& #btn":
        {
            // width: "170px",
            height: "50px",
            fontSize:'20px',
            background: "#A03037",
            position:'relative',
            // bottom:'2px',


        }
}
}

    // sign:
    // {
    //     height: "70px",
    //     width: "170px",
    //     // border: "1px solid red",
    //     position: "relative",
    //     left: "170px",
    //     "& #btn":
    //     {
    //         fontSize: "20px",
    //         fontWeight: "bolder",
    //         top: "10px"
    //     }

    // }

})

function Signup() {
    const classes = useStyle();

    const [userValue, setUserValue] = React.useState({ fullName: "", email: "", password: "" ,phone: "" })
    const [regobj, setRegObj] = React.useState({
        fnameBorder: false, fnameHelper: "", usernBorder: false, usernHelper: "",
        pwdBorder: false, pwdHelper: "",mobBorder: false , mobHelper: ""
    })

    const takefname = (event) => {
        setUserValue(prevState => ({
            ...prevState,
            fullName: event.target.value
        }))
        console.log(event.target.value)
    }

    const takeusername = (event) => {
        setUserValue(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)
    }

    const takepass = (event) => {
        setUserValue(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }

    const takemob = (event) => {
        setUserValue(prevState => ({
            ...prevState,
            phone: event.target.value
        }))
        console.log(event.target.value)
    }

    const Sign = () => {
        // console.log(userInput)
        let fnameTest = fnameRegex.test(userValue.fullName)
        let usernameTest = emailRegex.test(userValue.email)
        let pwdTest = passwordRegex.test(userValue.password)
        let mobTest = mobRegex.test(userValue.phone)


        if (fnameTest === false) {
            setRegObj(prevState => ({
                ...prevState,
                fnameBorder: true,
                fnameHelper: "Enter the first name"
            }))
        }
        else if (fnameTest === true) {
            setRegObj(prevState => ({
                ...prevState,
                fnameBorder: false,
                fnameHelper: ""
            }))
        }

        if (usernameTest === false) {
            setRegObj(prevState => ({
                ...prevState,
                usernBorder: true,
                usernHelper: "Enter the Email Id"
            }))
        }
        else if (usernameTest === true) {
            setRegObj(prevState => ({
                ...prevState,
                usernBorder: false,
                usernHelper: ""
            }))
        }

        if (pwdTest === false) {
            setRegObj(prevState => ({
                ...prevState,
                pwdBorder: true,
                pwdHelper: "Enter the correct password"
            }))
        }
        else if (pwdTest === true) {
            setRegObj(prevState => ({
                ...prevState,
                pwdBorder: false,
                pwdHelper: ""
            }))
        }

        if (mobTest === false) {
            setRegObj(prevState => ({
                ...prevState,
                mobBorder: true,
                mobHelper: "Enter the mobile number"
            }))
        }
        else if (mobTest === true) {
            setRegObj(prevState => ({
                ...prevState,
                mobBorder: false,
                mobHelper: ""
            }))
        }

        if (fnameTest === true &&  usernameTest === true && pwdTest === true && mobTest === true) {
            register(userValue).then((response) => {
                console.log(response);

            }).catch((error) => { console.log(error) })

            console.log("Register Successful")
        }

    }

        return (
            <Box className={classes.main1}>
                <Paper elevation={0} className={classes.signup}>
                    {/* <Box className={classes.block1}>
                    <Box className={classes.sign}>
                        <Button color="inherit" variant="text" id="btn">SIGNUP</Button>

                    </Box>
                </Box> */}
                    <Box className={classes.block2}>
                        <TextField id="outlined-basic2" label="First name" size="small" variant="outlined" 
                        onChange={takefname} error={regobj.fnameBorder} helperText={regobj.fnameHelper} />

                    </Box>
                    
                    <Box className={classes.block3}>
                        <TextField id="outlined-basic" label="Email Id" size="small" variant="outlined"
                        onChange={takeusername} error={regobj.usernBorder} helperText={regobj.usernHelper} />

                    </Box>
                    <Box className={classes.block4}>
                        <TextField id="outlined-basic" type="password" label="Password" size="small" variant="outlined" 
                         onChange={takepass} error={regobj.pwdBorder} helperText={regobj.pwdHelper} />

                    </Box>
                    <Box className={classes.block5}>
                        <TextField id="outlined-basic" label="Mobile Number" size="small" variant="outlined" 
                        onChange={takemob} error={regobj.mobBorder} helperText={regobj.mobHelper}/>

                    </Box>
                    <Box className={classes.block6}>
                        <Button id="btn" variant="contained" onClick={Sign}>Signup </Button>
                    </Box>

                </Paper>

            </Box>
        )
    }


    export default Signup
