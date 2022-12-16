import "./input.style.scss";
const Input = ({ label, name, value, onChange, type = "text" }) => {
  return (
    <div className="input-group">
      <input
        required
        type={type}
        name={name}
        autoComplete="off"
        className="input"
        value={value}
        onChange={onChange}
      />
      <label className="user-label">{label}</label>
    </div>
  );
};

export default Input;
