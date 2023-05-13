import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingCart from "./BookingCart";

const Bookings = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);

    const [bookings, setBookings] = useState([])
    console.log(bookings)

    const url = `http://localhost:4000/bookings?email=${user?.email}`;
    // console.log(url)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handlerDelete = id => {
        const process = confirm("Are You Sure One service delete");
        if (process) {
            fetch(`http://localhost:4000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert("Are You Sure...!")
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })

        }
    }
    return (
        <div className="my-12 ">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <th>delete</th>
                            <th>photo</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {
                        bookings.map(booking => <BookingCart
                            key={booking._id}
                            booking={booking}
                            handlerDelete={handlerDelete}
                        ></BookingCart>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Bookings;