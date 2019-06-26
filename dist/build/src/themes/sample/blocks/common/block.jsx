import React from 'react';

export default class Block extends React.Component {

  getStyle() {
    let url = this.props.background;

    if (typeof(url) === 'undefined' || url === null)
      return {};
    else
      return { backgroundImage: `url(${url})` };
  }

  canAddBlockBelow() {
    if (this.props.canAddBlockBelow === undefined)
      return true;
    else
      return this.props.canAddBlockBelow === true;
  }

  render() {
    let Tag = this.props.tag || 'div';
    let style = this.props.style || this.getStyle();
    const blockProps = Object.assign({}, this.props);
    delete blockProps.tag;
    delete blockProps.background;
    delete blockProps.block;
    delete blockProps.style;
    delete blockProps.canAddBlockBelow;

    if (!this.canAddBlockBelow())
      blockProps['data-site-builder-block-add-block-below'] = false

    return (
      <Tag {...blockProps}
        data-site-builder-block-id={this.props.block.id}
        style={style}>
        {this.props.children}
      </Tag>
    );
  }

}

