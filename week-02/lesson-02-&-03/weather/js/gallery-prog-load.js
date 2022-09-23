// Get all the data-src and data-srcset attributes present in document.
const realImages = document.querySelectorAll('[data-src] [data-srcset]');

// specify an image threshold before loading and from what position from the start of each side of the viewport to start loading the real images.
const imgOptions = {
    threshold: 1,
    rootMargin: '0px, 0px, 200px, 0px'
};

// Create a function to replace the data-src and data-srcset attributes and their contents to actual src and srcset attributes.
const preloadImage = (img) => {
    const imgSrc = img.getAttribute('data-src');
    // const imgSrcset = img.getAttribute('data-srcset');
    if (!imgSrc) {
        return;
    } 
    img.src = imgSrc;
    // img.srcset = imgSrcset
};


// Create a function to determine when to load the real images and when not to load them.
const observeImage = new IntersectionObserver((images, observeImage) => {
    images.forEach(image => {
        if (!image.isIntersecting) {
            return;
        }
        
        else {
            preloadImage(image.target);
            observeImage.unobserve(image.target);
        }
    });
}, imgOptions);

// Loop through all data-src and data-src attributes and load their contents.
realImages.forEach(imgs => {
    observeImage.observe(imgs);
});