
export default function NavBar(){
    return(
        <nav className="w-full mx-auto z-10 fixed">
            <div className="grid grid-cols-3 gap-x-16">
                <div/>
                <div/>
                <div className="flex items-stretch m-4 float-right">
                    <a className="mx-2 py-2">
                        page 1
                    </a>
                    <a className="mx-2 py-2">
                        page 2
                    </a>
                    <a className="mx-2 py-2">
                        page 3
                    </a>
                    <button className="p-2 ml-16 bg-gray-200">
                        shopping cart
                    </button>
                </div>
            </div>
        </nav>
    )
}