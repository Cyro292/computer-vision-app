import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/shadcn/ui/card";
import { Badge } from "@/components/shadcn/ui/badge";
import { Button } from "@/components/shadcn/ui/button";

interface FooterSectionProps {
	activeSection: string;
}

export function FooterSection({}: FooterSectionProps) {
	const quickLinks = [
		{
			name: "Documentation",
			href: "#",
			description: "Learn more about our APIs",
		},
		{ name: "GitHub Repository", href: "#", description: "View source code" },
		{ name: "Community", href: "#", description: "Join our Discord" },
		{ name: "Support", href: "#", description: "Get help and support" },
	];

	const technologies = [
		{ name: "React", version: "19.1.0", color: "bg-blue-100 text-blue-800" },
		{ name: "Next.js", version: "15.5.2", color: "bg-gray-100 text-gray-800" },
		{ name: "TypeScript", version: "5.x", color: "bg-blue-100 text-blue-800" },
		{
			name: "Tailwind CSS",
			version: "4.x",
			color: "bg-cyan-100 text-cyan-800",
		},
		{
			name: "shadcn/ui",
			version: "Latest",
			color: "bg-purple-100 text-purple-800",
		},
	];

	const resources = [
		{ name: "Computer Vision Basics", href: "#", type: "Tutorial" },
		{ name: "Deep Learning Guide", href: "#", type: "Guide" },
		{ name: "API Reference", href: "#", type: "Documentation" },
		{ name: "Best Practices", href: "#", type: "Article" },
	];

	return (
		<section id="footer" className="min-h-screen bg-gray-100 relative">
			<div className="container mx-auto px-4 py-8 h-full">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-8">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Footer
						</h2>
						<p className="text-gray-600">
							Resources and additional information
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
						{/* Quick Links */}
						<Card>
							<CardHeader>
								<CardTitle>Quick Links</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-2">
									{quickLinks.map((link, index) => (
										<div key={index}>
											<a
												href={link.href}
												className="block p-2 rounded hover:bg-gray-50"
											>
												<h4 className="font-medium text-gray-900">
													{link.name}
												</h4>
												<p className="text-sm text-gray-600">
													{link.description}
												</p>
											</a>
										</div>
									))}
								</div>
							</CardContent>
						</Card>

						{/* Technologies */}
						<Card>
							<CardHeader>
								<CardTitle>Technologies</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-2">
									{technologies.map((tech, index) => (
										<div
											key={index}
											className="flex items-center justify-between p-2 rounded bg-gray-50"
										>
											<Badge className={tech.color}>{tech.name}</Badge>
											<span className="text-sm text-gray-500">
												v{tech.version}
											</span>
										</div>
									))}
								</div>
							</CardContent>
						</Card>

						{/* Learning Resources */}
						<Card>
							<CardHeader>
								<CardTitle>Resources</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-2">
									{resources.map((resource, index) => (
										<div
											key={index}
											className="flex items-center justify-between p-2 rounded hover:bg-gray-50"
										>
											<div>
												<h4 className="font-medium text-gray-900">
													{resource.name}
												</h4>
												<Badge variant="outline" className="text-xs">
													{resource.type}
												</Badge>
											</div>
											<Button variant="ghost" size="sm">
												View
											</Button>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Simple Footer Info */}
					<div className="text-center pt-8 border-t border-gray-200">
						<p className="text-gray-600 mb-4">
							© 2024 Computer Vision App. Built with Next.js and shadcn/ui.
						</p>
						<div className="flex justify-center space-x-6 text-sm">
							<a href="#" className="text-gray-500 hover:text-gray-900">
								GitHub
							</a>
							<a href="#" className="text-gray-500 hover:text-gray-900">
								Documentation
							</a>
							<a href="#" className="text-gray-500 hover:text-gray-900">
								Support
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
