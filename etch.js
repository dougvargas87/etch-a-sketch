document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('grid-container');

    for (let i = 0; i < 16 * 16; i++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridContainer.appendChild(gridSquare);

        gridSquare.addEventListener('mouseover', function (){
            gridSquare.style.backgroundColor = 'black';
        });
    }
});