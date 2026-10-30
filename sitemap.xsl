<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap | Sai Silver Dum Biryani</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&amp;family=Inter:wght@400;600;700;800&amp;display=swap" rel="stylesheet" />
        <style type="text/css">
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            background-color: #120c0a;
            background-image: 
              radial-gradient(circle at 20% 20%, rgba(255, 123, 37, 0.15), transparent 40%),
              radial-gradient(circle at 80% 80%, rgba(224, 36, 56, 0.12), transparent 45%);
            color: #ffffff;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            min-height: 100vh;
            padding: 40px 20px 80px;
          }
          .container {
            max-width: 980px;
            margin: 0 auto;
          }
          .header {
            margin-bottom: 32px;
            text-align: center;
          }
          .brand-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 18px;
            border-radius: 999px;
            background: rgba(255, 123, 37, 0.15);
            border: 1px solid rgba(255, 177, 80, 0.35);
            color: #ffb150;
            font-size: 0.8rem;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-bottom: 16px;
          }
          .brand-badge::before {
            content: "";
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #25d366;
            box-shadow: 0 0 10px #25d366;
          }
          h1 {
            font-family: 'Cormorant Garamond', Georgia, serif;
            font-size: clamp(2.4rem, 5vw, 3.6rem);
            font-weight: 800;
            color: #ffffff;
            line-height: 1.1;
            margin-bottom: 12px;
            text-shadow: 0 3px 18px rgba(0, 0, 0, 0.9);
          }
          p.lead {
            color: rgba(255, 255, 255, 0.85);
            font-size: 1.05rem;
            max-width: 680px;
            margin: 0 auto 24px;
          }
          .stats-bar {
            display: flex;
            justify-content: center;
            gap: 16px;
            flex-wrap: wrap;
            margin-bottom: 32px;
          }
          .stat-pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 20px;
            border-radius: 999px;
            background: rgba(18, 12, 10, 0.65);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.20);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
            font-weight: 700;
          }
          .stat-value {
            color: #ffb150;
            font-weight: 900;
          }
          .sitemap-card {
            background: rgba(18, 12, 10, 0.62);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            border: 1px solid rgba(255, 255, 255, 0.20);
            border-radius: 32px;
            box-shadow: 0 18px 50px rgba(0, 0, 0, 0.5);
            overflow: hidden;
            padding: 8px;
          }
          table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0 8px;
          }
          th {
            text-align: left;
            padding: 16px 20px;
            color: #ffb150;
            font-size: 0.78rem;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          }
          td {
            padding: 14px 20px;
            background: rgba(255, 255, 255, 0.04);
            color: #ffffff;
            font-size: 0.92rem;
            transition: all 0.2s ease;
          }
          tr td:first-child {
            border-top-left-radius: 16px;
            border-bottom-left-radius: 16px;
          }
          tr td:last-child {
            border-top-right-radius: 16px;
            border-bottom-right-radius: 16px;
          }
          tr:hover td {
            background: rgba(255, 123, 37, 0.16);
          }
          .url-link {
            color: #ffffff;
            text-decoration: none;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: color 0.2s ease;
          }
          .url-link:hover {
            color: #ffb150;
          }
          .priority-badge {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 999px;
            background: rgba(255, 123, 37, 0.25);
            color: #ffb150;
            font-size: 0.76rem;
            font-weight: 800;
            border: 1px solid rgba(255, 177, 80, 0.35);
          }
          .freq-badge {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.85);
            font-size: 0.76rem;
            font-weight: 600;
          }
          .date-cell {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.84rem;
            font-variant-numeric: tabular-nums;
          }
          .footer-note {
            margin-top: 36px;
            text-align: center;
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.86rem;
          }
          .footer-actions {
            margin-top: 24px;
            display: flex;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;
          }
          .action-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 22px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.12);
            border: 1px solid rgba(255, 255, 255, 0.25);
            color: #ffffff;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.2s ease;
          }
          .action-btn:hover {
            background: #ff7b25;
            border-color: #ff7b25;
            color: #ffffff;
            transform: translateY(-2px);
          }
          .action-btn--primary {
            background: linear-gradient(135deg, #ff7b25, #e02438);
            border-color: transparent;
            box-shadow: 0 4px 14px rgba(255, 123, 37, 0.45);
          }
          @media (max-width: 640px) {
            th:nth-child(2), td:nth-child(2),
            th:nth-child(3), td:nth-child(3) {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header class="header">
            <div class="brand-badge">Sai Silver Dum Biryani &bull; Auto Nagar, Vijayawada</div>
            <h1>Interactive XML Sitemap</h1>
            <p class="lead">
              Structured protocol index formatted for search engines (Google, Bing, Yahoo) and styled for human browser inspection.
            </p>
            <div class="stats-bar">
              <div class="stat-pill">
                <span>Total Indexed URLs:</span>
                <span class="stat-value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
              </div>
              <div class="stat-pill">
                <span>Protocol:</span>
                <span class="stat-value">Sitemaps 0.9</span>
              </div>
              <div class="stat-pill">
                <span>Status:</span>
                <span class="stat-value" style="color:#25d366;">Live Verified</span>
              </div>
            </div>
          </header>

          <main class="sitemap-card">
            <table>
              <thead>
                <tr>
                  <th style="width: 50%;">Webpage URL</th>
                  <th style="width: 14%;">Priority</th>
                  <th style="width: 16%;">Change Frequency</th>
                  <th style="width: 20%;">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}" class="url-link">
                        <xsl:value-of select="sitemap:loc"/>
                        <span>&nearr;</span>
                      </a>
                    </td>
                    <td>
                      <span class="priority-badge">
                        <xsl:value-of select="sitemap:priority"/>
                      </span>
                    </td>
                    <td>
                      <span class="freq-badge">
                        <xsl:value-of select="sitemap:changefreq"/>
                      </span>
                    </td>
                    <td class="date-cell">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </main>

          <footer class="footer-note">
            <p>Generated for <a href="https://saisilverdumbiryani.com" style="color:#ffb150;text-decoration:none;">saisilverdumbiryani.com</a> &bull; Handi Dum Heritage &bull; Vijayawada, AP</p>
            <div class="footer-actions">
              <a href="./index.html" class="action-btn action-btn--primary">Visit Home Page</a>
              <a href="./menu-book.html" class="action-btn">Open Menu Book</a>
              <a href="https://wa.me/918919443535" class="action-btn" target="_blank" rel="noreferrer">WhatsApp Order (89194 43535)</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
