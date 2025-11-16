
import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';

const projectsData: Project[] = [
    {
        title: "SmartHealth — An AI-powered remote health monitoring platform",
        overview: {
            purpose: "To create a platform that enables continuous, remote health monitoring for patients with chronic conditions, using AI to predict adverse events.",
            problem: "Patients with chronic illnesses require constant monitoring, which is often burdensome for both the patient and healthcare providers. Periodic check-ups can miss critical early warning signs.",
            goal: "Develop a non-invasive system using wearables and an AI engine to provide real-time health insights, alert caregivers to potential issues, and empower patients to manage their health proactively."
        },
        methodology: {
            tech: ["React Native", "Python (FastAPI)", "TensorFlow/Keras", "PostgreSQL (TimescaleDB)", "AWS", "Docker"],
            workflow: ["Collect real-time data from commercial wearable devices (e.g., heart rate, SpO2, activity levels).", "Stream data to a secure cloud backend on AWS.", "Use a time-series ML model (LSTM) to analyze patterns and predict health risks.", "Provide a dashboard for doctors to view patient trends and alerts.", "Develop a mobile app for patients to see their data and receive personalized recommendations."]
        },
        outcomes: {
            achievements: ["Developed a predictive model with 85% accuracy in forecasting hypoglycemic events in diabetic patients.", "Created a secure, scalable backend capable of handling thousands of concurrent data streams.", "Designed an intuitive mobile dashboard for patients and a comprehensive web portal for clinicians."],
            innovations: ["Novel use of federated learning to train models without centralizing sensitive patient data.", "AI-generated plain-language summaries of complex health data for patients.", "Integration with electronic health records (EHR) for seamless clinical workflow."]
        },
        visuals: {
            description: "A collection of UI mockups and architectural diagrams for the SmartHealth platform.",
            items: ["Patient Mobile Dashboard UI", "Clinician Web Portal Screen", "AI Model Architecture Diagram", "Data Flow Diagram", "Wearable Device Integration"]
        },
        challenges: [
            { challenge: "Ensuring HIPAA compliance and data security", solution: "Implemented end-to-end encryption, strict access controls, and conducted regular security audits." },
            { challenge: "Handling noisy and inconsistent data from wearables", solution: "Developed a pre-processing pipeline with data cleaning and imputation algorithms to improve model input quality." },
            { challenge: "Achieving real-time prediction with low latency", solution: "Optimized the ML model for inference and deployed it on scalable serverless infrastructure (AWS Lambda)." }
        ]
    },
    {
        title: "Smart Campus Activity & Attendance Monitoring System (SCAMS)",
        overview: {
            purpose: "To digitalize and automate student attendance, event participation, and campus activity monitoring.",
            problem: "Traditional methods are slow, error-prone, and lack real-time tracking of academic and extracurricular involvement.",
            goal: "Create a centralized, QR-based system with faculty/student dashboards for transparent monitoring and automated analytics."
        },
        methodology: {
            tech: ["HTML/CSS/JS", "Python Flask", "MySQL", "PyQRCode", "Pandas"],
            workflow: ["Generate dynamic QR codes for sessions/events.", "Students scan QR codes via a web app for validation.", "Store attendance and activity data in a central database.", "Provide role-based dashboards for real-time analytics.", "Implement robust security and access control."]
        },
        outcomes: {
            achievements: ["Fully digitalized attendance process.", "Real-time monitoring for faculty and administration.", "Automated generation of analytics and reports.", "Comprehensive tracking of student participation in activities."],
            innovations: ["Expiring QR codes (50-second validity) to prevent proxy.", "Device-based validation and fingerprinting.", "Campus activity heatmaps for resource planning.", "Automated certificate generation for event attendees."]
        },
        visuals: {
            description: "A series of mockups and diagrams illustrating the system's architecture and user interface.",
            items: ["Admin Dashboard Mockup", "QR Scanning UI", "Faculty Panel Screen", "Student Analytics View", "ER Diagram", "System Flowchart"]
        },
        challenges: [
            { challenge: "Preventing proxy attendance", solution: "Implemented expiring QR codes combined with device fingerprinting." },
            { challenge: "Handling high traffic during peak hours", solution: "Used a queue-based processing system and optimized database queries." },
            { challenge: "Real-time analytics performance", solution: "Introduced caching mechanisms and pre-processing of analytical data." },
            { challenge: "Ensuring UI accessibility for all users", solution: "Added a high-contrast mode and an integrated torch button for low-light QR scanning." },
            { challenge: "Data security and privacy", solution: "Secured the system with token-based authentication and encrypted sessions." }
        ]
    },
    {
        title: "AI-Powered Personalized Learning Path Generator",
        overview: {
            purpose: "To provide students with customized learning roadmaps tailored to their career goals and existing knowledge.",
            problem: "Students often struggle to navigate vast online resources and identify the optimal learning path for a specific skill or career.",
            goal: "Develop a web application that uses AI to analyze user inputs and generate a structured, step-by-step learning journey."
        },
        methodology: {
            tech: ["React", "Node.js", "Python (spaCy, scikit-learn)", "PostgreSQL", "Docker"],
            workflow: ["User inputs their career goals and self-assessed skills.", "NLP (spaCy) processes the input to extract key concepts.", "A recommendation engine (scikit-learn) matches goals to a curated knowledge graph of courses and resources.", "The system generates a visual timeline of modules and projects.", "User progress is tracked to dynamically adjust the path."]
        },
        outcomes: {
            achievements: ["Generated over 500 unique learning paths for beta testers.", "Achieved a 90% user satisfaction rate on path relevance.", "Integrated with APIs from Coursera and edX for real-time course data."],
            innovations: ["Dynamic path adjustment based on quiz performance.", "Integration of mentorship connection points within the learning path.", "Gamified progress tracking with badges and skill milestones."]
        },
        visuals: {
            description: "UI/UX mockups and system architecture diagrams that showcase the user journey and backend logic.",
            items: ["Onboarding & Goal Selection UI", "Generated Learning Path Timeline", "Progress Dashboard", "System Architecture Diagram", "Knowledge Graph Visualization"]
        },
        challenges: [
            { challenge: "Maintaining a relevant and up-to-date knowledge graph", solution: "Developed a web scraper to periodically update course information from various platforms." },
            { challenge: "Ensuring the AI recommendations are not biased", solution: "Audited the training data for biases and implemented fairness-aware ML algorithms." },
            { challenge: "Visualizing complex learning paths in an intuitive way", solution: "Designed a collapsible, timeline-based UI with clear dependencies and milestones." }
        ]
    },
    {
        title: "Decentralized Identity Management using Blockchain",
        overview: {
            purpose: "To create a secure, user-controlled digital identity system that eliminates the need for centralized identity providers.",
            problem: "Traditional identity systems are vulnerable to data breaches, and users lack control over their personal information.",
            goal: "Build a prototype for a self-sovereign identity wallet where users can manage and selectively share their credentials."
        },
        methodology: {
            tech: ["Solidity", "Ethereum", "IPFS", "React Native", "Node.js (ethers.js)"],
            workflow: ["Develop smart contracts on Ethereum for identity registration and verification.", "Use IPFS for decentralized storage of encrypted identity claims.", "Build a mobile wallet (React Native) for users to manage their private keys and credentials.", "Institutions issue verifiable credentials to user wallets.", "Users present credentials to service providers for verification without revealing underlying data."]
        },
        outcomes: {
            achievements: ["Successfully deployed a proof-of-concept on an Ethereum testnet.", "Created a functional mobile wallet for creating identities and managing credentials.", "Demonstrated selective disclosure of information (e.g., proving age without revealing birth date)."],
            innovations: ["Gas-efficient smart contracts for lower transaction costs.", "Social recovery mechanism for lost keys, enhancing usability.", "A zero-knowledge proof integration for enhanced privacy."]
        },
        visuals: {
            description: "Diagrams and mockups illustrating the decentralized architecture and mobile application interface.",
            items: ["System Architecture on Blockchain", "Mobile Wallet UI Mockup", "Credential Issuance Flowchart", "Verification Process Diagram"]
        },
        challenges: [
            { challenge: "Blockchain scalability and transaction costs", solution: "Utilized Layer 2 scaling solutions and optimized smart contract logic to reduce gas fees." },
            { challenge: "User experience of managing cryptographic keys", solution: "Designed an intuitive UI with strong onboarding and implemented a social recovery feature." },
            { challenge: "Interoperability with existing non-blockchain systems", solution: "Developed a secure API gateway to bridge traditional systems with the decentralized identity network." }
        ]
    },
];

const Projects: React.FC = () => {
    return (
        <Section
            id="projects"
            title="Interdisciplinary Projects"
            subtitle="A showcase of my hands-on experience in building real-world applications and solving complex problems."
            className="bg-white dark:bg-secondary"
        >
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;