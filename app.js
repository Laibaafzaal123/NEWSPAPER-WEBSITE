function toggleText(cardNumber) { 
  let dots = document.getElementById("dots" + cardNumber);
  let moreText = document.getElementById("more" + cardNumber);
  let btn = document.getElementById("btn" + cardNumber);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
// Smooth scroll manually handle for #home
document.querySelectorAll('a[href="#home"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Manually scroll to top of page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

  
