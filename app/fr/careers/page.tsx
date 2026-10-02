"use client";



import { useMemo, useState } from "react";

import type { FormEvent } from "react";



type Role = {

  title: string;

  department: string;

  summary: string;

  slug: string;

  tags: string[];

};



const roles: Role[] = [

  { title: "Assistant(e) de la direction des opérations / cofondatrice", department: "Direction exécutive", summary: "Appuyer la coordination de la direction, la gestion des agendas, les suivis, la recherche, la documentation et la planification opérationnelle.", slug: "assistant-to-coo-cofounder", tags: ["leadership", "admin", "coordination"] },

  { title: "Bénévole – appui au cabinet de direction", department: "Direction exécutive", summary: "Contribuer à la coordination interne, aux priorités de la direction, à la communication entre équipes et au suivi stratégique.", slug: "chief-of-staff-support-volunteer", tags: ["leadership", "coordination", "strategy"] },

  { title: "Bénévole – planification stratégique", department: "Direction exécutive", summary: "Appuyer l’élaboration de la stratégie, la planification des projets, les feuilles de route organisationnelles et la priorisation des programmes.", slug: "strategic-planning-volunteer", tags: ["strategy", "planning", "leadership"] },

  { title: "Bénévole – appui au conseil d’administration et à la gouvernance", department: "Gouvernance", summary: "Contribuer aux documents de gouvernance, aux dossiers du conseil, à la préparation des réunions et à la conformité institutionnelle.", slug: "board-governance-support-volunteer", tags: ["governance", "admin", "compliance"] },

  { title: "Coordinateur(trice) de programmes", department: "Programmes", summary: "Appuyer la planification des programmes, les calendriers, le suivi des activités, la coordination et le suivi de la mise en œuvre.", slug: "programme-coordinator", tags: ["programmes", "coordination", "planning"] },

  { title: "Assistant(e) de projet", department: "Programmes", summary: "Appuyer les équipes de programme dans la documentation, le suivi des tâches, la recherche et la mise en œuvre.", slug: "project-assistant", tags: ["programmes", "admin", "coordination"] },

  { title: "Assistant(e) administratif(ve)", department: "Administration", summary: "Appuyer le classement, la gestion des agendas, les dossiers, la correspondance, la mise en forme des documents et l’administration générale.", slug: "administrative-assistant", tags: ["admin", "coordination"] },

  { title: "Coordinateur(trice) des agendas et réunions", department: "Administration", summary: "Coordonner les réunions, préparer les ordres du jour, consigner les actions à mener, suivre la participation et assurer les suivis.", slug: "scheduling-meetings-coordinator", tags: ["admin", "coordination"] },

  { title: "Bénévole – élaboration de politiques et procédures opérationnelles", department: "Administration", summary: "Contribuer à la rédaction de politiques internes, de procédures opérationnelles standard, de modèles et de directives administratives.", slug: "policy-sop-development-volunteer", tags: ["policy", "admin", "governance"] },

  { title: "Coordinateur(trice) RH et bénévoles", department: "Ressources humaines et culture", summary: "Appuyer le recrutement et l’intégration des bénévoles, les entretiens, l’affectation aux rôles et le suivi de leur engagement.", slug: "hr-volunteer-coordinator", tags: ["people", "admin", "coordination"] },

  { title: "Bénévole – recrutement et recherche de talents", department: "Ressources humaines et culture", summary: "Identifier des bénévoles potentiels et appuyer les campagnes de recrutement, la présélection et la communication avec les candidats.", slug: "recruitment-talent-outreach-volunteer", tags: ["people", "communications", "outreach"] },

  { title: "Bénévole – bien-être des équipes et culture organisationnelle", department: "Ressources humaines et culture", summary: "Soutenir le bien-être des équipes, l’engagement des bénévoles, la culture organisationnelle et les mécanismes de retour d’information.", slug: "staff-wellbeing-culture-volunteer", tags: ["people", "wellbeing", "support"] },

  { title: "Bénévole – suivi, évaluation et rapports", department: "Suivi et évaluation", summary: "Appuyer les outils de collecte de données, le suivi des progrès, les synthèses d’impact et les cadres de rapports.", slug: "monitoring-evaluation-reporting-volunteer", tags: ["data", "research", "reporting"] },

  { title: "Assistant(e) de recherche", department: "Recherche et données", summary: "Mener des recherches documentaires, des analyses de politiques et du contexte humanitaire, et préparer des synthèses factuelles.", slug: "research-assistant", tags: ["research", "data", "policy"] },

  { title: "Bénévole – analyse de données", department: "Recherche et données", summary: "Appuyer le nettoyage des données, les tableaux de bord, les évaluations des besoins, les données sur les bénéficiaires et les synthèses analytiques.", slug: "data-analyst-volunteer", tags: ["data", "technical", "research"] },

  { title: "Bénévole – SIG et cartographie", department: "Recherche et données", summary: "Contribuer à la cartographie des zones vulnérables, des points de service, des besoins communautaires et des sites opérationnels.", slug: "gis-mapping-volunteer", tags: ["data", "technical", "mapping"] },

  { title: "Bénévole – conception d’enquêtes", department: "Recherche et données", summary: "Contribuer à la conception d’enquêtes, de formulaires de retour d’information, d’outils d’évaluation des besoins et de modèles de collecte de données.", slug: "survey-design-volunteer", tags: ["research", "data", "design"] },

  { title: "Assistant(e) financier(ère)", department: "Finance et conformité", summary: "Appuyer le suivi budgétaire, la documentation financière, les justificatifs, les tableaux de suivi et les dossiers financiers.", slug: "finance-assistant", tags: ["finance", "admin", "compliance"] },

  { title: "Bénévole – suivi budgétaire", department: "Finance et conformité", summary: "Contribuer au suivi des budgets, au chiffrage des projets, aux registres de dépenses et aux synthèses financières.", slug: "budget-tracking-volunteer", tags: ["finance", "data", "compliance"] },

  { title: "Bénévole – appui aux achats", department: "Finance et conformité", summary: "Appuyer les dossiers d’achats, les listes de fournisseurs, le suivi des acquisitions et la documentation.", slug: "procurement-support-volunteer", tags: ["finance", "operations", "admin"] },

  { title: "Bénévole – conformité et documentation", department: "Finance et conformité", summary: "Contribuer aux dossiers de conformité, à la documentation des donateurs, à la préparation des audits et au contrôle documentaire.", slug: "compliance-documentation-volunteer", tags: ["compliance", "admin", "finance"] },

  { title: "Bénévole – rapports financiers destinés aux donateurs", department: "Finance et conformité", summary: "Appuyer le rapports financiers destinés aux donateurs, les notes budgétaires, les explications de dépenses et la mise en forme des rapports.", slug: "donor-financial-reporting-volunteer", tags: ["finance", "reporting", "fundraising"] },

  { title: "Bénévole – chargé(e) des partenariats", department: "Partenariats", summary: "Appuyer la cartographie des partenaires, la prise de contact institutionnelle, le suivi des relations et les notes de collaboration.", slug: "partnerships-officer-volunteer", tags: ["partnerships", "outreach", "coordination"] },

  { title: "Bénévole – relations avec les donateurs", department: "Partenariats", summary: "Contribuer à la communication avec les donateurs, aux bases de données, aux notes de réunion et au suivi des échanges.", slug: "donor-relations-volunteer", tags: ["partnerships", "fundraising", "communications"] },

  { title: "Bénévole – liaison avec les ambassades et partenaires internationaux", department: "Partenariats", summary: "Appuyer les relations avec les ambassades, les organisations internationales, les missions diplomatiques et les partenaires.", slug: "embassy-international-liaison-volunteer", tags: ["partnerships", "diplomacy", "outreach"] },

  { title: "Bénévole – coordination ONU / ONG", department: "Partenariats", summary: "Contribuer à la cartographie de la coordination, à la recherche sur les clusters humanitaires, aux contacts ONG et au suivi des partenariats.", slug: "un-ngo-coordination-volunteer", tags: ["partnerships", "coordination", "research"] },

  { title: "Bénévole – mobilisation des ressources", department: "Mobilisation de fonds", summary: "Appuyer la stratégie de mobilisation de fonds, la recherche de donateurs, les calendriers de financement et la cartographie des opportunités.", slug: "resource-mobilization-volunteer", tags: ["fundraising", "research", "strategy"] },

  { title: "Bénévole – rédaction de demandes de financement et propositions", department: "Mobilisation de fonds", summary: "Contribuer aux notes conceptuelles, aux propositions de financement, à la rédaction adaptée aux donateurs, aux narratifs budgétaires et à la mise en forme des propositions.", slug: "grant-writing-proposal-support-volunteer", tags: ["fundraising", "writing", "strategy"] },

  { title: "Développeur(se) web front-end", department: "Informatique et numérique", summary: "Appuyer le développement du site web, l’amélioration de l’interface utilisateur, l’adaptation responsive et la mise à jour des pages.", slug: "frontend-web-developer", tags: ["technical", "web", "design"] },

  { title: "Développeur(se) back-end", department: "Informatique et numérique", summary: "Appuyer les futures bases de données, les formulaires de candidature, les systèmes sécurisés de soumission et les flux back-end.", slug: "backend-developer", tags: ["technical", "web", "data"] },

  { title: "Designer UX/UI", department: "Informatique et numérique", summary: "Améliorer l’expérience utilisateur du site, les parcours de candidature, l’accessibilité et la cohérence visuelle.", slug: "ux-ui-designer", tags: ["design", "technical", "web"] },

  { title: "Bénévole – assistance informatique", department: "Informatique et numérique", summary: "Contribuer au dépannage numérique, à la configuration des e-mails, au support des appareils et à l’accompagnement sur les systèmes internes.", slug: "it-support-volunteer", tags: ["technical", "support"] },

  { title: "Responsable CRM / bases de données", department: "Informatique et numérique", summary: "Gérer et structurer les bases de données relatives aux donateurs, bénévoles, bénéficiaires et partenaires.", slug: "crm-database-manager", tags: ["technical", "data", "admin"] },

  { title: "Bénévole – cybersécurité", department: "Informatique et numérique", summary: "Appuyer la sensibilisation à la cybersécurité, la protection des données, la sécurisation des systèmes et les contrôles de risques de base.", slug: "cybersecurity-volunteer", tags: ["technical", "compliance"] },

  { title: "Bénévole – systèmes d’IA et automatisation", department: "Informatique et numérique", summary: "Contribuer à la conception de processus assistés par l’IA, d’outils d’automatisation, de systèmes de gestion des bénévoles et de processus internes.", slug: "ai-systems-automation-volunteer", tags: ["technical", "ai", "systems"] },

  { title: "Coordinateur(trice) des formulaires et candidatures numériques", department: "Informatique et numérique", summary: "Créer et maintenir des formulaires en ligne pour les bénévoles, les candidatures, les partenariats et l’admission aux programmes.", slug: "digital-forms-applications-coordinator", tags: ["technical", "forms", "systems"] },

  { title: "Responsable des systèmes Notion / Airtable", department: "Informatique et numérique", summary: "Créer des tableaux de bord internes, des outils de suivi des tâches, des bases de données de bénévoles et des systèmes de gestion de projets.", slug: "notion-airtable-systems-manager", tags: ["technical", "systems", "admin"] },

  { title: "Responsable des réseaux sociaux", department: "Communication", summary: "Appuyer les calendriers éditoriaux, la stratégie des plateformes, la rédaction des publications, l’engagement du public et la programmation.", slug: "social-media-manager", tags: ["communications", "creative", "social"] },

  { title: "Rédacteur(trice) de contenu", department: "Communication", summary: "Rédiger des contenus pour le site web, des récits de projets, des lettres d’information, des légendes et des supports de communication.", slug: "content-writer", tags: ["communications", "writing", "creative"] },

  { title: "Bénévole – récits et communication humanitaires", department: "Communication", summary: "Transformer les informations du terrain, les activités des projets et les récits humains en communications respectueuses de la dignité.", slug: "humanitarian-storytelling-volunteer", tags: ["communications", "writing", "creative"] },

  { title: "Photographe / vidéaste", department: "Communication", summary: "Appuyer la documentation visuelle, les événements, les médias de projets, les archives photographiques et les supports narratifs.", slug: "photographer-videographer", tags: ["communications", "creative", "media"] },

  { title: "Bénévole – documentaire et médias de terrain", department: "Communication", summary: "Contribuer à la documentation approfondie du terrain, aux entretiens, aux récits visuels et à l’organisation des médias.", slug: "documentary-field-media-volunteer", tags: ["communications", "media", "creative"] },

  { title: "Traducteur(trice) arabe-anglais", department: "Communication", summary: "Traduire et réviser des contenus entre l’arabe et l’anglais pour les rapports, publications, propositions et notes.", slug: "arabic-english-translator", tags: ["communications", "writing", "language"] },

  { title: "Bénévole – design graphique et identité visuelle", department: "Communication", summary: "Créer des visuels pour les réseaux sociaux, des rapports, des présentations, des modèles de marque et des supports de communication visuelle.", slug: "graphic-design-branding-volunteer", tags: ["communications", "design", "creative"] },

  { title: "Designer de présentations", department: "Communication", summary: "Concevoir des présentations professionnelles, des supports destinés aux donateurs, des diapositives de programmes et des synthèses visuelles.", slug: "presentation-designer", tags: ["communications", "design", "creative"] },

  { title: "Bénévole – presse et relations médias", department: "Communication", summary: "Appuyer les relations presse, les listes de médias, les notes d’information, la couverture d’événements et le suivi de la communication.", slug: "press-media-relations-volunteer", tags: ["communications", "media", "outreach"] },

  { title: "Bénévole – protection et gestion de cas", department: "Protection", summary: "Appuyer les programmes sensibles aux enjeux de protection, la cartographie des orientations, les outils de gestion de cas et les parcours sécurisés.", slug: "protection-case-management-volunteer", tags: ["protection", "support", "field"] },

  { title: "Bénévole – protection et prévention des abus", department: "Protection", summary: "Contribuer aux politiques de sauvegarde, à l’atténuation des risques, aux outils de confidentialité et aux orientations en matière de protection.", slug: "safeguarding-protection-support-volunteer", tags: ["protection", "compliance", "support"] },

  { title: "Bénévole – protection de l’enfance", department: "Protection", summary: "Appuyer les programmes adaptés aux enfants, les orientations vers l’éducation, les espaces sûrs et les activités de protection.", slug: "child-protection-volunteer", tags: ["protection", "children", "support"] },

  { title: "Bénévole – appui aux orientations juridiques", department: "Protection", summary: "Contribuer à identifier les mécanismes d’orientation juridique, les informations fondées sur les droits et les ressources de protection.", slug: "legal-referral-support-volunteer", tags: ["protection", "legal", "support"] },

  { title: "Bénévole – santé publique", department: "Santé", summary: "Appuyer la planification en santé publique, la sensibilisation communautaire, les actions de proximité et l’éducation sanitaire de base.", slug: "public-health-volunteer", tags: ["health", "community", "support"] },

  { title: "Bénévole – services de santé", department: "Santé", summary: "Appuyer la planification des programmes de santé, la cartographie des orientations, les activités médicales de proximité et la coordination des services.", slug: "health-services-volunteer", tags: ["health", "programmes", "coordination"] },

  { title: "Bénévole – appui à la santé reproductive", department: "Santé", summary: "Appuyer la santé maternelle, la sensibilisation à la santé reproductive, les mécanismes d’orientation et les soins centrés sur la dignité.", slug: "reproductive-health-support-volunteer", tags: ["health", "women", "support"] },

  { title: "Bénévole – eau, assainissement et hygiène (WASH)", department: "WASH", summary: "Appuyer l’accès à l’eau potable, l’assainissement, les kits d’hygiène, la sensibilisation et les activités de prévention des maladies.", slug: "wash-volunteer", tags: ["wash", "health", "field"] },

  { title: "Bénévole – nutrition", department: "Sécurité alimentaire et nutrition", summary: "Appuyer la sensibilisation à la nutrition, le ciblage des ménages vulnérables, l’aide alimentaire et les activités nutritionnelles.", slug: "nutrition-volunteer", tags: ["food", "nutrition", "health"] },

  { title: "Bénévole – intervention d’urgence", department: "Intervention d’urgence", summary: "Appuyer la planification des interventions rapides, l’aide aux personnes déplacées, les fournitures d’urgence et la coordination urgente.", slug: "emergency-response-volunteer", tags: ["emergency", "field", "operations"] },

  { title: "Bénévole – inclusion des personnes en situation de handicap", department: "Inclusion", summary: "Appuyer les programmes inclusifs du handicap, les contrôles d’accessibilité, les outils inclusifs et le soutien aux bénéficiaires.", slug: "disability-inclusion-volunteer", tags: ["inclusion", "support", "protection"] },

  { title: "Bénévole – soutien aux personnes âgées", department: "Soins aux personnes âgées", summary: "Appuyer les soins aux personnes âgées, l’inclusion sociale, la coordination des besoins essentiels, la dignité et le bien-être.", slug: "elderly-care-support-volunteer", tags: ["elderly", "support", "care"] },

  { title: "Bénévole – soutien au rétablissement en matière d’addictions", department: "Réadaptation", summary: "Appuyer la planification de la réadaptation, les ressources de rétablissement, la réduction de la stigmatisation et les parcours de réintégration.", slug: "substance-abuse-recovery-support-volunteer", tags: ["rehabilitation", "support", "health"] },

  { title: "Bénévole – santé mentale et soutien psychosocial", department: "MHPSS", summary: "Contribuer à la planification du soutien psychosocial, aux ressources tenant compte des traumatismes, aux orientations et aux activités de bien-être.", slug: "mental-health-psychosocial-support-volunteer", tags: ["mental-health", "support", "care"] },

  { title: "Animateur(trice) de groupes de soutien et bien-être", department: "MHPSS", summary: "Appuyer des activités structurées de bien-être, le soutien émotionnel, les activités de groupe et les espaces de discussion sûrs.", slug: "group-therapy-wellness-facilitator", tags: ["mental-health", "wellbeing", "support"] },

  { title: "Bénévole – éducation et alphabétisation", department: "Éducation", summary: "Appuyer l’alphabétisation de base, le rattrapage scolaire, les ressources pédagogiques et les activités d’apprentissage.", slug: "education-literacy-volunteer", tags: ["education", "youth", "support"] },

  { title: "Formateur(trice) en compétences numériques", department: "Éducation", summary: "Enseigner ou appuyer les compétences numériques, l’apprentissage en ligne, l’utilisation de base de l’informatique et l’autonomie numérique.", slug: "digital-literacy-trainer", tags: ["education", "technical", "training"] },

  { title: "Coordinateur(trice) de l’engagement des jeunes", department: "Jeunesse et éducation", summary: "Appuyer la mobilisation des jeunes, les activités dirigées par les jeunes, les programmes de développement du leadership et les plans d’engagement.", slug: "youth-engagement-coordinator", tags: ["youth", "education", "community"] },

  { title: "Bénévole – appui aux bourses d’études", department: "Jeunesse et éducation", summary: "Appuyer la recherche de bourses, l’accompagnement des candidatures, les parcours éducatifs et le soutien aux étudiants.", slug: "scholarship-support-volunteer", tags: ["education", "youth", "research"] },

  { title: "Bénévole – programme de mentorat", department: "Jeunesse et éducation", summary: "Appuyer la mise en relation mentors et mentorés, la coordination des mentors, le développement des jeunes et le suivi de l’apprentissage.", slug: "mentorship-programme-volunteer", tags: ["youth", "education", "support"] },

  { title: "Bénévole – développement professionnel", department: "Jeunesse et éducation", summary: "Aider les bénéficiaires et les jeunes à préparer leurs CV, entretiens, projets professionnels et compétences professionnelles.", slug: "career-development-volunteer", tags: ["youth", "career", "support"] },

  { title: "Formateur(trice) en compétences professionnelles", department: "Moyens de subsistance", summary: "Appuyer l’acquisition de compétences pratiques telles que la couture, l’artisanat, la transformation alimentaire, la petite entreprise et les activités génératrices de revenus.", slug: "vocational-skills-trainer", tags: ["livelihoods", "training", "community"] },

  { title: "Bénévole – agriculture et moyens de subsistance", department: "Moyens de subsistance", summary: "Appuyer la production maraîchère, l’agriculture à petite échelle, les activités génératrices de revenus et le renforcement de la résilience.", slug: "agriculture-livelihoods-volunteer", tags: ["livelihoods", "agriculture", "food"] },

  { title: "Mobilisateur(trice) communautaire", department: "Communauté et opérations de terrain", summary: "Appuyer la sensibilisation, la mobilisation locale, l’engagement des bénéficiaires, les orientations et la participation communautaire.", slug: "community-mobilizer", tags: ["community", "field", "outreach"] },

  { title: "Bénévole – sensibilisation communautaire", department: "Communauté et opérations de terrain", summary: "Appuyer la sensibilisation, la mobilisation communautaire, les actions auprès des bénéficiaires et la communication de terrain.", slug: "community-outreach-volunteer", tags: ["community", "outreach", "field"] },

  { title: "Bénévole – enregistrement des bénéficiaires", department: "Communauté et opérations de terrain", summary: "Contribuer aux formulaires d’inscription, à la saisie des données des bénéficiaires, à l’admission et à la tenue organisée des dossiers.", slug: "beneficiary-registration-volunteer", tags: ["community", "data", "field"] },

  { title: "Bénévole – appui aux distributions", department: "Communauté et opérations de terrain", summary: "Appuyer la distribution de fournitures, de kits, de denrées alimentaires, d’articles d’hygiène et d’aide ménagère essentielle.", slug: "distribution-support-volunteer", tags: ["community", "operations", "field"] },

  { title: "Bénévole – mentorat par les pairs et leadership des survivant(e)s", department: "Communauté et opérations de terrain", summary: "Appuyer le mentorat par les pairs, les initiatives menées par les personnes survivantes, les activités de réintégration et les parcours de leadership.", slug: "peer-mentorship-survivor-leadership-volunteer", tags: ["community", "support", "protection"] },

  { title: "Bénévole – réintégration et suivi", department: "Communauté et opérations de terrain", summary: "Contribuer aux systèmes de suivi, aux parcours vers l’autonomie, à la recherche familiale et au soutien à la réintégration.", slug: "reintegration-follow-up-volunteer", tags: ["community", "support", "field"] },

  { title: "Assistant(e) logistique", department: "Opérations", summary: "Contribuer à la gestion des fournitures, à la coordination des transports, au suivi des stocks, aux plans de déplacement et aux dossiers logistiques.", slug: "logistics-assistant", tags: ["operations", "logistics", "admin"] },

  { title: "Bénévole – appui à l’entrepôt", department: "Opérations", summary: "Appuyer l’organisation du stockage, les inventaires, les mouvements de stock et la documentation de l’entrepôt.", slug: "warehouse-support-volunteer", tags: ["operations", "logistics"] },

  { title: "Bénévole – coordination des chauffeurs", department: "Opérations", summary: "Appuyer la planification des transports, la coordination des chauffeurs, les déplacements et les registres de trajets.", slug: "driver-coordination-volunteer", tags: ["operations", "logistics", "coordination"] },

  { title: "Bénévole – accueil et admission", department: "Opérations", summary: "Appuyer l’accueil confidentiel, les procédures d’admission, la prise de rendez-vous et l’orientation des visiteurs.", slug: "reception-intake-support-volunteer", tags: ["operations", "admin", "support"] },

];



function getRoleActivities(role: Role) {

  const title = role.title.toLowerCase();



  if (title.includes("réseaux sociaux")) return ["Créer des calendriers éditoriaux hebdomadaires.", "Rédiger des légendes et des publications de campagne.", "Suivre l’engagement et les retours de la communauté.", "Coordonner avec les bénévoles chargés du design et des récits."];

  if (title.includes("rédacteur")) return ["Rédiger les contenus du site et des projets.", "Préparer des lettres d’information et des légendes.", "Transformer les mises à jour des programmes en récits structurés.", "Réviser les contenus afin d’assurer clarté, dignité et cohérence."];

  if (title.includes("traducteur")) return ["Traduire des contenus arabe-anglais.", "Vérifier le ton et l’exactitude.", "Appuyer les rapports et publications bilingues.", "Veiller à la cohérence de la terminologie humanitaire."];

  if (title.includes("front-end")) return ["Développer des sections web responsives.", "Améliorer les composants d’interface et la mise en page.", "Corriger les problèmes visuels sur différents appareils.", "Coordonner avec les bénévoles UX/UI et back-end."];

  if (title.includes("back-end")) return ["Appuyer les systèmes sécurisés de soumission de formulaires.", "Planifier la structure des bases de données.", "Créer les flux back-end pour les candidatures.", "Coordonner avec les équipes front-end et formulaires numériques."];

  if (title.includes("financement")) return ["Rédiger des sections de propositions et des notes conceptuelles.", "Appuyer la rédaction destinée aux donateurs et les cadres logiques.", "Préparer des synthèses de projets.", "Contribuer à aligner les propositions sur les priorités des donateurs."];

  if (title.includes("protection")) return ["Appuyer la cartographie des mécanismes d’orientation en matière de protection.", "Préparer des outils centrés sur les personnes survivantes.", "Contribuer à la documentation des parcours sécurisés.", "Respecter les normes de confidentialité et de dignité."];

  if (title.includes("santé")) return ["Appuyer la planification des actions de santé de proximité.", "Cartographier les services d’orientation.", "Préparer des supports de sensibilisation à la santé.", "Coordonner avec les équipes de programme et de terrain."];

  if (title.includes("wash")) return ["Appuyer les activités de sensibilisation à l’hygiène.", "Suivre les besoins en kits WASH.", "Contribuer à la planification de l’accès à l’eau potable et à l’assainissement.", "Préparer des messages de prévention des maladies."];

  if (title.includes("logistique") || title.includes("entrepôt") || title.includes("chauffeur")) return ["Suivre les fournitures et les plans de déplacement.", "Appuyer les registres de transport et de stock.", "Contribuer à la coordination des livraisons.", "Tenir une documentation logistique organisée."];

  if (title.includes("financ") || title.includes("budget")) return ["Suivre les budgets et les registres de dépenses.", "Organiser les justificatifs et dossiers financiers.", "Appuyer les synthèses financières destinées aux donateurs.", "Tenir des tableaux et une documentation financière bien organisés."];



  return [

    `Appuyer les tâches concrètes liées à ${role.department.toLowerCase()} dans le cadre de ce rôle.`,

    "Préparer des outils de suivi, des notes, des synthèses et des documents de travail.",

    "Coordonner avec les membres concernés de l’équipe et assurer le suivi des actions convenues.",

    "Contribuer à une mise en œuvre organisée, responsable et professionnelle.",

  ];

}



function getRoleOutcome(role: Role) {

  return `Ce rôle renforce les capacités d’Azah en matière de ${role.department.toLowerCase()} en améliorant la coordination, la documentation, la qualité des services et le suivi des initiatives humanitaires et de relèvement.`;

}



export default function CareersPage() {

  const departments = ["Tous", "Rôles correspondants", ...Array.from(new Set(roles.map((r) => r.department)))];



  const quizQuestions = [

    {

      question: "Quel type de travail vous correspond le plus naturellement ?",

      options: [

        { label: "Leadership, planification et coordination", tags: ["leadership", "strategy", "coordination"] },

        { label: "Rédaction, médias et narration", tags: ["communications", "writing", "creative"] },

        { label: "Données, systèmes et technologie", tags: ["data", "technical", "systems"] },

        { label: "Soutien direct aux communautés et protection", tags: ["support", "community", "protection"] },

      ],

    },

    {

      question: "Quelle activité aimeriez-vous le plus exercer ?",

      options: [

        { label: "Organiser les équipes et suivre les actions à mener", tags: ["admin", "coordination"] },

        { label: "Concevoir des visuels, publications et présentations", tags: ["design", "creative", "communications"] },

        { label: "Faire de la recherche, analyser et développer des outils", tags: ["research", "data", "technical"] },

        { label: "Soutenir les femmes, les enfants, la santé ou les activités de terrain", tags: ["health", "protection", "field"] },

      ],

    },

    {

      question: "Quelle est votre principale compétence ?",

      options: [

        { label: "Administration et suivi", tags: ["admin", "coordination"] },

        { label: "Communication et langues", tags: ["communications", "language", "writing"] },

        { label: "Systèmes techniques et bases de données", tags: ["technical", "data", "web"] },

        { label: "Empathie, accompagnement et engagement communautaire", tags: ["support", "community", "care"] },

      ],

    },

  ];



  const [selectedDepartment, setSelectedDepartment] = useState("Tous");

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

    const source = selectedDepartment === "Rôles correspondants" ? matchedRoles : roles;



    return source.filter((role) => {

      const matchesDepartment =

        selectedDepartment === "Tous" ||

        selectedDepartment === "Rôles correspondants" ||

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

          Carrières et bénévolat

        </p>



        <h1 className="text-5xl md:text-7xl leading-tight font-bold tracking-[-0.04em] max-w-6xl mb-10">

          Rejoignez le réseau de bénévoles d’Azah et contribuez à créer un impact humanitaire concret.

        </h1>



        <p className="text-xl leading-9 text-[#4A5565] max-w-5xl">

          Découvrez des possibilités de bénévolat dans la direction, les programmes, la protection, la santé,

          la communication, les systèmes numériques, les opérations, les partenariats et le relèvement.

        </p>

      </section>



      <section className="max-w-7xl mx-auto px-8 pb-20">

        <div className="bg-[#1E2A44] text-white rounded-[40px] p-10 md:p-14">

          <p className="uppercase tracking-[0.3em] text-sm text-[#D4BE8A] mb-6">

            Questionnaire d’orientation

          </p>



          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">

            Vous ne savez pas quel rôle vous correspond ? Découvrez les postes les plus adaptés à votre profil.

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

                  <p className="font-bold text-xl mb-2">Les rôles qui vous correspondent le mieux</p>

                  <p className="text-[#4A5565]">

                    D’après vos réponses, ces rôles pourraient correspondre à vos compétences.

                  </p>

                </div>



                <button

                  onClick={() => setSelectedDepartment("Rôles correspondants")}

                  className="bg-[#1E2A44] text-white px-6 py-3 rounded-full hover:bg-[#556F2B] transition"

                >

                  Voir les rôles correspondants

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

              Postes de bénévolat

            </p>



            <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.04em]">

              Découvrez comment vous pouvez contribuer.

            </h2>

          </div>



          <input

            value={search}

            onChange={(e) => setSearch(e.target.value)}

            placeholder="Rechercher un rôle..."

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

                  Ouvert

                </span>

                <span className="bg-[#F7F4EE] border border-[#E5DED3] text-[#B89B5E] px-4 py-2 rounded-full text-sm">

                  À distance

                </span>

                <span className="bg-[#F7F4EE] border border-[#E5DED3] text-[#556F2B] px-4 py-2 rounded-full text-sm">

                  90 jours

                </span>

                <span className="bg-[#F7F4EE] border border-[#E5DED3] px-4 py-2 rounded-full text-sm">

                  Bénévolat

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

                Voir les détails du rôle et postuler

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

  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");



  const updateField = (name: string, value: string) => {

    setFormValues((prev) => ({ ...prev, [name]: value }));

  };



  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    setIsSubmitting(true);

    setSubmitStatus("idle");



    const payload = new FormData();

    payload.append("role", role.title);



    Object.entries(formValues).forEach(([name, value]) => {

      payload.append(name, value);

    });



    try {

      const response = await fetch("https://formspree.io/f/xppwkzjk", {

        method: "POST",

        body: payload,

        headers: {

          Accept: "application/json",

        },

      });



      if (!response.ok) {

        throw new Error("Submission failed");

      }



      setSubmitStatus("success");

    } catch {

      setSubmitStatus("error");

    } finally {

      setIsSubmitting(false);

    }

  };



  const activities = getRoleActivities(role);

  const outcome = getRoleOutcome(role);



  return (

    <div className="fixed inset-0 z-50 bg-[#1E2A44]/70 backdrop-blur-sm overflow-y-auto">

      <div className="min-h-screen px-6 py-10 flex items-start justify-center">

        <div className="bg-[#F7F4EE] text-[#1E2A44] rounded-[40px] max-w-5xl w-full border border-[#E5DED3] shadow-2xl overflow-hidden">

          <div className="bg-white border-b border-[#E5DED3] p-8 md:p-10 flex items-start justify-between gap-8">

            <div>

              <p className="uppercase tracking-[0.3em] text-sm text-[#556F2B] mb-4">

                Formulaire de candidature

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

                <h3 className="text-xl font-bold mb-5">Activités du rôle</h3>

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

                <h3 className="text-xl font-bold mb-5">Résultat attendu</h3>

                <p className="text-[#4A5565] leading-8">{outcome}</p>

              </div>

            </div>



            <div className="flex flex-wrap gap-3 mb-10">

              {["Informations personnelles", "Formation", "Expérience professionnelle", "Motivation", "Référence"].map(

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



            <form onSubmit={handleSubmit} className="bg-white rounded-[32px] border border-[#E5DED3] p-8 md:p-10">

              {step === 1 && (

                <div>

                  <h3 className="text-3xl font-bold mb-8">Informations personnelles</h3>

                  <div className="grid md:grid-cols-2 gap-6">

                    <Field name="full_name" label="Nom complet" placeholder="Nom complet" value={formValues.full_name || ""} onChange={updateField} />

                    <Field name="email" label="Adresse e-mail" placeholder="E-mail" value={formValues.email || ""} onChange={updateField} />

                    <Field name="phone" label="Numéro de téléphone" placeholder="Téléphone" value={formValues.phone || ""} onChange={updateField} />

                    <Field name="whatsapp" label="Numéro WhatsApp" placeholder="WhatsApp" value={formValues.whatsapp || ""} onChange={updateField} />

                    <Field name="nationality" label="Nationalité" placeholder="Nationalité" value={formValues.nationality || ""} onChange={updateField} />

                    <Field name="country_of_residence" label="Pays de résidence" placeholder="Pays" value={formValues.country_of_residence || ""} onChange={updateField} />

                    <Field name="city" label="Ville" placeholder="Ville" value={formValues.city || ""} onChange={updateField} />

                    <Field name="linkedin_portfolio" label="LinkedIn / Portfolio" placeholder="Lien facultatif" value={formValues.linkedin_portfolio || ""} onChange={updateField} />

                  </div>

                </div>

              )}



              {step === 2 && (

                <div>

                  <h3 className="text-3xl font-bold mb-3">Formation</h3>

                  <p className="text-[#4A5565] leading-8 mb-8">

                    Ajoutez votre parcours académique. Chaque formation est enregistrée séparément.

                  </p>



                  <div className="space-y-8">

                    {Array.from({ length: educationCount }).map((_, index) => (

                      <div key={index} className="bg-[#F7F4EE] border border-[#E5DED3] rounded-[28px] p-6">

                        <h4 className="text-xl font-bold mb-6">Formation {index + 1}</h4>

                        <div className="grid md:grid-cols-2 gap-6">

                          <Field name={`education_${index + 1}_institution`} label="Université / établissement" placeholder="Nom de l’établissement" value={formValues[`education_${index + 1}_institution`] || ""} onChange={updateField} />

                          <Field name={`education_${index + 1}_degree`} label="Diplôme" placeholder="Intitulé du diplôme" value={formValues[`education_${index + 1}_degree`] || ""} onChange={updateField} />

                          <Field name={`education_${index + 1}_field`} label="Field d’études" placeholder="Field" value={formValues[`education_${index + 1}_field`] || ""} onChange={updateField} />

                          <Field name={`education_${index + 1}_country`} label="Pays" placeholder="Pays" value={formValues[`education_${index + 1}_country`] || ""} onChange={updateField} />

                          <Field name={`education_${index + 1}_start_date`} label="Date de début" placeholder="Mois / année" value={formValues[`education_${index + 1}_start_date`] || ""} onChange={updateField} />

                          <Field name={`education_${index + 1}_end_date`} label="Date de fin" placeholder="Mois / année ou en cours" value={formValues[`education_${index + 1}_end_date`] || ""} onChange={updateField} />

                        </div>

                      </div>

                    ))}

                  </div>



                  <button

                    type="button"

                    onClick={() => setEducationCount((prev) => prev + 1)}

                    className="mt-8 border border-[#1E2A44] px-6 py-3 rounded-full hover:bg-[#1E2A44] hover:text-white transition"

                  >

                    + Ajouter une formation

                  </button>

                </div>

              )}



              {step === 3 && (

                <div>

                  <h3 className="text-3xl font-bold mb-3">Expérience professionnelle</h3>

                  <div className="space-y-8">

                    {Array.from({ length: experienceCount }).map((_, index) => (

                      <div key={index} className="bg-[#F7F4EE] border border-[#E5DED3] rounded-[28px] p-6">

                        <h4 className="text-xl font-bold mb-6">Expérience {index + 1}</h4>

                        <div className="grid md:grid-cols-2 gap-6">

                          <Field name={`experience_${index + 1}_organization`} label="Organisation" placeholder="Nom de l’organisation" value={formValues[`experience_${index + 1}_organization`] || ""} onChange={updateField} />

                          <Field name={`experience_${index + 1}_job_title`} label="Poste / fonction" placeholder="Intitulé du poste" value={formValues[`experience_${index + 1}_job_title`] || ""} onChange={updateField} />

                          <Field name={`experience_${index + 1}_country`} label="Pays" placeholder="Pays" value={formValues[`experience_${index + 1}_country`] || ""} onChange={updateField} />

                          <Field name={`experience_${index + 1}_employment_type`} label="Type d’activité" placeholder="Temps plein, bénévolat, stage..." value={formValues[`experience_${index + 1}_employment_type`] || ""} onChange={updateField} />

                          <Field name={`experience_${index + 1}_start_date`} label="Date de début" placeholder="Mois / année" value={formValues[`experience_${index + 1}_start_date`] || ""} onChange={updateField} />

                          <Field name={`experience_${index + 1}_end_date`} label="Date de fin" placeholder="Mois / année ou en cours" value={formValues[`experience_${index + 1}_end_date`] || ""} onChange={updateField} />

                          <TextArea name={`experience_${index + 1}_responsibilities`} label="Principales responsabilités" placeholder="Décrivez brièvement vos principales responsabilités" value={formValues[`experience_${index + 1}_responsibilities`] || ""} onChange={updateField} />

                          <TextArea name={`experience_${index + 1}_achievements`} label="Principales réalisations" placeholder="Décrivez brièvement vos réalisations pertinentes" value={formValues[`experience_${index + 1}_achievements`] || ""} onChange={updateField} />

                        </div>

                      </div>

                    ))}

                  </div>



                  <button

                    type="button"

                    onClick={() => setExperienceCount((prev) => prev + 1)}

                    className="mt-8 border border-[#1E2A44] px-6 py-3 rounded-full hover:bg-[#1E2A44] hover:text-white transition"

                  >

                    + Ajouter une expérience

                  </button>

                </div>

              )}



              {step === 4 && (

                <div>

                  <h3 className="text-3xl font-bold mb-8">Lettre de motivation</h3>

                  <TextArea name="motivation" label="Pourquoi ce rôle vous intéresse-t-il ?" placeholder="Expliquez-nous pourquoi vous souhaitez faire du bénévolat avec Azah et comment vos compétences peuvent contribuer à ce rôle." value={formValues.motivation || ""} onChange={updateField} />

                  <TextArea name="relevant_skills" label="Compétences pertinentes" placeholder="Indiquez vos principales compétences pour ce poste." value={formValues.relevant_skills || ""} onChange={updateField} />

                  <TextArea name="availability" label="Disponibilités" placeholder="Indiquez vos disponibilités hebdomadaires et vos horaires de préférence." value={formValues.availability || ""} onChange={updateField} />

                </div>

              )}



              {step === 5 && (

                <div>

                  <h3 className="text-3xl font-bold mb-8">Référence Contact</h3>

                  <div className="grid md:grid-cols-2 gap-6">

                    <Field name="reference_full_name" label="Référence Nom complet" placeholder="Nom" value={formValues.reference_full_name || ""} onChange={updateField} />

                    <Field name="reference_title" label="Référence Title" placeholder="Fonction" value={formValues.reference_title || ""} onChange={updateField} />

                    <Field name="reference_email" label="Référence E-mail" placeholder="E-mail" value={formValues.reference_email || ""} onChange={updateField} />

                    <Field name="reference_phone" label="Référence Numéro de téléphone" placeholder="Téléphone" value={formValues.reference_phone || ""} onChange={updateField} />

                    <Field name="reference_organization" label="Organisation" placeholder="Organisation" value={formValues.reference_organization || ""} onChange={updateField} />

                    <Field name="reference_relationship" label="Lien avec le candidat" placeholder="Responsable, professeur, collègue..." value={formValues.reference_relationship || ""} onChange={updateField} />

                  </div>



                  <div className="mt-10 bg-[#F7F4EE] border border-[#E5DED3] rounded-[24px] p-6 text-[#4A5565] leading-8">

                    En soumettant cette candidature, vous confirmez que les informations fournies sont exactes et autorisez Azah Charitable Foundation à vous contacter au sujet de cette opportunité de bénévolat.

                  </div>

                </div>

              )}



              <div className="flex justify-between gap-4 mt-12 pt-8 border-t border-[#E5DED3]">

                <button type="button" onClick={prevStep} disabled={step === 1} className="px-7 py-4 rounded-full border border-[#1E2A44] disabled:opacity-30 hover:bg-[#1E2A44] hover:text-white transition">

                  Retour

                </button>



                {step < 5 ? (

                  <button type="button" onClick={nextStep} className="px-8 py-4 rounded-full bg-[#1E2A44] text-white hover:bg-[#556F2B] transition">

                    Enregistrer et continuer

                  </button>

                ) : (

                  <button type="submit" disabled={isSubmitting} className="px-8 py-4 rounded-full bg-[#556F2B] text-white hover:opacity-90 transition disabled:opacity-50">

                    {isSubmitting ? "Envoi en cours..." : "Soumettre la candidature"}

                  </button>

                )}

              </div>



              {submitStatus === "success" && (

                <p className="mt-6 text-[#556F2B] font-semibold">

                  Votre candidature a été envoyée avec succès. Merci d’avoir postulé auprès d’Azah Charitable Foundation.

                </p>

              )}



              {submitStatus === "error" && (

                <p className="mt-6 text-red-700 font-semibold">

                  Votre candidature n’a pas pu être envoyée. Veuillez réessayer.

                </p>

              )}

            </form>

          </div>

        </div>

      </div>

    </div>

  );

}



function Field({

  name,

  label,

  placeholder,

  value,

  onChange,

}: {

  name: string;

  label: string;

  placeholder: string;

  value: string;

  onChange: (name: string, value: string) => void;

}) {

  return (

    <div>

      <label className="block text-sm font-semibold mb-3">{label}</label>

      <input

        name={name}

        type="text"

        value={value}

        onChange={(e) => onChange(name, e.target.value)}

        placeholder={placeholder}

        className="w-full bg-[#F7F4EE] border border-[#E5DED3] rounded-2xl px-5 py-4 outline-none focus:border-[#556F2B] transition"

      />

    </div>

  );

}



function TextArea({

  name,

  label,

  placeholder,

  value,

  onChange,

}: {

  name: string;

  label: string;

  placeholder: string;

  value: string;

  onChange: (name: string, value: string) => void;

}) {

  return (

    <div className="md:col-span-2 mb-6">

      <label className="block text-sm font-semibold mb-3">{label}</label>

      <textarea

        name={name}

        rows={5}

        value={value}

        onChange={(e) => onChange(name, e.target.value)}

        placeholder={placeholder}

        className="w-full bg-[#F7F4EE] border border-[#E5DED3] rounded-2xl px-5 py-4 outline-none focus:border-[#556F2B] transition resize-none"

      />

    </div>

  );

}
