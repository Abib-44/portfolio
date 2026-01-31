FROM jekyll/jekyll:4

WORKDIR /srv/jekyll
COPY . .

RUN jekyll build -d /srv/jekyll/_site

FROM nginx:alpine
COPY --from=0 /srv/jekyll/_site /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
