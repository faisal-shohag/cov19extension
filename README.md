# cov19extension
<small> Made with React! </small><br>
<img src="https://github.com/faisalbrur/cov19extension/blob/master/demo%20pic.png?raw=true" height="300px" width="610px" />
<br>
<h3> How to install this covid19Ex.crx file?</h3>
  1. Download it <br>
  2. Open Chrome and goto chrome://extensions<br>
  3. Drag & drop this file<br>
  
 <h3>How to create a chrome extension?</h3>
 <b>Without any framework:</b><br />
 <ul>
  <ol> 1. Create a menifest.json file inside a folder</ol>
  <ol> 2. Paste this:
    <code> <pre>
    {
  "manifest_version": 2,
  "version": "1.0",
  "name": "Covid19 Updates",
  "description": "Get covid-19 updates.",
  "icons": {
    "16": "icon16.png",
    "48": "icon16.png",
    "128": "icon16.png"
  },
  "browser_action": {
      "default_popup": "index.html"
  }
}
</pre>
    </code>
    You can edit this on your own way!
  </ol>
  <ol>3. Create an index.html file <br> Don't write directly any css or Javascript code.</ol>
  <ol>4. Create js & css file and link-up with the index.html file</ol>
  <ol>5. Now Open Chrome and goto chrome://extensions </ol>
  <ol>6. Turn on Developer mode. You'll see it top-right side.</ol>
  <ol>7. Click Load unpacked and select your folder where all the files you have created.</ol>
  
</ul>
