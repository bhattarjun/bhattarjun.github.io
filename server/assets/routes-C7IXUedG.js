import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ArrowDown, ArrowUpRight, CircleAlert, Cloud, Code2, Database, Github, Globe, Linkedin, Mail, MapPin, Server, Sparkles, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/portfolio/Nav.tsx
var links = [
	{
		id: "about",
		label: "About"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
function Nav() {
	const [active, setActive] = useState("hero");
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) setActive(e.target.id);
			});
		}, { rootMargin: "-45% 0px -50% 0px" });
		["hero", ...links.map((l) => l.id)].forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => {
			window.removeEventListener("scroll", onScroll);
			observer.disconnect();
		};
	}, []);
	return /* @__PURE__ */ jsxs("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "backdrop-blur-xl" : ""),
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn("mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 transition-all sm:px-6", scrolled ? "border-b border-border bg-background/75" : "border-b border-transparent"),
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#hero",
					className: "font-display text-sm font-bold tracking-tight",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-gradient-warm",
						children: "arjun"
					}), /* @__PURE__ */ jsx("span", {
						className: "text-muted-foreground",
						children: ".bhatt()"
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: links.map((l) => /* @__PURE__ */ jsx("a", {
						href: `#${l.id}`,
						className: cn("rounded-full px-3 py-1.5 text-sm transition-colors", active === l.id ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground"),
						children: l.label
					}, l.id))
				}),
				/* @__PURE__ */ jsx("a", {
					href: "#contact",
					className: "rounded-full border border-primary/40 px-3.5 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
					children: "Hire me"
				})
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "flex gap-1 overflow-x-auto border-b border-border bg-background/75 px-4 py-2 md:hidden",
			children: links.map((l) => /* @__PURE__ */ jsx("a", {
				href: `#${l.id}`,
				className: cn("whitespace-nowrap rounded-full px-3 py-1 text-xs transition-colors", active === l.id ? "bg-secondary text-foreground" : "text-muted-foreground"),
				children: l.label
			}, l.id))
		})]
	});
}
//#endregion
//#region src/components/portfolio/Hero.tsx
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		id: "hero",
		className: "relative overflow-hidden pt-32 pb-20 sm:pt-40 md:pb-28",
		children: [
			/* @__PURE__ */ jsx("div", { className: "grid-backdrop pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" }),
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full blur-3xl",
				style: {
					background: "var(--gradient-warm)",
					opacity: .12
				}
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1.35fr_1fr]",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("p", {
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground",
						children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-highlight" }), "Available for freelance work"]
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "mt-6 text-5xl font-bold leading-[0.95] sm:text-6xl md:text-7xl",
						children: [
							"Arjun",
							/* @__PURE__ */ jsx("br", {}),
							/* @__PURE__ */ jsx("span", {
								className: "text-gradient-warm",
								children: "Bhatt"
							})
						]
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-5 max-w-xl font-display text-lg text-foreground/90 sm:text-xl",
						children: [
							"Software Engineer — Full-Stack",
							" ",
							/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: "(.NET Core, React / Next.js / Angular.js)"
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 max-w-xl text-base leading-relaxed text-muted-foreground",
						children: "I build and ship full-stack web and mobile products end-to-end — from database schema and API architecture to the React front end and the Azure pipeline that deploys it."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "#projects",
							className: "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
							style: {
								background: "var(--gradient-warm)",
								boxShadow: "var(--glow-primary)"
							},
							children: ["View Projects", /* @__PURE__ */ jsx(ArrowDown, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ jsx("a", {
							href: "#contact",
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary",
							children: "Contact Me"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }), " Ahmedabad, Gujarat, India"]
							}),
							/* @__PURE__ */ jsx("span", { children: "4 yrs experience" }),
							/* @__PURE__ */ jsx("span", { children: "BCA + MCA" })
						]
					})
				] }), /* @__PURE__ */ jsxs("div", {
					className: "group relative mx-auto w-full max-w-xs",
					children: [/* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 -rotate-6 rounded-[2.5rem] opacity-40 transition-transform duration-500 group-hover:rotate-3",
						style: { background: "var(--gradient-warm)" }
					}), /* @__PURE__ */ jsx("div", {
						className: "relative overflow-hidden rounded-[2.5rem] border border-border bg-surface transition-transform duration-500 group-hover:-translate-y-2",
						children: /* @__PURE__ */ jsx("img", {
							src: "/arjun-bhatt.png",
							width: 1129,
							height: 1129,
							alt: "Arjun Bhatt, full-stack software engineer",
							className: "aspect-square w-full object-cover"
						})
					})]
				})]
			})
		]
	});
}
//#endregion
//#region src/hooks/use-reveal.ts
function useReveal(threshold = .15) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			});
		}, {
			threshold,
			rootMargin: "0px 0px -60px 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold]);
	return {
		ref,
		visible
	};
}
//#endregion
//#region src/components/portfolio/Reveal.tsx
function Reveal({ children, className, delay = 0 }) {
	const { ref, visible } = useReveal();
	return /* @__PURE__ */ jsx("div", {
		ref,
		"data-visible": visible,
		style: { transitionDelay: `${delay}ms` },
		className: cn("reveal", className),
		children
	});
}
function SectionHeading({ index, title, kicker }) {
	return /* @__PURE__ */ jsxs(Reveal, {
		className: "mb-10",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary",
			children: [
				/* @__PURE__ */ jsx("span", { children: index }),
				/* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-primary/50" }),
				kicker ? /* @__PURE__ */ jsx("span", {
					className: "text-muted-foreground",
					children: kicker
				}) : null
			]
		}), /* @__PURE__ */ jsx("h2", {
			className: "mt-4 text-3xl font-bold sm:text-4xl md:text-5xl",
			children: title
		})]
	});
}
//#endregion
//#region src/components/portfolio/About.tsx
var facts = [
	{
		k: "4 yrs",
		v: "shipping production software"
	},
	{
		k: "BCA + MCA",
		v: "formal CS foundation"
	},
	{
		k: "Full-stack",
		v: ".NET Core + React/Next/Angular"
	},
	{
		k: "Azure",
		v: "deploys, pipelines, hosting"
	}
];
function About() {
	return /* @__PURE__ */ jsxs("section", {
		id: "about",
		className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28",
		children: [/* @__PURE__ */ jsx(SectionHeading, {
			index: "01",
			title: "About",
			kicker: "What I actually do"
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid gap-10 md:grid-cols-[1.3fr_1fr]",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				className: "space-y-4 text-base leading-relaxed text-muted-foreground",
				children: [
					/* @__PURE__ */ jsxs("p", { children: [
						"I'm a full-stack engineer with four years of production experience building business software: booking and ticketing platforms, CRMs, employee and maintenance management systems, and mobile apps. My default stack is",
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "text-foreground",
							children: ".NET Core on the server"
						}),
						" and",
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "text-foreground",
							children: "React, Next.js or Angular on the client"
						}),
						", backed by SQL Server or PostgreSQL and deployed on Azure."
					] }),
					/* @__PURE__ */ jsx("p", { children: "The problems I solve are the unglamorous ones that decide whether a product works: modelling messy domain data into a schema that survives change, designing REST APIs that multiple clients (web, mobile, third-party) can share, replacing slow manual workflows with automation, and integrating external services — payments, Teams, ChatGPT API, media pipelines — without turning the codebase into glue." }),
					/* @__PURE__ */ jsx("p", { children: "I work end-to-end, so I own the piece most hand-offs drop: taking a feature from requirement to architecture to deployed, monitored build. With a BCA and MCA behind the practical work, I read unfamiliar codebases quickly and I'm comfortable being the person who takes the whole slice." })
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid auto-rows-min grid-cols-2 gap-3 self-start",
				children: facts.map((f, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ jsxs("div", {
						className: "surface-card h-full rounded-2xl p-4",
						children: [/* @__PURE__ */ jsx("p", {
							className: "font-display text-xl font-bold text-primary",
							children: f.k
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-xs leading-snug text-muted-foreground",
							children: f.v
						})]
					})
				}, f.k))
			})]
		})]
	});
}
//#endregion
//#region src/components/portfolio/Skills.tsx
var groups = [
	{
		icon: Code2,
		title: "Frontend",
		items: [
			"React",
			"Next.js",
			"Angular.js",
			"jQuery"
		]
	},
	{
		icon: Server,
		title: "Backend",
		items: [
			".NET Core",
			".NET MVC",
			"Node.js",
			"PHP"
		]
	},
	{
		icon: Database,
		title: "Database",
		items: [
			"SQL Server",
			"PostgreSQL",
			"MySQL"
		]
	},
	{
		icon: Cloud,
		title: "Cloud / DevOps",
		items: [
			"Azure",
			"Azure Git",
			"GitLab",
			"GitHub"
		]
	},
	{
		icon: Sparkles,
		title: "Other",
		items: ["REST APIs", "ChatGPT API integration"]
	}
];
function Skills() {
	return /* @__PURE__ */ jsx("section", {
		id: "skills",
		className: "relative py-20 md:py-28",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				index: "02",
				title: "Skills",
				kicker: "Toolkit"
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: groups.map((g, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ jsxs("div", {
						className: "surface-card group h-full rounded-3xl p-6 transition-colors hover:border-primary/40",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: "rounded-xl bg-secondary p-2.5 text-primary transition-transform group-hover:scale-110",
								children: /* @__PURE__ */ jsx(g.icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ jsx("h3", {
								className: "text-lg font-semibold",
								children: g.title
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: g.items.map((item) => /* @__PURE__ */ jsx("span", {
								className: "rounded-full border border-border bg-surface-raised px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground",
								children: item
							}, item))
						})]
					})
				}, g.title))
			})]
		})
	});
}
//#endregion
//#region src/components/portfolio/Experience.tsx
var roles = [
	{
		role: "Software Engineer",
		company: "Pozitive Energy (PE Solutions) | Business Energy Supplier",
		dates: "Jan 2026 — Present",
		current: true,
		bullets: [
			"Developing and maintaining enterprise-grade energy supply applications using C#, .NET Core, ASP.NET MVC, Angular, SQL Server, and RESTful APIs.",
			"Building and enhancing Electricity and Gas customer journey workflows, implementing business validations, dashboard features, and production bug fixes.",
			"Collaborating with cross-functional teams to deliver new features, perform code reviews, optimize data flows, and support Azure-hosted applications."
		]
	},
	{
		role: "Software Engineer",
		company: "Prioxis Technologies Pvt. Ltd.",
		dates: "Aug 2022 — Dec 2025",
		bullets: [
			"Designed and delivered full-stack web applications using C#, .NET Core, ASP.NET MVC, React.js, Next.js, Angular, Node.js, SQL Server, and PostgreSQL.",
			"Built and integrated RESTful APIs, optimized relational databases, and deployed production applications on Microsoft Azure using Azure Git.",
			"Developed multiple business-critical solutions including CRM Systems, Employee Management, Maintenance Planning, AI-powered Microsoft Teams Chatbot, React Native mobile apps, and corporate websites while participating in requirement analysis, testing, deployment, and client support."
		]
	},
	{
		role: "Associate Software Engineer",
		company: "Casepoint LLC",
		dates: "May 2022 — Jun 2022",
		bullets: ["Contributed to enterprise software development using .NET Core, React.js, Next.js, HTML, CSS, and Bootstrap during an intensive engineering engagement.", "Supported feature development, software testing, bug resolution, and collaborative development practices within an Agile engineering team."]
	}
];
function Experience() {
	return /* @__PURE__ */ jsxs("section", {
		id: "experience",
		className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28",
		children: [/* @__PURE__ */ jsx(SectionHeading, {
			index: "03",
			title: "Experience",
			kicker: "Where I've built"
		}), /* @__PURE__ */ jsx("ol", {
			className: "relative ml-3 border-l border-border pl-6 sm:pl-10",
			children: roles.map((r, i) => /* @__PURE__ */ jsxs("li", {
				className: "relative pb-10 last:pb-0",
				children: [/* @__PURE__ */ jsx("span", {
					className: "absolute -left-[calc(1.5rem+7px)] top-2 h-3.5 w-3.5 rounded-full border-2 border-background sm:-left-[calc(2.5rem+7px)]",
					style: {
						background: r.current ? "var(--gradient-warm)" : "var(--surface-raised)",
						boxShadow: r.current ? "var(--glow-primary)" : void 0
					}
				}), /* @__PURE__ */ jsx(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ jsxs("div", {
						className: "surface-card rounded-2xl p-5 sm:p-6",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-lg font-semibold",
								children: r.role
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm text-primary",
								children: r.company
							})] }), /* @__PURE__ */ jsx("span", {
								className: "font-mono text-xs text-muted-foreground",
								children: r.dates
							})]
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-4 space-y-2",
							children: r.bullets.map((b) => /* @__PURE__ */ jsxs("li", {
								className: "flex gap-2.5 text-sm leading-relaxed text-muted-foreground",
								children: [/* @__PURE__ */ jsx("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" }), b]
							}, b))
						})]
					})
				})]
			}, r.company))
		})]
	});
}
//#endregion
//#region src/components/ui/dialog.tsx
var Dialog = DialogPrimitive.Root;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Title, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
//#endregion
//#region src/components/portfolio/Projects.tsx
var projects = [
	{
		name: "Prioxis Company Site",
		blurb: "Marketing site for a software services company, built for speed and SEO.",
		stack: [
			"Next.js",
			"React",
			"REST APIs"
		],
		detail: "Public-facing corporate website: content structure, responsive layout, page performance and SEO fundamentals.",
		span: "lg:col-span-2"
	},
	{
		name: "Kunto Mobile APK",
		blurb: "Android application delivered as a distributable APK build.",
		stack: [
			"Mobile",
			".NET Core API",
			"SQL Server"
		],
		detail: "Mobile client backed by a .NET Core API, including build and release packaging."
	},
	{
		name: "Event Ticket Booking",
		blurb: "Ticketing flow with event listings, seat/ticket selection and order handling.",
		stack: [
			"React",
			".NET Core",
			"SQL Server"
		],
		detail: "Booking domain model, availability handling and order lifecycle from selection to confirmation."
	},
	{
		name: "Room Booking / Hotel Management",
		blurb: "Reservation and inventory management for rooms and stays.",
		stack: [
			".NET Core",
			"Angular.js",
			"SQL Server"
		],
		detail: "Room inventory, reservation calendar, rate handling and admin-side management screens.",
		span: "lg:col-span-2"
	},
	{
		name: "Photo & Video Editing App (Imgly)",
		blurb: "Media editing experience built on the img.ly editor SDK.",
		stack: [
			"React",
			"Imgly SDK",
			"Node.js"
		],
		detail: "Integrated the img.ly editing SDK for photo and video editing, export and asset flow."
	},
	{
		name: "Employee Management System",
		blurb: "Internal system for employee records, roles and day-to-day HR workflows.",
		stack: [
			".NET MVC",
			"SQL Server",
			"jQuery"
		],
		detail: "Role-based access, employee records, and reporting over an internal HR dataset."
	},
	{
		name: "Business CRM",
		blurb: "Customer, lead and pipeline management for a business team.",
		stack: [
			".NET Core",
			"React",
			"PostgreSQL"
		],
		detail: "Lead pipeline, customer records, activity tracking and role-scoped dashboards."
	},
	{
		name: "Integrated Teams Chatbot",
		blurb: "Microsoft Teams bot wired into internal workflows and the ChatGPT API.",
		stack: [
			"Teams API",
			"ChatGPT API",
			".NET Core",
			"Azure"
		],
		detail: "Conversational interface inside Teams, integrating an LLM API with internal business data."
	},
	{
		name: "Tracker Flow — Maintenance Planning",
		blurb: "Planning and tracking tool for scheduled maintenance operations.",
		stack: [
			".NET Core",
			"React",
			"Azure"
		],
		detail: "Scheduling, task assignment and status tracking across maintenance workflows.",
		span: "lg:col-span-2"
	}
];
function Todo({ label }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border border-dashed border-primary/40 bg-primary/5 p-3",
		children: [/* @__PURE__ */ jsxs("p", {
			className: "flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-primary",
			children: [
				/* @__PURE__ */ jsx(CircleAlert, { className: "h-3.5 w-3.5" }),
				" ",
				label
			]
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-xs text-muted-foreground",
			children: "TODO — not filled in yet"
		})]
	});
}
function Projects() {
	const [open, setOpen] = useState(null);
	return /* @__PURE__ */ jsxs("section", {
		id: "projects",
		className: "relative py-20 md:py-28",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				index: "04",
				title: "Projects",
				kicker: "Selected work"
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: projects.map((p, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i % 3 * 70,
					className: cn(p.span),
					children: /* @__PURE__ */ jsxs("button", {
						type: "button",
						onClick: () => setOpen(p),
						className: "surface-card group flex h-full w-full flex-col rounded-3xl p-6 text-left transition-all hover:-translate-y-1 hover:border-primary/40",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-display text-lg font-semibold leading-snug",
									children: p.name
								}), /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" })]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: p.blurb
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: p.stack.map((t) => /* @__PURE__ */ jsx("span", {
									className: "rounded-md bg-surface-raised px-2 py-1 font-mono text-[11px] text-muted-foreground",
									children: t
								}, t))
							}),
							/* @__PURE__ */ jsx("span", {
								className: "mt-5 font-mono text-xs text-primary",
								children: "View Details →"
							})
						]
					})
				}, p.name))
			})]
		}), /* @__PURE__ */ jsx(Dialog, {
			open: !!open,
			onOpenChange: (v) => !v && setOpen(null),
			children: /* @__PURE__ */ jsxs(DialogContent, {
				className: "max-w-lg",
				children: [/* @__PURE__ */ jsxs(DialogHeader, { children: [/* @__PURE__ */ jsx(DialogTitle, {
					className: "font-display text-2xl",
					children: open?.name
				}), /* @__PURE__ */ jsx(DialogDescription, { children: open?.blurb })] }), /* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: open?.detail
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap gap-1.5",
							children: open?.stack.map((t) => /* @__PURE__ */ jsx("span", {
								className: "rounded-md bg-surface-raised px-2 py-1 font-mono text-[11px] text-muted-foreground",
								children: t
							}, t))
						}),
						/* @__PURE__ */ jsx(Todo, { label: "Impact / Result" }),
						/* @__PURE__ */ jsx(Todo, { label: "Live Demo / GitHub link" })
					]
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/portfolio/Contact.tsx
var details = [
	{
		icon: Mail,
		label: "arjunbhatt97@gmail.com",
		href: "mailto:arjunbhatt97@gmail.com"
	},
	{
		icon: MapPin,
		label: "Ahmedabad, Gujarat, India"
	},
	{
		icon: Linkedin,
		label: "Bhatt-Arjun",
		href: "https://in.linkedin.com/in/bhatt-arjun"
	},
	{
		icon: Globe,
		label: "bhattarjun.github.io",
		href: "https://bhattarjun.github.io/"
	}
];
function Contact() {
	const [sending, setSending] = useState(false);
	function onSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const name = String(data.get("name") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();
		const message = String(data.get("message") ?? "").trim();
		if (!name || !email || !message) {
			toast.error("Please fill in your name, email and message.");
			return;
		}
		setSending(true);
		const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
		window.location.href = `mailto:arjunbhatt97@gmail.com?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
		toast.success("Opening your email client with the message ready to send.");
		form.reset();
		setSending(false);
	}
	const field = "w-full rounded-xl border border-border bg-surface-raised px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60";
	return /* @__PURE__ */ jsxs("section", {
		id: "contact",
		className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28",
		children: [
			/* @__PURE__ */ jsx(SectionHeading, {
				index: "05",
				title: "Let's build something",
				kicker: "Contact"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-8 md:grid-cols-[1fr_1.1fr]",
				children: [/* @__PURE__ */ jsx(Reveal, {
					className: "space-y-3",
					children: details.map((d) => {
						const content = /* @__PURE__ */ jsxs("span", {
							className: "flex items-center gap-3 text-sm",
							children: [/* @__PURE__ */ jsx("span", {
								className: "rounded-lg bg-secondary p-2 text-primary",
								children: /* @__PURE__ */ jsx(d.icon, { className: "h-4 w-4" })
							}), /* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: d.label
							})]
						});
						return d.href ? /* @__PURE__ */ jsx("a", {
							href: d.href,
							target: d.href.startsWith("http") ? "_blank" : void 0,
							rel: "noreferrer",
							className: "surface-card block rounded-2xl p-3 transition-colors hover:border-primary/40",
							children: content
						}, d.label) : /* @__PURE__ */ jsx("div", {
							className: "surface-card rounded-2xl p-3",
							children: content
						}, d.label);
					})
				}), /* @__PURE__ */ jsx(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ jsxs("form", {
						onSubmit,
						className: "surface-card space-y-4 rounded-3xl p-6",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "name",
									className: "mb-1.5 block text-xs text-muted-foreground",
									children: "Name"
								}), /* @__PURE__ */ jsx("input", {
									id: "name",
									name: "name",
									className: field,
									placeholder: "Your name"
								})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "email",
									className: "mb-1.5 block text-xs text-muted-foreground",
									children: "Email"
								}), /* @__PURE__ */ jsx("input", {
									id: "email",
									name: "email",
									type: "email",
									className: field,
									placeholder: "you@company.com"
								})] })]
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "message",
								className: "mb-1.5 block text-xs text-muted-foreground",
								children: "Message"
							}), /* @__PURE__ */ jsx("textarea", {
								id: "message",
								name: "message",
								rows: 5,
								className: field,
								placeholder: "What are you building?"
							})] }),
							/* @__PURE__ */ jsx("button", {
								type: "submit",
								disabled: sending,
								className: "w-full rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60",
								style: { background: "var(--gradient-warm)" },
								children: "Send message"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-center font-mono text-[11px] text-muted-foreground",
								children: "Sends via your mail app — or email me directly."
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ jsxs("footer", {
				className: "mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 font-mono text-xs text-muted-foreground",
				children: [/* @__PURE__ */ jsxs("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Arjun Bhatt"
				] }), /* @__PURE__ */ jsxs("a", {
					href: "https://github.com/BhattArjun",
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center gap-1.5 hover:text-primary",
					children: [/* @__PURE__ */ jsx(Github, { className: "h-3.5 w-3.5" }), " Github.com/BhattArjun"]
				})]
			})
		]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs("main", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(About, {}),
			/* @__PURE__ */ jsx(Skills, {}),
			/* @__PURE__ */ jsx(Experience, {}),
			/* @__PURE__ */ jsx(Projects, {}),
			/* @__PURE__ */ jsx(Contact, {})
		]
	});
}
//#endregion
export { Index as component };
