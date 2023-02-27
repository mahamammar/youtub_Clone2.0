import React from 'react';
import {useState, useEffect} from "react";
import {fetchFromApi} from "../utils/FetchFromApi";
import {Box, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import {Videos} from "./";
const SearchFeed = () => {
    const [video, setVideo] = useState([]);
    const {searchTerm} = useParams();
    useEffect(()=>{
        fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data)=>{
            setVideo(data.items);
        })
    },[searchTerm]);
    return (
            <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
                <Typography variant={"h4"} fontWeight={"bold"} mb={2} sx={{color:'white'}}>
                    search Result for:  <span style={{color:'#F31505'}}>{searchTerm}</span> videos
                </Typography>
                <Videos videos={video}/>
            </Box>
    );

};
export default SearchFeed;