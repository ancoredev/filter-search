import { Button } from "@mui/material"
import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
          <Button>Cart</Button>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}

export { Layout }