define(['jquery','template','./utils'],function($,template){



    //用正则处理浏览器地址来获取当前页码
    
    //获取请求地址
    var search = location.search || '';
    //设置正则
    var reg = /\?[a-z]+=(\d+)/;
    //通过正则的exec方法获取页码
    var page =reg.exec(search) && reg.exec(search)[1] || 1; 

    //每页显示的数据条数
    var size = 2;


    $.ajax({
        url:'/api/product/queryProductDetailList',
        typr:'get',
        data:{page:page,pageSize:size},
        success:function(info){
            //渲染商品列表
            console.log(info)
            var html = template('tpl',info);
            $('.goods').html(html);

            //数据总条数
            var total = info.total;
            
            //总页码
            var pageLen = Math.ceil(total/size);

            //渲染分页列表
            var htmlPage = template('page',{
                pageLen:pageLen,
                page:page
            })
            $('.pagination').html(htmlPage)
        }
    })
})