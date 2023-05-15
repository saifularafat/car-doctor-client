import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const service = useLoaderData()
    // console.log(service);
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext)

    const handlerOrderSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const deuPrice = form.deuPrice.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = user?.email;
        const message = form.message.value;
        const orderBooking = {
            customerFirstName: firstName,
            customerLastName: lastName,
            service_id: _id,
            service_title: title,
            price: price,
            email,
            deuPrice,
            phone,
            img,
            date,
            message

        }
        console.log(orderBooking);

        fetch('https://car-doctor-server-six-silk.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow...',
                        text: 'Your Order Confirm!',
                    })
                }

            })

    }
    return (
        <div className="bg-[#F3F3F3] py-14 px-6 my-10 rounded-xl">
            <h2>Order Service Name : {title}</h2>
            <form onSubmit={handlerOrderSubmit}>
                <div className="grid lg:grid-cols-2 gap-6 mt-10">
                    <div>
                        <div className="form-control my-5">
                            <input
                                type="text"
                                name="firstName"
                                required
                                defaultValue={user?.displayName}
                                placeholder="First Name"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control my-5">
                            <input
                                type="text"
                                name="phone"
                                required
                                defaultValue={user?.phone}
                                placeholder="Your Phone"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control my-5">
                            <input
                                type="text"
                                name="deuPrice"
                                defaultValue={'$' + price}
                                className="input input-bordered" />
                        </div>
                    </div>
                    <div>
                        <div className="form-control my-5">
                            <input
                                type="text"
                                name="lastName"
                                // defaultValue={}
                                placeholder="Last Name"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control my-5">
                            <input
                                type="email"
                                name="email"
                                required
                                defaultValue={user?.email}
                                placeholder="Your Email"
                                className="input input-bordered" />
                        </div>
                        <div className="form-control my-5">
                            <input
                                type="date"
                                name="date"
                                required
                                className="input input-bordered text-slate-400" />
                        </div>
                    </div>

                </div>
                <div>
                    <textarea
                        name="message"
                        placeholder="Message"
                        required
                        id=""
                        cols="30"
                        rows="10"
                        className="w-full p-5 rounded-lg tracking-wide"
                    >
                    </textarea>
                </div>
                <div className="form-control mt-6">
                    <input
                        className="main_btn"
                        type="submit"
                        value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;