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
}]);

// ==================================================================
// ============================== CRUD ==============================
// ==================================================================
crudApp.controller("crudCtrl", ['$scope','$http', function($scope,$http){
    // CREATE
    $scope.insertInfo = function(info){
    $http.post('databaseFiles/insertDetails.php',
        {
            "name":info.name,
            "email":info.email,
            "address":info.address,
            "gender":info.gender
        }).then(function(data){
            getInfo();
            $('#empForm').toggleClass('hidden');
        });
    }

    // READ
    getInfo();
    function getInfo(){
        // Sending request to EmpDetails.php files
        $http.get('databaseFiles/empDetails.php').then(function(response){
            // Stored the returned data into scope
            $scope.details = response.data;
        });
    }

    // UPDATE
    // data recovery
    $scope.currentUser = {}; // We need some info and display the form
    $scope.editInfo = function(info){
        $scope.currentUser = info;
    }
    // update function
    $scope.UpdateInfo = function(info){
        $http.post('databaseFiles/updateDetails.php',{"id":info.emp_id,"name":info.emp_name,"email":info.emp_email,"address":info.emp_address,"gender":info.emp_gender}).then(function(data){
            getInfo();
            $('#editForm').addClass('hidden');
            alert('Le compte a bien été mis à jour');
        });
    }

    // DELETE
    $scope.deleteInfo = function(info){
        $http.post('databaseFiles/deleteDetails.php',{"del_id":info.emp_id}).then(function(data){
            getInfo();
        });
    }

    // the end :3
}]);
