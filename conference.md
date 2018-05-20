---
layout: default
title: Conference
excerpt: Security administrators from European airports present case studies from recent and historical events, alongside the leading security technology companies.
permalink: /conference/
---

<!-- Main jumbotron for a primary marketing message or call to action -->
<div class="temp-content-top homepage-jumbotron">
<div class="container container-md">
  <div class="row">
    <div class="col-sm-8">
      <main>
        <h1 class="margin-top-none"><strong>Conference Agenda</strong></h1>
        <p>As a result of this year’s heightened security situation in Europe and beyond, underlined by the attacks on the airports in Brussels and Istanbul, ACI EUROPE and ACI Asia-Pacific have decided to stage a special “Security &amp; Crisis Management Special Summit” which will be held over two days in central Brussels, 22-23 November, hosted by Brussels Airport.</p>
        <p>The event will bring together the most senior security, transport and counter-terrorism officials and experts in the capital of Europe. It will include case studies from the most recent and historical security events, in-depth analysis on current terrorist threats, and presentations from a powerful selection of top airport security experts and the leading security technology companies.</p>
        <p><a href="#"><strong>Subscribe to the event newsletter</strong></a> to receive event updates.</p>
      </main>      
    </div>
    <div class="col-sm-4">
      <aside class="aside">
        {% include contacts/andrea.html %}
        {% include sidebar-cta.html %}
        <br>
        <p class="small"><strong class="text-primary">*</strong> Speaker Invited</p>
      </aside>
    </div>
  </div>
  <div id="agenda-anchor"></div>
</div>
</div>
<section class="section" id="agenda">
<div class="container container-md">
  <nav class="navbar navbar-default" id="nav-agenda" data-spy="affix">
    <div class="row">
      <div class="col-sm-3">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-agenda-collapse" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <span class="navbar-brand text-default">
            <strong id="day1-navbar-brand">Tuesday (Day 1)</strong>
            <strong id="day2-navbar-brand" style="display:none;">Wednesday (Day 2)</strong>
          </span>
        </div>
      </div>
      <div class="col-sm-9">
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="nav-agenda-collapse">
          <ul class="nav navbar-nav nav-agenda-tabs">
            <li role="presentation" class="active" data-tab="#day1"><a href="#day1" aria-controls="day1" role="tab" data-toggle="tab">22 November 2016</a></li>
            <li role="presentation" data-tab="#day2"><a href="#day2" aria-controls="day2" role="tab" data-toggle="tab">23 November 2016</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="" id="nav-agenda-expand" class="small text-light">+ expand all</a></li>
            <li><a href="" id="nav-agenda-collapse" class="small text-light">- collapse all</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div>
    </div>
    <hr class="hr-lg margin-none">
  </nav>
</div>
  <div class="container container-md" id="agenda-content">
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane active" id="day1">
        {% include conference/session-01-01-opening-session.html %}
        {% include conference/session-01-02-1st-ws.html %}
        {% include conference/session-01-03-2nd-ws.html %}
        {% include conference/session-01-04-2nd-ws.html %}
        {% include conference/session-01-05-networking.html %}
      </div>
      <div role="tabpanel" class="tab-pane" id="day2">
        {% include conference/session-02-01-3rd-ws.html %}
        {% include conference/session-02-02-4th-ws.html %}
        {% include conference/session-02-03-5th-ws.html %}
      </div>
    </div>
</div>
</section>

{% include gallery-conference.html %}