// Fetch the HTML file
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    // Insert the HTML content into the DOM
    document.getElementById('footer').innerHTML = data;
  })
  .catch(error => {
    console.log('Error:', error);
  });


fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    // Insert the HTML content into the DOM
    document.getElementById('navbar').innerHTML = data;
  })
  .catch(error => {
    console.log('Error:', error);
  });
