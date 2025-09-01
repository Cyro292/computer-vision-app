"use client";

import { useState, useEffect } from "react";
import { HeaderSection } from "@/sections/HeaderSection";
import { TasksSection } from "@/sections/TasksSection";
import { FooterSection } from "@/sections/FooterSection";
import PillNav from "@/components/reactbits/Components/PillNav/PillNav";

export default function Home() {
	const [activeSection, setActiveSection] = useState("header");

	const navItems = [
		{ href: "#tasks", label: "Tasks" },
	];

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["header", "tasks", "footer"];
			const scrollPosition = window.scrollY + window.innerHeight / 2;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleSectionChange = (section: string) => {
		setActiveSection(section);
		const element = document.getElementById(section);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<div className="absolute z-20 flex h-14 justify-center w-full">
				<PillNav
					logo="/logo.svg"
					logoAlt="Company Logo"
					items={navItems}
					activeHref="/"
					className="custom-nav"
					ease="power2.easeOut"
					baseColor="#000000"
					pillColor="#ffffff"
					hoveredPillTextColor="#ffffff"
						pillTextColor="#000000"
				/>
			</div>	

			<div className="relative">
				<HeaderSection
					activeSection={activeSection}
					onSectionChange={handleSectionChange}
				/>
				<TasksSection activeSection={activeSection} />
				<FooterSection activeSection={activeSection} />
			</div>
		</>
	);
}
