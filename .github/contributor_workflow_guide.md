# Contributing

Thank you for your interest in contributing to this project! We welcome contributions from everyone.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:

    ```bash
    git clone https://github.com/innowhat/starter-template_npm-package.git

    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Create a branch** for your changes:
    ```bash
    git checkout -b feature/your-feature-name
    ```

## Development Workflow

1. **Make your changes** in the appropriate files
2. **Write or update tests** for your changes
3. **Update CHANGELOG.md** - Add your changes to the `[Unreleased]` section:
    - Use the appropriate category: Added, Changed, Deprecated, Removed, Fixed, Security
    - Write clear, user-focused descriptions
    - Link to relevant issues/PRs when helpful (e.g., `(#123)`)
4. **Run tests** to ensure everything works:
    ```bash
    npm test
    ```
5. **Build the project** to check for issues:
    ```bash
    npm run build
    ```
6. **Commit your changes** with a clear message:
    ```bash
    git commit -m "Add: description of your changes"
    ```

## Pull Request Process

1. **Push your branch** to your fork:
    ```bash
    git push origin feature/your-feature-name
    ```
2. **Create a Pull Request** on GitHub
3. **Fill out the PR template** completely
4. **Wait for review** - we'll provide feedback and work with you on any needed changes

## Code Guidelines

- Write clear, readable code
- Add comments for complex logic
- Follow existing code style and patterns
- Include tests for new functionality
- Update documentation if needed

## Commit Messages

Use clear, descriptive commit messages:

- `Add: new feature or functionality`
- `Fix: bug fix`
- `Update: changes to existing features`
- `Docs: documentation changes`
- `Test: adding or updating tests`

## Testing

- All tests must pass before submitting a PR
- Add tests for new features or bug fixes
- Run `npm test` to execute the test suite
- Run `npm run test:coverage` to check test coverage

## Reporting Issues

When reporting bugs or requesting features:

- Use the GitHub issue templates
- Provide clear steps to reproduce (for bugs)
- Include relevant system information
- Be respectful and constructive

## Changelog Guidelines

When making changes, please update the `CHANGELOG.md` file:

### Categories

- **Added** - for new features
- **Changed** - for changes in existing functionality
- **Deprecated** - for soon-to-be removed features
- **Removed** - for now removed features
- **Fixed** - for any bug fixes
- **Security** - for vulnerability fixes

### Format Example

```markdown
## [Unreleased]

### Added

- New `slugify()` function for URL-safe strings (#42)
- Support for custom greeting prefixes in `greet()` (#38)

### Fixed

- Fixed edge case in `capitalize()` with empty strings (#41)
```

### For Maintainers (Release Process)

1. Move items from `[Unreleased]` to a new version section
2. Add the release date
3. Create a link to the version at the bottom
4. Leave `[Unreleased]` empty for future changes

## Questions?

If you have questions about contributing:

- Check existing issues and discussions
- Open a new issue with the "question" label
- Be specific about what you need help with

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Assume good intentions

Thank you for contributing! 🎉
