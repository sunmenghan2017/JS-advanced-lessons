//基本数据类型在操作过程中会有自动装箱过程
    //生成临时对象，在使用完成之后会自动释放
    var num=10;
    num.toString();

    var numObject=new Number(num);
    numObject.toString();

    num.p=10;
    var t=num.p;
    console.log(t);

    //var num1=11.26;
    //num1.toFixed(1);
    //num1.toFixed(2);

    //Number构造器属性（静态属性）
    Number.MAX_VALUE
    Number.MIN_VALUE
    Number.NaN
    Number.NEGATIVE_INFINITY
    Number.POSITIVE_INFINITY

    //Number原型方法(Number对象继承的方法）
    // Number.prototype.toFixed();
    // Number.prototype.toPrecision();
    // Number.prototype.toString();
    // Number.prototype.toExponential();

    var n1 = 12345.6789;
    console.log(n1.toFixed(2));
    console.log(n1.toPrecision(2));
    console.log(n1.toString());
    console.log(n1.toExponential(2));

    //基本数据类型，变量__proto__属性==变量的构造函数prototype
    //num.__proto__ == Number.prototype
    var num2 =20;
    console.log(num2.__proto__);
    console.log(Number.prototype);

    //构造器方法
    String.fromCharCode(97,98,99);

    //
    console.log(NaN === NaN);
    console.log(isNaN("12,3"));
    console.log(Math.floor(3.8));
    console.log(Math.floor(-3.8));
    console.log(Math.ceil(3.2));
    console.log(Math.ceil(-3.2));
    console.log(Math.round(-3.2));
    console.log(Math.round(-3.5));
    console.log(Math.round(-3.8));

    //Part 000000000
    //字符串比较
    console.log("A" > "a");
    console.log("B".localeCompare("A")); //考虑本地化的字符排序，返回0或非0
    console.log("A".localeCompare("A")); //考虑本地化的字符排序，返回0或非0
    console.log("A".localeCompare("B"));

    //字符串链接
    var a = "abc";
    var b = "def";
    var c = a+b;

    //Part 111111111 字符串提取
    //String.prototype.charAt(pos);
    //String.prototype.charCodeAt(pos);
    //String.prototype.slice(start,end?);
    //String.prototype.substr(start,length?)
    //String.prototype.substring(start,end?);
    //String.prototype.split(separator?,limit?);

    //字符串常用方法，字符串的方法源于String.prototype

    var char1="abcde";
    var numObject=new String(char1);
    numObject.charAt(2);//返回特定位置字符

    var str2 = "abcdef";
    str2.slice(2);
    str2.slice(1,-1);

    var str3 = "abcdef".slice(2,5);
    var str4 = "abcdef".slice(-2);
    var str5 = "abcdef".slice(2,-2);
    //截取字符串，返回数组
    var arr6 = "abcdef".split("c");//返回数组,将字符串作为数组元素生成数组
    var arr7 = "abcdef".split("c",1);//
    var arr8 = "abcdef".split("c",2);

    var str9 = "abcdef".charAt(2);
    var str10 = "abcdef".charCodeAt(3);
    var str11 = "abcdefabcdef".indexOf("d",1);
    var str12 = "abcdefabcdef".indexOf("d",4);//从第4个开始找

    //substr 与 substring的区别
    var str13 = "abcdefghijklmn";
    var str14 = str13.substr(2,5);//后一个参数代表长度
    console.log(str13,str14);//str13 未受到破坏

    var str15 = str13.substring(2,5);//后一个参数代表第几个end
    console.log(str13,str15);//str13 未受到破坏



    //Part 222222222 字符串变换
    //String.prototype.trim( );
    //String.prototype.concat(str1?,str2?);
    //String.prototype.toLowerCase( );
    //String.prototype.toLocaleLowerCase( );
    //String.prototype.toUpperCase( );
    //String.prototype.toLocaleUpperCase( );
    var str16 = "aaa".concat("bbb");//返回字符串
    var str17 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串
    var str18 = "abcDEF".toLowerCase();
    var str19 = "abcDEF".toUpperCase();

    //Part 333333333 检索和比较
    //String.prototype.indexOf(searchingString,position?);
    //String.prototype.lastIndexOf(searchingString,position?);
    //String.prototype.localeCompare(other);
    var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);
    var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");

    //Part 444444444 与正则相关的方法 详细内容参见正则表达式章节
    //String.prototype.search(regexp);
    //String.prototype.match(regexp);
    //String.prototype.replace(regexp);
