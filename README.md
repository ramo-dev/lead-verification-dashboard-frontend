# Real Sources Africa - Lead Verification Dashboard

This tool is used by **RSA Operations Analysts** to review, vet, and approve new trade inquiries submitted by partners, such as Ministries of Trade and Investment Authorities.

## Features

- **Dynamic Dashboard:** Displays tables for all inquiries, pending inquiries, and verified leads.
- **Inquiry Management:** View inquiry details, verify pending inquiries, and delete inquiries through a modal interface.
- **Data Tables:** Utilizes `@tanstack/vue-table` for robust and reusable data table components.
- **Status Badges:** Inquiries in the "All Inquiries" table are marked with color-coded badges to indicate their status (Verified, Pending, Rejected).
- **State Management:** Uses Pinia for centralized state management, ensuring a single source of truth for inquiry data.
- **API Integration:** Communicates with a backend API to perform CRUD operations on inquiries.
- **System Health Page:** A dedicated page to monitor the health of the backend API.
- **Statistics Page:** A page displaying key statistics about the inquiries, such as total, pending, verified, and rejected counts.
- **Responsive Design:** The UI is designed to be responsive and accessible, with light and dark modes.

## Tech Stack

- **Framework:** [Vue 3](https://vuejs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **State Management:** [Pinia](https://pinia.vuejs.org/)
- **UI Components:** [Shadcn-vue](https://www.shadcn-vue.com)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Data Tables:** [@tanstack/vue-table](https://tanstack.com/table/v8/docs/adapters/vue-table)
- **API Client:** [Axios](https://axios-http.com/)
- **Icons:** [Lucide](https://lucide.dev/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (or npm/yarn)
- A running instance of the backend API.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/ramo-dev/lead-verification-dashboard-frontend.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd lead-verification-dashboard-frontend
    ```
3.  Install the dependencies:
    ```bash
    pnpm install
    ```

### Environment Variables

Before running the application, you need to set up the environment variables. Create a new file named `.env` in the root of the project by copying the example file:

```bash
cp .env.example .env
```

The `.env` file contains the base URL for the backend API. The default values should work for a local development setup.

### Running the Development Server

Make sure the backend API is running and accessible at `http://localhost:8080`.

Run the development server:
    ```bash
    pnpm dev
    ```

Open your browser and navigate to `http://localhost:5173` to see the application.


