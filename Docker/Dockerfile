FROM circleci/node:8.14-jessie-browsers as builder
USER root
EXPOSE 80
WORKDIR /app
COPY package.json .
RUN npm install

COPY . .
RUN npm run test-silent \
    && npm run build:dev

FROM nginx:1.15.5-alpine
WORKDIR /coverage
COPY --from=builder /app/coverage .
WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/www .

COPY Docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY Docker/nginx/conf.d/ /etc/nginx/conf.d/
