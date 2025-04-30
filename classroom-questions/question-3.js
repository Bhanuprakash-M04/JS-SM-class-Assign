function filterObjectProperties(obj, minLen) {
  const ans = {};
  for (key in obj) {
    if (typeof obj[key] == "string" && obj[key].length >= minLen)
      ans[key] = obj[key];
  }
  return ans;
}
const data = {
  a: "short",
  b: "longer string",
  c: 123,
  d: "very long string indeed",
};
const filtered = filterObjectProperties(data, 7);
console.log(filtered);
