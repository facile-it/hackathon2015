.PHONY: build
image:
	docker build -t facile-it/hackathon2015 .
build:
	docker run -i -v ${PWD}:/hackathon2015 facile-it/hackathon2015 sh /build.sh
serve:
	docker run -p 9001:9001 -i -v ${PWD}:/hackathon2015 facile-it/hackathon2015 grunt serve
deploy:
	git subtree push --prefix build origin gh-pages
