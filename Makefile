.PHONY: build serve deploy
build:
	npm install; ./node_modules/.bin/grunt
serve:
	nohup ./node_modules/.bin/grunt serve &
kill:
	kill -9 `lsof -ti:9001`
deploy:
	git subtree push --prefix build origin gh-pages
