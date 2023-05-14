
const BookingCart = ({ booking, handlerDelete, handlerBookingsUpdate }) => {
    const { _id, deuPrice, service_title, date, img, status } = booking;


    return (
        <tbody>
            <tr>
                <th>
                    <button
                        onClick={() => handlerDelete(_id)}
                        className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask rounded-lg w-24 h-24">
                                {
                                    img && <img src={img} alt="Avatar Tailwind CSS Component" />
                                }
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {service_title}
                </td>
                <td>{date}</td>
                <td>{deuPrice}</td>
                <th>
                    {
                        status === 'Confirm' ?
                            <span 
                            className="text-xl font-inter font-semibold text-green-500">
                                Confirmed
                            </span>
                            :
                            <button
                                onClick={() => handlerBookingsUpdate(_id)}
                                className="btn btn-ghost btn-xs">Pending
                            </button>
                    }
                </th>
            </tr>
        </tbody>
    );
};

export default BookingCart;