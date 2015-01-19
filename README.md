## Getting Started

#### Automatic

- Clone this project
- Run `npm install`
- Run `bower install`
- Run `init`
- Start the patternlab watcher and grunt in two seperate command prompts via `php core/builder.php -wr` and `grunt`
- Go to `http://localhost:8000`



#### Manually

- Clone this project
- [Download patternlab](https://github.com/pattern-lab/patternlab-php/archive/master.zip)
- Grab everthing from the patternlab-ZIP except the `source` folder, the `.gitignore` and `README.md` and throw it into the root of your project
- Go to the `source` directory and delete the `css` folder
- In root run: `php core/builder.php -g`
- Delete the `css` folder again
- Run `git submodule init && git submodule update`
- Then: `npm install && bower install`
- Start the patternlab watcher and grunt in two seperate command prompts via `php core/builder.php -wr` and `grunt`
- Go to `http://localhost:8000`



## Troubleshooting

#### fatal: Not a git repository

It's necessary to **clone** this project. Downloading the ZIP won't work!
