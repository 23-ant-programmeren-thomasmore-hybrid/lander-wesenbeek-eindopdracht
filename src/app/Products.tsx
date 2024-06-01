import {Pages} from "@/app/main-page";
import {useState} from "react";

const getAllProducts = async () =>{
    const data = await fetch('/api/products', {
        method: "GET",
    })//.then((response) => response.json())
       // .then((data) => {
       //     for (const product of data){

       //     }
       // });
    const products = await data.json();
    console.log("the data = " + products.products.rows[0].description);
    return products.products.rows;
}

export default function Products(props){
    const {setPage} = props;
    const {products} = useState(getAllProducts());
    return(
        <div className="grid grid-cols-3 gap-x-16 gap-y-16 grid-cols-4">
            {
                products?.forEach(<DisplayProduct setPages={setPage}/>)
            }
            <button onClick={getAllProducts}></button>
        </div>
    )
}

function DisplayProduct(props){
    let {setPage} = props;
    function SwitchToDetailsPage(){
        setPage = Pages.ProductDetails;
    }

    return (
        <a className="group bg-gray-300 overflow-hidden rounded-lg" onClick={SwitchToDetailsPage}>
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
