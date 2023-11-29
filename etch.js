document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById('grid-container');
    const resetButton = document.createElement('button');
    resetButton.textContent = 'New Grid';
    document.body.insertBefore(resetButton, document.body.firstChild);

    function createGrid(size) {
        // Clear existing grid
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }

        // Calculate the size of each square to maintain the original total size
        const squareSize = (gridContainer.offsetWidth - size + 1) / size;

        // Create a new grid
        for (let i = 0; i < size * size; i++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.style.width = `${squareSize}px`;
            gridSquare.style.height = `${squareSize}px`;
            gridContainer.appendChild(gridSquare);

            gridSquare.addEventListener('mouseover', function () {
                gridSquare.style.backgroundColor = 'black';
            });
        }
    }

    resetButton.addEventListener('click', function () {
        // Prompt user for input
        let newSize = prompt('Enter the number of squares per side (max: 100):');
        newSize = parseInt(newSize);

        // Validate input
        if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
            createGrid(newSize);
        } else {
            alert('Please enter a valid number between 1 and 100.');
        }
    });

    // Initial grid creation
    createGrid(16); // Initial size (16x16)
});
