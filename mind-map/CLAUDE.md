# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a mind mapping library and application project (思绪思维导图 / Simple Mind Map). It consists of two main parts:
1. **simple-mind-map**: A framework-agnostic JavaScript library for building web-based mind mapping applications
2. **web**: A complete Vue 2 web application that demonstrates the library's capabilities

The project supports multiple languages (Chinese, English, Traditional Chinese, Vietnamese) and can be deployed as a web application or packaged as desktop/plugin software.

## Project Structure

```
mind-map/
├── simple-mind-map/     # Core JavaScript library (framework-agnostic)
│   ├── src/
│   │   ├── core/        # Core rendering, events, commands, view management
│   │   ├── layouts/     # Different layout algorithms (MindMap, LogicalStructure, Timeline, etc.)
│   │   ├── plugins/     # Plugin system (RichText, Export, Watermark, etc.)
│   │   ├── theme/       # Theme system
│   │   ├── parse/       # Import/export parsers (markdown, xmind, etc.)
│   │   └── utils/       # Utility functions
│   ├── index.js         # Main library entry point
│   └── full.js          # Full library with all features
├── web/                 # Vue 2 demonstration application
│   ├── src/
│   │   ├── pages/Edit/  # Main editing interface with all UI components
│   │   ├── config/      # Configuration, icons, images, language configs
│   │   ├── lang/        # i18n language files
│   │   └── utils/       # Web app utilities
│   └── scripts/         # Build and utility scripts
└── dist/                # Production build output
```

## Development Commands

### Web Application (Vue 2)

```bash
# Navigate to web directory first
cd web

# Development server
npm run serve

# Production build (builds and copies to parent dist/)
npm run build

# Lint code
npm run lint

# Format code with Prettier
npm run format

# Build the library (builds simple-mind-map library)
npm run buildLibrary

# AI development server (experimental)
npm run ai:serve
```

### Simple Mind Map Library

```bash
# Navigate to library directory
cd simple-mind-map

# Lint library code
npm run lint

# Format library code
npm run format

# Generate TypeScript type definitions
npm run types

# WebSocket server for collaborative editing
npm run wsServe
```

## Architecture

### Core Library Architecture (simple-mind-map)

The library uses a **plugin-based architecture** where core functionality is minimal and features are added via plugins:

**Core Classes:**
- **MindMap** (`index.js`): Main class that orchestrates all functionality
- **Render** (`src/core/render/Render.js`): Manages node tree rendering
- **Event** (`src/core/event/Event.js`): Event system for canvas interactions
- **View** (`src/core/view/View.js`): Handles canvas pan, zoom, and transformations
- **Command** (`src/core/command/Command.js`): Command pattern for undo/redo
- **KeyCommand** (`src/core/command/KeyCommand.js`): Keyboard shortcut handling

**Layout System:**
All layouts extend `Base` (`src/layouts/Base.js`) and implement specific positioning algorithms:
- MindMap: Classic mind map layout
- LogicalStructure: Left/right logical structure
- OrganizationStructure: Top-down org chart
- Timeline/VerticalTimeline: Horizontal/vertical timelines
- Fishbone: Fishbone diagrams
- CatalogOrganization: Catalog/outline structure

**Plugin System:**
Plugins are registered with `MindMap.usePlugin()` and instantiated during initialization. Key plugins:
- **RichText**: Rich text editing in nodes
- **Export**: Export to PNG/SVG/PDF/JSON/Markdown/XMind
- **Drag**: Drag and drop nodes
- **Select**: Multi-node selection
- **MiniMap**: Overview minimap
- **Watermark**: Watermark support
- **Cooperate**: Real-time collaboration using Yjs
- **AssociativeLine**: Node relationship lines
- **Formula**: KaTeX math formula support

### Web Application Architecture (Vue 2)

**Technology Stack:**
- Vue 2.6 with Vue Router and Vuex
- Element UI for component library
- Vue-i18n for internationalization
- CodeMirror for text editing
- Quill for rich text (via simple-mind-map)

**Component Organization:**
- `pages/Edit/Index.vue`: Main editing page container
- `pages/Edit/components/`: All UI components (Toolbar, Sidebar, Style panels, etc.)
- Global state managed via Vuex (`store.js`)
- Routing configured in `router.js`

**Key Features:**
- Real-time mind map editing with the library
- Extensive style customization panels
- Import/export in multiple formats
- Theme system with multiple built-in themes
- Outline/navigator views
- Search and replace
- Node icons, images, notes, tags, formulas
- AI integration (experimental, see `utils/ai.js`)

## Key Patterns and Conventions

### Plugin Development
To create a new plugin for simple-mind-map:

```javascript
class MyPlugin {
  constructor({ mindMap, pluginOpt }) {
    this.mindMap = mindMap
    this.pluginOpt = pluginOpt
  }
  
  // Optional lifecycle methods
  beforePluginRemove() {}
  beforePluginDestroy() {}
}

// Set instance name and optional preload flag
MyPlugin.instanceName = 'myPlugin'
MyPlugin.preload = false  // true to load before core classes

// Register plugin
MindMap.usePlugin(MyPlugin, { /* options */ })
```

### Layout Development
New layouts should extend `Base` and implement:
- `doLayout(callback)`: Main layout algorithm
- `getNodeAreaSize()`: Calculate node dimensions

### Theme System
Themes are defined by extending `defaultTheme` with custom configuration. Use `MindMap.defineTheme(name, config)` to register new themes.

### Internationalization

The web app uses vue-i18n with fallback to Chinese. Language files are in `web/src/lang/`:
- `zh_cn.js`: Simplified Chinese (default/fallback)
- `zh_tw.js`: Traditional Chinese  
- `en_us.js`: English
- `vi_vn.js`: Vietnamese

**When adding new translatable strings:**

1. **Add to ALL language files** - Every string must exist in all 4 language files to prevent missing translations
2. **Use nested structure** - Group related translations:
   ```javascript
   export default {
     baseStyle: {
       title: '基础样式',  // zh_cn
       background: '背景',
       // ... more properties
     },
     setting: {
       title: '设置',
       // ... more properties
     }
   }
   ```

3. **Use in Vue components** with `$t()`:
   ```vue
   <template>
     <div>{{ $t('baseStyle.title') }}</div>
   </template>
   ```

4. **Use in JavaScript** by importing i18n:
   ```javascript
   import i18n from '@/i18n'
   const text = i18n.t('baseStyle.title')
   ```

5. **Translation workflow**:
   - Add key in `zh_cn.js` first (primary language)
   - Add English translation in `en_us.js`
   - Add Traditional Chinese in `zh_tw.js`
   - Add Vietnamese in `vi_vn.js`
   - Test language switching in UI to verify all translations appear

6. **Configuration**: i18n setup is in `web/src/i18n.js` with fallback locale set to 'zh'

### SVG Rendering
The library uses `@svgdotjs/svg.js` for all SVG manipulation. Access via:
```javascript
const { SVG, G, Rect } = mindMap.getSvgObjects()
```

## Build and Deployment

### Building for Production
```bash
cd web
npm run build
```
This builds the Vue app and copies output to the `dist/` directory at the project root.

### Docker Deployment
A Dockerfile is provided:
```bash
docker build -t mind-map .
docker run -p 80:80 mind-map
```
Uses nginx to serve the static files (see `nginx.conf`).

### Library Distribution
The library is published to npm as `simple-mind-map`. Build with:
```bash
cd web
npm run buildLibrary
```
Outputs to `simple-mind-map/dist/` with UMD and ESM bundles.

## Important Notes

- **TypeScript**: The library includes generated type definitions in `simple-mind-map/types/`
- **Performance**: The library supports a performance mode (`openPerformance` option) for large mind maps
- **Collaboration**: Real-time collaboration uses Yjs and WebRTC (see Cooperate plugin)
- **Browser Support**: Targets modern browsers (> 1%, last 2 versions, not dead)
- **License**: MIT with attribution requirement (see README for details)
- **AI Features**: Experimental AI integration exists in `web/src/utils/ai.js` and related components

## Common Tasks

### Adding a New Plugin
1. Create plugin file in `simple-mind-map/src/plugins/`
2. Implement plugin class with `instanceName` static property
3. Export from `simple-mind-map/full.js` if including in full build
4. Register in web app if needed

### Adding a New Layout
1. Create layout file in `simple-mind-map/src/layouts/`
2. Extend `Base` class and implement required methods
3. Add to layout constants in `src/constants/constant.js`
4. Import and use in `src/layouts/index.js`

### Adding UI Components
1. Create Vue component in `web/src/pages/Edit/components/`
2. Import in parent component (`Index.vue` or `Sidebar.vue`)
3. Add i18n strings to all language files
4. Update Vuex store if state management needed
