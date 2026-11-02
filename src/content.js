// All site copy lives here, taken from sito-personale-spec.md.
// Blocks: { p: '...' } paragraph, { ul: [...] } bullet list, { ol: [...] } numbered list.
// A list item or paragraph can be { label, text } to render a bold lead-in.

export const profile = {
  name: 'Efrem Tonioni',
  site: 'tonio.work',
  role: 'Software Developer',
  headline:
    'Result-driven professional with many years of multi-faceted experience in the software industry.',
};

export const projects = [
  {
    title: 'Managing Sales Orders with Spring',
    tags: ['Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Spring Security', 'JWT', 'Spring Events'],
    body: [
      { p: 'I developed the backend using Spring Boot, structuring it using a layered architecture.' },
      {
        ul: [
          {
            label: 'Data Model',
            text: 'I defined the entities (Order, OrderItem, Customer, Product) using Spring Data JPA on PostgreSQL, mapping the one-to-many relationships between orders and individual line items.',
          },
          {
            label: 'Business Logic',
            text: 'I implemented an OrderService with @Transactional to validate inventory availability, calculate taxes and totals, and manage the order state machine (Draft, Paid, Shipped, Canceled).',
          },
          {
            label: 'REST API',
            text: 'I exposed endpoints using Spring Web (@RestController) for creating, tracking, and deleting orders.',
          },
          {
            label: 'Security and Events',
            text: 'I secured access with Spring Security (JWT), delegating payment confirmations and email notifications to Spring Events asynchronously.',
          },
        ],
      },
    ],
  },
  {
    title: 'Warehouse Management with Android',
    tags: ['Java', 'MVVM', 'CameraX', 'ML Kit', 'Room', 'Retrofit', 'WorkManager'],
    body: [
      {
        p: 'I developed the application in Java using an MVVM architecture and an offline-first approach for logistics contexts.',
      },
      { p: 'For the architecture, I used the following technical components:' },
      {
        ul: [
          {
            label: 'QR scanning (CameraX + Google ML Kit)',
            text: 'On-device video processing for instant scans even in low-light conditions, with LED flash control.',
          },
          {
            label: 'Data persistence and synchronization',
            text: 'Local Room database (SQLite) for working without connectivity; Retrofit for REST API calls; and WorkManager for queuing and synchronizing data in the background once network connectivity is restored.',
          },
          {
            label: 'Immediate feedback',
            text: 'Distinct audio signals (ToneGenerator) and haptic vibrations to confirm correct scans or flag scanning errors.',
          },
        ],
      },
      { p: 'The functional workflows I implemented are:' },
      {
        ul: [
          {
            label: 'Inbound goods receiving',
            text: 'Scanning QR codes on supplier packing slips and individual packages, with rapid assignment to the correct shelf location.',
          },
          {
            label: 'Picking and shipping',
            text: 'Guided verification of picking lists, with the operation halted if an incorrect item is scanned.',
          },
          {
            label: 'Continuous inventory',
            text: 'Quick scanning of items and shelves to view technical data sheets and adjust inventory levels in just a few steps.',
          },
        ],
      },
    ],
  },
  {
    title: 'Migrating from Talend to Python',
    tags: ['Python', 'python-oracledb', 'pandas', 'Tkinter', 'Oracle ERP', 'AI'],
    body: [
      {
        p: 'The project migrated the complex ETL processes from Talend to a modular desktop solution written in Python, designed to extract, verify, and reconcile receipts and payments from the Oracle ERP system.',
      },
      {
        p: 'The architecture utilized the python-oracledb library for capturing financial flows and pandas for data normalization, matching invoices with bank transfers, and promptly identifying discrepancies. The Tkinter graphical interface allowed administrative staff to initiate processing, set investigation parameters, and view previews and logs in real time.',
      },
      {
        p: 'The key innovation was the integrated AI assistant: users could describe new control rules in natural language. The artificial intelligence automatically translated them into Python scripts, which were validated through security checks and executed within a secure sandbox.',
      },
      {
        p: 'Deployed as a standalone executable for Windows, the application significantly reduced memory usage, eliminated licensing costs, and removed the overhead of the JVM, ensuring speed and complete independence from the IT department for the accounting office.',
      },
    ],
  },
];

export const notes = [
  {
    title: 'Perfection comes with practice',
    body: [
      {
        p: 'A “smart” colleague once told me: refinement is an essential activity, and it consists of feedback loops with users, code reviews, and rewriting obscure modules. The perfect product isn’t the one designed in an ivory tower at the beginning, but the one that converges toward real requirements through successive iterations.',
      },
    ],
  },
  {
    title: 'One thing leads to another',
    body: [
      {
        p: 'Sometimes, when you have to create a new product, you find yourself staring at a blank page. In these cases, I’ve found the saying “one thing leads to another” to be helpful. Think about the problem abstractly and look for solutions in very different areas that share common elements. Then transform the idea repeatedly until you end up with something very different.',
      },
    ],
  },
  {
    title: 'Debate on AI',
    body: [
      {
        p: 'When it comes to AI, I often hear contrasting opinions. Some believe that AI does things for us, with both positive and negative consequences. Others oppose its use because it makes us lose the habit of thinking for ourselves. Still others say that one day it will be sentient like humans.',
      },
      {
        p: 'I’d like to add a perspective—perhaps a bit unconventional. Today, AI lacks two components of the human mind: desires and fears. As long as this remains true, using AI allows us to have something we cannot have through any other means. A dialogue that allows us to organize our thoughts, eliminate contradictions, and fill in the gaps. The idea that emerges is exactly ours—precisely the one we wanted, had we had the time to perfect it. If the dialogue had taken a different course, with another person, it would have led us toward a different idea. Ultimately, our idea—but only a compromise.',
      },
    ],
  },
  {
    title: 'Brooks’s Law',
    body: [
      {
        p: 'A “smart” colleague once told me: Adding developers to a project that’s behind schedule multiplies the communication channels and ties up senior staff in meetings, delaying the release. To overcome this constraint, five strategies are needed:',
      },
      {
        ol: [
          {
            label: 'Cut the scope',
            text: 'Release a Minimum Viable Product right away, eliminating non-essential features.',
          },
          {
            label: 'Decouple the architecture',
            text: 'Establish stable APIs and contracts to enable parallel work without constant coordination.',
          },
          {
            label: 'Protect the critical path',
            text: 'Use the “surgical” model: a lead developer focused on the core code, shielded from bureaucracy and mentoring.',
          },
          {
            label: 'Assign non-blocking tasks',
            text: 'Direct new hires toward testing, CI/CD, and isolated technical debt.',
          },
          {
            label: 'Self-service onboarding',
            text: 'Provide containers and asynchronous documentation to avoid taking time away from senior developers.',
          },
        ],
      },
    ],
  },
];

export const tools = [
  {
    title: 'Spring',
    body: [
      {
        p: 'About Spring, I can say that it is a vast and proven enterprise ecosystem; it has a solid architecture driven by dependency injection, and it offers comprehensive native support for microservices, security, and data management. If I had to offer a criticism, I would say that the initial learning curve is steep, memory consumption is high, and debugging can be a bit challenging due to the excessive abstraction and the “magic” of annotations.',
      },
    ],
  },
  {
    title: 'React',
    body: [
      {
        p: 'As for React, I can say that it has a vast ecosystem, and its architecture—based on reusable components—avoids unnecessary repetition. The declarative model offers great flexibility and high performance when updating user interfaces. If I had to offer a criticism, I’d say that managing re-renders and hooks can become complex.',
      },
    ],
  },
  {
    title: 'Android',
    body: [
      {
        p: 'As for Android, I have to say it dominates the global market. The ecosystem is open. But I prefer developing in Java to modern development with Kotlin. It also offers extreme flexibility in terms of hardware and a release process suited to the enterprise market. If I had to offer a criticism, I’d say there’s some fragmentation among devices, screens, and OS versions, which complicates testing and maintenance.',
      },
    ],
  },
  {
    title: 'Docker',
    body: [
      {
        p: 'As for Docker, I have to say that it offers absolute portability, eliminates the “it works on my machine” problem, is very lightweight, and starts up instantly compared to traditional virtual machines. It has a very extensive ecosystem that simplifies alignment between development and production environments. If I had to offer a criticism, I’d say it has a bit of a performance overhead, and resource consumption on macOS and Windows is high. Managing data persistence is a bit complex, as is advanced networking.',
      },
    ],
  },
];

export const contact = {
  linkedin: 'https://www.linkedin.com/in/efremtonioni/',
};
