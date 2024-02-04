function handlePhotoInput() {
    const photoInput = document.getElementById('photoInput');
    const previewImage = document.getElementById('previewImage');

    // Check if a file is selected
    if (photoInput.files.length > 0) {
        const selectedPhoto = photoInput.files[0];

        // Display the selected photo
        previewImage.src = URL.createObjectURL(selectedPhoto);
        previewImage.style.display = 'block';

        // Save the photo (you can implement your saving logic here)
        savePhoto(selectedPhoto);
    } else {
        alert('Please select a photo.');
    }
}


function savePhoto(photo) {
    // Implement your photo saving logic here
    // For example, you can upload it to a server or perform other operations
    console.log('Photo saved:', photo.name);
}