# CDM Server - Centralized Download Manager Server

## What is the CDM Server?

The **CDM Server** (Centralized Download Manager Server) is a web-based backend service developed by Aron Radics (radaron) in TypeScript. It serves as the central component of a download management ecosystem that integrates with torrent trackers and provides a unified interface for managing media downloads.

## Architecture and Purpose

### Core Function
The CDM Server acts as a **centralized hub** for managing downloads from various sources, primarily focusing on torrent-based content. It provides a web interface and API that allows users to:

1. **Search and filter** content across multiple sources
2. **Manage download queues** and priorities  
3. **Track download progress** and statistics
4. **Organize content** with metadata and categorization
5. **Provide unified access** to distributed download resources

### Integration with nCore.pro
Based on the research, the CDM ecosystem heavily integrates with **nCore.pro**, which is a private Hungarian torrent tracker. The system includes:

- **ncoreparser**: A Python API library for interacting with ncore.pro
- **Automated search capabilities** that can query nCore for specific content
- **Direct torrent downloading** from the tracker
- **Metadata extraction** including IMDb IDs and content information

## System Components

The CDM Server works as part of a larger ecosystem:

### 1. **CDM Server (TypeScript)**
- **Backend API service** that handles requests and manages data
- **Web interface** for user interaction and administration
- **Database integration** for storing metadata and download history
- **Search and filtering endpoints** that the IMDb extension uses
- **Content management** with organization and categorization

### 2. **CDM Client (Python)**  
- **Download execution engine** that handles the actual file transfers
- **Torrent client integration** (works with transmission and similar)
- **Local storage management** for organizing downloaded content
- **Progress reporting** back to the server

### 3. **CDM IMDb Button Extension (Browser)**
- **Bridge between IMDb and CDM** for seamless content discovery
- **One-click integration** from movie browsing to download initiation
- **Pre-filtered search** that passes IMDb IDs to the CDM server

## How the CDM Server Works

### User Workflow
1. **Content Discovery**: User browses IMDb and finds interesting content
2. **Quick Access**: Clicks the CDM button to open the server interface
3. **Search Results**: Server automatically searches for that content using the IMDb ID
4. **Download Management**: User can select quality, format, and initiate downloads
5. **Monitoring**: Track progress and manage the download queue

### Technical Workflow
```
IMDb Page → CDM Button → CDM Server API → Search Backend → nCore.pro
                                      ↓
Download Queue ← CDM Client ← Download Instructions ← Server Database
```

### Key Features (Inferred)
- **Multi-source searching**: Can search across different torrent trackers
- **Quality filtering**: Filter by resolution, format, language, etc.
- **Automated downloads**: Integration with torrent clients for hands-off downloading
- **Progress tracking**: Real-time status updates on downloads
- **Content organization**: Metadata-driven organization and categorization
- **User management**: Multi-user support with individual preferences

## API Endpoints (Estimated)

Based on the extension code, the CDM Server likely provides endpoints such as:

- `GET /manage/download?pattern={imdbId}&searchWhere=imdb&searchCategory=all_own`
- `POST /api/search` - Search for content
- `GET /api/downloads` - Get download status
- `POST /api/downloads` - Start new download
- `GET /api/torrents` - List available torrents

## Technical Stack

- **Backend**: TypeScript (Node.js/Express likely)
- **Integration**: Python scripts for torrent tracker communication
- **Storage**: Database for metadata and user preferences
- **APIs**: RESTful endpoints for client communication
- **Authentication**: User session management
- **Real-time**: WebSocket or polling for status updates

## Use Cases

### Personal Media Server
- **Automated downloading** of movies and TV shows
- **Quality management** ensuring consistent format preferences
- **Collection building** with organized storage structure

### Home Network Management  
- **Centralized control** of downloads across multiple devices
- **Bandwidth management** with download scheduling
- **Shared access** for family members with individual preferences

### Content Curation
- **Watchlist management** integrated with IMDb browsing
- **Quality upgrades** automatically replacing lower-quality versions
- **Series tracking** with automatic episode downloading

## Privacy and Legal Considerations

The CDM Server is designed to work with private torrent trackers like nCore.pro, which typically:
- **Require membership** and maintain ratios
- **Focus on quality content** with proper categorization
- **Operate in specific jurisdictions** with their own legal frameworks
- **Emphasize sharing** rather than commercial distribution

## Deployment

The CDM Server is likely designed to be:
- **Self-hosted** on personal servers or NAS devices
- **Docker-compatible** for easy deployment
- **Configurable** for different torrent trackers and clients
- **Scalable** for single-user or family use

## Summary

The CDM Server represents a sophisticated approach to modern media management, bridging the gap between content discovery (via IMDb) and actual acquisition. It transforms the typically fragmented process of finding, downloading, and organizing digital media into a streamlined, automated workflow.

By centralizing download management and providing smart integration with popular services like IMDb, the CDM Server enables users to build comprehensive digital media libraries with minimal manual intervention, while maintaining quality standards and organizational structure.