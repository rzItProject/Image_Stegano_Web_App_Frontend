## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Guide d'utilisation de `build_and_run_docker_image.sh`

Ce script permet de construire une image Docker à partir d'un `Dockerfile` spécifié et de lancer un conteneur basé sur cette image.

## Prérequis

- Docker doit être installé et en cours d'exécution sur votre machine.
- Assurez-vous que le script `build_and_run_docker_image.sh` est exécutable. Si ce n'est pas le cas, exécutez la commande suivante :

  ```bash
  chmod +x build_and_run_docker_image.sh
  ```

## Utilisation

### Syntaxe

```bash
./build_and_run.sh <image_name:tag> <port> [Dockerfile]
```

### Paramètres

- `image_name:tag` : Le nom et le tag de l'image Docker que vous souhaitez construire.
- `port` : Le port sur lequel vous souhaitez exposer votre application.
- `Dockerfile` (optionnel) : Le chemin vers le `Dockerfile` que vous souhaitez utiliser. Par défaut, il utilise "Dockerfile" dans le répertoire courant.

### Exemples

1. Construire une image avec le nom `mon-projet` et le tag `latest`, puis la lancer sur le port 3000 :

   ```bash
   ./build_and_run.sh mon-projet:latest 3000
   ```

2. Construire une image avec le nom `mon-projet`, le tag `latest`, et un `Dockerfile` différent, puis la lancer sur le port 3000 :

   ```bash
   ./build_and_run.sh mon-projet:latest 3000 MyDockerfile
   ```

## Notes

- Le conteneur sera lancé en mode détaché (`-d`).
- Le conteneur sera automatiquement supprimé après son arrêt grâce à l'option `--rm`.
