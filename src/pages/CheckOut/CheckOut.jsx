import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const service = useLoaderData()
    console.log(service);

    const handlerOrderSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const phone = form.phone.value;
        const email = form.email.value;
        console.log(firstName, lastName, phone, email);

    }
    return (
        <div className="bg-[#F3F3F3] py-14 px-6 my-10 rounded-xl">
            <form onSubmit={handlerOrderSubmit}>
                <div className="grid lg:grid-cols-2 gap-6 mt-10">
                    <div>
                        <div className="form-control my-5">
                            <input 
                            type="text" 
                            name="firstName"
                            required
                            placeholder="First Name" 
                            className="input input-bordered" />
                        </div>
                        <div className="form-control my-5">
                            <input 
                            type="text" 
                            name="phone"
                            required
                            placeholder="Your Phone" 
                            className="input input-bordered" />
                        </div>
                    </div>
                    <div>
                        <div className="form-control my-5">
                            <input 
                            type="text" 
                            name="lastName"
                            placeholder="Last Name" 
                            className="input input-bordered" />
                        </div>
                        <div className="form-control my-5">
                            <input 
                            type="email" 
                            name="email"
                            required
                            placeholder="Your Email" 
                            className="input input-bordered" />
                        </div>
                    </div>

                </div>
                <div className="form-control mt-6">
                    <input className="main_btn" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;