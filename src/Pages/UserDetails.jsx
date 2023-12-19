import {FaArrowLeft, FaCaretDown} from "react-icons/fa";
import {NavLink} from "react-router-dom";

const UserDetails = () => {
    return (
        <>
            <div className="w-full h-max px-6 py-10 flex flex-col gap-2 phone:gap-8 bg-[#f9fbfd] text-[rgb(87,89,98)]">
                <div className="w-full h-max bg-white shadow-md p-5">
                    <div className="w-full h-20 px-5 flex items-center justify-between ">
                        <p className="text-[27px] font-semibold text-[rgb(14,65,82)]">
                            Jairo Arcila
                        </p>
                        <div className="flex items-center gap-2">
                            <NavLink to={"/admin/dashboard/manageusers"}>
                                <button className="py-2 px-3 flex gap-1 items-center text-xs bg-[#0e4152] text-white rounded">
                                    <FaArrowLeft /> Back
                                </button>
                            </NavLink>
                            <button className="py-2 px-3 flex gap-1 items-center text-xs bg-[#6861ce] text-white rounded">
                                Actions <FaCaretDown />
                            </button>
                        </div>
                    </div>
                    <div className="w-full h-max flex p-4 px-8 border border-gray-200 rounded">
                        <div className="w-1/4 h-28 flex flex-col justify-between ">
                            <div className="w-full h-[45%] flex flex-col justify-between">
                                <h1 className=" text-[rgb(14,65,82)] font-bold">Account Balance</h1>
                                <p className="text-sm">$10,000.00</p>
                            </div>
                            <div className="w-full h-[45%]">
                                <h1 className=" text-[rgb(14,65,82)] font-bold">User Account Status</h1>
                                <p className="text-xs bg-[#31ce36] text-white w-max py-1 px-2 rounded-full">Active</p>
                            </div>
                        </div>
                        <div className="w-1/4 h-28 flex flex-col justify-between ">
                            <div className="w-full h-[45%] flex flex-col justify-between">
                                <h1 className=" text-[rgb(14,65,82)] font-bold">Profit</h1>
                                <p className="text-sm">$0.00</p>
                            </div>
                            <div className="">
                                <h1 className=" text-[rgb(14,65,82)] font-bold">Inv. Plans</h1>
                                <button className="py-[0.40rem] px-3 flex gap-1 items-center text-xs bg-[#0e4152] text-white rounded">View Plans</button>
                            </div>
                        </div>
                        <div className="w-1/4 h-28 flex flex-col justify-between ">
                            <div className="w-full h-[45%] flex flex-col justify-between">
                                <h1 className=" text-[rgb(14,65,82)] font-bold">Referral Bonus</h1>
                                <p className="text-sm">$0.00</p>
                            </div>
                            <div className="">
                                <h1 className=" text-[rgb(14,65,82)] font-bold">KYC</h1>
                                <p className="text-xs bg-[#f25961] text-white w-max py-1 px-2 rounded-full">Active</p>
                            </div>
                        </div>
                        <div className="w-1/4 h-28 flex flex-col justify-between ">
                            <div className="w-full h-[45%] flex flex-col justify-between">
                                <h1 className=" text-[rgb(14,65,82)] font-bold">Bonus</h1>
                                <p className="text-sm">$0.00</p>
                            </div>
                            <div className="">
                                <h1 className=" text-[rgb(14,65,82)] font-bold">ROI Mode</h1>
                                <p className="text-xs bg-[#31ce36] w-max py-1 px-2 rounded-full text-white">On</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[45%]">
                      <p>USER INFORMATION</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDetails;
