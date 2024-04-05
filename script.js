$(document).ready(function() {
  // Cette fonction est appelée lorsque le DOM est entièrement chargé et prêt à être manipulé

  // Charge la liste de tâches depuis localStorage lors du chargement de la page
  loadTasks();

  // Gestionnaire d'événement pour le bouton "Add"
  $('#input-button').on('click', function(event) {
      event.preventDefault(); // Empêche le rechargement de la page lorsqu'on clique sur le bouton
      addTask(); // Appel de la fonction pour ajouter une tâche
      saveTasks(); // Sauvegarder la liste de tâches après chaque ajout
  });

  // Gestionnaire d'événement pour le bouton "Modifier"
  $(document).on('click', '.edit-btn', function() {
      var listItem = $(this).closest('li'); // Sélectionne l'élément parent de bouton cliqué (la tâche)
      var taskText = listItem.find('.task-text').text(); // Récupère le texte de la tâche
      var newTaskText = prompt('Modifier la tâche:', taskText); // Boîte de dialogue pour modifier la tâche
      if (newTaskText !== null) {
          listItem.find('.task-text').text(newTaskText); // Met à jour le texte de la tâche
          saveTasks(); // Sauvegarder la liste de tâches après chaque modification
      }
  });

  // Gestionnaire d'événement pour le bouton "Supprimer"
  $(document).on('click', '.delete-btn', function() {
      $(this).closest('li').remove(); // Supprime l'élément parent du bouton cliqué (la tâche)
      saveTasks(); // Sauvegarder la liste de tâches après chaque suppression
  });


  // Crée une nouvelle ligne de tableau avec les détails de la tâche
  

$('#tasksBody').append(tableRow); // Ajoute la ligne au corps du tableau
  // Fonction pour ajouter une tâche
  function addTask() {
      var task = $('#insert').val(); // Récupère la valeur du champ de saisie
      var date = $('#date').val(); // Récupère la valeur du champ de date
      var filtre1 = $('#option1').val(); // Récupère la valeur du champ de saisie
      var filtre2 = $('#option2').val();

      // Vérifie si le champ de saisie est vide
      if(task.trim() === '') {
          $('#Alerte').text('Veuillez entrer une tâche').fadeIn(); // Affiche un message d'alerte
          setTimeout(function() {
              $('#Alerte').fadeOut(); // Masque le message d'alerte après 2 secondes
          }, 2000);
          return; // Arrête la fonction si le champ de saisie est vide
      }

      // Crée un élément de liste avec le texte de la tâche, la date et les boutons "Modifier" et "Supprimer"
      var listItem = $('<li>').html('<span class="task-text">' + task + ' - ' + date + ' - ' +filtre1 +  ' - ' + filtre2 + '</span>' +
          '<button class="edit-btn">Modifier</button>' +
          '<button class="delete-btn">Supprimer</button>');
      $('#liste').append(listItem); // Ajoute l'élément à la liste
  }

  // Fonction pour sauvegarder la liste de tâches dans localStorage
  function saveTasks() {
      var tasks = []; // Initialise un tableau vide pour stocker les tâches
      $('.task-text').each(function() { // Parcourt chaque élément de texte de tâche
          tasks.push($(this).text()); // Ajoute le texte de la tâche au tableau
      });
      localStorage.setItem('tasks', JSON.stringify(tasks)); // Convertit le tableau en chaîne JSON et le sauvegarde dans localStorage
  }

  // Fonction pour charger la liste de tâches depuis localStorage
  function loadTasks() {
      var tasks = JSON.parse(localStorage.getItem('tasks')); // Récupère les tâches depuis localStorage et les convertit en tableau
      if (tasks) { // Vérifie si des tâches ont été trouvées dans localStorage
          tasks.forEach(function(task) { // Parcourt chaque tâche dans le tableau
              var listItem = $('<li>').html('<span class="task-text">' + task + '</span>' +
                  '<button class="edit-btn">Modifier</button>' +
                  '<button class="delete-btn">Supprimer</button>');
              $('#liste').append(listItem); // Ajoute chaque tâche à la liste
          });
      }
  }
});
