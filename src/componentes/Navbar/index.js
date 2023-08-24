import './style.css'
const Navbar = () => {

    return (

        <nav className="nav-menu">
            <div>
                <a>Logo y nombre</a>
            </div>
            <ul className=''>
                <li>
                    <a href="#"> Inicio </a>
                </li>

                <li>
                    <a href="#"> Sobre nosotros </a>
                </li>

                <li>
                    <a href="#"> Trabajos </a>
                </li>

                <li>
                    <a href="#"> Contacto </a>
                </li>
            </ul>

        </nav>
    
    )

}
export default Navbar