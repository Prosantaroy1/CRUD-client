import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="bg-black gap-20 text-white flex justify-center py-4">
        <Link className="text-xl" to='/'>Home</Link>
        <Link className="text-xl" to='/create'>Creted</Link>
        <Link className="text-xl" to='/update'>Update</Link>
     </div>
    );
};

export default Header;