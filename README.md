
# Job Portal

A dynamic and user-friendly Job Portal platform where users can:

Browse the list of available job positions.

View detailed information about a job on the details page.

Filter and search jobs by title, category, or other parameters.

Apply for jobs directly.

View jobs they have already applied for.


## Features
    1. Job Listing:
        Users can view a complete list of available job positions.
    2. Job Details:
        Each job includes detailed information like title, description, requirements, and company details.
    3. Search and Filter:
        Search jobs by title.
        Apply filters by job type.
    4. Apply for Jobs:
        Users can apply directly for a job.
        If already applied, the system will notify the user.
    5. Applied Jobs View:
        sers can see a list of jobs they’ve already applied for.
## Installation

Follow the steps below to set up the project on your local machine:

```bash
 git clone <repository-url>
cd <repository-folder>
```
    
## Install Dependencies

Run the following command to install all necessary dependencies:

    npm install


## Run the Application

    npm run dev



## ⚠️ GitHub Login Warning

    Always run http://localhost:3000 for GitHub Authentication during development."
    GitHub OAuth requires the redirect URL to match exactly. Ensure that the development server is running on http://localhost:3000 to avoid mismatched redirect errors.
## Documentation

Architecture and Design

**High-Level Overview**

The project is a Job Portal application built with modern web technologies to provide an efficient and seamless user experience.


## Technology Stack

**Frontend Framework:** Next.js (React-based framework for server-side rendering and static site generation).

**Styling:** Tailwind CSS for utility-first styling.

**Validation:** Zod for schema-based validation of user inputs.

**UI Components:** ShadCN for pre-designed, customizable UI components.

**State Management:** Zustand for lightweight and scalable state management.


## Frontend Architecture

**Next.js Pages and Routing**
- Dynamic routes for job details (/jobs/[id]).

**Reusable Components**

ShadCN components are used for buttons, forms, modals, etc., styled with Tailwind CSS for consistency.

**State Management with Zustand**

Zustand provides a simple and lightweight way to manage application state without boilerplate

- Centralized store for managing filters, search queries, and job application states.

**Form Handling and Validation**

- Forms are validated using Zod for type-safe and schema-driven validations.

- Example: Validating job application inputs like name, email, and resume.


**UI Design with ShadCN and Tailwind CSS**

- ShadCN Components: Modular UI elements like buttons, inputs, modals, and dropdowns.

- Tailwind CSS Integration: Customizes ShadCN components with utility-first styling for responsiveness.

## Workflow

**Authentication**

The application includes the following authentication methods

- **Static Login:** Users can log in using a static email and password for development purposes.

- **GitHub Login:** Integrated GitHub OAuth for user authentication. Users can log in with their GitHub account for a seamless experience.


**User Interaction**
- The user visits the homepage to browse job listings.
- Filters and search functionality are managed using Zustand for global state.

**Server-Side Data Fetching**
- Next.js fetches jobs from the database using server-side rendering 

**Validation and Application Submission**
- Zod validates application forms before sending data





## Issues Faced During Development

**Hydration Issue in Next.js**

Cause: Mismatched server-side and client-side rendering due to dynamic data (e.g., user-specific data or time-sensitive content).
## Support

For questions or support, feel free to reach out at [singhkumargaurav420@gmail.com].

