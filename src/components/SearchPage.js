import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>

      <hr />

      <ChannelRow
        image="https://images-platform.99static.com//dSQhzTpWXDcpuu9Y2xEpXV84QMg=/129x129:992x992/fit-in/500x500/99designs-contests-attachments/118/118295/attachment_118295052"
        channel="Brakets"
        verified
        subs="5k"
        noOfVideos="100"
        description="Welcome to the hidden part of coding etc...you gonna enjoye the life of codders with us 🔥"
      />
      <hr />

      <VideoRow
        views="657K"
        subs="20K"
        description="Video to watch is awesome this is not simple click play"
        timestamp=""
        channel="Amane Mahmoud"
        title="🇲🇦 Lets start coding witrh this moroccan guy"
        image="https://i.pinimg.com/originals/c6/bc/01/c6bc016b60029782d51de0f43b6969f1.png"
      />
      <VideoRow
        views="657K"
        subs="20K"
        description="Video to watch is awesome this is not simple click play"
        timestamp=""
        channel="Amane Mahmoud"
        title="🇲🇦 Lets start coding witrh this moroccan guy"
        image="https://i.pinimg.com/originals/c6/bc/01/c6bc016b60029782d51de0f43b6969f1.png"
      />
      <VideoRow
        views="657K"
        subs="20K"
        description="Video to watch is awesome this is not simple click play"
        timestamp=""
        channel="Amane Mahmoud"
        title="🇲🇦 Lets start coding witrh this moroccan guy"
        image="https://i.pinimg.com/originals/c6/bc/01/c6bc016b60029782d51de0f43b6969f1.png"
      />
    </div>
  );
}

export default SearchPage;
