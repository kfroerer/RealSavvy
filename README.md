# The theme builder tool

Before going further, cd into your newly generated SiteBuilder project.

  `cd <sitebuilder project>`

## Version your project!

  ```
  git init .
  git commit -am "initial commit"
  ```

## How to create a new theme?

  `locomotive theme MyAwesomeTheme`

This will generate the following files/folders:

  - app/assets/samples/my_awesome_theme.json

    The file includes the data the Locomotive page will receive for the rendering.
    If your sites own metadata (opening hours, phone number, twitter url, ...etc), insert some samples in the **metadata** section.
    This file won't be deployed to the platform.

  - app/assets/themes/my_awesome_theme/

    Put here all your static and already minified/compressed JS/CSS assets.
    This is also the right place to put your font files for instance.
    The files in that folder won't processed by the Brunch, so no Scss, Coffeescript, ...etc are allowed here.

  - app/themes/my_awesome_theme/blocks/

    The code of your blocks goes here. See the following chapter to know how to
    create a new block.

  - app/themes/my_awesome_theme/blocks/images

    Each block comes with an image (.png) which is **required** by the back-office.

  - app/themes/my_awesome_theme/frontend/

    Put all your dynamic assets here, meaning all your Coffeescript, Scss/Sass, Less, ...etc files.

  - app/themes/my_awesome_theme/layout.jsx

    Layout for all your pages inside your site. You can modify it to insert your
    own external JS libs like Intercom for instance.

  - app/themes/my_awesome_theme/theme.json

    This file includes:
      - some general information about the theme.
      - the properties for each type of blocks.
      - the style properties allowed for this theme.
      - the rules to generates the default pages when a site is created.

  - public

    Don't touch at any files in this folder. All the transformed, compressed, concated and minified files by Brunch will go there.

  - brunch-config.js

    The configuration file for Brunch.io. See options here: http://brunch.io/docs/config.

## How to run the preview mode?

Start the embedded web server:

```
npm start
```

Then, open your browser at the following address: [http://localhost:3333](http://localhost:3333).

## How to create a new block?

```
locomotive block <your theme handle> <block label> <list of fields>
```

Check the theme.json file of your theme to know what its handle is.

By default, the CLI takes the "underscore" (or "snake") version of the label. For instance, if your label is "My Awesome block", its type will be **my_awesome_block**.

The fields are separated by an empty space. The format of a field is "<name>:<type>". If the type is omitted, string will be used as the default one.

The available field types are: string, text, image and list.

Example:

```
locomotive block my_awesome_theme "Text with image" paragraph:text image:image
```

In order to test the block in the page, you need to add an instance of it in the sample JSON file of your theme **app/assets/samples/<your theme handle>.json** at the **page.content.blocks** location.

```JSON
"blocks": [
  {
    "id": "<any number or string>",
    "type": "<block type>",
    "content": {
      "<field 1>": "<value 1>",
      ...
      "<field n>": "<value n>"
    }
  }
]
```

Example:

```
"blocks": [
  {
    "id": 1,
    "type": "text_with_image",
    "paragraph": "Hello world",
    "image": "http://placehold.it/350x150"
  }
]
```

## How to add a style property?

```
locomotive style <your theme handle> <name> <type> <default value>
```

The available types are: string, text, image, color.

Examples:

```
locomotive style my_awesome_theme "Background color" color #333
```

## How to deploy your themes and blocks to the platform?

First, you need to create an account on the platform. Once created, you will be given an API key (go to your profile in the back-office to get it).

Then, inside your SiteBuilder project folder, you have to run once the following command:

  `locomotive login`

You will be asked for:
  - the name of the environment. It is required by the **deploy** command. For instance, you could write **staging** to set up a staging environment.
  - the url of the platform (by default: https://builder.locomotivecms.com)
  - your email
  - the API key

Now, you're able to deploy your theme to the platform by typing this:

  `locomotive deploy <name of your environment> <your theme handle>`

It might take some time because it concats and minifies all the js/css assets, zip everything and send it to the server.


