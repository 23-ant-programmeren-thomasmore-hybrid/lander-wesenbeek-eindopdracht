
export default function NavBar(){
    return(
        <nav className="w-full mx-auto z-10 fixed">
            <div className="grid grid-cols-3 gap-x-8">
                <nav className="grid grid-cols-4">
                    <a className="bg-stone-50 p-3 border-2 border-solid hover:border-none border-slate-600 text-center" href="/">About me</a>
                    <a className="bg-stone-50 p-3 border-2 border-solid hover:border-none border-slate-600 text-center" href="experience">Experience</a>
                    <a className="bg-stone-50 p-3 border-2 border-solid hover:border-none border-slate-600 text-center rounded-br-lg" href="">Hobby</a>
                </nav>
            </div>
        </nav>
    )
}