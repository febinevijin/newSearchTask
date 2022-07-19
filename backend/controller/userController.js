import User from "../model/userModel.js";
import generateToken from "../util/generateToken.js";

export const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({
      email,
      password,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,

        email: user.email,
        token: generateToken(user._id),
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id);
      const options = {
        expires: new Date(
          Date.now() + 2 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: true,
      };
      res
        .cookie("searchToken", token, options)
        .json({
          _id: user._id,

          email: user.email,
          token,
        });
    } else {
      res.json({
        msg: "No Such user",
        status: false,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
