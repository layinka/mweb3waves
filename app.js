// var WavesKeeper=WavesKeeper||null;

angular.module('introApp', [])
  .controller('ListController', function() {
    var list = this;
    list.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}];
 
    list.addTodo = function() {
      list.todos.push({text:list.todoText, done:false});
      list.todoText = '';
    };
 
    list.remaining = function() {
      var count = 0;
      angular.forEach(list.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    list.archive = function() {
      var oldTodos = list.todos;
      list.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) list.todos.push(todo);
      });
    };


    list.authFunc = function () {
        const authData = { data: "Auth on my site" };
        if (WavesKeeper) {
            WavesKeeper.auth( authData )
            .then(auth => {
                console.log( auth ); //displaying the result on the console
                /*...processing data */
            }).catch(error => {
                console.error( error ); // displaying the result on the console
                /*...processing errors */
            })
        } else {
            alert("To Auth WavesKeeper should be installed.");
        }
    }

  });