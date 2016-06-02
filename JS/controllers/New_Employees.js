 app.controller('New_Employees', function(
  										$scope,
                                        SessionFactory,
                                        EmployeesFactory,
                                        md5,
                                        UINotification
  									){

    $scope.pk='';

    $scope.titles={};
    $scope.level_title={};
    $scope.department={};

    $scope.employee={
        employee_id:'',
        first_name:'',
        middle_name:'',
        last_name:'',
        titles_pk:'',
        business_email_address:'',
        email_address:'',
        departments_pk:'',
        levels_pk:''
    };

    $scope.filter={};

    init();

    function init(){
        var promise = SessionFactory.getsession();
        promise.then(function(data){
            var _id = md5.createHash('pk');
            $scope.pk = data.data[_id];

            get_positions();
            get_department();
            get_levels();

            
        })
        .then(null, function(data){
            window.location = './login.html';
        });
    }

    function get_positions(){
        var promise = EmployeesFactory.get_positions();
        promise.then(function(data){
            $scope.titles.data = data.data.result;
        })
        .then(null, function(data){
            
        });
    }

    function get_department(){
        var promise = EmployeesFactory.get_department();
        promise.then(function(data){
            $scope.department.data = data.data.result;
        })
        .then(null, function(data){
            
        });
    }

    function get_levels(){
        var promise = EmployeesFactory.get_levels();
        promise.then(function(data){
            $scope.level_title.data = data.data.result;
        })
        .then(null, function(data){
            
        });
    }

    $scope.submit_employee = function(){

        var promise = EmployeesFactory.submit_employee($scope.employee);
        promise.then(function(data){
            

            UINotification.success({
                                    message: 'You have successfully submitted a new employee.', 
                                    title: 'SUCCESS', 
                                    delay : 5000,
                                    positionY: 'top', positionX: 'right'
                                });

        })
        .then(null, function(data){
            
            UINotification.error({
                                    message: 'An error occured, please try again.', 
                                    title: 'ERROR', 
                                    delay : 5000,
                                    positionY: 'top', positionX: 'right'
                                });
        });

        

            $scope.employee={
                employee_id:'',
                first_name:'',
                middle_name:'',
                last_name:'',
                titles_pk:'',
                business_email_address:'',
                email_address:'',
                departments_pk:'',
                levels_pk:''
            };
    }

});