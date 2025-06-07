// Show or hide the "Back to Top" button based on scroll position
window.onscroll = function() {
  const backToTop = document.getElementById("backToTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filter products by category
function filterProducts(category) {
  const products = document.getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (category === 'all') {
      product.style.display = 'block';
    } else {
      if (product.classList.contains(category)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    }
  }
}
