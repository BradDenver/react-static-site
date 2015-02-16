You can read a detailed explanation of this experiment on my [blog](http://braddenver.com/blog/2015/react-static-site.html).

## Setup
After cloning this repo run `npm install && bower install` to install dependencies

Note: dev/bundle*.js etc have been committed purely to have a complete example. they will be rewritten on run and would normally be git ignored.

## Run in dev mode
`npm start`

## Add a new post
* update [paths.js](https://github.com/BradDenver/react-static-site/blob/master/paths.js) data
* add md file in `posts/` directory

## Build for production
`npm run-script build-static`
