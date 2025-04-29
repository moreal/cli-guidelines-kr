import * as fs from 'fs/promises';
import * as process from 'process';

const SEARCH_STRING = "## 서문 {#foreword}\n";

async function readStdin(): Promise<string> {
    return new Promise((resolve, reject) => {
        let data = '';
        process.stdin.setEncoding('utf8');

        process.stdin.on('readable', () => {
            let chunk;
            while ((chunk = process.stdin.read()) !== null) {
                data += chunk;
            }
        });

        process.stdin.on('end', () => {
            resolve(data);
        });

        process.stdin.on('error', (err) => {
            reject(err);
        });
    });
}

async function main() {
    // process.argv[0] is node executable, process.argv[1] is the script path
    if (process.argv.length < 3) {
        console.error("Error: Please provide the path to the credit file as the first argument.");
        process.exit(1);
    }

    const creditFilePath = process.argv[2];
    let creditContent: string;

    try {
        creditContent = await fs.readFile(creditFilePath, 'utf-8');
    } catch (error) {
        console.error(`Error reading credit file "${creditFilePath}":`, error);
        process.exit(1);
    }

    const stdinContent = await readStdin();

    const insertIndex = stdinContent.indexOf(SEARCH_STRING);

    if (insertIndex === -1) {
        console.error(`Error: Search string "${SEARCH_STRING}" not found in STDIN.`);
        // Output the original content if the marker is not found, maybe useful for debugging
        console.log(stdinContent);
        process.exit(1);
    }

    const outputContent =
        stdinContent.slice(0, insertIndex) +
        creditContent +
        stdinContent.slice(insertIndex);

    console.log(outputContent);
}

// In Node.js, scripts are typically executed directly.
// The check `if (require.main === module)` is common but often unnecessary for simple scripts.
main().catch(err => {
    console.error("An unexpected error occurred:", err);
    process.exit(1);
});
