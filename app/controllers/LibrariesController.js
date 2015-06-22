App.controller('LibrariesController',function($scope,$http,$location){

    $scope.sortType     = 'name';
    $scope.sortReverse  = false;
    $scope.searchLibrary   = '';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab;
    }

    $scope.isActive = function(currentView){
        return (currentView == $scope.currentTab);
    }


        $http.get('libraries-compare.json').then(function(res){
        $scope.dependencies = res.data.dependencies;
        $scope.results = $scope.dependencies.results;
        $scope.statistics = res.data.statistics;
    });
});