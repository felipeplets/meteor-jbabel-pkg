Package.describe({
  summary: "jbabel - an i18n jQuery extension that allow you to easly and friendly translate and localize your application"
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  api.add_files(['jbabel.js'], 'client');
});

// Package.on_test(function (api) {
//   api.use(['jquery', 'jbabel', 'tinytest']);

//   api.add_files('jbabel_tests.js', 'client');
// });
