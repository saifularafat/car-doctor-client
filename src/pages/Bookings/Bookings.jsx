import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingCart from "./BookingCart";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);

    const [ bookings, setBookings ] = useState([])
    const navigate = useNavigate()
    console.log(bookings)

    const url = `http://localhost:4000/bookings?email=${user?.email}`;
    // console.log(url)
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setBookings(data)
                }
                else{
                    navigate('/login');
                }
            })
    }, [url, navigate])

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
    };

    const handlerBookingsUpdate = id =>{
        fetch(`http://localhost:4000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'Confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._d !== id);
                const updated = bookings.find(booking =>booking._id === id);
                updated.status = 'Confirm'
                const newBookings = [ updated, ...remaining]
                setBookings(newBookings) 
            }
        })
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
                            key = {booking._id}
                            booking = {booking}
                            handlerDelete = {handlerDelete}
                            handlerBookingsUpdate = {handlerBookingsUpdate}
                        ></BookingCart>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Bookings;