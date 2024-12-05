export const checkValidData = (email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Invalid email address.";
  if (!isPasswordValid) return "Password must be at least 8 characters long, include uppercase, lowercase, and a digit.";

  return null;
};
