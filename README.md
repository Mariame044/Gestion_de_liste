Gestion d'une liste de tâches dans une application web
En HTML:
1. Creer la structure de page html
2. Tout d' abord j'ai utilisé la balise <div> pour contenir tout le
3. j'ai aussi utilisé la balise <form> pour créer le formulaire.

En CSS:

En JavaScript: 
1. Chargement initial des tâches depuis le stockage local :
   - La fonction `loadTasks()` est appelée au chargement de la page pour récupérer les tâches stockées dans le localStorage et les afficher dans la liste.

2. Ajout d'une nouvelle tâche :
   - Lorsque l'utilisateur clique sur le bouton "Ajouter" (`#input-button`), la fonction `addTask()` est appelée.
   - Cette fonction récupère les valeurs des champs de saisie (tâche, date, filtre1, filtre2), vérifie si le champ de saisie est vide, puis crée un nouvel élément `<li>` contenant les détails de la tâche ainsi que des boutons "Modifier" et "Supprimer".
   - L'élément `<li>` est ensuite ajouté à la liste (`#liste`).

3. Modification d'une tâche :
   - Lorsque l'utilisateur clique sur le bouton "Modifier" d'une tâche existante, la fonction `editTask()` est appelée.
   - Cette fonction récupère le texte de la tâche, affiche une boîte de dialogue pour permettre à l'utilisateur de modifier le texte, puis met à jour le texte de la tâche si l'utilisateur saisit une nouvelle valeur.

4. Suppression d'une tâche :
   - Lorsque l'utilisateur clique sur le bouton "Supprimer" d'une tâche existante, la fonction `deleteTask()` est appelée.
   - Cette fonction supprime l'élément `<li>` parent de la tâche correspondante de la liste.

5. Sauvegarde des tâches dans le stockage local:
   - La fonction `saveTasks()` est appelée après chaque ajout, modification ou suppression de tâche.
   - Elle parcourt chaque élément de texte de tâche dans la liste, les stocke dans un tableau, puis convertit ce tableau en chaîne JSON et le sauvegarde dans le localStorage sous la clé 'tasks'.
