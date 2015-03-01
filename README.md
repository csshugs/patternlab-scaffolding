## Requirements
- [PHP 5.3+](http://windows.php.net/download/#php-5.5).
- [Node.js](http://nodejs.org/).
- [Grunt](http://gruntjs.com/).
- [Bower](http://bower.io/).
- [Ruby 1.9.3](http://rubyinstaller.org/downloads/)

### Sass (Ruby Dependencies)
Stylesheet compilation requires Sass and additional Sass-Plugins. If you got them installed, skip this part

- [Sass](http://sass-lang.com/install)
- [sass-globbing](https://github.com/chriseppstein/sass-globbing) version 1.1.0 ([version 1.1.1 may not work properly](https://github.com/chriseppstein/sass-globbing/issues/19)):

There are different ways to install them

##### Bundler
To install Ruby dependencies via [Bundler](http://bundler.io/) 
```
$ bundle install
```

##### Manual
```
$ gem install sass
```

```
$ gem install sass-globbing -v 1.1.0
```





## Installation

#### Automatic

First of all you need to clone this project:
```
$ git clone git@github.com:csshugs/patternlab-scaffolding.git
```

Next, get yourself the necessary dependencies:
```
$ npm install && bower install
```

Then you'll need to run the init script:
```
$ init
```

Pattern Lab is now scaffolded and you can start Pattern Lab
```
$ php core/builder.php -wrp
```

and Grunt
```
$ grunt
```

and go to [http://localhost:8000](http://localhost:8000).



#### Manually

Clone this project:
```
$ git clone git@github.com:csshugs/patternlab-scaffolding.git
```

Next [Download Pattern Lab](https://github.com/pattern-lab/patternlab-php/archive/master.zip) and grab everthing from the Pattern Lab ZIP except the `source` folder, the `.gitignore` and `README.md` and throw it into the root of your project.

Go to the `source` directory and delete the `css` folder.

In root run:
```
$ php core/builder.php -g
```

Delete the `css` folder once again.

Then:
```
$ git submodule init && git submodule update
```

Get yourself the necessary dependencies:
```
$ npm install && bower install
```

Remove unnecessary git files and folders:
```
$ rm -rf source/css/.git

$ rm -rf .git/

$ rm -rf .gitmodules
```

Remove unnecessary js files and rename jquery:
```
$ rm -rf source/js/fitvids.js

$ rm -rf source/js/init.js

$ mv source/js/jquery-2.0.0b2.js source/js/jquery.js
```

Create necessary folders and empty `script.js`:
```
$ mkdir source/images/ui

$ mkdir source/js/plugins

$ > source/js/script.js
```

Finally remove the `init` script:
```
$ rm init
```

Pattern Lab is now scaffolded and you can start Grunt:
```
$ grunt
```

and go to [http://localhost:8000](http://localhost:8000).





## Getting Started

Before you continue reading, make sure you've [made yourself familiar with Pattern Lab](http://patternlab.io/docs/index.html).

### Workflow

Open two command prompts. In the one cmd run:
```
$ php core/builder.php -wrp
```

in the other run:
```
$ grunt
```

As long as you have those two commands running, every generation of code runs automatically. The working directory is `source/`. Don't ever edit any files in `public/` or move files manually from `source/` to `public/`.



#### Directory Pattern

##### css
As css pattern [css-scaffold](https://github.com/csshugs/css-scaffold) is used. On how to handle it, [have a further read](https://github.com/inuitcss/getting-started) or [watch this wonderful talk](https://www.youtube.com/watch?v=1OKZOV-iLj4&hd=1).

##### js
If you have some JavaScript to add, add it to `source/js/script.js`. If you have any JavaScript or jQuery Plugins, throw the source files into `source/js/plugins/`. All JavaScript files in this directory get concatenated to `public/js/plugins.js`. Reference this and your `script.js` in your `source/_patterns/00-atoms/00-meta/_01-foot.mustache` pattern.

##### images
All images in `source/images/` are content images, hence just required within the Pattern Lab environment so they won't be copied to your `cms` directory. Except `source/images/ui/`. This directory is dedicated for css background-images, sprites etc. and will be copied into `cms`, so that these are available in production.

##### fonts
If you have an icon font or a self-hosted webfont, the font files are going into `source/fonts/`.

### Settings

##### cms
If you are working with a content management system, you'll find a `cms` variable at the top of the `Gruntfile.js`. Modify this variable, so that your assets (css, js, images and fonts) get copied to the system autmatically.




## Troubleshooting

#### fatal: Not a git repository

It is important to **clone** this project. Downloading the ZIP won't work!
