FROM nginx:alpine

# Crea una cartella portfolio nel container e copia tutto lì
COPY . /usr/share/nginx/html/portfolio

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
