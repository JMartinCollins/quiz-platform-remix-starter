import { Outlet } from '@remix-run/react';
import { SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar';
import { DashboardSidebar } from '@/components/routes/dashboard/DashboardSidebar';
import { BreadcrumbHandle, DashboardBreadcrumbs } from '~/components/routes/dashboard/DashboardBreadcrumbs';
import { $path } from 'remix-routes';
import { I18nHandle } from '~/modules/i18next/util';



export const handle: BreadcrumbHandle & I18nHandle = {
    breadcrumb: {
        title: "Dashboard",
        path: $path("/dashboard")
    },
    i18n: ['Dashboard', ...DashboardSidebar.handle.i18n]
}

export default function Dashboard() {

    return <div>
        <SidebarProvider>
            <DashboardSidebar />
            <div className='flex flex-col w-full'>
                <div className='flex items-center gap-10 bg-sidebar border-sidebar-accent border-b-2 px-4 py-6 w-full'>
                    <SidebarTrigger />
                </div>
                <div className='flex flex-col items-center h-full'>
                    <div className='h-full max-w-screen-xl w-full px-4 py-4'>
                        <DashboardBreadcrumbs />
                        <hr className="my-4 border-t border-gray-200 w-full" />
                        <Outlet />
                    </div>
                </div>
            </div>
        </SidebarProvider>
    </div>
}



