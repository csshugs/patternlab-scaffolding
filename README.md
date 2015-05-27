# Pattern Lab scaffolding

Before you continue reading, make sure you've [made yourself familiar with Pattern Lab](http://patternlab.io/docs/index.html).






### 3rd Party Scripts (libs, plugins, etc)
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




## Requirements
- [PHP 5.3+](http://windows.php.net/download/#php-5.5).
- [Node.js](http://nodejs.org/).
- [Grunt](http://gruntjs.com/).
- [Bower](http://bower.io/).
- [Git](http://git-scm.com/).





## Troubleshooting

#### fatal: Not a git repository

It is important to **clone** this project. Downloading the ZIP won't work!
