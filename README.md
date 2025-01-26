

# 🚀 **Expert**  

Expert is a platform where users can 💬 share their thoughts, 📝 post replies, 🔍 search for content, 🛠️ manage their profile, and ❤️ favorite posts. This project is built with modern technologies and provides a seamless user experience. Below, you will find a detailed description of the project, its features, and the tech stack used.

---

## 🛠️ **Tech Stack**

### 🎨 Frontend:
- ⚡ **Next.js:** Framework for server-rendered React applications.
- 🧩 **React:** Library for building user interfaces.
- 🎨 **Tailwind CSS:** Utility-first CSS framework for styling.
- 🖼️ **Radix UI:** Accessible components for building modern web apps.
- ✨ **Lucide Icons:** For beautiful, customizable icons.

### 🖥️ Backend:
- 📦 **MongoDB & Mongoose:** Database and object data modeling.
- 📡 **Svix:** Webhook infrastructure.

### 🖋️ Form Management:
- 🪝 **React Hook Form:** For managing form state and validation.
- 🔒 **Zod:** Schema validation with TypeScript support.

### 📂 File Management:
- ☁️ **UploadThing:** Simple file upload solutions.

### ⚙️ Utilities:
- 🪄 **clsx & class-variance-authority:** For conditional class management.
- 🛠️ **Tailwind Merge:** Merging Tailwind CSS classes effectively.
- 🎬 **Tailwind CSS Animate:** Animation utilities for Tailwind CSS.

---

## 🚀 **Installation**

Follow these steps to get the project up and running locally:

1. **📥 Clone the Repository:**
   ```bash
   git clone https://github.com/1lkin13/Expert.git
   ```

2. **📂 Navigate to the Project Directory:**
   ```bash
   cd expert
   ```

3. **🔧 Install Dependencies:**
   ```bash
   npm install
   ```

4. **🔐 Set Up Environment Variables:**
   Create a `.env.local` file in the root of your project and add the following:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   NEXT_CLERK_WEBHOOK_SECRET= your-key
   UPLOADTHING_SECRET= your-key
   MONGODB_URL= your-key
   ```

5. **▶️ Run the Development Server:**
   ```bash
   npm run dev
   ```

6. **🌐 Access the Application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 **Usage**

- 🔐 **User Authentication:** Sign up or log in using Clerk.  
- ✏️ **Create Posts and Replies:** Share your thoughts and engage in discussions.  
- 🔍 **Search:** Use the search bar to find relevant content.  
- 👤 **Profile Management:** Update your profile and view your favorite posts.  

---

## 📸 **Screenshots**  

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/b32484ff-f84c-4c24-acca-1a398249ee60" alt="Screenshot 2025-01-26 192352" width="400" /></td>
    <td><img src="https://github.com/user-attachments/assets/e2439572-29e3-4281-a601-2ba097cc7fce" alt="Screenshot 2025-01-26 193126" width="800" /></td>
    <td><img src="https://github.com/user-attachments/assets/f58ca995-8147-4c3f-a9ff-a56bfed977d0" alt="Screenshot 2025-01-26 193115" width="800" /></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/39ae0cfe-6227-4279-acf3-9df677235dd5" alt="Screenshot 2025-01-26 193050" width="400" /></td>
    <td><img src="https://github.com/user-attachments/assets/0ccf2f52-43b6-4570-ba3f-037294b96c70" alt="Screenshot 2025-01-26 193211" width="200" /></td>
    <td><img src="https://github.com/user-attachments/assets/55d1464b-54a9-4fc0-8a22-0c7dc5ce8645" alt="Screenshot 2025-01-26 193150" width="230" /></td>
  </tr>
</table>  

---  

