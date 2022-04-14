import dbConnect from "../../../utils/dbConnect";
import Heading from "../../../models/Heading";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const headings = await Heading.find({});

        res.status(200).json({ success: true, data: headings });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const heading = await Heading.create(req.body);

        res.status(201).json({ success: true, data: heading });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
