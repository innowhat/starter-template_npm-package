# Publishing Guide (Updated: via Feature Branch + Pull Request)

## 🚀 Overview

This project uses **automated publishing** with GitHub Actions.
The process is triggered **after a pull request is merged** into the `main` branch containing a version tag.

> 📝 You no longer create tags directly on `main` — instead, prepare the version bump in a feature branch, then merge via PR.

---

## 📋 Prerequisites

Before publishing, ensure you have:

- [ ] Maintainer access to the repository
- [ ] All intended changes have been merged into `main` branch
- [ ] CI pipeline passing on the feature branch and on `main`

---

## 🔄 Publishing Workflow

### Step 1: Create a Feature Branch for the Release

```bash
# Make sure you're on main and up to date
git checkout main
git pull origin main

# Create a release branch
git checkout -b release/v1.0.1   # Adjust version as needed
```

---

### Step 2: Choose Version Type

Decide on the release type:

- **Patch** (`1.0.0` → `1.0.1`) — Bug fixes, documentation updates
- **Minor** (`1.0.1` → `1.1.0`) — New features, backward-compatible
- **Major** (`1.1.0` → `2.0.0`) — Breaking changes

---

### Step 3: Bump Version Locally

Use npm versioning:

```bash
# For patch release
npm version patch --no-git-tag-version

# For minor release
npm version minor --no-git-tag-version

# For major release
npm version major --no-git-tag-version
```

> ⚠️ `--no-git-tag-version` is critical — you **do not** create a tag yet; that will be done automatically after merge.

---

### Step 4: Commit and Push the Release Branch

```bash
git add package.json package-lock.json
git commit -m "chore(release): v1.0.1"
git push origin release/v1.0.1
```

---

### Step 5: Open a Pull Request

- Open a PR from `release/v1.0.1` → `main`
- Request review from another maintainer
- Ensure CI checks pass

---

### Step 6: Merge the PR

Once approved and CI passes, **merge** the PR into `main`.

> 🪄 After merge, GitHub Actions will:
>
> - Tag the new version
> - Create a GitHub Release
> - Publish the package to npm

---

### Step 7: Verify the Release

1. Check GitHub Actions → confirm “Release and Publish” workflow succeeded

2. Verify:
    - ✅ GitHub release created
    - ✅ NPM package updated

3. Optionally test:

```bash
npm install your-package-name@latest
```

---

## 🚨 Troubleshooting

Most of the issues are the same, but add:

**❌ "Release PR merged but no tag created"**

- **Cause**: Workflow is not configured to create tags after merge
- **Fix**: Update release GitHub Action to run on `push` events to `main` with proper conditions

---

## 📊 Quick Reference (New Flow)

| Step                | Command/Action                                                                          |
| ------------------- | --------------------------------------------------------------------------------------- |
| Create branch       | `git checkout -b release/vX.Y.Z`                                                        |
| Bump version        | `npm version patch --no-git-tag-version`                                                |
| Commit & push       | `git add . && git commit -m "chore(release): vX.Y.Z" && git push origin release/vX.Y.Z` |
| PR → review → merge | via GitHub UI                                                                           |
| Publishing          | automated after merge                                                                   |
