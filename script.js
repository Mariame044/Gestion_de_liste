$(document).ready(function() {
  // Cette fonction est appelée lorsque le DOM est entièrement chargé et prêt à être manipulé

  // La fonction `loadTasks()` est appelée au chargement de la page pour récupérer 
//   les tâches stockées dans le localStorage et les afficher dans la liste.

  loadTasks();    

  
  // Gestionnaire d'événement pour le bouton "Add"
  $('#input-button').on('click', function(event) {
      event.preventDefault(); // Empêche le rechargement de la page lorsqu'on clique sur le bouton
      addTask(); // Appel de la fonction pour ajouter une tâche
      saveTasks(); // Sauvegarder la liste de tâches après chaque ajout
  });
//   $(document).on('change', '.task-checkbox', function() {
//     var listItem = $(this).closest('li'); // Sélectionne l'élément parent de la case à cocher
//     listItem.toggleClass('completed'); // Ajoute ou supprime la classe "completed" pour indiquer que la tâche est complétée
//     saveTasks(); // Sauvegarde l'état de la tâche après chaque changement
// });

  // Gestionnaire d'événement pour le bouton "Modifier"
  $(document).on('click', '.edit-btn', function() {
    var listItem = $(this).closest('li'); // Sélectionne l'élément parent de bouton cliqué (la tâche)
    var taskName = listItem.find('.task-Name').text(); // Récupère le texte de la tâche
    var taskDate = listItem.find('.task-date').text(); // Récupère la date de la tâche

    var newTaskName = prompt('Modifier la tâche:', taskName); // Boîte de dialogue pour modifier la tâche
    var newTaskDate = prompt('Modifier la date de la tâche:', taskDate); // Boîte de dialogue pour modifier la date de la tâche

    if (newTaskName !== null && newTaskDate !== null) {
        listItem.find('.task-Name').text(newTaskName); // Met à jour le texte de la tâche
        listItem.find('.task-date').text(newTaskDate); // Met à jour la date de la tâche
        saveTasks(); // Sauvegarder la liste de tâches après chaque modification
    }
});

  // Gestionnaire d'événement pour le bouton "Supprimer"
  $(document).on('click', '.delete-btn', function() {
    $(this).closest('li').remove(); // Supprime l'élément parent du bouton cliqué (la tâche)
    saveTasks(); // Sauvegarder la liste de tâches après chaque suppression
});

  
  
$('#tasksBody').append(tableRow); // Ajoute la ligne au corps du tableau
  // Fonction pour ajouter une tâche
  function addTask() {
      var task = $('#insert').val(); // Récupère la valeur du champ de saisie
      var date = $('#date').val(); // Récupère la valeur du champ de date
      var filtre1 = $('#option1').val(); // Récupère la valeur du champ de saisie
      var filtre2 = $('#option2').val();
      
// Vérifie si tous les champs obligatoires sont remplis
if (task === '' || date === '' || filtre1 === '' || filtre2 === '') {
    // Affiche un message d'alerte
    alert('Veuillez remplir tous les champs obligatoires.');
    return; // Arrête la fonction si un champ obligatoire est vide
}

      

      // Crée un élément de liste avec le texte de la tâche, la date et les boutons "Modifier" et "Supprimer"
    //   var listItem = $('<li>').html('<span class="task-text">' + task + ' - ' + date + ' - ' +filtre1 +  ' - ' + filtre2 + '</span>' +
    //       '<button class="edit-btn">Modifier</button>' +
    //       '<button class="delete-btn">Supprimer</button>');
          
    //   $('#liste').append(listItem); // Ajoute l'élément à la liste
    var listItem = $('<li>').html('<span class="task-Name">' + task + '</span>' +
    '<span class="task-date">' + date + '</span>' +
    '<span class="task-priority">' + filtre1 + '</span>' +
    '<span class="task-status">' + filtre2 + '</span>' +
    '<button class="edit-btn">Modifier</button>' +
    '<button class="delete-btn">Supprimer</button>');

$('#liste').append(listItem); // Ajoute l'élément à la liste
  

  }
  // Fonction pour sauvegarder la liste de tâches dans localStorage
function saveTasks() {
    var tasks = []; // Initialise un tableau vide pour stocker les tâches
    $('#liste li').each(function() { // Parcourt chaque élément de la liste des tâches
        var taskName = $(this).find('.task-Name').text(); // Récupère le nom de la tâche
        var taskDate = $(this).find('.task-date').text(); // Récupère la date de la tâche
        var taskPriority = $(this).find('.task-priority').text(); // Récupère la priorité de la tâche
        var taskStatus = $(this).find('.task-status').text(); // Récupère le statut de la tâche
        // Crée un objet contenant les informations de la tâche
        var taskObject = {
            name: taskName,
            date: taskDate,
            priority: taskPriority,
            status: taskStatus
        };
        tasks.push(taskObject); // Ajoute l'objet tâche au tableau
    });
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Convertit le tableau en chaîne JSON et le sauvegarde dans localStorage
}

// Fonction pour charger la liste de tâches depuis localStorage
function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem('tasks')); // Récupère les tâches depuis localStorage
    if (tasks) { // Vérifie si des tâches ont été trouvées dans localStorage
        tasks.forEach(function(task) { // Parcourt chaque tâche dans le tableau
            var listItem = $('<li>').html('<span class="task-Name">' + task.name + '</span>' +
                '<span class="task-date">' + task.date + '</span>' +
                '<span class="task-priority">' + task.priority + '</span>' +
                '<span class="task-status">' + task.status + '</span>' +
                '<button class="edit-btn">Modifier</button>' +
                '<button class="delete-btn">Supprimer</button>');
            $('#liste').append(listItem); // Ajoute chaque tâche à la liste
        });
    }
}

 
});
