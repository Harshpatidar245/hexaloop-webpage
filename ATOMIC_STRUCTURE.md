# Atomic Design Structure

This project follows the **Atomic Design** methodology for component organization. This approach creates a hierarchical structure that promotes reusability, consistency, and maintainability.

## Structure Overview

```
components/
├── atoms/          # Basic building blocks
├── molecules/      # Simple groups of atoms
├── organisms/      # Complex UI sections
└── templates/      # Page-level layouts
```

## Component Hierarchy

### 🔹 Atoms (Basic Building Blocks)
The smallest, most fundamental components. They cannot be broken down further without losing their meaning.

- **Button** - Reusable button component with variants
- **Logo** - Site logo/branding
- **NavLink** - Individual navigation link

### 🔸 Molecules (Simple Combinations)
Groups of atoms that work together as a unit.

- **Navigation** - Collection of NavLinks
- **SocialLinks** - Group of social media links

### 🔶 Organisms (Complex Sections)
Complex UI components made up of molecules and/or atoms.

- **Header** - Full page header with logo, navigation, and mobile menu
- **Hero** - Hero section with content and illustration
- **MobileMenu** - Mobile navigation drawer

### 📄 Templates (Page Layouts)
Page-level layouts that define the structure of pages.

- **MainLayout** - Base layout with header

## Adding New Sections

To add new sections to the home page:

1. **Create the component** in the appropriate atomic level:
   ```tsx
   // components/organisms/Services/Services.tsx
   export const Services: React.FC = () => {
     return (
       <section className="py-20">
         {/* Your content */}
       </section>
     );
   };
   ```

2. **Import and add to page**:
   ```tsx
   // app/page.tsx
   import { Services } from '@/components/organisms/Services';
   
   export default function Home() {
     return (
       <div className="min-h-screen">
         <Header />
         <main>
           <Hero />
           <Services /> {/* New section */}
         </main>
       </div>
     );
   }
   ```

## Responsive Design

All components are built with mobile-first responsive design:

- **Mobile**: Base styles
- **Tablet**: `md:` breakpoint (768px)
- **Desktop**: `lg:` breakpoint (1024px)

### Key Responsive Features:

- ✅ Mobile hamburger menu
- ✅ Responsive grid layouts
- ✅ Flexible typography
- ✅ Touch-friendly buttons
- ✅ Optimized spacing for all screen sizes

## Styling Approach

- **Tailwind CSS** for utility-first styling
- **Custom animations** defined in globals.css
- **Consistent color palette** using CSS variables
- **Smooth transitions** and hover effects

## Best Practices

1. **Keep atoms pure** - No business logic, only presentational
2. **Molecules are reusable** - Should work in different contexts
3. **Organisms are contextual** - Can have specific business logic
4. **Templates define structure** - Focus on layout, not content
5. **Pages compose everything** - Combine templates with actual content

## Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Next Steps

Consider adding these sections:

- **Services/Features** - What you offer
- **Portfolio/Projects** - Your work showcase
- **Testimonials** - Client reviews
- **Statistics** - Key metrics
- **Contact Form** - Get in touch section
- **Footer** - Site footer with links

Each new section should be created as an organism and added to the main page.
