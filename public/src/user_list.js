define(['jquery','template','./utils'], function($,template) {
//显示用户列表
  $.ajax({
    url:'/api/user/queryUser',
    type: 'get',
    data: {page: 1, pageSize: 100},
    success: function (info) {
        var html = template('userLis',info);
       $('.table tbody').html(html)
    }
  })
  //切换状态
  $('.table tbody').on('click','.btn',function(){
      var _this = $(this);
      var td = $(this).parent();
      var id = td.attr('data-id');
      var status =td.attr('data-status');

        // 1 传 0
        // 0 传 1
        // 0 和 1 切换
        status = Math.abs(status - 1);

      $.ajax({
        url:'/api/user/updateUser',
        type: 'post',
        data: {id: id, isDelete: status},
        success: function (info) {
            if(status == 1){
                td.prev().text('是')
                _this.text('启用')
            }else{
                td.prev().text('否')
                _this.text('禁用')
            }


            td.attr('data-status', status);
            _this.toggleClass('btn-warning btn-info')
        }
      })
  })
});