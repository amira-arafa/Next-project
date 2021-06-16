const Input = ({ className, type,  name, id, onChange, text, error }) => {
  return (
    <>
      <input className={className} name={name} id={id} onChange={onChange} type={type}>
        {text}
      </input>
      <span>{error}</span>
    </>
  );
};

export default Input;
