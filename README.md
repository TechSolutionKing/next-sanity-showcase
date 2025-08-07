# Next Sanity Showcase

# Personal Showcase Portfolio

A modern, professional portfolio website built with Next.js and Sanity CMS. Perfect for full-stack developers to showcase their projects, experience, and technical skills.

## 🚀 Features

- **Modern Design**: Clean, responsive design with dark mode support
- **CMS-Powered**: Easy content management with Sanity Studio
- **Blog System**: Built-in blog with rich text editing
- **Project Showcase**: Detailed project pages with technologies, links, and galleries
- **Experience Timeline**: Professional work experience with achievements
- **Technology Stack**: Visual representation of skills and proficiency levels
- **Contact Form**: Professional contact page with social links
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance**: Optimized for speed with Next.js 15
- **Animations**: Smooth animations with Framer Motion

## 🛠 Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animations and interactions
- **Heroicons** - Beautiful SVG icons

### CMS

- **Sanity** - Headless CMS for content management
- **Portable Text** - Rich text rendering
- **Sanity Studio** - Content editing interface

### Development

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **pnpm** - Fast package manager

## 📦 Project Structure

```
├── apps/
│   ├── frontend/          # Next.js application
│   │   ├── src/
│   │   │   ├── app/       # App Router pages
│   │   │   ├── components/ # React components
│   │   │   └── lib/       # Utilities and configurations
│   │   └── public/        # Static assets
│   └── sanity/            # Sanity Studio
│       ├── schemaTypes/   # Content schemas
│       └── static/        # Sanity assets
└── packages/              # Shared packages (future use)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+
- A Sanity account (free at [sanity.io](https://sanity.io))

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd next-sanity-showcase
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Sanity

1. **Create a Sanity Project**:
   ```bash
   cd apps/sanity
   pnpm sanity init
   ```
2. **Follow the prompts**:
   - Create a new project or use existing
   - Choose a dataset name (usually "production")
   - Note your Project ID

3. **Deploy Sanity Studio**:
   ```bash
   pnpm sanity deploy
   ```

### 4. Configure Environment Variables

Create `apps/frontend/.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

### 5. Start Development

```bash
# Start both frontend and Sanity Studio
pnpm dev

# Or start individually:
# Frontend only
cd apps/frontend && pnpm dev

# Sanity Studio only
cd apps/sanity && pnpm dev
```

The applications will be available at:

- Frontend: http://localhost:3000
- Sanity Studio: http://localhost:3333

## 📝 Content Management

### Content Types

The portfolio includes several content types in Sanity:

1. **Personal Information** (`personal`)
   - Basic info, bio, profile image
   - Social links and availability status
   - Skills and languages

2. **Projects** (`project`)
   - Project details, images, and galleries
   - Technologies used
   - GitHub and live demo links
   - Project status and timeline

3. **Technologies** (`technology`)
   - Technology stack with categories
   - Proficiency levels and experience
   - Brand colors and logos

4. **Work Experience** (`experience`)
   - Job positions and companies
   - Descriptions and achievements
   - Employment details and technologies

5. **Blog Posts** (`post`)
   - Rich text content
   - Categories and featured images
   - Author information

### Adding Content

1. **Access Sanity Studio**: Navigate to your deployed studio URL or run locally
2. **Create Personal Info**: Start with the "Personal Information" document
3. **Add Technologies**: Create technology entries for your skills
4. **Add Projects**: Showcase your best work
5. **Add Experience**: Document your work history
6. **Write Blog Posts**: Share your knowledge and insights

## 🎨 Customization

### Styling

The design uses Tailwind CSS for styling. Key customization points:

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Typography**: Customize fonts in `layout.tsx`
- **Components**: Styled components in `/src/components/`

### Content Schema

Modify content types in `apps/sanity/schemaTypes/`:

- Add new fields to existing schemas
- Create custom content types
- Modify validation rules

### Features

- **Add new pages**: Create new routes in `apps/frontend/src/app/`
- **Modify navigation**: Update `Navigation.tsx` component
- **Custom components**: Add to `apps/frontend/src/components/`

## 🚀 Deployment

### Frontend (Vercel Recommended)

1. **Connect to Vercel**:
   - Import your repository to Vercel
   - Set the root directory to `apps/frontend`
   - Add environment variables

2. **Environment Variables**:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

### Sanity Studio

Deploy your studio with:

```bash
cd apps/sanity
pnpm sanity deploy
```

### Alternative Deployments

- **Netlify**: Works with proper build settings
- **Railway**: Good for full-stack deployments
- **DigitalOcean**: App Platform support

## 📈 Performance

The portfolio is optimized for performance:

- **Next.js App Router**: Efficient routing and caching
- **Image Optimization**: Automatic WebP conversion
- **Bundle Analysis**: Use `pnpm build-analyze` to check bundle size
- **Lazy Loading**: Components and images load on demand

## 🔧 Development Scripts

```bash
# Development
pnpm dev              # Start all apps
pnpm dev:frontend     # Frontend only
pnpm dev:sanity       # Sanity only

# Build
pnpm build           # Build all apps
pnpm build:frontend  # Frontend only
pnpm build:sanity    # Sanity only

# Lint & Format
pnpm lint            # Lint all code
pnpm lint:fix        # Fix linting issues
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Commit: `git commit -m 'Add new feature'`
5. Push: `git push origin feature/new-feature`
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Issues**: [Create an issue](../../issues) for bugs or feature requests
- **Discussions**: [Start a discussion](../../discussions) for questions
- **Documentation**: Check the `/docs` folder for detailed guides

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Sanity](https://sanity.io/) for the flexible CMS
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://framer.com/motion/) for smooth animations
- [Heroicons](https://heroicons.com/) for beautiful icons

## Project Structure

```
├── apps/
│   ├── frontend/          # Next.js application
│   └── sanity/           # Sanity CMS
├── packages/             # Shared packages (if needed)
└── package.json          # Root package.json
```

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start development servers:
   ```bash
   pnpm dev
   ```

This will start both the Next.js frontend and Sanity Studio in development mode.

## Individual Commands

- **Frontend**: `pnpm --filter frontend dev`
- **Sanity**: `pnpm --filter sanity dev`

## Build

To build all projects:

```bash
pnpm build
```
