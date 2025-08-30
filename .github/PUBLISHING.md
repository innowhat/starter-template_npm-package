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

**Update Changelog:**

1. Change `## [Unreleased]` to version number with date
    - Example: `## [1.2.4] - 2020-12-24`

2. Remove empty subsections in the newly added changelog section

3. Add new empty `## [Unreleased]` section on top:

    ```markdown
    ## [Unreleased]

    ### Added

    ### Changed

    ### Fixed

    ### Deprecated

    ### Removed

    ### Security
    ```

**Bump version:**

```bash
# Choose one based on your changes:
npm version patch    # Bug fixes, small updates
npm version minor    # New features, backward compatible
npm version major    # Breaking changes

# This updates package.json and package-lock.json automatically
```

### 3. Push and Create PR

```bash
git push origin release/prepare-next-version
```

- Open PR: `release/prepare-next-version` → `main`
- Get approval from another maintainer
- Merge when CI passes

### 4. Automatic Publishing

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

**Tag already exists error?**

```bash
! [rejected] v1.0.1 -> v1.0.1 (would clobber existing tag)
```

- **Cause**: You're trying to push a tag that automation already created
- **Fix**: Just run `git fetch --tags` to get the existing tags locally

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
