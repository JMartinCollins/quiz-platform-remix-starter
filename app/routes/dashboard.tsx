import { Outlet } from '@remix-run/react';
import { BreadcrumbHandle, DashboardBreadcrumbs } from '~/components/layouts/dashboard/dashboardBreadcrumbs';



export const handle: BreadcrumbHandle = {
    breadcrumb: {
        title: "Dashboard",
        path: "/dashboard"
    }
}

export default function Dashboard() {

    return <div>
        <div>
            <DashboardBreadcrumbs />
        </div>
        <div>
            <Outlet />
        </div>
    </div>;
}



