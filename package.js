
Package.describe({
  name: "keplerjs:foursquare",
  summary: "Keplerjs plugin for Foursquare API",
  version: "1.2.5",
  git: "https://github.com/Keplerjs/keplerjs-foursquare.git"
});

/*
Npm.depends({
  "": "",
});
*/

Package.onUse(function (api) {

  api.versionsFrom("1.5.1");

  api.use([
    'keplerjs:core',
  ]);

  api.addFiles([
    'plugin.js',
  ]);
/*
  api.addFiles([
  ],'client');

  api.addFiles([
    'server/Foursquare.js',
  ],'server');
*/
});
