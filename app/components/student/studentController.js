mainApp.controller('studentController', function($scope) {
  $scope.student = {
      firstName: "Aaron",
      lastName: "Meaney",

      fullName: function() {
         var studentObject;
         studentObject = $scope.student;
         return studentObject.firstName + " " + studentObject.lastName;
      }
   };
});