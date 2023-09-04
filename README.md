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

## Stack Techniques

### Tests

1. **Jest** : Framework de test.
2. **@testing-library/react** : Bibliothèque qui vous aide à tester les composants React de manière plus conviviale.
3. **@testing-library/jest-dom** : Propose des assertions personnalisées pour Jest pour tester l'état du DOM.
4. **@testing-library/user-event** : Permet de simuler des événements d'utilisateur, tels que le clic sur un bouton.
5. **@types/jest** et **ts-jest** : Pour ajouter le support de TypeScript à Jest.

Installation manuelle :

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest ts-jest
```

#### Configurer Jest pour travailler avec TypeScript et React.

Créer un fichier de configuration jest : `jest.config.ts` et ajouter les éléments suivants:

```typescript
module.exports = {
  roots: ['<rootDir>/src'],
```

- `roots`: C'est un tableau qui indique à Jest où chercher les fichiers de test. `<rootDir>` est une variable d'environnement fournie par Jest qui fait référence au répertoire racine de votre projet. Ici, nous indiquons à Jest de chercher des fichiers de test uniquement dans le répertoire `src`.

```typescript
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
```

- `transform`: C'est un objet qui indique à Jest comment "transformer" les fichiers avant de les tester. Comme nous utilisons TypeScript, nous devons "transpiler" nos fichiers TypeScript en JavaScript avant de les exécuter. La regexp `'^.+\\.tsx?$'` attrape tous les fichiers `.ts` et `.tsx`, et nous utilisons `ts-jest` pour effectuer cette transformation.

```typescript
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
```

- `testRegex`: C'est une expression régulière qui aide Jest à identifier les fichiers de test. La configuration ci-dessus indique que tout fichier se terminant par `.test.ts`, `.spec.ts`, `.test.tsx`, ou `.spec.tsx` (qu'il soit dans un répertoire `__tests__` ou non) doit être considéré comme un fichier de test.

```typescript
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
```

- `moduleFileExtensions`: C'est un tableau qui indique à Jest quelles extensions de fichiers il doit traiter. Cela est utile car, dans votre code, vous pourriez importer un module sans spécifier son extension.

```typescript
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
```

- `setupFilesAfterEnv`: Ce sont des fichiers qui seront chargés après l'environnement de test Jest. Ici, nous ajoutons des assertions personnalisées fournies par `@testing-library/jest-dom`. Cela ajoute des matchers Jest utiles comme `toBeVisible` ou `toHaveTextContent` qui facilitent les tests DOM.

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
