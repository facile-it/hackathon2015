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

To kill the development server issue a

```
make kill
```

# Deploy

To deploy to the gh-pages just issue the following commands:

```
make build
git add .
git commit -m 'Your commit message`
make deploy
```
