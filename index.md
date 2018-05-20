---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<!-- Main jumbotron for a primary marketing message or call to action -->
  <div class="jumbotron homepage-jumbotron">
    <div class="container container-md">
      <div class="row">
        <div class="col-sm-8">
          <h1 class="margin-top-none"><strong>‘Delivering Safe, Efficient, and Secure Airports’</strong></h1>
          <p>An urgently-convened special summit of airports, security agencies and senior transport administrators called to safeguard airports against ongoing threat.</p>
          <p><a href="{% link register.md %}"><strong><u>Early bird rates end Friday 21st October 2016</u></strong></a></p>
        </div>
        <div class="col-sm-4 hidden-xs">
          <div class="latest-news-container">
            <div class="latest-news">
              <h6>Latest ACI SECURITY News</h6>
              <p><a href="http://www.aci-europe-events.com/emails/security-summit/2016/index1.html"><u>Why this Summit has been called</u></a></p>
              <p><a href="https://www.aci-europe.org/component/downloads/downloads/4745.html"><u>ACI EUROPE supports Belgium’s review of airport security measures <span style="font-size:11px;">(PDF)</span></u></a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="section hidden-xs">
    <div class="container container-md">
      <ul class="list-inline home-links small">
        <li><a href="{% link networking.md %}">Evening Networking</a></li>
        <li><a href="{% link plan-your-visit.md %}">Travel &amp; Accommodation</a></li>
        <li><a href="{% link sponsorship.md %}">Support &amp; Sponsorship</a></li>
        <li><a href="{% link contact.md %}">Get in touch</a></li>
        <li><a href="http://aci-europe-events.us1.list-manage1.com/subscribe?u=5b5b5e0ea5c4a5f3bcb9d1b8b&id=9f10b2b7e5">Sign up for updates</a></li>
      </ul>
      <div class="clearfix"></div>
      <hr class="margin-secondary">
    </div>
  </section>
  <section>
    <div class="container container-md">
      <div class="row">
        <div class="col-md-9">
          <h2 class="margin-bottom">CEO accounts of this year’s two major airport attacks</h2>
          <p>Case studies that you cannot hear anywhere else:</p>
        </div>
        <div class="col-md-3">
          <a href="{% link conference.md %}" role="button" class="btn btn-primary text-wrap margin-top-primary">View Conference Agenda</a>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-sm-6">
          <img src="{{ '/assets/img/home-arnaud-feist-brussels-726x407.jpg' | relative_url }}" alt="" class="img-responsive">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="media margin-none">
                <div class="media-body">
                  <h4 class="margin-none margin-top-secondary"><strong>Arnaud Feist</strong></h4>
                  <p class="small"><span class="small">Chief Executive Officer, Brussels Airport Company</span></p>
                </div>
                <div class="media-right">
                  <img class="media-object" src="{{ '/assets/img/companies/brussels-airport-400x210.png' | relative_url }}" alt="Brussels Airport" style="width:120px;">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <img src="{{ '/assets/img/home-sani-sener-tav-767x430.jpg' | relative_url }}" alt="" class="img-responsive">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="media margin-none">
                <div class="media-body">
                  <h4 class="margin-none margin-top-secondary"><strong>Dr Sani Şener</strong></h4>
                  <p class="small"><span class="small">CEO, TAV Istanbul Atatürk Airport</span></p>
                </div>
                <div class="media-right">
                  <img class="media-object" src="{{ '/assets/img/companies/tav-airports-400x210.png' | relative_url }}" alt="Brussels Airport" style="width:120px;">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {% comment %}{% include section-sponsors.html %}{% endcomment %}
  <section class="section">
    <div class="container container-md">
      <!-- Example row of columns -->
      <hr class="hr-lg">
      <div class="row bs-columns-clearfix">
          <div class="col-md-3">
              <h3 class="margin-none"><span class="hero-title">40+</span> <br>Speakers Including:</h3>
              <a href="/security-summit/conference/" role="button" class="btn btn-primary text-wrap margin-top-primary">View Conference Agenda</a>
          </div>
          <div class="col-md-9">
              <div class="row bs-columns-clearfix">
                  {% include speakers.html %}
              </div>
          </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container container-md">
      <main>
        <div class="row home-links">
          <div class="col-sm-6">
            <div class="panel panel-primary">
              <div class="panel-body">
                <h3 class="margin-top-none"><strong><a href="http://aci-europe-events.us1.list-manage1.com/subscribe?u=5b5b5e0ea5c4a5f3bcb9d1b8b&id=9f10b2b7e5"><u>Sign up for updates</u></a></strong></h3>
                <p class="margin-none">Receive event updates as they are announced</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="panel panel-primary">
              <div class="panel-body">
                <h3 class="margin-top-none"><strong><a href="/security-summit/register/"><u>Register</u></a></strong></h3>
                <p class="margin-none">Secure your place at Early Booking rates (ends 21st Oct)</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>