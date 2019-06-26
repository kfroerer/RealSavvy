import React from 'react';

export default class Layout extends React.Component {

  render() {
    return(
      <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
        <head>
          <title>{this.props.site.name}</title>

          <link rel="stylesheet" href={this.props.assetPath('/themes/sample/stylesheets/font-awesome.min.css')} />
          <link rel="stylesheet" href={this.props.assetPath('/themes/sample/frontend.css')} />
          <script type="text/javascript" src={this.props.assetPath('/themes/sample/frontend.js')} />
          <script dangerouslySetInnerHTML={{__html: `
            require('themes/sample/frontend/javascripts/main');
          `}} />
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    )
  }

}
