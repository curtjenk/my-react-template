// Source: https://stackoverflow.com/questions/9407892/how-to-generate-random-sha1-hash-to-use-as-id-in-node-js
// const byteToHex = (byte) => {
const byteToHex = (byte: any) => {
  return ('0' + byte.toString(16)).slice(-2);
}

export const generateRandomId = (len = 40) => {
  const arr = new Uint8Array(len / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, byteToHex).join("");
}