'use strict';

module.exports = {
  '/': {
    controller: require('../common/controllers/start'),
    next: '/choices'
  },
  '/choices': {
    template: 'choices',
    fields: [
      'yes-no-radio-toggler',
      'example-toggled-text'
    ],
    next: '/confirmation'
  },
  '/confirmation': {
    template: 'confirmation.html',
    backLink: false,
    clearSession: true
  }
}
;
