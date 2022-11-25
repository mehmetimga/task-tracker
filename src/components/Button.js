import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};
Button.defaltPrps = {
  color: "steelblue",
};
Button.ReactPropTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
