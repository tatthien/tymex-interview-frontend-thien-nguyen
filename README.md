# tymex-interview-frontend-thien-nguyen

Tymex's frontend interview project. Live demo: https://tymex-interview-frontend-thien-nguyen.vercel.app/

## Installation

```bash
pnpm install
```

### Development

Firstly, creating a `.env` file in the root directory with the following content:

```bash
# This variable is used to set the base URL of the API
NEXT_PUBLIC_BASE_API_URL=<your-api-url>
```

To start the development server, run the following command:

```bash
pnpm dev # Default port is 3000

# Or you can use your own port
pnpm dev --port <custom-port>
```

### Build

To build the project, run the following command:

```bash
pnpm build
```

### Other commands

```bash
# Linting and formatting
pnpm lint --fix && pnpm format

# Runing unit tests
pnpm test
```
