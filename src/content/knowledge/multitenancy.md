# Frontend

In the rewards dashboard platform that I worked on, multitenancy was handled from a few aspects, ranging from managing appearance to functionality.

## Design System

### Theming and typography

A centralized theme provider handles tenant-specific branding, such as color palettes, fonts, spacing.

### Component Registry

Custom components specific to each tenant can be registered and configured to replace a base component. I made a wrapper component that reads from a hashmap, and renders that component.

## Internationlization / Localization

### Translations

Hierarchical translations strategy - with a default a base language set, translations can be overriden per tenant, with extra tenant-specific translation keys which might only be needed by tenant-specific components.

## Routing & Modules

Module injection is configured on build time, with only required feature modules imported in each tenant build. Custom routing was configured for each tenant.

## Feature Flag

Feature flags are managed on 2 levels:

- Static configuration on the build time.
- Dynamic configuration on runtime, handled by a flag management service such as Unleash.

# Backend

In the orchestration layer that I worked on, multitenancy was handled mainly from configuration management and hybrid infrastructure model.

## Metadata-driven Configuration

Tenant-specific logic is decoupled from code using a dynamic configuration, stored as JSON blobs within the database, with schema validation enforced at the application layer.

## Feature Flag

Runtime control is centralized via external flag management services such as Unleash.

## Hybrid Hosting Strategy

There were 2 distinct strategies of hosting for different clients:

- Siloed Isolation, where clients operate on dedicated instances (Single-tenant infrastructure).
- Pooled Isolation, where clients utilize a shared environment where a single instance serves multiple tenants via logical isolation instead.
