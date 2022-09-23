// // Obtain all the image Elements in the Document
// let pendingImages = document.querySelectorAll('img[data-src]');

// const imgOptions = {
//     threshold: 1,
//     rootMargin: '0px 0px 300px 0px'
// };

// // Create a function to replace and remove the data-src attribute with an src attribute upon loading an image
// const loadImages = (image) => {
//     image.setAttribute('src', image.getAttribute('data-src'));
//     image.onload = () => {
//         image.removeAttribute('data-src');
//     };
// };

// // Loop through images and load them
// pendingImages.forEach((img) => {
//     loadImages(img);
// });

// Create a condition to display the real image when it comes into the viewport, otherwise, display the placeholder.
// if ('IntersectionObserver' in window) {
//     const observer = new IntersectionObserver((items, observer) => {
//       items.forEach((item) => {
//         if (item.isIntersecting) {
//           loadImages(item.target);
//           observer.unobserve(item.target);
//         }
//       });
//     });
//     pendingImages.forEach((img) => {
//       observer.observe(img);
//     });
//   } else {
//     pendingImages.forEach((img) => {
//       loadImages(img);
//     });
//   }

// Alternate way to do the above:

const images = document.querySelectorAll('[data-src]'); // Putting anything in square brackets locates attributes, even in CSS.

// Create a Function to retrieve all data-src attributes in document and convert them to normal src attributes
const preloadImage = (img) => {
    const imgSrc = img.getAttribute('data-src');
    if (!imgSrc) {
        return;
    }
    img.src = imgSrc;
}

// Create a function using Intersection Observer to loop through all loaded images and set them to lazy load
const imageView = new IntersectionObserver((entries, imageView) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            preloadImage(entry.target);
            imageView.unobserve(entry.target);
        }
    });
}, imgOptions);

images.forEach(image => {
    imageView.observe(image);
});