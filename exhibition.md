---
layout: default
title: Exhibition
excerpt: A two-day showcase of the latest technologies, services and solutions safeguarding the security and safety of European air transport.
permalink: /exhibition/
---

<div class="temp-content-top homepage-jumbotron">
    <div class="container container-md">
        <div class="row">
            <div class="col-sm-8">
                <main>
                    <h1 class="margin-top-none"><strong>A showcase of leading security solutions</strong></h1>
                    <p>For the benefit of the leading airport security and safety executives in attendance, the Special Summit will host a two-day showcase of the latest technologies, services and solutions safeguarding the security and safety of air transport.</p>
                    <br />
                    <h4><strong>This event presents an excellent platform for vendors in the areas of:</strong></h4>
                    <div class="row">
                        <div class="col-sm-6">
                            <ul>
                                <li>Access Control</li>
                                <li>Baggage and passenger screening</li>
                                <li>Biometric security</li>
                                <li>Cargo screening</li>
                                <li>Crisis management</li>
                                <li>Cyber security</li>
                                <li>Document verification</li>
                            </ul>
                        </div>
                        <div class="col-sm-6">
                            <ul>
                                <li>Explosive detection and containment</li>
                                <li>Landside security</li>
                                <li>Perimeter security</li>
                                <li>Recruitment, training and HR</li>
                                <li>Security consultancy</li>
                                <li>Surveillance and tracking</li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
            <div class="col-sm-4">
                <aside class="aside">
                    {% include contacts/julian.html %}
                    <div class="margin-top-primary">
                        <p>Exhibition and sponsorship opportunities are still available:
                            <br><a href="{{ site.baseurl }}{% link sponsorship.md %}"><strong>click here to learn more</strong></a></p>
                    </div>
                    {% include sidebar-cta.html %}
                </aside>
            </div>
        </div>
    </div>
</div>
{% include gallery-exhibition.html %}
<section class="section">
    <div class="container container-md">
        <!-- Example row of columns -->
        <hr class="hr-lg">
        <div class="row bs-columns-clearfix">
            <div class="col-md-3">
                <h2 class="margin-top-none">Floor Plan</h2>
            </div>
            <div class="col-md-9">
                <img src="{{ '/assets/img/brussels-2016-security-floorplan.png' | relative_url }}" alt="" class="img-responsive">
                <a href="{{ '/assets/img/brussels-2016-security-floorplan.png' | relative_url }}" role="button" class="btn btn-md btn-block text-wrap btn-primary" download>Download Floor Plan</a>
            </div>
        </div>
    </div>
</section>
<section class="section">
  <div class="container container-md">
    <hr class="hr-lg">
    <div class="row bs-columns-clearfix">
      {% include exhibitors.html %}
    </div>
  </div>
</section>