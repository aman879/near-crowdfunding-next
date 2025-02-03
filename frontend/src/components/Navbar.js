import { useEffect, useState, useContext } from 'react';
import { NearContext } from '@/wallets/near';

export const Navbar = ({ onRouteChange }) => {
    const { signedAccountId, wallet } = useContext(NearContext);
    const [action, setAction] = useState(() => { });
    const [label, setLabel] = useState('Loading...');

    useEffect(() => {
        if (!wallet) return;

        if (signedAccountId) {
            setAction(() => wallet.signOut);
            setLabel(`${signedAccountId}`);
        } else {
            setAction(() => wallet.signIn);
            setLabel('Connect');
        }
    }, [signedAccountId, wallet]);

    return (
        <nav className="fixed top-0 w-full z-10 ">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <p
                    className="text-white text-xl font-semibold cursor-pointer uppercase no-underline"
                    onClick={() => onRouteChange('home')}
                >
                    Ignitus Networks
                </p>
                <ul className='hidden lg:flex space-x-6'>
                    {["Explore", "Create"].map((item, index) => (
                        <li key={index} className="text-gray-300 hover:text-white cursor-pointer" onClick={() => onRouteChange(item.toLowerCase())}>
                            {item}
                        </li>
                    ))}
                </ul>
                <button
                    className="flex flex-row items-center justify-center border-[0.5px] font-semibold p-2 text-sm text-gray-500 rounded-lg hover:bg-purple-500 hover:border-gray-950 hover:text-slate-50 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={action}
                >
                    {label}
                </button>

            </div>
        </nav>
    );
};
