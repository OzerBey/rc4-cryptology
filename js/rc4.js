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
    // console.log(i, j);
    temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }

  //step 3 : Keystream generation

  i = 0;
  j = 0;
  let result = "";

  for (let y = 0; y < str.length; y++) {
    i = (i + 1) % 256;
    j = (j + s[i]) % 256;
    //swap process
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    key = s[(s[i] + s[j]) % 256];
    result += String.fromCharCode(str.charCodeAt(y) ^ key);
  }
  return result;
};

const encrypt = (str, key = "@rc4-key") => {
  return str && key ? rc4(str, key) : null; // if data is null return null else return encrypted data
};

const decrypt = (str, key = "@rc4-key") => {
  return str && key ? rc4(str, key) : null;
};

//tests
/*
let result = rc4("Hello World", "rc4-key@"); //ascii
console.log("result of Rc4 algorithm", result);
let data = "hello world";
let charCode = data.charCodeAt(0);
console.log("charCode", charCode); //104
console.log("fromCharCode", String.fromCharCode(104)); //h
*/
