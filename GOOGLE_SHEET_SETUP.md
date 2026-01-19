# How to set up Google Spreadsheet Integration (Direct API)

To store your School of Ministry application data directly in a Google Spreadsheet using the Google Sheets API, follow these steps:

### 1. Create a Google Cloud Project & Service Account
1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  Create a new project or select an existing one.
3.  In the search bar, look for **"Google Sheets API"** and click **Enable**.
4.  Go to **APIs & Services** > **Credentials**.
5.  Click **Create Credentials** > **Service Account**.
6.  Fill in the service account name (e.g., "church-site-app") and click **Create and Continue**.
7.  (Optional) Grant it the role of "Editor" and click **Done**.

### 2. Generate the Private Key
1.  In the Credentials page, you will see your new Service Account listed under **Service Accounts**. Click on its email address.
2.  Go to the **Keys** tab.
3.  Click **Add Key** > **Create new key**.
4.  Select **JSON** and click **Create**.
5.  A JSON file will be downloaded to your computer. **This file contains your Private Key.**

### 3. Get the Credentials from the JSON file
Open the downloaded JSON file. You will need these three fields:
*   `client_email`: This looks like `your-service-account@your-project.iam.gserviceaccount.com`.
*   `private_key`: This is a long string starting with `-----BEGIN PRIVATE KEY-----`.

### 4. Prepare your Google Sheet
1.  Create a new Google Spreadsheet.
2.  Note the **Spreadsheet ID** from the URL: 
    `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_IS_HERE/edit`
3.  **IMPORTANT**: Click the **Share** button in the top right of your spreadsheet.
4.  Paste the `client_email` from your JSON file and give it **Editor** access. (The API cannot write to the sheet if you don't share it with the service account).
5.  Ensure the first tab is named `Sheet1` (this matches the code).

### 5. Update your `.env` file
Add the following variables to your `.env` file:

```env
GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYourKeyContent\n-----END PRIVATE KEY-----\n"
SPREADSHEET_ID=your_spreadsheet_id_from_url
```

> **Note on Private Key**: When pasting the `private_key` into `.env`, make sure it is wrapped in quotes and that any actual newlines in the key are represented as `\n`. The code is designed to handle this.

### 6. Restart your development server
Run `npm run dev` to apply the changes.
