FROM node:alpine3.17
# RUN mkdir -p app
WORKDIR root
COPY package.json .
RUN npm install
# RUN npm config set https-proxy http://10.219.132.248:8080
COPY . .
EXPOSE 3000
CMD npm run start