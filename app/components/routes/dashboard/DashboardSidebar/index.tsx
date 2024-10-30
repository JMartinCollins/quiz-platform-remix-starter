import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { $path } from 'remix-routes'
import { useTranslation } from 'react-i18next';

const menuItems = [
    {
        title: "home",
        url: $path("/"),
        icon: Home,
    },
    {
        title: "notifications",
        url: "#",
        icon: Inbox,
    },
    {
        title: "quizzes",
        url: $path("/dashboard/quizzes"),
        icon: Calendar,
    },
    {
        title: "questions",
        url: "#",
        icon: Search,
    },
    {
        title: "settings",
        url: "#",
        icon: Settings,
    },
]

export const DashboardSidebar = () => {
    const { t } = useTranslation('DashboardSidebar');

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>{`${t('home')}`}Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{t(item.title) as string}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

DashboardSidebar.handle = {
    i18n: ['DashboardSidebar']
}
