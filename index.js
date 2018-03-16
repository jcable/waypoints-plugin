/*
 * Copyright 2018 Julian Cable <julian.cable@yahoo.com>
 *
 */

const debug = require('debug')('waypoints')

module.exports = function (app) {
  const error = app.error || (msg => {console.error(msg)})
  const apiRoutePrefix = '/signalk/v1/api/resources'
  let pluginStarted = false

  var plugin = {}

  plugin.start = function (props) {
    debug(`Start plugin waypoints`)
    pluginStarted === false && registerRoutes()
    pluginStarted = true
  }

  plugin.stop = function () {
    debug(`Stop plugin waypoints`)
  }

  plugin.id = 'waypoints'
  plugin.name = 'Signal K Waypoints'
  plugin.description =
    "Plugin that provides a source of waypoints resources"

  plugin.schema = {
    type: 'object',
    properties: {
    }
  }

  function registerRoutes() {

    app.get(apiRoutePrefix + "/waypoints", (req, res) => {
      res.json({})
    })
  }

  return plugin

}
