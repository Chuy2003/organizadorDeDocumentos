
document.getElementById('x').addEventListener('click', ()=>{
    document.getElementById('publi').classList.toggle('none')
});

document.getElementById('section1Button').addEventListener('click', ()=>{
    document.getElementById('viwer1').classList.toggle('section1_animacion');
    document.getElementById('viwer2').classList.toggle('none');
    boton = document.getElementById('section1Button').value;
    if (boton == 'Documentacion') {
        document.getElementById('section1Button').value = 'Volver'; 
    } else {
        document.getElementById('section1Button').value = 'Documentacion'; 
    }
});

