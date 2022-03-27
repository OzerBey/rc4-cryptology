const rc4 = (str, key) => {
  let s = [],
    k = [];
  //step 1
  for (let i = 0; i < 255; i++) {
    s[i] = i;
    k[i] = key.charCodeAt(i % key.length);
  }
};

//tests
