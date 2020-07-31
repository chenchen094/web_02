var preURL = "http://ajax.frontend.itheima.net"
$.ajaxPrefilter(function(options){
    options.url= preURL  +options
})