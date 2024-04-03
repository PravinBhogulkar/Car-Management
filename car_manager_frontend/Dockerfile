FROM node:alpine
WORKDIR root
COPY package.json .
# RUN npm config set https-proxy http://
RUN npm install
# COPY . /usr/src/app/
# EXPOSE 3000
RUN npm install -g @angular/cli
COPY . .
EXPOSE 4200:4200
CMD ng serve --host 0.0.0.0
# CMD ["npm", "run", "start"]
# EXPOSE 4200:4200

