'use strict';

/*
 * This file is part of the Mozaïk project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

var convict = require('convict');

var config = convict({
  sonar: {
    baseUrl: {
      doc: 'The sonar API base url.',
      default: 'https://api.sonar.com',
      format: String,
      env: 'SONAR_BASE_URL'
    },
    token: {
      doc: 'The sonar API token.',
      default: '',
      format: String,
      env: 'SONAR_API_TOKEN'
    },
    auth_user: {
      doc: 'The sonar user authorization.',
      default: '',
      format: String,
      env: 'SONAR_AUTH_USER'
    },
    auth_pass: {
      doc: 'The sonar password authorization.',
      default: '',
      format: String,
      env: 'SONAR_AUTH_PASS'
    }
  }
});

module.exports = config;