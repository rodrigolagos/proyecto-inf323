FROM node:8.11.1
#No usar: latest

MAINTAINER giovanni.aravena.13@sansano.usm.com

WORKDIR /src
COPY / .

CMD [ "npm" ]
#CMD webpack --watch --watch-polling
CMD [ "start"]
#"npm start"   &   "npm test" son atajos para "npm run start" & "npm run test", para cualquier otra tarea npm, debe especificar "run"