import { Knowledge } from '@/types/knowledge';

export const KNOWLEDGE_DATA: Knowledge[] = [
  // Frontend
  {
    id: 'frontend',
    title: 'Frontend',
    isRoot: true,
    tags: ['frontend'],
    proficiencyScore: 8,
    markdownFile: 'frontend.md',
    content:
      '6 years of experience with various products and frontend libraries.',
  },

  // Frontend - Frameworks / Libraries
  {
    id: 'frameworks-libraries',
    title: 'Frameworks / Libraries',
    isRoot: false,
    related: 'frontend',
    tags: ['frameworks-libraries'],
    proficiencyScore: 8,
    content:
      'Confident in picking up new frameworks and libraries. Versatile and adaptable to different stacks.',
  },

  // Frontend - Frameworks / Libraries - Angular
  {
    id: 'angular',
    title: 'Angular',
    isRoot: false,
    related: 'frameworks-libraries',
    tags: ['frontend', 'framework'],
    proficiencyScore: 8,
    content:
      'Architected the core Rewards Dashboard from greenfield, scaling the platform to serve over 1 million multi-tenant users.',
  },

  // Frontend - Frameworks / Libraries - AngularJS
  {
    id: 'angularjs',
    title: 'AngularJS',
    isRoot: false,
    related: 'frameworks-libraries',
    tags: ['frontend', 'framework', 'legacy'],
    proficiencyScore: 5,
    content:
      'Maintained and refactored monolithic controllers into smaller components, preparing legacy systems for eventual migration.',
  },

  // Frontend - Frameworks / Libraries - React
  {
    id: 'react',
    title: 'React',
    isRoot: false,
    related: 'frameworks-libraries',
    tags: ['frontend', 'framework', 'mobile'],
    proficiencyScore: 6,
    content:
      'Core contributor to the VersaFleet logistics dashboard. Built complex forms and geospatial mapping.',
  },

  // Frontend - Frameworks / Libraries - React Native
  {
    id: 'react-native',
    title: 'React Native',
    isRoot: false,
    related: 'frameworks-libraries',
    tags: ['frontend', 'framework', 'mobile'],
    proficiencyScore: 5,
    content:
      'Core contributor to the Driver Mobile App. Implemented state management logic and  digital E-Signature.',
  },

  // Frontend - Frameworks / Libraries - VueJS
  {
    id: 'vuejs',
    title: 'VueJS',
    isRoot: false,
    related: 'frameworks-libraries',
    tags: ['frontend', 'framework'],
    proficiencyScore: 2,
    content:
      'Conceptual familiarity with the framework. Fixed bugs on a small standalone redemption page in Ascenda.',
  },

  // Frontend - State Management
  {
    id: 'state-management',
    title: 'State Management',
    isRoot: false,
    related: 'frontend',
    tags: ['state-management'],
    proficiencyScore: 7,
    content:
      'Experienced with various state management solutions. Migrated from Reflux to Redux at VersaFleet. Used NgRx for Rewards Dashboard in Ascenda.',
  },

  // Frontend - State Management - Reflux
  {
    id: 'reflux',
    title: 'Reflux',
    isRoot: false,
    related: 'state-management',
    tags: ['frontend', 'state-management'],
    proficiencyScore: 3,
    content:
      'Maintained legacy state management stores before successfully planning and executing the strategic migration to Redux.',
  },

  // Frontend - State Management - NgRx
  {
    id: 'ngrx',
    title: 'NgRx',
    isRoot: false,
    related: 'state-management',
    tags: ['frontend', 'state-management', 'angular'],
    proficiencyScore: 7,
    content:
      'Consumed and utilized advanced state management patterns such as side effects and reducers within Angular architecture.',
  },

  // Frontend - State Management - Redux
  {
    id: 'redux',
    title: 'Redux',
    isRoot: false,
    related: 'state-management',
    tags: ['frontend', 'state-management'],
    proficiencyScore: 6,
    content:
      'Established the store patterns at VersaFleet after finishing the strategic migration from Reflux.',
  },

  // Frontend - State Management - Zustand
  {
    id: 'zustand',
    title: 'Zustand',
    isRoot: false,
    related: 'state-management',
    tags: ['frontend', 'state-management', 'react'],
    proficiencyScore: 2,
    content: 'Experimented with its minimalist API for personal projects.',
  },

  // Frontend - Typescript
  {
    id: 'typescript',
    title: 'Typescript',
    isRoot: false,
    related: 'frontend',
    tags: ['typescript'],
    proficiencyScore: 6,
    content:
      'Enforced strict, scalable type definitions across a large Angular application (Rewards Dashboard) in Ascenda.',
  },

  // Frontend - Typescript - Generics
  {
    id: 'typescript-generics',
    title: 'Generics',
    isRoot: false,
    related: 'typescript',
    tags: ['frontend', 'typescript'],
    proficiencyScore: 4,
    content: 'Used generics in Angular, prominently in NgRx effects.',
  },

  // Frontend - Typescript - Utility Types
  {
    id: 'typescript-utility-types',
    title: 'Utility Types',
    isRoot: false,
    related: 'typescript',
    tags: ['frontend', 'typescript'],
    proficiencyScore: 5,
    content:
      'Used Partials the most, particularly in NgRx stores and presentational components.',
  },

  // Frontend - Typescript - Type Guards
  {
    id: 'typescript-type-guards',
    title: 'Type Guards',
    isRoot: false,
    related: 'typescript',
    tags: ['frontend', 'typescript'],
    proficiencyScore: 6,
    content:
      'Used in whitelabelling logic to dynamically render components. Also used a lot in utility functions to make validations stricter.',
  },

  // Frontend - Styling
  {
    id: 'styling',
    title: 'Styling',
    isRoot: false,
    related: 'frontend',
    tags: ['styling'],
    proficiencyScore: 6,
    content:
      'Used vanilla CSS with naming conventions like BEM, CSS pre-processors (SASS), framework mechanisms (e.g. Angular ViewEncapsulation). Currently learning Tailwind.',
  },

  // Frontend - Styling - Tailwind CSS
  {
    id: 'tailwind-css',
    title: 'Tailwind CSS',
    isRoot: false,
    related: 'styling',
    tags: ['frontend', 'styling', 'css'],
    proficiencyScore: 3,
    content:
      'Used in this portfolio site, and finding it pleasant to use. Looks to be a scalable solution provided some enforcements in place.',
  },

  // Frontend - Styling - CSS-in-JS
  {
    id: 'css-in-js',
    title: 'CSS-in-JS',
    isRoot: false,
    related: 'styling',
    tags: ['frontend', 'styling'],
    proficiencyScore: 3,
    content:
      'Conceptual familiarity with the concept. Never used in personal experiments or production.',
  },

  // Frontend - Styling - CSS Preprocessors
  {
    id: 'css-preprocessors',
    title: 'CSS Preprocessors',
    isRoot: false,
    related: 'styling',
    tags: ['frontend', 'styling', 'css'],
    proficiencyScore: 6,
    content:
      'Used Stylus in Versafleet (logistics dashboard), SASS / SCSS in Ascenda (kaligo.com, Rewards Dashboard).',
  },

  // Frontend - Build Tools
  {
    id: 'build-tools',
    title: 'Build Tools',
    isRoot: false,
    related: 'frontend',
    tags: ['build-tools'],
    proficiencyScore: 5,
    content:
      'Operational familarity and experience with various build tools. Able to pick up and modify to requirements as needed.',
  },

  // Frontend - Build Tools - Vite
  {
    id: 'vite',
    title: 'Vite',
    isRoot: false,
    related: 'build-tools',
    tags: ['frontend', 'build-tools'],
    proficiencyScore: 3,
    content:
      'Used in this portfolio site. Finding it extensible; I can imagine it being scalable due to its simplicity.',
  },

  // Frontend - Build Tools - Webpack
  {
    id: 'webpack',
    title: 'Webpack',
    isRoot: false,
    related: 'build-tools',
    tags: ['frontend', 'build-tools'],
    proficiencyScore: 4,
    content:
      'Used in Versafleet (SPA) and Ascenda (Rails with Webpacker, monolithic).',
  },

  // Frontend - Build Tools - Babel
  {
    id: 'babel',
    title: 'Babel',
    isRoot: false,
    related: 'build-tools',
    tags: ['frontend', 'build-tools'],
    proficiencyScore: 4,
    content:
      'Configured custom babel preset in 2015 on Versafleet to transpile its corporate site.',
  },

  // Frontend - Internationalization - i18n
  {
    id: 'internationalization-i18n',
    title: 'Internationalization - i18n',
    isRoot: false,
    related: 'frontend',
    tags: ['frontend', 'i18n', 'accessibility'],
    proficiencyScore: 7,
    content:
      'i18n was a theme across my entire career. Every project had some form of i18n, from locales / translations, language detection, date/time formatting, to RTL support.',
  },

  // Frontend - Internationalization - i18n - RTL (Right-to-Left)
  {
    id: 'rtl-right-to-left',
    title: 'RTL (Right-to-Left)',
    isRoot: false,
    related: 'internationalization-i18n',
    tags: ['frontend', 'i18n', 'rtl', 'accessibility'],
    proficiencyScore: 7,
    content:
      'Implemented RTL support in Ascenda, in kaligo.com and Rewards Dashboard. Used a mix of RTL-specific CSS properties and CSS logical properties.',
  },

  // Frontend - Accessibility - a11y
  {
    id: 'accessibility-a11y',
    title: 'Accessibility - a11y',
    isRoot: false,
    related: 'frontend',
    tags: ['accessibility-a11y'],
    proficiencyScore: 6,
    content:
      'Enforced aria attributes, keyboard navigation support, and semantic HTML in Ascenda. Mostly used Lighthouse and WAVE to test.',
  },

  // Frontend - Accessibility - a11y - aria attributes
  {
    id: 'aria-attributes',
    title: 'aria attributes',
    isRoot: false,
    related: 'accessibility-a11y',
    tags: ['frontend', 'accessibility', 'a11y'],
    proficiencyScore: 5,
    content:
      'Used aria attributes sparingly in Ascenda, the principle was to never overspecify attributes.',
  },

  // Frontend - Accessibility - a11y - keyboard navigation
  {
    id: 'keyboard-navigation',
    title: 'keyboard navigation',
    isRoot: false,
    related: 'accessibility-a11y',
    tags: ['frontend', 'accessibility', 'a11y'],
    proficiencyScore: 6,
    content:
      'Enforced full keyboard navigation support in Ascenda (Rewards Dashboard). Supported on every component including date pickers, dropdowns, modals, etc.',
  },

  // Frontend - Accessibility - a11y - voiceover
  {
    id: 'voiceover',
    title: 'voiceover',
    isRoot: false,
    related: 'accessibility-a11y',
    tags: ['frontend', 'accessibility', 'a11y'],
    proficiencyScore: 3,
    content:
      'Comes in with aria attributes usage, but voiceover support was never a theme across my career.',
  },

  // Frontend - Accessibility - a11y - semantic HTML
  {
    id: 'semantic-html',
    title: 'semantic HTML',
    isRoot: false,
    related: 'accessibility-a11y',
    tags: ['frontend', 'accessibility', 'a11y', 'html'],
    proficiencyScore: 6,
    content:
      'Used semantic HTML whenever possible across my career. One of the quickest wins for a11y.',
  },

  // Frontend - Frontend Testing
  {
    id: 'frontend-testing',
    title: 'Frontend Testing',
    isRoot: false,
    related: 'frontend',
    tags: ['frontend-testing'],
    proficiencyScore: 6,
    content:
      'Dealt with unit and integration tests. Jest was the main framework used in Angular projects in Ascenda.',
  },

  // Frontend - Frontend Testing - Jest
  {
    id: 'jest',
    title: 'Jest',
    isRoot: false,
    related: 'frontend-testing',
    tags: ['frontend', 'testing'],
    proficiencyScore: 6,
    content:
      'Wrote unit and integration tests in Angular project in Ascenda (Rewards Dashboard). Wired the setup and set the conventions for the team.',
  },

  // Frontend - Frontend Testing - Jasmine
  {
    id: 'jasmine',
    title: 'Jasmine',
    isRoot: false,
    related: 'frontend-testing',
    tags: ['frontend', 'testing'],
    proficiencyScore: 4,
    content:
      'Jasmine was used in the legacy AngularJS project in Ascenda (kaligo.com). Had to maintain and write unit tests for newly refactored components.',
  },

  // Frontend - Frontend Testing - Playwright
  {
    id: 'playwright',
    title: 'Playwright',
    isRoot: false,
    related: 'frontend-testing',
    tags: ['frontend', 'testing', 'e2e'],
    proficiencyScore: 2,
    content:
      'Familiar with the tool. Was introduced in Ascenda when I transitioend to backend, never had the chance to write E2E tests with Playwright.',
  },

  // Frontend - Web Performance
  {
    id: 'web-performance',
    title: 'Web Performance',
    isRoot: false,
    related: 'frontend',
    tags: ['frontend', 'optimization', 'performance'],
    proficiencyScore: 6,
    content:
      'Old browser support was a theme across my career in Ascenda. Had to support IE8 in the legacy AngularJS project (kaligo.com), and IE11 in the Angular project (Rewards Dashboard)',
  },

  // Frontend - Web Performance - Code splitting
  {
    id: 'code-splitting',
    title: 'Code splitting',
    isRoot: false,
    related: 'web-performance',
    tags: ['frontend', 'optimization', 'performance'],
    proficiencyScore: 6,
    content:
      'Implemented code splitting whilst navigating the complexities of shared libraries and multiple tenant builds.',
  },

  // Frontend - Web Performance - Lazy loading
  {
    id: 'lazy-loading',
    title: 'Lazy loading',
    isRoot: false,
    related: 'web-performance',
    tags: ['frontend', 'optimization', 'performance'],
    proficiencyScore: 6,
    content:
      'Implemented lazy loading of whitelabel-specific components in Angular project inAscenda (Rewards Dashboard). Lazy loaded the niche components in pages that were rarely used.',
  },

  // Backend
  {
    id: 'backend',
    title: 'Backend',
    isRoot: true,
    markdownFile: 'backend.md',
    tags: ['backend'],
    proficiencyScore: 6,
    content:
      '3+ years of production experience with Ruby on Rails on a microservices architecture, with multitenancy as the main challenge and the focal point.',
  },

  // Backend - Languages / Runtimes
  {
    id: 'languages-runtimes',
    title: 'Languages / Runtimes',
    isRoot: false,
    related: 'backend',
    tags: ['languages-runtimes'],
    proficiencyScore: 4,
    content:
      'Used Ruby on Rails professionally. Learned Python on the side to solve DSA problems.',
  },

  // Backend - Languages / Runtimes - Ruby
  {
    id: 'ruby',
    title: 'Ruby',
    isRoot: false,
    related: 'languages-runtimes',
    tags: ['backend', 'language'],
    proficiencyScore: 6,
  },

  // Backend - Languages / Runtimes - Ruby
  {
    id: 'ruby-on-rails',
    title: 'Ruby on Rails',
    isRoot: false,
    related: 'languages-runtimes',
    tags: ['backend', 'language'],
    proficiencyScore: 6,
    content:
      'Able to write production code in Ruby on Rails. Experienced with Ruby language features.',
  },

  // Backend - Languages / Runtimes - Python
  {
    id: 'python',
    title: 'Python',
    isRoot: false,
    related: 'languages-runtimes',
    tags: ['backend', 'language'],
    proficiencyScore: 5,
  },

  // Backend - Microservices
  {
    id: 'microservices',
    title: 'Microservices',
    isRoot: false,
    related: 'backend',
    tags: ['backend', 'architecture'],
    proficiencyScore: 5,
    content:
      'Wrote API layer that coordinated calls to several downstream services, and ensured the logic can handle different multi-tenant configurations.',
  },

  // Backend - Frameworks / Libraries (Ruby) - Sidekiq
  {
    id: 'sidekiq',
    title: 'Sidekiq',
    isRoot: false,
    related: 'frameworks-libraries-ruby',
    tags: ['backend', 'ruby', 'background-jobs'],
    proficiencyScore: 5,
    content:
      'Refactored a batch job to be idempotent and retryable. Wrote scheduled background jobs to handle data synchronizations from downstream services.',
  },

  // Backend - Frameworks / Libraries (Ruby) - ActionCable
  {
    id: 'actioncable',
    title: 'ActionCable',
    isRoot: false,
    related: 'frameworks-libraries-ruby',
    tags: ['backend', 'ruby', 'rails', 'websocket'],
    proficiencyScore: 2,
    content:
      'Familiar that it is used for 2-way client-server communication , but never used in production.',
  },

  // Backend - Frameworks / Libraries (Ruby) - Dry::Validation
  {
    id: 'dry-validation',
    title: 'Dry::Validation',
    isRoot: false,
    related: 'frameworks-libraries-ruby',
    tags: ['backend', 'ruby', 'validation'],
    proficiencyScore: 5,
    content:
      'Extensively used in custom schema validation logic to support differing data formats between bank partners.',
  },

  // Backend - Frameworks / Libraries (Ruby) - MJML - Liquid
  {
    id: 'mjml-liquid',
    title: 'MJML - Liquid',
    isRoot: false,
    related: 'frameworks-libraries-ruby',
    tags: ['backend', 'email', 'templates'],
    proficiencyScore: 5,
    content:
      'Used MJML as the primary engine in Ascenda to send email notifications with custom layouts and content across multiple tenants.',
  },

  // Backend - Messaging / Event Streaming
  {
    id: 'messaging-event-streaming',
    title: 'Messaging / Event Streaming',
    isRoot: false,
    related: 'backend',
    tags: ['messaging-event-streaming'],
    proficiencyScore: 4,
    content:
      'Used Kafka as the messaging system in Ascenda to handle event-driven communication between microservices.',
  },

  // Backend - Messaging / Event Streaming - Kafka
  {
    id: 'kafka',
    title: 'Kafka',
    isRoot: false,
    related: 'messaging-event-streaming',
    tags: ['backend', 'messaging', 'event-streaming'],
    proficiencyScore: 4,
    content:
      'Wrote several consumers and producers for small-scale data synchronizations in between other microservices.',
  },

  // Backend - API Design
  {
    id: 'api-design',
    title: 'API Design',
    isRoot: false,
    related: 'backend',
    tags: ['backend', 'api', 'openapi'],
    proficiencyScore: 5,
  },

  // Backend - API Design - OpenAPI
  {
    id: 'openapi',
    title: 'OpenAPI',
    isRoot: false,
    related: 'api-design',
    tags: ['backend', 'api', 'documentation'],
    proficiencyScore: 4,
    content:
      'Documented several public-facing Partner APIs using OpenAPI, focusing on API design best practices and external integration requirements.',
  },

  // Backend - API Design - REST
  {
    id: 'rest',
    title: 'REST',
    isRoot: false,
    related: 'api-design',
    tags: ['backend', 'api'],
    proficiencyScore: 6,
  },

  // Backend - API Design - GraphQL
  {
    id: 'graphql',
    title: 'GraphQL',
    isRoot: false,
    related: 'api-design',
    tags: ['backend', 'api'],
    proficiencyScore: 2,
  },

  // Backend - API Design - gRPC
  {
    id: 'grpc',
    title: 'gRPC',
    isRoot: false,
    related: 'api-design',
    tags: ['backend', 'api'],
    proficiencyScore: 2,
  },

  // Backend - Backend Testing
  {
    id: 'backend-testing',
    title: 'Backend Testing',
    isRoot: false,
    related: 'backend',
    tags: ['backend-testing'],
    proficiencyScore: 6,
    content:
      'Able to utilize existing tools and languages to write tests. Delved into load test with Galing, integration tests with Rspec, and API test suite management with Postman.',
  },

  // Backend - Backend Testing - RSpec
  {
    id: 'rspec',
    title: 'RSpec',
    isRoot: false,
    related: 'backend-testing',
    tags: ['backend', 'testing', 'ruby'],
    proficiencyScore: 6,
    content:
      'Wrote integration tests that covered edge cases for a large-scale batch job, effectively introducing idempotency and fault-tolerance to said job. Wrote RSpec tests as part of day-to-day work shipping features.',
  },

  // Backend - Backend Testing - Postman
  {
    id: 'postman',
    title: 'Postman',
    isRoot: false,
    related: 'backend-testing',
    tags: ['backend', 'testing', 'api'],
    proficiencyScore: 5,
    content:
      'Able to setup environments, write basic scripts for API testing, and manage collections.',
  },

  // Backend - Backend Testing - FactoryBot
  {
    id: 'factorybot',
    title: 'FactoryBot',
    isRoot: false,
    related: 'backend-testing',
    tags: ['backend', 'testing', 'ruby'],
    proficiencyScore: 6,
  },

  // Backend - Backend Testing - Gatling
  {
    id: 'gatling',
    title: 'Gatling',
    isRoot: false,
    related: 'backend-testing',
    tags: ['backend', 'testing', 'performance'],
    proficiencyScore: 3,
  },

  // Devops
  {
    id: 'devops',
    title: 'DevOps',
    isRoot: true,
    tags: ['devops'],
    proficiencyScore: 5,
    content:
      "Set up the team's first automated deployment pipeline using Grunt scripts and managed CI/CD processes for core applications.",
  },

  // Devops - Infrastructure as Code (IaC)
  {
    id: 'infrastructure-as-code-iac',
    title: 'Infrastructure as Code (IaC)',
    isRoot: false,
    related: 'devops',
    tags: ['infrastructure-as-code-iac'],
    proficiencyScore: 4,
  },

  // Devops - Infrastructure as Code (IaC) - Terraform
  {
    id: 'terraform',
    title: 'Terraform',
    isRoot: false,
    related: 'infrastructure-as-code-iac',
    tags: ['devops', 'iac'],
    proficiencyScore: 4,
    content:
      'Safely consumed and maintained existing configuration for AWS infrastructure, executing controlled changes (e.g., Sidekiq resource scaling).',
  },

  // Devops - Containerization
  {
    id: 'containerization',
    title: 'Containerization',
    isRoot: false,
    related: 'devops',
    tags: ['containerization'],
    proficiencyScore: 4,
    content:
      'Understood the usage of docker containers and was able to debug issues if there are issues blocking deployment.',
  },

  // Devops - Containerization - Docker
  {
    id: 'docker',
    title: 'Docker',
    isRoot: false,
    related: 'containerization',
    tags: ['devops', 'containerization'],
    proficiencyScore: 3,
  },

  // Devops - Containerization - Docker - Docker Compose
  {
    id: 'docker-compose',
    title: 'Docker Compose',
    isRoot: false,
    related: 'docker',
    tags: ['devops', 'containerization', 'docker'],
    proficiencyScore: 3,
  },

  // Devops - Containerization - Kubernetes (k8s)
  {
    id: 'kubernetes-k8s',
    title: 'Kubernetes (k8s)',
    isRoot: false,
    related: 'containerization',
    tags: ['devops', 'orchestration'],
    proficiencyScore: 3,
    content: 'Used kubernetes operationally to ssh into pods and debug issues.',
  },

  // Devops - Cloud
  {
    id: 'cloud',
    title: 'Cloud',
    isRoot: false,
    related: 'devops',
    tags: ['cloud'],
    proficiencyScore: 2,
  },

  // Devops - Cloud - AWS
  {
    id: 'aws',
    title: 'AWS',
    isRoot: false,
    related: 'cloud',
    tags: ['devops', 'cloud'],
    proficiencyScore: 2,
    content:
      'I have not had the chance to manage infrastructure in production yet, but I do have some basic understand of the blocks that make up the AWS stack.',
  },

  // Devops - Cloud - AWS - EC2
  {
    id: 'ec2',
    title: 'EC2',
    isRoot: false,
    related: 'aws',
    tags: ['devops', 'cloud', 'aws'],
    proficiencyScore: 2,
    content:
      'I understand the purpose of security groups (for network traffic isolation) and auto-scaling groups to handle surging traffic, along with load balancers.',
  },

  // Devops - Cloud - AWS - S3
  {
    id: 's3',
    title: 'S3',
    isRoot: false,
    related: 'aws',
    tags: ['devops', 'cloud', 'aws'],
    proficiencyScore: 3,
    content:
      'Used S3 to manage image assets and static files. Aware of lifecycle rules and bucket policies.',
  },

  // Devops - Cloud - AWS - RDS
  {
    id: 'rds',
    title: 'RDS',
    isRoot: false,
    related: 'aws',
    tags: ['devops', 'cloud', 'aws', 'database'],
    proficiencyScore: 2,
  },

  // Devops - Cloud - AWS - IAM
  {
    id: 'iam',
    title: 'IAM',
    isRoot: false,
    related: 'aws',
    tags: ['devops', 'cloud', 'aws', 'security'],
    proficiencyScore: 2,
  },

  // Devops - Cloud - AWS - VPC
  {
    id: 'vpc',
    title: 'VPC',
    isRoot: false,
    related: 'aws',
    tags: ['devops', 'cloud', 'aws', 'networking'],
    proficiencyScore: 2,
  },

  // Devops - CI/CD
  {
    id: 'ci-cd',
    title: 'CI/CD',
    isRoot: false,
    related: 'devops',
    tags: ['ci-cd'],
    proficiencyScore: 4,
  },

  // Devops - CI/CD - Github Actions
  {
    id: 'github-actions',
    title: 'Github Actions',
    isRoot: false,
    related: 'ci-cd',
    tags: ['devops', 'ci-cd'],
    proficiencyScore: 4,
  },

  // Devops - CI/CD - Jenkins
  {
    id: 'jenkins',
    title: 'Jenkins',
    isRoot: false,
    related: 'ci-cd',
    tags: ['devops', 'ci-cd'],
    proficiencyScore: 3,
    content:
      'Jenkins was used in Ascenda for the deployment pipeline. I did not write the pipelines from scratch, but am able to debug issues and fix as needed.',
  },

  // Devops - CI/CD - CircleCI
  {
    id: 'circleci',
    title: 'CircleCI',
    isRoot: false,
    related: 'ci-cd',
    tags: ['devops', 'ci-cd'],
    proficiencyScore: 4,
    content:
      'Wrote the initial pipline for Rewards Dashboard (Ascenda) in CircleCI. It was a basic pipeline that could build and deploy for multiple tenants.',
  },

  // Tooling
  {
    id: 'tooling',
    title: 'Tooling',
    isRoot: true,
    tags: ['tooling'],
    proficiencyScore: 6,
  },

  // Tooling - Version Control
  {
    id: 'version-control',
    title: 'Version Control',
    isRoot: false,
    related: 'tooling',
    tags: ['version-control'],
    proficiencyScore: 6,
  },

  // Tooling - Version Control - Git
  {
    id: 'git',
    title: 'Git',
    isRoot: false,
    related: 'version-control',
    tags: ['tooling', 'version-control'],
    proficiencyScore: 7,
    content:
      'Used Git in all day-to-day tasks. Dealt with issues such as urgent rollbacks, cherry-picking, branching, and the sort.',
  },

  // Tooling - Observability
  {
    id: 'observability',
    title: 'Observability',
    isRoot: false,
    related: 'tooling',
    tags: ['tooling', 'monitoring'],
    proficiencyScore: 5,
  },

  // Tooling - Observability - Grafana
  {
    id: 'grafana',
    title: 'Grafana',
    isRoot: false,
    related: 'observability',
    tags: ['tooling', 'observability', 'monitoring'],
    proficiencyScore: 5,
    content:
      'Created custom panels and setup alerts to monitor errors mostly. Vital in large-scale batch jobs where no errors are absolutely allowed, and I had to make sure the jobs were running on pace to meet SLA.',
  },

  // Tooling - Observability - Appsignal
  {
    id: 'appsignal',
    title: 'Appsignal',
    isRoot: false,
    related: 'observability',
    tags: ['tooling', 'observability', 'monitoring'],
    proficiencyScore: 5,
    content:
      'Used AppSignal to monitor traffic, error occurrences. AppSignal was vital to day-to-day operations in Ascenda during my stint as a backend engineer.',
  },

  // Tooling - Observability - Rollbar
  {
    id: 'rollbar',
    title: 'Rollbar',
    isRoot: false,
    related: 'observability',
    tags: ['tooling', 'observability', 'monitoring'],
    proficiencyScore: 5,
    content:
      'Used Rollbar and setup source map to debug production issues in Ascenda (Rewards Dashboard).',
  },

  // Tooling - Observability - Datadog
  {
    id: 'datadog',
    title: 'Datadog',
    isRoot: false,
    related: 'observability',
    tags: ['tooling', 'observability', 'monitoring'],
    proficiencyScore: 2,
  },

  // Tooling - Observability - Prometheus
  {
    id: 'prometheus',
    title: 'Prometheus',
    isRoot: false,
    related: 'observability',
    tags: ['tooling', 'observability', 'monitoring'],
    proficiencyScore: 2,
  },
  // Tooling - Content (Headless CMS)
  {
    id: 'content-headless-cms',
    title: 'Content (Headless CMS)',
    isRoot: false,
    related: 'tooling',
    tags: ['content-headless-cms'],
    proficiencyScore: 5,
  },

  // Tooling - Content (Headless CMS) - PhraseApp
  {
    id: 'phraseapp',
    title: 'PhraseApp',
    isRoot: false,
    related: 'content-headless-cms',
    tags: ['tooling', 'i18n', 'cms'],
    markdownFile: 'phraseapp.md',
    proficiencyScore: 6,
    content:
      'Wrote a script to automate the process of syncing translations, and setup dev workflow in Rewards Dashboard to deal with translations.',
  },

  // Tooling - Content (Headless CMS) - Prismic
  {
    id: 'prismic',
    title: 'Prismic',
    isRoot: false,
    related: 'content-headless-cms',
    tags: ['tooling', 'cms'],
    proficiencyScore: 4,
    content:
      'Used Prismic to manage markdown content for different clients, with the content being managed by the product team or the client.',
  },

  // Tooling - Testing (Cross-Browser)
  {
    id: 'testing-cross-browser',
    title: 'Testing (Cross-Browser)',
    isRoot: false,
    related: 'tooling',
    tags: ['testing-cross-browser'],
    proficiencyScore: 6,
  },

  // Tooling - Testing (Cross-Browser) - Browserstack
  {
    id: 'browserstack',
    title: 'Browserstack',
    isRoot: false,
    related: 'testing-cross-browser',
    tags: ['tooling', 'testing'],
    proficiencyScore: 6,
    content:
      'Used Browserstack extensively to test for IE compatibility in Ascenda, on legacy and greenfield projects.',
  },

  // Tooling - Third-Party APIs / Services
  {
    id: 'third-party-apis-services',
    title: 'Third-Party APIs / Services',
    isRoot: false,
    related: 'tooling',
    tags: ['third-party-apis-services'],
    proficiencyScore: 5,
    content:
      'Proficient in picking up third-party APIs and services, and getting them to setup and work, no matter the application and complexity.',
  },

  // Tooling - Third-Party APIs / Services - Geospatial
  {
    id: 'geospatial',
    title: 'Geospatial',
    isRoot: false,
    related: 'third-party-apis-services',
    tags: ['tooling', 'api', 'maps'],
    proficiencyScore: 5,
  },

  // Tooling - Third-Party APIs / Services - Geospatial - Google Maps
  {
    id: 'google-maps',
    title: 'Google Maps',
    isRoot: false,
    related: 'geospatial',
    tags: ['tooling', 'api', 'maps', 'geospatial'],
    proficiencyScore: 5,
    content:
      'Able to render custom components on maps. Able to maintain component lifecycle and state and wire it to different interactions such as zooming, panning, and clicking. Used to render logistics site, assigned tasks, driver locations.',
  },

  // Tooling - Third-Party APIs / Services - Geospatial - Mapbox
  {
    id: 'mapbox',
    title: 'Mapbox',
    isRoot: false,
    related: 'geospatial',
    tags: ['tooling', 'api', 'maps', 'geospatial'],
    proficiencyScore: 5,
    content:
      'Able to render custom components on maps, such as hotel and car locations. Able to maintain component lifecycle and state and wire it to different interactions such as zooming, panning, and clicking.',
  },

  // Tooling - Third-Party APIs / Services - Payment
  {
    id: 'payment',
    title: 'Payment',
    isRoot: false,
    related: 'third-party-apis-services',
    tags: ['payment'],
    proficiencyScore: 4,
  },

  // Tooling - Third-Party APIs / Services - Payment - Stripe
  {
    id: 'stripe',
    title: 'Stripe',
    isRoot: false,
    related: 'payment',
    tags: ['tooling', 'api', 'payment'],
    proficiencyScore: 4,
  },

  // Tooling - Third-Party APIs / Services - Communication
  {
    id: 'communication',
    title: 'Communication',
    isRoot: false,
    related: 'third-party-apis-services',
    tags: ['communication'],
    proficiencyScore: 4,
  },

  // Tooling - Third-Party APIs / Services - Communication - Twilio
  {
    id: 'twilio',
    title: 'Twilio',
    isRoot: false,
    related: 'communication',
    tags: ['tooling', 'api', 'communication'],
    proficiencyScore: 4,
  },

  // Tooling - Third-Party APIs / Services - Communication - Mailgun
  {
    id: 'mailgun',
    title: 'Mailgun',
    isRoot: false,
    related: 'communication',
    tags: ['tooling', 'api', 'communication', 'email'],
    proficiencyScore: 4,
  },

  // Tooling - AI
  {
    id: 'ai',
    title: 'AI',
    isRoot: false,
    related: 'tooling',
    tags: ['ai'],
    proficiencyScore: 5,
  },

  // Tooling - AI - Cursor
  {
    id: 'cursor',
    title: 'Cursor',
    isRoot: false,
    related: 'ai',
    tags: ['tooling', 'ai', 'ide'],
    proficiencyScore: 4,
    content:
      "In Ascenda, used Cursor to cut down typing time in writing features and tests, understand foreign codebases quicker. Learning to utilize and fine tune agent rules to increaes prompt speed and its results' accuracy.",
  },

  // Tooling - AI - Gemini
  {
    id: 'gemini',
    title: 'Gemini',
    isRoot: false,
    related: 'ai',
    tags: ['tooling', 'ai'],
    proficiencyScore: 4,
    content:
      "Used in tandem with Cursor. Gemini is very useful to generate high level understanding and ideas. It can also be used to double check against Cursor's suggestions. Found it the best to use both tools in parallel to eliminate biases.",
  },

  // Concepts
  {
    id: 'concepts',
    title: 'Concepts',
    isRoot: true,
    tags: ['concepts'],
    proficiencyScore: 6,
  },

  // Concepts - General Principles
  {
    id: 'general-principles',
    title: 'General Principles',
    isRoot: false,
    related: 'concepts',
    tags: ['general-principles'],
    proficiencyScore: 1,
  },

  // Concepts - General Principles - Idempotency
  {
    id: 'idempotency',
    title: 'Idempotency',
    isRoot: false,
    related: 'general-principles',
    tags: ['concept', 'principle'],
    proficiencyScore: 8,
  },

  // Concepts - General Principles - SOLID
  {
    id: 'solid',
    title: 'SOLID',
    isRoot: false,
    related: 'general-principles',
    tags: ['concept', 'principle'],
    proficiencyScore: 8,
  },

  // Concepts - General Principles - DRY
  {
    id: 'dry',
    title: 'DRY',
    isRoot: false,
    related: 'general-principles',
    tags: ['concept', 'principle'],
    proficiencyScore: 5,
  },

  // Concepts - General Principles - Multitenancy
  {
    id: 'multitenancy',
    title: 'Multitenancy',
    isRoot: false,
    related: 'general-principles',
    tags: ['concept', 'architecture', 'saas'],
    markdownFile: 'multitenancy.md',
    proficiencyScore: 7,
  },

  // Concepts - Authentication / Authorization Integration
  {
    id: 'authentication-authorization-integration',
    title: 'Authentication / Authorization Integration',
    isRoot: false,
    related: 'concepts',
    markdownFile: 'authentication-authorization-integration.md',
    tags: ['authentication-authorization-integration'],
    proficiencyScore: 5,
    content:
      'Integrated centralized Identity Providers into applications using internal SDKs.',
  },

  // Concepts - Authentication / Authorization - OAuth2
  {
    id: 'oauth2',
    title: 'OAuth2',
    isRoot: false,
    related: 'authentication-authorization',
    tags: ['concepts', 'authentication', 'authorization'],
    proficiencyScore: 4,
  },

  // Concepts - Authentication / Authorization - JWT
  {
    id: 'jwt',
    title: 'JWT',
    isRoot: false,
    related: 'authentication-authorization',
    tags: ['concepts', 'authentication', 'authorization'],
    proficiencyScore: 4,
  },

  // Concepts - Authentication / Authorization - Single Sign-On
  {
    id: 'single-sign-on',
    title: 'Single Sign-On',
    isRoot: false,
    related: 'authentication-authorization',
    tags: ['concepts', 'authentication', 'authorization', 'sso'],
    proficiencyScore: 4,
  },

  // Concepts - Design Patterns
  {
    id: 'design-patterns',
    title: 'Design Patterns',
    isRoot: false,
    related: 'concepts',
    tags: ['design-patterns'],
    proficiencyScore: 2,
  },

  // Concepts - Design Patterns - Chain of Responsibility
  {
    id: 'chain-of-responsibility',
    title: 'Chain of Responsibility',
    isRoot: false,
    related: 'design-patterns',
    tags: ['concept', 'design-pattern'],
    proficiencyScore: 5,
  },

  // Concepts - Design Patterns - Adapter
  {
    id: 'adapter',
    title: 'Adapter',
    isRoot: false,
    related: 'design-patterns',
    tags: ['concept', 'design-pattern'],
    proficiencyScore: 5,
    content:
      'Used a lot on integration layers for example, to abstract away API contracts for different providers, or to abstract the implementation details of a third-party library or service.',
  },

  // Concepts - Design Patterns - Singleton
  {
    id: 'singleton',
    title: 'Singleton',
    isRoot: false,
    related: 'design-patterns',
    tags: ['concept', 'design-pattern'],
    proficiencyScore: 6,
  },

  // Concepts - Design Patterns - Factory
  {
    id: 'factory',
    title: 'Factory',
    isRoot: false,
    related: 'design-patterns',
    tags: ['concept', 'design-pattern'],
    proficiencyScore: 6,
  },

  // Concepts - Design Patterns - Observer
  {
    id: 'observer',
    title: 'Observer',
    isRoot: false,
    related: 'design-patterns',
    tags: ['concept', 'design-pattern'],
    proficiencyScore: 5,
    content:
      'An example would be the notification system in the orchestration layer. An observer registers for this event, emitting notifications such as success or failure e-mails.',
  },

  // Database
  {
    id: 'database',
    title: 'Database',
    isRoot: false,
    related: 'backend',
    tags: ['database'],
    proficiencyScore: 6,
    content:
      'Used PostgreSQL, Redis in production. Able to navigate the schema, debug production issues, create indexes, new schemas, and the sort.',
  },

  // Database - Relational
  {
    id: 'relational',
    title: 'Relational',
    isRoot: false,
    related: 'database',
    tags: ['database', 'relational', 'postgresql', 'sql'],
    proficiencyScore: 6,
  },

  // Database - Relational - PostgreSQL
  {
    id: 'postgresql',
    title: 'PostgreSQL',
    isRoot: false,
    related: 'database',
    tags: ['backend', 'database', 'sql'],
    proficiencyScore: 6,
    content:
      'Able to navigate the schema, debug production issues, create indexes, new schemas.',
  },

  // Database - Relational - Indexing
  {
    id: 'indexing',
    title: 'Indexing',
    isRoot: false,
    related: 'relational',
    tags: ['database', 'sql', 'relational', 'optimization'],
    proficiencyScore: 5,
  },

  // Database - Relational - Locking
  {
    id: 'locking',
    title: 'Locking',
    isRoot: false,
    related: 'relational',
    tags: ['database', 'sql', 'relational'],
    proficiencyScore: 9,
  },

  // Database - Relational - Transactions (ACID)
  {
    id: 'transactions-acid',
    title: 'Transactions (ACID)',
    isRoot: false,
    related: 'relational',
    tags: ['database', 'sql', 'relational'],
    proficiencyScore: 5,
  },

  // Database - Relational - Sharding
  {
    id: 'sharding',
    title: 'Sharding',
    isRoot: false,
    related: 'relational',
    tags: ['database', 'sql', 'relational', 'scaling'],
    proficiencyScore: 2,
  },

  // Database - In-Memory
  {
    id: 'in-memory',
    title: 'In-Memory',
    isRoot: false,
    related: 'database',
    tags: ['in-memory'],
    proficiencyScore: 4,
  },

  // Database - In-Memory - Redis
  {
    id: 'redis',
    title: 'Redis',
    isRoot: false,
    related: 'in-memory',
    tags: ['database', 'nosql', 'caching', 'queues'],
    proficiencyScore: 4,
  },

  // Database - In-Memory - Cache Keys
  {
    id: 'cache-keys',
    title: 'Cache Keys',
    isRoot: false,
    related: 'in-memory',
    tags: ['database', 'caching'],
    proficiencyScore: 4,
  },

  // Database - NoSQL
  {
    id: 'nosql',
    title: 'NoSQL',
    isRoot: false,
    related: 'database',
    tags: ['database'],
    proficiencyScore: 2,
  },

  // Database - NoSQL - MongoDB
  {
    id: 'mongodb',
    title: 'MongoDB',
    isRoot: false,
    related: 'nosql',
    tags: ['database', 'nosql'],
    proficiencyScore: 2,
  },

  // Database - NoSQL - DynamoDB
  {
    id: 'dynamodb',
    title: 'DynamoDB',
    isRoot: false,
    related: 'nosql',
    tags: ['database', 'nosql', 'aws'],
    proficiencyScore: 2,
  },
];

/**
 * Get a knowledge item by its ID
 *
 * @param id - The unique identifier of the knowledge
 * @returns The knowledge item if found, undefined otherwise
 */
export function getKnowledgeById(id: string): Knowledge | undefined {
  return KNOWLEDGE_DATA.find((knowledge) => knowledge.id === id);
}

/**
 * Get the related knowledge item for a given knowledge ID
 *
 * @param id - The unique identifier of the knowledge
 * @returns The related knowledge item if found, undefined otherwise
 */
export function getRelatedKnowledge(id: string): Knowledge | undefined {
  const knowledge = getKnowledgeById(id);
  if (!knowledge || !knowledge.related) return undefined;

  return getKnowledgeById(knowledge.related);
}

/**
 * Get all related knowledge items for a given knowledge ID (legacy function)
 * @deprecated Use getRelatedKnowledge instead. Returns array with single item or empty array.
 */
export function getRelatedKnowledges(id: string): Knowledge[] {
  const related = getRelatedKnowledge(id);
  return related ? [related] : [];
}

/**
 * Get all knowledge items filtered by tag
 *
 * @param tag - The tag to filter by
 * @returns Array of knowledge items with the specified tag
 */
export function getKnowledgesByTag(tag: string): Knowledge[] {
  return KNOWLEDGE_DATA.filter(
    (knowledge) => knowledge.tags && knowledge.tags.includes(tag)
  );
}

// Export alias for backward compatibility
export const knowledges = KNOWLEDGE_DATA;

// Legacy exports for backward compatibility during migration
export const knowledgeNodes = KNOWLEDGE_DATA;
export const getNodeById = getKnowledgeById;
export const getRelatedNodes = getRelatedKnowledges;
export const getNodesByTag = getKnowledgesByTag;
