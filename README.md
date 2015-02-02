## Getting Started

### Automatic

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

Pattern Lab is now scaffolded and you can start Grunt:
```
$ grunt
```

and go to [http://localhost:8000](http://localhost:8000).



### Manually

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



## Troubleshooting

#### fatal: Not a git repository

It is important to **clone** this project. Downloading the ZIP won't work!
