// Return if value is null, undefined, or empty string
export const isFalsyValue = (val: any) => {
  return val == null || val === '';
}

// Method to format dollars
export const formatDollars = (num: any) => {
  if(num !== undefined && !num.isNaN){
    return num.toLocaleString("en-US", { style: "currency", currency: "USD" });
  }
  const number = 0;
  return number.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

// Convert Bytes
// Source: https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript

export const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}