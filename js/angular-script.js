// Application module
var crudApp = angular.module('crudApp',[]);

// Controller
crudApp.controller("DbController",['$scope','$http', function($scope,$http){
    // Site title
    $scope.sitetitle = "AngularJS CRUD Operations Demo";

    // Display/Hidden forms
    $scope.formToggle = function(form){
        if(form == '#editForm'){
            if($(form).hasClass('hidden')){
                $(form).removeClass('hidden');
            } else {
                // nothing
            }
        } else {
            $(form).toggleClass('hidden');
        }
    }
    $scope.abortUpdate = function(form){
        $(form).addClass('hidden');
    }

    // ==================================================================
    // ============================== CRUD ==============================
    // ==================================================================
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
    $scope.currentUser = {}; // We need some info and display the form
    $scope.editInfo = function(info){
        $scope.currentUser = info;
    }

    // DELETE

    // the end :3
}]);
