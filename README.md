# Pattern Lab scaffolding

Before you continue reading, make sure you've [made yourself familiar with Pattern Lab](http://patternlab.io/docs/index.html).





## Installation

#### Automatic

First of all you need to clone this project:
```
$ git clone git@github.com:csshugs/patternlab-scaffolding.git
```

Next, get yourself the necessary dependencies:
```
$ npm install

$ bower install
```

Then you'll need to run the init script:
```
$ init
```

Pattern Lab is now scaffolded and you can start the Pattern Lab watcher with:
```
$ php core/builder.php -wrp
```

...and the grunt watcher with:
```
$ grunt dev
```

...and go to [http://localhost:8000](http://localhost:8000).



#### Manually

Clone this project:
```
$ git clone git@github.com:csshugs/patternlab-scaffolding.git
```

Next [Download Pattern Lab](https://github.com/pattern-lab/patternlab-php/archive/master.zip) and grab everthing from the Pattern Lab Zip except the `source` folder, the `.gitignore` and `README.md` and throw it into the root of your project.

Then:
```
$ git submodule init && git submodule update
```

Get yourself the necessary dependencies:
```
$ npm install

$bower install
```

Remove unnecessary git files and folders:
```
$ rm -rf source/css/.git

$ rm -rf .git/

$ rm -rf .gitmodules
```

Remove unnecessary js files:
```
$ rm -rf source/js/
```

Create empty `script.js`:
```
$ > source/js/script.js
```

Finally remove the `init` script:
```
$ rm init
```

Pattern Lab is now scaffolded and you can start the Pattern Lab watcher with:
```
$ php core/builder.php -wrp
```

...and the grunt watcher with:
```
$ grunt dev
```

...and go to [http://localhost:8000](http://localhost:8000).





## Workflow

Open two command prompts. Run:
```
$ php core/builder.php -wrp
```

...and:
```
$ grunt dev
```

As long as you have those two commands running, every generation of code runs automatically. The working directory is `source/`. Don't ever edit any files in `public/` or move files manually from `source/` to `public/`.



## Directory Pattern

### css
For the css file pattern [css-scaffold](https://github.com/csshugs/css-scaffold) is used. On how to handle it, [have a further read](https://github.com/inuitcss/getting-started#setting-up-a-project) or [watch this wonderful talk](https://www.youtube.com/watch?v=1OKZOV-iLj4&hd=1).

### js

#### Custom Scripts
Place custom scripts inside `source/js/`.
Reference these in the `source/_patterns/00-atoms/00-meta/_01-foot.mustache` pattern.


#### 3rd Party Scripts (libs, plugins, etc)
3rd party scripts should be installed via [bower](http://bower.io/). Reference the necessary scripts in the src-list in `grunt/bowercopy.js` (either libs or plugins). These scripts are automatically copied into `source/js/vendor/` (via [grunt-bowercopy](https://github.com/curist/grunt-bower)) and referenced via [grunt-injector](https://github.com/klei/grunt-injector).

In order to get this working, you got to set the following html-comments in `source/_patterns/00-atoms/00-meta/_01-foot.mustache` just above the closing `</body>`-tag
```html
    <!-- injector:js -->
    <!-- endinjector -->

    </body>
</html>
```

In addition, you must uncomment the following two lines in `Gruntfile.js` as soon as you have bower components you wish to add to the project:
```js
grunt.registerTask('bowerInject', [
    'clean:jsVendor',
    // 'bowercopy',
    // 'injector'
]);
```

After installing a new script via bower, run
```
$ grunt bowerInject
```

### fonts
If you have an icon font or a self-hosted webfont, the font files are going into `source/fonts/`.

## Settings

### cms
If you are working with a content management system, you'll find `cms` variables at the top of `Gruntfile.js`. Modify these variables, so that your assets (css, js, images and fonts) are copied to the system autmatically.





## Requirements
- [PHP 5.3+](http://windows.php.net/download/#php-5.5).
- [Node.js](http://nodejs.org/).
- [Grunt](http://gruntjs.com/).
- [Bower](http://bower.io/).
- [Git](http://git-scm.com/).





## Troubleshooting

#### fatal: Not a git repository

It is important to **clone** this project. Downloading the ZIP won't work!
