import { Outlet } from '@remix-run/react';

export default function Dashboard() {
    return <div>
        <div>{`Here's the layout`}</div>
        <div>
            <Outlet />
        </div>
    </div>;
}

