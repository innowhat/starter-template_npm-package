# starter-template_npm-package

A starter template for creating npm packages with modern tooling and automated publishing.

## Using This Template

### Quick Start

1. Click "Use this template" to create a new repository
2. Clone your new repository locally
3. Follow the setup steps below
4. Start developing your package

### Initial Setup

After creating your repository from this template:

**1. Update package.json:**

```bash
# Change these fields to match your package:
# - "name": "@your-username/your-package-name"
# - "description": "Your package description"
# - "author": "Your Name <your.email@example.com>"
# - "repository": { "url": "https://github.com/your-username/your-package-name.git" }
# - "homepage": "https://github.com/your-username/your-package-name#readme"
# - "bugs": { "url": "https://github.com/your-username/your-package-name/issues" }
```

**2. Set up npm publishing (required for automated releases):**

Create npm account (if needed):

- Sign up at [npmjs.com/signup](https://npmjs.com/signup)
- Verify your email address
- Enable 2FA for security (recommended)

Generate npm access token:

- Go to [npmjs.com/settings/tokens](https://npmjs.com/settings/tokens)
- Click "Generate New Token"
- Choose "Automation" type (for CI/CD use)
- Copy the token (you won't see it again)

Add token to GitHub repository:

- Go to: Repository Settings → Secrets and variables → Actions
- Click "New repository secret"
- Name: `NPM_TOKEN`
- Value: paste your npm automation token
- Click "Add secret"

**3. Configure branch protection (recommended):**

- Go to: Repository Settings → Branches
- Add protection rule for `main` branch:
    - Require pull request reviews
    - Require status checks to pass (CI Pipeline)
    - Require branches to be up to date

**4. Customize your package:**

```bash
npm install
```

Replace example code in `src/index.js` with your actual functionality
Update tests in `test/index.test.js`
Update this README with your package documentation

## Example Package Usage

Once published, your package can be installed and used:

### Installation

```bash
npm install @your-username/your-package-name
```

### Usage

```javascript
import { greet, capitalize } from '@your-username/your-package-name';

console.log(greet('World')); // Hello, World!
console.log(capitalize('hello')); // Hello
```

## Template Features

- **ES Modules**: Modern JavaScript with ESM and CommonJS support
- **Vitest**: Fast, modern testing framework
- **Dual Format**: Supports both `import` and `require`
- **Automated Publishing**: GitHub Actions handle testing, building, and publishing
- **Minimal Dependencies**: Only Vitest for testing
- **Complete Documentation**: Contributing and publishing guides included
- **Branch Protection**: CI checks required before merging

## Project Structure

```
/
├── .github/           # GitHub Actions workflows and templates
│   ├── workflows/     # CI and release automation
│   └── PULL_REQUEST_TEMPLATE.md
├── src/               # Source code
│   └── index.js       # Main entry point
├── test/              # Test files
│   └── index.test.js  # Test suite
├── scripts/           # Build scripts
│   └── build.js       # CommonJS build script
├── dist/              # Built files (generated)
├── vitest.config.js   # Vitest configuration
├── package.json       # Project metadata and scripts
├── README.md          # This file
├── CONTRIBUTING.md    # Contribution guidelines
├── PUBLISHING.md      # Publishing instructions
├── CHANGELOG.md       # Release notes
├── LICENSE            # MIT license
├── .gitignore         # Git ignore rules
└── .npmignore         # NPM ignore rules
```

## Development Commands

| Command                 | Description                    |
| ----------------------- | ------------------------------ |
| `npm test`              | Run tests in watch mode        |
| `npm run test:run`      | Run tests once                 |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run build`         | Build CommonJS version         |
| `npm start`             | Run the main entry point       |

## Development Workflow

```bash
# Install dependencies
npm install

# Run tests (watch mode)
npm test

# Build the package
npm run build

# Test package contents
npm pack --dry-run
```

## Documentation

- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - How to contribute code
- **[PUBLISHING.md](./PUBLISHING.md)** - How to publish releases (maintainers only)
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history and release notes

## Automated Publishing

This template includes automated publishing via GitHub Actions:

1. Create release branch with version bump
2. Update CHANGELOG.md
3. Create pull request to main
4. After merge, automation handles:
    - Tag creation
    - GitHub release
    - NPM publishing

See [PUBLISHING.md](./PUBLISHING.md) for detailed instructions.

## Prerequisites

- Node.js 18+ (check with `node --version`)
- npm account for publishing
- Git for version control

## Getting Help

- **Template Issues**: [Open an issue](https://github.com/innowhat/starter-template_npm-package/issues)
- **NPM Documentation**: [docs.npmjs.com](https://docs.npmjs.com/)
- **GitHub Actions**: [docs.github.com/actions](https://docs.github.com/actions)

## License

MIT License - see [LICENSE](./LICENSE) file for details.

---

**Ready to build your npm package?** Replace this README with documentation for your actual package once you start development.
