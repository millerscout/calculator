window.calcHist=[]
window.calctemp=[]
function soma(a, b) {
    return a+b;
}
function subtracao(a, b) {
    return a-b;
}
function add(f) {
    calctemp.push(parseInt(document.getElementById('result').innerHTML))
    calcHist.push(parseInt(document.getElementById('result').innerHTML))
    Clear()
    window.calctemp.push(f)
    calcHist.push(f)
    Clear()
}
function equal(){
    var x=calctemp
    var nOne =null;
    var nTwo = null;
    var operator;
   

    var r;
    for(var y = 0; y < x.length; y++) {
     var atual= x[y];
        if(typeof(atual)==="function"){
            operator = atual;
            continue;
        }

        if(nOne == null){
            nOne= atual;
            continue;
        }
        if(nTwo== null){
            nTwo = atual;
        
        }


    }
    
        if (nTwo== null&&y==x.length){
                calcHist.push(parseInt(document.getElementById('result').innerHTML))
                nTwo= parseInt(document.getElementById('result').innerHTML)
                Clear();

            } 
        if(nTwo !=null && nOne !=null && operator !=null){
             r=operator (nOne, nTwo); console.log (r) 
        }
    window.calctemp=[]
    updateOnHist();
    return r;
}
function show(r) {
    var x = document.getElementById('result')
    x.innerHTML += r 
    
    
    
    
}

function Clear() {
    document.getElementById('result').innerHTML = ""
}

function imprimir() {
      print()
}

function updateOnHist(){
            document.getElementById("hist").innerHTML = "";

    for(var i = 0; i< calcHist.length;i++){
        var c = calcHist[i];
        if(typeof(c) === 'function'){
            var t = document.createElement("label")
            t.style.color = c.name==="soma"?'green': 'red';
            t.innerHTML = c.name==="soma"?'+': '-';
            document.getElementById("hist").innerHTML += t.outerHTML
            continue
        }
        
        var t = document.createElement("label")
        t.innerHTML = c  
        document.getElementById("hist").innerHTML += t.outerHTML;
    }
}



