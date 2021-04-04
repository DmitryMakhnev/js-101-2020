
export const ArticleContent = () => (
  <div dangerouslySetInnerHTML={{__html: articleContentData}} />
);

/**
 * In normal case you should get this form server
 */
const articleContentData: string = `
<h2><span class="mw-headline" id="History">History</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=1" title="Edit section: History">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<h3><span class="mw-headline" id="Creation_at_Netscape">Creation at Netscape</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=2" title="Edit section: Creation at Netscape">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>The <a href="/wiki/Mosaic_(web_browser)" title="Mosaic (web browser)">Mosaic</a> <a href="/wiki/Web_browser" title="Web browser">web browser</a> was released in 1993. As the first browser with a <a href="/wiki/Graphical_user_interface" title="Graphical user interface">graphical user interface</a> accessible to non-technical people, it played a prominent role in the rapid growth of the nascent <a href="/wiki/World_Wide_Web" title="World Wide Web">World Wide Web</a>.<sup id="cite_ref-12" class="reference"><a href="#cite_note-12">&#91;12&#93;</a></sup> The lead developers of Mosaic then founded the <a href="/wiki/Netscape" title="Netscape">Netscape</a> corporation, which released a more polished browser, <a href="/wiki/Netscape_Navigator" title="Netscape Navigator">Netscape Navigator</a>, in 1994. Navigator quickly became the most used browser.<sup id="cite_ref-13" class="reference"><a href="#cite_note-13">&#91;13&#93;</a></sup>
</p><p>During these formative years of the Web, <a href="/wiki/Web_page" title="Web page">web pages</a> could only be static, lacking the capability for dynamic behavior after the page was loaded in the browser. There was a desire in the burgeoning web development scene to remove this limitation, so in 1995, Netscape decided to add a <a href="/wiki/Scripting_language" title="Scripting language">scripting language</a> to Navigator. They pursued two routes to achieve this: collaborating with <a href="/wiki/Sun_Microsystems" title="Sun Microsystems">Sun Microsystems</a> to embed the <a href="/wiki/Java_(programming_language)" title="Java (programming language)">Java</a> <a href="/wiki/Programming_language" title="Programming language">programming language</a>, while also hiring <a href="/wiki/Brendan_Eich" title="Brendan Eich">Brendan Eich</a> to embed the <a href="/wiki/Scheme_(programming_language)" title="Scheme (programming language)">Scheme</a> language.<sup id="cite_ref-origin_5-2" class="reference"><a href="#cite_note-origin-5">&#91;5&#93;</a></sup>
</p><p>Netscape management soon decided that the best option was for Eich to devise a new language, with syntax similar to Java and less like Scheme or other extant scripting languages.<sup id="cite_ref-looklikejava_4-1" class="reference"><a href="#cite_note-looklikejava-4">&#91;4&#93;</a></sup><sup id="cite_ref-origin_5-3" class="reference"><a href="#cite_note-origin-5">&#91;5&#93;</a></sup> Although the new language and its <a href="/wiki/Interpreter_(computing)" title="Interpreter (computing)">interpreter</a> implementation were officially called LiveScript when first shipped as part of a Navigator release in September 1995, the name was changed to JavaScript three months later.<sup id="cite_ref-origin_5-4" class="reference"><a href="#cite_note-origin-5">&#91;5&#93;</a></sup><sup id="cite_ref-press_release_1-1" class="reference"><a href="#cite_note-press_release-1">&#91;1&#93;</a></sup><sup id="cite_ref-techvision_14-0" class="reference"><a href="#cite_note-techvision-14">&#91;14&#93;</a></sup>
</p><p>The choice of the JavaScript name has caused confusion, sometimes giving the impression that it is a spin-off of Java. Since Java was the hot new programming language at the time, this has been characterized as a marketing ploy by Netscape to give its own new language cachet.<sup id="cite_ref-15" class="reference"><a href="#cite_note-15">&#91;15&#93;</a></sup>
</p>
<h3><span class="mw-headline" id="Adoption_by_Microsoft">Adoption by Microsoft</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=3" title="Edit section: Adoption by Microsoft">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p><a href="/wiki/Microsoft" title="Microsoft">Microsoft</a> debuted <a href="/wiki/Internet_Explorer" title="Internet Explorer">Internet Explorer</a> in 1995, leading to a <a href="/wiki/Browser_war" class="mw-redirect" title="Browser war">browser war</a> with Netscape. On the JavaScript front, Microsoft <a href="/wiki/Reverse_engineering#Reverse_engineering_of_software" title="Reverse engineering">reverse-engineered</a> the Navigator <a href="/wiki/Interpreter_(computing)" title="Interpreter (computing)">interpreter</a> to create its own, called <a href="/wiki/JScript" title="JScript">JScript</a>.
</p><p>JScript was first released in 1996, alongside initial support for <a href="/wiki/CSS" title="CSS">CSS</a> and extensions to <a href="/wiki/HTML" title="HTML">HTML</a>. Each of these implementations was noticeably different from their counterparts in Navigator.<sup id="cite_ref-O&#39;Reilly-2001_16-0" class="reference"><a href="#cite_note-O&#39;Reilly-2001-16">&#91;16&#93;</a></sup><sup id="cite_ref-17" class="reference"><a href="#cite_note-17">&#91;17&#93;</a></sup> These differences made it difficult for developers to make their websites work well in both browsers, leading to widespread use of "best viewed in Netscape" and "best viewed in Internet Explorer" logos for several years.<sup id="cite_ref-O&#39;Reilly-2001_16-1" class="reference"><a href="#cite_note-O&#39;Reilly-2001-16">&#91;16&#93;</a></sup><sup id="cite_ref-18" class="reference"><a href="#cite_note-18">&#91;18&#93;</a></sup>
</p>
<h3><span class="mw-headline" id="The_rise_of_JScript">The rise of JScript</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=4" title="Edit section: The rise of JScript">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>In November 1996, <a href="/wiki/Netscape" title="Netscape">Netscape</a> submitted JavaScript to <a href="/wiki/Ecma_International" title="Ecma International">ECMA International</a>, as the starting point for a standard specification that all browser vendors could conform to. This led to the official release of the first <a href="/wiki/ECMAScript" title="ECMAScript">ECMAScript</a> language specification in June 1997.
</p><p>The standards process continued for a few years, with the release of ECMAScript 2 in June 1998 and ECMAScript 3 in December 1999. Work on ECMAScript 4 began in 2000.
</p><p>Meanwhile, <a href="/wiki/Microsoft" title="Microsoft">Microsoft</a> gained an increasingly dominant position in the browser market. By the early 2000s, Internet Explorer's market share reached 95%.<sup id="cite_ref-searchenginejournal.com_19-0" class="reference"><a href="#cite_note-searchenginejournal.com-19">&#91;19&#93;</a></sup> This meant that <a href="/wiki/JScript" title="JScript">JScript</a> became the de facto standard for <a href="/wiki/Client-side_scripting" class="mw-redirect" title="Client-side scripting">client-side scripting</a> on the Web.
</p><p>Microsoft initially participated in the standards process and implemented some proposals in its JScript language, but eventually it stopped collaborating on ECMA work. Thus ECMAScript 4 was mothballed.
</p>
<h3><span class="mw-headline" id="Growth_and_standardization">Growth and standardization</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=5" title="Edit section: Growth and standardization">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>During the period of <a href="/wiki/Internet_Explorer" title="Internet Explorer">Internet Explorer</a> dominance in the early 2000s, client-side scripting was stagnant. This started to change in 2004, when the successor of Netscape, <a href="/wiki/Mozilla" title="Mozilla">Mozilla</a>, released the <a href="/wiki/Firefox" title="Firefox">Firefox</a> browser. Firefox was well received by many, taking significant market share from Internet Explorer.<sup id="cite_ref-20" class="reference"><a href="#cite_note-20">&#91;20&#93;</a></sup>
</p><p>In 2005, Mozilla joined ECMA International, and work started on the <a href="/wiki/ECMAScript_for_XML" title="ECMAScript for XML">ECMAScript for XML</a> (E4X) standard. This led to Mozilla working jointly with <a href="/wiki/Macromedia" title="Macromedia">Macromedia</a> (later acquired by <a href="/wiki/Adobe_Systems" class="mw-redirect" title="Adobe Systems">Adobe Systems</a>), who were implementing E4X in their ActionScript 3 language, which was based on an ECMAScript 4 draft. The goal became standardizing ActionScript 3 as the new ECMAScript 4. To this end, Adobe Systems released the <a href="/wiki/Tamarin_(software)" title="Tamarin (software)">Tamarin</a> implementation as an <a href="/wiki/Open-source_model" title="Open-source model">open source</a> project. However, Tamarin and ActionScript 3 were too different from established client-side scripting, and without cooperation from <a href="/wiki/Microsoft" title="Microsoft">Microsoft</a>, ECMAScript 4 never reached fruition.
</p><p>Meanwhile, very important developments were occurring in open-source communities not affiliated with ECMA work. In 2005, <a href="/wiki/Jesse_James_Garrett" title="Jesse James Garrett">Jesse James Garrett</a> released a white paper in which he coined the term <a href="/wiki/Ajax_(programming)" title="Ajax (programming)">Ajax</a> and described a set of technologies, of which JavaScript was the backbone, to create <a href="/wiki/Web_application" title="Web application">web applications</a> where data can be loaded in the background, avoiding the need for full page reloads. This sparked a renaissance period of JavaScript, spearheaded by open-source libraries and the communities that formed around them. Many new libraries were created, including <a href="/wiki/JQuery" title="JQuery">jQuery</a>, <a href="/wiki/Prototype_JavaScript_Framework" title="Prototype JavaScript Framework">Prototype</a>, <a href="/wiki/Dojo_Toolkit" title="Dojo Toolkit">Dojo Toolkit</a>, and <a href="/wiki/MooTools" title="MooTools">MooTools</a>.
</p><p><a href="/wiki/Google" title="Google">Google</a> debuted its <a href="/wiki/Google_Chrome" title="Google Chrome">Chrome</a> browser in 2008, with the <a href="/wiki/V8_(JavaScript_engine)" title="V8 (JavaScript engine)">V8</a> JavaScript engine that was faster than its competition.<sup id="cite_ref-21" class="reference"><a href="#cite_note-21">&#91;21&#93;</a></sup><sup id="cite_ref-22" class="reference"><a href="#cite_note-22">&#91;22&#93;</a></sup> The key innovation was <a href="/wiki/Just-in-time_compilation" title="Just-in-time compilation">just-in-time compilation</a> (JIT),<sup id="cite_ref-23" class="reference"><a href="#cite_note-23">&#91;23&#93;</a></sup> so other browser vendors needed to overhaul their engines for JIT.<sup id="cite_ref-24" class="reference"><a href="#cite_note-24">&#91;24&#93;</a></sup>
</p><p>In July 2008, these disparate parties came together for a conference in <a href="/wiki/Oslo" title="Oslo">Oslo</a>. This led to the eventual agreement in early 2009 to combine all relevant work and drive the language forward. The result was the ECMAScript 5 standard, released in December 2009.
</p>
<h3><span class="mw-headline" id="Reaching_maturity">Reaching maturity</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=6" title="Edit section: Reaching maturity">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>Ambitious work on the language continued for several years, culminating in an extensive collection of additions and refinements being formalized with the publication of <a href="/wiki/ECMAScript" title="ECMAScript">ECMAScript</a> 6 in 2015.<sup id="cite_ref-25" class="reference"><a href="#cite_note-25">&#91;25&#93;</a></sup>
</p><p>The draft specification is currently maintained openly on <a href="/wiki/GitHub" title="GitHub">GitHub</a>, and ECMAScript editions are produced via regular annual snapshots.<sup id="cite_ref-branscombe_26-0" class="reference"><a href="#cite_note-branscombe-26">&#91;26&#93;</a></sup> Potential revisions to the language are vetted through a comprehensive proposal process.<sup id="cite_ref-27" class="reference"><a href="#cite_note-27">&#91;27&#93;</a></sup><sup id="cite_ref-28" class="reference"><a href="#cite_note-28">&#91;28&#93;</a></sup> Now, instead of edition numbers, developers check the status of upcoming features individually.<sup id="cite_ref-branscombe_26-1" class="reference"><a href="#cite_note-branscombe-26">&#91;26&#93;</a></sup>
</p><p>The current JavaScript ecosystem has many <a href="/wiki/List_of_JavaScript_libraries" title="List of JavaScript libraries">libraries and frameworks</a>, established programming practices, and increased usage of JavaScript outside of web browsers. Plus, with the rise of <a href="/wiki/Single-page_application" title="Single-page application">single-page applications</a> and other JavaScript-heavy websites, a number of <a href="/wiki/Source-to-source_compiler" title="Source-to-source compiler">transpilers</a> have been created to aid the development process.<sup id="cite_ref-transpilers_29-0" class="reference"><a href="#cite_note-transpilers-29">&#91;29&#93;</a></sup>
</p>
<h2><span class="mw-headline" id="Trademark">Trademark</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=7" title="Edit section: Trademark">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<p>"JavaScript" is a <a href="/wiki/Trademark" title="Trademark">trademark</a> of <a href="/wiki/Oracle_Corporation" title="Oracle Corporation">Oracle Corporation</a> in the United States.<sup id="cite_ref-30" class="reference"><a href="#cite_note-30">&#91;30&#93;</a></sup> It is used under license for technology invented and implemented by Netscape Communications and other parties.<sup id="cite_ref-31" class="reference"><a href="#cite_note-31">&#91;31&#93;</a></sup>
</p>
<h2><span class="mw-headline" id="Website_client-side_usage">Website client-side usage</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=8" title="Edit section: Website client-side usage">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<p>JavaScript is the dominant <a href="/wiki/Client-side" title="Client-side">client-side</a> scripting language of the Web, with 97% of <a href="/wiki/Website" title="Website">websites</a> using it for this purpose.<sup id="cite_ref-deployedstats_11-1" class="reference"><a href="#cite_note-deployedstats-11">&#91;11&#93;</a></sup> Scripts are embedded in or included from <a href="/wiki/HTML" title="HTML">HTML</a> documents and interact with the DOM. All major <a href="/wiki/Web_browser" title="Web browser">web browsers</a> have a built-in <a href="/wiki/JavaScript_engine" title="JavaScript engine">JavaScript engine</a> that executes the code on the user's device.
</p>
<h3><span class="mw-headline" id="Examples_of_scripted_behavior">Examples of scripted behavior</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=9" title="Edit section: Examples of scripted behavior">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<div role="note" class="hatnote navigation-not-searchable">See also: <a href="/wiki/Dynamic_HTML" title="Dynamic HTML">Dynamic HTML</a> and <a href="/wiki/Ajax_(programming)" title="Ajax (programming)">Ajax (programming)</a></div>
<ul><li>Loading new page content without reloading the page. For example, <a href="/wiki/Social_media" title="Social media">social media</a> websites use Ajax so that users can post new messages without leaving the page.</li>
<li>Animation of page elements, such as fading them in and out, resizing, and moving them.</li>
<li>Interactive content, such as games and video.</li>
<li><a href="/wiki/Data_validation" title="Data validation">Validating</a> input values of a <a href="/wiki/Form_(HTML)" title="Form (HTML)">web form</a> to make sure that they are acceptable before being submitted to the server.</li>
<li>Transmitting information about the user's behavior for <a href="/wiki/Web_analytics" title="Web analytics">analytics</a>, <a href="/wiki/Ad_tracking" title="Ad tracking">ad tracking</a>, and <a href="/wiki/Personalization" title="Personalization">personalization</a>.</li></ul>
<h3><span class="mw-headline" id="Libraries_and_frameworks">Libraries and frameworks</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=10" title="Edit section: Libraries and frameworks">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>The majority of websites use a third-party <a href="/wiki/JavaScript_library" title="JavaScript library">JavaScript library</a> or <a href="/wiki/Web_application_framework" class="mw-redirect" title="Web application framework">web application framework</a> as part of their client-side page scripting.<sup id="cite_ref-lib_usage_32-0" class="reference"><a href="#cite_note-lib_usage-32">&#91;32&#93;</a></sup>
</p><p><a href="/wiki/JQuery" title="JQuery">jQuery</a> is the most popular library, used by over 70% of websites.<sup id="cite_ref-lib_usage_32-1" class="reference"><a href="#cite_note-lib_usage-32">&#91;32&#93;</a></sup>
</p><p>The <a href="/wiki/Angular_(web_framework)" title="Angular (web framework)">Angular</a> framework was created by <a href="/wiki/Google" title="Google">Google</a> for its web services; it is now <a href="/wiki/Open-source_software" title="Open-source software">open source</a> and used by other websites. Likewise, <a href="/wiki/Facebook" title="Facebook">Facebook</a> created the <a href="/wiki/React_(web_framework)" class="mw-redirect" title="React (web framework)">React</a> framework for its website and later released it as open source; other sites, including <a href="/wiki/Twitter" title="Twitter">Twitter</a>, now use it. There are other open source frameworks in use, such as <a href="/wiki/Backbone.js" title="Backbone.js">Backbone.js</a> and <a href="/wiki/Vue.js" title="Vue.js">Vue.js</a>.<sup id="cite_ref-lib_usage_32-2" class="reference"><a href="#cite_note-lib_usage-32">&#91;32&#93;</a></sup>
</p><p>In contrast, the term "Vanilla JS" has been coined for websites not using any libraries or frameworks, instead relying entirely on standard JavaScript functionality.<sup id="cite_ref-33" class="reference"><a href="#cite_note-33">&#91;33&#93;</a></sup>
</p>
<h2><span class="mw-headline" id="Other_usage">Other usage<span class="anchor" id="Server-side_JavaScript"></span><span class="anchor" id="Uses_outside_web_pages"></span></span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=11" title="Edit section: Other usage">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<p>The use of JavaScript has expanded beyond its <a href="/wiki/Web_browser" title="Web browser">web browser</a> roots. <a href="/wiki/JavaScript_engine" title="JavaScript engine">JavaScript engines</a> are now embedded in a variety of other software systems, both for <a href="/wiki/Server-side" title="Server-side">server-side</a> website deployments and non-browser <a href="/wiki/Application_software" title="Application software">applications</a>. 
</p><p>Initial attempts at promoting server-side JavaScript usage were <a href="/wiki/Netscape_Enterprise_Server" class="mw-redirect" title="Netscape Enterprise Server">Netscape Enterprise Server</a> and <a href="/wiki/Microsoft" title="Microsoft">Microsoft</a>'s <a href="/wiki/Internet_Information_Services" title="Internet Information Services">Internet Information Services</a>,<sup id="cite_ref-34" class="reference"><a href="#cite_note-34">&#91;34&#93;</a></sup><sup id="cite_ref-35" class="reference"><a href="#cite_note-35">&#91;35&#93;</a></sup> but they were small niches.<sup id="cite_ref-2009server_36-0" class="reference"><a href="#cite_note-2009server-36">&#91;36&#93;</a></sup> Server-side usage eventually started to grow in the late-2000s, with the creation of <a href="/wiki/Node.js" title="Node.js">Node.js</a> and <a href="/wiki/List_of_server-side_JavaScript_implementations" title="List of server-side JavaScript implementations">other approaches</a>.<sup id="cite_ref-2009server_36-1" class="reference"><a href="#cite_note-2009server-36">&#91;36&#93;</a></sup>
</p><p><a href="/wiki/Electron_(software_framework)" title="Electron (software framework)">Electron</a>, <a href="/wiki/Apache_Cordova" title="Apache Cordova">Cordova</a>, and other <a href="/wiki/Software_framework" title="Software framework">software frameworks</a> have been used to create many applications with behavior implemented in JavaScript. Other non-browser applications include <a href="/wiki/Adobe_Acrobat" title="Adobe Acrobat">Adobe Acrobat</a> support for scripting <a href="/wiki/PDF" title="PDF">PDF</a> documents<sup id="cite_ref-37" class="reference"><a href="#cite_note-37">&#91;37&#93;</a></sup> and <a href="/wiki/GNOME_Shell" title="GNOME Shell">GNOME Shell</a> extensions written in JavaScript.<sup id="cite_ref-38" class="reference"><a href="#cite_note-38">&#91;38&#93;</a></sup>
</p><p>JavaScript has recently begun to appear in some <a href="/wiki/Embedded_system" title="Embedded system">embedded systems</a>, usually by leveraging Node.js.<sup id="cite_ref-39" class="reference"><a href="#cite_note-39">&#91;39&#93;</a></sup><sup id="cite_ref-40" class="reference"><a href="#cite_note-40">&#91;40&#93;</a></sup><sup id="cite_ref-41" class="reference"><a href="#cite_note-41">&#91;41&#93;</a></sup>
</p><p><a href="/wiki/React_Native" title="React Native">React Native</a> enables the creation of native <a href="/wiki/Android_(operating_system)" title="Android (operating system)">Android</a> and <a href="/wiki/IOS" title="IOS">iOS</a> mobile apps that use a version of the React framework similar to websites.
</p>
<h2><span class="mw-headline" id="Features">Features</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=12" title="Edit section: Features">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<p>The following features are common to all conforming ECMAScript implementations, unless explicitly specified otherwise.
</p>
<h3><span class="mw-headline" id="Imperative_and_structured">Imperative and structured</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=13" title="Edit section: Imperative and structured">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>JavaScript supports much of the <a href="/wiki/Structured_programming" title="Structured programming">structured programming</a> syntax from <a href="/wiki/C_(computer_language)" class="mw-redirect" title="C (computer language)">C</a> (e.g., <code>if</code> statements, <code>while</code> loops, <code>switch</code> statements, <code>do while</code> loops, etc.). One partial exception is <a href="/wiki/Scope_(computer_science)" title="Scope (computer science)">scoping</a>: JavaScript originally had only <a href="/wiki/Function_scoping" class="mw-redirect" title="Function scoping">function scoping</a> with <code>var</code>. ECMAScript 2015 added keywords <code>let</code> and <code><a href="/wiki/Const_(computer_programming)" title="Const (computer programming)">const</a></code> for block scoping, meaning JavaScript now has both function and block scoping. Like C, JavaScript makes a distinction between <a href="/wiki/Expression_(computer_science)" title="Expression (computer science)">expressions</a> and <a href="/wiki/Statement_(computer_science)" title="Statement (computer science)">statements</a>. One syntactic difference from C is <a href="/wiki/Defensive_semicolon" class="mw-redirect" title="Defensive semicolon">automatic semicolon insertion</a>, which allows the semicolons that would normally terminate statements to be omitted.<sup id="cite_ref-Flanagan2006_42-0" class="reference"><a href="#cite_note-Flanagan2006-42">&#91;42&#93;</a></sup>
</p>
<h3><span class="mw-headline" id="Weakly_typed">Weakly typed</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=14" title="Edit section: Weakly typed">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>JavaScript is <a href="/wiki/Strong_and_weak_typing" title="Strong and weak typing">weakly typed</a>, which means certain types are implicitly cast depending on the operation used.<sup id="cite_ref-casting_rules_43-0" class="reference"><a href="#cite_note-casting_rules-43">&#91;43&#93;</a></sup>
</p>
<ul><li>The binary <code>+</code> operator casts both operands to a string unless both operands are numbers. This is because the addition operator doubles as a concatenation operator</li>
<li>The binary <code>-</code> operator always casts both operands to a number</li>
<li>Both unary operators (<code>+</code>, <code>-</code>) always cast the operand to a number</li></ul>
<p>Values are cast to strings like the following:<sup id="cite_ref-casting_rules_43-1" class="reference"><a href="#cite_note-casting_rules-43">&#91;43&#93;</a></sup>
</p>
<ul><li>Strings are left as-is</li>
<li>Numbers are converted to their string representation</li>
<li>Arrays have their elements cast to strings after which they are joined by commas (<code>,</code>)</li>
<li>Other objects are converted to the string <code>[object Object]</code> where <code>Object</code> is the name of the constructor of the object</li></ul>
<p>Values are cast to numbers by casting to strings and then casting the strings to numbers. These processes can be modified by defining <code>toString</code> and <code>valueOf</code> functions on the <a href="#Object-orientation_(prototype-based)">prototype</a> for string and number casting respectively. 
</p><p>JavaScript has received criticism for the way it implements these conversions as the complexity of the rules can be mistaken for inconsistency.<sup id="cite_ref-44" class="reference"><a href="#cite_note-44">&#91;44&#93;</a></sup><sup id="cite_ref-casting_rules_43-2" class="reference"><a href="#cite_note-casting_rules-43">&#91;43&#93;</a></sup> For example, when adding a number to a string, the number will be cast to a string before performing concatenation, but when subtracting a number from a string, the string is cast to a number before performing subtraction.
</p>
<table class="wikitable">
<caption>JavaScript type conversions
</caption>
<tbody><tr>
<th>left operand
</th>
<th>operator
</th>
<th>right operand
</th>
<th>result
</th></tr>
<tr>
<td><code>[]</code> (empty array)
</td>
<td><code>+</code>
</td>
<td><code>[]</code> (empty array)
</td>
<td><code>""</code> (empty string)
</td></tr>
<tr>
<td><code>[]</code> (empty array)
</td>
<td><code>+</code>
</td>
<td><code>{}</code> (empty object)
</td>
<td><code>"[object Object]"</code> (string)
</td></tr>
<tr>
<td><code>false</code> (boolean)
</td>
<td><code>+</code>
</td>
<td><code>[]</code> (empty array)
</td>
<td><code>"false"</code> (string)
</td></tr>
<tr>
<td><code>"123"</code>(string)
</td>
<td><code>+</code>
</td>
<td><code>1</code> (number)
</td>
<td><code>"1231"</code> (string)
</td></tr>
<tr>
<td><code>"123"</code> (string)
</td>
<td><code>-</code>
</td>
<td><code>1</code> (number)
</td>
<td><code>122</code> (number)
</td></tr></tbody></table>
<p>Often also mentioned is <code>{} + []</code> resulting in <code>0</code> (number). This is misleading: the <code>{}</code> is interpreted as an empty code block instead of an empty object, and the empty array is cast to a number by the remaining unary <code>+</code> operator. If you wrap the expression in parentheses <code>({} + [])</code> the curly brackets are interpreted as an empty object and the result of the expression is <code>"[object Object]"</code> as expected.<sup id="cite_ref-casting_rules_43-3" class="reference"><a href="#cite_note-casting_rules-43">&#91;43&#93;</a></sup>
</p>
<h3><span class="mw-headline" id="Dynamic">Dynamic</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=15" title="Edit section: Dynamic">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<dl><dt>Typing</dt>
<dd>JavaScript is <a href="/wiki/Dynamic_typing" class="mw-redirect" title="Dynamic typing">dynamically typed</a> like most other <a href="/wiki/Scripting_language" title="Scripting language">scripting languages</a>. A <a href="/wiki/Type_system" title="Type system">type</a> is associated with a <a href="/wiki/Value_(computer_science)" title="Value (computer science)">value</a> rather than an expression. For example, a <a href="/wiki/Variable_(programming)" class="mw-redirect" title="Variable (programming)">variable</a> initially bound to a number may be reassigned to a <a href="/wiki/String_(computer_science)" title="String (computer science)">string</a>.<sup id="cite_ref-45" class="reference"><a href="#cite_note-45">&#91;45&#93;</a></sup>  JavaScript supports various ways to test the type of objects, including <a href="/wiki/Duck_typing" title="Duck typing">duck typing</a>.<sup id="cite_ref-FOOTNOTEFlanagan2006176–178_46-0" class="reference"><a href="#cite_note-FOOTNOTEFlanagan2006176–178-46">&#91;46&#93;</a></sup></dd>
<dt>Run-time evaluation</dt>
<dd>JavaScript includes an <code><a href="/wiki/Eval" title="Eval">eval</a></code> function that can execute statements provided as strings at run-time.</dd></dl>
<h3><span id="Object-orientation_.28prototype-based.29"></span><span class="mw-headline" id="Object-orientation_(prototype-based)">Object-orientation (prototype-based)</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=16" title="Edit section: Object-orientation (prototype-based)">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>Prototypal inheritance in JavaScript is described by <a href="/wiki/Douglas_Crockford" title="Douglas Crockford">Douglas Crockford</a> as: 
</p>
<style data-mw-deduplicate="TemplateStyles:r996844942">.mw-parser-output .templatequote{overflow:hidden;margin:1em 0;padding:0 40px}.mw-parser-output .templatequote .templatequotecite{line-height:1.5em;text-align:left;padding-left:1.6em;margin-top:0}</style><blockquote class="templatequote"><p>You make prototype objects, and then … make new instances. Objects are mutable in JavaScript, so we can augment the new instances, giving them new fields and methods. These can then act as prototypes for even newer objects. We don't need classes to make lots of similar objects… Objects inherit from objects. What could be more object oriented than that?<sup id="cite_ref-47" class="reference"><a href="#cite_note-47">&#91;47&#93;</a></sup>
</p></blockquote>
<p>In JavaScript, an <a href="/wiki/Object_(computer_science)" title="Object (computer science)">object</a> is an <a href="/wiki/Associative_array" title="Associative array">associative array</a>, augmented with a prototype (see below); each key provides the name for an object <a href="/wiki/Property_(programming)" title="Property (programming)">property</a>, and there are two syntactical ways to specify such a name: dot notation (<code>obj.x&#160;=&#160;10</code>) and bracket notation (<code>obj['x']&#160;=&#160;10</code>). A property may be added, rebound, or deleted at run-time. Most properties of an object (and any property that belongs to an object's prototype inheritance chain) can be enumerated using a <code>for...in</code> loop.
</p>
<dl><dt>Prototypes</dt>
<dd>JavaScript uses <a href="/wiki/Prototype-based_programming" title="Prototype-based programming">prototypes</a> where many other object-oriented languages use <a href="/wiki/Class_(computer_science)" class="mw-redirect" title="Class (computer science)">classes</a> for <a href="/wiki/Inheritance_(computer_science)" class="mw-redirect" title="Inheritance (computer science)">inheritance</a>.<sup id="cite_ref-48" class="reference"><a href="#cite_note-48">&#91;48&#93;</a></sup> It is possible to simulate many class-based features with prototypes in JavaScript.<sup id="cite_ref-49" class="reference"><a href="#cite_note-49">&#91;49&#93;</a></sup></dd>
<dt>Functions as object constructors</dt>
<dd>Functions double as object constructors, along with their typical role. Prefixing a function call with <i>new</i> will create an instance of a prototype, inheriting properties and methods from the constructor (including properties from the <code>Object</code> prototype).<sup id="cite_ref-50" class="reference"><a href="#cite_note-50">&#91;50&#93;</a></sup> ECMAScript 5 offers the <code>Object.create</code> method, allowing explicit creation of an instance without automatically inheriting from the <code>Object</code> prototype (older environments can assign the prototype to <code>null</code>).<sup id="cite_ref-51" class="reference"><a href="#cite_note-51">&#91;51&#93;</a></sup> The constructor's <code>prototype</code> property determines the object used for the new object's internal prototype. New methods can be added by modifying the prototype of the function used as a constructor. JavaScript's built-in constructors, such as <code>Array</code> or <code>Object</code>, also have prototypes that can be modified. While it is possible to modify the <code>Object</code> prototype, it is generally considered bad practice because most objects in JavaScript will inherit methods and properties from the <code>Object</code> prototype, and they may not expect the prototype to be modified.<sup id="cite_ref-52" class="reference"><a href="#cite_note-52">&#91;52&#93;</a></sup></dd>
<dt>Functions as methods</dt>
<dd>Unlike many object-oriented languages, there is no distinction between a function definition and a <a href="/wiki/Method_(computer_science)" class="mw-redirect" title="Method (computer science)">method</a> definition. Rather, the distinction occurs during function calling; when a function is called as a method of an object, the function's local <i>this</i> keyword is bound to that object for that invocation.</dd></dl>
<h3><span class="mw-headline" id="Functional">Functional</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=17" title="Edit section: Functional">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>A <a href="/wiki/Subroutine" title="Subroutine">function</a> is <a href="/wiki/First-class_function" title="First-class function">first-class</a>; a function is considered to be an object. As such, a function may have properties and methods, such as <code>.call()</code> and <code>.bind()</code>.<sup id="cite_ref-53" class="reference"><a href="#cite_note-53">&#91;53&#93;</a></sup> A <i>nested</i> function is a function defined within another function. It is created each time the outer function is invoked. In addition, each nested function forms a <a href="/wiki/Closure_(computer_programming)" title="Closure (computer programming)">lexical closure</a>: The <a href="/wiki/Scope_(programming)#Lexical_scoping_vs._dynamic_scoping" class="mw-redirect" title="Scope (programming)">lexical scope</a> of the outer function (including any constant, local variable, or argument value) becomes part of the internal state of each inner function object, even after execution of the outer function concludes.<sup id="cite_ref-FOOTNOTEFlanagan2006141_54-0" class="reference"><a href="#cite_note-FOOTNOTEFlanagan2006141-54">&#91;54&#93;</a></sup> JavaScript also supports <a href="/wiki/Anonymous_function" title="Anonymous function">anonymous functions</a>.
</p>
<h3><span class="mw-headline" id="Delegative">Delegative</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=18" title="Edit section: Delegative">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>JavaScript supports implicit and explicit <a href="/wiki/Delegation_(object-oriented_programming)" title="Delegation (object-oriented programming)">delegation</a>.
</p>
<dl><dt>Functions as roles (Traits and Mixins)</dt>
<dd>JavaScript natively supports various function-based implementations of <a href="/wiki/Role-oriented_programming" title="Role-oriented programming">Role</a><sup id="cite_ref-55" class="reference"><a href="#cite_note-55">&#91;55&#93;</a></sup> patterns like <a href="/wiki/Traits_(computer_science)" class="mw-redirect" title="Traits (computer science)">Traits</a><sup id="cite_ref-56" class="reference"><a href="#cite_note-56">&#91;56&#93;</a></sup><sup id="cite_ref-57" class="reference"><a href="#cite_note-57">&#91;57&#93;</a></sup> and <a href="/wiki/Mixin" title="Mixin">Mixins</a>.<sup id="cite_ref-58" class="reference"><a href="#cite_note-58">&#91;58&#93;</a></sup> Such a function defines additional behavior by at least one method bound to the <code>this</code> keyword within its <code>function</code> body. A Role then has to be delegated explicitly via <code>call</code> or <code>apply</code> to objects that need to feature additional behavior that is not shared via the prototype chain.</dd>
<dt>Object composition and inheritance</dt>
<dd>Whereas explicit function-based delegation does cover <a href="/wiki/Object_composition" title="Object composition">composition</a> in JavaScript, implicit delegation already happens every time the prototype chain is walked in order to, e.g., find a method that might be related to but is not directly owned by an object. Once the method is found it gets called within this object's context. Thus <a href="/wiki/Inheritance_(computer_science)" class="mw-redirect" title="Inheritance (computer science)">inheritance</a> in JavaScript is covered by a delegation automatism that is bound to the prototype property of constructor functions.</dd></dl>
<h3><span class="mw-headline" id="Miscellaneous">Miscellaneous</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=19" title="Edit section: Miscellaneous">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>JS is a <a href="/wiki/Zero-based_numbering" title="Zero-based numbering">zero-index</a> language.
</p>
<dl><dt>Run-time environment</dt>
<dd>JavaScript typically relies on a run-time environment (e.g., a <a href="/wiki/Web_browser" title="Web browser">web browser</a>) to provide objects and methods by which scripts can interact with the environment (e.g., a web page <a href="/wiki/Document_Object_Model" title="Document Object Model">DOM</a>). These environments are single-<a href="/wiki/Thread_(computing)" title="Thread (computing)">threaded</a>. JavaScript also relies on the run-time environment to provide the ability to include/import scripts (e.g., <a href="/wiki/HTML" title="HTML">HTML</a> <code>&lt;script&gt;</code> elements). This is not a language feature per se, but it is common in most JavaScript implementations. JavaScript processes <a href="/wiki/Message_(computer_science)" class="mw-redirect" title="Message (computer science)">messages</a> from a <a href="/wiki/Queue_(abstract_data_type)" title="Queue (abstract data type)">queue</a> one at a time. JavaScript calls a <a href="/wiki/Subroutine" title="Subroutine">function</a> associated with each new message, creating a <a href="/wiki/Call_stack" title="Call stack">call stack</a> frame with the function's <a href="/wiki/Parameter_(computer_programming)" title="Parameter (computer programming)">arguments</a> and <a href="/wiki/Local_variable" title="Local variable">local variables</a>. The call stack shrinks and grows based on the function's needs. When the call stack is empty upon function completion, JavaScript proceeds to the next message in the queue. This is called the <a href="/wiki/Event_loop" title="Event loop">event loop</a>, described as "run to completion" because each message is fully processed before the next message is considered. However, the language's <a href="/wiki/Concurrency_(computer_science)" title="Concurrency (computer science)">concurrency model</a> describes the event loop as <a href="/wiki/Asynchronous_I/O" title="Asynchronous I/O">non-blocking</a>: program <a href="/wiki/Input/output" title="Input/output">input/output</a> is performed using <a href="/wiki/Event_(computing)" title="Event (computing)">events</a> and <a href="/wiki/Callback_(computer_programming)" title="Callback (computer programming)">callback functions</a>. This means, for instance, that JavaScript can process a mouse click while waiting for a database query to return information.<sup id="cite_ref-59" class="reference"><a href="#cite_note-59">&#91;59&#93;</a></sup></dd></dl>
<dl><dt>Variadic functions</dt>
<dd>An indefinite number of parameters can be passed to a function. The function can access them through <a href="/wiki/Formal_parameter" class="mw-redirect" title="Formal parameter">formal parameters</a> and also through the local <code>arguments</code> object. <a href="/wiki/Variadic_functions" class="mw-redirect" title="Variadic functions">Variadic functions</a> can also be created by using the <code><a rel="nofollow" class="external text" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">bind</a></code> method.</dd></dl>
<dl><dt>Array and object literals</dt>
<dd>Like many scripting languages, arrays and objects (<a href="/wiki/Associative_arrays" class="mw-redirect" title="Associative arrays">associative arrays</a> in other languages) can each be created with a succinct shortcut syntax. In fact, these <a href="/wiki/Object_literal" class="mw-redirect" title="Object literal">literals</a> form the basis of the <a href="/wiki/JSON" title="JSON">JSON</a> data format.</dd></dl>
<dl><dt>Regular expressions</dt>
<dd>JavaScript also supports <a href="/wiki/Regular_expression" title="Regular expression">regular expressions</a> in a manner similar to <a href="/wiki/Perl" title="Perl">Perl</a>, which provide a concise and powerful syntax for text manipulation that is more sophisticated than the built-in string functions.<sup id="cite_ref-60" class="reference"><a href="#cite_note-60">&#91;60&#93;</a></sup></dd></dl>
<dl><dt>Promises</dt>
<dd>JavaScript also supports <a href="/wiki/Futures_and_promises" title="Futures and promises">promises</a>, which are a way of handling asynchronous operations. There is a built-in Promise object that gives access to a lot of functionalities for handling promises, and defines how they should be handled. It allows one to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future. Recently, combinator methods were introduced in the JavaScript specification, which allows developers to combine multiple JavaScript promises and do operations on the basis of different scenarios. The methods introduced are: Promise.race, Promise.all, Promise.allSettled and Promise.any.</dd></dl>
<h3><span class="mw-headline" id="Vendor-specific_extensions">Vendor-specific extensions</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=20" title="Edit section: Vendor-specific extensions">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>Historically, some <a href="/wiki/JavaScript_engine" title="JavaScript engine">JavaScript engines</a> supported these non-standard features:
</p>
<ul><li>conditional <code>catch</code> clauses (like Java)</li>
<li><a href="/wiki/List_comprehension" title="List comprehension">array comprehensions</a> and generator expressions (like Python)</li>
<li>concise function expressions (<code>function(args) expr</code>; this experimental syntax predated arrow functions)</li>
<li><a href="/wiki/ECMAScript_for_XML" title="ECMAScript for XML">ECMAScript for XML</a> (E4X), an extension that adds native XML support to ECMAScript (unsupported in Firefox since version 21<sup id="cite_ref-61" class="reference"><a href="#cite_note-61">&#91;61&#93;</a></sup>)</li></ul>
<h2><span class="mw-headline" id="Syntax">Syntax</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=21" title="Edit section: Syntax">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<div role="note" class="hatnote navigation-not-searchable">Main article: <a href="/wiki/JavaScript_syntax" title="JavaScript syntax">JavaScript syntax</a></div>
<h3><span class="mw-headline" id="Simple_examples">Simple examples</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=22" title="Edit section: Simple examples">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p><a href="/wiki/Variable_(computer_science)" title="Variable (computer science)">Variables</a> in JavaScript can be defined using either the <code>var</code>,<sup id="cite_ref-62" class="reference"><a href="#cite_note-62">&#91;62&#93;</a></sup> <code>let</code><sup id="cite_ref-moz_let_63-0" class="reference"><a href="#cite_note-moz_let-63">&#91;63&#93;</a></sup> or <code>const</code><sup id="cite_ref-moz_const_64-0" class="reference"><a href="#cite_note-moz_const-64">&#91;64&#93;</a></sup> keywords.
</p>
<div class="mw-highlight mw-highlight-lang-javascript mw-content-ltr" dir="ltr"><pre><span></span><span class="c1">// Declares a function-scoped variable named \`x\`, and implicitly assigns the</span>
<span class="c1">// special value \`undefined\` to it. Variables without value are automatically</span>
<span class="c1">// set to undefined.</span>
<span class="kd">var</span> <span class="nx">x</span><span class="p">;</span>

<span class="c1">// Variables can be manually set to \`undefined\` like so</span>
<span class="kd">var</span> <span class="nx">x2</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span>

<span class="c1">// Declares a block-scoped variable named \`y\`, and implicitly sets it to</span>
<span class="c1">// \`undefined\`. The \`let\` keyword was introduced in ECMAScript 2015.</span>
<span class="kd">let</span> <span class="nx">y</span><span class="p">;</span>

<span class="c1">// Declares a block-scoped, un-reassignable variable named \`z\`, and sets it to</span>
<span class="c1">// a string literal. The \`const\` keyword was also introduced in ECMAScript 2015,</span>
<span class="c1">// and must be explicitly assigned to.</span>

<span class="c1">// The keyword \`const\` means constant, hence the variable cannot be reassigned</span>
<span class="c1">// as the value is \`constant\`.</span>
<span class="kd">const</span> <span class="nx">z</span> <span class="o">=</span> <span class="s2">&quot;this value cannot be reassigned!&quot;</span><span class="p">;</span>

<span class="c1">// Declares a variable named \`myNumber\`, and assigns a number literal (the value</span>
<span class="c1">// \`2\`) to it.</span>
<span class="kd">let</span> <span class="nx">myNumber</span> <span class="o">=</span> <span class="mf">2</span><span class="p">;</span>

<span class="c1">// Reassigns \`myNumber\`, setting it to a string literal (the value \`&quot;foo&quot;\`).</span>
<span class="c1">// JavaScript is a dynamically-typed language, so this is legal.</span>
<span class="nx">myNumber</span> <span class="o">=</span> <span class="s2">&quot;foo&quot;</span><span class="p">;</span>
</pre></div>
<p>Note the <a href="/wiki/Comment_(computer_programming)" title="Comment (computer programming)">comments</a> in the example above, all of which were preceded with two <a href="/wiki/Slash_(punctuation)" title="Slash (punctuation)">forward slashes</a>.
</p><p>There is no built-in <a href="/wiki/Input/output" title="Input/output">Input/output</a> functionality in JavaScript; the run-time environment provides that. The ECMAScript specification in edition 5.1 mentions:<sup id="cite_ref-65" class="reference"><a href="#cite_note-65">&#91;65&#93;</a></sup>
</p>
<blockquote><p>indeed, there are no provisions in this specification for input of external data or output of computed results.</p></blockquote>
<p>However, most runtime environments have a <code>console</code> object<sup id="cite_ref-66" class="reference"><a href="#cite_note-66">&#91;66&#93;</a></sup> that can be used to print output. Here is a minimalist <a href="/wiki/Hello_World_program" class="mw-redirect" title="Hello World program">Hello World program</a> in JavaScript:
</p>
<div class="mw-highlight mw-highlight-lang-javascript mw-content-ltr" dir="ltr"><pre><span></span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;Hello World!&quot;</span><span class="p">);</span>
</pre></div>
<p>A simple <a href="/wiki/Recursion_(computer_science)" title="Recursion (computer science)">recursive</a> function:
</p>
<div class="mw-highlight mw-highlight-lang-javascript mw-content-ltr" dir="ltr"><pre><span></span><span class="kd">function</span> <span class="nx">factorial</span><span class="p">(</span><span class="nx">n</span><span class="p">)</span> <span class="p">{</span>
    <span class="k">if</span> <span class="p">(</span><span class="nx">n</span> <span class="o">===</span> <span class="mf">0</span><span class="p">)</span>
        <span class="k">return</span> <span class="mf">1</span><span class="p">;</span> <span class="c1">// 0! = 1</span>

    <span class="k">return</span> <span class="nx">n</span> <span class="o">*</span> <span class="nx">factorial</span><span class="p">(</span><span class="nx">n</span> <span class="o">-</span> <span class="mf">1</span><span class="p">);</span>
<span class="p">}</span>

<span class="nx">factorial</span><span class="p">(</span><span class="mf">3</span><span class="p">);</span> <span class="c1">// returns 6</span>
</pre></div>
<p>An <a href="/wiki/Anonymous_function" title="Anonymous function">anonymous function</a> (or lambda):
</p>
<div class="mw-highlight mw-highlight-lang-javascript mw-content-ltr" dir="ltr"><pre><span></span><span class="kd">function</span> <span class="nx">counter</span><span class="p">()</span> <span class="p">{</span>
    <span class="kd">let</span> <span class="nx">count</span> <span class="o">=</span> <span class="mf">0</span><span class="p">;</span>

    <span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
        <span class="k">return</span> <span class="o">++</span><span class="nx">count</span><span class="p">;</span>
    <span class="p">};</span>
<span class="p">}</span>

<span class="kd">let</span> <span class="nx">closure</span> <span class="o">=</span> <span class="nx">counter</span><span class="p">();</span>
<span class="nx">closure</span><span class="p">();</span> <span class="c1">// returns 1</span>
<span class="nx">closure</span><span class="p">();</span> <span class="c1">// returns 2</span>
<span class="nx">closure</span><span class="p">();</span> <span class="c1">// returns 3</span>
</pre></div>
<p>This example shows that, in JavaScript, <a href="/wiki/Closure_(computer_programming)" title="Closure (computer programming)">function closures</a> capture their non-local variables by reference.
</p><p>Arrow functions were first introduced in <a href="/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015" title="ECMAScript">6th Edition - ECMAScript 2015</a> . They shorten the syntax for writing functions in JavaScript. Arrow functions are anonymous in nature; a variable is needed to refer to them in order to invoke them after their creation.
</p><p>Example of arrow function:
</p>
<div class="mw-highlight mw-highlight-lang-javascript mw-content-ltr" dir="ltr"><pre><span></span><span class="c1">// Arrow functions let us omit the \`function\` keyword.</span>
<span class="c1">// Here \`long_example\` points to an anonymous function value.</span>
<span class="kd">const</span> <span class="nx">long_example</span> <span class="o">=</span> <span class="p">(</span><span class="nx">input1</span><span class="p">,</span> <span class="nx">input2</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span>
    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;Hello, World!&quot;</span><span class="p">);</span>
    <span class="kd">const</span> <span class="nx">output</span> <span class="o">=</span> <span class="nx">input1</span> <span class="o">+</span> <span class="nx">input2</span><span class="p">;</span>

    <span class="k">return</span> <span class="nx">output</span><span class="p">;</span>
<span class="p">};</span>

<span class="c1">// If there are no braces, the arrow function simply returns the expression</span>
<span class="c1">// So here it&#39;s (input1 + input2)</span>
<span class="kd">const</span> <span class="nx">short_example</span> <span class="o">=</span> <span class="p">(</span><span class="nx">input1</span><span class="p">,</span> <span class="nx">input2</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="nx">input1</span> <span class="o">+</span> <span class="nx">input2</span><span class="p">;</span>

<span class="nx">long_example</span><span class="p">(</span><span class="mf">2</span><span class="p">,</span> <span class="mf">3</span><span class="p">);</span> <span class="c1">// Prints &quot;Hello, World!&quot; and returns 5</span>
<span class="nx">short_example</span><span class="p">(</span><span class="mf">2</span><span class="p">,</span> <span class="mf">5</span><span class="p">);</span>  <span class="c1">// Returns 7</span>

<span class="c1">// If an arrow function only has one parameter, the parentheses can be removed.</span>
<span class="kd">const</span> <span class="nx">no_parentheses</span> <span class="o">=</span> <span class="nx">input</span> <span class="p">=&gt;</span> <span class="nx">input</span> <span class="o">+</span> <span class="mf">2</span><span class="p">;</span>

<span class="nx">no_parentheses</span><span class="p">(</span><span class="mf">3</span><span class="p">);</span> <span class="c1">// Returns 5</span>
</pre></div>
<p>In JavaScript, <a href="/wiki/Object_(computer_science)" title="Object (computer science)">objects</a> are created in the same way as functions; this is known as a <a href="/wiki/Function_object" title="Function object">function object</a>.
</p><p>Object example:
</p>
<div class="mw-highlight mw-highlight-lang-javascript mw-content-ltr" dir="ltr"><pre><span></span><span class="kd">function</span> <span class="nx">Ball</span><span class="p">(</span><span class="nx">r</span><span class="p">)</span> <span class="p">{</span>
    <span class="k">this</span><span class="p">.</span><span class="nx">radius</span> <span class="o">=</span> <span class="nx">r</span><span class="p">;</span> <span class="c1">// the &quot;r&quot; argument is local to the ball object</span>
    <span class="k">this</span><span class="p">.</span><span class="nx">area</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span> <span class="o">*</span> <span class="p">(</span><span class="nx">r</span> <span class="o">**</span> <span class="mf">2</span><span class="p">);</span> <span class="c1">// parentheses don&#39;t do anything but clarify</span>
    
    <span class="c1">// objects can contain functions (&quot;method&quot;)</span>
    <span class="k">this</span><span class="p">.</span><span class="nx">show</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
        <span class="nx">drawCircle</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">radius</span><span class="p">);</span> <span class="c1">// references another function (that draws a circle)</span>
    <span class="p">};</span>
<span class="p">}</span>

<span class="kd">let</span> <span class="nx">myBall</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Ball</span><span class="p">(</span><span class="mf">5</span><span class="p">);</span> <span class="c1">// creates a new instance of the ball object with radius 5</span>
<span class="nx">myBall</span><span class="p">.</span><span class="nx">radius</span><span class="o">++</span><span class="p">;</span> <span class="c1">// object properties can usually be modified from the outside</span>
<span class="nx">myBall</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span> <span class="c1">// using the inherited &quot;show&quot; function</span>
</pre></div>
<p><a href="/wiki/Variadic_function" title="Variadic function">Variadic function</a> demonstration (<code>arguments</code> is a special <a href="/wiki/Variable_(programming)" class="mw-redirect" title="Variable (programming)">variable</a>):<sup id="cite_ref-67" class="reference"><a href="#cite_note-67">&#91;67&#93;</a></sup>
</p>
<div class="mw-highlight mw-highlight-lang-javascript mw-content-ltr" dir="ltr"><pre><span></span><span class="kd">function</span> <span class="nx">sum</span><span class="p">()</span> <span class="p">{</span>
    <span class="kd">let</span> <span class="nx">x</span> <span class="o">=</span> <span class="mf">0</span><span class="p">;</span>

    <span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">i</span> <span class="o">=</span> <span class="mf">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span>
        <span class="nx">x</span> <span class="o">+=</span> <span class="nx">arguments</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span>

    <span class="k">return</span> <span class="nx">x</span><span class="p">;</span>
<span class="p">}</span>

<span class="nx">sum</span><span class="p">(</span><span class="mf">1</span><span class="p">,</span> <span class="mf">2</span><span class="p">);</span> <span class="c1">// returns 3</span>
<span class="nx">sum</span><span class="p">(</span><span class="mf">1</span><span class="p">,</span> <span class="mf">2</span><span class="p">,</span> <span class="mf">3</span><span class="p">);</span> <span class="c1">// returns 6</span>
</pre></div>
<p><a href="/wiki/Immediately-invoked_function_expression" class="mw-redirect" title="Immediately-invoked function expression">Immediately-invoked function expressions</a> are often used to create closures. Closures allow gathering properties and methods in a namespace and making some of them private:
</p>
<div class="mw-highlight mw-highlight-lang-javascript mw-content-ltr" dir="ltr"><pre><span></span><span class="kd">let</span> <span class="nx">counter</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
    <span class="kd">let</span> <span class="nx">i</span> <span class="o">=</span> <span class="mf">0</span><span class="p">;</span> <span class="c1">// private property</span>

    <span class="k">return</span> <span class="p">{</span>   <span class="c1">// public methods</span>
        <span class="nx">get</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
            <span class="nx">alert</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span>
        <span class="p">},</span>
        <span class="nx">set</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span>
            <span class="nx">i</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span>
        <span class="p">},</span>
        <span class="nx">increment</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
            <span class="nx">alert</span><span class="p">(</span><span class="o">++</span><span class="nx">i</span><span class="p">);</span>
        <span class="p">}</span>
    <span class="p">};</span>
<span class="p">})();</span> <span class="c1">// module</span>

<span class="nx">counter</span><span class="p">.</span><span class="nx">get</span><span class="p">();</span>      <span class="c1">// shows 0</span>
<span class="nx">counter</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="mf">6</span><span class="p">);</span>
<span class="nx">counter</span><span class="p">.</span><span class="nx">increment</span><span class="p">();</span> <span class="c1">// shows 7</span>
<span class="nx">counter</span><span class="p">.</span><span class="nx">increment</span><span class="p">();</span> <span class="c1">// shows 8</span>
</pre></div>
<p>Exporting and Importing modules in JavaScript<sup id="cite_ref-68" class="reference"><a href="#cite_note-68">&#91;68&#93;</a></sup>
</p><p>Export example:
</p>
<div class="mw-highlight mw-highlight-lang-javascript mw-content-ltr" dir="ltr"><pre><span></span><span class="cm">/* mymodule.js */</span>
<span class="c1">// This function remains private, as it is not exported</span>
<span class="kd">let</span> <span class="nx">sum</span> <span class="o">=</span> <span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="p">{</span>
    <span class="k">return</span> <span class="nx">a</span> <span class="o">+</span> <span class="nx">b</span><span class="p">;</span>
<span class="p">}</span>

<span class="c1">// Export variables</span>
<span class="k">export</span> <span class="kd">let</span> <span class="nx">name</span> <span class="o">=</span> <span class="s1">&#39;Alice&#39;</span><span class="p">;</span>
<span class="k">export</span> <span class="kd">let</span> <span class="nx">age</span> <span class="o">=</span> <span class="mf">23</span><span class="p">;</span>

<span class="c1">// Export named functions</span>
<span class="k">export</span> <span class="kd">function</span> <span class="nx">add</span><span class="p">(</span><span class="nx">num1</span><span class="p">,</span> <span class="nx">num2</span><span class="p">)</span> <span class="p">{</span>
    <span class="k">return</span> <span class="nx">num1</span> <span class="o">+</span> <span class="nx">num2</span><span class="p">;</span>
<span class="p">}</span>

<span class="c1">// Export class</span>
<span class="k">export</span> <span class="kd">class</span> <span class="nx">Multiplication</span> <span class="p">{</span>
    <span class="nx">constructor</span><span class="p">(</span><span class="nx">num1</span><span class="p">,</span> <span class="nx">num2</span><span class="p">)</span> <span class="p">{</span>
        <span class="k">this</span><span class="p">.</span><span class="nx">num1</span> <span class="o">=</span> <span class="nx">num1</span><span class="p">;</span>
        <span class="k">this</span><span class="p">.</span><span class="nx">num2</span> <span class="o">=</span> <span class="nx">num2</span><span class="p">;</span>
    <span class="p">}</span>

    <span class="nx">add</span><span class="p">()</span> <span class="p">{</span>
        <span class="k">return</span> <span class="nx">sum</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">num1</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">num2</span><span class="p">);</span>
    <span class="p">}</span>
<span class="p">}</span>
</pre></div>
<p>Import example:
</p>
<div class="mw-highlight mw-highlight-lang-javascript mw-content-ltr" dir="ltr"><pre><span></span><span class="c1">// Import one property</span>
<span class="k">import</span> <span class="p">{</span> <span class="nx">add</span> <span class="p">}</span> <span class="nx">from</span> <span class="s1">&#39;./mymodule.js&#39;</span><span class="p">;</span>

<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">add</span><span class="p">(</span><span class="mf">1</span><span class="p">,</span> <span class="mf">2</span><span class="p">));</span> <span class="c1">// 3</span>

<span class="c1">// Import multiple properties</span>
<span class="k">import</span> <span class="p">{</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">age</span> <span class="p">}</span> <span class="nx">from</span> <span class="s1">&#39;./mymodule.js&#39;</span><span class="p">;</span>
<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">age</span><span class="p">);</span>
<span class="c1">//&gt; &quot;Alice&quot;, 23</span>

<span class="c1">// Import all properties from a module</span>
<span class="k">import</span> <span class="o">*</span> <span class="nx">from</span> <span class="s1">&#39;./module.js&#39;</span>
<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">age</span><span class="p">);</span>
<span class="c1">//&gt; &quot;Alice&quot;, 23</span>
<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">add</span><span class="p">(</span><span class="mf">1</span><span class="p">,</span><span class="mf">2</span><span class="p">));</span>
<span class="c1">//&gt; 3</span>
</pre></div>
<h3><span class="mw-headline" id="More_advanced_example">More advanced example</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=23" title="Edit section: More advanced example">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>This sample code displays various JavaScript features.
</p>
<div class="mw-highlight mw-highlight-lang-javascript mw-content-ltr" dir="ltr"><pre><span></span><span class="cm">/* Finds the lowest common multiple (LCM) of two numbers */</span>
<span class="kd">function</span> <span class="nx">LCMCalculator</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// constructor function</span>
    <span class="kd">let</span> <span class="nx">checkInt</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// inner function</span>
        <span class="k">if</span> <span class="p">(</span><span class="nx">x</span> <span class="o">%</span> <span class="mf">1</span> <span class="o">!==</span> <span class="mf">0</span><span class="p">)</span>
            <span class="k">throw</span> <span class="k">new</span> <span class="nx">TypeError</span><span class="p">(</span><span class="nx">x</span> <span class="o">+</span> <span class="s2">&quot;is not an integer&quot;</span><span class="p">);</span> <span class="c1">// var a =  mouseX</span>

        <span class="k">return</span> <span class="nx">x</span><span class="p">;</span>
    <span class="p">};</span>
    
    <span class="k">this</span><span class="p">.</span><span class="nx">a</span> <span class="o">=</span> <span class="nx">checkInt</span><span class="p">(</span><span class="nx">x</span><span class="p">)</span>
    <span class="c1">//   semicolons   ^^^^  are optional, a newline is enough</span>
    <span class="k">this</span><span class="p">.</span><span class="nx">b</span> <span class="o">=</span> <span class="nx">checkInt</span><span class="p">(</span><span class="nx">y</span><span class="p">);</span>
<span class="p">}</span>
<span class="c1">// The prototype of object instances created by a constructor is</span>
<span class="c1">// that constructor&#39;s &quot;prototype&quot; property.</span>
<span class="nx">LCMCalculator</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span> <span class="c1">// object literal</span>
    <span class="nx">constructor</span><span class="o">:</span> <span class="nx">LCMCalculator</span><span class="p">,</span> <span class="c1">// when reassigning a prototype, set the constructor property appropriately</span>
    <span class="nx">gcd</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="c1">// method that calculates the greatest common divisor</span>
        <span class="c1">// Euclidean algorithm:</span>
        <span class="kd">let</span> <span class="nx">a</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">a</span><span class="p">),</span> <span class="nx">b</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">b</span><span class="p">),</span> <span class="nx">t</span><span class="p">;</span>

        <span class="k">if</span> <span class="p">(</span><span class="nx">a</span> <span class="o">&lt;</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span>
            <span class="c1">// swap variables</span>
            <span class="c1">// t = b; b = a; a = t;</span>
            <span class="p">[</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">]</span> <span class="o">=</span> <span class="p">[</span><span class="nx">b</span><span class="p">,</span> <span class="nx">a</span><span class="p">];</span> <span class="c1">// swap using destructuring assignment (ES6)</span>
        <span class="p">}</span>

        <span class="k">while</span> <span class="p">(</span><span class="nx">b</span> <span class="o">!==</span> <span class="mf">0</span><span class="p">)</span> <span class="p">{</span>
            <span class="nx">t</span> <span class="o">=</span> <span class="nx">b</span><span class="p">;</span>
            <span class="nx">b</span> <span class="o">=</span> <span class="nx">a</span> <span class="o">%</span> <span class="nx">b</span><span class="p">;</span>
            <span class="nx">a</span> <span class="o">=</span> <span class="nx">t</span><span class="p">;</span>
        <span class="p">}</span>

        <span class="c1">// Only need to calculate GCD once, so &quot;redefine&quot; this method.</span>
        <span class="c1">// (Actually not redefinition—it&#39;s defined on the instance itself,</span>
        <span class="c1">// so that this.gcd refers to this &quot;redefinition&quot; instead of LCMCalculator.prototype.gcd.</span>
        <span class="c1">// Note that this leads to a wrong result if the LCMCalculator object members &quot;a&quot; and/or &quot;b&quot; are altered afterwards.)</span>
        <span class="c1">// Also, &#39;gcd&#39; === &quot;gcd&quot;, this[&#39;gcd&#39;] === this.gcd</span>
        <span class="k">this</span><span class="p">[</span><span class="s1">&#39;gcd&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
            <span class="k">return</span> <span class="nx">a</span><span class="p">;</span>
        <span class="p">};</span>

        <span class="k">return</span> <span class="nx">a</span><span class="p">;</span>
    <span class="p">},</span>

    <span class="c1">// Object property names can be specified by strings delimited by double (&quot;) or single (&#39;) quotes.</span>
    <span class="nx">lcm</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
        <span class="c1">// Variable names do not collide with object properties, e.g., |lcm| is not |this.lcm|.</span>
        <span class="c1">// not using |this.a*this.b| to avoid FP precision issues</span>
        <span class="kd">let</span> <span class="nx">lcm</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">a</span> <span class="o">/</span> <span class="k">this</span><span class="p">.</span><span class="nx">gcd</span><span class="p">()</span> <span class="o">*</span> <span class="k">this</span><span class="p">.</span><span class="nx">b</span><span class="p">;</span>
        
        <span class="c1">// Only need to calculate lcm once, so &quot;redefine&quot; this method.</span>
        <span class="k">this</span><span class="p">.</span><span class="nx">lcm</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
            <span class="k">return</span> <span class="nx">lcm</span><span class="p">;</span>
        <span class="p">};</span>

        <span class="k">return</span> <span class="nx">lcm</span><span class="p">;</span>
    <span class="p">},</span>

    <span class="nx">toString</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span>
        <span class="k">return</span> <span class="s2">&quot;LCMCalculator: a = &quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">a</span> <span class="o">+</span> <span class="s2">&quot;, b = &quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">b</span><span class="p">;</span>
    <span class="p">}</span>
<span class="p">};</span>

<span class="c1">// Define generic output function; this implementation only works for Web browsers</span>
<span class="kd">function</span> <span class="nx">output</span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">{</span>
    <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createTextNode</span><span class="p">(</span><span class="nx">x</span><span class="p">));</span>
    <span class="nb">document</span><span class="p">.</span><span class="nx">body</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;br&#39;</span><span class="p">));</span>
<span class="p">}</span>

<span class="c1">// Note: Array&#39;s map() and forEach() are defined in JavaScript 1.6.</span>
<span class="c1">// They are used here to demonstrate JavaScript&#39;s inherent functional nature.</span>
<span class="p">[</span>
    <span class="p">[</span><span class="mf">25</span><span class="p">,</span> <span class="mf">55</span><span class="p">],</span>
    <span class="p">[</span><span class="mf">21</span><span class="p">,</span> <span class="mf">56</span><span class="p">],</span>
    <span class="p">[</span><span class="mf">22</span><span class="p">,</span> <span class="mf">58</span><span class="p">],</span>
    <span class="p">[</span><span class="mf">28</span><span class="p">,</span> <span class="mf">56</span><span class="p">]</span>
<span class="p">].</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">pair</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// array literal + mapping function</span>
    <span class="k">return</span> <span class="k">new</span> <span class="nx">LCMCalculator</span><span class="p">(</span><span class="nx">pair</span><span class="p">[</span><span class="mf">0</span><span class="p">],</span> <span class="nx">pair</span><span class="p">[</span><span class="mf">1</span><span class="p">]);</span>
<span class="p">}).</span><span class="nx">sort</span><span class="p">((</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">=&gt;</span> <span class="nx">a</span><span class="p">.</span><span class="nx">lcm</span><span class="p">()</span> <span class="o">-</span> <span class="nx">b</span><span class="p">.</span><span class="nx">lcm</span><span class="p">())</span> <span class="c1">// sort with this comparative function; =&gt; is a shorthand form of a function, called &quot;arrow function&quot;</span>
    <span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">printResult</span><span class="p">);</span>

<span class="kd">function</span> <span class="nx">printResult</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span>
    <span class="nx">output</span><span class="p">(</span><span class="nx">obj</span> <span class="o">+</span> <span class="s2">&quot;, gcd = &quot;</span> <span class="o">+</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">gcd</span><span class="p">()</span> <span class="o">+</span> <span class="s2">&quot;, lcm = &quot;</span> <span class="o">+</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">lcm</span><span class="p">());</span>
<span class="p">}</span>
</pre></div>
<p>The following output should be displayed in the browser window.
</p>
<div class="mw-highlight mw-highlight-lang-html mw-content-ltr" dir="ltr"><pre><span></span>LCMCalculator: a = 28, b = 56, gcd = 28, lcm = 56
LCMCalculator: a = 21, b = 56, gcd = 7, lcm = 168
LCMCalculator: a = 25, b = 55, gcd = 5, lcm = 275
LCMCalculator: a = 22, b = 58, gcd = 2, lcm = 638
</pre></div>
<h2><span class="mw-headline" id="Security">Security</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=24" title="Edit section: Security">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<div role="note" class="hatnote navigation-not-searchable">See also: <a href="/wiki/Browser_security" title="Browser security">Browser security</a></div>
<p>JavaScript and the <a href="/wiki/Document_Object_Model" title="Document Object Model">DOM</a> provide the potential for malicious authors to deliver scripts to run on a client computer via the Web. Browser authors minimize this risk using two restrictions. First, scripts run in a <a href="/wiki/Sandbox_(computer_security)" title="Sandbox (computer security)">sandbox</a> in which they can only perform Web-related actions, not general-purpose programming tasks like creating files. Second, scripts are constrained by the <a href="/wiki/Same-origin_policy" title="Same-origin policy">same-origin policy</a>: scripts from one Web site do not have access to information such as usernames, passwords, or cookies sent to another site. Most JavaScript-related security bugs are breaches of either the same origin policy or the sandbox.
</p><p>There are subsets of general JavaScript—ADsafe, Secure ECMAScript (SES)—that provide greater levels of security, especially on code created by third parties (such as advertisements).<sup id="cite_ref-69" class="reference"><a href="#cite_note-69">&#91;69&#93;</a></sup><sup id="cite_ref-70" class="reference"><a href="#cite_note-70">&#91;70&#93;</a></sup> <a href="/wiki/Caja_project" title="Caja project">Caja</a> is another project for safe embedding and isolation of third-party JavaScript and HTML.
</p><p><a href="/wiki/Content_Security_Policy" title="Content Security Policy">Content Security Policy</a> is the main intended method of ensuring that only trusted code is executed on a Web page.
</p>
<div role="note" class="hatnote navigation-not-searchable">See also: <a href="/wiki/Content_Security_Policy" title="Content Security Policy">Content Security Policy</a></div>
<h3><span class="mw-headline" id="Cross-site_vulnerabilities">Cross-site vulnerabilities</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=25" title="Edit section: Cross-site vulnerabilities">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<div role="note" class="hatnote navigation-not-searchable">Main articles: <a href="/wiki/Cross-site_scripting" title="Cross-site scripting">Cross-site scripting</a> and <a href="/wiki/Cross-site_request_forgery" title="Cross-site request forgery">Cross-site request forgery</a></div>
<p>A common JavaScript-related security problem is <a href="/wiki/Cross-site_scripting" title="Cross-site scripting">cross-site scripting</a> (XSS), a violation of the <a href="/wiki/Same-origin_policy" title="Same-origin policy">same-origin policy</a>. XSS vulnerabilities occur when an attacker is able to cause a target Web site, such as an online banking website, to include a malicious script in the webpage presented to a victim. The script in this example can then access the banking application with the privileges of the victim, potentially disclosing secret information or transferring money without the victim's authorization. A solution to XSS vulnerabilities is to use <i>HTML escaping</i> whenever displaying untrusted data.
</p><p>Some browsers include partial protection against <i>reflected</i> XSS attacks, in which the attacker provides a URL including malicious script. However, even users of those browsers are vulnerable to other XSS attacks, such as those where the malicious code is stored in a database. Only correct design of Web applications on the server side can fully prevent XSS.
</p><p>XSS vulnerabilities can also occur because of implementation mistakes by browser authors.<sup id="cite_ref-71" class="reference"><a href="#cite_note-71">&#91;71&#93;</a></sup>
</p><p>Another cross-site vulnerability is <a href="/wiki/Cross-site_request_forgery" title="Cross-site request forgery">cross-site request forgery</a> (CSRF). In CSRF, code on an attacker's site tricks the victim's browser into taking actions the user did not intend at a target site (like transferring money at a bank). When target sites rely solely on cookies for request authentication, requests originating from code on the attacker's site can carry the same valid login credentials of the initiating user. In general, the solution to CSRF is to require an authentication value in a hidden form field, and not only in the cookies, to authenticate any request that might have lasting effects. Checking the HTTP Referrer header can also help.
</p><p>"JavaScript hijacking" is a type of CSRF attack in which a <code>&lt;script&gt;</code> tag on an attacker's site exploits a page on the victim's site that returns private information such as <a href="/wiki/JSON" title="JSON">JSON</a> or JavaScript. Possible solutions include:
</p>
<ul><li>requiring an authentication token in the <a href="/wiki/POST_(HTTP)" title="POST (HTTP)">POST</a> and <a href="/wiki/GET_(HTTP)" class="mw-redirect" title="GET (HTTP)">GET</a> parameters for any response that returns private information.</li></ul>
<h3><span class="mw-headline" id="Misplaced_trust_in_the_client">Misplaced trust in the client</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=26" title="Edit section: Misplaced trust in the client">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>Developers of client-server applications must recognize that untrusted clients may be under the control of attackers. The application author cannot assume that their JavaScript code will run as intended (or at all) because any secret embedded in the code could be extracted by a determined adversary. Some implications are:
</p>
<ul><li>Web site authors cannot perfectly conceal how their JavaScript operates because the raw source code must be sent to the client. The code can be <a href="/wiki/Obfuscated_code" class="mw-redirect" title="Obfuscated code">obfuscated</a>, but obfuscation can be reverse-engineered.</li>
<li>JavaScript form validation only provides convenience for users, not security. If a site verifies that the user agreed to its terms of service, or filters invalid characters out of fields that should only contain numbers, it must do so on the server, not only the client.</li>
<li>Scripts can be selectively disabled, so JavaScript cannot be relied on to prevent operations such as right-clicking on an image to save it.<sup id="cite_ref-72" class="reference"><a href="#cite_note-72">&#91;72&#93;</a></sup></li>
<li>It is considered very bad practice to embed sensitive information such as passwords in JavaScript because it can be extracted by an attacker.<sup id="cite_ref-73" class="reference"><a href="#cite_note-73">&#91;73&#93;</a></sup></li></ul>
<h3><span class="mw-headline" id="Misplaced_trust_in_developers">Misplaced trust in developers</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=27" title="Edit section: Misplaced trust in developers">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>Package management systems such as <a href="/wiki/Npm_(software)" title="Npm (software)">npm</a> and Bower are popular with JavaScript developers. Such systems allow a developer to easily manage their program's dependencies upon other developer's program libraries. Developers trust that the maintainers of the libraries will keep them secure and up to date, but that is not always the case. A vulnerability has emerged because of this blind trust. Relied-upon libraries can have new releases that cause bugs or vulnerabilities to appear in all programs that rely upon the libraries. Inversely, a library can go unpatched with known vulnerabilities out in the wild. In a study done looking over a sample of 133k websites, researchers found 37% of the websites included a library with at least one known vulnerability.<sup id="cite_ref-jslibs_74-0" class="reference"><a href="#cite_note-jslibs-74">&#91;74&#93;</a></sup> "The median lag between the oldest library version used on each website and the newest available version of that library is 1,177 days in ALEXA, and development of some libraries still in active use ceased years ago."<sup id="cite_ref-jslibs_74-1" class="reference"><a href="#cite_note-jslibs-74">&#91;74&#93;</a></sup> Another possibility is that the maintainer of a library may remove the library entirely. This occurred in March 2016 when Azer Koçulu removed his repository from <a href="/wiki/Npm_(software)" title="Npm (software)">npm</a>. This caused all tens of thousands of programs and websites depending upon his libraries to break.<sup id="cite_ref-75" class="reference"><a href="#cite_note-75">&#91;75&#93;</a></sup><sup id="cite_ref-76" class="reference"><a href="#cite_note-76">&#91;76&#93;</a></sup>
</p>
<h3><span class="mw-headline" id="Browser_and_plugin_coding_errors">Browser and plugin coding errors</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=28" title="Edit section: Browser and plugin coding errors">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>JavaScript provides an interface to a wide range of browser capabilities, some of which may have flaws such as <a href="/wiki/Buffer_overflow" title="Buffer overflow">buffer overflows</a>. These flaws can allow attackers to write scripts that would run any code they wish on the user's system. This code is not by any means limited to another JavaScript application. For example, a buffer overrun exploit can allow an attacker to gain access to the operating system's <a href="/wiki/API" title="API">API</a> with superuser privileges.
</p><p>These flaws have affected major browsers including Firefox,<sup id="cite_ref-77" class="reference"><a href="#cite_note-77">&#91;77&#93;</a></sup> Internet Explorer,<sup id="cite_ref-78" class="reference"><a href="#cite_note-78">&#91;78&#93;</a></sup> and Safari.<sup id="cite_ref-79" class="reference"><a href="#cite_note-79">&#91;79&#93;</a></sup>
</p><p>Plugins, such as video players, <a href="/wiki/Adobe_Flash#Flash_client_security" title="Adobe Flash">Adobe Flash</a>, and the wide range of <a href="/wiki/ActiveX" title="ActiveX">ActiveX</a> controls enabled by default in Microsoft Internet Explorer, may also have flaws exploitable via JavaScript (such flaws have been exploited in the past).<sup id="cite_ref-80" class="reference"><a href="#cite_note-80">&#91;80&#93;</a></sup><sup id="cite_ref-81" class="reference"><a href="#cite_note-81">&#91;81&#93;</a></sup>
</p><p>In Windows Vista, Microsoft has attempted to contain the risks of bugs such as buffer overflows by running the Internet Explorer process with limited privileges.<sup id="cite_ref-82" class="reference"><a href="#cite_note-82">&#91;82&#93;</a></sup> <a href="/wiki/Google_Chrome" title="Google Chrome">Google Chrome</a> similarly confines its page renderers to their own "sandbox".
</p>
<h3><span class="mw-headline" id="Sandbox_implementation_errors">Sandbox implementation errors</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=29" title="Edit section: Sandbox implementation errors">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>Web browsers are capable of running JavaScript outside the sandbox, with the privileges necessary to, for example, create or delete files. Such privileges are not intended to be granted to code from the Web.
</p><p>Incorrectly granting privileges to JavaScript from the Web has played a role in vulnerabilities in both Internet Explorer<sup id="cite_ref-83" class="reference"><a href="#cite_note-83">&#91;83&#93;</a></sup> and Firefox.<sup id="cite_ref-84" class="reference"><a href="#cite_note-84">&#91;84&#93;</a></sup> In Windows XP Service Pack 2, Microsoft demoted JScript's privileges in Internet Explorer.<sup id="cite_ref-85" class="reference"><a href="#cite_note-85">&#91;85&#93;</a></sup>
</p><p><a href="/wiki/Microsoft_Windows" title="Microsoft Windows">Microsoft Windows</a> allows JavaScript source files on a computer's hard drive to be launched as general-purpose, non-sandboxed programs (see: <a href="/wiki/Windows_Script_Host" title="Windows Script Host">Windows Script Host</a>). This makes JavaScript (like <a href="/wiki/VBScript" title="VBScript">VBScript</a>) a theoretically viable vector for a <a href="/wiki/Trojan_horse_(computing)" title="Trojan horse (computing)">Trojan horse</a>, although JavaScript Trojan horses are uncommon in practice.<sup id="cite_ref-86" class="reference"><a href="#cite_note-86">&#91;86&#93;</a></sup><sup class="noprint Inline-Template" style="white-space:nowrap;">&#91;<i><a href="/wiki/Wikipedia:Verifiability" title="Wikipedia:Verifiability"><span title="The material near this tag failed verification of its source citation(s). (March 2017)">failed verification</span></a></i>&#93;</sup>
</p>
<h3><span class="mw-headline" id="Hardware_vulnerabilities">Hardware vulnerabilities</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=30" title="Edit section: Hardware vulnerabilities">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>In 2015, a JavaScript-based proof-of-concept implementation of a <a href="/wiki/Rowhammer" class="mw-redirect" title="Rowhammer">rowhammer</a> attack was described in a paper by security researchers.<sup id="cite_ref-87" class="reference"><a href="#cite_note-87">&#91;87&#93;</a></sup><sup id="cite_ref-88" class="reference"><a href="#cite_note-88">&#91;88&#93;</a></sup><sup id="cite_ref-89" class="reference"><a href="#cite_note-89">&#91;89&#93;</a></sup><sup id="cite_ref-90" class="reference"><a href="#cite_note-90">&#91;90&#93;</a></sup>
</p><p>In 2017, a JavaScript-based attack via browser was demonstrated that could bypass <a href="/wiki/Address_space_layout_randomization" title="Address space layout randomization">ASLR</a>. It's called "ASLR⊕Cache" or AnC.<sup id="cite_ref-91" class="reference"><a href="#cite_note-91">&#91;91&#93;</a></sup><sup id="cite_ref-92" class="reference"><a href="#cite_note-92">&#91;92&#93;</a></sup>
</p><p>In 2018, the paper that announced the <a href="/wiki/Spectre_(security_vulnerability)" title="Spectre (security vulnerability)">Spectre</a> attacks against Speculative Execution in Intel and other processors included a JavaScript implementation.<sup id="cite_ref-93" class="reference"><a href="#cite_note-93">&#91;93&#93;</a></sup>
</p>
<h2><span class="mw-headline" id="Development_tools">Development tools</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=31" title="Edit section: Development tools">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<p>Important tools have evolved with the language.
</p>
<ul><li>Every major web browser has built-in <a href="/wiki/Web_development_tools" title="Web development tools">web development tools</a>, including a JavaScript <a href="/wiki/Debugger" title="Debugger">debugger</a>.</li>
<li><a href="/wiki/Static_program_analysis" title="Static program analysis">Static program analysis</a> tools, such as <a href="/wiki/ESLint" title="ESLint">ESLint</a> and <a href="/wiki/JSLint" title="JSLint">JSLint</a>, scan JavaScript code for conformance to a set of standards and guidelines.</li>
<li>Some browsers have built-in <a href="/wiki/Profiling_(computer_programming)" title="Profiling (computer programming)">profilers</a>. Stand-alone profiling libraries have also been created, such as benchmark.js and jsbench.<sup id="cite_ref-94" class="reference"><a href="#cite_note-94">&#91;94&#93;</a></sup><sup id="cite_ref-auto1_95-0" class="reference"><a href="#cite_note-auto1-95">&#91;95&#93;</a></sup></li>
<li>Many <a href="/wiki/Text_editor" title="Text editor">text editors</a> have syntax highlighting support for JavaScript code.</li></ul>
<h2><span class="mw-headline" id="Related_technologies">Related technologies</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=32" title="Edit section: Related technologies">edit</a><span class="mw-editsection-bracket">]</span></span></h2>
<h3><span class="mw-headline" id="Java">Java</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=33" title="Edit section: Java">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>A common misconception is that JavaScript is similar or closely related to <a href="/wiki/Java_(programming_language)" title="Java (programming language)">Java</a>. It is true that both have a C-like syntax (the C language being their most immediate common ancestor language). They also are both typically <a href="/wiki/Sandbox_(computer_security)" title="Sandbox (computer security)">sandboxed</a> (when used inside a browser), and JavaScript was designed with Java's syntax and standard library in mind. In particular, all Java keywords were reserved in original JavaScript, JavaScript's standard library follows Java's naming conventions, and JavaScript's <code class="mw-highlight mw-highlight-lang-javascript mw-content-ltr" id="" style="" dir="ltr"><span class="nb">Math</span></code> and <code class="mw-highlight mw-highlight-lang-javascript mw-content-ltr" id="" style="" dir="ltr"><span class="nb">Date</span></code> objects are based on classes from Java 1.0,<sup id="cite_ref-popularity_96-0" class="reference"><a href="#cite_note-popularity-96">&#91;96&#93;</a></sup> but the similarities end there.
</p><p><a href="/wiki/Java_(programming_language)" title="Java (programming language)">Java</a> and JavaScript both first appeared in 1995, but Java was developed by <a href="/wiki/James_Gosling" title="James Gosling">James Gosling</a> of Sun Microsystems, and JavaScript by <a href="/wiki/Brendan_Eich" title="Brendan Eich">Brendan Eich</a> of Netscape Communications.
</p><p>The differences between the two languages are more prominent than their similarities. Java has <a href="/wiki/Static_typing" class="mw-redirect" title="Static typing">static typing</a>, while JavaScript's typing is <a href="/wiki/Dynamic_typing" class="mw-redirect" title="Dynamic typing">dynamic</a>. Java is loaded from compiled bytecode, while JavaScript is loaded as human-readable source code. Java's objects are <a href="/wiki/Class-based_programming" title="Class-based programming">class-based</a>, while JavaScript's are <a href="/wiki/Prototype-based_programming" title="Prototype-based programming">prototype-based</a>. Finally, Java did not support functional programming until Java 8, while JavaScript has done so from the beginning, being influenced by <a href="/wiki/Scheme_(programming_language)" title="Scheme (programming language)">Scheme</a>.
</p>
<h3><span class="mw-headline" id="JSON">JSON</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=34" title="Edit section: JSON">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p><a href="/wiki/JSON" title="JSON">JSON</a>, or JavaScript Object Notation, is a general-purpose data interchange format that is defined as a subset of JavaScript's object literal syntax.
</p>
<h3><span class="mw-headline" id="WebAssembly">WebAssembly</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=35" title="Edit section: WebAssembly">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>Since 2017, web browsers have supported <a href="/wiki/WebAssembly" title="WebAssembly">WebAssembly</a>, a binary format that enables a <a href="/wiki/JavaScript_engine" title="JavaScript engine">JavaScript engine</a> to execute performance-critical portions of <a href="/wiki/Web_page" title="Web page">web page</a> scripts close to native speed.<sup id="cite_ref-97" class="reference"><a href="#cite_note-97">&#91;97&#93;</a></sup> WebAssembly code runs in the same <a href="/wiki/Sandbox_(computer_security)" title="Sandbox (computer security)">sandbox</a> as regular JavaScript code.
</p><p><a href="/wiki/Asm.js" title="Asm.js">asm.js</a> is a subset of JavaScript that served as the forerunner of WebAssembly.<sup id="cite_ref-98" class="reference"><a href="#cite_note-98">&#91;98&#93;</a></sup>
</p><p><span class="anchor" id="transpilers"></span>
</p>
<h3><span class="mw-headline" id="Transpilers">Transpilers</span><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=JavaScript&amp;action=edit&amp;section=36" title="Edit section: Transpilers">edit</a><span class="mw-editsection-bracket">]</span></span></h3>
<p>JavaScript is the dominant client-side language of the Web, and many websites are script-heavy. Thus <a href="/wiki/Transpiler" class="mw-redirect" title="Transpiler">transpilers</a> have been created to convert code written in other languages, which can aid the development process.<sup id="cite_ref-transpilers_29-1" class="reference"><a href="#cite_note-transpilers-29">&#91;29&#93;</a></sup>
</p>
`;
