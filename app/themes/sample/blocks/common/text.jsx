import React from 'react';

export default class Text extends React.Component {

  createMarkup(htmlContent) {
    return { __html: htmlContent };
  }

  render() {
    let Tag = this.props.tag || 'div';
    const textProps = Object.assign({}, this.props);
    delete textProps.tag;
    delete textProps.allowEmpty;
    delete textProps.value;

    if (this.props.allowEmpty === false && (typeof(this.props.value) === 'undefined' || this.props.value.length === 0))
      return null;
    else
      return (
        <Tag {...textProps} dangerouslySetInnerHTML={this.createMarkup(this.props.value)} />
      );
  }

}

