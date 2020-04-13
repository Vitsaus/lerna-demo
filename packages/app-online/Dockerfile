FROM node:12

COPY . /opt/local

WORKDIR /opt/local

RUN npm install
RUN npm install -g serve
RUN npm build

CMD serve ./build

EXPOSE 5000

