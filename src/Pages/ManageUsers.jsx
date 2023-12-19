import {IoMail} from "react-icons/io5";
import {HiUserAdd} from "react-icons/hi";
import {Modal} from "antd";
import {useState} from "react";
import {NavLink} from "react-router-dom";

const ManageUsers = () => {
    const [addNewUser, setAddNewUser] = useState(false);

    const handleAddNewUser = () => {
        setAddNewUser(!addNewUser);
    };

    return (
        <>
            <div className="w-full h-max px-6 py-10 flex flex-col gap-2 phone:gap-8 bg-[#f9fbfd] text-[rgb(87,89,98)]">
                <p className="text-[27px] font-semibold">Whitebit users list</p>
                <div className="w-full h-max px-6 py-5 bg-white">
                    <div className="full">
                        <div className="w-full h-14 flex items-center justify-between border-b-2 border-b-gray-200 px-5">
                            <input
                                type="search"
                                placeholder="name, username or email"
                                className="w-48 h-8 border outline-offset-0 outline-0 border-solid border-gray-200 pl-2 text-sm rounded outline-gray-200 outline"
                            />
                            <button className="p-2 rounded flex items-center gap-1 justify-center text-xs text-white bg-[#48abf7]">
                                <IoMail className="w-3 h-3" />
                                Send message
                            </button>
                            <button
                                className="p-2 rounded flex items-center gap-1 justify-center text-xs text-white bg-[#0e4152]"
                                onClick={handleAddNewUser}
                            >
                                <HiUserAdd className="w-3 h-3" />
                                New user
                            </button>
                        </div>
                        <div className="w-full h-max overflow-x-auto pt-6 pb-6 px-6">
                            <div className="w-full h-max">
                                <div className="w-max h-14 flex items-center text-[#000] font-bold">
                                    <div className="w-14  h-full flex items-center ">
                                        <input
                                            type="checkbox"
                                            className="w-3 h-3 cursor-pointer"
                                        />
                                    </div>
                                    <div className="w-32  h-full flex items-center  ">
                                        <p>Fullname</p>
                                    </div>
                                    <div className="w-32 h-full flex items-center ">
                                        <p>Username</p>
                                    </div>
                                    <div className="w-48 h-full flex items-center ">
                                        <p>Email</p>
                                    </div>
                                    <div className="w-36 h-full flex items-center ">
                                        <p>Phone</p>
                                    </div>
                                    <div className="w-28 h-full flex items-center ">
                                        <p>Account Balance</p>
                                    </div>
                                    <div className="w-32 h-full flex items-center ">
                                        <p>Country</p>
                                    </div>
                                    <div className="w-32 h-full flex items-center ">
                                        <p>Status</p>
                                    </div>
                                    <div className="w-32 h-full flex items-center ">
                                        <p>Registered</p>
                                    </div>
                                    <div className="w-32 h-full flex items-center ">
                                        <p>Action</p>
                                    </div>
                                </div>
                                <div className="w-max h-14 flex items-center text-[rgb(33,37,41)] text-sm">
                                    <div className="w-14  h-full flex items-center ">
                                        <input
                                            type="checkbox"
                                            className="w-3 h-3 cursor-pointer"
                                        />
                                    </div>
                                    <div className="w-32  h-full flex items-center  ">
                                        <p>Jairo Arcila</p>
                                    </div>
                                    <div className="w-32 h-full flex items-center ">
                                        <p>jarcila09</p>
                                    </div>
                                    <div className="w-48 h-full flex items-center ">
                                        <p>jairoarcila09@gmail.com </p>
                                    </div>
                                    <div className="w-36 h-full flex items-center ">
                                        <p>9897009200202</p>
                                    </div>
                                    <div className="w-28 h-full flex items-center ">
                                        <p>$10,000.00</p>
                                    </div>
                                    <div className="w-32 h-full flex items-center ">
                                        <p>Nigeria</p>
                                    </div>
                                    <div className="w-32 h-full flex items-center ">
                                        <div className="w-14 p-[0.10rem] bg-[#31ce36] rounded-full flex items-center justify-center text-white text-sm">
                                            active
                                        </div>
                                    </div>
                                    <div className="w-32 h-full flex items-center ">
                                        <p>3 weeks ago</p>
                                    </div>
                                    <div className="w-32 h-full flex items-center ">
                                        <NavLink to={`/admin/dashboard/user-details/${1}`}>
                                            <button className="p-2 bg-[#6861ce] text-xs rounded text-white">
                                                Manage
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="w-max h-14 flex items-center text-[rgb(33,37,41)] text-sm">
                                    <div className="w-14  h-full flex items-center ">
                                        <input
                                            type="checkbox"
                                            className="w-3 h-3 cursor-pointer"
                                        />
                                    </div>
                                    <div className="w-32  h-full flex items-center  ">
                                        <p>Jairo Arcila</p>
                                    </div>
                                    <div className="w-32 h-full flex items-center ">
                                        <p>jarcila09</p>
                                    </div>
                                    <div className="w-48 h-full flex items-center ">
                                        <p>jairoarcila09@gmail.com </p>
                                    </div>
                                    <div className="w-36 h-full flex items-center ">
                                        <p>9897009200202</p>
                                    </div>
                                    <div className="w-28 h-full flex items-center ">
                                        <p>$10,000.00</p>
                                    </div>
                                    <div className="w-32 h-full flex items-center ">
                                        <p>Nigeria</p>
                                    </div>
                                    <div className="w-32 h-full flex items-center ">
                                        <div className="w-14 p-[0.10rem] bg-[#31ce36] rounded-full flex items-center justify-center text-white text-sm">
                                            active
                                        </div>
                                    </div>
                                    <div className="w-32 h-full flex items-center ">
                                        <p>3 weeks ago</p>
                                    </div>
                                    <div className="w-32 h-full flex items-center ">
                                        <button className="p-2 bg-[#6861ce] text-xs rounded text-white">
                                            Manage
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="full h-20 flex items-center gap-10">
                            <select
                                name=""
                                id=""
                                className="w-20 border h-10 rounded px-2"
                            >
                                <option value="">10</option>
                                <option value="">20</option>
                                <option value="">50</option>
                                <option value="">100</option>
                                <option value="">20</option>
                            </select>
                            <select
                                name=""
                                id=""
                                className="w-40 border h-10 rounded px-2"
                            >
                                <option value="">Id</option>
                                <option value="">Name</option>
                                <option value="">Email</option>
                                <option value="">Sign up date</option>
                            </select>
                            <select
                                name=""
                                id=""
                                className="w-40 border h-10 rounded px-2"
                            >
                                <option value="">Descending</option>
                                <option value="">Ascending</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                open={addNewUser}
                onOk={handleAddNewUser}
                onCancel={() => setAddNewUser(false)}
                cancelButtonProps={{hidden: true}}
                okButtonProps={{
                    className: "bg-[#0A503D] text-white",
                    size: "middle",
                    style: {
                        backgroundColor: "#0e4152",
                        width: "100px",
                        height: "40px",
                    },
                }}
                okText={"Add User"}
                closeIcon={true}
                title={"Add New User"}
            >
                <div className="w-full h-max py-6 flex flex-col gap-4">
                    <div className="w-full h-16 ">
                        <p>UserName</p>
                        <input
                            type="text"
                            className="w-full h-10 border border-gray-200 rounded outline-blue-300 pl-2"
                        />
                    </div>
                    <div className="w-full h-16 ">
                        <p>Email</p>
                        <input
                            type="text"
                            className="w-full h-10 border border-gray-200 rounded outline-blue-300 pl-2"
                        />
                    </div>
                    <div className="w-full h-16 ">
                        <p>Password</p>
                        <input
                            type="text"
                            className="w-full h-10 border border-gray-200 rounded outline-blue-300 pl-2"
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ManageUsers;
