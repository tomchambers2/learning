#comment line
FROM ubuntu
MAINTAINER Tom Chambers <tom.chambers@guidesmiths.com>
RUN npm install
RUN node server.js
