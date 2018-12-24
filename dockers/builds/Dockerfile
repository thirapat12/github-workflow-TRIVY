FROM node:10.14.2-alpine as Builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build-dev

FROM nginx:1.15.5-alpine as Runtime
WORKDIR /usr/share/nginx/html
COPY --from=Builder /app/dist/www .

COPY dockers/nginx/nginx.conf /etc/nginx/nginx.conf
COPY dockers/nginx/conf.d/ /etc/nginx/conf.d/
