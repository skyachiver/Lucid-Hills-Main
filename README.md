# Lucid Hills Real Estate Website

A modern, responsive real estate website built with HTML, CSS, and JavaScript featuring a sophisticated design with deep navy blue, golden accents, and off-white color scheme.

## Features

### 🏠 Homepage Components
- **Hero Section**: Eye-catching banner with property search functionality
- **Navigation**: Responsive navigation bar with smooth scrolling
- **Property Search**: Advanced search with filters for property type, price range, and bedrooms
- **Featured Properties**: Grid display of premium property listings
- **Neighborhood Guides**: Interactive area exploration with statistics
- **Contact Section**: Contact form and company information
- **About Section**: Company information and value propositions

### 🎨 Design Features
- **Color Scheme**: Deep navy blue (#1a2332), golden accents (#d4af37), off-white (#fafafa)
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and form validation

### ⚡ Functionality
- **Property Search**: Dynamic search with multiple filter options
- **Contact Form**: Validated contact form with real-time feedback
- **Mobile Menu**: Collapsible hamburger menu for mobile devices
- **Scroll Animations**: Elements animate into view as you scroll
- **Notification System**: Toast notifications for user feedback

## File Structure

```
Lucid Hills/
├── index.html              # Main HTML file
├── Assets/                 # Company assets
│   ├── white logo.png      # Company logo
│   └── 1.1.png            # Additional assets
├── css/
│   ├── styles.css          # Main stylesheet
│   └── image-styles.css    # Image optimization styles
├── js/
│   └── script.js           # JavaScript functionality
├── images/                 # Property and website images
└── README.md              # This file
```

## Setup Instructions

### 1. Quick Start
1. Clone or download the project files
2. Ensure all files are in the correct directory structure
3. Open `index.html` in your web browser
4. The website should load with all functionality intact

### 2. Adding Property Images
To add your own property images:
1. Place images in the `images/` folder
2. Update the `src` attributes in `index.html`:
   - `images/property1.jpg` - Modern Villa
   - `images/property2.jpg` - Penthouse Suite
   - `images/property3.jpg` - Contemporary Townhouse
   - `images/property4.jpg` - Waterfront Apartment
   - `images/beverly-hills.jpg` - Beverly Hills neighborhood
   - `images/manhattan.jpg` - Manhattan neighborhood
   - `images/malibu.jpg` - Malibu neighborhood
   - `images/about-team.jpg` - Team photo for about section

### 3. Customization

#### Update Company Information
- **Logo**: Replace `Assets/white logo.png` with your company logo
- **Contact Details**: Update phone, email, and address in the contact section
- **Company Name**: Search and replace "Lucid Hills" throughout the files

#### Modify Colors
Update the CSS variables in `css/styles.css`:
```css
:root {
    --navy-blue: #1a2332;      /* Main brand color */
    --golden-accent: #d4af37;   /* Accent color */
    --off-white: #fafafa;       /* Background color */
}
```

#### Add/Modify Properties
1. Duplicate a property card in the HTML
2. Update the image source, title, location, price, and features
3. Ensure proper grid layout is maintained

## Browser Compatibility

- **Modern Browsers**: Chrome 60+, Firefox 60+, Safari 12+, Edge 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+
- **Features Used**: CSS Grid, Flexbox, ES6 JavaScript

## Performance Features

- **Optimized Images**: Lazy loading and responsive images
- **Smooth Animations**: CSS transitions and transforms
- **Efficient JavaScript**: Debounced scroll events and optimized DOM manipulation
- **Mobile Optimized**: Touch-friendly interfaces and responsive design

## Development Notes

### JavaScript Modules
- **Navigation**: Smooth scrolling and mobile menu
- **Search**: Property search and filtering
- **Forms**: Contact form validation and submission
- **Animations**: Scroll-triggered animations and hover effects
- **Notifications**: User feedback system

### CSS Architecture
- **Variables**: Consistent color scheme and spacing
- **Mobile-First**: Responsive breakpoints starting from mobile
- **Grid Layouts**: CSS Grid for complex layouts
- **Flexbox**: Flexible component layouts

## Deployment

### Local Development
1. Open `index.html` directly in a web browser
2. Use a local server for development (optional):
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

### Production Deployment
1. Upload all files to your web server
2. Ensure proper file permissions
3. Configure any necessary redirects or SSL certificates
4. Test all functionality in the live environment

## Support

For customization help or technical support:
- Review the code comments for detailed explanations
- Check browser console for any JavaScript errors
- Ensure all file paths are correct for your server setup
- Validate HTML and CSS using online validators

## License

This project is created for Lucid Hills Real Estate. Modify and use according to your needs.

---

**Note**: Replace placeholder images and content with your actual property listings and company information before deployment.