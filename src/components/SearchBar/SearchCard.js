import "./SearchCard.css";

export const SearchCard = ({ image, title, onClickHandler }) => {
  return (
    <div
      className="flex align-ctr gap-half search-card"
      onClick={onClickHandler}
    >
      {image && <img src={image} alt="" />}
      <div>{title}</div>
    </div>
  );
};
