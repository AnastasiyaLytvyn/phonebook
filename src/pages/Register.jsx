export const Register = () => {
  return (
    <form autoComplete="off">
      <label> Name
        <input type="text"/>
      </label>
      <label> Email
        <input type="email"/>
      </label>
      <label> Password
        <input type="password"/>
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
