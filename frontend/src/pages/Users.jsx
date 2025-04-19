/*
import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";

import {  MessageSquare, Settings, Users } from "lucide-react";


const GetAllUsers = () => {

    const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

    const { onlineUsers } = useAuthStore();
    const [showOnlineOnly, setShowOnlineOnly] = useState(false);

    useEffect(() => {

        getUsers();

        }, [getUsers]);

    const filteredUsers = showOnlineOnly
         ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

    if (isUsersLoading) return ("/profile.png");

    
    return (
        <main className="container">
            <div className="border-b border-base-300 w-full p-5">
                <div className="flex items-center gap-2">
                    <Users className="size-6" />
                    <span className="font-medium hidden lg:block">Contacts</span>
                </div>
        
                <div className="mt-3 hidden lg:flex items-center gap-2">
                    <label className="cursor-pointer flex items-center gap-2">
                    <input
                    type="checkbox"
                    checked={showOnlineOnly}
                    onChange={(e) => setShowOnlineOnly(e.target.checked)}
                    className="checkbox checkbox-sm"
                    />
                   <span className="text-sm">Show online only</span>
                   </label>

                   <span className="text-xs text-zinc-500">({onlineUsers.length - 1} online)</span>
                </div>
            </div>


            
            




<div className="overflow-y-auto w-full py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {filteredUsers.map((user) => (
        <Link
            to="friend-profile"
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`card bg-base-200 shadow-lg hover:bg-base-300 transition-all 
                ${selectedUser?._id === user._id ? "bg-base-300 ring-2 ring-primary scale-105" : ""} 
                p-6 rounded-2xl`}
        >
            <div className="card-body items-center p-6 space-y-4">
                <div className="relative w-full h-40">
                    <img
                        src={user.profilePic || "/avatar.png"}
                        alt={user.name}
                        className="w-full h-full object-cover shadow-md  border-base-100"
                    />
                    {onlineUsers.includes(user._id) && (
                        <span
                            className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 
                                rounded-full ring-2 ring-base-200"
                        />
                    )}
                </div>
                <div className="text-center w-full">
                    <h2 className="card-title font-bold text-lg truncate w-full">{user.fullName}</h2>
                    <p className="text-md text-zinc-500 font-medium">
                        {onlineUsers.includes(user._id) ? <span className="text-green-500">Online</span> : "Offline"}
                    </p>
                </div>
                <div className="flex sm:flex-row sm:items-end justify-between w-full pt-4 border-t border-base-300">
                    
                    <Link 
                        to="/signup" 
                        onClick={() => handleLike(user)} 
                        className="btn btn-sm btn-ghost text-accent"
                      >
                      👍 
                    </Link>
                    <Link 
                        to="/settings" 
                        onClick={() => handleComment(user)} 
                        className="btn btn-sm btn-ghost text-accent"
                      >
                      💬 
                    </Link>
                    <Link 
                        to="/login" 
                        onClick={() => handleShare(user)} 
                        className="btn btn-sm btn-ghost text-accent"
                      >
                      🔗 
                    </Link>
                    

                    
                    
                </div>
            </div>
        </Link>
    ))}

    {filteredUsers.length === 0 && (
        <div className="text-center text-zinc-500 py-6 text-lg font-semibold col-span-full">No online users</div>
    )}
</div>




        
            
                

            
            
        </main>
    );
};

export default GetAllUsers;


























*/

import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";

import { MessageSquare, Settings, Users } from "lucide-react";

const GetAllUsers = () => {
    const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
    const { onlineUsers } = useAuthStore();
    const [showOnlineOnly, setShowOnlineOnly] = useState(false);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const filteredUsers = showOnlineOnly
        ? users.filter((user) => onlineUsers.includes(user._id))
        : users;

    if (isUsersLoading) return <img src="/profile.png" alt="Loading..." />;

    return (
        <main className="container">
            <div className="border-b border-base-300 w-full p-5">
                <div className="flex items-center gap-2">
                    <Users className="size-6" />
                    <span className="font-medium hidden lg:block">Contacts</span>
                </div>
                <div className="mt-3 hidden lg:flex items-center gap-2">
                    <label className="cursor-pointer flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={showOnlineOnly}
                            onChange={(e) => setShowOnlineOnly(e.target.checked)}
                            className="checkbox checkbox-sm"
                        />
                        <span className="text-sm">Show online only</span>
                    </label>
                    <span className="text-xs text-zinc-500">({onlineUsers.length - 1} online)</span>
                </div>
            </div>

            <div className="overflow-y-auto w-full py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredUsers.map((user) => (
                    <Link
                        to="/friend-profile"
                        key={user._id}
                        onClick={() => setSelectedUser(user)}
                        className={`card bg-base-200 shadow-lg hover:bg-base-300 transition-all 
                            ${selectedUser?._id === user._id ? "bg-base-300 ring-2 ring-primary scale-105" : ""} 
                            p-6 rounded-2xl`}
                    >
                        <div className="card-body items-center p-6 space-y-4">
                            <div className="relative w-full h-40">
                                <img
                                    src={user.profilePic || "/avatar.png"}
                                    alt={user.name}
                                    className="w-full h-full object-cover shadow-md border-base-100"
                                />
                                {onlineUsers.includes(user._id) && (
                                    <span className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 
                                        rounded-full ring-2 ring-base-200" />
                                )}
                            </div>
                            <div className="text-center w-full">
                                <h2 className="card-title font-bold text-lg truncate w-full">{user.fullName}</h2>
                                <p className="text-md text-zinc-500 font-medium">
                                    {onlineUsers.includes(user._id) ? <span className="text-green-500">Online</span> : "Offline"}
                                </p>
                            </div>
                            <div className="flex sm:flex-row sm:items-end justify-between w-full pt-4 border-t border-base-300">
                                <button onClick={() => handleLike(user)} className="btn btn-sm btn-ghost text-accent">
                                    👍
                                </button>
                                <button onClick={() => handleComment(user)} className="btn btn-sm btn-ghost text-accent">
                                    💬
                                </button>
                                <button onClick={() => handleShare(user)} className="btn btn-sm btn-ghost text-accent">
                                    🔗
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
                {filteredUsers.length === 0 && (
                    <div className="text-center text-zinc-500 py-6 text-lg font-semibold col-span-full">No online users</div>
                )}
            </div>
        </main>
    );
};

export default GetAllUsers;
