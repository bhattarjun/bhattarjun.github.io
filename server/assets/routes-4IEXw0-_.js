import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ArrowUpRight, Briefcase, Building2, Download, FileText, Github, GraduationCap, Linkedin, Mail, MapPin, Menu, Send, Twitter, X } from "lucide-react";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";
//#region src/components/portfolio/Navbar.tsx
var LINKS = [
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Skills",
		href: "#skills"
	},
	{
		label: "Experience",
		href: "#experience"
	},
	{
		label: "Projects",
		href: "#projects"
	},
	{
		label: "Resume",
		href: "#resume"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"}`,
		children: [/* @__PURE__ */ jsxs("nav", {
			className: "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#top",
					className: "flex min-w-0 items-center gap-2.5",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-brand text-sm font-bold text-primary-foreground",
						children: "AB"
					}), /* @__PURE__ */ jsx("span", {
						className: "truncate font-display text-base font-bold tracking-tight",
						children: "Arjun Bhatt"
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "hidden items-center gap-1 md:flex",
					children: [LINKS.map((l) => /* @__PURE__ */ jsx("a", {
						href: l.href,
						className: "rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
						children: l.label
					}, l.href)), /* @__PURE__ */ jsx("a", {
						href: "#contact",
						className: "ml-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5",
						children: "Let's Talk"
					})]
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-card md:hidden",
					children: open ? /* @__PURE__ */ jsx(X, { size: 18 }) : /* @__PURE__ */ jsx(Menu, { size: 18 })
				})
			]
		}), open ? /* @__PURE__ */ jsx("div", {
			className: "border-t border-border bg-background/95 px-5 py-3 backdrop-blur-xl md:hidden",
			children: LINKS.map((l) => /* @__PURE__ */ jsx("a", {
				href: l.href,
				onClick: () => setOpen(false),
				className: "block rounded-lg px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground",
				children: l.label
			}, l.href))
		}) : null]
	});
}
//#endregion
//#region src/components/portfolio/data.ts
var SOCIALS = {
	linkedin: "https://in.linkedin.com/in/bhatt-arjun",
	github: "https://github.com/bhattarjun",
	twitter: "https://x.com/arjunbhatt97",
	email: "arjunbhatt97@gmail.com",
	phone: "+91 90000 00000"
};
var SKILL_GROUPS = [
	{
		title: "Languages",
		items: [
			"C#",
			"JavaScript",
			"HTML5",
			"CSS3",
			"PHP"
		]
	},
	{
		title: "Backend",
		items: [
			".NET Core",
			"ASP.NET MVC",
			"ASP.NET Web API",
			"Node.js"
		]
	},
	{
		title: "Frontend",
		items: [
			"React.js",
			"Next.js",
			"Angular",
			"React Native",
			"jQuery",
			"Bootstrap"
		]
	},
	{
		title: "Databases",
		items: [
			"MS SQL Server",
			"PostgreSQL",
			"MySQL"
		]
	},
	{
		title: "Cloud & DevOps",
		items: [
			"Microsoft Azure",
			"Git",
			"GitHub",
			"GitLab"
		]
	},
	{
		title: "APIs",
		items: ["REST APIs", "ChatGPT API Integration"]
	}
];
var EXPERIENCE = [
	{
		role: "Software Engineer",
		company: "Pozitive Energy",
		period: "Jan 2026 – Present",
		current: true,
		points: [
			"Building and scaling energy-domain web platforms with .NET Core APIs and a React/Next.js front end.",
			"Designing data models and optimised SQL queries powering customer billing and usage insights.",
			"Shipping to Microsoft Azure with CI pipelines, monitoring and zero-downtime releases."
		]
	},
	{
		role: "Software Engineer (promoted from Associate Software Engineer)",
		company: "Prioxis Technologies Pvt. Ltd.",
		period: "Aug 2022 – Dec 2025",
		points: [
			"Delivered 8+ client products end to end across CRM, maintenance planning and booking domains.",
			"Architected ASP.NET Web API services with MS SQL Server and PostgreSQL, cutting response times by up to 40%.",
			"Integrated the ChatGPT API into a Microsoft Teams chatbot and mentored juniors on React and .NET standards."
		]
	},
	{
		role: "Associate Software Engineer",
		company: "Casepoint LLC",
		period: "May 2022 – Jun 2022",
		points: ["Contributed to legal-tech modules using ASP.NET MVC and jQuery within an agile delivery team.", "Wrote reusable UI components and SQL stored procedures for document review workflows."]
	}
];
var PROJECTS = [
	{
		title: "Business CRM System",
		description: "Multi-tenant CRM handling leads, quotations and invoicing with role-based access and analytics dashboards.",
		tags: [
			".NET Core",
			"React.js",
			"MS SQL Server",
			"Azure"
		]
	},
	{
		title: "Tracker Flow — Maintenance Planning",
		description: "Planning and scheduling platform for field maintenance teams with asset tracking and automated work orders.",
		tags: [
			"ASP.NET Web API",
			"Next.js",
			"PostgreSQL"
		]
	},
	{
		title: "Microsoft Teams AI Chatbot",
		description: "Teams-native assistant powered by the ChatGPT API that answers internal knowledge queries in seconds.",
		tags: [
			"ChatGPT API",
			"Node.js",
			"Azure Bot Service"
		]
	},
	{
		title: "Employee Management System",
		description: "HR suite covering onboarding, attendance, leave approvals and payroll exports for distributed teams.",
		tags: [
			"ASP.NET MVC",
			"jQuery",
			"MS SQL Server"
		]
	},
	{
		title: "Kunto Light Mobile App",
		description: "Cross-platform mobile app with offline-first sync, push notifications and a REST API backend.",
		tags: [
			"React Native",
			".NET Core",
			"REST APIs"
		]
	},
	{
		title: "Prioxis Corporate Web Platform",
		description: "Company-facing marketing site and CMS built for speed, SEO and effortless content updates.",
		tags: [
			"Next.js",
			"Node.js",
			"Azure"
		]
	},
	{
		title: "Event Ticket Booking Platform",
		description: "High-concurrency ticketing flow with seat locking, payments and real-time inventory updates.",
		tags: [
			"React.js",
			".NET Core",
			"PostgreSQL"
		]
	},
	{
		title: "Hotel Room Booking System",
		description: "Availability engine, dynamic pricing and admin console for a multi-property hospitality group.",
		tags: [
			"Angular",
			"ASP.NET Web API",
			"MySQL"
		]
	}
];
var EDUCATION = [{
	degree: "Master of Computer Applications (MCA)",
	school: "Atmiya University",
	period: "2020 – 2022"
}, {
	degree: "Bachelor of Computer Applications (BCA)",
	school: "Bhakta Kavi Narsinh Mehta University",
	period: "2018 – 2021"
}];
var COMPANIES = [{
	name: "Pozitive Energy",
	initials: "PE"
}, {
	name: "Prioxis Technologies",
	initials: "PT"
}];
//#endregion
//#region src/components/portfolio/Hero.tsx
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		id: "top",
		className: "relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mesh-hero absolute inset-0 -z-20",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsx("div", {
				className: "grid-lines absolute inset-0 -z-10",
				"aria-hidden": true
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs(motion.span, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .5 },
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-semibold text-accent-foreground backdrop-blur",
						children: [/* @__PURE__ */ jsx("span", { className: "h-2 w-2 animate-pulse rounded-full bg-gradient-brand" }), "Open to freelance projects & senior roles"]
					}),
					/* @__PURE__ */ jsxs(motion.h1, {
						initial: {
							opacity: 0,
							y: 22
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .65,
							delay: .06
						},
						className: "mt-6 text-5xl font-bold leading-[0.98] sm:text-6xl lg:text-7xl",
						children: ["Arjun Bhatt", /* @__PURE__ */ jsx("span", {
							className: "mt-3 block text-2xl font-semibold sm:text-3xl lg:text-4xl",
							children: /* @__PURE__ */ jsx("span", {
								className: "text-gradient",
								children: "Full Stack Software Engineer"
							})
						})]
					}),
					/* @__PURE__ */ jsx(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .65,
							delay: .14
						},
						className: "mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground",
						children: ".NET Core & React/Next.js specialist — I turn complex business workflows into fast, reliable products shipped on Azure."
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .65,
							delay: .22
						},
						className: "mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx(MapPin, {
									size: 16,
									className: "text-primary"
								}), " Ahmedabad, India — remote friendly"]
							}),
							/* @__PURE__ */ jsx("span", { className: "hidden h-4 w-px bg-border sm:block" }),
							/* @__PURE__ */ jsx("span", { children: "4+ years building production software" })
						]
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .65,
							delay: .3
						},
						className: "mt-9 flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ jsxs("a", {
								href: "/Arjun-Bhatt-Resume.pdf",
								download: true,
								className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5",
								children: [/* @__PURE__ */ jsx(Download, { size: 17 }), " Download Resume"]
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "#contact",
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold shadow-soft transition-colors hover:bg-accent hover:text-accent-foreground",
								children: ["Let's Talk ", /* @__PURE__ */ jsx(ArrowRight, { size: 17 })]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "ml-1 flex items-center gap-2",
								children: [
									{
										href: SOCIALS.linkedin,
										Icon: Linkedin,
										label: "LinkedIn"
									},
									{
										href: SOCIALS.github,
										Icon: Github,
										label: "GitHub"
									},
									{
										href: SOCIALS.twitter,
										Icon: Twitter,
										label: "Twitter / X"
									}
								].map(({ href, Icon, label }) => /* @__PURE__ */ jsx("a", {
									href,
									target: "_blank",
									rel: "noreferrer noopener",
									"aria-label": label,
									className: "grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary",
									children: /* @__PURE__ */ jsx(Icon, { size: 18 })
								}, label))
							})
						]
					})
				] }), /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						scale: .92
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .7,
						delay: .1
					},
					className: "relative mx-auto w-full max-w-sm",
					children: [
						/* @__PURE__ */ jsx("div", { className: "absolute -inset-6 -z-10 rounded-full bg-gradient-brand opacity-20 blur-3xl" }),
						/* @__PURE__ */ jsx("div", {
							className: "relative aspect-square overflow-hidden rounded-full border-8 border-card shadow-lift",
							children: /* @__PURE__ */ jsx("img", {
								src: "/dp.png",
								alt: "Portrait of Arjun Bhatt, Full Stack Software Engineer",
								className: "h-full w-full object-cover",
								width: 696,
								height: 696
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute -bottom-4 left-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-display text-xl font-bold",
								children: "8+"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground",
								children: "products shipped"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute -right-2 top-6 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-display text-xl font-bold",
								children: ".NET + React"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground",
								children: "end-to-end delivery"
							})]
						})
					]
				})]
			})
		]
	});
}
//#endregion
//#region src/components/portfolio/Reveal.tsx
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ jsx(motion.div, {
		className,
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .6,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function SectionHeading({ eyebrow, title, description }) {
	return /* @__PURE__ */ jsxs(Reveal, {
		className: "max-w-2xl",
		children: [
			/* @__PURE__ */ jsxs("span", {
				className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground",
				children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gradient-brand" }), eyebrow]
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "mt-4 text-3xl font-bold sm:text-4xl md:text-5xl",
				children: title
			}),
			description ? /* @__PURE__ */ jsx("p", {
				className: "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg",
				children: description
			}) : null
		]
	});
}
//#endregion
//#region src/components/portfolio/Sections.tsx
function About() {
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "mx-auto max-w-6xl px-5 section-pad",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]",
			children: [/* @__PURE__ */ jsx(Reveal, {
				className: "order-2 lg:order-1",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto w-full max-w-xs",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute -left-4 -top-4 h-full w-full rounded-2xl border border-primary/30" }), /* @__PURE__ */ jsx("img", {
						src: "/dp.png",
						alt: "Arjun Bhatt working as a full stack engineer",
						loading: "lazy",
						className: "relative aspect-square w-full rounded-2xl border border-border object-cover shadow-soft"
					})]
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "order-1 lg:order-2",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "About",
					title: "Engineer who owns the whole stack.",
					description: "I'm a full stack software engineer with around 4 years of experience building business-critical web platforms — from database schema to pixel-level UI."
				}), /* @__PURE__ */ jsxs(Reveal, {
					delay: .1,
					children: [/* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground",
						children: "On the backend I work in C#, .NET Core, ASP.NET MVC and Web API, backed by MS SQL Server and PostgreSQL. On the frontend I build with React.js, Next.js and Angular. Everything I ship is deployed and hosted on Microsoft Azure, with clean CI, monitoring and documentation so teams can move fast without breaking things."
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-3",
						children: [
							{
								k: "4+",
								v: "Years experience"
							},
							{
								k: "8+",
								v: "Products delivered"
							},
							{
								k: "3",
								v: "Companies"
							}
						].map((s) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-2xl border border-border bg-card p-5 shadow-soft",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-display text-3xl font-bold text-gradient",
								children: s.k
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: s.v
							})]
						}, s.v))
					})]
				})]
			})]
		})
	});
}
function Skills() {
	return /* @__PURE__ */ jsx("section", {
		id: "skills",
		className: "relative bg-band section-pad",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Skills",
				title: "The toolkit behind the delivery.",
				description: "Depth in the Microsoft stack, fluency in modern JavaScript — and the cloud know-how to run it in production."
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: SKILL_GROUPS.map((group, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ jsxs("div", {
						className: "group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "text-lg font-bold",
							children: group.title
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-4 flex flex-wrap gap-2",
							children: group.items.map((item) => /* @__PURE__ */ jsx("span", {
								className: "rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors group-hover:bg-accent group-hover:text-accent-foreground",
								children: item
							}, item))
						})]
					})
				}, group.title))
			})]
		})
	});
}
function Experience() {
	return /* @__PURE__ */ jsxs("section", {
		id: "experience",
		className: "mx-auto max-w-6xl px-5 section-pad",
		children: [
			/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Experience",
				title: "Four years, shipped end to end.",
				description: "Promoted, trusted with client-facing delivery, and consistently on the hook for production systems."
			}),
			/* @__PURE__ */ jsx(Reveal, {
				delay: .06,
				children: /* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "Trusted by"
					}), COMPANIES.map((c) => /* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-2.5 shadow-soft",
						children: [/* @__PURE__ */ jsx("span", {
							className: "grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-primary text-xs font-bold text-primary-foreground",
							children: c.initials
						}), /* @__PURE__ */ jsx("span", {
							className: "text-sm font-semibold",
							children: c.name
						})]
					}, c.name))]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mt-14 pl-6 sm:pl-10",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute left-0 top-2 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent sm:left-3" }), EXPERIENCE.map((job, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ jsxs("article", {
						className: "relative mb-10 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift sm:p-8",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "absolute -left-6 top-9 grid h-5 w-5 place-items-center rounded-full bg-gradient-brand ring-4 ring-background sm:-left-[2.4rem]",
								children: /* @__PURE__ */ jsx(Briefcase, {
									size: 11,
									className: "text-primary-foreground"
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("h3", {
										className: "text-lg font-bold sm:text-xl",
										children: job.role
									}), /* @__PURE__ */ jsxs("p", {
										className: "mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-primary",
										children: [
											/* @__PURE__ */ jsx(Building2, {
												size: 15,
												className: "shrink-0"
											}),
											" ",
											job.company
										]
									})]
								}), /* @__PURE__ */ jsx("span", {
									className: `shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${job.current ? "bg-gradient-brand text-primary-foreground" : "bg-secondary text-muted-foreground"}`,
									children: job.period
								})]
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mt-5 space-y-2.5",
								children: job.points.map((p) => /* @__PURE__ */ jsxs("li", {
									className: "flex gap-3 text-sm leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ jsx("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" }), p]
								}, p))
							})
						]
					})
				}, job.company))]
			})
		]
	});
}
function Projects() {
	return /* @__PURE__ */ jsx("section", {
		id: "projects",
		className: "relative bg-band section-pad",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Projects",
				title: "Selected work that shipped.",
				description: "Client platforms, internal tools and mobile apps — built, deployed and maintained in production."
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: PROJECTS.map((project, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i % 3 * .06,
					children: /* @__PURE__ */ jsxs(motion.article, {
						whileHover: { y: -6 },
						transition: {
							type: "spring",
							stiffness: 300,
							damping: 22
						},
						className: "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-brand transition-transform duration-300 group-hover:scale-x-100" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-bold leading-snug",
									children: project.title
								}), /* @__PURE__ */ jsx(ArrowUpRight, {
									size: 20,
									className: "shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
								children: project.description
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-5 flex flex-wrap gap-2",
								children: project.tags.map((t) => /* @__PURE__ */ jsx("span", {
									className: "rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground",
									children: t
								}, t))
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "#contact",
								className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100",
								children: ["View details ", /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })]
							})
						]
					})
				}, project.title))
			})]
		})
	});
}
function Education() {
	return /* @__PURE__ */ jsxs("section", {
		id: "education",
		className: "mx-auto max-w-6xl px-5 section-pad",
		children: [/* @__PURE__ */ jsx(SectionHeading, {
			eyebrow: "Education",
			title: "Formal foundations."
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-10 grid gap-5 md:grid-cols-2",
			children: EDUCATION.map((e, i) => /* @__PURE__ */ jsx(Reveal, {
				delay: i * .08,
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex h-full gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground",
						children: /* @__PURE__ */ jsx(GraduationCap, { size: 22 })
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "text-base font-bold sm:text-lg",
								children: e.degree
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: e.school
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-xs font-semibold uppercase tracking-wider text-primary",
								children: e.period
							})
						]
					})]
				})
			}, e.degree))
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-border py-10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:flex sm:justify-between",
			children: [/* @__PURE__ */ jsxs("p", {
				className: "min-w-0 text-sm text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Arjun Bhatt — Full Stack Software Engineer"
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center gap-4 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ jsx("a", {
					href: `mailto:${SOCIALS.email}`,
					className: "hover:text-primary",
					children: /* @__PURE__ */ jsx(Mail, { size: 16 })
				}), /* @__PURE__ */ jsxs("span", {
					className: "inline-flex items-center gap-1.5",
					children: [/* @__PURE__ */ jsx(MapPin, { size: 16 }), " India"]
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/portfolio/ResumeContact.tsx
function Resume() {
	return /* @__PURE__ */ jsx("section", {
		id: "resume",
		className: "relative bg-band section-pad",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-6xl px-5",
			children: /* @__PURE__ */ jsx("div", {
				className: "overflow-hidden rounded-2xl border border-border bg-card shadow-soft",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_1fr] lg:items-center",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(SectionHeading, {
						eyebrow: "Resume",
						title: "Everything on one page.",
						description: "Skim the highlights here or take the full PDF with you — formatted for both ATS parsing and human eyes."
					}), /* @__PURE__ */ jsx(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "/Arjun-Bhatt-Resume.pdf",
								download: true,
								className: "inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5",
								children: [/* @__PURE__ */ jsx(Download, { size: 17 }), " Download Resume PDF"]
							}), /* @__PURE__ */ jsxs("a", {
								href: "/Arjun-Bhatt-Resume.pdf",
								target: "_blank",
								rel: "noreferrer noopener",
								className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground",
								children: [/* @__PURE__ */ jsx(FileText, { size: 17 }), " Open in new tab"]
							})]
						})
					})] }), /* @__PURE__ */ jsx(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ jsx("div", {
							className: "relative overflow-hidden rounded-2xl border border-border bg-secondary",
							children: /* @__PURE__ */ jsx("object", {
								data: "/Arjun-Bhatt-Resume.pdf#toolbar=0&view=FitH",
								type: "application/pdf",
								className: "h-[420px] w-full",
								"aria-label": "Resume preview for Arjun Bhatt",
								children: /* @__PURE__ */ jsx("div", {
									className: "grid h-[420px] place-items-center p-6 text-center text-sm text-muted-foreground",
									children: "Preview unavailable on this device — use the download button to view the PDF."
								})
							})
						})
					})]
				})
			})
		})
	});
}
function Contact() {
	const [sending, setSending] = useState(false);
	const onSubmit = (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		setSending(true);
		const subject = encodeURIComponent(`Project enquiry from ${String(data.get("name") ?? "")}`);
		const body = encodeURIComponent(`${String(data.get("message") ?? "")}\n\n— ${String(data.get("name") ?? "")} (${String(data.get("email") ?? "")})`);
		window.location.href = `mailto:${SOCIALS.email}?subject=${subject}&body=${body}`;
		toast.success("Opening your email client — talk soon!");
		setSending(false);
		form.reset();
	};
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "mx-auto max-w-6xl px-5 section-pad",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-12 lg:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Contact",
				title: "Got something to build?",
				description: "Whether you're hiring, scoping a freelance project, or just want a second opinion on an architecture — I reply within a day."
			}), /* @__PURE__ */ jsx(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ jsxs("div", {
					className: "mt-8 space-y-3",
					children: [/* @__PURE__ */ jsxs("a", {
						href: `mailto:${SOCIALS.email}`,
						className: "flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40",
						children: [/* @__PURE__ */ jsx("span", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground",
							children: /* @__PURE__ */ jsx(Mail, { size: 18 })
						}), /* @__PURE__ */ jsxs("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx("span", {
								className: "block text-xs uppercase tracking-wider text-muted-foreground",
								children: "Email"
							}), /* @__PURE__ */ jsx("span", {
								className: "block truncate font-medium",
								children: SOCIALS.email
							})]
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex gap-2 pt-1",
						children: [
							{
								href: SOCIALS.linkedin,
								Icon: Linkedin,
								label: "LinkedIn"
							},
							{
								href: SOCIALS.github,
								Icon: Github,
								label: "GitHub"
							},
							{
								href: SOCIALS.twitter,
								Icon: Twitter,
								label: "Twitter / X"
							}
						].map(({ href, Icon, label }) => /* @__PURE__ */ jsx("a", {
							href,
							target: "_blank",
							rel: "noreferrer noopener",
							"aria-label": label,
							className: "grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary",
							children: /* @__PURE__ */ jsx(Icon, { size: 18 })
						}, label))
					})]
				})
			})] }), /* @__PURE__ */ jsx(Reveal, {
				delay: .15,
				children: /* @__PURE__ */ jsxs("form", {
					onSubmit,
					className: "rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-9",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ jsxs("label", {
								className: "block text-sm font-medium",
								children: ["Name", /* @__PURE__ */ jsx("input", {
									name: "name",
									required: true,
									placeholder: "Your name",
									className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/15"
								})]
							}), /* @__PURE__ */ jsxs("label", {
								className: "block text-sm font-medium",
								children: ["Email", /* @__PURE__ */ jsx("input", {
									name: "email",
									type: "email",
									required: true,
									placeholder: "you@company.com",
									className: "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/15"
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("label", {
							className: "mt-5 block text-sm font-medium",
							children: ["Message", /* @__PURE__ */ jsx("textarea", {
								name: "message",
								required: true,
								rows: 5,
								placeholder: "Tell me about the role or project — timeline, stack, what success looks like.",
								className: "mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/15"
							})]
						}),
						/* @__PURE__ */ jsxs("button", {
							type: "submit",
							disabled: sending,
							className: "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 disabled:opacity-70",
							children: [/* @__PURE__ */ jsx(Send, { size: 16 }), " Send message"]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-3 text-center text-xs text-muted-foreground",
							children: ["Prefer email? Write directly to ", SOCIALS.email]
						})
					]
				})
			})]
		})
	});
}
//#endregion
//#region src/components/ui/sonner.tsx
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ jsx(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(About, {}),
				/* @__PURE__ */ jsx(Skills, {}),
				/* @__PURE__ */ jsx(Experience, {}),
				/* @__PURE__ */ jsx(Projects, {}),
				/* @__PURE__ */ jsx(Education, {}),
				/* @__PURE__ */ jsx(Resume, {}),
				/* @__PURE__ */ jsx(Contact, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(Toaster$1, {})
		]
	});
}
//#endregion
export { Index as component };
