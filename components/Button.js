const Button = ({ className, color, name, id, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      name={name}
      id={id}
      className={`${color ? color : "primary"} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
