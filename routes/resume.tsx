import { Head } from '$fresh/runtime.ts';

/**
 * Final single-file Fresh component
 * - Underlined contact links
 * - Left sidebar: Core Skills (grouped) + Notable Projects
 * - Right content: Professional Experience (top) then Work (below) — HORIZONTAL STACKING
 * - Print-safe, ATS-friendly
 */
export default function Resume() {
	const contact = [
		{ label: '+63 936 461 0422', href: 'tel:+639364610422' },
		{ label: 'iammeosjin@gmail.com', href: 'mailto:iammeosjin@gmail.com' },
		{
			label: 'github.com/iammeosjin',
			href: 'https://github.com/iammeosjin',
		},
		{
			label: 'linkedin.com/in/john-michael-roa',
			href: 'https://www.linkedin.com/in/john-michael-roa-9030a7175/',
		},
	];

	const skills = {
		'Languages & Frameworks': [
			'Node.js',
			'TypeScript',
			'NestJS',
			'Express',
		],
		Databases: ['MongoDB', 'PostgreSQL', 'Redis'],
		Architecture: [
			'REST',
			'GraphQL',
			'Event Sourcing',
			'CQRS',
			'Microservices',
		],
		'DevOps & Cloud': [
			'Docker',
			'Kubernetes',
			'GitHub Actions',
			'AWS (EKS, S3)',
		],
		Plus: ['React', 'Next.js', 'Electron', 'Python', 'Java'],
	} as const;

	const projects = [
		{
			name: 'Backend Developer Performance Monitoring',
			description:
				'A throughput analytics tool measuring developer productivity using GitHub and Jira data to guide retrospective discussions.',
			bullets: [
				'Measured throughput using commit frequency, PR lead time, and Jira issue velocity.',
				'Identified workflow bottlenecks ahead of sprint retrospectives.',
				'Generated actionable insights for continuous engineering improvement.',
			],
		},
		{
			name: 'Payment Monitoring Dashboard',
			description:
				'A reporting and alerting dashboard that monitors deposit confirmation rates and surfaces anomalies across payment rails.',
			bullets: [
				'Automated weekly ExcelJS reports and Slack alerts for deposit confirmation rates.',
				'Reduced time-to-detect payment issues by over 70% through anomaly surfacing.',
				'Provided teams with actionable insights for faster incident response.',
			],
		},
		{
			name: 'GCash Direct Webpay Integration',
			description:
				'A direct payment integration supporting multiple Philippine providers with reliable transaction handling.',
			bullets: [
				'Implemented SIT/UAT flows with idempotent transaction handling and robust retries.',
				'Standardized provider adapters for Maya, PisoPay, Ventaja, and AIO.',
				'Improved payment reliability through structured error and retry logic.',
			],
		},
	];

	const professionalExperience = [
		{
			company: 'HighOutput Ventures',
			role: 'Associate Backend Engineer',
			period: 'February 2019 – December 2021',
			bullets: [
				'Developed and maintained APIs for internal and client-facing platforms.',
				'Improved backend reliability through code refactoring and performance fixes.',
				'Worked with cross-functional teams to deliver features on time.',
				// 'Enhanced logging and monitoring for faster debugging.',
				// 'Supported junior engineers through code reviews and mentoring.',
			],
		},
		{
			company: 'ScaleForge',
			role: 'Senior Backend Engineer',
			period: 'December 2021 – June 2023',
			bullets: [
				'Led backend team efforts for microservice improvements and API redesigns.',
				'Optimized database queries and improved system performance.',
				'Implemented complex transaction flows across multiple providers.',
				// 'Standardized internal libraries to accelerate development workflow.',
				// 'Introduced CI/CD improvements for safer and faster deployments.',
			],
		},
		{
			company: 'ScaleForge',
			role: 'Staff Backend Engineer',
			period: 'June 2023 – October 2025',
			bullets: [
				'Designed scalable wallet, deposit, and withdrawal microservices.',
				'Built analytical tools and automated financial monitoring pipelines.',
				'Integrated PH payment providers with unified workflows.',
				// 'Improved system resilience with idempotent and retry-safe logic.',
				// 'Mentored backend engineers and guided architectural decisions.',
			],
		},
	];

	const workProjects = [
		{
			name: 'Jamclout',
			role: 'Backend Lead - HighOutput Ventures',
			description:
				'A creator-supporter platform where supporters can tip creators using BitClout or Diamonds; focuses on real-time interactions and media delivery.',
			bullets: [
				'Designed and maintained secure tipping flows using BitClout and Diamonds.',
				'Built scalable APIs enabling real-time creator–supporter interactions.',
				'Integrated IPFS for decentralized media storage and optimized streaming.',
				'Implemented wallet validation and transaction safety mechanisms.',
				'Enhanced system reliability with structured logging and monitoring tools.',
			],
		},
		{
			name: 'Her.vn',
			role: 'Backend Engineer - HighOutput Ventures',
			description:
				'A Vietnamese e-commerce platform focused on women’s products, providing curated items and a smooth CMS-driven content flow.',
			bullets: [
				'Developed a CMS backend using Strapi and PostgreSQL for product and content management.',
				'Optimized API performance for catalog and content queries.',
				'Improved admin workflows with cleaner API contracts and validation.',
				'Integrated media handling pipelines for product images and marketing assets.',
				'Streamlined backend–frontend content delivery for faster user experience.',
			],
		},
		{
			name: 'Nexiux',
			role: 'Staff Backend Engineer - ScaleForge',
			description:
				'A UK-based online gambling platform focused on betting and casino experiences; responsible for payments and integrations.',
			bullets: [
				'Developed wallet and transaction microservices supporting UK gambling operations.',
				'Improved betting transaction reliability through idempotent workflows.',
				'Integrated multiple gaming providers using unified adapter patterns.',
				'Built monitoring dashboards analyzing payment health and provider latency.',
				'Enhanced platform scalability for peak betting periods and promos.',
			],
		},
		{
			name: 'Opexa',
			role: 'Payment Unit Head - ScaleForge',
			description:
				'A Philippines-based gaming and gambling platform handling local payment providers and real-money wallet operations.',
			bullets: [
				'Led payment microservices powering PH gaming deposits and withdrawals.',
				'Integrated GCash, Maya, PisoPay, AIO, and Ventaja with shared contracts.',
				'Improved reconciliation accuracy with automated ledger consistency checks.',
				'Built dashboards monitoring transaction failures, retries, and SLA breaches.',
				'Reduced operational incidents with automated alerting and observability tooling.',
			],
		},
	];

	return (
		<>
			<Head>
				<title>John Michael Roa | NodeJS Engineer</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
					rel='stylesheet'
				/>
				{/* Tailwind CDN (swap to compiled build for production/PDF if you prefer) */}
				<script src='https://cdn.tailwindcss.com'></script>
				<style>
					{`
          @media print {
            .no-print { display: none !important; }
            .page { box-shadow: none !important; border: none !important; }
          }
        `}
				</style>
			</Head>

			<main className="font-['Plus_Jakarta_Sans'] bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800 print:bg-white">
				<div className='page max-w-5xl mx-auto p-6 md:p-10 print:p-6 bg-white shadow-2xl rounded-2xl print:rounded-none'>
					{/* Header */}
					<header className='border-b border-slate-200 pb-5 text-center'>
						<h1 className='text-3xl md:text-4xl font-bold tracking-tight text-teal-700'>
							John Michael Roa
						</h1>
						<p className='text-lg md:text-xl text-teal-600 font-semibold'>
							Software Engineer
						</p>
						<ul className='mt-3 flex flex-wrap justify-center gap-4 text-[13px] text-slate-600'>
							{contact.map((c) => (
								<li key={c.label}>
									<a
										href={c.href}
										className='text-teal-700 underline underline-offset-4 decoration-2 decoration-teal-400 hover:decoration-teal-600 hover:text-teal-900 transition'
									>
										{c.label}
									</a>
								</li>
							))}
						</ul>
					</header>

					{/* Summary */}
					<section className='mt-6'>
						<h2 className='text-sm tracking-wider font-bold text-slate-500 uppercase'>
							Profile
						</h2>
						<p className='mt-2 text-[15px] leading-relaxed'>
							Backend Engineer with <strong>6+ years</strong>{' '}
							designing and operating Node.js/NestJS microservices
							for fintech and gaming. Experienced in high-volume
							transactions, third-party payment integrations
							(GCash, Maya, PisoPay, AIO, Ventaja), and database
							performance on MongoDB/PostgreSQL. Focused on
							reliability, observability, and CI/CD automation.
						</p>
					</section>

					{/* Layout: Sidebar (left) + Content (right) */}
					<div className='mt-8 grid md:grid-cols-3 gap-8'>
						{/* LEFT: Skills & Projects */}
						<aside className='md:col-span-1 space-y-7'>
							{/* Core Skills */}
							<section>
								<h3 className='text-sm tracking-wider font-bold text-slate-500 uppercase'>
									Core Skills
								</h3>
								<div className='mt-3 space-y-3'>
									{Object.entries(skills).map((
										[group, items],
									) => (
										<div
											key={group}
											className='rounded-xl border border-slate-200 p-3 bg-slate-50/50'
										>
											<p className='text-[13px] font-semibold text-slate-700'>
												{group}
											</p>
											<div className='mt-2 flex flex-wrap gap-2'>
												{items.map((s) => (
													<span
														key={s}
														className='text-xs px-2 py-1 rounded-full bg-white border border-slate-200 text-slate-700'
													>
														{s}
													</span>
												))}
											</div>
										</div>
									))}
								</div>
							</section>

							{/* Notable Projects */}
							<section>
								<h3 className='text-sm tracking-wider font-bold text-slate-500 uppercase'>
									Notable Contributions
								</h3>
								<ul className='mt-3 space-y-3'>
									{projects.map((p) => (
										<li
											key={p.name}
											className='border border-slate-200 rounded-xl p-3'
										>
											<p className='font-semibold text-[14px] text-slate-800'>
												{p.name}
											</p>
											<ul className='list-disc list-inside mt-1 text-[13px] text-slate-700 space-y-1'>
												{p.bullets.map((b, i) => (
													<li key={i}>{b}</li>
												))}
											</ul>
										</li>
									))}
								</ul>
							</section>
						</aside>

						{/* RIGHT: Professional Experience (top) + Work (below) */}
						<section className='md:col-span-2 space-y-10'>
							{/* Professional Experience */}
							<div>
								<h2 className='text-sm uppercase font-semibold text-gray-500 tracking-wider mb-3'>
									Professional Experience
								</h2>

								<div>
									{professionalExperience.map((exp) => (
										<article
											key={exp.company + exp.role}
											className='border-l-4 border-teal-200 pl-4 mb-6'
										>
											<h3 className='font-semibold text-lg text-gray-900'>
												{exp.company}
											</h3>
											<p className='text-[15px] text-teal-700 font-medium mt-2'>
												{exp.role} | {exp.period}
											</p>
											<ul className='list-disc list-outside ml-5 mt-2 text-[12px] leading-relaxed space-y-1'>
												{exp.bullets.map((b, i) => (
													<li key={i}>{b}</li>
												))}
											</ul>
										</article>
									))}
								</div>
							</div>

							{/* Work */}
							<div>
								<h2 className='text-sm uppercase font-semibold text-gray-500 tracking-wider mb-3'>
									Projects
								</h2>

								<div className='grid sm:grid-cols-2 gap-8'>
									{workProjects.map((p) => (
										<article
											key={p.name}
											className='border-l-4 border-purple-200 pl-4'
										>
											<h3 className='font-semibold text-lg text-gray-900'>
												{p.name}
											</h3>
											<p className='text-[14px] text-purple-700 font-medium'>
												{p.role}
											</p>
											<p className='text-[13px] italic text-slate-600'>
												{p.description}
											</p>

											<ul className='list-disc list-outside ml-5 mt-2 text-[13px] leading-relaxed space-y-1'>
												{p.bullets.map((b, i) => (
													<li key={i}>{b}</li>
												))}
											</ul>
										</article>
									))}
								</div>
							</div>
						</section>
					</div>
				</div>
			</main>
		</>
	);
}
