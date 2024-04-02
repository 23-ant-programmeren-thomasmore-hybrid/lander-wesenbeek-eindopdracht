import CanvasPickles from "@/app/RenderPickle";

export default function MainPage(){
    return (
        <main className="bg-orange-200">
            <div className="mx-auto">
                <CanvasPickles/>
                <div className="grid grid-cols-1 gap-x-12 gap-y-10 grid-cols-4">
                    <DisplayProduct/>
                    <DisplayProduct/>
                </div>
            </div>
        </main>
    )
}

function DisplayProduct(){
   return (
       <a href="#" className="group bg-gray-300 overflow-hidden rounded-lg">
           <div
               className=" w-full overflow-hidden rounded-lg aspect-h-8 aspect-w-7">
               <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                    className="h-full w-full object-cover object-center group-hover:opacity-75"/>
           </div>
           <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
           <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
       </a>
   )
}