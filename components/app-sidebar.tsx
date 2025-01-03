import React from "react";
import {
	ChartNoAxesColumnIncreasing,
	Wallet,
	CreditCard,
	LayoutDashboard,
	Box,
} from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarHeader,
	SidebarFooter,
	SidebarMenuBadge,
} from "@/components/ui/sidebar";
export function AppSidebar() {
	const items = [
		{
			title: "Dashboard",
			url: "#",
			icon: LayoutDashboard,
			budget: null,
		},
		{
			title: "Transactions",
			url: "#",
			icon: CreditCard,
			budget: 2,
		},
		{
			title: "Budget Planner",
			url: "#",
			icon: Wallet,
			budget: 5,
		},
		{
			title: "Reports",
			url: "#",
			icon: ChartNoAxesColumnIncreasing,
			budget: 3,
		},
	];
	return (
		<>
			<Sidebar>
				<SidebarContent className="mx-3 mt-4">
					<SidebarHeader className="flex">
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a className="text-[16px] font-extrabold text-black py-6">
										<Box color="blue" />
										<span>Wealthify</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarHeader>
					<SidebarGroup>
						<SidebarGroupContent>
							<SidebarMenu className="space-y-2">
								{items.map((item) => (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild className="my-0.5">
											<a href={item.url}>
												<item.icon />
												<span>{item.title}</span>
											</a>
										</SidebarMenuButton>
										<SidebarMenuBadge>{item.budget}</SidebarMenuBadge>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
					<SidebarFooter></SidebarFooter>
				</SidebarContent>
			</Sidebar>
		</>
	);
}
