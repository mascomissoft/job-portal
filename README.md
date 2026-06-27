# mascoJobPortal

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.16.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Masco Job Portal (masco-job-portal)

Welcome to the **Masco Job Portal** repository. This project is built using modern Angular (v17+) with a scalable, enterprise-grade architecture. It serves as a live benchmark for state-of-the-art Angular development, demonstrating how to prevent monolithic file sizes and leverage re-usable components efficiently.

---

## 📂 Project Architecture & Folder Structure

To avoid the anti-pattern of massive files (e.g., 4000+ lines of code), we separate concerns into dedicated layers within the `src/app/` directory:

```text
src/app/
│
├── core/                  # App-wide singleton services (Auth, API, Guards)
│   ├── guards/            # Navigation security (e.g., locking the dashboard)
│   └── services/          # Core business logic (e.g., auth.service.ts)
│
├── shared/                # Re-usable "Dumb" UI Components & Utilities
│   └── components/        # custom-button, input-field, job-card, etc.
│
└── features/              # Main application pages ("Smart" Components)
    ├── admin-layout/      # Wraps the layout for the internal portal (Sidebar + Navbar)
    ├── auth/              # Authentication modules (Login, Register)
    ├── dashboard/         # Core Job Management Hub
    └── user-profile/      # Employee/Admin management views
