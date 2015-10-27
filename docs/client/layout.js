Template.registerHelper("layoutHidden", function (type) {
  return (!!Session.get('fullApi')) ^ (type === 'full') ? 'hidden' : '';
});

Template.basicOrFullSelect.events({
  "change .basic-or-full": function (event) {
    // XXX might not work in IE9?
    window.location.hash = "#/" + event.target.value + "/" + event.target.nextElementSibling.value + "/" + (Session.get('currentHash') || "");
  },

  "change .english-or-korean": function (event) {
    // XXX might not work in IE9?
    window.location.hash = "#/" + event.target.previousElementSibling.value + "/" + event.target.value + "/" + (Session.get('currentHash') || "");
  }
});

Template.basicOrFullSelect.helpers({
  isBasic: function () {
    return ! Session.get("fullApi");
  },
  isFull: function () {
    return Session.get("fullApi");
  },
  isEnglish: function () {
    return Session.get("i18n") === "english";
  },
  isKorean: function () {
    return Session.get("i18n") === "korean";
  }


});

Template.sidebar.helpers({
  topLink: function () {
    var docsType = Session.get("fullApi") ? "full" : "basic";
    var i18n = Session.get("i18n");
    return "#/" + docsType + "/" + i18n + "/";
  }
});
