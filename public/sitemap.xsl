<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="id">
      <head>
        <title>XML Sitemap — Livingku.ID</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #1e293b;
            background-color: #f8fafc;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 1050px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #091e2b 0%, #0e3b43 100%);
            color: #ffffff;
            padding: 30px;
          }
          .header h1 {
            margin: 0 0 8px 0;
            font-size: 24px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .header p {
            margin: 0;
            font-size: 14px;
            color: #94a3b8;
            line-height: 1.6;
          }
          .header a {
            color: #2dd4bf;
            text-decoration: none;
            font-weight: 600;
          }
          .stats {
            background: #f1f5f9;
            padding: 14px 30px;
            font-size: 13px;
            color: #475569;
            border-bottom: 1px solid #e2e8f0;
            display: flex;
            justify-content: space-between;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            font-size: 13px;
          }
          th {
            background-color: #f8fafc;
            color: #475569;
            padding: 14px 20px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-size: 11px;
            border-bottom: 2px solid #e2e8f0;
          }
          td {
            padding: 14px 20px;
            border-bottom: 1px solid #f1f5f9;
            vertical-align: middle;
          }
          tr:hover td {
            background-color: #f8fafc;
          }
          .url-link {
            color: #0d9488;
            font-weight: 600;
            text-decoration: none;
            word-break: break-all;
          }
          .url-link:hover {
            text-decoration: underline;
            color: #0f766e;
          }
          .badge-priority {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 700;
            background: #e0f2fe;
            color: #0369a1;
          }
          .badge-high {
            background: #dcfce7;
            color: #15803d;
          }
          .badge-freq {
            text-transform: capitalize;
            color: #64748b;
          }
          .footer {
            padding: 20px 30px;
            font-size: 12px;
            color: #94a3b8;
            text-align: center;
            background: #fafafa;
            border-top: 1px solid #f1f5f9;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>XML Sitemap — Livingku.ID</h1>
            <p>
              Ini adalah XML Sitemap resmi dari <a href="https://livingku.id/">Livingku.ID</a> untuk membantu mesin pencari seperti Google dan Bing mengindeks struktur halaman secara optimal.
            </p>
          </div>
          <div class="stats">
            <span>Total URL: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> halaman</span>
            <span>Format: Standard XML Sitemaps Protocol 0.9</span>
          </div>
          <table>
            <thead>
              <tr>
                <th style="width: 50%;">URL Halaman</th>
                <th style="width: 15%;">Prioritas</th>
                <th style="width: 15%;">Frekuensi</th>
                <th style="width: 20%;">Terakhir Diperbarui</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a class="url-link">
                      <xsl:attribute name="href">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:attribute>
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="sitemap:priority &gt;= 0.9">
                        <span class="badge-priority badge-high"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="badge-priority"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td class="badge-freq">
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td style="color: #64748b; font-family: monospace;">
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          <div class="footer">
            &#169; 2026 PT Livingku.ID Konsultama &amp; Konstruksi Indonesia. All rights reserved.
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
