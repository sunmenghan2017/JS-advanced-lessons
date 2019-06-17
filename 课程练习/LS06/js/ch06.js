function newclone(obj) {
    for (var i in obj) {
        switch(typeof obj[i]){
            case 'number': console.log(obj[i].toFixed(2));break;
            case 'string': console.log(obj[i].trim());break;
            case 'boolean': console.log(Number(obj[i]));break;
        } 
    } 
    return obj;   
}
var arr =new Array(1234.567,"  sunmenghan  ",true);
newclone(arr);