'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Bugs-Bot',
  icon_emoji: config('ICON_EMOJI')
}

let attachments = [
  {
    title: 'Starbot will help you find the hippest repos on GitHub',
    color: '#2FA44F',
    text: '`/bugsbot repos` returns hip repos \n`/starbot javascript` returns hip JavaScript repos',
    mrkdwn_in: ['text']
  },
  {
    title: 'Configuring Starbot',
    color: '#E3E4E6',
    text: '`/bugsbot help` ... you\'re lookin at it! \n',
    mrkdwn_in: ['text']
  }
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /help/ig, handler: handler }

