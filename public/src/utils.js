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
    //退出登录
    $('.logout').on('click',function(){
        $.ajax({
            url:'/api/employee/employeeLogout',
            type:'get',
            success:function(info){
                if(info.success){
                    location.href = '/login.html'
                }
            }
        })
    })

    //下拉菜单
    $('.navs a + ul').prev().on('click',function(){
        $(this).next().slideToggle();
    })
    
});