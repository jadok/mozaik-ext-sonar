'use strict';

var chalk = require('chalk');
var config = require('./config');

var userAgent = '@mozaik/ext-sonar';

/**
 * @param {Mozaik} mozaik
 */
var client = function client(mozaik) {
  mozaik.loadApiConfig(config);

  var buildApiRequest = function buildApiRequest(path, params) {
    var url = config.get('sonar.baseUrl');

    var options = {
      method: 'post',
      uri: '' + url + path,
      qs: {},
      json: true,
      resolveWithFullResponse: true,
      headers: {
        'User-Agent': userAgent
      }
    };
    var user = config.get('sonar.auth_user');
    var pass = config.get('sonar.auth_pass');
    if (user && pass) {
      options.auth = {
        user: user,
        pass: pass
      };
    } else {
      options.headers.Authorization = 'token ' + config.get('sonar.token');
    }

    var paramsDebug = params ? ' ' + JSON.stringify(params) : '';
    mozaik.logger.info(chalk.yellow('[sonar] calling ' + url + path + paramsDebug));

    if (params) {
      options.qs = params;
    }

    if (config.get('sonar.token') !== '') {
      options.headers.Authorization = 'token ' + config.get('sonar.token');
    }

    return mozaik.request(options);
  };

  var apiCalls = {
    metricFlow: function metricFlow(_ref) {
      var project = _ref.project,
          metric = _ref.metric;

      var metrics = {};
      mozaik.logger.info(chalk.yellow('[sonar] calling ' + project + ' - ' + metric));
      return buildApiRequest('/api/measures/search?projectKeys=' + project + '&metricKeys=' + metric).then(function (res) {
        metrics = res.body;
      }).then(function () {
        return buildApiRequest('/api/components/show?component=' + project);
      }).then(function (_ref2) {
        var body = _ref2.body;
        return {
          metrics: metrics,
          project: body
        };
      });
    }
  };

  return apiCalls;
};

module.exports = client;