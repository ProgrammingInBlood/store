import CreateAccount from "../../schema/CreateAccount";
import dbConnect from "../../utils/DBconnect";

import { authinticated } from "../../utils/AuthMiddleware";
dbConnect();

export default authinticated(async function handler(req, res) {
  if (req.method === "GET") {
    const users = await CreateAccount.find({});
    res.status(200).json({ success: true, data: users });
  } else {
    res.status(404).json({ success: false, message: "GET method missing" });
  }
});
