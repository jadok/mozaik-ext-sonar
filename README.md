# Mozaïk Sonar widgets

[![Travis CI][travis-image]][travis-url]

> This branch contains code for the version compatible with
> Mozaïk v2, no compability is provided for Moazik v1.

Link to the main repository [Mozaïk](https://github.com/plouc/mozaik), `mozaik-ext-sonar` is only an extension of it.

## Widgets

- [Metric](#metric)

## Github Client Configuration

In order to use the Mozaïk github widgets, you should configure its **client**.
It's not required that you provide a token for authentication, but then
you'll only be able to see public repos and the rate limit will apply.

### parameters

key         | env key          | required | default                | description
------------|------------------|----------|------------------------|----------------------------
`token`     | SONAR_API_TOKEN  | no*      | ''                     | *sonar authentication token*
`baseUrl`   | SONAR_BASE_URL   | no       | https://api.sonar.com  | *sonar api url* (useful for enterprise)
`auth_user` | SONAR_AUTH_USER  | no*      | ''                     | The sonar user authorization.
`auth_pass` | SONAR_AUTH_PASS  | no*      | ''                     | The sonar password authorization.

*: Fill weither a `token` or (`auth_user` and `auth_pass`) for security reason.

### usage

``` yaml
# config.yml
api:
  github:
    baseUrl: 'SONAR_BASE_URL'
    token: 'SONAR_API_TOKEN'
    auth_user: 'SONAR_AUTH_USER'
    auth_pass: 'SONAR_AUTH_PASS'
```

## Widgets doc

#### Metric

##### parameters

key          | required | description
-------------|----------|---------------
`project`    | yes      | sonar project used
`metric`     | yes      | metric to display

#### Additional feature

It is possible to display more than 1 metric (see the usage exemple).
It is possible to display then on several column and row

##### usage

``` yaml
# config.yml
dashboards:
- # …
  widgets:
  - extension:    sonar
    widget:       Metric
    project:      develop
    metric:       bugs,vulnerabilities,complexity
    columns:      2
    rows:         3
    x:            1
    y:            0

```

[travis-image]: https://img.shields.io/travis/plouc/mozaik-ext-github.svg?style=flat-square
[travis-url]: https://travis-ci.org/jadok/mozaik-ext-sonar
