---
layout: page
title: AI Secretary
description: An AI-powered productivity assistant
img: assets/img/9.jpg
importance: 1
category: work
related_publications: true
---

# AI Secretary 📱🤖  

**AI Secretary** is an **AI-powered productivity assistant** that combines note-taking, task management, and scheduling into one seamless app.  

I built this project as a personal experiment to improve **student productivity**. The goal was to create a tool where notes, tasks, and events don’t live in silos, but instead interact naturally through an **AI chat assistant**. By integrating **Google Calendar**, **Todoist**, and the **OpenAI API**, AI Secretary allows users to manage their academic and personal lives with ease.  

---

## ✨ Features  

- **📝 Notes** – Simple local notes app with chat history saved on device.  
- **📅 Google Calendar** – View upcoming events; event creation + NLP scheduling in progress.  
- **💬 AI Chat** – Conversational interface with OpenAI API; manage tasks via chat synced with Todoist; planned support for **Google Gemini API**.  
- **✅ Todoist Integration** – Two-way sync with Google account tasks for a unified view of notes, calendar, and tasks.  

---

## 🛠️ Tech Stack  

- **Flutter** – cross-platform mobile framework  
- **Firebase** – authentication + backend services  
- **Google Auth & Calendar API** – event management  
- **Todoist API** – task synchronization  
- **OpenAI API** – conversational AI for task and note handling  
- **HTTP** – API communication  

---

## 🚀 Why It Matters  

Students juggle notes, deadlines, and events across multiple disconnected tools. **AI Secretary** aims to unify them while adding **AI-driven productivity**:  

- No need to manually update calendars and task lists.  
- Natural language input like *“Remind me to review math notes tomorrow at 7 PM”* turns into a scheduled calendar event or task automatically.  
- Notes, tasks, and events live together in one ecosystem.  

---

## 📸 Screenshots  

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="ReadmeImages/notes_page.png" title="Notes Page" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="ReadmeImages/chat_page.png" title="Chat Page" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="ReadmeImages/calendar_page.png" title="Calendar Page" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Notes page (left), AI-powered Chat (middle), and Google Calendar integration (right).
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="ReadmeImages/tasks_page.png" title="Tasks Page (Todoist)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Todoist tasks synced seamlessly with Google account.
</div>

---

## 🔮 Roadmap  

- [ ] Enable event creation in Google Calendar  
- [ ] Expand NLP support for natural event/task creation  
- [ ] Generalize the app for all Google + Todoist users  
- [ ] Explore **Google Gemini API** integration for multimodal AI  
- [ ] Package and release as an installable app  

---

## 📂 Repository  

📌 View the source code here: [AISecretary on GitHub](https://github.com/dhruvviveksharma/AISecretary)  
