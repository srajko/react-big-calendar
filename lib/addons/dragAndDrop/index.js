'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = withDragAndDrop;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

var _DragAndDropCalendar = require('./DragAndDropCalendar');

var _DragAndDropCalendar2 = _interopRequireDefault(_DragAndDropCalendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var html5Backend = void 0;

try {
  html5Backend = require('react-dnd-html5-backend');
} catch (err) {/* optional dep missing */}

function withDragAndDrop(Calendar) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$backend = _ref.backend,
      backend = _ref$backend === undefined ? html5Backend : _ref$backend;

  var DragAndDropCalendarWrapper = function (_React$Component) {
    _inherits(DragAndDropCalendarWrapper, _React$Component);

    function DragAndDropCalendarWrapper() {
      _classCallCheck(this, DragAndDropCalendarWrapper);

      return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    DragAndDropCalendarWrapper.prototype.render = function render() {
      return _react2.default.createElement(_DragAndDropCalendar2.default, _extends({}, this.props, { Calendar: Calendar }));
    };

    return DragAndDropCalendarWrapper;
  }(_react2.default.Component);

  return (0, _reactDnd.DragDropContext)(backend)(DragAndDropCalendarWrapper);
}
module.exports = exports['default'];