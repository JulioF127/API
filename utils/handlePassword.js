const bcryptjs = require("bcryptjs")


const encrypt = async (passswordPlain) => {
    const hash = await bcryptjs.hash(passswordPlain, 10);
    return hash
};


const compare = async (passswordPlain, hashPassword) => {
    return await bcryptjs.compare(passswordPlain, hashPassword)
};

module.exports = { encrypt, compare };