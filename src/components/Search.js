import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'
import { Outlet, Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Search() {
    return (
        <>
            <nav className="block-up">
                <Link to="/">
                    <div className="square">
                        <FontAwesomeIcon className="icon" icon="fa-solid fa-magnifying-glass" />
                        <Link to="/" className="texts">Search</Link>
                    </div>
                </Link>

                <Link to="/Favourite">
                    <div className="square">
                        <FontAwesomeIcon style={{ color: "red" }} className="icon" icon="fa-solid fa-heart" />
                        <Link to="/Favourite" className="texts">Favourite({localStorage.length})</Link>
                    </div>
                </Link>

            </nav>
            <form >
                <input
                    placeholder="Search something..."
                    className="header-search"
                    // value={value}
                    // onChange={(e) => handleInput(e)}
                />
            </form>
            <Alert show={false} variant="success" id="alert">
                <Alert.Heading id="alert-heading">Add Gif successfully</Alert.Heading>
            </Alert>
            <nav className="block" >
                <div className="gif-block" >
                    <div className="gif-heart" >
                        <img className="gif-small" ></img>
                        <FontAwesomeIcon className="img-heart" size="2x" icon="fa-solid fa-heart" />
                    </div>
                </div>
            </nav>
            <Outlet />
            <button className="btn2" >Load more</button>
        </>
    )
}

