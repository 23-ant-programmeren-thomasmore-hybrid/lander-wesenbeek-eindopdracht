import { sql,db  } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(req,res){
    // const client = await db.connect();
    // const products = await client.query('SELECT * FROM products;');
    try{
        const products = await sql`SELECT * FROM products;`;
        return NextResponse.json({products}, {status:200});
    } catch (error){
        return NextResponse.json({error}, {status:500});
    }
}
export async function POST(req, res) {
    // Your POST logic here
    res.status(201).json("posting");
}

