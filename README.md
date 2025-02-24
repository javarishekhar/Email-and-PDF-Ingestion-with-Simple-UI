Overview

This application allows users to configure multiple email accounts (IMAP, POP3, Gmail API, Outlook/Graph API) and automatically fetch PDF attachments from incoming emails. The PDFs are saved locally, and metadata is stored in a PostgreSQL database using Prisma.


This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

Features

UI to configure email accounts (add, edit, remove).

Supports multiple email providers (IMAP, POP3, Gmail API, Outlook/Graph API).

Automatically checks inboxes for new emails with PDF attachments.

Downloads PDFs locally into ./pdfs/.

Stores metadata including:

Sender email address

Date received

Email subject

Attachment filename

Notes

Credentials can be stored in .env or the Prisma database.

No encryption is required for this test.

Logs will capture errors related to invalid credentials or attachment issues.

License

MIT License
