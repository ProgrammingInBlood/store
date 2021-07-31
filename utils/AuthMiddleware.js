import { verify } from "jsonwebtoken";

export const authinticated = (fn) => async (req, res) => {
  verify(
    req.headers.authorization,
    process.env.JWT_SECRET,
    async function (err, decoded) {
      if (!err && decoded) {
        return await fn(req, res);
      }
      res.status(401).json({ message: "user not authenticated" });
    }
  );
};
