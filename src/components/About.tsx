import { Link as ScrollLink } from "react-scroll/modules";
import bgImage from "../assets/bgpattern3.png";
import aboutImage from "../assets/images/about-image2.png";

function About() {
	return (
		<section id="about" style={{ position: "relative" }}>
			<div
				className="relative flex flex-col gap-14 items-center justify-center animate-fadeIn animation-delay-2 py-16 
							sm:py-30 md:py-24 md:flex-row md:text-left"
			>
				<div
					style={{ backgroundImage: `url(${bgImage})` }}
					className="bg-pattern bg-about"
				></div>
				<div className="md:w-3/5">
					<h2 className="text-3xl text-center md:text-left font-bold my-6 md:mt-0 md:text-4xl relative">
						About
						<hr
							className="w-10 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-12
									md:mt-1 md:w-12 md:left-0 md:-translate-x-1"
						/>
					</h2>
					<p>
						I'm a <span className="font-bold">Full-Stack Developer</span> from
						born and raised in New York. I've always had an interest in computers and a
						desire to go beyond of what is possible. I am a 
						<span className="font-bold">highly driven professional</span> with a
						background in hospitality, skilled in problem-solving,
						teamwork, communication, and committed to continuous learning.
					</p>
					<br />
					<p>
						I began my coding journey in 2015, when I decided to switch my major
						from Criminal Justice to <span className="font-bold">Computer Science.</span>
						I studied at New York City College of Technology for 2 years before realizing college
						was not the proper path in life for myself at the time. A few years after trvaeling and
						exploring the world, I decided to return to engineering roots by attending{" "}
						<span className="font-bold hover:underline">
							<a href="https://flatironschool.com/" target="_blank">
								Flatiron School's
							</a>
						</span>{" "}
						15-week{" "}
						<span className="font-bold">Software Engineering bootcamp</span>{" "}
						in Jan 2021.
						The bootcamp has enabled me to develop and deploy full-stack websites
						and applications to industry standards.
					</p>
					<br />

					<p>
						Since bootcamp, I have worked as a software engineer at several companies, 
						most recently working for Deloitte as a <span className="font-bold">Full-stack tech consultant</span>{" "}
						but I am now open for new oppurtunities, so feel free to{" "}
						<ScrollLink
							smooth={true}
							offset={-100}
							spy={true}
							to="contact"
							className="font-bold text-teal-500 cursor-pointer hover:underline"
						>
							{" "}
							get in touch!
						</ScrollLink>
					</p>
				</div>
				<div className="md:w-1/3">
					<img src={aboutImage} alt="Profile image" width={420} />
				</div>
			</div>
		</section>
	);
}

export default About;
