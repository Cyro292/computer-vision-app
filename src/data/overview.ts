export interface OverviewSection {
	id: string;
	title: string;
	description: string;
	status: "active" | "inactive" | "pending";
	features: string[];
	lastUpdated: string;
}

export const overviewSections: OverviewSection[] = [
	{
		id: "computer-vision-basics",
		title: "Computer Vision Basics",
		description:
			"Fundamental concepts and techniques in computer vision including image processing, feature detection, and pattern recognition.",
		status: "active",
		features: [
			"Image preprocessing and enhancement",
			"Edge detection algorithms",
			"Feature extraction methods",
			"Pattern recognition techniques",
		],
		lastUpdated: "2024-01-15",
	},
	{
		id: "deep-learning-models",
		title: "Deep Learning Models",
		description:
			"Advanced neural network architectures for computer vision tasks including CNNs, R-CNNs, and transformer-based models.",
		status: "active",
		features: [
			"Convolutional Neural Networks (CNNs)",
			"Object detection models",
			"Image segmentation networks",
			"Vision transformers",
		],
		lastUpdated: "2024-01-20",
	},
	{
		id: "image-classification",
		title: "Image Classification",
		description:
			"Techniques for categorizing and labeling images using machine learning and deep learning approaches.",
		status: "pending",
		features: [
			"Multi-class classification",
			"Transfer learning",
			"Data augmentation",
			"Model evaluation metrics",
		],
		lastUpdated: "2024-01-10",
	},
	{
		id: "object-detection",
		title: "Object Detection",
		description:
			"Methods for identifying and localizing objects within images, including bounding box regression and instance segmentation.",
		status: "inactive",
		features: [
			"YOLO (You Only Look Once)",
			"R-CNN family",
			"Single Shot Detectors",
			"Anchor-free detection",
		],
		lastUpdated: "2024-01-05",
	},
	{
		id: "image-segmentation",
		title: "Image Segmentation",
		description:
			"Techniques for partitioning images into meaningful regions and understanding pixel-level classification.",
		status: "active",
		features: [
			"Semantic segmentation",
			"Instance segmentation",
			"Panoptic segmentation",
			"U-Net architectures",
		],
		lastUpdated: "2024-01-18",
	},
	{
		id: "video-analysis",
		title: "Video Analysis",
		description:
			"Computer vision techniques applied to video sequences for motion analysis, tracking, and temporal understanding.",
		status: "pending",
		features: [
			"Optical flow estimation",
			"Object tracking",
			"Action recognition",
			"Video summarization",
		],
		lastUpdated: "2024-01-12",
	},
];

export const projectStats = {
	totalSections: overviewSections.length,
	activeSections: overviewSections.filter((s) => s.status === "active").length,
	pendingSections: overviewSections.filter((s) => s.status === "pending")
		.length,
	inactiveSections: overviewSections.filter((s) => s.status === "inactive")
		.length,
	totalFeatures: overviewSections.reduce(
		(acc, section) => acc + section.features.length,
		0
	),
};
