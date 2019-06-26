'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _block = require('./common/block');

var _block2 = _interopRequireDefault(_block);

var _list = require('./common/list');

var _list2 = _interopRequireDefault(_list);

var _text = require('./common/text');

var _text2 = _interopRequireDefault(_text);

var _link = require('./common/link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
  header block (type: header)

  Fields:
    - title (string). Example: "var value = this.props.block.content.title;"
    - subtitle (string). Example: "var value = this.props.block.content.subtitle;"
    - background (image). Example: "var value = this.props.block.content.background;"

  If your field is a string, you need to call the dangerouslySetInnerHTML method in your tag to prevent ReactJS to stop the rendering of the block for security reason. Example:

    var html = this.props.block.content.headline;
    <h1 className="text-center" dangerouslySetInnerHTML={{ __html: htmlContent }} />
*/

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var content = this.props.block.content;

      return _react2.default.createElement(
        _block2.default,
        { tag: 'div', className: 'header-block', block: this.props.block },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_text2.default, { tag: 'div', className: 'title', value: content.title }),
          _react2.default.createElement('img', { src: this.props.assetPath(content.background) }),
          _react2.default.createElement(_text2.default, { tag: 'div', className: 'subtitle', value: content.subtitle }),
          _react2.default.createElement(
            'button',
            { id: 'contactButton' },
            content.contactButton
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;