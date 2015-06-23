App.controller('RegistriesController',function($scope,$http,$location){

    $scope.sortType     = 'status';
    $scope.sortReverse  = false;
    $scope.searchRegistry   = '';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab;
    }

    $scope.isActive = function(currentView){
        return (currentView == $scope.currentTab);
    }


    $scope.onClickBadge = function (registry) {
        $scope.searchRegistry = registry;
    }


    $http.get('registries.json').then(function(res){
        $scope.registries = res.data.registries;
        $scope.results = $scope.registries.results;
        $scope.statistics = res.data.statistics;
    });
});