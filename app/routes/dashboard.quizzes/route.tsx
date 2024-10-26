import { useMatches } from '@remix-run/react'
import { BreadcrumbHandle } from '../dashboard/DashboardBreadcrumbs'

export const handle: BreadcrumbHandle = {
    breadcrumb: {
        "title": "Quizzes",
        "path": "/dashboard/quizzes"
    }
}

export default function PageOne() {
    const matches = useMatches();
    console.log(matches)
    return <div>
        <h1 className='text-2xl font-bold'>Quizzes</h1>
    </div>
}

