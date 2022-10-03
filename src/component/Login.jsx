import React from 'react'
import { makeStyles } from "@mui/styles";
import { Box, Paper } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { login } from './Service/userservice';
import { useNavigate } from 'react-router-dom';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

const useStyle = makeStyles({
    main:
    {
        height: "100%",
        width: "100%",
        // border: "1px solid red",
    },
    login:
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
        height: "70px",
        width: "340px",
        // border:"1px solid red"
    },
    block3:
    {
        height: "88px",
        width: "340px",
        // border:"1px solid pink",

    },
    forpass:
    {
        position:"relative",
        left:"50px"
    },

    block4:
    {
        height: "45px",
        width: "340px",
        // border:"1px solid green",
        "& #btn":
        {
            width: "220px",
            height: "45px",
            background: "#A03037"

        }

    },
    block5:
    {
        height: "30px",
        width: "340px",
        // border:"1px solid blue",
        paddingTop: "10px"
    },
    block6:
    {
        height: "60px",
        width: "340px",
        // border:"1px solid yellow",
        display: "flex",
        flexDirection: "row",
    },
    facebook:
    {
        height: "70px",
        width: "170px",
        // border:"1px solid blue",
        "& #btn1":
        {
            height: "45px",
            background: "#4266B2",
            // width:"90px"
            left: "30px"
        }
    },
    google:
    {
        height: "70px",
        width: "170px",
        // border:"1px solid black",
        "& #btn2":
        {
            height: "45px",
            background: "#F5F5F5",
            color: "black",
            right: "25px"

        }

    },

    log:
    {
        height: "70px",
        width: "170px",
        // border: "1px solid blue",
        "& #btn":
        {
            fontSize: "20px",
            fontWeight: "bolder",
            top: "10px"
        }

    },

    ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
        main:
        {
            height: "0%",
            width: "0%",
            // border: "1px solid red",
        },
        login:
        {
            height: "275px",
            width: "238px",
            // border: "1px solid green",
            position: "absolute",
            // left: "560px",
            // top: "150px",
            // bottom:'0px',
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
            width: "235px",
            // border:"1px solid red",
            "& #outlined-basic": {
                width: "170px",
                height:'20px'
            }
        },
        block3:
        {
            height: "65px",
            width: "235px",
            // border:"1px solid pink",
            "& #outlined-basic": {
                width: "170px",
                height:'20px'
            }
    
        },
        forpass:
        {
            position:"relative",
            left:"60px",
            fontSize:'10px'
        },
    
        block4:
        {
            height: "50px",
            width: "235px",
            // border:"1px solid green",
            "& #btn":
            {
                width: "200px",
                height: "40px",
                background: "#A03037",
                position:"relative",
                // bottom:'5px'
    
            }
    
        },
        block5:
        {
            height: "40px",
            width: "235px",
            // border:"1px solid blue",
            '& #or':
            {
                    position:'relative',
            bottom:'5px',
            // fontSize:'15px'
            }
            // paddingTop: "10px"
            
        },
        block6:
        {
            height: "50px",
            width: "235px",
            // border:"1px solid yellow",
            display: "flex",
            flexDirection: "row",
        },
        facebook:
        {
            height: "48px",
            width: "117px",
            // border:"1px solid blue",
            "& #btn1":
            {
                // height: "20px",
                background: "#4266B2",
                width:"100px",
                position:'relative',
                // right: "1000px",
                left:'1px',
                fontSize:'15px'
            }
        },
        google:
        {
            height: "48px",
            width: "117px",
            // border:"1px solid black",
            "& #btn2":
            {
                // height: "20px",
                width:'100px',
                background: "#F5F5F5",
                color: "black",
                // right: "25px"
                position:'relative',
                right: "1px",
                marginLeft:'5px',
                fontSize:'15px'
    
            }
    
        },
    },
    ["@media only screen and (min-width:481px) and (max-width:768px)"]: {
        main:
        {
            height: "0%",
            width: "0%",
            // border: "1px solid red",
        },
        login:
        {
            // height: "260px",
            width: "236px",
            height: "250px",
            // width: "190px",
            // border: "1px solid green",
            position: "absolute",
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
            // height: "60px",
            width: "235px",
            height: "55px",
            // width: "190px",
            // border:"1px solid red",
            "& #outlined-basic": {
                width: "180px",
                height:'18px'
            }
        },
        block3:
        {
            // height: "65px",
            width: "235px",
            height: "60px",
            // width: "190px",
            // border:"1px solid pink",
            "& #outlined-basic": {
                width: "180px",
                height:'18px'
            }
    
        },
        forpass:
        {
            position:"relative",
            left:"60px",
            fontSize:'10px'
        },
    
        block4:
        {
            // height: "50px",
            width: "235px",
            height: "50px",
            // width: "190px",
            // border:"1px solid green",
            "& #btn":
            {
                width: "210px",
                height: "40px",
                background: "#A03037",
                position:"relative",
                // bottom:'5px'
    
            }
    
        },
        block5:
        {
            // height: "25px",
            width: "235px",
            height: "25px",
            // width: "190px",
            // border:"1px solid blue",
            
            '& #or':
            {
            position:'relative',
            bottom:'20px',
            fontSize:'15px',
            position:'relative',
            bottom:'10px'
            },
            
            
        },
        block6:
        {
            // height: "50px",
            width: "235px",
            height: "45px",
            // width: "190px",
            // border:"1px solid yellow",
            display: "flex",
            flexDirection: "row",
        },
        facebook:
        {
            height: "45px",
            width: "114px",
            // border:"1px solid blue",
            "& #btn1":
            {
                height: "40px",
                background: "#4266B2",
                // width:"100px",
                width:"90px",
                position:'relative',
                // right: "1000px",
                left:'0px',
                
                fontSize:'15px'
            }
        },
        google:
        {
            height: "45px",
            width: "114px",
            // border:"1px solid black",
            "& #btn2":
            {
                height: "40px",
                // width:'100px',
                width:"90px",
                background: "#F5F5F5",
                color: "black",
                // right: "25px"
                position:'relative',
                right: "1px",
                marginLeft:'5px',
                fontSize:'15px'
    
            }
    
        },
    },
    ["@media only screen and (min-width:769px) and (max-width:1024px)"]: {

        main:
        {
            height: "0%",
            width: "0%",
            // border: "1px solid red",
        },
        login:
        {
            height: "325px",
            width: "275px",
            // border: "1px solid green",
            position: "absolute",
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
            width: "275px",
            // border:"1px solid red",
            // "& #outlined-basic": {
            //     width: "140px",
            //     height:'15px'
            // }
        },
        block3:
        {
            height: "65px",
            width: "275px",
            // border:"1px solid pink",
            // "& #outlined-basic": {
            //     width: "140px",
            //     height:'15px'
            // }
    
        },
        forpass:
        {
            position:"relative",
            left:"60px",
            fontSize:'10px'
        },
    
        block4:
        {
            // height: "50px",
            // width: "235px",
            height: "60px",
            width: "275px",
            // border:"1px solid green",
            "& #btn":
            {
                // width: "170px",
                // height: "40px",
                background: "#A03037",
                position:"relative",
                // bottom:'5px'
    
            }
    
        },
        block5:
        {
            height: "40px",
            width: "275px",
            // border:"1px solid blue",
            
            '& #or':
            {
            position:'relative',
            bottom:'20px',
            fontSize:'15px',
            position:'relative',
            bottom:'10px'
            },
            
            
        },
        block6:
        {
            // height: "50px",
            // width: "235px",
            height: "65px",
            width: "275px",
            // border:"1px solid yellow",
            display: "flex",
            flexDirection: "row",
        },
        facebook:
        {
            height: "65px",
            width: "137px",
            // border:"1px solid blue",
            "& #btn1":
            {
                height: "50px",
                background: "#4266B2",
                // width:"100px",
                // width:"90px",
                position:'relative',
                // right: "1000px",
                left:'0px',
                
                fontSize:'15px'
            }
        },
        google:
        {
            height: "65px",
            width: "137px",
            // border:"1px solid black",
            "& #btn2":
            {
                height: "50px",
                // width:'100px',
                // width:"90px",
                background: "#F5F5F5",
                color: "black",
                // right: "25px"
                position:'relative',
                right: "1px",
                marginLeft:'5px',
                fontSize:'15px'
    
            }
    
        },
    }

      
})

function Login() {
    const classes = useStyle();
    const navigate = useNavigate()


  const [userInput, setUserInput] = React.useState({ email: "", password: "" })
    const [regexobj, setRegExObj] = React.useState({ emailBorder: false, emailHelper: "", pwdBorder: false, pwdHelper: "" })

    const takeUserName = (event) => {
        // setUserInput({
        //     email:event.target.value
        // })
        setUserInput(prevState => ({
            ...prevState,
            email: event.target.value
        }))
        console.log(event.target.value)

    }

    const takepass = (event) => {
        setUserInput(prevState => ({
            ...prevState,
            password: event.target.value
        }))
        console.log(event.target.value)
    }


    const Login = () => {
        // console.log(userInput)
        let emailTest = emailRegex.test(userInput.email)
        let pwdTest = passwordRegex.test(userInput.password)

        if (emailTest === false) {
            setRegExObj(prevState => ({
                ...prevState,
                emailBorder: true,
                emailHelper: "Enter the correct email Id"
            }))
        }
        else if (emailTest === true) {
            setRegExObj(prevState => ({
                ...prevState,
                emailBorder: false,
                emailHelper: ""
            }))
        }

        if (pwdTest === false) {
            setRegExObj(prevState => ({
                ...prevState,
                pwdBorder: true,
                pwdHelper: "Enter the correct password"
            }))
        }
        else if (pwdTest === true) {
            setRegExObj(prevState => ({
                ...prevState,
                pwdBorder: false,
                pwdHelper: ""
            }))
        }

        if (emailTest === true && pwdTest === true) {
            login(userInput).then((response) => {
                console.log(response);
                localStorage.setItem("token",response.data.result.accessToken)
                navigate('/dashboard')

            }).catch((error) => { console.log(error) })

            console.log("Login Successful")
        }
    }

    return (
        <Box className={classes.main}>
            <Paper elevation={0} className={classes.login}>
                {/* <Box className={classes.block1}> */}
                    {/* <Box className={classes.log}>
                        <Button color="inherit" variant="text" id="btn">LOGIN </Button>

                    </Box> */}

                {/* </Box> */}
                <Box className={classes.block2}>
                    <TextField id="outlined-basic" label="Email Id" size="small" variant="outlined" onChange={takeUserName}
                        error={regexobj.emailBorder} helperText={regexobj.emailHelper}/>
                </Box>
                <Box className={classes.block3}>
                    <TextField id="outlined-basic" type="password" label="Password" size="small" variant="outlined" onChange={takepass}
                    error={regexobj.pwdBorder} helperText={regexobj.pwdHelper} />
                    <Box className={classes.forpass}>
                        Forget Password
                    </Box>
                </Box>
                <Box className={classes.block4}>
                    <Button id="btn" variant="contained" onClick={Login}>Login </Button>
                </Box>
                <Box className={classes.block5}>
                    <span id='or'>
                    ___________  OR  ____________
                    </span>
                </Box>
                <Box className={classes.block6}>
                    <Box className={classes.facebook}>
                        <Button variant="contained" id="btn1">Facebook </Button>
                    </Box>
                    <Box className={classes.google}>
                        <Button variant="contained" id="btn2">Google</Button>
                    </Box>


                </Box>


            </Paper>

        </Box>
    )
}

export default Login
