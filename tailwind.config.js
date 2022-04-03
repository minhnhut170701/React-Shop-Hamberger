
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': {'max': '500px'},
      // => @media (min-width: 576px) { ... }

      'md': '660px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('../src/images/product-page.jpg')",
        'cart-pattern': "url('../src/images/cart-page.jpg')",
        'blog-pattern': "url('../src/images/blog-page.jpg')",
        'checkout-pattern': "url('../src/images/sea.jpg')",
       })
    },
  },
  plugins: [],
}
