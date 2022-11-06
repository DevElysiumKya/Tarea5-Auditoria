function root (){
    document.getElementById('root').style.display = "flex";
    document.getElementById('rout').style.display = "none";
    document.getElementById('h3-esq').style.background = "var(--bg2)";
    document.getElementById('h3-con').style.background = "var(--bg3)";
}
function rout (){
    document.getElementById('root').style.display = "none";
    document.getElementById('rout').style.display = "flex";
    document.getElementById('h3-con').style.background = "var(--bg2)";
    document.getElementById('h3-esq').style.background = "var(--bg3)";
}