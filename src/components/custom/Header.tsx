import { Badge } from "@/components/shadcn/ui/badge";

export function Header() {
	return (
		<header className="border-b bg-white">
			<div className="container mx-auto px-4 py-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-3xl font-bold text-gray-900">
							Computer Vision App
						</h1>
						<p className="text-gray-600 mt-1">
							Comprehensive overview of computer vision concepts and
							implementations
						</p>
					</div>
					<div className="flex items-center space-x-2">
						<Badge variant="outline" className="text-sm">
							v1.0.0
						</Badge>
					</div>
				</div>
			</div>
		</header>
	);
}
