"use client";

import { useMemo, useState } from "react";

type Role = {
  title: string;
  department: string;
  summary: string;
  slug: string;
  tags: string[];
};

const ALL = "الكل";
const MATCHED = "الأدوار المناسبة";

const roles: Role[] = [
  { title: "مساعد/ة المدير التنفيذي للعمليات / الشريك المؤسس", department: "المكتب التنفيذي", summary: "دعم التنسيق التنفيذي، وجدولة الاجتماعات، والمتابعة، والبحث، والتوثيق، والتخطيط التشغيلي لقيادة مؤسسة أزاه.", slug: "assistant-to-coo-cofounder", tags: ["leadership", "admin", "coordination"] },
  { title: "متطوع/ة دعم رئيس فريق العمل", department: "المكتب التنفيذي", summary: "المساعدة في التنسيق الداخلي، وترتيب أولويات القيادة، والتواصل بين الفرق، والمتابعة الاستراتيجية.", slug: "chief-of-staff-support-volunteer", tags: ["leadership", "coordination", "strategy"] },
  { title: "متطوع/ة التخطيط الاستراتيجي", department: "المكتب التنفيذي", summary: "دعم تطوير الاستراتيجيات، وتخطيط المشاريع، وإعداد خرائط الطريق المؤسسية، وترتيب أولويات البرامج.", slug: "strategic-planning-volunteer", tags: ["strategy", "planning", "leadership"] },
  { title: "متطوع/ة دعم مجلس الإدارة والحوكمة", department: "الحوكمة", summary: "المساعدة في وثائق الحوكمة، وحزم اجتماعات المجلس، والتحضير للاجتماعات، ودعم الامتثال المؤسسي.", slug: "board-governance-support-volunteer", tags: ["governance", "admin", "compliance"] },
  { title: "منسق/ة برامج", department: "البرامج", summary: "دعم تخطيط البرامج، والجداول الزمنية، وتتبع الأنشطة، والتنسيق، ومتابعة التنفيذ.", slug: "programme-coordinator", tags: ["programmes", "coordination", "planning"] },
  { title: "مساعد/ة مشروع", department: "البرامج", summary: "مساندة فرق البرامج في التوثيق، وتتبع المهام، والبحث، ودعم التنفيذ.", slug: "project-assistant", tags: ["programmes", "admin", "coordination"] },
  { title: "مساعد/ة إداري/ة", department: "الإدارة", summary: "دعم الأرشفة، والجدولة، والسجلات، والمراسلات، وتنسيق الوثائق، والإدارة العامة.", slug: "administrative-assistant", tags: ["admin", "coordination"] },
  { title: "منسق/ة الجداول والاجتماعات", department: "الإدارة", summary: "تنسيق الاجتماعات، وإعداد الأجندات، وتسجيل نقاط العمل، وتتبع الحضور، ودعم المتابعة.", slug: "scheduling-meetings-coordinator", tags: ["admin", "coordination"] },
  { title: "متطوع/ة تطوير السياسات وإجراءات العمل", department: "الإدارة", summary: "المساعدة في صياغة السياسات الداخلية، وإجراءات العمل القياسية، والقوالب، والإرشادات الإدارية.", slug: "policy-sop-development-volunteer", tags: ["policy", "admin", "governance"] },
  { title: "منسق/ة الموارد البشرية والمتطوعين", department: "الأفراد والثقافة المؤسسية", summary: "دعم استقطاب المتطوعين، والتعريف بالمؤسسة، والمقابلات، ومطابقة الأدوار، وتتبع المشاركة.", slug: "hr-volunteer-coordinator", tags: ["people", "admin", "coordination"] },
  { title: "متطوع/ة استقطاب المواهب والتواصل", department: "الأفراد والثقافة المؤسسية", summary: "تحديد المتطوعين المحتملين، ودعم حملات التواصل، والفرز الأولي، والتواصل مع المرشحين.", slug: "recruitment-talent-outreach-volunteer", tags: ["people", "communications", "outreach"] },
  { title: "متطوع/ة رفاه الفريق والثقافة المؤسسية", department: "الأفراد والثقافة المؤسسية", summary: "دعم رفاه الفريق، ومشاركة المتطوعين، وأنشطة بناء الثقافة المؤسسية، وأنظمة التغذية الراجعة.", slug: "staff-wellbeing-culture-volunteer", tags: ["people", "wellbeing", "support"] },
  { title: "متطوع/ة المتابعة والتقييم والتقارير", department: "المتابعة والتقييم", summary: "دعم أدوات جمع البيانات، وتتبع التقدم، وملخصات الأثر، وأطر إعداد التقارير.", slug: "monitoring-evaluation-reporting-volunteer", tags: ["data", "research", "reporting"] },
  { title: "مساعد/ة بحث", department: "البحث والبيانات", summary: "إجراء بحوث مكتبية، ومراجعات سياسات، وتحليل السياق الإنساني، وإعداد ملخصات أدلة.", slug: "research-assistant", tags: ["research", "data", "policy"] },
  { title: "متطوع/ة تحليل بيانات", department: "البحث والبيانات", summary: "دعم تنظيف البيانات، ولوحات المتابعة، وتقييمات الاحتياجات، ومعلومات المستفيدين، وملخصات التحليل.", slug: "data-analyst-volunteer", tags: ["data", "technical", "research"] },
  { title: "متطوع/ة نظم المعلومات الجغرافية والخرائط", department: "البحث والبيانات", summary: "المساعدة في رسم خرائط المناطق الهشة، ونقاط الخدمات، واحتياجات المجتمعات، والمواقع التشغيلية.", slug: "gis-mapping-volunteer", tags: ["data", "technical", "mapping"] },
  { title: "متطوع/ة تصميم الاستبيانات", department: "البحث والبيانات", summary: "المساعدة في تصميم الاستبيانات، ونماذج التغذية الراجعة، وأدوات تقييم الاحتياجات، وقوالب جمع البيانات.", slug: "survey-design-volunteer", tags: ["research", "data", "design"] },
  { title: "مساعد/ة مالية", department: "المالية والامتثال", summary: "دعم تتبع الميزانيات، والتوثيق المالي، والإيصالات، والجداول، والسجلات المالية.", slug: "finance-assistant", tags: ["finance", "admin", "compliance"] },
  { title: "متطوع/ة تتبع الميزانية", department: "المالية والامتثال", summary: "المساعدة في مراقبة الميزانية، وتكلفة المشاريع، وسجلات المصروفات، والملخصات المالية.", slug: "budget-tracking-volunteer", tags: ["finance", "data", "compliance"] },
  { title: "متطوع/ة دعم المشتريات", department: "المالية والامتثال", summary: "دعم سجلات المشتريات، وقوائم الموردين، وتتبع الشراء، والتوثيق.", slug: "procurement-support-volunteer", tags: ["finance", "operations", "admin"] },
  { title: "متطوع/ة الامتثال والتوثيق", department: "المالية والامتثال", summary: "المساعدة في ملفات الامتثال، ووثائق المانحين، والتحضير للمراجعة، وضبط الوثائق.", slug: "compliance-documentation-volunteer", tags: ["compliance", "admin", "finance"] },
  { title: "متطوع/ة التقارير المالية للمانحين", department: "المالية والامتثال", summary: "دعم التقارير المالية للمانحين، وسرد الميزانية، وملاحظات المصروفات، وتنسيق التقارير.", slug: "donor-financial-reporting-volunteer", tags: ["finance", "reporting", "fundraising"] },
  { title: "متطوع/ة شراكات", department: "الشراكات", summary: "دعم رسم خرائط الشركاء، والتواصل المؤسسي، وتتبع العلاقات، وإعداد ملخصات التعاون.", slug: "partnerships-officer-volunteer", tags: ["partnerships", "outreach", "coordination"] },
  { title: "متطوع/ة علاقات المانحين", department: "الشراكات", summary: "المساعدة في التواصل مع المانحين، وقواعد بيانات المانحين، ومذكرات الاجتماعات، والمتابعة.", slug: "donor-relations-volunteer", tags: ["partnerships", "fundraising", "communications"] },
  { title: "متطوع/ة الاتصال بالسفارات والشركاء الدوليين", department: "الشراكات", summary: "دعم التواصل مع السفارات، والمنظمات الدولية، والبعثات الدبلوماسية، والشركاء.", slug: "embassy-international-liaison-volunteer", tags: ["partnerships", "diplomacy", "outreach"] },
  { title: "متطوع/ة تنسيق مع الأمم المتحدة والمنظمات غير الحكومية", department: "الشراكات", summary: "المساعدة في خرائط التنسيق، وبحوث القطاعات الإنسانية، وجهات اتصال المنظمات، وتتبع الشراكات.", slug: "un-ngo-coordination-volunteer", tags: ["partnerships", "coordination", "research"] },
  { title: "متطوع/ة تعبئة الموارد", department: "جمع التمويل", summary: "دعم استراتيجية جمع التمويل، وبحوث المانحين، وتقويمات التمويل، ورصد الفرص.", slug: "resource-mobilization-volunteer", tags: ["fundraising", "research", "strategy"] },
  { title: "متطوع/ة كتابة المنح ودعم المقترحات", department: "جمع التمويل", summary: "المساعدة في إعداد المذكرات المفاهيمية، ومقترحات المنح، ولغة المانحين، وسرد الميزانية، وتنسيق المقترحات.", slug: "grant-writing-proposal-support-volunteer", tags: ["fundraising", "writing", "strategy"] },
  { title: "مطوّر/ة واجهات أمامية", department: "تقنية المعلومات والرقمنة", summary: "دعم تطوير الموقع، وتحسين واجهة المستخدم، والتصاميم المتجاوبة، وتحديث الصفحات.", slug: "frontend-web-developer", tags: ["technical", "web", "design"] },
  { title: "مطوّر/ة خلفية", department: "تقنية المعلومات والرقمنة", summary: "دعم قواعد البيانات المستقبلية، ونماذج التقديم، وأنظمة الإرسال الآمنة، وسير العمل الخلفي.", slug: "backend-developer", tags: ["technical", "web", "data"] },
  { title: "مصمم/ة تجربة وواجهة المستخدم", department: "تقنية المعلومات والرقمنة", summary: "تحسين تجربة استخدام الموقع، ومسارات التقديم، وإمكانية الوصول، والاتساق البصري.", slug: "ux-ui-designer", tags: ["design", "technical", "web"] },
  { title: "متطوع/ة دعم تقني", department: "تقنية المعلومات والرقمنة", summary: "المساعدة في حل المشكلات الرقمية، وإعداد البريد الإلكتروني، ودعم الأجهزة، وإرشاد الأنظمة الداخلية.", slug: "it-support-volunteer", tags: ["technical", "support"] },
  { title: "مدير/ة قاعدة بيانات / نظام علاقات", department: "تقنية المعلومات والرقمنة", summary: "دعم قواعد بيانات المانحين، والمتطوعين، والمستفيدين، والشركاء بسجلات منظمة ونظيفة.", slug: "crm-database-manager", tags: ["technical", "data", "admin"] },
  { title: "متطوع/ة أمن سيبراني", department: "تقنية المعلومات والرقمنة", summary: "دعم التوعية بالأمن السيبراني، وحماية البيانات، والأنظمة الآمنة، وفحوصات المخاطر الأساسية.", slug: "cybersecurity-volunteer", tags: ["technical", "compliance"] },
  { title: "متطوع/ة أنظمة الذكاء الاصطناعي والأتمتة", department: "تقنية المعلومات والرقمنة", summary: "المساعدة في تصميم سير عمل مدعوم بالذكاء الاصطناعي، وأدوات أتمتة، وأنظمة للمتطوعين، وعمليات داخلية.", slug: "ai-systems-automation-volunteer", tags: ["technical", "ai", "systems"] },
  { title: "منسق/ة النماذج الرقمية والتقديمات", department: "تقنية المعلومات والرقمنة", summary: "بناء وصيانة النماذج الإلكترونية للمتطوعين، والوظائف، والشراكات، واستقبال البرامج.", slug: "digital-forms-applications-coordinator", tags: ["technical", "forms", "systems"] },
  { title: "مدير/ة أنظمة Notion / Airtable", department: "تقنية المعلومات والرقمنة", summary: "إنشاء لوحات متابعة داخلية، وتتبع المهام، وقواعد بيانات المتطوعين، وأنظمة إدارة المشاريع.", slug: "notion-airtable-systems-manager", tags: ["technical", "systems", "admin"] },
  { title: "مدير/ة وسائل التواصل الاجتماعي", department: "الاتصالات", summary: "دعم تقاويم المحتوى، واستراتيجية المنصات، وصياغة المنشورات، والتفاعل مع الجمهور، والجدولة.", slug: "social-media-manager", tags: ["communications", "creative", "social"] },
  { title: "كاتب/ة محتوى", department: "الاتصالات", summary: "كتابة محتوى الموقع، وقصص المشاريع، والنشرات، والتعليقات، ومواد الاتصال.", slug: "content-writer", tags: ["communications", "writing", "creative"] },
  { title: "متطوع/ة السرد الإنساني", department: "الاتصالات", summary: "تحويل تحديثات الميدان والعمل البرامجي والقصص الإنسانية إلى محتوى يحفظ الكرامة.", slug: "humanitarian-storytelling-volunteer", tags: ["communications", "writing", "creative"] },
  { title: "مصوّر/ة فوتوغرافي/ة أو فيديو", department: "الاتصالات", summary: "دعم التوثيق البصري، والفعاليات، وإعلام المشاريع، وأرشيف الصور، ومواد السرد.", slug: "photographer-videographer", tags: ["communications", "creative", "media"] },
  { title: "متطوع/ة التوثيق الإعلامي الميداني", department: "الاتصالات", summary: "المساعدة في التوثيق الميداني الطويل، والمقابلات، والقصص البصرية، وتنظيم المواد الإعلامية.", slug: "documentary-field-media-volunteer", tags: ["communications", "media", "creative"] },
  { title: "مترجم/ة عربي-إنجليزي", department: "الاتصالات", summary: "ترجمة وتحرير المحتوى بين العربية والإنجليزية للتقارير، والمنشورات، والمقترحات، والملخصات.", slug: "arabic-english-translator", tags: ["communications", "writing", "language"] },
  { title: "متطوع/ة التصميم الجرافيكي والهوية", department: "الاتصالات", summary: "تصميم مواد التواصل الاجتماعي، والتقارير، والعروض، وقوالب الهوية، والمواد البصرية.", slug: "graphic-design-branding-volunteer", tags: ["communications", "design", "creative"] },
  { title: "مصمم/ة عروض تقديمية", department: "الاتصالات", summary: "تصميم عروض مهنية للمانحين، وملفات تعريفية للمشاريع، وشرائح البرامج، وملخصات بصرية.", slug: "presentation-designer", tags: ["communications", "design", "creative"] },
  { title: "متطوع/ة علاقات صحفية وإعلامية", department: "الاتصالات", summary: "دعم التواصل الصحفي، وقوائم الإعلام، ومذكرات الإحاطة، وتغطية الفعاليات، والمتابعة الإعلامية.", slug: "press-media-relations-volunteer", tags: ["communications", "media", "outreach"] },
  { title: "متطوع/ة الحماية وإدارة الحالات", department: "الحماية", summary: "دعم البرامج الحساسة للحماية، ورسم خرائط الإحالات، وأدوات إدارة الحالات، والمسارات الآمنة.", slug: "protection-case-management-volunteer", tags: ["protection", "support", "field"] },
  { title: "متطوع/ة دعم الحماية والوقاية من الضرر", department: "الحماية", summary: "المساعدة في سياسات الحماية، وتخفيف المخاطر، وأدوات السرية، وإرشادات الحماية.", slug: "safeguarding-protection-support-volunteer", tags: ["protection", "compliance", "support"] },
  { title: "متطوع/ة حماية الطفل", department: "الحماية", summary: "دعم البرامج الصديقة للأطفال، وإحالات التعليم، والمساحات الآمنة، وأنشطة الحماية.", slug: "child-protection-volunteer", tags: ["protection", "children", "support"] },
  { title: "متطوع/ة دعم الإحالات القانونية", department: "الحماية", summary: "المساعدة في تحديد مسارات الإحالة القانونية، والمعلومات الحقوقية، وموارد الحماية.", slug: "legal-referral-support-volunteer", tags: ["protection", "legal", "support"] },
  { title: "متطوع/ة صحة عامة", department: "الصحة", summary: "دعم تخطيط الصحة العامة، والتوعية المجتمعية، والتواصل الصحي، والتثقيف الصحي الأساسي.", slug: "public-health-volunteer", tags: ["health", "community", "support"] },
  { title: "متطوع/ة الخدمات الصحية", department: "الصحة", summary: "دعم تخطيط البرامج الصحية، ورسم خرائط الإحالات، والتواصل الطبي، وتنسيق الخدمات.", slug: "health-services-volunteer", tags: ["health", "programmes", "coordination"] },
  { title: "متطوع/ة دعم الصحة الإنجابية", department: "الصحة", summary: "دعم صحة الأم، والتوعية بالصحة الإنجابية، ومسارات الإحالة، والرعاية القائمة على الكرامة.", slug: "reproductive-health-support-volunteer", tags: ["health", "women", "support"] },
  { title: "متطوع/ة المياه والصرف الصحي والنظافة", department: "المياه والصرف الصحي والنظافة", summary: "دعم المياه النظيفة، والصرف الصحي، وحقائب النظافة، والتوعية، وأنشطة الوقاية من الأمراض.", slug: "wash-volunteer", tags: ["wash", "health", "field"] },
  { title: "متطوع/ة التغذية", department: "الأمن الغذائي والتغذية", summary: "دعم التوعية التغذوية، واستهداف الأسر الهشة، والمساعدات الغذائية، وأنشطة التغذية.", slug: "nutrition-volunteer", tags: ["food", "nutrition", "health"] },
  { title: "متطوع/ة الاستجابة الطارئة", department: "الاستجابة الطارئة", summary: "دعم تخطيط الاستجابة السريعة، ومساعدة النازحين، والإمدادات الطارئة، والتنسيق العاجل.", slug: "emergency-response-volunteer", tags: ["emergency", "field", "operations"] },
  { title: "متطوع/ة إدماج الأشخاص ذوي الإعاقة", department: "الإدماج", summary: "دعم البرامج المراعية للإعاقة، وفحوصات إمكانية الوصول، والأدوات الشاملة، ومساندة المستفيدين.", slug: "disability-inclusion-volunteer", tags: ["inclusion", "support", "protection"] },
  { title: "متطوع/ة دعم رعاية كبار السن", department: "رعاية كبار السن", summary: "دعم رعاية كبار السن، والإدماج الاجتماعي، وتنسيق الاحتياجات الأساسية، والكرامة، والرفاه.", slug: "elderly-care-support-volunteer", tags: ["elderly", "support", "care"] },
  { title: "متطوع/ة دعم التعافي من تعاطي المخدرات", department: "إعادة التأهيل", summary: "دعم تخطيط إعادة التأهيل، وموارد التعافي، وتقليل الوصمة، ومسارات إعادة الإدماج.", slug: "substance-abuse-recovery-support-volunteer", tags: ["rehabilitation", "support", "health"] },
  { title: "متطوع/ة الصحة النفسية والدعم النفسي الاجتماعي", department: "الصحة النفسية والدعم النفسي الاجتماعي", summary: "المساعدة في تخطيط الدعم النفسي الاجتماعي، والموارد المراعية للصدمات، والإحالات، وأنشطة الرفاه.", slug: "mental-health-psychosocial-support-volunteer", tags: ["mental-health", "support", "care"] },
  { title: "ميسّر/ة جلسات جماعية ورفاه", department: "الصحة النفسية والدعم النفسي الاجتماعي", summary: "دعم أنشطة الرفاه المنظمة، والدعم العاطفي، والأنشطة الجماعية، ومساحات الحوار الآمنة.", slug: "group-therapy-wellness-facilitator", tags: ["mental-health", "wellbeing", "support"] },
  { title: "متطوع/ة التعليم ومحو الأمية", department: "التعليم", summary: "دعم محو الأمية الأساسي، والتعليم التعويضي، والموارد التعليمية، وأنشطة التعلم.", slug: "education-literacy-volunteer", tags: ["education", "youth", "support"] },
  { title: "مدرب/ة المهارات الرقمية", department: "التعليم", summary: "تعليم أو دعم المهارات الرقمية، والتعلم الإلكتروني، واستخدام الحاسوب الأساسي، والثقة الرقمية.", slug: "digital-literacy-trainer", tags: ["education", "technical", "training"] },
  { title: "منسق/ة إشراك الشباب", department: "الشباب والتعليم", summary: "دعم التواصل مع الشباب، والأنشطة التي يقودها الشباب، وبرامج القيادة، وخطط المشاركة.", slug: "youth-engagement-coordinator", tags: ["youth", "education", "community"] },
  { title: "متطوع/ة دعم المنح الدراسية", department: "الشباب والتعليم", summary: "دعم البحث عن المنح، وإرشاد التقديم، ومسارات التعليم، ومساندة الطلاب.", slug: "scholarship-support-volunteer", tags: ["education", "youth", "research"] },
  { title: "متطوع/ة برنامج الإرشاد", department: "الشباب والتعليم", summary: "دعم مطابقة المرشدين، وتنسيق الإرشاد، وتنمية الشباب، ومتابعة التعلم.", slug: "mentorship-programme-volunteer", tags: ["youth", "education", "support"] },
  { title: "متطوع/ة التطوير المهني", department: "الشباب والتعليم", summary: "مساعدة المستفيدين والشباب على إعداد السير الذاتية، والمقابلات، والخطط المهنية، والمهارات العملية.", slug: "career-development-volunteer", tags: ["youth", "career", "support"] },
  { title: "مدرب/ة مهارات مهنية", department: "سبل كسب العيش", summary: "دعم المهارات العملية مثل الخياطة، والحرف، وتصنيع الغذاء، والمشاريع الصغيرة، وتوليد الدخل.", slug: "vocational-skills-trainer", tags: ["livelihoods", "training", "community"] },
  { title: "متطوع/ة الزراعة وسبل كسب العيش", department: "سبل كسب العيش", summary: "دعم إنتاج الخضروات، والزراعة الصغيرة، والأنشطة المدرة للدخل، والعمل على تعزيز الصمود.", slug: "agriculture-livelihoods-volunteer", tags: ["livelihoods", "agriculture", "food"] },
  { title: "منشط/ة مجتمعي/ة", department: "المجتمع والعمليات الميدانية", summary: "دعم التوعية، والتواصل المحلي، وإشراك المستفيدين، والإحالات، والمشاركة المجتمعية.", slug: "community-mobilizer", tags: ["community", "field", "outreach"] },
  { title: "متطوع/ة التواصل المجتمعي", department: "المجتمع والعمليات الميدانية", summary: "دعم التوعية، والحشد المجتمعي، والتواصل مع المستفيدين، والاتصال الميداني.", slug: "community-outreach-volunteer", tags: ["community", "outreach", "field"] },
  { title: "متطوع/ة تسجيل المستفيدين", department: "المجتمع والعمليات الميدانية", summary: "المساعدة في نماذج التسجيل، وإدخال بيانات المستفيدين، ودعم الاستقبال، وحفظ السجلات.", slug: "beneficiary-registration-volunteer", tags: ["community", "data", "field"] },
  { title: "متطوع/ة دعم التوزيع", department: "المجتمع والعمليات الميدانية", summary: "دعم توزيع الإمدادات، والحقائب، والغذاء، ومواد النظافة، والمساعدات المنزلية الأساسية.", slug: "distribution-support-volunteer", tags: ["community", "operations", "field"] },
  { title: "متطوع/ة الإرشاد النظير وقيادة الناجين", department: "المجتمع والعمليات الميدانية", summary: "دعم الإرشاد النظير، والمبادرات التي يقودها الناجون، وأنشطة إعادة الإدماج، ومسارات القيادة.", slug: "peer-mentorship-survivor-leadership-volunteer", tags: ["community", "support", "protection"] },
  { title: "متطوع/ة إعادة الإدماج والمتابعة", department: "المجتمع والعمليات الميدانية", summary: "المساعدة في أنظمة المتابعة، ومسارات العيش المستقل، وتتبع الأسرة، ودعم إعادة الإدماج.", slug: "reintegration-follow-up-volunteer", tags: ["community", "support", "field"] },
  { title: "مساعد/ة لوجستيات", department: "العمليات", summary: "المساعدة في الإمدادات، وتنسيق النقل، وتتبع المخزون، وخطط الحركة، وسجلات اللوجستيات.", slug: "logistics-assistant", tags: ["operations", "logistics", "admin"] },
  { title: "متطوع/ة دعم المستودعات", department: "العمليات", summary: "دعم تنظيم التخزين، وسجلات المخزون، وحركة المواد، وتوثيق المستودعات.", slug: "warehouse-support-volunteer", tags: ["operations", "logistics"] },
  { title: "متطوع/ة تنسيق السائقين", department: "العمليات", summary: "دعم جدولة النقل، وتنسيق السائقين، وتخطيط الحركة، وسجلات الرحلات.", slug: "driver-coordination-volunteer", tags: ["operations", "logistics", "coordination"] },
  { title: "متطوع/ة الاستقبال ودعم intake", department: "العمليات", summary: "دعم الاستقبال السري، وإجراءات الدخول، وجدولة المواعيد، وإرشاد الزوار.", slug: "reception-intake-support-volunteer", tags: ["operations", "admin", "support"] },
];

function getRoleActivities(role: Role) {
  const slug = role.slug;

  if (slug.includes("social-media")) return ["إعداد تقاويم محتوى أسبوعية.", "صياغة التعليقات والمنشورات والحملات.", "متابعة التفاعل وملاحظات الجمهور.", "التنسيق مع متطوعي التصميم والسرد الإنساني."];
  if (slug.includes("content-writer")) return ["كتابة محتوى الموقع والمشاريع.", "إعداد النشرات والتعليقات.", "تحويل تحديثات البرامج إلى قصص مصقولة.", "تحرير المحتوى لضمان الوضوح والكرامة والاتساق."];
  if (slug.includes("translator")) return ["ترجمة المواد بين العربية والإنجليزية.", "مراجعة النبرة والدقة.", "دعم التقارير والمنشورات ثنائية اللغة.", "الحفاظ على مصطلحات إنسانية موحدة."];
  if (slug.includes("frontend")) return ["بناء أقسام متجاوبة للموقع.", "تحسين مكونات الواجهة وتصميم الصفحات.", "إصلاح المشكلات البصرية عبر الأجهزة.", "التنسيق مع فرق تجربة المستخدم والتطوير الخلفي."];
  if (slug.includes("backend")) return ["دعم أنظمة إرسال النماذج الآمنة.", "تخطيط هياكل قواعد البيانات.", "إنشاء سير عمل خلفي للتقديمات.", "التنسيق مع فرق الواجهة والنماذج الرقمية."];
  if (slug.includes("grant")) return ["صياغة أقسام المقترحات والمذكرات المفاهيمية.", "دعم لغة المانحين وأطر النتائج.", "إعداد ملخصات المشاريع.", "مواءمة المقترحات مع أولويات المانحين."];
  if (slug.includes("protection")) return ["دعم رسم خرائط الإحالات الخاصة بالحماية.", "إعداد أدوات تركز على الناجين.", "المساعدة في توثيق المسارات الآمنة.", "الحفاظ على معايير السرية والكرامة."];
  if (slug.includes("health")) return ["دعم تخطيط التوعية الصحية.", "رسم خرائط خدمات الإحالة.", "إعداد مواد التوعية الصحية.", "التنسيق مع فرق البرامج والميدان."];
  if (slug.includes("wash")) return ["دعم أنشطة التوعية بالنظافة.", "تتبع احتياجات حقائب النظافة.", "المساعدة في تخطيط المياه والصرف الصحي.", "إعداد رسائل الوقاية من الأمراض."];
  if (slug.includes("logistics") || slug.includes("warehouse") || slug.includes("driver")) return ["تتبع الإمدادات وخطط الحركة.", "دعم سجلات النقل والمخزون.", "المساعدة في تنسيق التسليم.", "الحفاظ على توثيق لوجستي منظم."];
  if (slug.includes("finance") || slug.includes("budget")) return ["تتبع الميزانيات وسجلات المصروفات.", "تنظيم الإيصالات والسجلات المالية.", "دعم الملخصات المالية للمانحين.", "الحفاظ على جداول وملفات مالية منظمة."];

  return [
    `دعم مهام عملية مرتبطة بقسم ${role.department}.`,
    "إعداد المتابعات والملاحظات والملخصات ووثائق العمل.",
    "التنسيق مع أعضاء الفريق المعنيين ومتابعة نقاط العمل.",
    "المساهمة في تنفيذ منظم ومسؤول ومهني.",
  ];
}

function getRoleOutcome(role: Role) {
  return `يساهم هذا الدور في تعزيز قدرة مؤسسة أزاه في مجال ${role.department} من خلال تحسين التنسيق، والتوثيق، وجودة الخدمة، والمتابعة في المبادرات الإنسانية وبرامج التعافي.`;
}

export default function CareersPage() {
  const departments = [ALL, MATCHED, ...Array.from(new Set(roles.map((r) => r.department)))];

  const quizQuestions = [
    {
      question: "ما نوع العمل الذي يبدو أقرب لطبيعتك؟",
      options: [
        { label: "القيادة والتخطيط والتنسيق", tags: ["leadership", "strategy", "coordination"] },
        { label: "الكتابة والإعلام والسرد", tags: ["communications", "writing", "creative"] },
        { label: "البيانات والأنظمة والتقنية", tags: ["data", "technical", "systems"] },
        { label: "الدعم المجتمعي المباشر والحماية", tags: ["support", "community", "protection"] },
      ],
    },
    {
      question: "ما أكثر شيء تستمتع/ين بالقيام به؟",
      options: [
        { label: "تنظيم الفرق ومتابعة نقاط العمل", tags: ["admin", "coordination"] },
        { label: "تصميم المواد البصرية والمنشورات والعروض", tags: ["design", "creative", "communications"] },
        { label: "البحث والتحليل وبناء الأدوات", tags: ["research", "data", "technical"] },
        { label: "دعم النساء أو الأطفال أو الصحة أو العمل الميداني", tags: ["health", "protection", "field"] },
      ],
    },
    {
      question: "ما أقوى مهارة لديك؟",
      options: [
        { label: "الإدارة والمتابعة", tags: ["admin", "coordination"] },
        { label: "التواصل واللغة", tags: ["communications", "language", "writing"] },
        { label: "الأنظمة التقنية وقواعد البيانات", tags: ["technical", "data", "web"] },
        { label: "التعاطف والرعاية والتفاعل المجتمعي", tags: ["support", "community", "care"] },
      ],
    },
  ];

  const [selectedDepartment, setSelectedDepartment] = useState(ALL);
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
    const source = selectedDepartment === MATCHED ? matchedRoles : roles;

    return source.filter((role) => {
      const matchesDepartment =
        selectedDepartment === ALL ||
        selectedDepartment === MATCHED ||
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
    <main dir="rtl" className="min-h-screen bg-[#F7F4EE] text-[#1E2A44]">
      <section className="max-w-7xl mx-auto px-8 pt-24 pb-20 text-right">
        <p className="uppercase tracking-[0.35em] text-sm text-[#556F2B] mb-8">
          الوظائف والتطوع
        </p>

        <h1 className="text-5xl md:text-7xl leading-tight font-bold tracking-[-0.04em] max-w-6xl mb-10">
          انضم إلى شبكة متطوعي أزاه وساهم في بناء أثر إنساني حقيقي.
        </h1>

        <p className="text-xl leading-9 text-[#4A5565] max-w-5xl">
          استكشف فرص التطوع في مجالات القيادة، والبرامج، والحماية، والصحة،
          والاتصالات، والأنظمة الرقمية، والعمليات، والشراكات، والعمل من أجل التعافي.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="bg-[#1E2A44] text-white rounded-[40px] p-10 md:p-14">
          <p className="uppercase tracking-[0.3em] text-sm text-[#D4BE8A] mb-6">
            اختبار مطابقة الأدوار
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            لست متأكداً أين يناسبك العمل؟ اكتشف أفضل الأدوار لك.
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
                      className={`w-full text-right px-4 py-3 rounded-2xl border transition ${
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
                  <p className="font-bold text-xl mb-2">أفضل الأدوار المناسبة لك</p>
                  <p className="text-[#4A5565]">
                    بناءً على إجاباتك، قد تناسب هذه الأدوار نقاط قوتك.
                  </p>
                </div>

                <button
                  onClick={() => setSelectedDepartment(MATCHED)}
                  className="bg-[#1E2A44] text-white px-6 py-3 rounded-full hover:bg-[#556F2B] transition"
                >
                  عرض الأدوار المناسبة
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
              فرص التطوع المتاحة
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em]">
              اكتشف أين يمكنك أن تساهم.
            </h2>
          </div>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث عن دور..."
            className="bg-white border border-[#E5DED3] rounded-full px-6 py-4 outline-none min-w-[280px] text-right"
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
                  متاح
                </span>
                <span className="bg-[#F7F4EE] border border-[#E5DED3] text-[#B89B5E] px-4 py-2 rounded-full text-sm">
                  عن بُعد
                </span>
                <span className="bg-[#F7F4EE] border border-[#E5DED3] text-[#556F2B] px-4 py-2 rounded-full text-sm">
                  90 يوماً
                </span>
                <span className="bg-[#F7F4EE] border border-[#E5DED3] px-4 py-2 rounded-full text-sm">
                  تطوع
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
                className="inline-flex items-center justify-between w-full text-right font-semibold hover:text-[#556F2B] transition"
              >
                عرض تفاصيل الدور والتقديم
                <span>←</span>
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const payload = new FormData(event.currentTarget);
    payload.append("role", role.title);
    payload.append("language", "Arabic");

    try {
      const response = await fetch("https://formspree.io/f/xppwkzjk", {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Formspree submission failed");
      setSubmitStatus("success");
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const activities = getRoleActivities(role);
  const outcome = getRoleOutcome(role);

  const steps = ["البيانات الشخصية", "التعليم", "الخبرة العملية", "الدافع للتقديم", "المرجع"];

  return (
    <div dir="rtl" className="fixed inset-0 z-50 bg-[#1E2A44]/70 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen px-6 py-10 flex items-start justify-center">
        <div className="bg-[#F7F4EE] text-[#1E2A44] rounded-[40px] max-w-5xl w-full border border-[#E5DED3] shadow-2xl overflow-hidden">
          <div className="bg-white border-b border-[#E5DED3] p-8 md:p-10 flex items-start justify-between gap-8">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-[#556F2B] mb-4">
                استمارة التقديم
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
                <h3 className="text-xl font-bold mb-5">أنشطة الدور</h3>
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
                <h3 className="text-xl font-bold mb-5">الأثر المتوقع</h3>
                <p className="text-[#4A5565] leading-8">{outcome}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              {steps.map((label, index) => (
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
              ))}
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-[32px] border border-[#E5DED3] p-8 md:p-10">
              {step === 1 && (
                <div>
                  <h3 className="text-3xl font-bold mb-8">البيانات الشخصية</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="الاسم الكامل" placeholder="الاسم الكامل" />
                    <Field label="البريد الإلكتروني" placeholder="البريد الإلكتروني" />
                    <Field label="رقم الهاتف" placeholder="رقم الهاتف" />
                    <Field label="رقم واتساب" placeholder="واتساب" />
                    <Field label="الجنسية" placeholder="الجنسية" />
                    <Field label="بلد الإقامة" placeholder="البلد" />
                    <Field label="المدينة" placeholder="المدينة" />
                    <Field label="لينكدإن / ملف أعمال" placeholder="رابط اختياري" />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-3xl font-bold mb-3">التعليم</h3>
                  <p className="text-[#4A5565] leading-8 mb-8">
                    أضف تاريخك التعليمي. كل إدخال منفصل ومصنف.
                  </p>

                  <div className="space-y-8">
                    {Array.from({ length: educationCount }).map((_, index) => (
                      <div key={index} className="bg-[#F7F4EE] border border-[#E5DED3] rounded-[28px] p-6">
                        <h4 className="text-xl font-bold mb-6">تعليم {index + 1}</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <Field label="الجامعة / المؤسسة" placeholder="اسم الجامعة" />
                          <Field label="الدرجة العلمية" placeholder="اسم الدرجة" />
                          <Field label="مجال الدراسة" placeholder="التخصص" />
                          <Field label="البلد" placeholder="البلد" />
                          <Field label="تاريخ البدء" placeholder="الشهر / السنة" />
                          <Field label="تاريخ الانتهاء" placeholder="الشهر / السنة أو حتى الآن" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setEducationCount((prev) => prev + 1)}
                    className="mt-8 border border-[#1E2A44] px-6 py-3 rounded-full hover:bg-[#1E2A44] hover:text-white transition"
                  >
                    + إضافة تعليم آخر
                  </button>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="text-3xl font-bold mb-3">الخبرة العملية</h3>
                  <div className="space-y-8">
                    {Array.from({ length: experienceCount }).map((_, index) => (
                      <div key={index} className="bg-[#F7F4EE] border border-[#E5DED3] rounded-[28px] p-6">
                        <h4 className="text-xl font-bold mb-6">خبرة {index + 1}</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <Field label="المنظمة" placeholder="اسم المنظمة" />
                          <Field label="المسمى الوظيفي / الدور" placeholder="المسمى" />
                          <Field label="البلد" placeholder="البلد" />
                          <Field label="نوع العمل" placeholder="دوام كامل، تطوع، تدريب..." />
                          <Field label="تاريخ البدء" placeholder="الشهر / السنة" />
                          <Field label="تاريخ الانتهاء" placeholder="الشهر / السنة أو حتى الآن" />
                          <TextArea label="المسؤوليات الرئيسية" placeholder="صف بإيجاز مسؤولياتك الرئيسية" />
                          <TextArea label="أبرز الإنجازات" placeholder="صف بإيجاز إنجازاتك ذات الصلة" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setExperienceCount((prev) => prev + 1)}
                    className="mt-8 border border-[#1E2A44] px-6 py-3 rounded-full hover:bg-[#1E2A44] hover:text-white transition"
                  >
                    + إضافة خبرة أخرى
                  </button>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h3 className="text-3xl font-bold mb-8">خطاب الدافع</h3>
                  <TextArea label="لماذا ترغب/ين في هذا الدور؟" placeholder="أخبرنا لماذا ترغب/ين في التطوع مع أزاه وكيف يمكن لمهاراتك دعم هذا الدور." />
                  <TextArea label="المهارات ذات الصلة" placeholder="اذكر/ي أقوى مهاراتك لهذا الدور." />
                  <TextArea label="التوفر" placeholder="أخبرنا عن توافرك الأسبوعي وساعات العمل المفضلة." />
                </div>
              )}

              {step === 5 && (
                <div>
                  <h3 className="text-3xl font-bold mb-8">بيانات المرجع</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="الاسم الكامل للمرجع" placeholder="الاسم" />
                    <Field label="منصب المرجع" placeholder="المسمى الوظيفي" />
                    <Field label="بريد المرجع الإلكتروني" placeholder="البريد الإلكتروني" />
                    <Field label="رقم هاتف المرجع" placeholder="الهاتف" />
                    <Field label="المنظمة" placeholder="المنظمة" />
                    <Field label="العلاقة بمقدم الطلب" placeholder="مشرف، أستاذ، زميل..." />
                  </div>

                  <div className="mt-10 bg-[#F7F4EE] border border-[#E5DED3] rounded-[24px] p-6 text-[#4A5565] leading-8">
                    بتقديم هذا الطلب، تؤكد/ين أن المعلومات المقدمة صحيحة، وأن مؤسسة أزاه الخيرية يمكنها التواصل معك بشأن فرصة التطوع هذه.
                  </div>
                </div>
              )}

              <div className="flex justify-between gap-4 mt-12 pt-8 border-t border-[#E5DED3]">
                <button type="button" onClick={prevStep} disabled={step === 1} className="px-7 py-4 rounded-full border border-[#1E2A44] disabled:opacity-30 hover:bg-[#1E2A44] hover:text-white transition">
                  رجوع
                </button>

                {step < 5 ? (
                  <button type="button" onClick={nextStep} className="px-8 py-4 rounded-full bg-[#1E2A44] text-white hover:bg-[#556F2B] transition">
                    حفظ ومتابعة
                  </button>
                ) : (
                  <button type="submit" disabled={isSubmitting} className="px-8 py-4 rounded-full bg-[#556F2B] text-white hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? "جارٍ الإرسال..." : "إرسال الطلب"}
                  </button>
                )}
              </div>

              {submitStatus === "success" && (
                <div className="mt-6 rounded-2xl border border-[#556F2B] bg-[#F7F4EE] px-5 py-4 text-[#556F2B] font-semibold">
                  تم إرسال طلبك بنجاح. شكرًا لتقديمك إلى مؤسسة أزاه الخيرية.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-6 rounded-2xl border border-red-300 bg-red-50 px-5 py-4 text-red-700 font-semibold">
                  تعذر إرسال طلبك. يرجى المحاولة مرة أخرى.
                </div>
              )}
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
      <input name={label} type={label.includes("البريد") ? "email" : "text"} placeholder={placeholder} className="w-full bg-[#F7F4EE] border border-[#E5DED3] rounded-2xl px-5 py-4 outline-none focus:border-[#556F2B] transition text-right" />
    </div>
  );
}

function TextArea({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="md:col-span-2 mb-6">
      <label className="block text-sm font-semibold mb-3">{label}</label>
      <textarea name={label} rows={5} placeholder={placeholder} className="w-full bg-[#F7F4EE] border border-[#E5DED3] rounded-2xl px-5 py-4 outline-none focus:border-[#556F2B] transition resize-none text-right" />
    </div>
  );
}
