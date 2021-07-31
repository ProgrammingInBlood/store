import CreateAccount from "../../schema/CreateAccount";
import dbConnect from "../../utils/DBconnect";
import { hash } from "bcrypt";
import timestamp from "time-stamp";

dbConnect();
export default async function handler(req, res) {
  if (req.method === "POST") {
    const checkEmail = await CreateAccount.findOne({ email: req.body.email });

    if (!checkEmail) {
      hash(req.body.password, 10, async function (err, hash) {
        const result = [
          {
            username: req.body.username,
            email: req.body.email,
            password: hash,
            timestamp: timestamp("YYYY/MM/DDTHH:mm:ss"),
          },
        ];
        const createUser = await CreateAccount.create(result);
        res.status(200).json({ success: true, data: createUser });
      });
    } else {
      res.status(400).json({ success: false, message: "email already exists" });
    }
  } else {
    res.status(404).json({ success: false, message: "POST method missing" });
  }
}
