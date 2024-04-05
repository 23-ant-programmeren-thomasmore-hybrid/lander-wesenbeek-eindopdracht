
export default function WinkleMand(props){
    const {setShoppingCartOpen} = props;

    function closeWinkelMand(){
        setShoppingCartOpen(false);
    }

    return(
        <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">

        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <div className="absolute left-0 top-0  flex pr-2 pt-4 ">
                        <button type="button" onClick={closeWinkelMand}
                                className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div className=" relative w-screen max-w-md">
                        <div className="h-full overflow-y-scroll bg-white p-6 ">
                            hi
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}