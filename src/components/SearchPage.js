import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";

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
    </div>
  );
}

export default SearchPage;
