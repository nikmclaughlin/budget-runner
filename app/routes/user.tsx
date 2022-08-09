import { Outlet } from "@remix-run/react";

export default function userRoute(){

    return(
        <div className="grid grid-cols-2">
            <Outlet/>
        </div>
    );
}