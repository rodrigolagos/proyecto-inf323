FROM node:latest
MAINTAINER giovanni.aravena.13@sansano.usm.com

WORKDIR /src
COPY / .

CMD [ "npm", "start", "build" , "test" ]
CMD ["nodemon"]