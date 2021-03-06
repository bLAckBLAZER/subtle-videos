import "./Box.css";

export const Box = ({ children, className }) => {
  return <div className={`box ${className}`}>{children}</div>;
};
