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
		<section id="footer" className="min-h-300px relative">
			<div className="container mx-auto px-4 py-8 h-full">
				<div className="max-w-4xl mx-auto">

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
