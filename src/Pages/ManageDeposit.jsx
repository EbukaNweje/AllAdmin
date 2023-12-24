import {FaEye} from "react-icons/fa";

const ManageDeposit = () => {
    return (
        <>
            <div className="w-full h-max px-6 py-10 flex flex-col gap-2 phone:gap-8 bg-[#f9fbfd] text-[rgb(87,89,98)]">
                <p className="text-[27px] font-semibold text-[rgb(87,89,98)]">
                    Manage clients deposits
                </p>
                <div className="w-full h-max bg-white shadow p-5">
                    <div className="w-full h-max flex phone:flex-col gap-2 border-b border-b-gray-200 pb-3">
                        <div>
                            <p className="text-sm text-[rgb(73,80,87)]">
                                search
                            </p>
                            <input
                                type="text"
                                placeholder="Search by user name"
                                className="w-max h-10 rounded pl-2 text-sm border outline-sky-100"
                            />
                        </div>
                        <div>
                            <p className="text-sm  text-[rgb(73,80,87)]">
                                status
                            </p>
                            <select
                                name=""
                                id=""
                                className="w-max phone:w-full h-10 rounded pl-2 text-sm border outline-sky-100"
                            >
                                <option value="all">All</option>
                                <option value="all">Processed</option>
                                <option value="all">Pending</option>
                            </select>
                        </div>
                        <div className="phone:w-full phone:flex flex gap-2">
                            <div>
                                <p className="text-sm text-[rgb(73,80,87)]">
                                    page
                                </p>
                                <select
                                    name=""
                                    id=""
                                    className="w-max h-10 rounded pl-2 text-sm border outline-sky-100"
                                >
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                </select>
                            </div>
                            <div>
                                <p className="text-sm text-[rgb(73,80,87)]">
                                    order
                                </p>
                                <select
                                    name=""
                                    id=""
                                    className="w-max h-10 rounded pl-2 text-sm border outline-sky-100"
                                >
                                    <option value="descending">
                                        Descending
                                    </option>
                                    <option value="ascending">Ascending</option>
                                </select>
                            </div>
                        </div>

                        <div className="phone:w-full phone:flex flex gap-2">
                            <div>
                                <p className="text-sm text-[rgb(73,80,87)]">
                                    from
                                </p>
                                <input
                                    type="date"
                                    className="w-max h-10 rounded pl-2 text-sm border outline-sky-100"
                                />
                            </div>
                            <div>
                                <p className="text-sm text-[rgb(73,80,87)]">
                                    to
                                </p>
                                <input
                                    type="date"
                                    className="w-max h-10 rounded pl-2 text-sm border outline-sky-100"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="overflow-y-auto">
                        <div className="w-full phone:w-max h-16 items-center justify-between flex border-b border-b-gray-200 font-semibold text-[rgb(33,37,41)]">
                            <div className="w-24 phone:w-36 h-max">Client</div>
                            <div className="w-36 phone:w-48 h-max">
                                Amount Deposited
                            </div>
                            <div className="w-36 h-max">Payment Method</div>
                            <div className="w-36 h-max">Status</div>
                            <div className="w-36 h-max">Date</div>
                            <div className="w-36 h-max opacity-0">Date</div>
                        </div>
                        <div className="w-full phone:w-max h-16 items-center justify-between flex border-b border-b-gray-200 font-semibold text-[rgb(33,37,41)]">
                            <div className="w-24 phone:w-36 h-max">
                                Jairo Arcila
                            </div>
                            <div className="w-36 phone:w-48 h-max">10,000</div>
                            <div className="w-36 h-max">Bitcoin</div>
                            <div className="w-36 h-max">
                                <p className="py-1 px-2 text-white w-max bg-[#31ce36] rounded-full text-xs">
                                    Processed
                                </p>
                            </div>
                            <div className="w-36 h-max">25 Nov 2023</div>
                            <div className="w-36 h-max flex items-center gap-2">
                                <button className="py-2 px-3 bg-[#48abf7] rounded">
                                    <FaEye className="text-white" />
                                </button>
                                <button className="p-2 bg-[#f25961] rounded text-xs text-white">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageDeposit;
