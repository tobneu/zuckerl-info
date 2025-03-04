# Verwenden Sie ein offizielles Node.js-Image als Basis
FROM node:18-alpine

# Setzen Sie das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopieren Sie die package.json und package-lock.json
COPY package*.json ./

# Installieren Sie die Abhängigkeiten
RUN npm install

# Kopieren Sie den Rest des Anwendungscodes
COPY . .

# Bauen Sie die Tailwind CSS-Datei für die Produktion
RUN npx tailwindcss -o ./public/styles.css --minify

# Exponieren Sie den Port, auf dem die App läuft
EXPOSE 3000

# Starten Sie die Anwendung
CMD ["npm", "start"]