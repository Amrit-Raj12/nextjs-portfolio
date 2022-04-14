import dbConnect from "../../../utils/dbConnect";
import Register from "../../../models/Register";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const registers = await Register.find({});

        res.status(200).json({ success: true, data: registers });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const register = await Register.create(req.body);

        res.status(201).json({ success: true, data: register });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
