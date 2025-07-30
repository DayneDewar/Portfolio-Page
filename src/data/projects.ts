import aurora from "../assets/projects/aurora/main.png";
import gentile from "../assets/projects/gentile/main1.jpg";
import linesc from "../assets/projects/linesc/main1.png";

export type ProjectType = {
	id: number;
	title: string;
	about: string;
	description: string;
	thumbnail: string;
	tech: string[];
	github: string;
	link: string;
	filter: string[];
	type: string;
};

export const projects: ProjectType[] = [
	{
		id: 0,
		title: "Gentile Etiquetas Website",
		about: "Wordpress custom theme",
		description: "",
		thumbnail: gentile,
		tech: ["Wordpress", "PHP", "JavaScript"],
		github: "",
		link: "http://gentileetiquetas.com.br",
		filter: ["All", "Web Development"],
		type: "Web Development",
	},
	{
		id: 1,
		title: "Aurora Byte Cipher",
		about: "Encryption & Decrpyiton algorithm",
		description: "",
		thumbnail: aurora,
		tech: ["Python", "Tkinter", "Crypto Library"],
		github: "https://github.com/Gunnar50/AuroraByteCipher",
		link: "",
		filter: ["All", "Software Development", "Scripts"],
		type: "Python Software",
	},
	{
		id: 2,
		title: "LinEsc Privilege Escalation",
		about: "Privilege Escalation toolkit for linux systems.",
		description: "Privilege Escalation toolkit for linux systems.",
		thumbnail: linesc,
		tech: ["Python", "Bash", "Kali Linux"],
		github: "https://github.com/Gunnar50/LinEscPrivilegeEscalation",
		link: "",
		filter: ["All", "Scripts"],
		type: "Python Script",
	},
];
