import React, { useState } from "react";
import "../styles/app.module.css";

const Card = ({ id, title, image, description, deadline, targetAmount, amount_collected, status, fundCampaign }) => {
    const [fundAmount, setFundAmount] = useState("");


    const handleAmountChange = (e) => {
        setFundAmount(e.target.value);
    };

    const convertToIST = (timestamp) => {
        const timestampInSeconds = timestamp / 1_000_000_000;
        const date = new Date(timestampInSeconds * 1000); 
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'Asia/Kolkata' // Convert to IST
        };
        return new Intl.DateTimeFormat('en-IN', options).format(date);
    };

    return (
        <div className="card-container">
            <div className="card-div">
                <div className="card-inner p-2">
                    <img className="object-cover rounded overflow-hidden" alt="NFT" src={image} />
                    <div className="card-content flex justify-center items-center">
                        <div>
                            <p className="text-white text-3xl mt-3">
                                TITLE: <span className="font-thin">{title}</span>
                            </p>
                            <p className="text-white mt-2">
                                DESCRIPTION: <span className="font-thin">{description}</span>
                            </p>
                            <p className="text-white mt-2">
                                TARGET AMOUNT: <span className="font-thin">{targetAmount}</span>
                            </p>
                            <p className="text-white mt-2">
                                AMOUNT COLLECTED: <span className="font-thin">{amount_collected}</span>
                            </p>
                            <p className="text-white mt-2">
                                DEADLINE: <span className="font-thin">{convertToIST(deadline)}</span>
                            </p>
                        </div>
                        <div>
                            {status !== "closed" ? (
                                <div className="mt-4 w-full">
                                    <label htmlFor="fundAmount" className="text-sm text-white mb-2">
                                        Enter Amount to Fund:
                                    </label>
                                    <input
                                        id="fundAmount"
                                        type="number"
                                        value={fundAmount}
                                        onChange={handleAmountChange}
                                        placeholder="Amount"
                                        className="w-full p-2 border text-white border-gray-300 rounded-md"
                                    />
                                    <button
                                        onClick={() => fundCampaign(id, fundAmount)}
                                        className="w-1/2 bg-purple-500 text-white mt-3 p-2 rounded-lg hover:bg-purple-600"
                                    >
                                        Fund
                                    </button>
                                </div>
                            ) : (
                                <button
                                    disabled
                                    className="w-full bg-gray-400 text-white mt-3 p-2 rounded-lg hover:cursor-not-allowed"
                                >
                                    Closed
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
