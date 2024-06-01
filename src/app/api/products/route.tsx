import { sql,db  } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function Get(request: Request){
    // const client = await db.connect();
    // const products = await client.query('SELECT * FROM products;');

    const products = await sql`SELECT * FROM products;`;
    return NextResponse.json(products);
}

