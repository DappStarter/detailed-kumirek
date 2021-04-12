require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remember huge hope entire off street'; 
let testAccounts = [
"0xc782c8cc932a416f27eef2de22dbf824a33c965fdcce9a0a825ef688cfc3fece",
"0xfcad11033d2e4eb391a0067c7d7800a3eec6f261716fb6619192e3fca1ae1cc9",
"0x1471ed92b4b2f160ce322ac4d4f6cc49d273225a1ecc6aef6b1fee95b98230c4",
"0x9b40dde2fb64bf91f7c9298559c8fbeab26cff2155a6ec7116772bd573537b79",
"0xfb196629774b61033092dc3574bc37ffa11053379898b38954e35929e71b56b8",
"0x7044a05c95c2ac37d0a38a6a3d7479dcfe86c73fd16d011f2e75d22b2e9d3a70",
"0x8fb08c572735246aaff791b6185881989716ee0f1fe7db2d335816d4c074c955",
"0xd1f9f95460c1e8cbe6f0a02177c04df7d47f1b41296f9112aa923368ee7444fb",
"0x5979fab332ac3c202dddf5db16dc421c69a7237966c67cf96d867972a812f879",
"0xdbbbf7f5f667fccce4f021365edc144064725b7462e83c0ac6ee7b54a09e7045"
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
            version: '^0.5.11'
        }
    }
};
