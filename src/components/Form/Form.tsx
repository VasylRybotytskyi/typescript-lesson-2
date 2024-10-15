import { ChangeEvent, FC, FormEvent, useState } from "react";

interface FormProps {
  addTodo: (el: string) => void;
}

const Form: FC<FormProps> = ({ addTodo }) => {
  const [input, setInput] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleChange} />
      <button type="submit">Додати</button>
    </form>
  );
};

export default Form;
