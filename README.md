# Abdullah Hassan Personal Website

A modern, professional personal website built with Next.js 14, TypeScript, and Tailwind CSS. Showcasing ventures, portfolio, and expertise in AI, finance, and entrepreneurship.

## Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Interactive Components**: Animated hero section, expandable venture cards, skills dashboard
- **Portfolio Showcase**: Filterable project grid with random showcase
- **Contact Form**: Resend email integration
- **Responsive Design**: Mobile-first approach with smooth animations
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards
- **Performance**: Optimized images, lazy loading, smooth scrolling

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui patterns
- **Animations**: Framer Motion
- **Email**: Resend
- **Deployment**: Vercel

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ah-personal-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   RESEND_API_KEY=your_resend_api_key_here
   NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id_here
   NEXT_PUBLIC_CONTACT_EMAIL=abdullah.hassan@globalnext.rocks
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── (pages)/           # Route groups
│   │   ├── portfolio/     # Portfolio page
│   │   └── skills/        # Skills dashboard
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── sections/         # Page sections
│   └── layout/           # Layout components
├── lib/                  # Utilities and configs
├── uxpilot-snippets/     # UXPilot HTML snippets
└── public/               # Static assets
```

## Customization

### Colors
The website uses a custom color scheme with yellow/gold as the primary color. You can modify colors in `tailwind.config.js` and `app/globals.css`.

### Content
- Update personal information in the components
- Replace images in the `public/` directory
- Modify the contact form email in the API route

### Styling
- Custom animations are defined in `app/globals.css`
- Component styles use Tailwind CSS classes
- Responsive breakpoints follow Tailwind's default system

## Contact Form Setup

1. **Get a Resend API key**
   - Sign up at [resend.com](https://resend.com)
   - Create an API key
   - Add it to your `.env.local` file

2. **Configure email settings**
   - Update `NEXT_PUBLIC_CONTACT_EMAIL` in your environment variables
   - Modify the email template in `app/api/contact/route.ts`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or support, please contact:
- Email: abdullah.hassan@globalnext.rocks
- LinkedIn: [Abdullah Hassan](https://linkedin.com/in/abdullah-hassan)

---

Built with ❤️ by Abdullah Hassan