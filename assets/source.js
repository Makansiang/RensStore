document.getElementById('year').innerHTML = new Date().getFullYear()

function chat(product_name,product_price){
    const message =`hello saya mau beli ${product_name} - ${product_price}`
    const whastapp = `https://wa.me?/6281219803211= ${message}`
    location.href= whastapp
}


const naik = document.querySelector('.naik');

window.addEventListener('scroll', () => {
  if ( this.scrollY >= 100 ) {
    naik.classList.add('muncul');

    naik.addEventListener('click', () => {
      window.scrollTo({top: 0});
    })
  } else {
    naik.classList.remove('muncul');
  }
});