export const SAMPLE_ERROR_TEXT = "MongoServerError: Authentication failed";

export const SAMPLE_RESULT = {
  severity: "HIGH",
  cause:
    "MongoDB rejected the connection because the credentials in your connection string don't match a user on this cluster — usually a stale password, a typo in the URI, or a user that isn't scoped to the target database.",
  steps: [
    "Open your connection string and confirm the username and password are current.",
    "In Atlas (or your Mongo host), check the user exists and has access to this specific database.",
    "If the password contains special characters, make sure they're percent-encoded in the URI.",
    "Confirm your IP is on the cluster's network access list.",
  ],
  action:
    "Rotate the database user's password, update it in your environment variables, and redeploy before retrying.",
};
