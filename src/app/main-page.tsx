"use client"
import CanvasPickles from "@/app/RenderPickle";
import NavBar from "@/app/navbar";
import WinkleMand from "@/app/WinkleMand";
import {useState} from "react";

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import Products from "@/app/Products";
import ProductDetails from "@/app/ProductDetails";

export enum Pages{
    Products = 1,
    ProductDetails = 2,
}

export default function MainPage(){
    const [page, setPage] = useState();
    const [shoppingCartOpen, setShoppingCartOpen] = useState(false);

    async function makeDatabaseThing(){
        try {
            const result =
                await sql`CREATE TABLE Products (Id int, Name varchar(255), InStock int, Price double, description varchar(1203), pictureName varchar(255));`;
            return NextResponse.json({ result }, { status: 200 });
        } catch (error) {
            return NextResponse.json({ error }, { status: 500 });
        }
    }


    return (
        <main className="bg-orange-200">
            <NavBar setShoppingCartOpen={setShoppingCartOpen}/>
            <div className="mx-auto w-3/4">
                <CanvasPickles/>
                {
                    shoppingCartOpen? <WinkleMand setShoppingCartOpen={setShoppingCartOpen}/>:<></>
                }
                {
                    page == Pages.Products?
                        <Products setPages={setPage}/>
                        : page      == Pages.ProductDetails?
                        <ProductDetails/>:<></>
                }
                <Products/>
            </div>
        </main>
    )
}