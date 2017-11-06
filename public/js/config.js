//公用配置
require.config({
    baseUrl:'/public',
    paths:{
        jquery:'assets/jquery/jquery.min',
        template:'assets/artTemplate/template-web',
        uploadify: 'assets/uploadify/jquery.uploadify.min'
    },
    shim:{
        //处理不支持amd的第三方模块
        uploadify: {
            // 1、通过 exports 可以将非模块的方法或属性
            // 公开出来（相当于标准模块中 return 的作用）
            // exports: 
            
            // 2、通过 deps 可以依赖其它模块
            deps: ['jquery']
        },
    }
})




