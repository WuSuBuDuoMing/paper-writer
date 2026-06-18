# Contributing to Paper Writer

Thank you for your interest in Paper Writer! We welcome contributions of all kinds -- from fixing typos to adding new agents and templates.

---

## Getting Started

1. **Fork** the repository
2. **Clone** your fork
   ```bash
   git clone https://github.com/your-username/paper-writer.git
   ```
3. **Create a branch** for your changes
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** (see below for contribution types)
5. **Commit** with a clear message
   ```bash
   git commit -m "feat: add your feature description"
   ```
6. **Push** to your fork
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request** against the `main` branch

---

## Ways to Contribute

### Adding a New Agent

1. Create a new `.md` file in `.claude/agents/`
2. Follow the existing agent format:
   - Agent name and role description
   - Core capabilities (as a list)
   - Workflow steps
   - Output guidelines
3. Update `README.md` to include the new agent
4. Update `CHANGELOG.md` with your addition

### Adding a Prompt Template

1. Create a new `.md` file in `prompts/sections/`
2. Include: variable placeholders (`[PLACEHOLDER]`), output structure, writing guidelines
3. Update `README.md` with the new template
4. Add examples where possible

### Adding a Formatting Style

1. Create a new `.md` file in `prompts/styles/`
2. Cover: page setup, heading levels, in-text citation format, reference format
3. Include examples for each reference type (journal article, book, conference paper, etc.)
4. Update `README.md` and `CHANGELOG.md`

### Adding a Language Guide

1. Create a new `.md` file in `prompts/languages/`
2. Cover: academic vocabulary, common mistakes, paragraph structure
3. Include before/after examples for common writing issues
4. Update `README.md`

### Bug Fixes and Improvements

- Fix typos or errors in existing files
- Improve prompt templates for better output quality
- Add more examples to existing guides
- Improve CI workflows or project tooling

---

## Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Usage |
|--------|-------|
| `feat:` | New feature or agent |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `chore:` | Maintenance tasks |
| `refactor:` | Code restructuring without behavior change |
| `style:` | Formatting or style changes |

Examples:
```
feat: add citation-validator agent
docs: update README with new usage examples
fix: correct APA 7th reference format for online sources
```

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). We expect all contributors to foster a welcoming and inclusive environment.

---

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

<div align="center">

**Thank you for contributing!**

</div>
