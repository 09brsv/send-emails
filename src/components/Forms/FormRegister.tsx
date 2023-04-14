import { TUserRegister } from "@/@types/User";
import { ChangeEvent, FormEvent, useState } from "react";
import Api from "../Hooks/Axios";

export default function FormRegister({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fieldValues, setFieldValues] = useState<TUserRegister>({
    name: "",
    email: "",
    password: "",
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValues({ ...fieldValues, [e.target.name]: e.target.value });
  };

  const api = Api();
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(fieldValues);
    try {
      await api.post("/user", fieldValues);
    } catch (error) {
      console.log(error);
    }
  };

  const { name, email, password } = fieldValues;

  return (
    <form onSubmit={handleSubmit} method="post">
      <label htmlFor="name">Digite o seu nome</label>
      <input
        type="text"
        name="name"
        minLength={3}
        value={name}
        onChange={handleFormChange}
        required
      />
      <label htmlFor="email">Digite o seu email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleFormChange}
        required
      />
      <label htmlFor="password">Digite a sua senha</label>
      <input
        type="password"
        name="password"
        minLength={3}
        value={password}
        onChange={handleFormChange}
        required
      />
      {children}
    </form>
  );
}

// export default function <Form></Form>Re
