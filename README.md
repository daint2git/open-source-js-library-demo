# Open Source JavaScript Library Demo

## npm

### Publish

```bash
npm publish
```

### Info

```bash
npm info open-source-js-library-demo
```

## github

### Tag

```bash
# create
git tag 1.0.0

# delete
git tag -d 1.0.0

# push into Remote Git tags
git push --tags
```

### Diff

```bash
git diff
```

### Version beta

1. package.json
```json
{
  "version": "1.2.0-beta.0"
}
```

2. git tag
```bash
git tag 1.2.0-beta.0
```

3. npm publish
```bash
npm publish --tag beta
```
