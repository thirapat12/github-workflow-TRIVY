FROM nginx:1.15.5-alpine as runtime
FROM node:10.14.2-alpine as builder
EXPOSE 80
WORKDIR /src
COPY package.json .
RUN npm install

COPY . .
RUN npm run build-prod

FROM runtime as final
WORKDIR /usr/share/nginx/html
COPY --from=builder /src/dist/www .

COPY Docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY Docker/nginx/conf.d/ /etc/nginx/conf.d/
