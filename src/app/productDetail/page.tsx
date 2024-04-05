
export default function Home(){
    return (
        <div className="mx-auto w-3/4 ">
            <div className="grid grid-cols-2 gap-x-16 gap-y-16 grid-cols-4">
                <div
                    className=" w-full overflow-hidden rounded-lg aspect-h-8 aspect-w-7">
                    <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                         className="h-max h-full w-full object-cover object-center group-hover:opacity-75"/>
                </div>
                <div>
                    <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
                    <p>Can you believe that there is a bottle quite like this one, Ofcourse you can't with your deprecated eyesigth</p>
                </div>
            </div>
        </div>
    )
}