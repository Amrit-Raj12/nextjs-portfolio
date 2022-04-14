import dbConnect from "../../../utils/dbConnect";
import Heading from "../../../models/Heading";

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const heading = await Heading.findById(id);

        if (!heading) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: heading });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const heading = await Heading.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!heading) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: heading });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedHeading = await Heading.deleteOne({ _id: id });

        if (!deletedHeading) {
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
