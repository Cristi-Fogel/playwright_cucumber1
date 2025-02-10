module.exports = {
    default: {
      require: ["./features/step_definitions/*.js"],
      format: ["progress", "json:reports/cucumber_report.json"],
      paths: ["features/"]
    //   publishQuiet: true
    }
  };
  