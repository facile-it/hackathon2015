# Facile.it Hackathon 2015

# Build Environment
To allow everyone to build the website without platform specific dependencies
we created a Docker image  containing Node, Sass and Grunt.

The Docker image requires to be built the first time using the command:

```
make image
```

# Development

## Build the website

```
make build
```

## Test the website

```
make serve
```
And then visit it at `http://localhost:9001`


# Deploy

To deploy to the gh-pages you have to issue the following commands:

```
make build
git add .
git commit -m 'Your commit message`
make deploy
```
