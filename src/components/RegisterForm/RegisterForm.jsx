import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, Input, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Adam Smith"
          onChange={handleChange}
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="example@mail.com"
          onChange={handleChange}
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="***********"
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
