const rc4 = (str, key) => {
  let s = [],
    k = [];
  //step 1
  for (let i = 0; i < 255; i++) {
    s[i] = i;
    k[i] = key.charCodeAt(i % key.length);
  }
  //step 2
  j = 0;
  for (let i = 0; i < 255; i++) {
    let temp;
    j = (j + s[i] + k[i]) % 256;
    temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
};

//tests
rc4("hello world", "rc4-key@");

let data = "hello world";
let charCode = data.charCodeAt(0);
console.log("charCode", charCode);
console.log("fromCharCode", String.fromCharCode(104));
