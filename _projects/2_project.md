---
layout: page
title: Hogwarts Lexicon
description: An AI-powered Harry Potter Question Answering System
img: assets/img/HogwartsLexicon.png
importance: 5
category: work
giscus_comments: true
---

**Hogwarts Lexicon** is an AI-powered question-answering platform that immerses fans in the Wizarding World of Harry Potter. Users can simply ask questions about the Harry Potter universe and receive detailed, context-rich answers, all powered by modern AI technology.

---

## ✨ Features

- **Fast & Context-Aware Search** – The FAISS vector store enables quick retrieval of relevant passages.  
- **Natural Language Understanding** – Uses OpenAI’s GPT models in a retrieval-augmented generation (RAG) pipeline for coherent, lore-accurate responses.  
- **Themed Interface** – A responsive and immersive UI styled around Hogwarts aesthetics.  

---

## 🛠️ Tech Stack  

- **Backend**: Node.js + Express, LangChain, FAISS, OpenAI GPT  
- **Frontend**: React, Vite, custom CSS  
- **Database**: Vector store for efficient passage retrieval  

---

## 📸 Screenshots  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hlexicon-1.png" title="Homepage" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hlexicon-2.png" title="Chat Page" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/hlexicon-3.png" title="Answer Example" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Homepage for Hogwarts Lexicon. Middle: Input a question in natural language. Right: AI-generated detailed lore-based answer.
</div>

---

## 🚀 Setup & Installation  

1. Clone the repo:  
   ```bash
   git clone https://github.com/dhruvviveksharma/Hogwarts-Lexicon.git
   cd Hogwarts-Lexicon 
   ```

2. Install dependencies
```bash
cd server && npm install
cd ../client && npm install
```

3. Configure dotenv in the server directory
```bash
OPENAI_API_KEY=your_api_key_here
```

4. Build FAISS vectorstore
```bash
cd server
node build_db.js
```

5. Run the backend:
```bash
node index.js
```

6. Start the frontend
```bash
cd ../client
npm run dev
```