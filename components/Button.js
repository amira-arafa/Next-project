const Button = ({ className, color, name, id, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      name={name}
      id={id}
      className={`${color ? color : "primary"} ${className}`}
    >
      {text}
      <style jsx>
        {`
          button {
            background-color: #000;
            padding: 9px 30px;
            border-radius: 12px;
            color: #fff;
            box-shadow: none;
          }
        `}
      </style>
    </button>
  );
};

export default Button;
