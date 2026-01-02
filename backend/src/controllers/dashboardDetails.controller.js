import DashboardDetails from "../models/DashboardDetails.js";

// POST – create/update dashboard details
export const saveDashboardDetails = async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      organizationName,
      organizationDetails,
      textData,
      tableData
    } = req.body;

    if (!organizationName || !organizationDetails) {
      return res.status(400).json({
        message: "Organization name and details are required"
      });
    }

    // one dashboard per user (upsert)
    const dashboard = await DashboardDetails.findOneAndUpdate(
      { userId },
      {
        organizationName,
        organizationDetails,
        textData,
        tableData
      },
      { new: true, upsert: true }
    );

    res.status(200).json({
      message: "Dashboard details saved successfully",
      data: dashboard
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET – fetch dashboard details
export const getDashboardDetails = async (req, res) => {
  try {
    const userId = req.user.id;

    const dashboard = await DashboardDetails.findOne({ userId });

    if (!dashboard) {
      return res.status(404).json({
        message: "Dashboard details not found"
      });
    }

    res.status(200).json(dashboard);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
