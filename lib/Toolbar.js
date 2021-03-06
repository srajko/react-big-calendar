'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsMessages = require('./utils/messages');

var _utilsMessages2 = _interopRequireDefault(_utilsMessages);

var _utilsConstants = require('./utils/constants');

var Toolbar = _react2['default'].createClass({
  displayName: 'Toolbar',

  render: function render() {
    var _this = this;

    var _props = this.props;
    var messages = _props.messages;
    var label = _props.label;
    var viewNames = _props.views;
    var view = _props.view;

    messages = _utilsMessages2['default'](messages);

    return _react2['default'].createElement(
      'div',
      { className: 'rbc-toolbar' },
      _react2['default'].createElement(
        'span',
        { className: 'rbc-btn-group' },
        _react2['default'].createElement(
          'button',
          {
            type: 'button',
            onClick: this.navigate.bind(null, _utilsConstants.navigate.TODAY)
          },
          messages.today
        ),
        _react2['default'].createElement(
          'button',
          {
            type: 'button',
            onClick: this.navigate.bind(null, _utilsConstants.navigate.PREVIOUS)
          },
          messages.previous
        ),
        _react2['default'].createElement(
          'button',
          {
            type: 'button',
            onClick: this.navigate.bind(null, _utilsConstants.navigate.NEXT)
          },
          messages.next
        )
      ),
      _react2['default'].createElement(
        'span',
        { className: 'rbc-toolbar-label' },
        label
      ),
      _react2['default'].createElement(
        'span',
        { className: 'rbc-btn-group' },
        viewNames.map(function (name) {
          return _react2['default'].createElement(
            'button',
            { type: 'button', key: name,
              className: _classnames2['default']({ 'rbc-active': view === name }),
              onClick: _this.view.bind(null, name)
            },
            messages[name]
          );
        })
      )
    );
  },

  navigate: function navigate(action) {
    this.props.onNavigate(action);
  },

  view: function view(_view) {
    this.props.onViewChange(_view);
  }
});

exports['default'] = Toolbar;
module.exports = exports['default'];