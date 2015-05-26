.PHONY: build
image:
	docker build -t facile-it/hackathon2015 .
build:
	docker run -i -v ${PWD}:/hackathon2015 facile-it/hackathon2015 sh /build.sh
