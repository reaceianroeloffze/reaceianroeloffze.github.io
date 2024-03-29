// Get all the data-src and data-srcset attributes present in document.
let pendingImages = document.querySelectorAll('source[data-srcset]');
let imagesToLoad2 = document.querySelectorAll('img[data-src]');

// specify an image threshold before loading and from what position from the start of each side of the viewport to start loading the real images.

const imgOptions = {
    threshold: 0,
    rootMargin: '0px 0px -100px 0px'
};

// Create a function to replace and remove the data-src attribute with an src attribute upon loading an image
const loadImages = (image) => {
    image.setAttribute('srcset', image.getAttribute('data-srcset'));
    image.onload = () => {
        image.removeAttribute('data-srcset');
    };
};

// Loop through images and load them
// pendingImages.forEach((img) => {
//     loadImages(img);
// });

// Create a condition to display the real image when it comes into the viewport, otherwise, display the placeholder.
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);
    pendingImages.forEach((img) => {
        observer.observe(img);
    });
} else {
    pendingImages.forEach((img) => {
        loadImages(img);
    });
}

const loadImages2 = (image2) => {
    image2.setAttribute('src', image2.getAttribute('data-src'));
    image2.onload = () => {
        image2.removeAttribute('data-src');
    };
};

// imagesToLoad2.forEach((img2) => {
//     loadImages2(img2);
// });

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items2, observer) => {
        items2.forEach((item2) => {
            if (item2.isIntersecting) {
                loadImages2(item2.target);
                observer.unobserve(item2.target);
            }
        });
    }, imgOptions);
    imagesToLoad2.forEach((img2) => {
        observer.observe(img2);
    });
} else {
    imagesToLoad2.forEach((img2) => {
        loadImages2(img2);
    });
}