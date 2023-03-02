import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article style={{backgroundImage: 'url(/images/image9.jfif)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>CAT - heavy mechinaries heaven!</h3>
              <a href="https://www.cat.com/en_US/products/new/equipment.html" className="btn btn--rounded">Show Collection</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/image12.jfif)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Wanna buy fresh fruits?</h3>
              <h3>Asia's biggest market</h3>
              <a href="#" className="btn btn--rounded">Take a tour</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/image10.jpg)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Get raw metarials delivered to you factory</h3>
              <a href="https://www.thesteel.co.th/en/home/" className="btn btn--rounded">VIEW Catagories</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Best of Amdani Roptani</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Port Clearence</h4>
                <p>Get International items delivered to your factory in days</p>
              </div>
            </li>
            
            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Easy Payments</h4>
                <p>We take care of your Transactions and LC papers</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Authenticity Guaranteed</h4>
                <p>Every vendor here is AR varified which mean 0% chance of getting frauded</p>
              </div>
            </li>
            
            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Talk to an Expert</h4>
                <p>Have a chat with our global market experts regarding your import-export business</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage