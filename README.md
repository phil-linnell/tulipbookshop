# Tulip Bookshop
Front end to tulipbookshop.com

## Setup

```
$ npm install
$ npm run compile
```

## Development

Start Webpack server on localhost:8080
```
$ npm start
```
JS is hot reloaded, but for CSS execute the following
```
$ npm run css
```

## Deploy

SSH into the server if you have the secret, then compile in the site directory
```
$ ssh root@tulipbookshop.com
$ cd /www/tulipbookshop && git pull origin master
```

## TODO

* Hot reload css ?
* Setup firebase
* Form to capture email
