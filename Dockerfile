FROM centos:centos7

RUN yum install tar wget ruby -y

RUN gem install sass
WORKDIR /tmp

RUN wget -nv -O - http://nodejs.org/dist/v0.12.4/node-v0.12.4-linux-x64.tar.gz | tar zx

RUN mv node-v0.12.4-linux-x64 /usr/local/node

RUN ln -s /usr/local/node/bin/* /usr/local/bin
RUN npm install -g grunt-cli

RUN echo "npm install; grunt" > /build.sh
RUN chmod +x /build.sh

WORKDIR /hackathon2015

VOLUME ["/hackathon2015"]
