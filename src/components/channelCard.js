import React from 'react';
import {Box, Typography, CardMedia, CardContent } from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {demoProfilePicture} from "../utils/constant";
import {Link} from "react-router-dom"
const ChannelCard = ({channelDetails}) => {
    return (
        <Box sx={{
            boxShadow:'none',
            borderRadius:'20px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:{xs:'356px', md:'320px'},
            height:'326px',
            margin:'auto'
        }}>
            <Link to={`/channel/${channelDetails?.id?.channelId}`}>
                <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff'}}>
                        <CardMedia
                            image={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture }
                            alt={channelDetails?.snippet?.title}
                            sx={{borderRadius:'50%', height:'180px', width:'180px',mb:2, border:'1px solid #e3e3e3'}}
                        />
                    <Typography variant={"h6"}>
                        {channelDetails?.snippet?.title}
                        <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}}/>
                    </Typography>
                </CardContent>
            </Link>
        </Box>
    );
};

export default ChannelCard;