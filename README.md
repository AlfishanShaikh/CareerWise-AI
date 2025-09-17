# CareerWise AI  
**AI‑Powered Personalized Career & Skills Advisor**  
Empowering Indian students to make informed career decisions instantly.

---

## Demo  
**Live Application:** 👉 [https://careerwise-ai.netlify.app/](https://careerwise-ai.netlify.app/)  
**Video Walk‑through:** (Add YouTube link if available)

---

## About the Project  
CareerWise AI is a lightweight, mobile‑friendly web app that leverages OpenAI’s generative models to instantly provide personalized career guidance.  
Students input their education level, existing skills, and interests, and the system returns:
- Tailored career path suggestions  
- Key skills required for each path  
- Curated online courses (Coursera, Udemy, NPTEL, etc.)  
- Motivational tips & actionable next steps  

Unlike traditional counseling, CareerWise AI delivers a friendly chatbot‑style conversation, 24/7, at zero cost.

---

## Key Features  

| ✅ Feature | Description |
| --------- | ----------- |
| Instant AI‑generated advice | Uses OpenAI GPT‑4 (or gpt‑3.5‑turbo) to produce real‑time, contextual recommendations. |
| Personalized career roadmap | Maps user profile to high‑growth career tracks in India’s job market. |
| Skill gap analysis | Highlights missing competencies and suggests targeted learning resources. |
| Course recommendations | Pulls from free/low‑cost platforms (Coursera, Udemy, NPTEL, YouTube). |
| Motivational tips | Provides bite‑sized encouragement and productivity hacks. |
| Responsive UI | Mobile‑first design, works on all screen sizes. |
| Privacy‑first | No personal data is stored; only session‑level context is kept. |
| Open‑source | Fully transparent code, easy to extend or self‑host. |

---

## Tech Stack  

| Layer | Technology | Reason |
| ----- | ---------- | ------ |
| Frontend | React + Vite | Fast bundling, modern syntax, great dev experience |
| Styling | Tailwind CSS | Utility‑first styling, responsive out‑of‑the‑box |
| UI | Custom Chatbot UI | Conversational UI with message bubbles |
| Backend (Serverless) | OpenAI API | Generative language model for content creation |
| Serverless Functions | Netlify Functions (Node.js) | Zero‑config serverless functions for API proxy |
| Deployment | Netlify | Instant CI/CD, global CDN, free SSL |
| Version Control | Git + GitHub | Collaboration & CI pipelines |
| Testing | Vitest + React Testing Library | Unit & component testing |
| Project Management | GitHub Projects (Kanban) | Track issues, milestones & roadmap |

---

## Architecture Overview  

```bash

+-------------------+        +-------------------+        +-------------------+
|   User Browser    | <----> |   Frontend (React) | <----> | Netlify Functions |
| (HTML/CSS/JS)     |        |  - UI Components   |        |  - OpenAI Proxy   |
+-------------------+        +-------------------+        +-------------------+
                                 |   ^
                                 |   |
                                 v   |
                      +---------------------------+
                      |      OpenAI API (GPT)      |
                      +---------------------------+
```



- User Interaction – The React app captures user input via a chat interface.  
- API Gateway – Netlify Functions act as a thin proxy that injects the API key securely and forwards the prompt to OpenAI.  
- Response Handling – The AI’s answer is streamed back, parsed, and displayed as chat bubbles.  
- Stateless Session – Conversation context is held in the browser memory; no server‑side persistence.  

---

## Getting Started  

### Prerequisites  
- Node.js (v18 or later): https://nodejs.org/  
- npm (or pnpm/yarn)  
- OpenAI API Key – sign up at https://platform.openai.com/ and generate a secret key  

### Installation  
```bash
# 1️⃣ Clone the repository
git clone https://github.com/AlfishanShaikh/CareerWise-AI.git
cd CareerWise-AI

# 2️⃣ Install dependencies
npm install          # or pnpm install / yarn install

# 3️⃣ Set up environment variables
cp .env.example .env
# Open .env and add your OpenAI key:
# VITE_OPENAI_API_KEY=sk-********************

# 4️⃣ (Optional) Install Netlify CLI for local functions testing
npm install -g netlify-cli

# Start the dev server (Vite)
npm run dev
# → http://localhost:5173

# In a separate terminal, run Netlify functions locally
netlify dev
# Visit http://localhost:5173 to see the CareerWise AI chat interface

```

---

## Contributing

We welcome contributions! Follow these steps:

1. Fork the repo.
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes with a clear message: `git commit -m "feat: brief description"`
4. Push and open a Pull Request: `git push origin feature/your-feature-name`

## Code Style

* Use Prettier (already configured) – run `npm run format` before committing.
* Follow the existing folder structure: `src/components`, `src/pages`, `functions/`.

## Reporting Issues

* Use **GitHub Issues** with the appropriate label (bug, enhancement, documentation).

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Contact & Acknowledgements

**Alfishan Shaikh** – Project Lead
* GitHub: https://github.com/AlfishanShaikh
* LinkedIn: [https://www.linkedin.com/in/alfishan-shaikh](https://www.linkedin.com/in/shaikh-alfishan/)

Special thanks to the **Hack2Skill Gen AI Exchange Hackathon** organizers and all mentors who provided guidance.