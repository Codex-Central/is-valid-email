/**
 * Check if an email address is valid
 * @param email The email address to validate
 * @returns True if the email address is valid, false otherwise
 *
 * Read more about email validation at:
 * @see {@link https://github.com/Codex-Central/is-valid-email/issues}
 */
function isValidEmail(email: string): boolean {
  // Adjust the regular expression to include the '+' symbol in the local part and ensure it does not start with '_'
  const emailRegex = /^[^\W_][\w\.\-+]*@([\w\-]+\.)+[\w\-]{2,4}$/;

  if (!emailRegex.test(email)) {
    return false;
  }

  const parts = email.split("@");
  const localPart = parts[0];
  const domainPart = parts[1];

  // Verify that there are no consecutive dots in the local part or domain
  if (localPart.includes("..") || domainPart.includes("..")) {
    return false;
  }

  // Verify that there is no dot just before the '@'
  if (localPart.endsWith(".")) {
    return false;
  }

  // Verify that the local part does not start with '_'
  if (localPart.startsWith("_")) {
    return false;
  }

  // Verify that the domain does not start with an invalid character like '_'
  if (/^[^a-zA-Z0-9]/.test(domainPart)) {
    return false;
  }

  // Verify that the local part does not contain inappropriate special characters
  const validLocalPartRegex = /^[^\W_][\w\.\-+]*$/; // Updated to ensure it does not start with '_'
  if (!validLocalPartRegex.test(localPart)) {
    return false;
  }

  // Verify that the domain complies with the appropriate structure
  const validDomainRegex = /^([\w\-]+\.)+[\w\-]{2,4}$/;
  if (!validDomainRegex.test(domainPart)) {
    return false;
  }

  return true;
}

export default isValidEmail;
