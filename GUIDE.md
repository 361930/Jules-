# Website Management Guide

Welcome to your new website! This guide provides everything you need to know to run, customize, and manage your project.

## 1. Running the Project Locally

To run the website on your own computer, you'll need to have [Node.js](https://nodejs.org/) installed.

1.  **Open a terminal** or command prompt.
2.  **Navigate to the project's root directory**.
3.  **Install dependencies:** Run the following command once to install all the necessary packages.
    ```bash
    npm install
    ```
4.  **Start the development server:** After the installation is complete, run this command to start the website.
    ```bash
    npm run dev
    ```
5.  **View your website:** Open your web browser and go to [http://localhost:3000](http://localhost:3000). The website should now be running locally.

## 2. How to Update Website Content

One of the key features of this website is how easy it is to update its content without touching the main code. All the dynamic content for your services and portfolio is stored in simple data files.

### Updating Your Services

-   **Location:** `src/data/services.ts`
-   **To edit, add, or remove a service:**
    1.  Open the `src/data/services.ts` file.
    2.  You will see a list of service objects. Each object has `id`, `title`, `slug`, `description`, `icon`, and `content`.
    3.  **To edit:** Simply change the text in the `title`, `description`, or `content` fields for any service.
    4.  **To add:** Copy an existing service object, paste it at the end of the list, change the `id` to be unique, and update the content.
    5.  **To remove:** Delete the entire service object from the list.

**Example of a service object:**
```typescript
{
  id: 1,
  title: 'Web Development', // Change this title
  slug: 'web-development', // This is for the URL, should be unique
  description: 'A short description for the services page.', // Change this
  icon: 'code',
  content: 'The full, detailed content for the service detail page.' // Change this
}
```

### Updating Your Portfolio

-   **Location:** `src/data/portfolio.ts`
-   **To edit, add, or remove a portfolio project:**
    1.  Open the `src/data/portfolio.ts` file.
    2.  The structure is very similar to the services file.
    3.  You can edit, add, or remove portfolio items by modifying the objects in the list.
    4.  The `imageUrl` can be a link to any image on the web or a path to an image you place in the `public` folder (e.g., `/my-project-image.png`).

**Example of a portfolio object:**
```typescript
{
  id: 1,
  title: 'Project Alpha', // Change this title
  slug: 'project-alpha', // This is for the URL
  description: 'A short project description.', // Change this
  imageUrl: 'https://images.unsplash.com/...', // Change this image link
  tags: ['Next.js', 'E-commerce'], // Edit the tags
  content: 'The full, detailed content for the portfolio detail page.' // Change this
}
```

## 3. Project Structure Overview

Here is a brief overview of the most important files and folders:

-   `src/app/`: This is the heart of the application. Each folder inside `app` represents a page or a route on your website.
    -   `src/app/page.tsx`: The Home page.
    -   `src/app/services/`: The Services page and its detail pages.
    -   `src/app/portfolio/`: The Portfolio page and its detail pages.
    -   `src/app/contact/`: The Contact Us page.
    -   `src/app/layout.tsx`: The main layout for the entire website. This is where the `Navbar` and `Footer` are.
-   `src/components/`: Contains all the reusable components like the `Navbar`, `Footer`, etc.
-   `src/data/`: Contains the easy-to-edit data files for your services and portfolio.
-   `public/`: This folder is for static assets like images, your logo, etc.
-   `tailwind.config.ts`: This file contains the website's theme configuration, including the custom color palette.

## 4. Basic Deployment Steps

When you are ready to put your website online, you can use a service like [Vercel](https://vercel.com/) (created by the same team as Next.js) or [Netlify](https://www.netlify.com/).

The general steps are:
1.  **Push your code to a Git repository** (like GitHub, GitLab, or Bitbucket).
2.  **Sign up for a Vercel or Netlify account.**
3.  **Connect your Git repository** to the hosting service.
4.  The service will automatically detect that it's a Next.js project, build it, and deploy it for you.

This guide should provide a solid starting point for managing your new website. Congratulations!