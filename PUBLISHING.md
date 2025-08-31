# Publishing Guide

Simple guide for maintainers to publish new versions.

## 🎯 How It Works

When you merge a PR that changes the package version, GitHub Actions automatically:

- Creates a git tag
- Creates a GitHub release
- Publishes to npm

## 🚀 Quick Release Process

### 1. Create Release Branch

```bash
git checkout main
git pull origin main
git checkout -b release/prepare-next-version
```

### 2. Update Version & Changelog

**Bump version:**

```bash
# Choose one based on your changes:
npm version patch --no-git-tag-version    # Bug fixes, small updates
npm version minor --no-git-tag-version    # New features, backward compatible
npm version major --no-git-tag-version    # Breaking changes

# This updates package.json and package-lock.json automatically
```

**Update Changelog:**

1. **Find the `## [Unreleased]` section** in CHANGELOG.md

2. **Change it to the new version** with today's date:

    ```markdown
    ## [1.2.4] - 2025-08-31
    ```

3. **Remove any empty subsections** under the new version (keep only sections with content)

4. **Add a fresh `## [Unreleased]` section** at the top of the file:

    ```markdown
    ## [Unreleased]

    ### Added

    ### Changed

    ### Fixed

    ### Deprecated

    ### Removed

    ### Security
    ```

**Example transformation:**

#### Before:

```markdown
## [Unreleased]

### Added

- New feature X

### Fixed

- Bug Y fix

### Changed

### Removed
```

#### After:

```markdown
## [Unreleased]

### Added

### Changed

### Fixed

### Deprecated

### Removed

### Security

## [1.2.4] - 2025-08-31

### Added

- New feature X

### Fixed

- Bug Y fix
```

### 3. Push and Create PR

```bash
git push origin release/prepare-next-version
```

- Open PR: `release/prepare-next-version` → `main`
- Get approval from another maintainer
- Merge when CI passes

### 4. Create PR and Merge

- Open PR: `release/prepare-next-version` → `main`
- Get approval from another maintainer
- Merge when CI passes

### 5. Automatic Publishing

After merge, GitHub Actions automatically:

### 5. Automatic Publishing

After merge, GitHub Actions automatically:

- ✅ Creates appropriate version tag
- ✅ Creates GitHub release
- ✅ Publishes to npm

## ✅ Verification

After the automated publishing completes:

1. **Sync your local repository:**

    ```bash
    git checkout main
    git pull origin main
    git fetch --tags  # Important: Get the auto-created tag
    ```

2. **Verify publishing worked:**
    - **GitHub**: Go to [Releases](../../releases) tab
    - **NPM**: Visit [npmjs.com/package/your-package-name](https://npmjs.com/package/your-package-name)
    - **Local tags**: Run `git tag -l` to see the new tag

### ⚠️ Important: Don't Push Tags Manually

After automated publishing, **do not** try to push tags manually - they already exist:

```bash
# ❌ DON'T DO THIS - will cause "clobber existing tag" error
git push origin v1.0.1

# ✅ DO THIS INSTEAD - fetch existing tags created by automation
git fetch --tags
```

The automation creates tags on GitHub. Your job is just to fetch them locally.

## 🚨 Troubleshooting

**Local tags conflicting with automation?**

```bash
! [rejected] v1.0.1 -> v1.0.1 (would clobber existing tag)
```

- **Cause**: `npm version` created local tags that conflict with automation
- **Fix**: Use `npm version patch --no-git-tag-version` instead
- **Cleanup**: Delete local tags with `git tag -d v1.0.1` if needed

**Publishing failed?**

- Check `NPM_TOKEN` is valid in repository secrets
- Ensure package name doesn't conflict with existing packages

**Want to test before publishing?**

```bash
# Test package creation locally
npm pack --dry-run
```

## ⚡ Quick Reference

| Step             | Command                                        |
| ---------------- | ---------------------------------------------- |
| Create branch    | `git checkout -b release/prepare-next-version` |
| Update changelog | Edit `CHANGELOG.md` manually                   |
| Bump version     | `npm version patch`                            |
| Push & PR        | `git push origin release/prepare-next-version` |
| Merge → Publish  | Automatic after PR merge                       |

---

**That's it!** The automation handles the rest. 🎉
