var bitcore = require('bitcore');
var Networks = bitcore.Networks;
Networks.add({
  name: 'Redtcd',
  alias: 'Redtcd',
  pubkeyhash: 0x8c,
  privatekey: 0x6b,
  scripthash: 0x7d,
  xpubkey: 0x0488B21E,
  xprivkey: 0x0488ADE4,
  networkMagic: 0xf5f9d0dc,
  port: 8333,
  dnsSeeds: [
  ],
});
module.exports = {
  coinnet: Networks.get('Redtcd')
};
