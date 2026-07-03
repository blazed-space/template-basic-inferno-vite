# template-basic-inferno-vite
Basic template made with InfernoJS, Vite, and Tailwind.

![Screenshot](/screenshot.png)

## Introduction
This guide provides a lightweight, highly efficient single-page application (SPA) template using Inferno JS and Tailwind CSS, built with Vite, along with seamless step-by-step instructions to deploy to an Apache static server.

## Project Setup & Toolchain
Inferno JS utilizes a React-like component lifecycle but executes with blistering speed and optimized DOM updates. For local state containment and robustness without installing external state managers, we will write our main app structure as an Inferno Class Component, keeping the sub-pages as lightweight functional views.

## Running Dev Server
First, clone the repo locally.
Next, ensure you have Node.js and NPM installed, run the following command at the root of the directory:
```sh
npm install
```

Then run,
```sh
npm run dev
```

It should now be available at: [localhost:5173](http://localhost:5173/)

## Building for Production
Run the following command at the root of the directory:
```sh
npm run build
```

This script creates a clean distribution folder named dist/ containing:

* index.html
* An optimized code bundle like assets/index-[hash].js
* A production minified stylesheet like assets/index-[hash].css

💡 Important Subdirectory Deployment Note: If you are deploying this site into a subfolder directory on Apache/NGINX (e.g., https://example.com/my-subfolder/ instead of the domain root), you must update your vite.config.js to reference the subfolder mapping path using the base key:

```js
export default defineConfig({
  base: '/my-subfolder/',
  plugins: [inferno(), tailwindcss()]
});
```

### Handle Routing with .htaccess Fallbacks
While the state-based template provided above natively circumvents initial broken route entries, if you transition later to deep URL history paths (using standard packages like inferno-router), deep-linked refreshes will trigger an Apache 404 Not Found error.

To solve this, construct or modify an .htaccess file inside your public Apache root deployment directory to catch all incoming request vectors and resolve them seamlessly back through your dynamic application module structure:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # If the requested file or folder exists on disk, serve it directly
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  
  # Otherwise, route all remaining URL requests back to index.html
  RewriteRule ^ index.html [L]
</IfModule>
```



