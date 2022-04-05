document.addEventListener('keydown',logkey,false);
function logkey(e)
{
    
    if((e.keyCode>=65 && e.keyCode<=90)||(e.keyCode>=96 && e.keyCode<=105))
    {
        document.getElementsByTagName("p").item(0).innerHTML = document.getElementsByTagName("p").item(0).innerHTML +e.key;
    }
}
