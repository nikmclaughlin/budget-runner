import { Outlet } from "@remix-run/react";

export default function inputs(){
    return(
        <div className="col-span-1">
        <Outlet/>
        </div>
    );
}