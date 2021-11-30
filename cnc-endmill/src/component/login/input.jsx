const Input = ({ name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        value={value}
        onChange={(e) => onChange(e)}
        name={name}
        id={name}
        type="text"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
export default Input;
