// Application module
var crudApp = angular.module('crudApp',[]);

// Controller
crudApp.controller("DbController",['$scope','$http', function($scope,$http){
    // Site title
    $scope.sitetitle = "AngularJS CRUD Operations Demo";

    // Function to get employee details from the database
    getInfo();
    function getInfo(){
        // Sending request to EmpDetails.php files
        $http.get('databaseFiles/empDetails.php').then(function(response){
            // Stored the returned data into scope
            $scope.details = response.data;
        });
    }
}]);
