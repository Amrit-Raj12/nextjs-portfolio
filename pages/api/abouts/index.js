import dbConnect from "../../../utils/dbConnect";
import About from "../../../models/About";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const abouts = await About.find({});

        res.status(200).json({ success: true, data: abouts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const about = await About.create(req.body);

        res.status(201).json({ success: true, data: about });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
