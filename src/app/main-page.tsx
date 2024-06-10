"use client"
import CanvasPickles from "@/app/RenderPickle";
import NavBar from "@/app/navbar";
import WinkleMand from "@/app/WinkleMand";
import {useState} from "react";

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import Products from "@/app/Products";
import ProductDetails from "@/app/ProductDetails";
import StartPage from "@/app/StartPage";

export enum Pages{
    Start = 1,
    Experience = 2,
}

export default function MainPage(){
    const [page, setPage] = useState(1);
    const [shoppingCartOpen, setShoppingCartOpen] = useState(false);

    return (
        <main className="bg-orange-200">
            <div >
                {
                    page == Pages.Start?
                        <StartPage setPages={setPage}/>
                        : page == Pages.Experience?
                        <StartPage/>:<></>
                }
            </div>
        </main>
    )
}