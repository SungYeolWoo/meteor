
Template.introduction.helpers({
  isKorean: function () {
    return Session.get('i18n') === 'korean';
  }
});