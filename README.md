# Web Crawler

This simple web crawler is a command-line tool written in JavaScript that recursively crawls through all links within a given website, considering only links with the same domain. The crawler returns an object containing the number of links pointing to each other.

## Usage

To use the web crawler, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run the command:

   ```bash
   npm start [base-url]
   ```

   Replace `[base-url]` with the base URL you want to start crawling from.

## Example

```bash
npm start https://example.com
```

## Technology Used

- JavaScript
- Jest for testing

## Testing

The project includes test cases written using Jest. To run the tests, use the following command:

```bash
npm test
```

Feel free to explore and modify the code to suit your needs! If you encounter any issues or have suggestions, please open an issue or create a pull request.

Happy crawling! 🕷️