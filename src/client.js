'use strict'

const chalk = require('chalk')
const config = require('./config')

const userAgent = '@mozaik/ext-sonar'

/**
 * @param {Mozaik} mozaik
 */
const client = mozaik => {
  mozaik.loadApiConfig(config)

  const buildApiRequest = (path, params) => {
    const url = config.get('sonar.baseUrl')

    const options = {
      method: 'post',
      uri: `${url}${path}`,
      qs: {},
      json: true,
      resolveWithFullResponse: true,
      headers: {
        'User-Agent': userAgent
      },
    }
    const user = config.get('sonar.auth_user');
    const pass = config.get('sonar.auth_pass');
    if (user && pass) {
      options.auth = {
        user,
        pass,
      };
    }
    else {
      options.headers.Authorization = `token ${config.get('sonar.token')}`
    }

    const paramsDebug = params ? ` ${JSON.stringify(params)}` : ''
    mozaik.logger.info(chalk.yellow(`[sonar] calling ${url}${path}${paramsDebug}`))

    if (params) {
      options.qs = params
    }

    if (config.get('sonar.token') !== '') {
      options.headers.Authorization = `token ${config.get('sonar.token')}`
    }

    return mozaik.request(options)
  }

  const apiCalls = {
    metricFlow({ project, metric }) {
      let metrics = {}
      mozaik.logger.info(chalk.yellow(`[sonar] calling ${project} - ${metric}`));
      return buildApiRequest(`/api/measures/search?projectKeys=${project}&metricKeys=${metric}`)
        .then((res) => {
          metrics = res.body
        })
        .then(() => buildApiRequest(`/api/components/show?component=${project}`))
        .then(({ body }) => ({
          metrics,
          project: body
        }))
    },

  }

  return apiCalls
}

module.exports = client
