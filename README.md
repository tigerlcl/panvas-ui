# Panvas - Academic Research Hub

Panvas is a paper-centric platform designed to serve the academic community by providing a modern, interactive space for researchers to discover, discuss, and collaborate on academic papers.

## Overview

Panvas aims to revolutionize how researchers interact with academic papers by combining traditional paper hosting with community-driven features and reward mechanisms. Our platform focuses on creating a vibrant ecosystem where research papers become the centerpiece of academic discussions.

## Key Features

### 1. Solutions
- **Square**: Academic discussions and community engagement platform
- **Preview Space**: Multi-modal research content exploration
  - Papers, Research Proposals, Code Snippets
  - Datasets, Research Images, and more
  - Time-limited review spaces
  - Voting system for feedback
- **Consulting Room**: Verified opportunities for collaboration
  - Paper Review Requests
  - Research Surveys
  - Experiment Participation
  - Other Academic Services
- **Carnival**: Research-based prediction games
  - Paper Decision Betting
  - Citation Count Predictions
  - Review Quality Competitions
  - Community-driven rewards

### 2. Resources
- **PaperPoint System**: Digital currency for academic contributions
- **Blogs**: Platform updates and academic insights
- **FAQs**: Comprehensive help center

### 3. User Experience
- Clean, modern interface
- Responsive design
- Dark/light mode support
- Smooth animations and transitions
- Intuitive navigation with dropdown menus

## Technology Stack

- React 18
- Chakra UI 2.x
- Framer Motion
- React Router 6
- React Icons

## Project Structure

```
src/
├── components/
│   ├── index.js
│   ├── Navbar.js
│   ├── Footer.js
│   ├── SignIn.js
│   ├── Home.js
│   └── AboutUs.js
├── pages/
│   ├── demo-user/
│   │   ├── index.js
│   │   ├── Homepage.js
│   │   ├── RoomCredit.js
│   │   ├── Settings.js
│   │   └── Wallet.js
│   ├── solutions/
│   │   ├── index.js
│   │   ├── Square.js
│   │   ├── PreviewSpace.js
│   │   ├── ConsultingRoom.js
│   │   └── Carnival.js
│   ├── resources/
│   │   ├── index.js
│   │   ├── PaperPoint.js
│   │   ├── Blogs.js
│   │   └── FAQs.js
│   └── examples/
│       └── SpacePaper.js
└── App.js
```

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/tigerlcl/panvas.git
```

2. Install dependencies
```bash
cd panvas
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Contributing

We welcome contributions! Feel free to submit issues and pull requests.

## License

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
