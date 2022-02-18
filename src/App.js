import './App.css';

import Textarea from './components/textarea.component';
import Table from './components/table.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Paste complete or partial HTML into the textarea below
        </p>
        <Textarea />
        <Table />
      </header>
    </div>
  );
}

export default App;

// The manager said you can make assumptions and just be ready to discuss what those were – saying sometimes that is better.

 

// ~~~~~~~~~~~~~~~~~

// At RedShelf, we parse accessibility metadata from ePub files. Using the following url as a reference http://kb.daisy.org/publishing/docs/metadata/evaluation.html, write a React app that parses all a11y: meta tag properties from HTML. 

// A user of the app should be able to paste complete or partial HTML into a textarea, and the app should display the parsed properties in a table that updates in real-time. The table should be able to sort its contents in ascending and descending alphabetical order. 

// You may want to use create-react-app to bootstrap the project. Please use Material UI to make it look nice, include a test or two (we use Jest, or consider mocha), and feel free to use any open-source dependency.  The code should be added to source control like github.

// ~~~~~~~~~~~~~~~~~

// Here is an example of a snippet I should be able to paste into the app (taken from the daisy.org link above) for parsing:

 

// 1.  <metadata>

// 2.  <link rel="dcterms:conformsTo"

// 3.  href="http://www.idpf.org/epub/a11y/accessibility-20170105.html#wcag-aa"/>

// 4.  <meta property="a11y:certifiedBy">Dewey, Checkett and Howe</meta>

// 5.  <meta property="a11y:certifierCredential">Certifiably Accessible</meta>

// 6.  <link rel="a11y:certifierReport"

// 7.  href="https://example.com/reports/a11y/pub.html"/>

// 8.  …

// 9.  </metadata>