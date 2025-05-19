function parseJwt(token) {
  try {
    const base64Payload = token.split('.')[1];
    return JSON.parse(atob(base64Payload));
  } catch (e) {
    return null;
  }
}
