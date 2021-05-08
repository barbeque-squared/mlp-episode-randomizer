Suggest random My Little Pony episodes to watch.

It uses Flow for some static type hinting.
Episodes are configured in `constants/choices.js`.

## Commands

* `yarn start` - run the application in development mode
* `yarn build` - build production. Set `homepage` in `package.json`
* `yarn transfer` - rsync the build folder. Set `deploy_path "myserver:/where/you/want/it"` in `.yarnrc`
* `yarn deploy` - build + transfer in one command
