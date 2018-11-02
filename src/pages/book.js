import React from 'react';
import Shell from 'layouts/Shell';
import Footer from 'modules/Footer';
class Book extends React.Component {
  constructor(...props) {
    super(...props);
  }

  componentDidMount() {
    var client = window.ShopifyBuy.buildClient({
      domain: 'for-the-women-retreat.myshopify.com',
      storefrontAccessToken: 'c53de1f501ecafde91c01856f9ca1f6d'
    });

    var ui = window.ShopifyBuy.UI.init(client);

    ui.createComponent('product', {
      id: [1758890950726],
      node: document.getElementById('product-component-1541024569699'),
      moneyFormat: '${{amount}}',
      options: {
        product: {
          buttonDestination: 'checkout',
          layout: 'horizontal',
          variantId: 'all',
          width: '100%',
          contents: {
            img: false,
            imgWithCarousel: true,
            variantTitle: false,
            description: true,
            buttonWithQuantity: false,
            quantity: false
          },
          text: { button: 'Register' },
          styles: {
            product: {
              'text-align': 'left',
              '@media (min-width: 601px)': { 'max-width': '100%', 'margin-left': '0', 'margin-bottom': '50px' }
            },
            button: {
              'font-family': 'Open Sans, sans-serif',
              'background-color': '#5562EB',
              ':hover': { 'background-color': '#3746e7' },
              'font-weight': 'normal',
              ':focus': { 'background-color': '#3746e7' }
            },
            variantTitle: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            title: { 'font-family': 'Open Sans, sans-serif', 'font-weight': '600', 'font-size': '19px' },
            description: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            price: { 'font-family': 'Open Sans, sans-serif', 'font-size': '17px', 'font-weight': 'normal' },
            compareAt: { 'font-size': '15px', 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' }
          },
          googleFonts: ['Open Sans', 'Open Sans', 'Open Sans', 'Open Sans', 'Open Sans', 'Open Sans']
        },
        cart: {
          contents: { button: true },
          text: { notice: '' },
          styles: {
            button: {
              'font-family': 'Open Sans, sans-serif',
              ':hover': { 'background-color': '#6ca44e' },
              'font-weight': 'normal',
              ':focus': { 'background-color': '#6ca44e' }
            },
            footer: { 'background-color': '#ffffff' }
          },
          googleFonts: ['Open Sans']
        },
        modalProduct: {
          contents: {
            img: false,
            imgWithCarousel: true,
            variantTitle: false,
            buttonWithQuantity: true,
            button: false,
            quantity: false
          },
          styles: {
            product: {
              '@media (min-width: 601px)': { 'max-width': '100%', 'margin-left': '0px', 'margin-bottom': '0px' }
            },
            button: {
              'font-family': 'Open Sans, sans-serif',
              ':hover': { 'background-color': '#6ca44e' },
              'font-weight': 'normal',
              ':focus': { 'background-color': '#6ca44e' }
            },
            variantTitle: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            title: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            description: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            price: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            compareAt: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' }
          },
          googleFonts: ['Open Sans', 'Open Sans', 'Open Sans', 'Open Sans', 'Open Sans', 'Open Sans']
        },
        toggle: {
          styles: {
            toggle: {
              'font-family': 'Open Sans, sans-serif',
              ':hover': { 'background-color': '#6ca44e' },
              'font-weight': 'normal',
              ':focus': { 'background-color': '#6ca44e' }
            }
          },
          googleFonts: ['Open Sans']
        },
        option: {
          styles: {
            label: { 'font-family': 'Open Sans, sans-serif' },
            select: { 'font-family': 'Open Sans, sans-serif' }
          },
          googleFonts: ['Open Sans', 'Open Sans']
        },
        productSet: { styles: { products: { '@media (min-width: 601px)': { 'margin-left': '-20px' } } } }
      }
    });

    ui.createComponent('product', {
      id: [1758889082950],
      node: document.getElementById('product-component-1541025436816'),
      moneyFormat: '${{amount}}',
      options: {
        product: {
          buttonDestination: 'checkout',
          layout: 'horizontal',
          variantId: 'all',
          width: '100%',
          contents: {
            img: false,
            imgWithCarousel: true,
            variantTitle: false,
            description: true,
            buttonWithQuantity: false,
            quantity: false
          },
          text: { button: 'Register' },
          styles: {
            product: {
              'text-align': 'left',
              '@media (min-width: 601px)': { 'max-width': '100%', 'margin-left': '0', 'margin-bottom': '50px' }
            },
            button: {
              'font-family': 'Open Sans, sans-serif',
              'background-color': '#5562EB',
              ':hover': { 'background-color': '#3746e7' },
              'font-weight': 'normal',
              ':focus': { 'background-color': '#3746e7' }
            },
            variantTitle: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            title: { 'font-family': 'Open Sans, sans-serif', 'font-weight': '600', 'font-size': '19px' },
            description: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            price: { 'font-family': 'Open Sans, sans-serif', 'font-size': '17px', 'font-weight': 'normal' },
            compareAt: { 'font-size': '15px', 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' }
          },
          googleFonts: ['Open Sans', 'Open Sans', 'Open Sans', 'Open Sans', 'Open Sans', 'Open Sans']
        },
        cart: {
          contents: { button: true },
          text: { notice: '' },
          styles: {
            button: {
              'font-family': 'Open Sans, sans-serif',
              ':hover': { 'background-color': '#6ca44e' },
              'font-weight': 'normal',
              ':focus': { 'background-color': '#6ca44e' }
            },
            footer: { 'background-color': '#ffffff' }
          },
          googleFonts: ['Open Sans']
        },
        modalProduct: {
          contents: {
            img: false,
            imgWithCarousel: true,
            variantTitle: false,
            buttonWithQuantity: true,
            button: false,
            quantity: false
          },
          styles: {
            product: {
              '@media (min-width: 601px)': { 'max-width': '100%', 'margin-left': '0px', 'margin-bottom': '0px' }
            },
            button: {
              'font-family': 'Open Sans, sans-serif',
              ':hover': { 'background-color': '#6ca44e' },
              'font-weight': 'normal',
              ':focus': { 'background-color': '#6ca44e' }
            },
            variantTitle: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            title: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            description: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            price: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            compareAt: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' }
          },
          googleFonts: ['Open Sans', 'Open Sans', 'Open Sans', 'Open Sans', 'Open Sans', 'Open Sans']
        },
        toggle: {
          styles: {
            toggle: {
              'font-family': 'Open Sans, sans-serif',
              ':hover': { 'background-color': '#6ca44e' },
              'font-weight': 'normal',
              ':focus': { 'background-color': '#6ca44e' }
            }
          },
          googleFonts: ['Open Sans']
        },
        option: {
          styles: {
            label: { 'font-family': 'Open Sans, sans-serif' },
            select: { 'font-family': 'Open Sans, sans-serif' }
          },
          googleFonts: ['Open Sans', 'Open Sans']
        },
        productSet: { styles: { products: { '@media (min-width: 601px)': { 'margin-left': '-20px' } } } }
      }
    });

    ui.createComponent('product', {
      id: [1758923653190],
      node: document.getElementById('product-component-1541025397999'),
      moneyFormat: '${{amount}}',
      options: {
        product: {
          buttonDestination: 'checkout',
          layout: 'horizontal',
          variantId: 'all',
          width: '100%',
          contents: {
            img: false,
            imgWithCarousel: true,
            variantTitle: false,
            description: true,
            buttonWithQuantity: false,
            quantity: false
          },
          text: { button: 'Register' },
          styles: {
            product: {
              'text-align': 'left',
              '@media (min-width: 601px)': { 'max-width': '100%', 'margin-left': '0', 'margin-bottom': '50px' }
            },
            button: {
              'font-family': 'Open Sans, sans-serif',
              'background-color': '#5562EB',
              ':hover': { 'background-color': '#3746e7' },
              'font-weight': 'normal',
              ':focus': { 'background-color': '#3746e7' }
            },
            variantTitle: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            title: { 'font-family': 'Open Sans, sans-serif', 'font-weight': '600', 'font-size': '19px' },
            description: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            price: { 'font-family': 'Open Sans, sans-serif', 'font-size': '17px', 'font-weight': 'normal' },
            compareAt: { 'font-size': '15px', 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' }
          },
          googleFonts: ['Open Sans', 'Open Sans', 'Open Sans', 'Open Sans', 'Open Sans', 'Open Sans']
        },
        cart: {
          contents: { button: true },
          text: { notice: '' },
          styles: {
            button: {
              'font-family': 'Open Sans, sans-serif',
              ':hover': { 'background-color': '#6ca44e' },
              'font-weight': 'normal',
              ':focus': { 'background-color': '#6ca44e' }
            },
            footer: { 'background-color': '#ffffff' }
          },
          googleFonts: ['Open Sans']
        },
        modalProduct: {
          contents: {
            img: false,
            imgWithCarousel: true,
            variantTitle: false,
            buttonWithQuantity: true,
            button: false,
            quantity: false
          },
          styles: {
            product: {
              '@media (min-width: 601px)': { 'max-width': '100%', 'margin-left': '0px', 'margin-bottom': '0px' }
            },
            button: {
              'font-family': 'Open Sans, sans-serif',
              ':hover': { 'background-color': '#6ca44e' },
              'font-weight': 'normal',
              ':focus': { 'background-color': '#6ca44e' }
            },
            variantTitle: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            title: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            description: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            price: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' },
            compareAt: { 'font-family': 'Open Sans, sans-serif', 'font-weight': 'normal' }
          },
          googleFonts: ['Open Sans', 'Open Sans', 'Open Sans', 'Open Sans', 'Open Sans', 'Open Sans']
        },
        toggle: {
          styles: {
            toggle: {
              'font-family': 'Open Sans, sans-serif',
              ':hover': { 'background-color': '#6ca44e' },
              'font-weight': 'normal',
              ':focus': { 'background-color': '#6ca44e' }
            }
          },
          googleFonts: ['Open Sans']
        },
        option: {
          styles: {
            label: { 'font-family': 'Open Sans, sans-serif' },
            select: { 'font-family': 'Open Sans, sans-serif' }
          },
          googleFonts: ['Open Sans', 'Open Sans']
        },
        productSet: { styles: { products: { '@media (min-width: 601px)': { 'margin-left': '-20px' } } } }
      }
    });

  }



  render() {
    return (
      <Shell>
        <section className="book">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="title-1">Reserve your spot</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-1" />
              <div className="col-11">
                <div id="product-component-1541025397999" className="book-item" />
                <div id="product-component-1541024569699" className="book-item" />
                <div id="product-component-1541025436816" className="book-item" />
              </div>
            </div>
          </div>
        </section>
        <Footer showRegistration="true" />
      </Shell>
    );
  }
}

export default Book;
