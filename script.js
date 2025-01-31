function showAnalysis(category) {
    const containers = document.querySelectorAll('.analysis-container');
    containers.forEach(container => {
        container.style.display = 'none';
    });
    document.getElementById(category).style.display = 'grid';

    // Actualizar el estado activo de los botones
    const buttons = document.querySelectorAll('.menu-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`button[onclick="showAnalysis('${category}')"]`).classList.add('active');
}
