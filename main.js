names=[]
function submit(){
    var name1=document.getElementById("PIN").value
    var name2=document.getElementById("SIN").value
    var name3=document.getElementById("THIN").value
    var name4=document.getElementById("FIN").value
    names.push(name1)
    names.push(name2)
    names.push(name3)
    names.push(name4)
    console.log(names)
    document.getElementById("DINE").innerHTML=names
    document.getElementById("BIN").style.display="none"
    document.getElementById("BIND").style.display="inline-block"
}
function sort() {
    names.sort()
    document.getElementById("DINE").innerHTML=names
}