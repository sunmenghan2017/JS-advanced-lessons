var a=45;
    if(54==a){
        //判断
    }

    //++x与x++

    //字符串拼接

    //逻辑短路

    //函数参数

    //ES6中设置函数默认值
    //

    //arguments获取函数调用时传入的实参，类数组类型
    function fun1(x){
        for(var i=0;i<=arguments.length;i++){
            console.log(arguments[i]);
        }

    }



    //输出调用者（函数）信息
    function fn1(){
        console.log(fn1.caller);
    }
    function fn2(){
        fn1();
    }
    fn2();

    //callee常用于递归调用自身
    /*return n*arguments.callee(n-1);
    return   n*fun(n-1);*/
    
    //
    var objA={"objName":"AAA"};
    var objB={"objName":"BBB"};
    objA.foo=function(){
        console.log();
    }
    objA.foo();
    objA.foo.call(objB);

    //call方法调用一个函数，其具有一个指定的this值和分别提供的参数，改变了原有的参数

    //函数对象属性之 prototype
    //获取对象的原型。每一个构造函数都有一个prototype属性，指向另一个对象。
    //这个对象的所有属性和方法，都会被构造函数的实例继承。
    function Man(name, age) {
        this.name = name;
        this.age = age;
    }
    Man.prototype.sex = "M";
    Man.prototype.sayHi = function () {
        console.log("Hi,i'm",this.name);
    };
    var li = new Man("Leo", 10);
    li.sayHi();//
    console.log(li.sex);//M

    Man.prototype.isStrong = true;
    console.log(li.isStrong);//true

    //apply

    // Part 22222222222222222 函数作为返回值输出
    var x=12;
    var obj = {
        x:34,
        fun2:function(){
            console.log(this.x,this);
        }
    };
    var fun1 = function () {
        return function fun2() {
            return this.x;//若改为 return this;
        }
    };
    obj.fun3 = fun1;
    obj.fun4 = fun1();
    console.log("输出：",obj.fun3());//输出什么
    console.log("输出：",obj.fun3()());//输出什么
    console.log("输出：",obj.fun4());//输出什么

    //高阶函数
    
