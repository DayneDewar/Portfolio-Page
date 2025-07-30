import backend from "../assets/images/backend1.png";
import general from "../assets/images/general.png";
import frontend from "../assets/images/react.png";
import aws from "../assets/images/aws.png";

export type SkillType = {
	label: string;
	src: string;
	alt: string;
	skills: string[];
};

export const skillsData: SkillType[] = [
	{
		label: "Front-end",
		src: frontend,
		alt: "React icon",
		skills: [
			"React",
			"React Native",
			"Redux",
			"React Query",
			"TypeScript",
			"JavaScript",
			"HTML",
			"CSS",
			"SASS",
			"Bootstrap",
			"Figma",
		],
	},
	{
		label: "Back-end",
		src: backend,
		alt: "Backend skills gear icon",
		skills: [
			"JavaScript",
			"Kotlin",
			"Python",
			"Spring boot",
			"NextJS",
			"MongoDB",
		],
	},
	{
		label: "General Skills",
		src: general,
		alt: "General skills icon",
		skills: [
			"Object-Oriented Programming",
			"Git",
			"GitHub",
			"GitLab",
			"OpenAi",
			
		],
	},
	{
		label: "Amazon Web Services",
		src: aws,
		alt: "Amazon Web Services",
		skills: [
			"Amazon S3",
			"Athena",
			"AWS Lambda",
			"API Gateway",
			"DynamoDB"
		]
	}
];
