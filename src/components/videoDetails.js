import React from 'react';
import {useState, useEffect} from "react";
import {Link,useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import {Typography,Box, Stack} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {fetchFromApi} from "../utils/FetchFromApi";

const VideoDetails = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const {id} = useParams();
    console.log(id);

    useEffect(()=>{
            fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data)=>setVideoDetail(data.items[0]));
    },[id])

    if(!videoDetail?.snippet) return "Loading..."
    return (
        <Box minHeight={"95vh"}>
            <Stack direction={{xs:'column',md:'row'}}>
                <Box flex={1}>
                    <Box sx={{width:'100%', position:'sticky', top:'86px'}}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}className={"react-player"} controls/>
                        <Typography color={"#fff"} variant={"h5"} fontWeight={"bold"} p={2}>
                            {videoDetail.snippet.title}
                        </Typography>
                        <Stack direction={"row"} justifyContent={"space-between"} sx={{color:'#fff'}} py={1} px={2} >
                                <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                                        <Typography variant={{sm:'subtitle1', md:'h6'}} color={"#fff"}>
                                            {videoDetail.snippet.channelTitle}
                                            <CheckCircle sx={{fontSize:'12px', color:'gray', ml:'5px'}}/>
                                        </Typography>
                                </Link>
                            <Stack direction={"row"} gap={"20px"}>
                                <Typography variant={"body1"} sx={{opacity:'0.7'}}>
                                    {parseInt(videoDetail.snippet.viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant={"body1"} sx={{opacity:'0.7'}}>
                                    {parseInt(videoDetail.snippet.likeCount).toLocaleString()} views
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default VideoDetails;