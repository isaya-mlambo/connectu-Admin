const env = process.env.NODE_ENV || "production";

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
  development: {
    APIKey: "",
    APISecret: "",
  },
  production: {
    APIKey: "HPvyx0hOQ-e4e_sScVN6iA",
    APISecret: "AK5c5LwWTEEprCh0E3ot7YhRrKRbfX40d40W",
  },
};

module.exports = config[env];
