import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/shadcn/ui/card";
import { Badge } from "@/components/shadcn/ui/badge";
import { Button } from "@/components/shadcn/ui/button";
import { OverviewSection as OverviewSectionType } from "@/data/overview";

interface OverviewSectionProps {
	section: OverviewSectionType;
}

export function OverviewSection({ section }: OverviewSectionProps) {
	const getStatusColor = (status: string) => {
		switch (status) {
			case "active":
				return "bg-green-100 text-green-800 hover:bg-green-200";
			case "pending":
				return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
			case "inactive":
				return "bg-gray-100 text-gray-800 hover:bg-gray-200";
			default:
				return "bg-gray-100 text-gray-800 hover:bg-gray-200";
		}
	};

	return (
		<Card className="w-full">
			<CardHeader>
				<div className="flex items-center justify-between">
					<CardTitle className="text-xl">{section.title}</CardTitle>
					<Badge className={getStatusColor(section.status)}>
						{section.status.charAt(0).toUpperCase() + section.status.slice(1)}
					</Badge>
				</div>
				<CardDescription className="text-base">
					{section.description}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div>
						<h4 className="font-semibold text-sm text-gray-700 mb-2">
							Key Features:
						</h4>
						<ul className="space-y-1">
							{section.features.map((feature, index) => (
								<li
									key={index}
									className="text-sm text-gray-600 flex items-center"
								>
									<span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
									{feature}
								</li>
							))}
						</ul>
					</div>
					<div className="flex items-center justify-between pt-2 border-t">
						<span className="text-xs text-gray-500">
							Last updated: {section.lastUpdated}
						</span>
						<Button variant="outline" size="sm">
							View Details
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
