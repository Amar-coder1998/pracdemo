
import './App.css';
import data from './data.js'


function App() {
  return (
    <div classNameName="App">
      <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="index.html">AmazonAlternative</a>
            </div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="signin.html">SignIn</a>
            </div>
        </header>
        <main>
                  <div className="row center">
                      {
                          data.product.map(item => {
                            return(
                            <div className="card">
                                  <a href="product.html">
                                      <img className="medium" src={item.image} alt="product" />
                                  </a>
                                  <div className="card-body">
                                      <a href="product.html">
                                            <h2>{ item.name}</h2>
                                      </a>
                                        <div className="price">
                                            ${item.price}
                                      </div>
                                  </div>
                                </div>
                            )
                          })
                      }
                  </div>


        </main>
        <footer className="row center">@technologyaddictors.com</footer>
    </div>
    </div>
  );
}

export default App;
