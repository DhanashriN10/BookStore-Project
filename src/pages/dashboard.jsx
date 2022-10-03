import { Box } from '@mui/material'
import React, { useState } from 'react'
import Book from '../component/book'
import PrimarySearchAppBar from '../component/header'
import { makeStyles } from "@mui/styles";
import { useEffect } from 'react';
import { getbook } from '../component/Service/dataservice';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Description from '../component/description';
import PaginationRounded from './Pagination';

const useStyle = makeStyles({
    Book_box:
    {
        width: '74vw',
        height: 'auto',
        // border:'1px solid black',
        margin: '10px',
        marginLeft: '170px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    head:
    {
        position: 'relative',
        right: '500px',
        "& #item":
        {
            position: 'relative',
            left: '90px',
            bottom: '50px',
            color: 'gray'
        }
    },
    sort:
    {
        height: '30px',
        width: '200px',
        border: '1px solid #00000029',
        fontSize: '15px',
        position: 'relative',
        alignContent: 'center',
        left: '1000px',
        bottom: '75px'

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
        Book_box:
        {
            width: '80vw',
            height: '440vh',
            // border:'1px solid black',
            // margin: '10px',
            marginLeft: '10px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            // position:'relative',
            // bottom:'80px'
    
        },
        head:
        {
            position: 'relative',
            right: '40px',
            top:'20px',
            "& #item":
            {
                position: 'relative',
                left: '90px',
                bottom: '50px',
                color: 'gray'
            }
        },
        sort:
        {
            // height: '20px',
            // width: '115px',
            // border: '1px solid #00000029',
            // fontSize: '11px',
            // position: 'relative',
            // alignContent: 'center',
            // left: '200px',
            // bottom: '70px',
            // "& #sort":
            // {
            //     position:'relative',
            //     bottom:'10px'
            // }
            display:'none'
    
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
                right: '10px',
                top: '5px',
                fontSize: '10px'
            }
        },
    },
    ["@media only screen and (min-width:481px) and (max-width:768px)"]: {
        Book_box:
        {
            width: '92vw',
            height: '155vh',
            // border:'1px solid black',
            // margin: '10px',
            marginLeft: '15px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            // position:'relative',
            // bottom:'80px'
    
        },
        head:
        {
            position: 'relative',
            right: '160px',
            "& #item":
            {
                position: 'relative',
                left: '90px',
                bottom: '50px',
                color: 'gray'
            }
        },
        sort:
        {
            height: '30px',
            width: '135px',
            border: '1px solid #00000029',
            fontSize: '12px',
            position: 'relative',
            alignContent: 'center',
            left: '300px',
            bottom: '70px',
            "& #sort":
            {
                position:'relative',
                bottom:'10px'
            }
    
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
                right: '10px',
                top: '5px',
                fontSize: '10px'
            }
        },
    },
    ["@media only screen and (min-width:769px) and (max-width:1024px)"]: {
        Book_box:
        {
            width: '73vw',
            height: '95vh',
            // border:'1px solid black',
            // margin: '10px',
            marginLeft: '15px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            // position:'relative',
            // bottom:'80px'
    
        },
        head:
        {
            position: 'relative',
            right: '320px',
            "& #item":
            {
                position: 'relative',
                left: '90px',
                bottom: '50px',
                color: 'gray'
            }
        },
        sort:
        {
            height: '30px',
            width: '155px',
            border: '1px solid #00000029',
            fontSize: '13px',
            position: 'relative',
            alignContent: 'center',
            left: '400px',
            bottom: '70px',
            "& #sort":
            {
                position:'relative',
                bottom:'5px'
            }
    
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
                right: '160px',
                top: '5px',
                fontSize: '10px'
            }
        },
    }
})

function Dashboard() {
    const classes = useStyle();

    const [inputFields, setInputFields] = useState({})

    const [booksList, setBooksList] = useState([])

    const [display, setDisplay] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)

    const [postsperPage, setPostsPerPage] = useState(8);

    const [searchTerm, setSearchTerm] = useState("")

    const [pageHide,setPageHide] = useState(false)

    // const searchHandler = () =>{};

    const openSummary = (bookObj) => {
        console.log(bookObj, "this is for book details")
        setInputFields(bookObj)

        setDisplay(true);
        console.log(inputFields.bookName, ('This is book data'))
        setPageHide(true)
    };

    const searchHandler = (event) => {
        setSearchTerm(event.target.value)
      }
      console.log(setSearchTerm, '....value searched');

    useEffect(() => {
        getbook().then((response) => {
            console.log(response)
            setBooksList(response.data.result)
            // setPostsPerPage(response.data.result)
        }).catch((error => console.log(error)))
    }, [])
    console.log(inputFields._id, "Id:=")

    const lastPostIndex = currentPage * postsperPage;
    const firstPostIndex = lastPostIndex - postsperPage;
    const currentPosts = booksList.filter(book => book.bookName.includes(searchTerm)).slice(firstPostIndex, lastPostIndex)
    console.log(currentPosts,"****books****")

    return (
        <Box>
            <PrimarySearchAppBar searchHandler={searchHandler} searchTerm={searchTerm}/>
            <Box className={classes.head}>
                <h1>Books</h1>
                <span id='item'>(128 items)</span>
            </Box>
            <Box className={classes.sort}>
                <span id='sort'>Sort by relevance    </span>
                {/* <img src='../../Assets/drop.png' height='15px'></img> */}
                <ArrowDropDownIcon />
            </Box>
            <Box className={classes.Book_box}>
                {display ?

                    <Description bookName={inputFields.bookName} author={inputFields.author} rate={inputFields.rate} discountPrice={inputFields.discountPrice} price={inputFields.price} id={inputFields._id}
                    //  term ={searchTerm} searchKeyword={searchHandler}
                     />
                    :
                    currentPosts
                      .map((book) => (<Box onClick={() => openSummary(book)} ><Book book={book}  />
                    </Box>)
                    )
                }
                {/* <Book/><Book/><Book/><Book/><Book/><Book/><Book/><Book/><Book/> */}
            </Box>
            {
                pageHide ? null :
            <Box>
                <PaginationRounded totalPosts={booksList.length}
                postsPerPage={postsperPage}
                setCurrentPage={setCurrentPage}/>
            </Box>
            }
            <Box className={classes.blank}>

            </Box>
            <Box className={classes.footer}>
                <span id='footext'>Copyright @2020, Bookstore Private Limited. All Rights Reserved</span>
            </Box>
        </Box>

    )
}

export default Dashboard
