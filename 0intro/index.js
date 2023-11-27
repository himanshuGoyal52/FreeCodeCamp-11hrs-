// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById('root'))
/* 
ReactDOM.render(
    <ul>
        <li>Item-1</li>
        <li>Item-2</li>
        <li>Item-3</li>
    </ul>,
document.getElementById('root'));
*/

/************************** WHY REACT ***********************/
// 1. It's composable //
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

function MainComponent(){
    return (
        <h2>I am learing react in depth !!</h2>
    )
}

// down below is the expmale of composable
ReactDOM.render(
    <div className="header">
        <NavBar />
        <MainComponent />
    </div>
, document.getElementById("root"));

// 2. It's declarative //
// means no need to make element in vanila javascript

// const h1 = document.createElement('h1');
// h1.textContent = "This is an imperative way to program";
// h1.className = 'header';
// document.getElementById('root').append(h1);
 
// now with react 
// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById('root'))

const element = <h1 className="header">This is JSX</h1>
console.log(element);  // object //

// two parent JSX elements
// ReactDOM.render(<h1>Heading</h1><p>para</p>,document.querySelector('#root')); // it will show error 

const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)
// console.log(page)

// try this
// document.getElementById('root').append(page);
// document.getElementById('root').append(JSON.stringify(page));