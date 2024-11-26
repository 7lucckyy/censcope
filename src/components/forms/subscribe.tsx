"use client";
import React from "react";

export default function SubscribeForm() {
    const [email, setEmail] = React.useState("");

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex h-16">
            <input
                required type="email" value={email}
                onChange={ev => setEmail(ev.target.value)}
                className="h-full flex-1 border-none outline-none px-6" placeholder="Your email address"
            />
            <button className="bg-primary text-white border-none px-6 outline-none uppercase text-xl font-bold">sign up</button>
        </form>
    );
}