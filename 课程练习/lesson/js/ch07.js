var fun = function(obj){
    var str="赵钱孙李周吴郑王冯陈楮卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜";
    var brr=str.split('');
    for(var i in brr){
        if(i==31 && obj!=brr[i]){
            console.log("该姓氏不存在");
            break;
        } 
        if(i<=31 && obj==brr[i]){
            console.log(i);
            if(i==0){
                console.log("该姓氏之前姓氏不存在");
            }else{
                console.log(str.substr(0,i));
            }
            break; 
        }  
    }
}
fun("黄");
fun("赵")
fun("卫");