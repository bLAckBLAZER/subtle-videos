import "./SearchCard.css";

export const SearchCard = ({ title, onClickHandler }) => {
  return (
    <div className="search-card" onClick={onClickHandler}>
      {title}
    </div>
  );
};
