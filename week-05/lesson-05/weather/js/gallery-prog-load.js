// Get all the data-src and data-srcset attributes present in document.
// const realImages = document.querySelectorAll('[data-src], [data-srcset]');

// specify an image threshold before loading and from what position from the start of each side of the viewport to start loading the real images.
const imgOptions = {
    threshold: 0,
    rootMargin: '0px, 0px, 200px, 0px'
};

let imagesToLoad = document.querySelectorAll('[data-srcset]');

const loadImages = (image) => {
    // image.setAttribute('src', image.getAttribute('data-src'));
    image.setAttribute('srcset', image.getAttribute('data-srcset'));
    image.onload = () => {
        // image.removeAttribute('data-src');
        image.removeAttribute('data-srcset');
    };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
    });

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
    if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
    }
    });
});
imagesToLoad.forEach((img) => {
    observer.observe(img);
});
} else {
imagesToLoad.forEach((img) => {
    loadImages(img);
});

};

let imagesToLoad2 = document.querySelectorAll('[data-src]');

const loadImages2 = (image2) => {
    image2.setAttribute('src', image2.getAttribute('data-src'));
    // image.setAttribute('srcset', image.getAttribute('data-srcset'));
    image2.onload = () => {
        image2.removeAttribute('data-src');
        // image.removeAttribute('data-srcset');
    };
};

imagesToLoad2.forEach((img2) => {
    loadImages2(img2);
    });

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items2, observer) => {
    items2.forEach((item2) => {
    if (item2.isIntersecting) {
        loadImages2(item2.target);
        observer.unobserve(item2.target);
    }
    });
});
imagesToLoad2.forEach((img2) => {
    observer.observe(img2);
});
} else {
imagesToLoad2.forEach((img2) => {
    loadImages2(img2);
});

};

// // Create a function to replace the data-src and data-srcset attributes and their contents to actual src and srcset attributes.
// const preloadImage = (img) => {
//     const imgSrc = img.getAttribute('data-src');
//     const imgSrcset = img.getAttribute('data-srcset');
//     if (!imgSrc) {
//         return;
//     } 
//     img.src = imgSrc;
//     img.srcset = imgSrcset
// };


// // Create a function to determine when to load the real images and when not to load them.
// const observeImage = new IntersectionObserver((images, observeImage) => {
//     images.forEach(image => {
//         if (!image.isIntersecting) {
//             return;
//         }
        
//         else {
//             preloadImage(image.target);
//             observeImage.unobserve(image.target);
//         }
//     });
// }, imgOptions);

// // Loop through all data-src and data-src attributes and load their contents.
// realImages.forEach(imgs => {
//     observeImage.observe(imgs);
// });