FROM lib.matador.ais.co.th/tiangolo/node-frontend:10 as build-stage 

WORKDIR /app
COPY package*.json /app/
RUN npm config set registry https://lib.matador.ais.co.th/repository/npm/
RUN npm config set sass-binary-site=https://lib.matador.ais.co.th/repository/node-sass/
RUN npm install --verbose
COPY ./ /app/

RUN npm run build-prod

FROM lib.matador.ais.co.th/nginx:1.17.0-alpine
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
