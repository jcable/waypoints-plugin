/*
 * Copyright 2018 Julian Cable <julian.cable@yahoo.com>
 *
 */

module.exports = function (app) {
  const error = app.error || (msg => {console.error(msg)})
  const apiRoutePrefix = '/signalk/v1/api/resources'

  var plugin = {}

  plugin.start = function (props) {
    debug(`Start plugin`)
    pluginStarted === false && registerRoutes()
    pluginStarted = true
  }

  plugin.stop = function () {
    debug('Stop plugin')
  }

  plugin.id = 'notes'
  plugin.name = 'Signal K Notes'
  plugin.description =
    "Plugin that provides a source of note resources"

  plugin.schema = {
    type: 'object',
    properties: {
    }
  }

  function registerRoutes() {

    app.get(apiRoutePrefix + "/notes", (req, res) => {
      res.json({})
    })
  }

  return plugin

}
