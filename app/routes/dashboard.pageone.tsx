import { BreadcrumbHandle } from '~/components/layouts/dashboard/dashboardBreadcrumbs';

export const handle: BreadcrumbHandle = {
    breadcrumb: {
        "title": "Page One",
        "path": "/dashboard/pageone"
    }
}

export default function DashboardIndex() {
    return <div>Page one</div>;
}

