const Input = ({ name, label, error, onChange, schema, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        {...rest}
        onChange={(e) => onChange(e, schema)}
        name={name}
        id={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
export default Input;
