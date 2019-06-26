import React from 'react';

export default class Link extends React.Component {

  createMarkup(htmlContent) {
    return { __html: htmlContent };
  }

  renderLink() {
    let link = this.props.value;

    const linkProps = Object.assign({}, this.props);
    delete linkProps.allowEmpty;
    delete linkProps.link;
    delete linkProps.value;

    if (this.props.children)
      return (
        <a {...linkProps} href={link.url} target={link.target ? '_blank' : ''}>
          {this.props.children}
        </a>
      )
    else
      return (
        <a {...linkProps} href={link.url} dangerouslySetInnerHTML={this.createMarkup(link.label)} target={link.target ? '_blank' : ''} />
      );
  }

  render() {
    let link = this.props.value;

    if (typeof(link) === 'undefined' || link === null) return null;

    if (this.props.allowEmpty === false && (typeof(link.url) === 'undefined' || link.url.length === 0))
      return null;
    else
      return this.renderLink();
  }

}

