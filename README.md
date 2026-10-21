# 🌿 My Garden — Botanical Sanctuary & Expert Care Guide

> **A high-performance modern web application engineered for cataloging urban botany, automating care schedules, and mapping real-time micro-climate growth analytics tailored specifically for high-density balcony environments.**

---

## 📌 Technical Overview & System Architecture

**My Garden** is a full-stack, enterprise-grade urban botany platform engineered to solve the complex biological maintenance challenges associated with micro-climate gardening and high-density urban balcony ecosystems. By combining real-time environmental telemetry with deterministic botanical algorithms, the engine automates dynamic irrigation scheduling, sunlight exposure tracking, and organic fertilization cycles. Built on **Next.js 15 App Router** leveraging **React Server Components (RSC)**, the architecture achieves zero-bundle-size overhead for static botanical metadata while maintaining rapid interactive state transitions via **GraphQL (Apollo Client)**. Data persistence and state management are orchestrated through **PostgreSQL** driven by **Prisma ORM**, while real-time multi-attribute search across the botanical taxons is offloaded to an **Algolia InstantSearch** index.

### 🛠️ Architecture Tech Stack Matrix

| Architecture Layer | Technology Standard | Purpose & Implementation Scope |
| :--- | :--- | :--- |
| **Frontend Framework** | **Next.js 15** | App Router, Server Components (RSC), Edge Runtime Route Handlers |
| **Styling & Design** | **Tailwind CSS v4** | Custom high-performance Design System, JIT Engine, CSS Variables |
| **Database & ORM** | **PostgreSQL / Prisma ORM** | Relational state management, dynamic schemas, type-safe query generation |
| **API Architecture** | **GraphQL / Apollo Client** | Declarative botanical data fetching, cached queries, normalized client cache |
| **Search Engine** | **Algolia InstantSearch** | Sub-millisecond full-text species lookup and faceted taxonomic filtering |

---

## 📸 System Showcase & Visual Layouts

<p align="center">
  <img src="https://images.pexels.com/photos/4925632/pexels-photo-4925632.jpeg" alt="My Garden Application Banner & Hero Mockup" width="100%" />
</p>

<p align="center">
  <em>Figure 1: High-Density Balcony Ecosystem & Botanical Sanctuary Overview Layout.</em>
</p>

<br />

<p align="center">
  <img src="https://images.pexels.com/photos/6911178/pexels-photo-6911178.jpeg" alt="Feature Grid & Analytics Showcase" width="100%" />
</p>

<p align="center">
  <em>Figure 2: Real-time Feature Grid, Botanical Gallery, and Analytics Showcase.</em>
</p>

---

## 🔬 Core Engine Modules & Features

### 1. 🪴 Featured Plant Catalog Architecture

The platform catalogs species with precise environmental tolerance matrices, allowing users to cross-evaluate plant parameters against their balcony micro-climate:

* **Helicopter Plant (*Hiptage benghalensis*)**
  * **Taxonomic Type:** Creeper / Woody Vine
  * **Light Requirement:** Mild Sun Exposure
  * **Moisture Protocol:** Daily Irrigation Cycle
  * **Biological Profile:** Woody creeper featuring delicate blooms transitioning from pure white to vivid reddish-purple; individual blossoms persist for 1–2 days; emits a light, subtle fragrance.
* **Periwinkle (*Catharanthus roseus*)**
  * **Taxonomic Type:** Low Care / Herbaceous Perennial
  * **Light Requirement:** Full / Partial Sun
  * **Moisture Protocol:** Moderate Water Intake
  * **Biological Profile:** Five-petaled pink and lavender blossoms; highly resilient, low-maintenance profile; individual blooms hold for 2–3 days; noted for rich medicinal alkaloid properties.
* **Jungle Flame Ixora (*Ixora coccinea*)**
  * **Taxonomic Type:** Compact Shrub
  * **Light Requirement:** Moderate Sun Exposure
  * **Moisture Protocol:** Regular Hydration
  * **Biological Profile:** Dense clusters of tiny, tubular flowers ranging from bright coral pink to crimson red; persistent blooms remain vibrant for up to 1.5 months.
* **Golden Allamanda (*Allamanda cathartica*)**
  * **Taxonomic Type:** Sprawling Creeper
  * **Light Requirement:** Direct Sunlight
  * **Moisture Protocol:** High Moisture Saturation
  * **Biological Profile:** Sprawling climbing vine bearing large, trumpet-shaped golden-yellow flowers; structural trellis support required for optimal growth vectors.
* **Star Jasmine (*Jasminum officinale*)**
  * **Taxonomic Type:** Fragrant Climber
  * **Light Requirement:** Full Sun (6–8 Hours Daily)
  * **Moisture Protocol:** Balanced Hydration
  * **Biological Profile:** Intense sweet aroma acting as a natural air freshener; features pristine white star-shaped blooms with high essential oil concentrations.
* **English Lavender (*Lavandula angustifolia*)**
  * **Taxonomic Type:** Fragrant / Subshrub
  * **Light Requirement:** Full Sunlight
  * **Moisture Protocol:** Low Water / Drought Tolerant
  * **Biological Profile:** Soothing aromatic foliage with delicate violet floral spikes; highly effective at attracting local pollinators while maintaining low water consumption.

---

### 2. 🎛️ Interactive Care Engine (System Logic Protocols)

The application models care routines as reactive logic controllers, evaluating parameters dynamically:

```
                  ┌──────────────────────────────────────────┐
                  │   Micro-Climate Sensor & User Telemetry   │
                  └────────────────────┬─────────────────────┘
                                       │
                                       ▼
                  ┌──────────────────────────────────────────┐
                  │    Core Care Logic Execution Pipeline    │
                  └──────┬─────────────┬─────────────┬───────┘
                         │             │             │
        ┌────────────────┘             │             └────────────────┐
        ▼                              ▼                              ▼
┌───────────────┐              ┌───────────────┐              ┌───────────────┐
│ Sunlight Mgmt │              │ Precision H2O │              │ Soil & Organics│
│ (LUX / Solar) │              │ (Hydration)   │              │ (NPK Ratio)   │
└───────┬───────┘              └───────┬───────┘              └───────┬───────┘
        │                              │                              │
        └────────────────┐             │             ┌────────────────┘
                         ▼             ▼             ▼
                  ┌──────────────────────────────────────────┐
                  │   Pruning, Air Flow & Climate Adapters   │
                  └────────────────────┬─────────────────────┘
                                       │
                                       ▼
                  ┌──────────────────────────────────────────┐
                  │ Dynamic Irrigation & Maintenance Actions │
                  └──────────────────────────────────────────┘
```

* ☀️ **Sunlight Management Controller:** Calculates real-time solar radiation and shadow mapping across 6–8 hour thresholds, adjusting plant positioning alerts according to species-specific photoperiod needs.
* 💧 **Precision Watering Protocol:** Executes dynamic irrigation formulas based on soil capacitance sensors, environmental humidity, and historical transpiration rates to eliminate overwatering risks.
* 🧪 **Soil & Organic Fertilizer Module:** Monitors macro/micronutrient depletion ratios (NPK) to output automated 100% organic fertilization delivery schedules tailored for high-density container soils.
* ✂️ **Pruning & Pest Defense System:** Uses image recognition models and seasonal growth tracking to trigger early integrated pest management (IPM) alerts and structural pruning prompts.
* 🌬️ **Air Circulation Engine:** Evaluates wind dynamics and micro-climate stagnation in urban balcony enclosures to recommend plant spatial distribution and prevent fungal vector propagation.
* 🌡️ **Climate & Seasonal Care Adapter:** Automatically recalculates baseline operational parameters across seasonal climate shifts to transition plants seamlessly between dormancy and peak flowering cycles.

---

### 3. 📊 Garden Analytics Matrix Engine

Real-time diagnostic telemetries process urban plot metrics into centralized key performance indicators:

* **18+ Plant Varieties:** Active cataloging and dynamic state tracking across diverse species profiles.
* **365 Days of Blooms:** Algorithmic floral rotation schedule ensuring uninterrupted year-round blooming.
* **100% Organic Tracking:** Strict zero-synthetic nutrient verification engine for optimal biological health.
* **4.9★ Garden Score:** System-calculated overall ecosystem viability rating derived from health indices, moisture compliance, and growth velocity metrics.

---

### 4. 🖼️ Botanical Gallery Modules

Integrates visual asset rendering pipelines across key atmospheric themes:
* **Morning Dew:** Macro-photographic analysis of transpiration and canopy dew accumulation.
* **Petal Burst:** Chronological time-lapse tracking of flowering phase transitions.
* **Urban Balcony:** Spatial layout and structural integration blueprints for dense city dwellings.
* **Velvet Textures:** High-resolution surface leaf morphology and trichome health evaluation.
* **Botanical Harmony:** Biodiversity companion-planting layout map.
* **Garden Blossoms:** Peak bloom intensity showcase and floral density monitoring.

---

---

<footer align="center" style="font-family: sans-serif; font-size: 14px; padding: 20px;">
  © 2026 Jalees Habib. All Rights Reserved. Crafted with passion for urban botany.<br />
  Collaboration: Rayaan Tasnim : User Interface Designer
</footer>