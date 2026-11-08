# DevKit Lite

A lightweight, privacy-friendly collection of everyday developer tools that run entirely in the browser.

## Features

- **JSON formatter:** validate, pretty-print, and minify JSON.
- **Base64:** encode and decode UTF-8 text.
- **URL encoder:** encode and decode URL components.
- **Text statistics:** count characters, words, lines, and estimated reading time.
- **Local processing:** input is processed in the browser and is not sent to a server.

## Getting started

No build step or package installation is required.

1. Clone or download this repository.
2. Open `index.html` in a modern browser.
3. Select a tool and paste or type your input.

For local development, you can also run a static server from the project directory:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Project structure

```text
devkit-lite/
├── index.html
├── styles.css
├── app.js
├── README.md
├── LICENSE
└── .gitignore
```

## Privacy

All tool operations happen locally in your browser. The project does not include analytics, accounts, backend services, or network requests for processing user input.

## Limitations

- Base64 is an encoding format, not encryption.
- URL tools encode and decode URL components, not complete URL validation.
- Reading time is an estimate based on 200 words per minute.

## Contributing

Issues and pull requests are welcome. For substantial changes, open an issue first to discuss the proposed improvement.

## License

Released under the MIT License. See [LICENSE](LICENSE).
