import React from 'react';
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Box} from '@mui/material';
import {Videos,ChannelCard} from "./";
import {fetchFromApi} from "../utils/FetchFromApi";

const ChannalDetails = () => {
    const [channelDetail, setchannelDetail] = useState(null);
    const [video, setVideo] = useState([]);
    const {id} = useParams();
    console.log(channelDetail)
    useEffect(()=>{
        fetchFromApi(`channels?part="snippet&id=${id}`)
            .then((data)=>setchannelDetail(data?.items[0]));
        fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideo(data?.items));
    },[id])
    return (
        <Box minHeight={'95vh'}>
            <Box>
                <div style={{
                    background: "linear-gradient(90deg, rgba(247,0,203,1) 14%, rgba(164,0,247,1) 60%)",
                    zIndex:10,
                    height:'300px',
                }}
                />

                <ChannelCard channelDetails={channelDetail}/>
            </Box>
            <Box display={"flex"} p={"2"}>
                <Box sx={{mr:{sm:'100px'}}}/>
                <Videos videos={video}/>
            </Box>
        </Box>
    );
};

export default ChannalDetails;