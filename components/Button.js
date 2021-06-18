const Button = ({ className, color, name, id, onClick, text , disabled}) => {
  return (
    <button
      onClick={onClick}
      name={name}
      id={id}
      className={`${color ? color : "primary"}${disabled&&"btn btn-secondary"} ${className}`}
      disabled={disabled}
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
