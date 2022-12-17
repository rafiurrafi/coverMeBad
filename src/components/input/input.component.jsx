import { InputContainer, InputGroup, Userlabel } from "./input.style";

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

export default Input;
