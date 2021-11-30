const Input = ({ name, label, value, onChange }) => {
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
    </div>
  );
};
export default Input;
