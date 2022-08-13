    function fun(a){

    document.getElementById("mainone").value=a;
    }
    
    function fun1(a){
    var b=prompt("Enter the Image Name");
    document.getElementById("mainone").value=a+b;
    }
    
    function fun2(a){
    var d=prompt("Enter the Container ID");
    document.getElementById("mainone").value=a+d;
    // document.getElementById("mainone").value=a+" "+d+" "+c
    }
    
    function fun3(a){
    var e=prompt("Enter the Container id");
    document.getElementById("mainone").value=a+e;
    }
    
    function fun4(){
    var id=prompt("Enter the OS Image Name");
    var command="docker run -it "+id;
    
    var k="gnome-terminal --command=\"bash -c \'"+command+";$SHELL\'\"";
    document.getElementById("mainone").value=k;
    }
    function fun5(){
    var id=prompt("Enter the Container Name");
    var command="docker attach "+id;
    var k="gnome-terminal --command=\"bash -c \'"+command+";$SHELL\'\"";
    document.getElementById("mainone").value=k;
    }