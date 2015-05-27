# Facile.it Hackathon 2015

# Development

## Build the website

```
make build
```

## Test the website

```
make serve
```
And then visit it at `http://<host>:9001`


# Deploy

To deploy to the gh-pages you have to issue the following commands:

```
make build
git add .
git commit -m 'Your commit message`
make deploy
```
