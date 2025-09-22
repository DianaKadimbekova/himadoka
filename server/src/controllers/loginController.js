const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const JWT_SECRET = "ваш_секрет_для_токена";

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email и пароль обязательны" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Пользователь не найден" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Неверный пароль" });
    }

    const token = jwt.sign(
      { userId: user._id, userName: user.userName },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Вы вошли в систему", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
};
