
const BookingCart = ({ booking, handlerDelete, handlerBookingsUpdate }) => {
    const { _id, deuPrice, service_title, date, img, status } = booking;


    return (
        <tbody>
            <tr>
                <th>
                    <button
                        onClick={() => handlerDelete(_id)}
                        className="bg-red-600 btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
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
                                className=" bg-yellow-300 py-2 px-5 text-slate-600 rounded-lg font-inter font-semibold tracking-wide">Pending
                            </button>
                    }
                </th>
            </tr>
        </tbody>
    );
};

export default BookingCart;