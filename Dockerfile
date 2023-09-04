# Utiliser une image Node.js
FROM node:18.17.1

# Créer un répertoire pour l'application
WORKDIR /usr/src/app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source de l'application
# COPY . .
COPY ./src ./src

# Exposer le port sur lequel l'application va s'exécuter
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npx", "next", "dev"]
