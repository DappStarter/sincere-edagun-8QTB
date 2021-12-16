require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note night method guess problem metal gentle'; 
let testAccounts = [
"0xa191cfe008f1940af36b5a62d0f585010a34b2575d74c6b44524f810e3c4ab37",
"0x2ce2acc0706ac4f181e08af4ee34cd7e04a1a080b877f6739673e83c14d49581",
"0xaeec9f4beb115523a4584fc26aff663400a8a88e03ffa9771dabc7a6fdcd32b9",
"0x0628fe8b491fb4059d8d56347737c602e90e9101ce10fd111796122c6edcda3d",
"0x4d6d833e020c7a604b38007c307cfa17a50f6ee2ca566f4d4c6569ead4e0ebd8",
"0xf9eab03ba5dab1a28772c09c96f4ccf490876ab784d4280a5c582e97287d30d4",
"0xcd567ca00ab4b7627d5632e3aab86dcc70ad219f11bc670f71cc857788fef4af",
"0x8a6250a24f3b610f4aa2d3af0f997b106e0aeda40866459b971e1e6e90a745de",
"0x340fce7f09e0569bdf6ccc00624a3c664c3c7ea76451d0fbe653bfa5cbfafd1c",
"0x8764fab02f21b41853dc9609f0f74f6dee0eb8a1b7746b2133d62124f94b6b1e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

