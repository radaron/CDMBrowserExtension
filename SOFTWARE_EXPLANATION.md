# CDM IMDb Button Extension - Software Overview

## What This Software Does

The **CDM IMDb Button Extension** is a browser extension (compatible with Chrome and Firefox) that integrates IMDb movie/TV series pages with a Centralized Download Manager (CDM) system. It adds a convenient "CDM" button to IMDb pages that allows users to quickly navigate to their download manager with pre-filled search parameters.

## Core Functionality

### 1. **Button Injection**
- Automatically detects when a user visits an IMDb movie or TV series page
- Injects a styled "CDM" button next to the movie/series title
- Uses DOM mutation observers to handle dynamic page loading

### 2. **IMDb Integration**
- Monitors IMDb pages matching the pattern `*://www.imdb.com/*`
- Extracts the IMDb ID (e.g., "tt1234567") from the current page URL
- Locates the movie title element using the data attribute `[data-testid=hero__primary-text]`

### 3. **CDM Server Communication**
- Stores user's CDM server URL in browser storage (configurable via options page)
- When the CDM button is clicked, opens the CDM download page in a new tab
- Passes the IMDb ID as search parameters to pre-filter results

### 4. **Cross-Browser Compatibility**
- Uses Manifest V3 for modern browser support
- Handles both Chrome and Firefox storage APIs
- Includes browser-specific settings for Firefox

## Technical Architecture

### Files Structure:
```
cdm/
├── manifest.json          # Extension configuration
├── content.js            # Main injection script
├── content.css           # Button styling
├── options/
│   ├── options.html      # Configuration interface
│   └── options.js        # Settings management
└── icons/                # Extension icons (16px, 48px, 128px)
```

### Key Components:

#### **Content Script (`content.js`)**
- **Purpose**: Injects the CDM button into IMDb pages
- **How it works**:
  1. Waits for the page to load and finds the movie title element
  2. Creates a styled button with individual colored letters (C-D-M)
  3. Attaches click handler that extracts IMDb ID and redirects to CDM server
  4. Uses MutationObserver to handle dynamic content loading

#### **Options Page (`options/`)**
- **Purpose**: Allows users to configure their CDM server URL
- **Features**:
  - Simple form with text input for CDM server URL
  - Save/load functionality using browser storage
  - Status feedback when settings are saved

#### **Styling (`content.css`)**
- **Purpose**: Makes the CDM button visually appealing
- **Features**:
  - Black background with colored letters (Green-Blue-Red)
  - Hover effects
  - Rounded corners and text shadow
  - Positioned next to movie title

## User Workflow

1. **Setup**: User installs extension and configures CDM server URL in options
2. **Browse**: User visits any IMDb movie/series page
3. **Interact**: Extension automatically adds CDM button next to title
4. **Download**: User clicks CDM button → opens CDM server with movie pre-filtered
5. **Result**: User can immediately see available downloads for that specific movie/series

## Integration with CDM Ecosystem

This extension is part of a larger CDM (Centralized Download Manager) ecosystem:
- **CDM Server**: Backend system that manages downloads and indexing
- **CDM Client**: Likely a download client application
- **CDM IMDb Button**: This browser extension for easy access

The extension creates a seamless bridge between IMDb browsing and download management, eliminating the need to manually search for content on the CDM server.

## Technical Requirements

- **Permissions**: Storage (for saving CDM server URL)
- **Browser Support**: Chrome (Manifest V3) and Firefox
- **Dependencies**: None (vanilla JavaScript)
- **External Services**: User's configured CDM server

## Build Process

The project includes a simple Makefile that:
- Packages the extension into a zip file (`cdm.zip`)
- Suitable for uploading to browser extension stores

This software essentially streamlines the workflow for users who want to find downloadable content by providing a one-click bridge from IMDb movie pages to their personal download management system.