import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import main_bg from "../../assets/image/5_bg.jpg";
import styles from "../Authorization/Register.module.scss";

interface ErrorsType {
  userName?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
}

export const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    server: "",
  });

  useEffect(() => {
    const data = async () => {
      try {
        const usersData = await axios.get("http://localhost:5000/api/users");
        console.log(usersData);
      } catch (error) {
        console.log(error);
      }
    };

    data();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [id]: "",
      server: "",
    }));
  };

  const validate = () => {
    const newErrors: ErrorsType = {};

    if (
      !formData.userName.trim() ||
      formData.userName.length < 5 ||
      /[^a-zA-Z0-9_]/.test(formData.userName)
    ) {
      newErrors.userName = "Имя минимум 5 символов и без спецсимволов";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Неправильный email";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Пароль минимум 6 символов";
    }
    if (formData.password !== formData.passwordConfirmation) {
      newErrors.passwordConfirmation = "Пароли не совпадают";
    }

    setErrors((prev) => ({
      ...prev,
      ...newErrors,
      server: "",
    }));

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const { data } = await axios.post("/api/register", formData);
      console.log("Данные отправлены", data);

      setFormData({
        userName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      });
      setErrors({
        userName: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        server: "",
      });
      alert("Регистрация успешна!");
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        server:
          error.response?.data?.error || "Ошибка сервера. Попробуйте позже.",
      }));
    }
  };

  return (
    <>
      <div
        style={{
          background: `url(${main_bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.form__label} htmlFor="userName">
            Username
          </label>
          <input
            className={styles.form__input}
            type="text"
            id="userName"
            placeholder="Username"
            value={formData.userName}
            onChange={handleChange}
            required
          />
          {errors.userName && (
            <div style={{ color: "red" }}>{errors.userName}</div>
          )}

          <label className={styles.form__label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.form__input}
            type="text"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}

          <label htmlFor="password" className={styles.form__label}>
            Password
          </label>
          <input
            className={styles.form__input}
            type="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <div style={{ color: "red" }}>{errors.password}</div>
          )}

          <label className={styles.form__label} htmlFor="passwordConfirmation">
            Password confirmation
          </label>
          <input
            className={styles.form__input}
            type="password"
            id="passwordConfirmation"
            placeholder="Password confirmation"
            value={formData.passwordConfirmation}
            onChange={handleChange}
            required
          />
          {errors.passwordConfirmation && (
            <div style={{ color: "red" }}>{errors.passwordConfirmation}</div>
          )}

          {errors.server && (
            <div style={{ color: "pink" }}>{errors.server}</div>
          )}

          <div
            className="g-recaptcha"
            data-sitekey="6LefBqgrAAAAAIA-Woxfo_qHiO9rUQhLTzPRkGoK"
          ></div>
          <button type="submit" className={styles.form__button}>
            Register
          </button>
          <Link to={"/login"} className={styles.form__button}>
            Login
          </Link>
        </form>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </div>
    </>
  );
};
