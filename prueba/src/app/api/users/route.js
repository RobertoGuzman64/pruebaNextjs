import { NextResponse } from 'next/server'

export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return NextResponse.json(data);
}
export function POST() {
    // extract params
    // query database
    // communite with other services
    return NextResponse.json({
        message: "Creando Datos"
    });
}
export function PUT() {
    // extract params
    // query database
    // communite with other services
    return NextResponse.json({
        message: "Actualizando Datos"
    });
}
export function DELETE() {
    // extract params
    // query database
    // communite with other services
    return NextResponse.json({
        message: "Eliminando Datos"
    });
}