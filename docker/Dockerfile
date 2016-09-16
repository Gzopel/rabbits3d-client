FROM node:6-slim

RUN apt-get update && \
  apt-get install -y sudo && \
  apt-get install -y git

ARG NODE_ENV
ARG BRANCH

ENV NODE_ENV ${NODE_ENV:-production}
ENV TERM xterm

USER root

RUN git clone https://github.com/Gzopel/rabbits3d-client
WORKDIR "/rabbits3d-client"
RUN git fetch origin ${BRANCH:-master}
RUN git checkout origin/${BRANCH:-master}

#Not working for some reason
ENV PATH /rabbits3d-client/node_modules/.bin:$PATH

RUN npm i
#This should be necessary with current package.json
RUN npm i -g webpack
RUN npm run build

CMD npm start
