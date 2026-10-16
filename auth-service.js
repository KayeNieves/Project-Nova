export function validateCredentials(username, password) {
  return (
    typeof username === "string" &&
    username.trim().length > 0 &&
    typeof password === "string" &&
    password.length > 0
  );
}
