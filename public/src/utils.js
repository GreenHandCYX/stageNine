//公用功能
define(['jquery'], function($) {
    //检测是否登陆
    $.ajax({
        url:'/api/employee/checkRootLogin',
        type:'get',
        success:function(info){
            if(info.error){
                location.href = '/login.html'
            }
        }
    })
    
});