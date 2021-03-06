[bitcoin/chainparams.cpp at master · bitcoin/bitcoin](https://github.com/bitcoin/bitcoin/blob/master/src/chainparams.cpp)

[bitcore/networks.js at master · bitpay/bitcore](https://github.com/bitpay/bitcore/blob/master/lib/networks.js)

[List of address prefixes - Bitcoin](https://en.bitcoin.it/wiki/List_of_address_prefixes)


main.cpp

```

CAmount GetBlockValue(int nHeight, const CAmount& nFees)
{
    CAmount nSubsidy = 50 * COIN;
    int halvings = nHeight / Params().SubsidyHalvingInterval();

    // Force block reward to zero when right shift is undefined.
    if (halvings >= 64)
        return nFees;

    // Subsidy is cut in half every 210,000 blocks which will occur approximately every 4 years.
    nSubsidy >>= halvings;

    return nSubsidy + nFees;
}

chainparams.cpp
mainnet
nSubsidyHalvingInterval = 210000;

50(1/(1-0.5))*210000=21M

regtest
nSubsidyHalvingInterval = 150;
50(1/(1-0.5))*150=15000

```


chainparams.cpp

```
mainnet

pchMessageStart[0] = 0xf9;
pchMessageStart[1] = 0xbe;
pchMessageStart[2] = 0xb4;
pchMessageStart[3] = 0xd9;

nSubsidyHalvingInterval = 210000;

base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,0);
# Pubkey hash (P2PKH address) symbol '1'

base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,5);
# Script hash (P2SH address) symbol '3'

base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,128);
# Private key (WIF, uncompressed pubkey) symbol '5'
# Private key (WIF, compressed pubkey) symbol 'K' or 'L'

base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x88)(0xB2)(0x1E).convert_to_container<std::vector<unsigned char> >();
# 4 136 178 30 BIP32 pubkey symbol 'xpub'

base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x88)(0xAD)(0xE4).convert_to_container<std::vector<unsigned char> >();
# 4 136 173 228 BIP32 private key symbol 'xpri'
```

testnet

```
pchMessageStart[0] = 0x0b;
pchMessageStart[1] = 0x11;
pchMessageStart[2] = 0x09;
pchMessageStart[3] = 0x07;

base58Prefixes[PUBKEY_ADDRESS] = std::vector<unsigned char>(1,111);
# m or n
base58Prefixes[SCRIPT_ADDRESS] = std::vector<unsigned char>(1,196);
# 2

base58Prefixes[SECRET_KEY] =     std::vector<unsigned char>(1,239);
# 9/c

base58Prefixes[EXT_PUBLIC_KEY] = boost::assign::list_of(0x04)(0x35)(0x87)(0xCF).convert_to_container<std::vector<unsigned char> >();
# 4 53 135 207 tpub

base58Prefixes[EXT_SECRET_KEY] = boost::assign::list_of(0x04)(0x35)(0x83)(0x94).convert_to_container<std::vector<unsigned char> >();
# 4 53 131 148 tpri

```

regtest

```
pchMessageStart[0] = 0xfa;
pchMessageStart[1] = 0xbf;
pchMessageStart[2] = 0xb5;
pchMessageStart[3] = 0xda;
nSubsidyHalvingInterval = 150;
```

network.js

```
addNetwork({
  name: 'livenet',
  alias: 'mainnet',
  pubkeyhash: 0x00,
  privatekey: 0x80,
  scripthash: 0x05,
  xpubkey:  0x0488b21e,
  xprivkey: 0x0488ade4,
  networkMagic: 0xf9beb4d9,
  port: 8333,
  dnsSeeds: [
    'seed.bitcoin.sipa.be',
    'dnsseed.bluematt.me',
    'dnsseed.bitcoin.dashjr.org',
    'seed.bitcoinstats.com',
    'seed.bitnodes.io',
    'bitseed.xf2.org'
  ]
});
```
