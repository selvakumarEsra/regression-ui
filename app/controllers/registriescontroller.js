App.controller('RegistriesController',function($scope,$http,$location){

    $scope.sortType     = 'status';
    $scope.sortReverse  = false;
    $scope.searchLibrary   = '';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab;
    }

    $scope.isActive = function(currentView){
        return (currentView == $scope.currentTab);
    }


        $http.get('registries.json').then(function(res){
        $scope.registries = res.data.registries;
        $scope.results = $scope.registries.results;
        $scope.statistics = res.data.statistics;
    });
});