# Dynamic Property Details System - Documentation

## Overview
This system allows you to maintain a single property details page (`property-details.html`) that dynamically loads content based on the property clicked by the user.

## How It Works

### 1. Properties Database (`js/properties-data.js`)
- Contains all property information for 12 properties
- Each property has a unique ID (1-12)
- Stores: title, type, status, price, location, bedrooms, bathrooms, area, features, images, and more

### 2. Dynamic Loading
When a user clicks "View Details" on any property card:
1. The page URL includes the property ID: `property-details.html?id=3`
2. JavaScript reads the ID from the URL
3. Loads the corresponding property data from the database
4. Updates all page elements with the property's information

### 3. What Gets Updated Dynamically
- **Hero Section:**
  - Property hero image
  - Property title
  - Property address
  - Property type
  - Price (in AED)

- **Details Section:**
  - Total area
  - Number of bedrooms
  - Number of bathrooms
  - Floor information
  - Total rooms
  - Property description

- **Features:**
  - All 8 features unique to each property

- **Sidebar:**
  - Property summary card
  - Form subject line

## Property Data Structure

Each property in the database contains:
```javascript
{
    id: 1,
    title: "Modern Luxury Villa",
    type: "Villa",
    status: "Featured",
    price: "9,000,000",
    location: "Emirates Hills, Dubai",
    fullAddress: "Emirates Hills, Al Hebiah Fourth, Dubai",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,200",
    areaUnit: "sq ft",
    floor: "Ground + 1",
    floorsInFlat: 2,
    totalRooms: 7,
    description: "Full property description...",
    heroImage: "https://...",
    features: [
        "Private Swimming Pool",
        "Landscaped Garden",
        // ... more features
    ]
}
```

## Adding New Properties

To add a new property:

1. Open `js/properties-data.js`
2. Add a new entry to the `propertiesData` object:

```javascript
13: {
    id: 13,
    title: "Your New Property",
    type: "Villa",
    status: "New",
    price: "5,000,000",
    location: "Dubai Marina, UAE",
    fullAddress: "Dubai Marina, Marina Promenade",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,500",
    areaUnit: "sq ft",
    floor: "Ground + 1",
    floorsInFlat: 2,
    totalRooms: 6,
    description: "Your property description here...",
    heroImage: "URL to property image",
    features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        // Add 5-8 features
    ]
}
```

3. Add the corresponding card to `properties.html` with the property data attributes

## Updating Existing Properties

To update property information:

1. Open `js/properties-data.js`
2. Find the property by ID
3. Update any field you want to change
4. Save the file

Changes will be reflected immediately when users view that property's details page.

## Benefits

✅ **Single HTML File:** Only one `property-details.html` to maintain
✅ **Easy Updates:** Change property data in one place (`properties-data.js`)
✅ **Scalable:** Add unlimited properties without creating new pages
✅ **SEO Friendly:** Each property has a unique URL with ID parameter
✅ **Performance:** Fast loading, minimal code duplication
✅ **Maintenance:** Update design once, applies to all properties

## File Structure

```
Lucid Hills/
├── index.html              (Homepage with property slider)
├── properties.html         (All properties listing with filters)
├── property-details.html   (Dynamic property details page)
├── js/
│   ├── script.js          (Main JavaScript)
│   └── properties-data.js (Property database - NEW!)
├── css/
│   ├── styles.css
│   └── animations.css
└── Assets/
    └── [images]
```

## Testing

To test the system:

1. Open `properties.html` in a browser
2. Click "View Details" on any property card
3. The property-details page will load with that property's information
4. Try different properties to see dynamic content changes
5. Check that all fields update correctly (price, images, features, etc.)

## Price Format

All prices are displayed in AED (Arab Emirates Dirham):
- Format: "AED 9,000,000"
- Stored in database with commas: "9,000,000"
- Automatically formatted in display

## Image URLs

Currently using Unsplash demo images. To use your own:
1. Upload property images to your server
2. Update the `heroImage` URL in `properties-data.js`
3. Recommended size: 1200x600px for hero images

## Future Enhancements

Possible improvements:
- Add image gallery (multiple images per property)
- Add virtual tour integration
- Add property comparison feature
- Add favorite/save properties
- Add social sharing buttons
- Add similar properties suggestions
