FROM node:10.14.2-alpine as builder
EXPOSE 80
WORKDIR /src
COPY package.json .
RUN npm install

COPY . .
RUN npm run build-prod

FROM nginx:1.15.5-alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /src/dist .

COPY Docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY Docker/nginx/conf.d/ /etc/nginx/conf.d/