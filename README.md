# secure-password
# Simple validation service that checks password security based on the following criteria:
  - Your password can not contain a blank space.
  - Your password must have at least 8 characters.
  - Your password must have at least an uppercase letter.
  - Your password must have at least a lowercase letter.
  - Your password must have at least a number character.
  - Your password must have at least a specialcase character.
# The possible validation status returned are:
  - 204 No Content, in case the password contains doesn't any issue that contradicts security standards.
  - 400 Bad Request, in case the password contains any issue that contradicts security standards. Then, the route response is an array containing the password security issue(s).
