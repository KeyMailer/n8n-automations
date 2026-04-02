export type AutomationStatus = "active" | "inactive";

export interface Automation {
  id: string;
  name: string;
  status: AutomationStatus;
  trigger: string;
  triggerLink: string;
  document: string;
  documentLink: string;
  wikiLink: string;
  hasKeys: boolean;
  tools: string[];
}

export const automations: Automation[] = [
  {
    id: "YoXU6SNoq1I7n4CY",
    name: "Social Booking",
    status: "active",
    trigger: "Webhook",
    triggerLink: "https://neightn-booking.indie-demo.com/social-booking",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/1d2OFRNY6hNo_xvgCsnDQiNJJButSuVLlgzdOA8r3Psg/edit?gid=0#gid=0",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/Social_Booking",
    hasKeys: true,
    tools: ["Webhook", "Apps Script", "Google Sheet"],
  },
  {
    id: "TgnpcbIeuchbLqrL",
    name: "Newsletter Booking",
    status: "active",
    trigger: "Webhook",
    triggerLink: "https://neightn-booking.indie-demo.com/newsletter-booking",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/1DnlRKLkrYxVK5uNoF7I9DpkQf0hIz_Aec3E3CDdNvVU/edit?gid=450992887#gid=450992887",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/Newsletter_Booking",
    hasKeys: true,
    tools: ["Webhook", "Apps Script", "Google Sheet", "Slack"],
  },
  {
    id: "posYxHcAHOobSFYn",
    name: "Games Around The World",
    status: "active",
    trigger: "Manual",
    triggerLink: "",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/1mQR4Yo3UQVY_FpgehhY7yo9zz_I8M3gjwmcpAglRkkE/edit?gid=0#gid=0",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/Games_Around_The_World",
    hasKeys: false,
    tools: ["Puppeteer", "Google Sheet"],
  },
  {
    id: "m1sxvWMsizku4KH1",
    name: "Event Promo",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/c1e81cd2-5bc4-4ed5-b83b-7d4652353d7d",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/11YQ20YA4Khsb6l60nHGYDe9aSJJ01S8LJ26UlSY7wtY/edit?gid=0#gid=0",
    wikiLink: "https://redmine.lifejak.com/projects/keymailer/wiki/Event_Promo",
    hasKeys: false,
    tools: ["Steam", "Madmin", "Google Sheet"],
  },
  {
    id: "KS3gdPQY1bA0lBRP",
    name: "Recent Release Game",

    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/e7d07e11-48a7-4291-b7c4-58e02a867a4d",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/1apzXbgiOGMUsJIpnfvH-7c2qwJnVWqBedIcE7e7VVtM/edit?gid=0#gid=0",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/Recent_Release_Game",
    hasKeys: false,
    tools: ["Madmin", "Puppeteer", "Steam", "Google Sheet"],
  },
  {
    id: "HeB6iFwUdAPy77Ea",
    name: "PGC Events - Intercom",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/050f9844-3843-40ed-9dec-c288f94e6506",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/1OnIEEPkAKocIF7mUMTQb-OWoWgwkTkxbbYQdm5xYYlo/edit?gid=563145277#gid=563145277",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/PGC_Events_-_Intercom",
    hasKeys: false,
    tools: ["Intercom", "Google Sheet"],
  },
  {
    id: "7TGQeYNu0PpP0iGA",
    name: "PGC Events - ActiveCampaign",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/4f514fbf-fba3-4b09-b7c0-578599872d81",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/1OnIEEPkAKocIF7mUMTQb-OWoWgwkTkxbbYQdm5xYYlo/edit?gid=563145277#gid=563145277",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/PGC_Events_-_ActiveCampaign",
    hasKeys: false,
    tools: ["ActiveCampaign", "Google Sheet"],
  },
  {
    id: "hbJQVB0Z1SJVR9Ym",
    name: "Similarweb v2",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/55652452-a7ae-46c3-b437-4bd81206cdb7",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/18MR1ZohK-yZzKUCTU9VFD27607kdA_C6VdCS4afvqi4/edit?gid=0#gid=0",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/Similarweb_v2",
    hasKeys: false,
    tools: ["Similarweb API", "Google Sheet"],
  },
  {
    id: "vDQQJclc3AXrH7fi",
    name: "Similarweb v1",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/2aaf597c-b175-438e-b2d6-a6bcbbfc9504",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/13zGM11fO-TbN_ayA4tQ4oZmlWZZQ-jCC42kDjK1vhNU/edit?gid=0#gid=0",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/Similarweb_v1",
    hasKeys: false,
    tools: ["Similarweb API", "Google Sheet"],
  },
  {
    id: "Ea0zH2LzlEoPGmR8",
    name: "AL - New & New Lead",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/d362e9c0-fe60-46a2-9e55-f4106376397e",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/1tcH9p_Zx-4UlC3fpccLAjdCWNFlDaS_Hr5eueEv2aBA/edit?gid=0#gid=0",
    wikiLink: "https://redmine.lifejak.com/projects/keymailer/wiki/AutoLead",
    hasKeys: false,
    tools: ["Madmin", "Intercom", "ActiveCampaign", "Google Sheet"],
  },
  {
    id: "UvmzeCAdaJTfCQbo",
    name: "AL - New Steam Release",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/9e403b1c-2a40-435c-a290-2556ba930a7c",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/1t9jYjDAbIkXz1zGxd41DXJSaCgaBnqPZ7hlSF2d0Tos/edit?gid=0#gid=0",
    wikiLink: "https://redmine.lifejak.com/projects/keymailer/wiki/AutoLead",
    hasKeys: false,
    tools: ["Madmin", "Intercom", "ActiveCampaign", "Google Sheet"],
  },
  {
    id: "wpt0K77zlXSwJlZK",
    name: "AL - Reactivation Leadgen",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/f3872300-7ec6-44a6-85e9-f720738927b3",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/18BX6R492N903_GlhGMQtd54Ofbw1YO1t2C7glzRRXXg/edit?gid=0#gid=0",
    wikiLink: "https://redmine.lifejak.com/projects/keymailer/wiki/AutoLead",
    hasKeys: false,
    tools: ["Madmin", "Intercom", "ActiveCampaign", "Google Sheet"],
  },
  {
    id: "GmCiCm7KFOvq2O3Y",
    name: "AL - Leadgen - TBA",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/656cf243-8999-45ef-b178-ae322165231b",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/1kVe9Iyy4PL9LxCf8PzRzjdQ8XoEsU7P7qAdeVFCcLLU/edit?gid=0#gid=0",
    wikiLink: "https://redmine.lifejak.com/projects/keymailer/wiki/AutoLead",
    hasKeys: false,
    tools: ["Madmin", "Intercom", "ActiveCampaign", "Google Sheet"],
  },

  {
    id: "9Mki2Epwibq78qq8",
    name: "Lead Generation",
    status: "active",
    trigger: "Cron Schedule",
    triggerLink: "",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/183FnNcP4inwXqtFztFaekdsoghjI6-EXxPtra_SEgY4/edit?gid=1886736831#gid=1886736831",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/Lead_Generation",
    hasKeys: false,
    tools: ["Madmin", "Intercom", "ActiveCampaign", "Steam", "Google Sheet"],
  },

  {
    id: "BeQYDPBjaZUzXhSp",
    name: "Tiktok Comment Scraper",
    status: "inactive",
    trigger: "Manual",
    triggerLink: "",
    document: "",
    documentLink: "",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/Tiktok_Comment_Scraper",
    hasKeys: false,
    tools: ["Apify", "Google Sheet"],
  },
];
