import { memo } from "react"; // Import memo
import Prism from "@/components/reactbits/Backgrounds/Prism/Prism";
import { Badge } from "@/components/shadcn/ui/badge";

interface HeaderSectionProps {
	activeSection: string;
	onSectionChange: (section: string) => void;
}

export const HeaderSection = memo(function HeaderSection({ // Wrap the component with memo for performance optimization
	activeSection,
	onSectionChange,
}: HeaderSectionProps) {
	return (
		<section
			id="header"
			className="min-h-screen bg-black relative overflow-hidden flex flex-col" // Make section a flex column to control vertical layout
		>
			{/* Prism Background */}
			<div className="absolute inset-0 z-0">
				<Prism
					height={2}
					baseWidth={4}
					animationType="3drotate"
					glow={1}
					noise={0}
					colorFrequency={1}
					hueShift={0}
					scale={2.8}
					suspendWhenOffscreen={true} // Add this prop to pause animation when off-screen
				/>
			</div>

			{/* Spacer for the fixed PillNav at the top */}
			<div className="h-14 w-full relative z-10"></div>

			{/* Content */}
			<div className="container mx-auto px-4 flex-grow flex items-center justify-center relative z-10"> {/* Take remaining height and center content */}
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
						Introduction to
						<span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							Computer Vision
						</span>
					</h1>
					<Badge
						variant="outline"
						className="mb-6 text-sm border-white/20 text-white/80 bg-white/10"
					>
						CS180
					</Badge>
					<p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
						My Submition for the Course Computer Vision at the UC Berkeley.
					</p>
				</div>
			</div>
		</section>
	);
}); // Close memo wrapper
