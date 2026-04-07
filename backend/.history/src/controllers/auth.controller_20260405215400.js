import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { role, username, name, email, password, organization } = req.body;

    if (!role || !username || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (role === "entrepreneur" && (!organization?.name || !organization?.email)) {
      return res.status(400).json({
        message: "Organization details required for entrepreneur"
      });
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return res.status(409).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      role,
      username,
      name,
      email,
      password: hashedPassword,
      organization: role === "normal" ? {} : organization
    });

    res.status(201).json({
      message: "User registered successfully",
      userId: user._id
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const login = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // 1️⃣ Basic validation
    if ((!email && !username) || !password) {
      return res.status(400).json({
        message: "Email or username and password required"
      });
    }

    // 2️⃣ Find user by email OR username
    const user = await User.findOne({
      $or: [
        email ? { email } : null,
        username ? { username } : null
      ].filter(Boolean)
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 3️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // 4️⃣ Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 5️⃣ Send response
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        role: user.role,
        email: user.email,
        username: user.username,
        name: user.name
      }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const logout = async (req, res) => {
  try {
    // JWT stateless hota hai, backend pe kuch delete nahi hota
    res.status(200).json({
      message: "Logout successful"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
