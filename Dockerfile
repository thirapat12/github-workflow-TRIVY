FROM node:10.13.0 as build-stage 

WORKDIR /app
COPY package*.json /app/
RUN npm config set registry https://lib.matador.ais.co.th/repository/npm/
RUN npm config set sass-binary-site https://lib.matador.ais.co.th/repository/node-sass/
RUN npm install --verbose
COPY . .
RUN npm run build-prod

FROM lib.matador.ais.co.th/nginx:1.17.0-alpine
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
