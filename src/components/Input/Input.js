import "./Input.css";

export const Input = ({
  id,
  placeholder,
  leftIcon,
  rightIcon,
  onRightIconClick,
  onInputChange,
  value,
}) => {
  return (
    <div className="input-wrapper" id={id}>
      <div className="input-container">
        {leftIcon}
        <input
          type="text"
          className="input"
          placeholder={placeholder}
          value={value}
          onChange={onInputChange}
        />
        <i onClick={onRightIconClick}>{rightIcon}</i>
      </div>
    </div>
  );
};
