## Installation

1. Clone the repository
2. Package the extension
   * Open Chrome and go to `chrome://extensions/`.
   * Enable "Developer mode" by toggling the switch in the top right corner.
   * Click on "Pack extension".
   * In the "Extension root directory" field, select the `src` directory of the project.
   * Click "Pack Extension".

3. Distribute the `.crx` file
   * After packaging, Chrome will generate a `.crx` file and a private key file (`.pem`). Keep the `.pem` file safe as it is used to update the extension.
   * Distribute the `.crx` file to your users.

4. Install the extension
   * Users can install the extension by dragging and dropping the `.crx` file onto the `chrome://extensions/` page.
