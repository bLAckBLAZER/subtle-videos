import { Input } from "../Input/Input";
import { MdSearch, MdCancel } from "react-icons/md";
import { useState } from "react";
import { useData } from "../../contexts";
import { SearchCard } from "./SearchCard";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const {
    dataState: { allVideos },
  } = useData();

  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);

    const temp = allVideos.filter((video) =>
      video.title.toLowerCase().includes(inputText.toLowerCase())
    );

    setSearchResults(temp);
  };

  return (
    <div className="pos-rel" id="search-bar">
      <Input
        placeholder="What do you want to watch today?"
        leftIcon={<MdSearch size={20} />}
        value={searchText}
        onInputChange={inputChangeHandler}
        rightIcon={<MdCancel size={20} />}
        onRightIconClick={() => setSearchText("")}
      />
      {searchText.length > 0 && (
        <ul className="search-results">
          {searchResults.map((video) => (
            <SearchCard
              image={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`}
              title={video.title}
              onClickHandler={() => {
                navigate(`/watch/${video._id}`);
                setSearchText("");
              }}
              key={video.title}
            />
          ))}
          {searchResults.length === 0 && (
            <SearchCard title="Oops! We ran out of videos. No results found!" />
          )}
        </ul>
      )}
    </div>
  );
};
