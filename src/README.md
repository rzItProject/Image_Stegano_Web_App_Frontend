# ROADMAP - IMPLEMENTATION

### Étapes pour développer la logique d'authentification :

1. **Entités** :
   - Commencez par définir l'entité `User`. Elle doit contenir les informations de base d'un utilisateur, comme l'identifiant, le nom d'utilisateur, le mot de passe (hashé), etc.

2. **Cas d'utilisation (Use Cases)** :
   - `RegisterUser`: Ce cas d'utilisation gérera l'inscription d'un nouvel utilisateur. Il devra vérifier si le nom d'utilisateur est unique, hasher le mot de passe, puis enregistrer le nouvel utilisateur.
   - `LoginUser`: Ce cas d'utilisation gérera la connexion de l'utilisateur. Il devra vérifier le nom d'utilisateur, comparer le hash du mot de passe fourni avec celui enregistré, et renvoyer un jeton ou une session si la connexion est réussie.
   - `LogoutUser`: Ce cas d'utilisation gérera la déconnexion de l'utilisateur en invalidant le jeton ou la session.

3. **Ports (Interfaces de repository)** :
   - `IUserRepository`: Cette interface définira les méthodes que votre infrastructure de stockage devra implémenter, comme `save(user)`, `findByUsername(username)`, etc.

4. **Adaptateurs** :
   - Bien que pour l'instant vous n'ayez pas de backend réel, vous pouvez créer des adaptateurs "in-memory" qui simulent le comportement d'un véritable stockage. Par exemple, votre adaptateur pourrait utiliser une simple structure de données (comme un tableau) pour stocker et récupérer des utilisateurs.

5. **Tests** :
   - Écrivez des tests unitaires pour vos cas d'utilisation. Ces tests vérifieront le bon fonctionnement de la logique d'authentification. Par exemple, vous pouvez tester si `RegisterUser` rejette bien l'inscription lorsqu'un nom d'utilisateur est déjà pris.
   - Utilisez des mockups pour les dépendances externes (comme `IUserRepository`) afin de tester la logique métier sans dépendre de l'infrastructure réelle.

Une fois que vous avez une idée claire de ces étapes, nous pouvons commencer à écrire le code pour chaque pièce. Où aimeriez-vous commencer ?