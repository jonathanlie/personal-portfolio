Integrated centralized Identity Providers (IdP) into both frontend and backend applications using internal SDKs.

## Frontend

Managed complex client-side state, including token lifecycles, silent refresh strategies (iframe-based), and RBAC (Role-Based Access Control) for securing routes and UI elements.

## Backend

Implemented request-scoped context handling. Captured user tokens at the controller level and propagated identity context to downstream logic, ensuring actions were correctly attributed to the authenticated user.
Secured inter-service communication using secret-based authentication. Configured internal clients to authenticate against other microservices.
