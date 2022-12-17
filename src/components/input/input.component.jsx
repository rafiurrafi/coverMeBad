import { InputContainer, InputGroup, Userlabel } from "./input.style";
import "./input.style.scss";
const Input = ({ label, name, value, onChange, type = "text" }) => {
  return (
    <InputGroup>
      <InputContainer
        required
        type={type}
        name={name}
        autoComplete="off"
        className="input"
        value={value}
        onChange={onChange}
      />
      <Userlabel>{label}</Userlabel>
    </InputGroup>
  );
};

export const RangeInput = (props) => {
  return <input className="range" {...props} />;
};
export default Input;
