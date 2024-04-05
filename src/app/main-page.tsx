import CanvasPickles from "@/app/RenderPickle";
import NavBar from "@/app/navbar";
import WinkleMand from "@/app/WinkleMand";

export default function MainPage(){
    return (
        <main className="bg-orange-200">
            <NavBar/>
            <div className="mx-auto w-3/4">
                <CanvasPickles/>

                <div className="grid grid-cols-3 gap-x-16 gap-y-16 grid-cols-4">
                    <DisplayProduct/>
                    <DisplayProduct/>
                    <DisplayProduct/>
                    <DisplayProduct/>
                    <DisplayProduct/>
                    <DisplayProduct/>
                </div>
            </div>
        </main>
    )
}

function DisplayProduct(){
   return (
       <a href="productDetail" className="group bg-gray-300 overflow-hidden rounded-lg">
           <div
               className=" w-full overflow-hidden rounded-lg aspect-h-8 aspect-w-7">
               <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                    className="h-max h-full w-full object-cover object-center group-hover:opacity-75"/>
           </div>
           <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
           <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
       </a>
   )
}