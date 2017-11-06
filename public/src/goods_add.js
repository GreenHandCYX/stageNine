define(['jquery','template','./utils','uploadify'],function($,template){
    $('#upfile').uploadify({
        //上传按钮文本
        buttonText:'',
        //上传按钮高宽
        width:120,
        height:120,
        //file表单的name属性
        fileObjName:'pic1',
        //设置上传进度条样式
        // itemTemplate:'',
        //使用flash
        swf:'/public/assets/uploadify/uploadify.swf',
        //上传地址
        uploader:'/api/product/addProductPic',
        //上传成功的回调函数
        onUploadSuccess:function(file,data) {
            //file指上传的文件,data指请求返回的数据
            console.log(file);
            console.log(data);
        }
    })


    //添加数据
    $('form').on('submit',function() {
        var _this = $(this);
        $.ajax({
            url:'/api/product/addProduct',
            type:'post',
            data:_this.serialize(),
            success:function(info){
                location.href = '/goods_list.php'
            }
        })
        return false;
    })

    //获取品牌列表
    $.ajax({
        url:'/api/category/querySecondCategoryPaging',
        type: 'get',
        data: {page: 1, pageSize: 100},
        success: function (info) {
            var html = template('brands',info);
           $('.brand').append(html)
        }
    })
})