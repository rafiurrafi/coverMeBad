import "./input.style.scss";
const Input = () => {
  return (
    <div className="input-group">
      <input
        required
        type="text"
        name="text"
        autoComplete="off"
        className="input"
      />
      <label className="user-label">First Name</label>
    </div>
  );
};

export default Input;
