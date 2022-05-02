import "./Input.css";

export const Input = ({ id, placeholder }) => {
  return (
    <div className="input-wrapper" id={id}>
      <div className="input-container">
        <i className="fas fa-search"></i>
        <input type="text" className="input" placeholder={placeholder} />
      </div>
    </div>
  );
};
