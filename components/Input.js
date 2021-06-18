const Input = ({
  className,
  type,
  name,
  id,
  onChange,
  text,
  error,
  placeholder,
  value
}) => {
  return (
    <>
      <input
        className={`${className}`}
        name={name}
        id={id}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
      {text}
      <span className="text-danger mb-2">{error}</span>
      <style jsx>{`
        input {
          border: 1px solid #000;
          border-radius: 10px;
          padding: 12px 15px;
          margin: 8px 0;
          width: 100%;
        }
        input:focus{
          outline: 0;
          box-shadow: 0 0 10px #000;
        
        }
      `}</style>
    </>
  );
};

export default Input;
