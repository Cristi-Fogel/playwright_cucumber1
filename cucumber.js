module.exports = {
    default: {
      require: ["./features/step_definitions/*.js"],
      format: ["progress", "json:reports/cucumber_report.json"],
      paths: ["features/"],
      // compiler: ['ts:ts-node/register']  // Add ts-node compiler
    //   publishQuiet: true
    }
  };
  