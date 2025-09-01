import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcn/ui/card";
import { Badge } from "@/components/shadcn/ui/badge";

interface StatsSectionProps {
	stats: {
		totalSections: number;
		activeSections: number;
		pendingSections: number;
		inactiveSections: number;
		totalFeatures: number;
	};
}

export function StatsSection({ stats }: StatsSectionProps) {
	const statCards = [
		{
			title: "Total Sections",
			value: stats.totalSections,
			description: "Computer vision topics covered",
			color: "bg-blue-50 border-blue-200",
		},
		{
			title: "Active Sections",
			value: stats.activeSections,
			description: "Currently in development",
			color: "bg-green-50 border-green-200",
		},
		{
			title: "Pending Sections",
			value: stats.pendingSections,
			description: "Planned for future",
			color: "bg-yellow-50 border-yellow-200",
		},
		{
			title: "Total Features",
			value: stats.totalFeatures,
			description: "Individual features implemented",
			color: "bg-purple-50 border-purple-200",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{statCards.map((stat, index) => (
				<Card key={index} className={`${stat.color} border-2`}>
					<CardHeader className="pb-2">
						<CardTitle className="text-sm font-medium text-gray-600">
							{stat.title}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-gray-900 mb-1">
							{stat.value}
						</div>
						<p className="text-xs text-gray-500">{stat.description}</p>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
