Package.describe({
  name: 'jjman505:bitcoin-address',
  summary: 'Super simple bitcoin address validation.',
  version: '0.1.0',
  git: 'https://github.com/jjman505/meteor-bitcoin-address'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');

  api.addFiles('bitcoin-address.js', ['server']);

  api.export('BitcoinAddress');
});


Npm.depends({
  'bitcoin-address': '0.3.0'
});
