const encrypt = (str, key = "rc4-key@") => {
  return str && key ? rc4(str, key) : null; // if data is null return null else return encrypted data
};

const decrypt = (str, key = "rc4-key@") => {
  return str && key ? rc4(str, key) : null;
};

const rc4 = (str, key) => {
  let s = [],
    j = 0,
    x,
    result = "";
  for (let i = 0; i < 256; i++) {
    // create the s array
    s[i] = i;
  }
  // console.log("array", s);
  for (let i = 0; i < 256; i++) {
    j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
    x = s[i];
    s[i] = s[j];
    s[j] = x;
  }

  i = 0;
  j = 0;

  for (let y = 0; y < str.length; y++) {
    i = (i + 1) % 256;
    j = (j + s[i]) % 256;
    x = s[i];
    s[i] = s[j];
    s[j] = x;
    result += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
  }
  return result;
};

// let result = encrypt("Hello World", "rc4-key@");
// console.log(result);
// console.log(decrypt(result, "rc4-key@"));
function sifrele() {
  document.getElementById("resultChipher").value = encrypt(
    document.getElementById("text").value,
    document.getElementById("key").value
  );
}

function sifreCoz() {
  document.getElementById("resultPlain").value = decrypt(
    document.getElementById("resultChipher").value,
    document.getElementById("key").value
  );
}
