$target = '<li><a href="../services.html">Services</a></li>'
$replacement = @'
<li class="ta-has-dropdown">
              <a href="../services.html">Services <i class="fa-solid fa-chevron-down ta-dropdown-arrow"></i></a>
              <ul class="ta-dropdown-menu">
                <li><a href="../services/custom-software-development.html"><i class="fa-solid fa-code"></i> Custom Software Development</a></li>
                <li><a href="../services/website-development.html"><i class="fa-solid fa-globe"></i> Website Development</a></li>
                <li><a href="../services/mobile-app-development.html"><i class="fa-solid fa-mobile-screen"></i> Mobile App Development</a></li>
                <li><a href="../services/ecommerce-development.html"><i class="fa-solid fa-cart-shopping"></i> E-commerce Development</a></li>
                <li><a href="../services/saas-product-development.html"><i class="fa-solid fa-cloud-arrow-up"></i> SaaS Product Development</a></li>
                <li><a href="../services/cloud-services.html"><i class="fa-solid fa-cloud"></i> Cloud &amp; DevOps Services</a></li>
                <li><a href="../services/ai-machine-learning.html"><i class="fa-solid fa-brain"></i> AI &amp; Machine Learning</a></li>
                <li><a href="../services/ui-ux-design.html"><i class="fa-solid fa-pen-nib"></i> UI/UX &amp; Branding Design</a></li>
                <li><a href="../services/cybersecurity-services.html"><i class="fa-solid fa-shield-halved"></i> Cybersecurity Services</a></li>
                <li><a href="../services/digital-marketing.html"><i class="fa-solid fa-chart-line"></i> Digital Marketing &amp; SEO</a></li>
                <li><a href="../services.html" style="font-weight:700;color:var(--ta-accent);border-top:1px solid var(--ta-border);margin-top:4px;padding-top:10px;"><i class="fa-solid fa-arrow-right"></i> View All 25 Services</a></li>
              </ul>
            </li>
'@

Get-ChildItem -Path "industries" -Filter *.html | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName, [System.Text.Encoding]::UTF8)
    if ($content.Contains($target)) {
        $content = $content.Replace($target, $replacement)
        [System.IO.File]::WriteAllText($_.FullName, $content, [System.Text.Encoding]::UTF8)
        Write-Output "Updated $($_.Name)"
    } else {
        Write-Output "Target not found in $($_.Name)"
    }
}
