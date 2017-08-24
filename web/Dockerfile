FROM node:6
RUN mkdir /code
WORKDIR /code
ADD package.json /code
RUN npm install
RUN npm install -g @angular/cli@latest
ADD . /code/
EXPOSE 1337 49153
CMD ["npm", "start"]