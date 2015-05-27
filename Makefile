.PHONY: build serve deploy
build:
	npm install; ./node_modules/.bin/grunt
serve:
	./node_modules/.bin/grunt serve
deploy:
	git subtree push --prefix build origin gh-pages
