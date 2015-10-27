release = Meteor.release ? "1.2.1" : "(checkout)";

Template.registerHelper("release", release);

Template.registerHelper("fullApi", function () {
  return Session.get("fullApi");
});

Template.registerHelper("i18n", function () {
  return Session.get("i18n");
});


Template.registerHelper('dstache', function() {
  return '{{';
});

Template.registerHelper('tstache', function() {
  return '{{{';
});

Template.registerHelper('lt', function () {
  return '<';
});
