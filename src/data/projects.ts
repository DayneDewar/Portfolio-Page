import aurora from "../assets/projects/aurora/main.png";
import gentile from "../assets/projects/gentile/main1.jpg";
import lego from "../assets/projects/lego-homage/main1.png";
import linesc from "../assets/projects/linesc/main1.png";
import listshop from "../assets/projects/list-shop/main.png";
import pathfinding from "../assets/projects/pathfinding/main.png";
import portfolio from "../assets/projects/portfolio/main2.png";
import simpsons from "../assets/projects/simpsons-quotes/main1.png";
import tictactoe from "../assets/projects/tictactoe/main1.png";
import todo from "../assets/projects/todo-app/main.png";
import weather from "../assets/projects/weather-app/main1.png";
import w3l from "../assets/projects/what3letters/main1.png";

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
