# Usa l'immagine ufficiale Jekyll per GitHub Pages
FROM jekyll/jekyll:pages

# Imposta la cartella di lavoro nel container
WORKDIR /srv/jekyll

# Copia tutto il progetto dentro il container
COPY . .

# Installa webrick, necessario per jekyll serve su Ruby 3+
RUN gem install webrick

# Esponi la porta 4000 per accedere al server
EXPOSE 4000

# Comando per avviare Jekyll con watch e polling forzato
CMD ["jekyll", "serve", "--watch", "--force_polling", "--host", "0.0.0.0"]
