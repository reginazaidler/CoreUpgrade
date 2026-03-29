# Upload `yuval-site` to GitHub

Repository target:
- https://github.com/reginazaidler/Yuval-site

## Option A (recommended): push this project as the repo root

Use these commands from `CoreUpgrade` root:

```bash
git checkout work
git pull --rebase

# create an export branch that contains only yuval-site history
git subtree split --prefix=yuval-site -b yuval-site-export

# push export branch to your GitHub repo main
git push https://github.com/reginazaidler/Yuval-site.git yuval-site-export:main --force
```

After push, your GitHub repo root will contain:
- `index.html`
- `assets/`
- `ru/`
- all Hebrew SEO folders

## Option B: manual upload as a clean repo

```bash
mkdir -p /tmp/yuval-site-publish
rsync -av --delete yuval-site/ /tmp/yuval-site-publish/
cd /tmp/yuval-site-publish

git init
git add .
git commit -m "Initial commit: Yuval bilingual marketing website"
git branch -M main
git remote add origin https://github.com/reginazaidler/Yuval-site.git
git push -u origin main --force
```

## Quick local test before upload

```bash
cd yuval-site
python -m http.server 4173
```

Open:
- http://localhost:4173/
- http://localhost:4173/ru/
