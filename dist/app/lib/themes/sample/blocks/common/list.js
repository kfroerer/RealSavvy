'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../misc/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'addSeparatorsTo',
    value: function addSeparatorsTo(array) {
      if (this.props.separatorEvery && this.props.separatorClassName) {
        var numberOfRows = array.length / this.props.separatorEvery - 1;

        if (numberOfRows > 0) {
          for (var i = 0; i < numberOfRows; i++) {
            array.splice((i + 1) * this.props.separatorEvery, 0, _react2.default.createElement('div', { key: 'separator-' + i, className: this.props.separatorClassName }));
          }
        }
      }
    }
  }, {
    key: 'renderGroup',
    value: function renderGroup(items, key) {
      return _react2.default.createElement(
        'div',
        { key: key, className: this.props.inGroupsOfClassName },
        items.slice(0)
      );
    }
  }, {
    key: 'renderItems',
    value: function renderItems(sortedList) {
      var array = sortedList.map(function (item, index) {
        var key = item.id || index;

        return this.props.children(item.content, key, index, item);
      }.bind(this));

      if (this.props.inGroupsOf !== undefined) array = (0, _utils.inGroupsOf)(array, this.props.inGroupsOf, function (group, index) {
        return this.renderGroup(group.slice(0), index);
      }.bind(this));

      this.addSeparatorsTo(array);

      return array;
    }
  }, {
    key: 'renderArray',
    value: function renderArray(Tag, list, listProps) {
      var _this2 = this;

      if (list.length === 0) return null;

      var sortedList = list.sort(function (a, b) {
        return (a.position || 0) - (b.position || 0);
      });

      return _react2.default.createElement(
        Tag,
        _extends({}, listProps, { ref: function ref(_ref) {
            return _this2.wrappedComponent = _ref;
          } }),
        this.renderItems(sortedList)
      );
    }
  }, {
    key: 'renderHash',
    value: function renderHash(Tag, hash, listProps) {
      var items = Object.keys(hash).map(function (name, index) {
        var value = hash[name];

        if (typeof value === 'undefined' || value === '') return null;

        var key = value.id || index;

        return this.props.children(name, value, key, index);
      }.bind(this));

      this.addSeparatorsTo(items);

      return _react2.default.createElement(
        Tag,
        listProps,
        items
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var list = this.props.list;
      var Tag = this.props.tag || 'div';
      var listProps = Object.assign({}, this.props);
      delete listProps.tag;
      delete listProps.list;
      delete listProps.separatorEvery;
      delete listProps.separatorClassName;
      delete listProps.inGroupsOf;
      delete listProps.inGroupsOfClassName;

      if (typeof list === 'undefined') return null;

      if (list.constructor === Array) return this.renderArray(Tag, list, listProps);else return this.renderHash(Tag, list, listProps);
    }
  }]);

  return List;
}(_react2.default.Component);

exports.default = List;