import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// const theme = createTheme({
//   status: {
//     danger: '#e53e3e',
//   },
//   palette: {
//     secondary: {
//       main: '#0971f1',
//       darker: '#053e85',
//     },
//     Pagination: {
//       main: '#64748B',
//       contrastText: '#fff',
//     },
//   },
// });


const useStyle = makeStyles({
    page:
    {
        position:'relative',
        // left:'450px',
        marginLeft:'550px'
    },
    ["@media only screen and (min-width:320px) and (max-width:480px)"]: {
    
      page:
    {
        position:'relative',
        // left:'450px',
        marginLeft:'50px'
    },
    },
    ["@media only screen and (min-width:481px) and (max-width:768px)"]: {
    
      page:
    {
        position:'relative',
        // left:'450px',
        top:'15px',
        marginLeft:'100px'
    },
    },

    ["@media only screen and (min-width:769px) and (max-width:1024px)"]: {
    
      page:
    {
        position:'relative',
        // left:'450px',
        top:'15px',
        marginLeft:'160px'
    },
    }
})

 function PaginationRounded({totalPosts, postsPerPage, setCurrentPage}) {

    // let pages =  []
    // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    //     pages.push(i)
        
    // }

    const classes = useStyle();

  return (
    
<Box>
  <Pagination className={classes.page} count={4} onChange={(e,value)=> setCurrentPage(value)} shape="rounded" color="primary" />
    {/* <Box sx={{display:'flex',marginLeft:'650px'}}>
        {
            pages.map((page, index)=>{
                return <Box
                sx={{width:'39px', height:'30px',display:'flex'}}
                key={index} onClick={()=> setCurrentPage(page)}>{page}


                </Box>
            })
        } */}

    </Box>
  )
}
export default PaginationRounded