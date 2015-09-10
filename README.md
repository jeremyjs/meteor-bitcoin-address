# jjman505:bitcoin-address

Super simple bitcoin address validation.

## Installation

```
meteor add jjman505:bitcoin-address
```

## Description

### API ###

#### validate (address [, type]) ####

> returns true if the address (string) is a valid bitcoin address
> optionally, you can specify 'prod' or 'testnet' for the type to limit validation that that subset of addresses

#### get_address_type (address) ####

> returns address type if valid base58 address, otherwise null
