import { Outlet } from "@tanstack/react-router";

export default function (){
    return (
        <>
            <h1>Header</h1>
            <div>
                <Outlet />
            </div>
            <h1>footer</h1>
        </>
    )
}