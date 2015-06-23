App.controller('MainController',function($scope,$http,$location,ngDialog){
    $scope.currentTab = 'dashboard.html';


    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab;
    }

    $scope.isActive = function(currentView){
        return (currentView == $scope.currentTab);
    }

    $scope.aboutDialog = function () {
        var dialog = ngDialog.open({
            template:
            '<img src="assets/img/favicon.png" class="img-circle" alt="Cinque Terre" width="200" height="200"><p>' +
            'Regression pack for SCPP Team</p>' +
            '<div class="ngdialog-buttons"></div>',
            plain: true
        });
        dialog.closePromise.then(function (data) {
            console.log('ngDialog closed' + (data.value === 1 ? ' using the button' : '') + ' and notified by promise: ' + data.id);
        });
    };

});