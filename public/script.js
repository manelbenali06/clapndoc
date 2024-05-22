
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.img-fluid');

    images.forEach(image => {
        image.addEventListener('click', function () {
            // Vérifie si l'image est déjà agrandie
            if (this.classList.contains('img-enlarged')) {
                this.classList.remove('img-enlarged'); // Réduit l'image
            } else {
                // Réduit toutes les autres images agrandies
                images.forEach(img => img.classList.remove('img-enlarged'));
                this.classList.add('img-enlarged'); // Agrandit l'image cliquée
            }
        });
    });
});
