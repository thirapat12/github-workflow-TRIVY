FROM nginx:1.15.5 as Runtime
WORKDIR /usr/share/nginx/html
COPY . .

COPY dockers/nginx/nginx.conf /etc/nginx/nginx.conf
COPY dockers/nginx/conf.d/ /etc/nginx/conf.d/
