import { useLoaderData } from "react-router-dom";


const Update = () => {
   
    //data collect
    const loaderusers=useLoaderData();

    const handleUpdate=(e)=>{
        e.preventDefault();
        const from= e.target;
        const name= from.name.value;
        const email= from.email.value;
        const number= from.number.valu;
        const userUpdate={name, email, number};
        //console.log(userUpdate)
        fetch(`http://localhost:5000/users/${loaderusers._id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(userUpdate)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.modifiedCount===1){
                alert('Update data done')
            }
            console.log(data)
        })
    }
    return (
        <div>
            <h3 className="text-2xl">Update the user management: {loaderusers._id}</h3>
            <div className="px-4 py-2">
                <form onSubmit={handleUpdate} className="space-y-3">
                    <input type="text" name='name' className="border" defaultValue={loaderusers?.name}  placeholder="your name" /> <br />
                    <input type="email" name="email" className="border" defaultValue={loaderusers?.email} placeholder="your email" /><br />
                    <input type="number" name="number" className="border" defaultValue={loaderusers?.number} placeholder="your number" /><br />
                    <button type="submit" className="bg-green-500 px-4 py-2 rounded">Add user</button>
                </form>
            </div>
        </div>
    );
};

export default Update;