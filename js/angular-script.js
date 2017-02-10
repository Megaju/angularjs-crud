// Application module
var crudApp = angular.module('crudApp',[]);

// Controller
crudApp.controller("DbController",['$scope','$http', function($scope,$http){
    // Site title
    $scope.sitetitle = "AngularJS CRUD Operations Demo";

    // READ : Function to get employee details from the database
    getInfo();
    function getInfo(){
        // Sending request to EmpDetails.php files
        $http.get('databaseFiles/empDetails.php').then(function(response){
            // Stored the returned data into scope
            $scope.details = response.data;
        });
    }

    // Display/Hidden form
    $scope.formToggle = function(){
        $('#empForm').toggleClass('hidden');
    }

    // CREATE : Function to post employee details to the database
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

    // end
}]);
