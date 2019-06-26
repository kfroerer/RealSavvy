'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Block = function (_React$Component) {
  _inherits(Block, _React$Component);

  function Block() {
    _classCallCheck(this, Block);

    return _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).apply(this, arguments));
  }

  _createClass(Block, [{
    key: 'getStyle',
    value: function getStyle() {
      var url = this.props.background;

      if (typeof url === 'undefined' || url === null) return {};else return { backgroundImage: 'url(' + url + ')' };
    }
  }, {
    key: 'canAddBlockBelow',
    value: function canAddBlockBelow() {
      if (this.props.canAddBlockBelow === undefined) return true;else return this.props.canAddBlockBelow === true;
    }
  }, {
    key: 'render',
    value: function render() {
      var Tag = this.props.tag || 'div';
      var style = this.props.style || this.getStyle();
      var blockProps = Object.assign({}, this.props);
      delete blockProps.tag;
      delete blockProps.background;
      delete blockProps.block;
      delete blockProps.style;
      delete blockProps.canAddBlockBelow;

      if (!this.canAddBlockBelow()) blockProps['data-site-builder-block-add-block-below'] = false;

      return _react2.default.createElement(
        Tag,
        _extends({}, blockProps, {
          'data-site-builder-block-id': this.props.block.id,
          style: style }),
        this.props.children
      );
    }
  }]);

  return Block;
}(_react2.default.Component);

exports.default = Block;