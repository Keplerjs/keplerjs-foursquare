Package.describe({
  version: "1.3.7",
  name: "keplerjs:foursquare",
  summary: "Keplerjs plugin for Foursquare API",
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
    'keplerjs:core@1.3.7',
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
