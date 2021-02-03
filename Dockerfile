FROM tiangolo/node-frontend:10 as build-stage 

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/

RUN npm run build-prod

FROM nginx:1.17.0-alpine
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
