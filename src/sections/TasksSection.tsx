import {
	Card,
	CardDescription,
	CardTitle,
} from "@/components/shadcn/ui/card";
import Image from "next/image";
import selfie from "@/assets/selfie.gif";
import moving from "@/assets/moving.gif";
import output from "@/assets/output.gif";
import { memo, useMemo } from "react";

interface CardItem {
	title: string;
	description: string;
	image: any; // Accept StaticImageData or string for next/image
	href?: string;
	status?: "active" | "pending" | "inactive";
}

interface TasksSectionProps {
	activeSection?: string;
	items?: CardItem[];
	alternateSides?: boolean;
}

// Memoized CardItem component to avoid unnecessary re-renders
const TaskCard = memo(function TaskCard({
	t,
	reverse,
}: {
	t: CardItem;
	reverse: boolean;
}) {
	return (
		<Card
			key={t.title}
			className={
				"group relative flex flex-col " +
				(reverse ? "md:flex-row-reverse" : "md:flex-row") +
				" items-center p-4 gap-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-1 hover:ring-primary/40 cursor-pointer"
			}
		>
			{/* Image side */}
			<div className="relative w-full md:w-1/3 h-50 md:h-80 rounded-lg overflow-hidden">
				<Image
					src={t.image}
					alt={t.title}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					priority // Hint browser to preload for above-the-fold
					unoptimized
				/>
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
			</div>

			{/* Text side */}
			<div className="flex-1">
				<div className="flex items-center gap-2">
					<CardTitle className="mb-1 transition-colors duration-300 group-hover:text-foreground">
						{t.title}
					</CardTitle>
					<svg
						className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5"
						viewBox="0 0 24 24"
						fill="none"
						aria-hidden="true"
					>
						<path
							d="M5 12h14M13 5l7 7-7 7"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<CardDescription className="transition-colors duration-300">
					{t.description}
				</CardDescription>
			</div>

			{/* decorative glow on hover */}
			<div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-r from-primary/10 to-fuchsia-500/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
		</Card>
	);
});

export function TasksSection({
	activeSection,
	items,
	alternateSides = true,
}: TasksSectionProps) {
	// useMemo to avoid recalculating data array on every render
	const data: CardItem[] = useMemo(
		() =>
			items ?? [
				{
					title: "Selfie View",
					description: "Diffrent angles from selfies",
					image: selfie,
					status: "active",
					href: "#",
				},
				{
					title: "Instance Segmentation",
					description:
						"Pixel-accurate instance masks with Mask R-CNN and SAM variants. Focus on fine edges.",
					image: moving,
					status: "pending",
				},
				{
					title: "Pose Estimation",
					description:
						"Keypoint extraction for humans and tools with real-time constraints on edge devices.",
					image: output,
					status: "active",
				},
			],
		[items]
	);

	return (
		<section>
			<div className="text-center my-12">
				<span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
					Vision · Overview
				</span>
				<h2 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
					<span className="bg-gradient-to-r from-primary to-fuchsia-600 bg-clip-text text-transparent">
						My Vision Tasks
					</span>
				</h2>
				<p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
					Submission for the First Homework
				</p>
			</div>

			<div className="flex justify-center m-auto mb-6">
				<div className="p-4 w-full max-w-4xl space-y-6">
					{data.map((t, idx) => {
						const reverse = alternateSides && idx % 2 === 1;
						return <TaskCard key={t.title} t={t} reverse={reverse} />;
					})}
				</div>
			</div>
		</section>
	);
}
