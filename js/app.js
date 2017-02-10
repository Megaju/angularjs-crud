// Application module
var crudApp = angular.module('crudApp',[]);

// Controllers
crudApp.controller("mainCtrl", ['$scope', function($scope){
    // Site title
    $scope.sitetitle = "CRUD AngularJS";

    // Display/Hidden forms
    $scope.formToggle = function(form){
        if(form == '#editForm'){
            if($(form).hasClass('hidden')){
                $(form).removeClass('hidden');
            }
        } else {
            $(form).toggleClass('hidden');
        }
    }
    $scope.abortUpdate = function(form){
        $(form).addClass('hidden');
    }

    // Update message
    $scope.updateMsg = function(name){
        alert('The ' + name + '\'s account has updated with succes !');
    }
}]);

// ==================================================================
// ============================== CRUD ==============================
// ==================================================================
crudApp.controller("crudCtrl", ['$scope','$http', function($scope,$http){
    // CREATE
    $scope.insertInfo = function(info){
    $http.post('databaseFiles/insertUsers.php',
        {
            "name":info.name,
            "email":info.email,
            "address":info.address,
            "gender":info.gender
        }).then(function(data){
            getInfo();
            $('#insForm').toggleClass('hidden');
        });
    }

    // READ
    getInfo();
    function getInfo(){
        // Sending request to EmpUsers.php files
        $http.get('databaseFiles/empUsers.php').then(function(response){
            // Stored the returned data into scope
            $scope.users = response.data;
        });
    }

    // UPDATE
    // data recovery
    $scope.currentUser = {};
    $scope.editInfo = function(info){
        $scope.currentUser = info;
    }
    // update function
    $scope.UpdateInfo = function(info){
        $http.post('databaseFiles/updateUsers.php',{"id":info.id,"name":info.name,"email":info.email,"address":info.address,"gender":info.gender}).then(function(data){
            getInfo();
            $('#editForm').addClass('hidden');
        });
    }

    // DELETE
    $scope.deleteInfo = function(info){
        $http.post('databaseFiles/deleteUsers.php',{"del_id":info.id}).then(function(data){
            getInfo();
        });
    }

    // the end :3
}]);
