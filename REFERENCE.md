# Bonesy Design Portfolio Reference Documentation

This reference guide serves as the definitive source of truth for the **Bonesy Design Portfolio** architecture.

---

## 🏗️ UI Component Reference

### Button
**File**: `src/components/ui/button.tsx`
**Description**: Standard primitive button with multiple variants and sizes.

**Variants**:
- `default`: Primary action (Yellow background, Black text)
- `outline`: Bordered button (Transparent background, Border)
- `secondary`: Secondary action (Subtle background)
- `ghost`: Transparent button (Background on hover)
- `destructive`: Error/Destructive action (Red tint)
- `link`: Underlined link style

**Sizes**:
- `default`, `xs`, `sm`, `lg`, `icon`, `icon-xs`, `icon-sm`, `icon-lg`

**Example**:
```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="lg">Get Started</Button>
```

---

### Badge
**File**: `src/components/ui/badge.tsx`
**Description**: Small status indicator or category tag.

**Variants**:
- `default`: Solid primary badge
- `secondary`: Subtle secondary badge
- `outline`: Bordered badge
- `destructive`: Warning/Error badge

---

## ✨ Animation System

### MagneticWrapper
**File**: `src/components/animations/MagneticWrapper.tsx`
**Description**: Wraps an element and pulls it toward the mouse cursor when nearby.

**Props**:
- `children`: ReactNode (The element to animate)
- `offset`: number (Default: `0.35`. Determines the strength of the pull)

**Note**: Automatically disables on touch devices (`pointer: coarse`).

---

### CustomCursor
**File**: `src/components/animations/CustomCursor.tsx`
**Description**: Follows the system cursor with a customized, lag-buffered visual element.

---

## 📊 Data Structures

### Project Interface
**File**: `src/data/projects.ts`
**Description**: Defines the shape of a portfolio project.

```ts
export interface Project {
  id: string;             // Unique identifier
  title: string;          // Human-readable title
  description: string;    // Short description for cards
  fullDescription?: string; // Detailed description for modals
  features?: string[];    // Key features list
  role?: string[];         // Your contribution (UI Design, etc.)
  outcome?: string;       // Result of the project
  categories: string[];    // Filter tags (Web, Product, etc.)
  imageUrl: string;       // Path to project image
  imageAlt: string;       // Accessibility alt text
  gridClass: string;      // Tailwind layout classes (col-span-X)
  aspectClass: string;    // Aspect ratio classes (aspect-video, etc.)
}
```

---

## 🎨 Design System (Tailwind v4)

**File**: `src/app/globals.css`

### Core Tokens
| Variable | Value | Description |
| :--- | :--- | :--- |
| `--background` | `#131313` | Deep charcoal primary background |
| `--foreground` | `#e5e2e1` | Off-white text and primary neutral |
| `--primary` | `#f2ca50` | Signature "Bonesy Yellow" |
| `--primary-foreground`| `#241a00` | Dark background for text on primary |
| `--card` | `#201f1f` | Slightly lighter background for cards |
| `--border` | `#4d4635` | Subtle brownish border color |
| `--radius` | `0.5rem` | Base corner roundness |

---

## 🏗️ Maintenance Guides

### Adding a New Project
1.  Add a high-resolution image to `public/projects/`.
2.  Open `src/data/projects.ts`.
3.  Add a new entry to the `projects` array following the `Project` interface.
4.  Specify `gridClass` (e.g., `md:col-span-8`) and `aspectClass` (e.g., `aspect-video`) for the layout.

### Updating Personal Info
- **About Copy**: Edit `src/components/sections/About.tsx`.
- **Contact Info**: Update `src/components/sections/Contact.tsx`.
- **Testimonials**: Edit `src/components/sections/Testimonials.tsx`.

---

## 🚀 Deployment & Tech
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP (High-performance scroll/stagger)
- **Theme**: Antigravity Design (Weightless, Spatial, Glass)
- **Interactions**: MagneticWrapper / CustomCursor

---

## 🤖 Agentic Orchestration

This repository is optimized for autonomous agentic workflows.

### Antigravity Skill Orchestrator
**File**: `.agent/workflows/antigravity-skill-orchestrator.md`
**Usage**: `implement @[/antigravity-skill-orchestrator]`
**Description**: A meta-skill that evaluates task complexity and coordinates specialized skills (e.g., UX, Backend, Security) using persistent memory.

### Persistent Memory (agentMemory)
**Location**: `.agentMemory/` (Managed by `agent-memory-mcp`)
**Capabilities**:
- **Search**: `memory_search` for pattern discovery.
- **Write**: `memory_write` to record architecture decisions and skill combinations.
- **Read**: `memory_read` to retrieve specific context.
