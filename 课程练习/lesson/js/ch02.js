   // NaN
   var x =  Number ( " xis021 " ); //试着转成Number类型
   console . log (x); // NaN
   isNaN (x); // true
   typeof  NaN ;

   console . log ( Math . log ( - 1 )); // NaN
   console . log ( Math . acos ( 2 )); // NaN
   console . log ( NaN  ===  NaN ); // false


   // Infinity与-Infinity
   var y1 =  2 / 0 ;
   console . log (y1); // Infinity
   var y2 =  - 2 / 0 ;
   console . log (y2); // -Infinity
   isFinite (y2); // false，非有限数
   isFinite ( 23 ); // true，有限数

   // 0与-0
   var z1 =  1 / Infinity ;
   console . log (z1); // 0
   var z2 =  - 1 / Infinity ;
   console . log (z2); // -0

//LS02.demo07
   //字符串常用操作
   var str =  " abc_def_ghi_jkl_mn " ;
   //转义字符\n \" \' \\
   console . log ( " abc \n defghi \\\n\' mn \' " );
   // str.split("_");
   // str.split("_",2);
   // str.concat("_opq");
   // str.substr(4,7);
   // str.substring(4,7);
   // str.slice(2);
   // str.slice(2,5);
   // str.slice(-2);
   // str.slice(2,-2);


       //装箱操作
       var str1="abcdef";
       var strObject=new String(str1);
       strObject.substr(0,2);
   
       //临时对象，使用完成之后会立即释放
       var str="test";
       str.p = 4;//设置临时对象属
       var t = str.p; // 临时对象已释放，再输出t时为undefin