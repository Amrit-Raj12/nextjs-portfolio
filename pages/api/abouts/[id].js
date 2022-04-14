import dbConnect from "../../../utils/dbConnect";
import About from "../../../models/About";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const about = await About.findById(id);

        if (!about) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: about });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const about = await About.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!about) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: about });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedAbout = await About.deleteOne({ _id: id });

        if (!deletedAbout) {
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
