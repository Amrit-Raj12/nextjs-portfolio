import dbConnect from "../../../utils/dbConnect";
import Register from "../../../models/Register";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const register = await Register.findById(id);

        if (!register) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: register });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const register = await Register.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!register) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: register });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedRegister = await Register.deleteOne({ _id: id });

        if (!deletedRegister) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
