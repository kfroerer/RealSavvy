module.exports = {
  files: {
    javascripts: {
      entryPoints: {
        // --- JS THEME FILE BELOW - DO NOT REMOVE THIS LINE
        'app/themes/sample/frontend/javascripts/main.es6': 'themes/sample/frontend.js',
        'app/themes/sample/client.es6': 'themes/sample/site_builder.js',
    

      }
    },
    stylesheets: {
      joinTo: {
        // --- CSS THEME FILE BELOW - DO NOT REMOVE THIS LINE
        'themes/sample/frontend.css': /^app\/themes\/sample\/frontend\/stylesheets/,
        

        'site_builder/app.css': /^app\/site_builder\/stylesheets/
      },
      order: {
        before: []
      }
    }
  },

  plugins: {
    babel: {
      babelrc: true,
      pattern: /\.(es6|jsx)$/,
      ignore: [/^(assets|node_modules)/],
      presets: ['es2015', 'react']
    },
    sass: {
      mode: 'native',
      options: {
        includePaths: [
        ]
      }
    }
  }

};
