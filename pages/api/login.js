import CreateAccount from "../../schema/CreateAccount";
import dbConnect from "../../utils/DBconnect";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

dbConnect();
export default async function handler(req, res) {
  if (req.method === "POST") {
    const user = await CreateAccount.findOne({ email: req.body.email });
    console.log(user.password);
    console.log(req.body.password);
    compare(req.body.password, user.password, function (err, result) {
      if (!err && result) {
        const data = { id: user._id, username: user.username };
        const jwt = sign(data, process.env.JWT_SECRET, { expiresIn: "1h" });
        res
          .status(200)
          .json({ success: true, message: "authorized", authToken: jwt });
      } else {
        res.status(401).json({ success: false, message: "unauthorized" });
      }
    });
  } else {
    res.status(404).json({ success: false, message: "POST method missing" });
  }
}
