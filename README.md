Playwright performance.measureUserAgentSpecificMemory bug. To reproduce, run:

```
git clone https://github.com/daniel-ji/playwright-measureUserAgentSpecificMemory-bug.git
cd playwright-measureUserAgentSpecificMemory-bug
npm install
npx playwright test
```

The test will log the following:

```
COOP/COEP Service Worker registered http://localhost:8080/
Reloading page to make use of updated COOP/COEP Service Worker.
Cross-Origin-Isolated
measureUserAgentSpecificMemory supported
Getting memory...
Error:  DOMException: Failed to execute 'measureUserAgentSpecificMemory' on 'Performance': performance.measureUserAgentSpecificMemory is not available.
    at http://localhost:8080/:29:16
```

Note how the `measureUserAgentSpecificMemory` method is supported, but still throws an error when called.