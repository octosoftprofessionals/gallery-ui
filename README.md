# metxr.nft Gallery UI

A whitelabel for NFT art galleries

## Project Setup

This project uses:
- Gatsby.js
- React
- Material UI
- React Hooks & Context
- OpenSea API

Setup Steps
```bash
# Install global CLIs

npm install -g gatsby-cli

# Clone and set up the project

git clone https://github.com/metxr-nft/gallery-ui.git
cd gallery-ui
npm i
npm start
```

## Project Guidelines

Guidelines
* Use a single file to hold a component and its custom styles
* Try to keep component files small and do one thing; less than 100 lines of code
* Build larger, more complex components from small, simple components
* Organize site components according to the information architecture
  * i.e. a path for a voting component might be `src/components/VotingGallery/GalleryItem/VoteButton`
* If components are used twice and are generic enough to be a UI component, go ahead and extract them
* Regarding CSS for layout (padding & margin):
  * Reasonable defaults should be defined in the parent/container
  * Special rules should be made in a relation between two components
    * i.e. h1 + p { margin: 24px 0; }
  * Avoid special margin rules in children when possible
* Write in a functional style, using hooks and context for local state
* Try to write small functions and compose them to build up complex functionality
