const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  try {
    const { userName, email, password, passwordConfirmation } = req.body;

    if (!userName || userName.length < 5) {
      return res.status(400).json({ error: "Имя минимум 5 символов" });
    }
    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Некорректный email" });
    }
    if (!password || password.length < 6) {
      return res.status(400).json({ error: "Пароль минимум 6 символов" });
    }
    if (password !== passwordConfirmation) {
      return res.status(400).json({ error: "Пароли не совпадают" });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { userName }] });
    if (existingUser) {
      return res.status(400).json({
        error: "Пользователь с таким именем или email уже существует",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({ userName, email, password: passwordHash });
    await user.save();

    res.json({ message: "Пользователь зарегистрирован" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
};
