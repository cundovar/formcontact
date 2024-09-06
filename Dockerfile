# Utiliser une image officielle de Node.js comme base
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le conteneur
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le projet dans le répertoire de travail
COPY . .

# Construire l'application Next.js
RUN npm run build

# Exposer le port 3000 pour l'application Next.js
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "start"]
