import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar,SearchFeed,Feed, VideoDetails,ChannalDetails} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
          <Navbar/>
          <Routes>
              <Route path={"/"} exact element={<Feed/>}/>
              <Route path={"/video/:id"} exact element={<VideoDetails/>}/>
              <Route path={"/channel/:id"} exact element={<ChannalDetails/>}/>
              <Route path={"/search/:searchTerm"} exact element={<SearchFeed/>}/>
          </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
