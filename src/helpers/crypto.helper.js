const { generateKeyPairSync, publicEncrypt, privateDecrypt, constants } = require("crypto");
const fs = require("fs");

const generateKeyPairRSA = () => {
  // The `generateKeyPairSync` method accepts two arguments:
  // 1. The type ok keys we want, which in this case is "rsa"
  // 2. An object with the properties of the key
  const keyPars = generateKeyPairSync("rsa", {
    // The standard secure default length for RSA keys is 2048 bits
    modulusLength: 2048,
  });
  const exportedPublicKeyBuffer = keyPars.publicKey.export({
    type: "pkcs1",
    format: "pem",
  })

  fs.writeFileSync("public.pem", exportedPublicKeyBuffer, { encoding: "utf-8" });

  const exportedPrivateKeyBuffer = keyPars.privateKey.export({
    type: "pkcs1",
    format: "pem",
  })

  fs.writeFileSync("private.pem", exportedPrivateKeyBuffer, {
    encoding: "utf-8",
  });

  return { publicKey: exportedPublicKeyBuffer, privateKey: exportedPrivateKeyBuffer }
}

const encrypt = (data) => {
  const publicKey = Buffer.from(
    fs.readFileSync("public.pem", { encoding: "utf-8" })
  );
  const encryptedData = publicEncrypt(
    {
      key: publicKey,
      padding: constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    // We convert the data string to a buffer using `Buffer.from`
    Buffer.from(data)
  );
  return encryptedData.toString("base64");
};

const decrypt = (data) => {
  const privateKey = fs.readFileSync("private.pem", { encoding: "utf-8" });
  const decryptedData = privateDecrypt(
    {
      key: privateKey,
      // In order to decrypt the data, we need to specify the
      // same hashing function and padding scheme that we used to
      // encrypt the data in the previous step
      padding: constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    Buffer.from(data, "base64")
  )
  return decryptedData.toString("utf-8")
};

module.exports = {
  generateKeyPairRSA,
  encrypt,
  decrypt
}