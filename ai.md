# Abdullah Hassan Personal Website - AI.md

## Project Overview
A modern, professional personal website for Abdullah Hassan showcasing his ventures, portfolio, and expertise in AI, finance, and entrepreneurship. Built with Next.js 14, TypeScript, and modern web technologies.

## Architecture & Technologies
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Content**: Contentlayer for MDX
- **Analytics**: Vercel Analytics (switchable)
- **Email**: Resend
- **Deployment**: Vercel
- **Testing**: Jest + Testing Library

## Directory Structure
```
├── app/                    # Next.js App Router
│   ├── (pages)/           # Route groups
│   │   ├── about/         # About page
│   │   ├── ventures/      # Ventures page
│   │   ├── portfolio/     # Portfolio page
│   │   ├── gallery/       # Gallery page
│   │   ├── skills/        # Skills dashboard
│   │   └── contact/       # Contact page
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── sections/         # Page sections
│   └── layout/           # Layout components
├── lib/                  # Utilities and configs
├── content/              # MDX content
├── public/               # Static assets
├── uxpilot-snippets/     # UXPilot HTML snippets
└── styles/               # Additional styles
```

## Key Components
- **Hero Section**: Animated gradient background with professional portrait
- **About Section**: Skills dashboard with progress bars and timeline
- **Ventures Dashboard**: Interactive cards with expandable metrics
- **Portfolio**: Filterable project grid with AI random showcase
- **Skills Dashboard**: Radial progress charts and skill matrix
- **Gallery**: Professional photos with hover effects
- **Contact**: Form with Resend integration

## Development Guidelines
- Use TypeScript for all components
- Follow Next.js 14 App Router patterns
- Implement responsive design with Tailwind
- Use Framer Motion for animations
- Sanitize HTML content from UXPilot snippets
- Implement proper SEO with metadata
- Use shadcn/ui components for consistency

## Environment Configuration
```env
NEXT_PUBLIC_SITE_URL=
RESEND_API_KEY=
ANALYTICS_ID=
```

## Security Considerations
- Sanitize HTML content from external sources
- Implement CSP headers
- Validate form inputs
- Use environment variables for sensitive data

## Testing Requirements
- Unit tests for components
- Integration tests for API routes
- E2E tests for critical user flows
- Performance testing for animations

## SEO Implementation
- **Comprehensive metadata** optimization for all pages
- **Dynamic sitemap.xml** generation with proper priorities
- **Optimized robots.txt** with search engine directives
- **JSON-LD structured data** for rich snippets
- **Performance optimization** with service worker and lazy loading
- **PWA support** with manifest.json and browser config
- **Security headers** and Core Web Vitals optimization
- **Search engine verification** meta tags for GSC, Bing, Yandex, Yahoo

## Global Instructions
- Maintain consistent color scheme (yellow/gold primary)
- Use professional typography (Playfair Display + Inter)
- Implement smooth animations and transitions
- Ensure accessibility compliance
- Optimize for performance and SEO
- Keep code modular and reusable
- Follow SEO best practices for all new content
- Use structured data for enhanced search visibility

