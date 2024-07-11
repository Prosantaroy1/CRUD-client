import {  useState } from "react";
import { Link, useLoaderData } from "react-router-dom";



const Home = () => {

    //data
    const loaderData= useLoaderData();

    const [users, setUsers] = useState(loaderData);

    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             setUsers(data)
    //         })
    // }, [])

    //delete
    const handleDelete = (_id) => {
        // console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('succeefully delete this!')
                    const remaingdata = users.filter(user => user._id !== _id);
                    setUsers(remaingdata)
                }
            })
    }

    return (
        <div>
            <h2 className="text-2xl text-center pt-6">User management system 2024</h2>
            <div className="pt-6 px-4 space-y-5">
                {
                    users.map((user, idx) => <div key={idx}>
                        <div className="flex gap-7 items-center">
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <p>{user.number}</p>
                            <Link to={`/update/${user._id}`}>
                                <button className="bg-green-400 text-white px-5 py-1 rounded">Update</button>
                            </Link>
                            <button onClick={() => handleDelete(user._id)} className="bg-green-400 text-white px-5 py-1 rounded">Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;