"use client";

import { useMemo, useState } from "react";

type Role = {
  title: string;
  department: string;
  summary: string;
  slug: string;
  tags: string[];
};

const roles: Role[] = [
  { title: "Assistant to the COO / Co-Founder", department: "Executive Office", summary: "Support executive coordination, scheduling, follow-ups, research, documentation, and operational planning for Azah’s leadership.", slug: "assistant-to-coo-cofounder", tags: ["leadership", "admin", "coordination"] },
  { title: "Chief of Staff Support Volunteer", department: "Executive Office", summary: "Assist with internal coordination, leadership priorities, cross-team communication, and strategic follow-up.", slug: "chief-of-staff-support-volunteer", tags: ["leadership", "coordination", "strategy"] },
  { title: "Strategic Planning Volunteer", department: "Executive Office", summary: "Support strategy development, project planning, organizational roadmaps, and programme prioritization.", slug: "strategic-planning-volunteer", tags: ["strategy", "planning", "leadership"] },
  { title: "Board & Governance Support Volunteer", department: "Governance", summary: "Assist with governance documents, board packs, meeting preparation, and institutional compliance support.", slug: "board-governance-support-volunteer", tags: ["governance", "admin", "compliance"] },
  { title: "Programme Coordinator", department: "Programmes", summary: "Support programme planning, timelines, activity tracking, coordination, and implementation follow-up.", slug: "programme-coordinator", tags: ["programmes", "coordination", "planning"] },
  { title: "Project Assistant", department: "Programmes", summary: "Assist programme teams with documentation, task tracking, research, and implementation support.", slug: "project-assistant", tags: ["programmes", "admin", "coordination"] },
  { title: "Administrative Assistant", department: "Administration", summary: "Support filing, scheduling, records, correspondence, document formatting, and general administration.", slug: "administrative-assistant", tags: ["admin", "coordination"] },
  { title: "Scheduling & Meetings Coordinator", department: "Administration", summary: "Coordinate meetings, prepare agendas, record action points, track attendance, and support follow-up.", slug: "scheduling-meetings-coordinator", tags: ["admin", "coordination"] },
  { title: "Policy & SOP Development Volunteer", department: "Administration", summary: "Help draft internal policies, standard operating procedures, templates, and administrative guidance.", slug: "policy-sop-development-volunteer", tags: ["policy", "admin", "governance"] },
  { title: "HR & Volunteer Coordinator", department: "People & Culture", summary: "Support volunteer recruitment, onboarding, interviews, role matching, and engagement tracking.", slug: "hr-volunteer-coordinator", tags: ["people", "admin", "coordination"] },
  { title: "Recruitment & Talent Outreach Volunteer", department: "People & Culture", summary: "Identify potential volunteers, support outreach campaigns, screening, and candidate communication.", slug: "recruitment-talent-outreach-volunteer", tags: ["people", "communications", "outreach"] },
  { title: "Staff Wellbeing & Culture Volunteer", department: "People & Culture", summary: "Support team wellbeing, volunteer engagement, culture-building activities, and feedback systems.", slug: "staff-wellbeing-culture-volunteer", tags: ["people", "wellbeing", "support"] },
  { title: "Monitoring, Evaluation & Reporting Volunteer", department: "Monitoring & Evaluation", summary: "Support data collection tools, progress tracking, impact summaries, and reporting frameworks.", slug: "monitoring-evaluation-reporting-volunteer", tags: ["data", "research", "reporting"] },
  { title: "Research Assistant", department: "Research & Data", summary: "Conduct desk research, policy scans, humanitarian context analysis, and evidence summaries.", slug: "research-assistant", tags: ["research", "data", "policy"] },
  { title: "Data Analyst Volunteer", department: "Research & Data", summary: "Support data cleaning, dashboards, needs assessments, beneficiary information, and insight summaries.", slug: "data-analyst-volunteer", tags: ["data", "technical", "research"] },
  { title: "GIS & Mapping Volunteer", department: "Research & Data", summary: "Assist with mapping vulnerable areas, service points, community needs, and operational locations.", slug: "gis-mapping-volunteer", tags: ["data", "technical", "mapping"] },
  { title: "Survey Design Volunteer", department: "Research & Data", summary: "Help design surveys, feedback forms, needs assessment tools, and data collection templates.", slug: "survey-design-volunteer", tags: ["research", "data", "design"] },
  { title: "Finance Assistant", department: "Finance & Compliance", summary: "Support budget tracking, financial documentation, receipts, spreadsheets, and finance records.", slug: "finance-assistant", tags: ["finance", "admin", "compliance"] },
  { title: "Budget Tracking Volunteer", department: "Finance & Compliance", summary: "Assist with budget monitoring, project costing, expenditure logs, and financial summaries.", slug: "budget-tracking-volunteer", tags: ["finance", "data", "compliance"] },
  { title: "Procurement Support Volunteer", department: "Finance & Compliance", summary: "Support procurement records, supplier lists, purchase tracking, and documentation.", slug: "procurement-support-volunteer", tags: ["finance", "operations", "admin"] },
  { title: "Compliance & Documentation Volunteer", department: "Finance & Compliance", summary: "Assist with compliance files, donor documentation, audit preparation, and document control.", slug: "compliance-documentation-volunteer", tags: ["compliance", "admin", "finance"] },
  { title: "Donor Financial Reporting Volunteer", department: "Finance & Compliance", summary: "Support financial reporting for donors, budget narratives, expenditure notes, and report formatting.", slug: "donor-financial-reporting-volunteer", tags: ["finance", "reporting", "fundraising"] },
  { title: "Partnerships Officer Volunteer", department: "Partnerships", summary: "Support partner mapping, institutional outreach, relationship tracking, and collaboration briefs.", slug: "partnerships-officer-volunteer", tags: ["partnerships", "outreach", "coordination"] },
  { title: "Donor Relations Volunteer", department: "Partnerships", summary: "Assist with donor communication, donor databases, meeting briefs, and engagement follow-up.", slug: "donor-relations-volunteer", tags: ["partnerships", "fundraising", "communications"] },
  { title: "Embassy & International Liaison Volunteer", department: "Partnerships", summary: "Support outreach to embassies, international organizations, diplomatic missions, and partners.", slug: "embassy-international-liaison-volunteer", tags: ["partnerships", "diplomacy", "outreach"] },
  { title: "UN / NGO Coordination Volunteer", department: "Partnerships", summary: "Assist with coordination mapping, humanitarian cluster research, NGO contacts, and partnership tracking.", slug: "un-ngo-coordination-volunteer", tags: ["partnerships", "coordination", "research"] },
  { title: "Resource Mobilization Volunteer", department: "Fundraising", summary: "Support fundraising strategy, donor research, funding calendars, and opportunity mapping.", slug: "resource-mobilization-volunteer", tags: ["fundraising", "research", "strategy"] },
  { title: "Grant Writing & Proposal Support Volunteer", department: "Fundraising", summary: "Assist with concept notes, grant proposals, donor language, budget narratives, and proposal formatting.", slug: "grant-writing-proposal-support-volunteer", tags: ["fundraising", "writing", "strategy"] },
  { title: "Frontend Web Developer", department: "IT & Digital", summary: "Support website development, user interface improvements, responsive layouts, and page updates.", slug: "frontend-web-developer", tags: ["technical", "web", "design"] },
  { title: "Backend Developer", department: "IT & Digital", summary: "Support future databases, application forms, secure submission systems, and backend workflows.", slug: "backend-developer", tags: ["technical", "web", "data"] },
  { title: "UX/UI Designer", department: "IT & Digital", summary: "Improve website user experience, application flows, accessibility, and visual consistency.", slug: "ux-ui-designer", tags: ["design", "technical", "web"] },
  { title: "IT Support Volunteer", department: "IT & Digital", summary: "Assist with digital troubleshooting, email setup, device support, and internal systems guidance.", slug: "it-support-volunteer", tags: ["technical", "support"] },
  { title: "CRM / Database Manager", department: "IT & Digital", summary: "Support donor, volunteer, beneficiary, and partner databases with clean records and structure.", slug: "crm-database-manager", tags: ["technical", "data", "admin"] },
  { title: "Cybersecurity Volunteer", department: "IT & Digital", summary: "Support cybersecurity awareness, data protection, secure systems, and basic risk checks.", slug: "cybersecurity-volunteer", tags: ["technical", "compliance"] },
  { title: "AI Systems & Automation Volunteer", department: "IT & Digital", summary: "Help design AI-supported workflows, automation tools, volunteer systems, and internal processes.", slug: "ai-systems-automation-volunteer", tags: ["technical", "ai", "systems"] },
  { title: "Digital Forms & Applications Coordinator", department: "IT & Digital", summary: "Build and maintain online forms for volunteers, careers, partnerships, and programme intake.", slug: "digital-forms-applications-coordinator", tags: ["technical", "forms", "systems"] },
  { title: "Notion / Airtable Systems Manager", department: "IT & Digital", summary: "Create internal dashboards, task trackers, volunteer databases, and project management systems.", slug: "notion-airtable-systems-manager", tags: ["technical", "systems", "admin"] },
  { title: "Social Media Manager", department: "Communications", summary: "Support content calendars, platform strategy, post drafting, audience engagement, and scheduling.", slug: "social-media-manager", tags: ["communications", "creative", "social"] },
  { title: "Content Writer", department: "Communications", summary: "Write website content, project stories, newsletters, captions, and communication materials.", slug: "content-writer", tags: ["communications", "writing", "creative"] },
  { title: "Humanitarian Storytelling Volunteer", department: "Communications", summary: "Help transform field updates, project work, and human stories into dignified communications.", slug: "humanitarian-storytelling-volunteer", tags: ["communications", "writing", "creative"] },
  { title: "Photographer / Videographer", department: "Communications", summary: "Support visual documentation, events, project media, photo archives, and storytelling materials.", slug: "photographer-videographer", tags: ["communications", "creative", "media"] },
  { title: "Documentary & Field Media Volunteer", department: "Communications", summary: "Assist with longer-form field documentation, interviews, visual stories, and media organization.", slug: "documentary-field-media-volunteer", tags: ["communications", "media", "creative"] },
  { title: "Arabic-English Translator", department: "Communications", summary: "Translate and edit content between Arabic and English for reports, posts, proposals, and briefs.", slug: "arabic-english-translator", tags: ["communications", "writing", "language"] },
  { title: "Graphic Design & Branding Volunteer", department: "Communications", summary: "Create social graphics, reports, presentations, brand templates, and visual communication materials.", slug: "graphic-design-branding-volunteer", tags: ["communications", "design", "creative"] },
  { title: "Presentation Designer", department: "Communications", summary: "Design professional pitch decks, donor presentations, programme slides, and visual summaries.", slug: "presentation-designer", tags: ["communications", "design", "creative"] },
  { title: "Press & Media Relations Volunteer", department: "Communications", summary: "Support press outreach, media lists, briefing notes, event coverage, and communications follow-up.", slug: "press-media-relations-volunteer", tags: ["communications", "media", "outreach"] },
  { title: "Protection & Case Management Volunteer", department: "Protection", summary: "Support protection-sensitive programming, referral mapping, case management tools, and safe pathways.", slug: "protection-case-management-volunteer", tags: ["protection", "support", "field"] },
  { title: "Safeguarding & Protection Support Volunteer", department: "Protection", summary: "Assist with safeguarding policies, risk mitigation, confidentiality tools, and protection guidance.", slug: "safeguarding-protection-support-volunteer", tags: ["protection", "compliance", "support"] },
  { title: "Child Protection Volunteer", department: "Protection", summary: "Support child-friendly programming, education referrals, safe spaces, and protection activities.", slug: "child-protection-volunteer", tags: ["protection", "children", "support"] },
  { title: "Legal Referral Support Volunteer", department: "Protection", summary: "Help identify legal referral pathways, rights-based information, and protection resources.", slug: "legal-referral-support-volunteer", tags: ["protection", "legal", "support"] },
  { title: "Public Health Volunteer", department: "Health", summary: "Support public health planning, community awareness, health outreach, and basic health education.", slug: "public-health-volunteer", tags: ["health", "community", "support"] },
  { title: "Health Services Volunteer", department: "Health", summary: "Support health programme planning, referral mapping, medical outreach, and service coordination.", slug: "health-services-volunteer", tags: ["health", "programmes", "coordination"] },
  { title: "Reproductive Health Support Volunteer", department: "Health", summary: "Support maternal health, reproductive health awareness, referral pathways, and dignity-focused care.", slug: "reproductive-health-support-volunteer", tags: ["health", "women", "support"] },
  { title: "WASH Volunteer", department: "WASH", summary: "Support clean water, sanitation, hygiene kits, hygiene awareness, and disease prevention activities.", slug: "wash-volunteer", tags: ["wash", "health", "field"] },
  { title: "Nutrition Volunteer", department: "Food Security & Nutrition", summary: "Support nutrition awareness, vulnerable household targeting, food assistance, and nutrition activities.", slug: "nutrition-volunteer", tags: ["food", "nutrition", "health"] },
  { title: "Emergency Response Volunteer", department: "Emergency Response", summary: "Support rapid response planning, displacement assistance, emergency supplies, and urgent coordination.", slug: "emergency-response-volunteer", tags: ["emergency", "field", "operations"] },
  { title: "Disability Inclusion Volunteer", department: "Inclusion", summary: "Support disability-sensitive programming, accessibility checks, inclusive tools, and beneficiary support.", slug: "disability-inclusion-volunteer", tags: ["inclusion", "support", "protection"] },
  { title: "Elderly Care Support Volunteer", department: "Elderly Care", summary: "Support elderly care, social inclusion, basic needs coordination, dignity, and wellbeing.", slug: "elderly-care-support-volunteer", tags: ["elderly", "support", "care"] },
  { title: "Substance Abuse Recovery Support Volunteer", department: "Rehabilitation", summary: "Support rehabilitation planning, recovery resources, stigma reduction, and reintegration pathways.", slug: "substance-abuse-recovery-support-volunteer", tags: ["rehabilitation", "support", "health"] },
  { title: "Mental Health & Psychosocial Support Volunteer", department: "MHPSS", summary: "Assist with psychosocial support planning, trauma-informed resources, referrals, and wellbeing activities.", slug: "mental-health-psychosocial-support-volunteer", tags: ["mental-health", "support", "care"] },
  { title: "Group Therapy & Wellness Facilitator", department: "MHPSS", summary: "Support structured wellness, emotional support, group activities, and safe discussion spaces.", slug: "group-therapy-wellness-facilitator", tags: ["mental-health", "wellbeing", "support"] },
  { title: "Education & Literacy Volunteer", department: "Education", summary: "Support basic literacy, catch-up education, educational resources, and learning activities.", slug: "education-literacy-volunteer", tags: ["education", "youth", "support"] },
  { title: "Digital Literacy Trainer", department: "Education", summary: "Teach or support digital skills, online learning, basic computer use, and digital confidence.", slug: "digital-literacy-trainer", tags: ["education", "technical", "training"] },
  { title: "Youth Engagement Coordinator", department: "Youth & Education", summary: "Support youth outreach, youth-led activities, leadership programming, and engagement plans.", slug: "youth-engagement-coordinator", tags: ["youth", "education", "community"] },
  { title: "Scholarship Support Volunteer", department: "Youth & Education", summary: "Support scholarship research, application guidance, education pathways, and student support.", slug: "scholarship-support-volunteer", tags: ["education", "youth", "research"] },
  { title: "Mentorship Programme Volunteer", department: "Youth & Education", summary: "Support mentorship matching, mentor coordination, youth development, and learning follow-up.", slug: "mentorship-programme-volunteer", tags: ["youth", "education", "support"] },
  { title: "Career Development Volunteer", department: "Youth & Education", summary: "Help beneficiaries and youth prepare CVs, interviews, career plans, and professional skills.", slug: "career-development-volunteer", tags: ["youth", "career", "support"] },
  { title: "Vocational Skills Trainer", department: "Livelihoods", summary: "Support practical skills such as tailoring, crafts, food processing, small business, and income generation.", slug: "vocational-skills-trainer", tags: ["livelihoods", "training", "community"] },
  { title: "Agriculture & Livelihoods Volunteer", department: "Livelihoods", summary: "Support vegetable production, small-scale agriculture, income-generating activities, and resilience work.", slug: "agriculture-livelihoods-volunteer", tags: ["livelihoods", "agriculture", "food"] },
  { title: "Community Mobilizer", department: "Community & Field Operations", summary: "Support awareness, local outreach, beneficiary engagement, referrals, and community participation.", slug: "community-mobilizer", tags: ["community", "field", "outreach"] },
  { title: "Community Outreach Volunteer", department: "Community & Field Operations", summary: "Support awareness, community mobilization, beneficiary outreach, and field communication.", slug: "community-outreach-volunteer", tags: ["community", "outreach", "field"] },
  { title: "Beneficiary Registration Volunteer", department: "Community & Field Operations", summary: "Assist with registration forms, beneficiary data entry, intake support, and organized records.", slug: "beneficiary-registration-volunteer", tags: ["community", "data", "field"] },
  { title: "Distribution Support Volunteer", department: "Community & Field Operations", summary: "Support distributions of supplies, kits, food, hygiene items, and basic household assistance.", slug: "distribution-support-volunteer", tags: ["community", "operations", "field"] },
  { title: "Peer Mentorship & Survivor Leadership Volunteer", department: "Community & Field Operations", summary: "Support peer mentorship, survivor-led initiatives, reintegration activities, and leadership pathways.", slug: "peer-mentorship-survivor-leadership-volunteer", tags: ["community", "support", "protection"] },
  { title: "Reintegration & Follow-Up Volunteer", department: "Community & Field Operations", summary: "Assist with follow-up systems, independent living pathways, family tracing, and reintegration support.", slug: "reintegration-follow-up-volunteer", tags: ["community", "support", "field"] },
  { title: "Logistics Assistant", department: "Operations", summary: "Assist with supplies, transport coordination, stock tracking, movement plans, and logistics records.", slug: "logistics-assistant", tags: ["operations", "logistics", "admin"] },
  { title: "Warehouse Support Volunteer", department: "Operations", summary: "Support storage organization, inventory logs, stock movement, and warehouse documentation.", slug: "warehouse-support-volunteer", tags: ["operations", "logistics"] },
  { title: "Driver Coordination Volunteer", department: "Operations", summary: "Support transport scheduling, driver coordination, movement planning, and trip records.", slug: "driver-coordination-volunteer", tags: ["operations", "logistics", "coordination"] },
  { title: "Reception & Intake Support Volunteer", department: "Operations", summary: "Support confidential intake, reception processes, appointment scheduling, and visitor guidance.", slug: "reception-intake-support-volunteer", tags: ["operations", "admin", "support"] },
];

function getRoleActivities(role: Role) {
  const title = role.title.toLowerCase();

  if (title.includes("social media")) return ["Create weekly content calendars.", "Draft captions and campaign posts.", "Monitor engagement and community feedback.", "Coordinate with design and storytelling volunteers."];
  if (title.includes("content writer")) return ["Write website and project content.", "Prepare newsletters and captions.", "Turn programme updates into polished stories.", "Edit content for clarity, dignity, and consistency."];
  if (title.includes("translator")) return ["Translate Arabic-English materials.", "Review tone and accuracy.", "Support bilingual reports and posts.", "Maintain consistent humanitarian terminology."];
  if (title.includes("frontend")) return ["Build responsive website sections.", "Improve UI components and page layouts.", "Fix visual bugs across devices.", "Coordinate with UX/UI and backend volunteers."];
  if (title.includes("backend")) return ["Support secure form submission systems.", "Plan database structures.", "Create backend workflows for applications.", "Coordinate with frontend and digital forms teams."];
  if (title.includes("grant")) return ["Draft proposal sections and concept notes.", "Support donor language and logframes.", "Prepare project summaries.", "Help align proposals with donor priorities."];
  if (title.includes("protection")) return ["Support protection referral mapping.", "Prepare survivor-centred tools.", "Assist with safe pathway documentation.", "Maintain confidentiality and dignity standards."];
  if (title.includes("health")) return ["Support health outreach planning.", "Map referral services.", "Prepare health awareness materials.", "Coordinate with programme and field teams."];
  if (title.includes("wash")) return ["Support hygiene awareness activities.", "Track WASH kit needs.", "Assist clean water and sanitation planning.", "Prepare disease-prevention messaging."];
  if (title.includes("logistics") || title.includes("warehouse") || title.includes("driver")) return ["Track supplies and movement plans.", "Support transport and stock records.", "Assist delivery coordination.", "Maintain organized logistics documentation."];
  if (title.includes("finance") || title.includes("budget")) return ["Track budgets and expenditure logs.", "Organize receipts and finance records.", "Support donor financial summaries.", "Maintain clean spreadsheets and documentation."];

  return [
    `Support practical ${role.department.toLowerCase()} tasks linked to this role.`,
    "Prepare trackers, notes, briefs, and working documents.",
    "Coordinate with relevant team members and follow up on action points.",
    "Contribute to organized, accountable, and professional delivery.",
  ];
}

function getRoleOutcome(role: Role) {
  return `This role strengthens Azah’s ${role.department.toLowerCase()} capacity by improving coordination, documentation, service quality, and follow-through across humanitarian and recovery initiatives.`;
}

export default function CareersPage() {
  const departments = ["All", "Matched Roles", ...Array.from(new Set(roles.map((r) => r.department)))];

  const quizQuestions = [
    {
      question: "What kind of work feels most natural to you?",
      options: [
        { label: "Leadership, planning, and coordination", tags: ["leadership", "strategy", "coordination"] },
        { label: "Writing, media, and storytelling", tags: ["communications", "writing", "creative"] },
        { label: "Data, systems, and technology", tags: ["data", "technical", "systems"] },
        { label: "Direct community support and protection", tags: ["support", "community", "protection"] },
      ],
    },
    {
      question: "What would you enjoy doing most?",
      options: [
        { label: "Organising teams and tracking action points", tags: ["admin", "coordination"] },
        { label: "Designing visuals, posts, and presentations", tags: ["design", "creative", "communications"] },
        { label: "Researching, analysing, and building tools", tags: ["research", "data", "technical"] },
        { label: "Supporting women, children, health, or field work", tags: ["health", "protection", "field"] },
      ],
    },
    {
      question: "What is your strongest skill?",
      options: [
        { label: "Administration and follow-up", tags: ["admin", "coordination"] },
        { label: "Communication and language", tags: ["communications", "language", "writing"] },
        { label: "Technical systems and databases", tags: ["technical", "data", "web"] },
        { label: "Empathy, care, and community engagement", tags: ["support", "community", "care"] },
      ],
    },
  ];

  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [step, setStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState<string[][]>([]);

  const matchedRoles = useMemo(() => {
    const selectedTags = quizAnswers.flat();

    if (selectedTags.length === 0) return [];

    return roles
      .map((role) => ({
        role,
        score: role.tags.filter((tag) => selectedTags.includes(tag)).length,
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((item) => item.role);
  }, [quizAnswers]);

  const filteredRoles = useMemo(() => {
    const source = selectedDepartment === "Matched Roles" ? matchedRoles : roles;

    return source.filter((role) => {
      const matchesDepartment =
        selectedDepartment === "All" ||
        selectedDepartment === "Matched Roles" ||
        role.department === selectedDepartment;

      const matchesSearch =
        role.title.toLowerCase().includes(search.toLowerCase()) ||
        role.department.toLowerCase().includes(search.toLowerCase()) ||
        role.summary.toLowerCase().includes(search.toLowerCase());

      return matchesDepartment && matchesSearch;
    });
  }, [selectedDepartment, search, matchedRoles]);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#1E2A44]">
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-20">
        <p className="uppercase tracking-[0.35em] text-sm text-[#556F2B] mb-8">
          Careers & Volunteers
        </p>

        <h1 className="text-5xl md:text-7xl leading-tight font-bold tracking-[-0.04em] max-w-6xl mb-10">
          Join Azah’s volunteer network and help build meaningful humanitarian impact.
        </h1>

        <p className="text-xl leading-9 text-[#4A5565] max-w-5xl">
          Explore volunteer roles across leadership, programmes, protection, health,
          communications, digital systems, operations, partnerships, and recovery work.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="bg-[#1E2A44] text-white rounded-[40px] p-10 md:p-14">
          <p className="uppercase tracking-[0.3em] text-sm text-[#D4BE8A] mb-6">
            Role Matching Quiz
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Not sure where you fit? Find your best matches.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {quizQuestions.map((item, questionIndex) => (
              <div key={item.question} className="bg-white/10 rounded-[28px] p-6">
                <h3 className="font-bold mb-5">{item.question}</h3>

                <div className="space-y-3">
                  {item.options.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => {
                        const updated = [...quizAnswers];
                        updated[questionIndex] = option.tags;
                        setQuizAnswers(updated);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-2xl border transition ${
                        JSON.stringify(quizAnswers[questionIndex]) === JSON.stringify(option.tags)
                          ? "bg-[#556F2B] border-[#556F2B] text-white"
                          : "border-white/20 hover:bg-white/10"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {matchedRoles.length > 0 && (
            <div className="mt-8 bg-white text-[#1E2A44] rounded-[28px] p-7">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-6">
                <div>
                  <p className="font-bold text-xl mb-2">Your best role matches</p>
                  <p className="text-[#4A5565]">
                    Based on your answers, these roles may suit your strengths.
                  </p>
                </div>

                <button
                  onClick={() => setSelectedDepartment("Matched Roles")}
                  className="bg-[#1E2A44] text-white px-6 py-3 rounded-full hover:bg-[#556F2B] transition"
                >
                  View Matched Roles
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {matchedRoles.slice(0, 3).map((role) => (
                  <div key={role.slug} className="border border-[#E5DED3] rounded-[22px] p-5">
                    <p className="text-sm text-[#556F2B] font-semibold mb-2">
                      {role.department}
                    </p>
                    <p className="font-bold">{role.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-12">
        <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between mb-10">
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-[#556F2B] mb-5">
              Volunteer Vacancies
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em]">
              Explore where you can contribute.
            </h2>
          </div>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search roles..."
            className="bg-white border border-[#E5DED3] rounded-full px-6 py-4 outline-none min-w-[280px]"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {departments.map((department) => (
            <button
              key={department}
              onClick={() => setSelectedDepartment(department)}
              className={`px-5 py-3 rounded-full border text-sm transition ${
                selectedDepartment === department
                  ? "bg-[#1E2A44] text-white border-[#1E2A44]"
                  : "bg-white border-[#E5DED3] text-[#4A5565] hover:border-[#1E2A44]"
              }`}
            >
              {department}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 pb-32">
          {filteredRoles.map((role) => (
            <div
              key={role.slug}
              className="bg-white border border-[#E5DED3] rounded-[36px] p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-wrap gap-3 mb-7">
                <span className="bg-[#556F2B] text-white px-4 py-2 rounded-full text-sm">
                  Open
                </span>
                <span className="bg-[#F7F4EE] border border-[#E5DED3] text-[#B89B5E] px-4 py-2 rounded-full text-sm">
                  Remote
                </span>
                <span className="bg-[#F7F4EE] border border-[#E5DED3] text-[#556F2B] px-4 py-2 rounded-full text-sm">
                  90 Days
                </span>
                <span className="bg-[#F7F4EE] border border-[#E5DED3] px-4 py-2 rounded-full text-sm">
                  Volunteer
                </span>
              </div>

              <p className="uppercase tracking-[0.25em] text-sm text-[#556F2B] mb-5">
                {role.department}
              </p>

              <h3 className="text-3xl font-bold leading-tight mb-6">
                {role.title}
              </h3>

              <p className="text-[#4A5565] leading-8 mb-8">{role.summary}</p>

              <button
                onClick={() => {
                  setSelectedRole(role);
                  setStep(1);
                }}
                className="inline-flex items-center justify-between w-full text-left font-semibold hover:text-[#556F2B] transition"
              >
                View role details & apply
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {selectedRole && (
        <ApplicationModal
          role={selectedRole}
          step={step}
          setStep={setStep}
          nextStep={nextStep}
          prevStep={prevStep}
          close={() => setSelectedRole(null)}
        />
      )}
    </main>
  );
}

function ApplicationModal({
  role,
  step,
  setStep,
  nextStep,
  prevStep,
  close,
}: {
  role: Role;
  step: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  close: () => void;
}) {
  const [educationCount, setEducationCount] = useState(1);
  const [experienceCount, setExperienceCount] = useState(1);

  const activities = getRoleActivities(role);
  const outcome = getRoleOutcome(role);

  return (
    <div className="fixed inset-0 z-50 bg-[#1E2A44]/70 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen px-6 py-10 flex items-start justify-center">
        <div className="bg-[#F7F4EE] text-[#1E2A44] rounded-[40px] max-w-5xl w-full border border-[#E5DED3] shadow-2xl overflow-hidden">
          <div className="bg-white border-b border-[#E5DED3] p-8 md:p-10 flex items-start justify-between gap-8">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#556F2B] mb-4">
                Application Form
              </p>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                {role.title}
              </h2>

              <p className="text-[#4A5565] leading-8 max-w-3xl">{role.summary}</p>
            </div>

            <button
              onClick={close}
              className="w-12 h-12 rounded-full bg-[#F7F4EE] border border-[#E5DED3] text-2xl hover:bg-[#1E2A44] hover:text-white transition"
            >
              ×
            </button>
          </div>

          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white rounded-[28px] border border-[#E5DED3] p-7">
                <h3 className="text-xl font-bold mb-5">Role Activities</h3>
                <ul className="space-y-4 text-[#4A5565] leading-7">
                  {activities.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#556F2B] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-[28px] border border-[#E5DED3] p-7">
                <h3 className="text-xl font-bold mb-5">Expected Outcome</h3>
                <p className="text-[#4A5565] leading-8">{outcome}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              {["Personal Details", "Education", "Work Experience", "Motivation", "Reference"].map(
                (label, index) => (
                  <button
                    key={label}
                    onClick={() => setStep(index + 1)}
                    className={`px-5 py-3 rounded-full text-sm border ${
                      step === index + 1
                        ? "bg-[#1E2A44] text-white border-[#1E2A44]"
                        : "bg-white border-[#E5DED3] text-[#4A5565]"
                    }`}
                  >
                    {index + 1}. {label}
                  </button>
                )
              )}
            </div>

            <form className="bg-white rounded-[32px] border border-[#E5DED3] p-8 md:p-10">
              {step === 1 && (
                <div>
                  <h3 className="text-3xl font-bold mb-8">Personal Details</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Full Name" placeholder="Full name" />
                    <Field label="Email Address" placeholder="Email" />
                    <Field label="Phone Number" placeholder="Phone" />
                    <Field label="WhatsApp Number" placeholder="WhatsApp" />
                    <Field label="Nationality" placeholder="Nationality" />
                    <Field label="Country of Residence" placeholder="Country" />
                    <Field label="City" placeholder="City" />
                    <Field label="LinkedIn / Portfolio" placeholder="Optional link" />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-3xl font-bold mb-3">Education</h3>
                  <p className="text-[#4A5565] leading-8 mb-8">
                    Add your education history. Each entry is separated and categorized.
                  </p>

                  <div className="space-y-8">
                    {Array.from({ length: educationCount }).map((_, index) => (
                      <div key={index} className="bg-[#F7F4EE] border border-[#E5DED3] rounded-[28px] p-6">
                        <h4 className="text-xl font-bold mb-6">Education {index + 1}</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <Field label="University / Institution" placeholder="University name" />
                          <Field label="Degree" placeholder="Degree title" />
                          <Field label="Field of Study" placeholder="Field" />
                          <Field label="Country" placeholder="Country" />
                          <Field label="Start Date" placeholder="Month / Year" />
                          <Field label="End Date" placeholder="Month / Year or Present" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setEducationCount((prev) => prev + 1)}
                    className="mt-8 border border-[#1E2A44] px-6 py-3 rounded-full hover:bg-[#1E2A44] hover:text-white transition"
                  >
                    + Add Another Education
                  </button>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="text-3xl font-bold mb-3">Work Experience</h3>
                  <div className="space-y-8">
                    {Array.from({ length: experienceCount }).map((_, index) => (
                      <div key={index} className="bg-[#F7F4EE] border border-[#E5DED3] rounded-[28px] p-6">
                        <h4 className="text-xl font-bold mb-6">Experience {index + 1}</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <Field label="Organization" placeholder="Organization name" />
                          <Field label="Job Title / Role" placeholder="Role title" />
                          <Field label="Country" placeholder="Country" />
                          <Field label="Employment Type" placeholder="Full-time, volunteer, internship..." />
                          <Field label="Start Date" placeholder="Month / Year" />
                          <Field label="End Date" placeholder="Month / Year or Present" />
                          <TextArea label="Main Responsibilities" placeholder="Briefly describe your main responsibilities" />
                          <TextArea label="Key Achievements" placeholder="Briefly describe relevant achievements" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setExperienceCount((prev) => prev + 1)}
                    className="mt-8 border border-[#1E2A44] px-6 py-3 rounded-full hover:bg-[#1E2A44] hover:text-white transition"
                  >
                    + Add Another Experience
                  </button>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h3 className="text-3xl font-bold mb-8">Letter of Motivation</h3>
                  <TextArea label="Why are you interested in this role?" placeholder="Tell us why you would like to volunteer with Azah and how your skills can support this role." />
                  <TextArea label="Relevant Skills" placeholder="List your strongest skills for this position." />
                  <TextArea label="Availability" placeholder="Tell us your weekly availability and preferred working hours." />
                </div>
              )}

              {step === 5 && (
                <div>
                  <h3 className="text-3xl font-bold mb-8">Reference Contact</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Reference Full Name" placeholder="Name" />
                    <Field label="Reference Title" placeholder="Job title" />
                    <Field label="Reference Email" placeholder="Email" />
                    <Field label="Reference Phone Number" placeholder="Phone" />
                    <Field label="Organization" placeholder="Organization" />
                    <Field label="Relationship to Applicant" placeholder="Supervisor, professor, colleague..." />
                  </div>

                  <div className="mt-10 bg-[#F7F4EE] border border-[#E5DED3] rounded-[24px] p-6 text-[#4A5565] leading-8">
                    By submitting this application, you confirm that the information provided is accurate and that Azah Charitable Foundation may contact you regarding this volunteer opportunity.
                  </div>
                </div>
              )}

              <div className="flex justify-between gap-4 mt-12 pt-8 border-t border-[#E5DED3]">
                <button type="button" onClick={prevStep} disabled={step === 1} className="px-7 py-4 rounded-full border border-[#1E2A44] disabled:opacity-30 hover:bg-[#1E2A44] hover:text-white transition">
                  Back
                </button>

                {step < 5 ? (
                  <button type="button" onClick={nextStep} className="px-8 py-4 rounded-full bg-[#1E2A44] text-white hover:bg-[#556F2B] transition">
                    Save & Next
                  </button>
                ) : (
                  <button type="button" className="px-8 py-4 rounded-full bg-[#556F2B] text-white hover:opacity-90 transition">
                    Submit Application
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-3">{label}</label>
      <input type="text" placeholder={placeholder} className="w-full bg-[#F7F4EE] border border-[#E5DED3] rounded-2xl px-5 py-4 outline-none focus:border-[#556F2B] transition" />
    </div>
  );
}

function TextArea({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="md:col-span-2 mb-6">
      <label className="block text-sm font-semibold mb-3">{label}</label>
      <textarea rows={5} placeholder={placeholder} className="w-full bg-[#F7F4EE] border border-[#E5DED3] rounded-2xl px-5 py-4 outline-none focus:border-[#556F2B] transition resize-none" />
    </div>
  );
}