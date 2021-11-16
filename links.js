import Link from "next/link";

export function Links() {
  return <>
    <h2>Links</h2>
    <h3>Regular anchor tags</h3>
    <ul>
      <li><a href="/">/</a></li>
      <li><a href="/page2/">/page2/</a></li>
      <li><a href="/page.3/">/page.3/</a></li>
    </ul>
    <h3>Next link tags</h3>
    <ul>
      <li><Link href="/"><a>/</a></Link></li>
      <li><Link href="/page2/"><a>/page2/</a></Link></li>
      <li><Link href="/page.3/"><a>/page.3/</a> – link comes out as <code>/page.3</code></Link></li>
    </ul>
  </>;
}
