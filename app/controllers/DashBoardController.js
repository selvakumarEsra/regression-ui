App.controller('DashboardController',function($scope,$http,$location){

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab;
    }

});