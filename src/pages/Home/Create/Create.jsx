

const Create = () => {

    // add fun handle
    const handleAddUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const users = { name, email, number };
       // console.log(users);

        //
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.acknowledged){
                alert('created done')
            }
            console.log(data)
        })

    }
    return (
        <div className="px-16 py-4 space-y-3">
            <h3 className="text-2xl">New User Created 2024 </h3>
            <div>
                <form onSubmit={handleAddUser} className="space-y-3">
                    <input type="text" name='name' className="border" placeholder="your name" /> <br />
                    <input type="email" name="email" className="border" placeholder="your email" /><br />
                    <input type="number" name="number" className="border" placeholder="your number" /><br />
                    <button type="submit" className="bg-green-500 px-4 py-2 rounded">Add user</button>
                </form>
            </div>
        </div>
    );
};

export default Create;