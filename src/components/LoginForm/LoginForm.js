import css from './LoginForm.module.css';

export const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    //   const form = e.currentTarget;
    //   dispatch(
    //     logIn({
    //       email: form.elements.email.value,
    //       password: form.elements.password.value,
    //     })
    //   );
    //   form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
